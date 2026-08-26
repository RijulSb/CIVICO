import asyncio
from typing import Any

from backend.app.core.exceptions import ExternalToolUnavailable


class CivicRetriever:
    """Small, filtered, evidence-first Qdrant retriever."""

    def __init__(
        self,
        url: str,
        collection: str,
        embedding_model: str,
    ) -> None:
        if not url or not collection or not embedding_model:
            raise ValueError("url, collection, and embedding_model are required.")
        self.url = url
        self.collection = collection
        self.embedding_model = embedding_model
        self._client = None
        self._encoder = None
        self._load_lock = asyncio.Lock()

    async def search(
        self,
        query: str,
        limit: int = 5,
        location: dict[str, Any] | None = None,
        score_threshold: float = 0.45,
    ) -> list[dict[str, Any]]:
        query = query.strip()
        if not query:
            return []
        if not 1 <= limit <= 8:
            raise ValueError("limit must be between 1 and 8.")
        if not 0 <= score_threshold <= 1:
            raise ValueError("score_threshold must be between 0 and 1.")

        await self._ensure_loaded()
        vector = await asyncio.to_thread(
            self._encoder.encode,
            query,
            normalize_embeddings=True,
            show_progress_bar=False,
        )
        response = await self._client.query_points(
            collection_name=self.collection,
            query=vector.tolist(),
            query_filter=self._build_filter(location),
            limit=limit,
            score_threshold=score_threshold,
            with_payload=True,
            with_vectors=False,
        )
        return [self._clean_result(point) for point in response.points]

    async def _ensure_loaded(self) -> None:
        if self._client is not None and self._encoder is not None:
            return
        async with self._load_lock:
            if self._client is not None and self._encoder is not None:
                return
            try:
                from qdrant_client import AsyncQdrantClient
                from sentence_transformers import SentenceTransformer
            except ImportError as exc:
                raise ExternalToolUnavailable(
                    "Qdrant and sentence-transformers dependencies are required for retrieval."
                ) from exc
            self._client = AsyncQdrantClient(url=self.url)
            self._encoder = await asyncio.to_thread(
                SentenceTransformer,
                self.embedding_model,
            )

    @staticmethod
    def _build_filter(location: dict[str, Any] | None):
        area_id = (location or {}).get("area_id")
        if not area_id:
            return None
        try:
            from qdrant_client.models import FieldCondition, Filter, MatchValue
        except ImportError as exc:
            raise ExternalToolUnavailable("Qdrant dependency is required for filtering.") from exc
        return Filter(
            must=[
                FieldCondition(
                    key="area_id",
                    match=MatchValue(value=area_id),
                )
            ]
        )

    @staticmethod
    def _clean_result(point: Any) -> dict[str, Any]:
        payload = point.payload or {}
        return {
            "id": str(point.id),
            "score": round(float(point.score), 4),
            "text": payload.get("text", ""),
            "source": payload.get("source"),
            "source_id": payload.get("source_id"),
            "area_id": payload.get("area_id"),
            "metadata": payload.get("metadata", {}),
        }
