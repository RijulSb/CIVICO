"""Live dashboard analytics derived from persisted citizen submissions.

This service intentionally contains no constituency seed payload.  It aggregates
non-rejected, non-duplicate submissions and returns the camelCase contract used
by the current dashboard frontend.
"""

from __future__ import annotations

from datetime import datetime, timedelta, timezone
from typing import Any, Mapping

from sqlalchemy import text
from sqlalchemy.exc import ProgrammingError
from sqlalchemy.ext.asyncio import AsyncSession


from app.core.script_utils import sanitize_odia_text

VALID_PERIODS = {"7d": 7, "30d": 30, "90d": 90}


def _period_days(period: str) -> int:
    return VALID_PERIODS.get(period, VALID_PERIODS["30d"])


def _iso(value: Any) -> str:
    if isinstance(value, datetime):
        return value.astimezone(timezone.utc).isoformat()
    return str(value) if value is not None else ""


def _text_value(row: Mapping[str, Any], *keys: str) -> str:
    for key in keys:
        value = row.get(key)
        if value is not None and str(value).strip():
            return str(value).strip()
    return ""


def _theme_sql(alias: str = "s") -> str:
    """Return one canonical theme expression for all analytics queries."""
    return (
        f"COALESCE(NULLIF({alias}.category, ''), "
        f"NULLIF({alias}.extracted ->> 'issue_type', ''), "
        f"NULLIF({alias}.extracted ->> 'theme', ''), 'other')"
    )


def _base_filters(
    *,
    constituency: str,
    start: datetime,
    end: datetime | None = None,
    theme: str = "all",
    ward: str = "all",
    prefix: str = "",
) -> tuple[str, dict[str, Any]]:
    key = lambda name: f"{prefix}_{name}" if prefix else name
    if constituency in {"bhubaneswar", "khordha"}:
        clauses = [
            f"s.constituency IN (:{key('constituency')}, 'khordha', 'bhubaneswar')",
            "s.status NOT IN ('rejected', 'duplicate')",
            f"s.created_at >= :{key('start_at')}",
        ]

    else:
        clauses = [
            f"s.constituency = :{key('constituency')}",
            "s.status NOT IN ('rejected', 'duplicate')",
            f"s.created_at >= :{key('start_at')}",
        ]
    params: dict[str, Any] = {
        key("constituency"): constituency,
        key("start_at"): start,
    }

    if end is not None:
        clauses.append(f"s.created_at < :{key('end_at')}")
        params[key("end_at")] = end
    if theme != "all":
        clauses.append(f"({_theme_sql()}) = :{key('theme')}")
        params[key("theme")] = theme
    if ward != "all":
        clauses.append(f"LOWER(COALESCE(s.ward, '')) = LOWER(:{key('ward')})")
        params[key("ward")] = ward
    return " AND ".join(clauses), params


