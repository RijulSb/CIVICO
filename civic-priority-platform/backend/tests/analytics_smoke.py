from app.analytics import (
    DataFusionEngine,
    GeospatialEngine,
    ImpactEngine,
    OptimizationEngine,
    RankingEngine,
)


def main() -> None:
    fused = DataFusionEngine().aggregate(
        [{"area_id": "a", "severity": 2}],
        [{"area_id": "a", "population": 10}],
    )
    assert fused[0]["issue_count"] == 1
    assert fused[0]["severity_sum"] == 2.0

    labels = GeospatialEngine().detect_hotspots([(0.0, 0.0), (0.001, 0.001)], min_samples=1)
    assert len(labels) == 2

    ranked = RankingEngine().rank(
        [{"id": "a", "severity": 2}, {"id": "b", "severity": 1}],
        {"severity": 1.0},
    )
    assert ranked[0]["id"] == "a"
    assert ranked[0]["rank"] == 1

    impact = ImpactEngine().estimate(100, 0.2, 2)
    assert impact["impact_score"] == 40.0

    selected = OptimizationEngine().select(
        [{"id": "a", "cost": 5, "priority_score": 10}],
        budget=5,
    )
    assert selected[0]["id"] == "a"


if __name__ == "__main__":
    main()