class AnalyticsService:
    """Build live dashboard analytics from the submissions database."""

    def __init__(self, db: AsyncSession) -> None:
        self._db = db

    async def build_dashboard(
        self,
        *,
        constituency: str,
        period: str = "30d",
        theme: str = "all",
        ward: str = "all",
    ) -> dict[str, Any]:
        constituency = constituency.strip().lower() or "khordha"
        days = _period_days(period)
        now = datetime.now(timezone.utc)
        current_start = now - timedelta(days=days)
        previous_start = current_start - timedelta(days=days)

        summary = await self._summary(
            constituency=constituency,
            start=current_start,
            theme=theme,
            ward=ward,
        )
        language_breakdown = await self._language_breakdown(
            constituency=constituency,
            start=current_start,
            theme=theme,
            ward=ward,
        )
        pulse = await self._priority_pulse(
            constituency=constituency,
            current_start=current_start,
            previous_start=previous_start,
            theme=theme,
            ward=ward,
        )
        hotspots = await self._hotspots(
            constituency=constituency,
            start=current_start,
            theme=theme,
            ward=ward,
        )
        recent = await self._recent_submissions(
            constituency=constituency,
            start=current_start,
            theme=theme,
            ward=ward,
        )
        user_submissions = await self._user_submissions(
            constituency=constituency,
            start=current_start,
            theme=theme,
            ward=ward,
        )
        candidate_projects = await self._candidate_project_count(constituency)
        population_context = await self._population_context(constituency)

        summary["activeHotspots"] = len(hotspots)
        summary["recurringThemes"] = len(pulse)
        summary["candidateProjects"] = candidate_projects

        return {
            "constituency": constituency,
            "constituencyLabel": constituency.replace("_", " ").title(),
            "state": "Odisha",
            "period": period if period in VALID_PERIODS else "30d",
            "lastUpdatedAt": now.isoformat(),
            "dataSource": "live",
            "recordCount": summary["totalSubmissions"],
            "total_submissions": summary["totalSubmissions"],
            "populationContext": population_context,
            "languageBreakdown": language_breakdown,
            "summary": summary,
            "priorityPulse": pulse,
            "hotspots": hotspots,
            "recentSubmissions": recent,
            "user_submissions": user_submissions,
        }

    async def _summary(
        self,
        *,
        constituency: str,
        start: datetime,
        theme: str,
        ward: str,
    ) -> dict[str, int]:
        where, params = _base_filters(
            constituency=constituency,
            start=start,
            theme=theme,
            ward=ward,
        )
        query = text(
            f"""
            SELECT
                COUNT(*)::int AS total_submissions,
                COUNT(DISTINCT NULLIF(s.ward, ''))::int AS active_wards,
                COUNT(DISTINCT {_theme_sql()})::int AS recurring_themes
            FROM submissions s
            WHERE {where}
            """
        )
        row = (await self._db.execute(query, params)).mappings().one()
        return {
            "totalSubmissions": int(row["total_submissions"] or 0),
            "recurringThemes": int(row["recurring_themes"] or 0),
            "activeHotspots": 0,
            "candidateProjects": 0,
        }

    async def _language_breakdown(
        self,
        *,
        constituency: str,
        start: datetime,
        theme: str,
        ward: str,
    ) -> dict[str, int]:
        where, params = _base_filters(
            constituency=constituency,
            start=start,
            theme=theme,
            ward=ward,
        )
        query = text(
            f"""
            SELECT LOWER(s.language) AS language, COUNT(*)::int AS count
            FROM submissions s
            WHERE {where}
            GROUP BY LOWER(s.language)
            """
        )
        rows = (await self._db.execute(query, params)).mappings().all()
        counts = {"odia": 0, "hindi": 0, "english": 0}
        total = 0
        for row in rows:
            language = str(row["language"] or "").lower()
            count = int(row["count"] or 0)
            total += count
            if language in counts:
                counts[language] += count
        if total == 0:
            return counts
        return {key: round(value * 100 / total) for key, value in counts.items()}

    async def _priority_pulse(
        self,
        *,
        constituency: str,
        current_start: datetime,
        previous_start: datetime,
        theme: str,
        ward: str,
    ) -> list[dict[str, Any]]:
        current_where, current_params = _base_filters(
            constituency=constituency,
            start=current_start,
            theme=theme,
            ward=ward,
            prefix="current",
        )
        previous_where, previous_params = _base_filters(
            constituency=constituency,
            start=previous_start,
            end=current_start,
            theme=theme,
            ward=ward,
            prefix="previous",
        )
        params = {**current_params, **previous_params}
        query = text(
            f"""
            WITH current_rows AS (
                SELECT
                    {_theme_sql()} AS theme,
                    s.ward,
                    LOWER(COALESCE(s.extracted ->> 'urgency', 'medium')) AS urgency,
                    CASE WHEN s.audio_url IS NOT NULL
                               OR s.photo_url IS NOT NULL
                               OR s.video_url IS NOT NULL THEN 1 ELSE 0 END AS has_evidence
                FROM submissions s
                WHERE {current_where}
            ), previous_rows AS (
                SELECT {_theme_sql()} AS theme
                FROM submissions s
                WHERE {previous_where}
            )
            SELECT
                c.theme,
                COUNT(*)::int AS submission_count,
                COUNT(DISTINCT NULLIF(c.ward, ''))::int AS affected_wards,
                COUNT(*) FILTER (WHERE c.urgency = 'high')::int AS high_urgency_count,
                SUM(c.has_evidence)::int AS evidence_count,
                COALESCE((SELECT COUNT(*) FROM previous_rows p WHERE p.theme = c.theme), 0)::int AS previous_count
            FROM current_rows c
            GROUP BY c.theme
            ORDER BY submission_count DESC
            """
        )
        rows = (await self._db.execute(query, params)).mappings().all()
        max_count = max((int(row["submission_count"] or 0) for row in rows), default=1)
        output: list[dict[str, Any]] = []
        for row in rows:
            count = int(row["submission_count"] or 0)
            previous = int(row["previous_count"] or 0)
            trend = round(((count - previous) / previous) * 100, 1) if previous else (100.0 if count else 0.0)
            urgency = int(row["high_urgency_count"] or 0)
            demand_score = min(count / max_count * 100, 100)
            urgency_score = min(urgency / max(count, 1) * 100, 100)
            signal = round(0.7 * demand_score + 0.3 * urgency_score, 1)
            priority = "high" if signal >= 70 else "medium" if signal >= 40 else "emerging"
            output.append(
                {
                    "theme": row["theme"],
                    "label": str(row["theme"]).replace("_", " ").title(),
                    "submissionCount": count,
                    "affectedWards": int(row["affected_wards"] or 0),
                    "affectedPopulation": 0,
                    "trendPercent": trend,
                    "signalScore": signal,
                    "priority": priority,
                    "urgency": "high" if urgency else "medium",
                    "infraGap": None,
                }
            )
        return output

    async def _hotspots(
        self,
        *,
        constituency: str,
        start: datetime,
        theme: str,
        ward: str,
    ) -> list[dict[str, Any]]:
        where, params = _base_filters(
            constituency=constituency,
            start=start,
            theme=theme,
            ward=ward,
        )
        query = text(
            f"""
            SELECT
                COALESCE(s.ward, 'Unknown') AS ward,
                COALESCE(s.block, 'Unknown') AS block,
                {_theme_sql()} AS theme,
                COUNT(*)::int AS submission_count,
                AVG(s.latitude) FILTER (WHERE s.latitude IS NOT NULL) AS latitude,
                AVG(s.longitude) FILTER (WHERE s.longitude IS NOT NULL) AS longitude,
                COUNT(*) FILTER (WHERE s.audio_url IS NOT NULL)::int AS voice_count,
                COUNT(*) FILTER (WHERE s.photo_url IS NOT NULL)::int AS photo_count,
                COUNT(*) FILTER (WHERE s.video_url IS NOT NULL)::int AS video_count,
                COUNT(*) FILTER (WHERE s.audio_url IS NULL AND s.photo_url IS NULL AND s.video_url IS NULL)::int AS text_count,
                MAX(s.created_at) AS latest_at
            FROM submissions s
            WHERE {where}
            GROUP BY COALESCE(s.ward, 'Unknown'), COALESCE(s.block, 'Unknown'), {_theme_sql()}
            HAVING AVG(s.latitude) FILTER (WHERE s.latitude IS NOT NULL) IS NOT NULL
               AND AVG(s.longitude) FILTER (WHERE s.longitude IS NOT NULL) IS NOT NULL
            ORDER BY submission_count DESC
            LIMIT 50
            """
        )
        rows = (await self._db.execute(query, params)).mappings().all()
        output: list[dict[str, Any]] = []
        for index, row in enumerate(rows):
            output.append(
                {
                    "id": f"live_{constituency}_{index + 1}",
                    "ward": row["ward"],
                    "block": row["block"],
                    "theme": row["theme"],
                    "latitude": float(row["latitude"]),
                    "longitude": float(row["longitude"]),
                    "intensity": "high" if row["submission_count"] >= 10 else "medium" if row["submission_count"] >= 3 else "low",
                    "submissionCount": int(row["submission_count"]),
                    "affectedPopulation": 0,
                    "evidenceCounts": {
                        "text": int(row["text_count"] or 0),
                        "voice": int(row["voice_count"] or 0),
                        "photo": int(row["photo_count"] or 0),
                        "video": int(row["video_count"] or 0),
                    },
                    "candidateProjectId": None,
                    "infrastructureContext": {},
                    "suggestedProject": {
                        "title": f"Review {str(row['theme']).replace('_', ' ')} reports in {row['ward']}",
                        "estimatedCost": 0,
                        "estimatedMonths": 0,
                    },
                    "representativeEvidence": [],
                }
            )
        await self._attach_representative_evidence(output, constituency, start)
        return output

    async def _attach_representative_evidence(
        self,
        hotspots: list[dict[str, Any]],
        constituency: str,
        start: datetime,
    ) -> None:
        if not hotspots:
            return
        query = text(
            f"""
            SELECT
                COALESCE(s.ward, 'Unknown') AS ward,
                {_theme_sql()} AS theme,
                LOWER(s.language) AS language,
                COALESCE(s.transcript, s.content, s.formatted_text ->> LOWER(s.language), '') AS preview,
                CASE WHEN s.audio_url IS NOT NULL THEN 'voice'
                     WHEN s.photo_url IS NOT NULL THEN 'photo'
                     WHEN s.video_url IS NOT NULL THEN 'video'
                     ELSE 'text' END AS evidence_type
            FROM submissions s
            WHERE s.constituency = :constituency
              AND s.created_at >= :start_at
              AND s.status NOT IN ('rejected', 'duplicate')
            ORDER BY s.created_at DESC
            LIMIT 100
            """
        )
        rows = (await self._db.execute(query, {"constituency": constituency, "start_at": start})).mappings().all()
        by_key = {(item["ward"], item["theme"]): item for item in hotspots}
        for row in rows:
            item = by_key.get((row["ward"], row["theme"]))
            preview = str(row["preview"] or "").strip()
            if item is None or not preview or len(item["representativeEvidence"]) >= 3:
                continue
            item["representativeEvidence"].append(
                {
                    "type": row["evidence_type"],
                    "language": row["language"],
                    "translatedText": preview[:500],
                }
            )

    async def _recent_submissions(
        self,
        *,
        constituency: str,
        start: datetime,
        theme: str,
        ward: str,
    ) -> list[dict[str, Any]]:
        where, params = _base_filters(
            constituency=constituency,
            start=start,
            theme=theme,
            ward=ward,
        )
        query = text(
            f"""
            SELECT
                s.id,
                COALESCE(s.ward, 'Unknown') AS ward,
                {_theme_sql()} AS theme,
                LOWER(s.language) AS language,
                s.submission_type AS channel,
                COALESCE(s.transcript, s.content, s.formatted_text ->> LOWER(s.language), '[Media evidence attached]') AS preview,
                s.created_at
            FROM submissions s
            WHERE {where}
            ORDER BY s.created_at DESC
            LIMIT 10
            """
        )
        rows = (await self._db.execute(query, params)).mappings().all()
        now = datetime.now(timezone.utc)
        output: list[dict[str, Any]] = []
        for row in rows:
            created = row["created_at"]
            if isinstance(created, datetime):
                submitted_mins = max(0, round((now - created.astimezone(timezone.utc)).total_seconds() / 60))
            else:
                submitted_mins = 0
            preview = str(row["preview"] or "")[:240]
            if str(row["language"] or "").lower() == "odia":
                preview = sanitize_odia_text(preview) or preview
            output.append(
                {
                    "id": str(row["id"]),
                    "ward": row["ward"],
                    "theme": row["theme"],
                    "language": row["language"],
                    "channel": row["channel"],
                    "preview": preview,
                    "translatedPreview": preview,
                    "submittedMinsAgo": submitted_mins,
                }
            )
        return output

    async def _user_submissions(
        self,
        *,
        constituency: str,
        start: datetime,
        theme: str,
        ward: str,
    ) -> list[dict[str, Any]]:
        where, params = _base_filters(
            constituency=constituency,
            start=start,
            theme=theme,
            ward=ward,
        )
        query = text(
            f"""
            SELECT
                s.id,
                COALESCE(s.ward, 'Unknown') AS ward,
                {_theme_sql()} AS theme,
                LOWER(s.language) AS language,
                s.status,
                s.content,
                s.transcript,
                s.formatted_text,
                s.extracted,
                s.created_at
            FROM submissions s
            WHERE {where}
            ORDER BY s.created_at DESC
            LIMIT 100
            """
        )
        rows = (await self._db.execute(query, params)).mappings().all()
        output: list[dict[str, Any]] = []
        for row in rows:
            lang = str(row["language"] or "").lower()
            formatted_text = row["formatted_text"] or {}
            transcript = row["transcript"]
            content = row["content"]
            extracted = row["extracted"] or {}
            
            if lang == "odia":
                if isinstance(formatted_text, dict):
                    formatted_text = {k: sanitize_odia_text(v) if isinstance(v, str) else v for k, v in formatted_text.items()}
                if isinstance(transcript, str):
                    transcript = sanitize_odia_text(transcript)
                if isinstance(content, str):
                    content = sanitize_odia_text(content)
                if isinstance(extracted, dict):
                    if isinstance(extracted.get("problem_location"), str):
                        extracted["problem_location"] = sanitize_odia_text(extracted["problem_location"])
                    if isinstance(extracted.get("urgency_reason"), str):
                        extracted["urgency_reason"] = sanitize_odia_text(extracted["urgency_reason"])

            if not formatted_text:
                formatted_text = {lang: content or transcript or "Citizen report received for review."}

            output.append(
                {
                    "submission_id": str(row["id"]),
                    "status": str(row["status"] or "processed"),
                    "theme": str(row["theme"] or "road_repair").replace("_", " ").title(),
                    "confidence": 0.92,
                    "message": "Submission retrieved from live database.",
                    "formatted_text": formatted_text,
                    "transcript": transcript,
                    "extracted": extracted,
                }
            )
        return output

    async def _population_context(self, constituency: str) -> dict[str, Any]:
        """Return historical PCA context for the matching district.

        The current imported reference layer is district/subdistrict-level. It is
        therefore exposed as context, not silently treated as ward-level impact.
        """
        query = text(
            """
            SELECT
                MAX(reference_year)::int AS reference_year,
                COUNT(*)::int AS area_count,
                COALESCE(SUM(households_total), 0)::bigint AS households_total,
                COALESCE(SUM(population_total), 0)::bigint AS population_total,
                COALESCE(SUM(children_0_6), 0)::bigint AS children_0_6,
                COALESCE(SUM(sc_population), 0)::bigint AS sc_population,
                COALESCE(SUM(st_population), 0)::bigint AS st_population,
                COALESCE(SUM(literate_population), 0)::bigint AS literate_population,
                COALESCE(SUM(total_workers), 0)::bigint AS total_workers
            FROM census_population_reference
            WHERE LOWER(state_name) = 'odisha'
              AND LOWER(district_name) = :district_name
            """
        )
        district_name = "khordha" if constituency in {"khordha", "bhubaneswar"} else constituency
        try:
            row = (await self._db.execute(query, {"district_name": district_name})).mappings().one()
        except ProgrammingError:
            await self._db.rollback()
            return {"available": False, "source": "PCA 2011", "referenceYear": None}
        population = int(row["population_total"] or 0)
        return {
            "available": population > 0,
            "source": "Primary Census Abstract 2011",
            "referenceYear": row["reference_year"],
            "areaCount": int(row["area_count"] or 0),
            "householdsTotal": int(row["households_total"] or 0),
            "populationTotal": population,
            "children0To6": int(row["children_0_6"] or 0),
            "scheduledCastePopulation": int(row["sc_population"] or 0),
            "scheduledTribePopulation": int(row["st_population"] or 0),
            "literatePopulation": int(row["literate_population"] or 0),
            "totalWorkers": int(row["total_workers"] or 0),
            "geographicLevel": "subdistrict",
        }

    async def _candidate_project_count(self, constituency: str) -> int:
        query = text(
            """
            SELECT COUNT(*)::int
            FROM ranked_projects
            WHERE constituency = :constituency
        """
        )
        try:
            result = await self._db.execute(query, {"constituency": constituency})
            return int(result.scalar_one() or 0)
        except ProgrammingError:
            # Ranked projects are optional until the priorities migration is applied.
            await self._db.rollback()
            return 0


def get_analytics_service(db: AsyncSession) -> AnalyticsService:
    return AnalyticsService(db)


__all__ = ["AnalyticsService", "get_analytics_service"]

# End of file
