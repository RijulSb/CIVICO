from collections.abc import Sequence
from math import asin, cos, radians, sin, sqrt

try:
    import numpy as np
    from sklearn.cluster import DBSCAN
except ImportError:  # pragma: no cover - exercised only in minimal environments
    np = None
    DBSCAN = None


class GeospatialEngine:
    """Analytical clustering over coordinates; PostGIS remains authoritative.

    Scikit-learn is used when installed. A deterministic standard-library
    fallback keeps local development and lightweight workers operational.
    """

    def detect_hotspots(
        self,
        coordinates: Sequence[tuple[float, float]],
        eps_km: float = 1.0,
        min_samples: int = 3,
    ) -> list[int]:
        self._validate_inputs(coordinates, eps_km, min_samples)
        if not coordinates:
            return []

        if np is not None and DBSCAN is not None:
            points = np.radians(np.asarray(coordinates, dtype=float))
            model = DBSCAN(
                eps=eps_km / 6371.0,
                min_samples=min_samples,
                metric="haversine",
                algorithm="ball_tree",
            )
            return model.fit_predict(points).tolist()

        return self._fallback_dbscan(coordinates, eps_km, min_samples)

    @staticmethod
    def _validate_inputs(
        coordinates: Sequence[tuple[float, float]],
        eps_km: float,
        min_samples: int,
    ) -> None:
        if eps_km <= 0:
            raise ValueError("eps_km must be greater than zero.")
        if min_samples < 1:
            raise ValueError("min_samples must be at least one.")
        for coordinate in coordinates:
            if len(coordinate) != 2:
                raise ValueError("coordinates must contain (latitude, longitude) pairs.")
            latitude, longitude = coordinate
            if not (-90 <= latitude <= 90):
                raise ValueError("latitude must be between -90 and 90.")
            if not (-180 <= longitude <= 180):
                raise ValueError("longitude must be between -180 and 180.")

    @classmethod
    def _fallback_dbscan(
        cls,
        coordinates: Sequence[tuple[float, float]],
        eps_km: float,
        min_samples: int,
    ) -> list[int]:
        neighbors = [
            [
                index
                for index, candidate in enumerate(coordinates)
                if cls._distance_km(point, candidate) <= eps_km
            ]
            for point in coordinates
        ]
        labels = [None] * len(coordinates)
        cluster_id = 0

        for index in range(len(coordinates)):
            if labels[index] is not None:
                continue
            if len(neighbors[index]) < min_samples:
                labels[index] = -1
                continue

            labels[index] = cluster_id
            queue = list(neighbors[index])
            cursor = 0
            while cursor < len(queue):
                candidate = queue[cursor]
                cursor += 1
                if labels[candidate] == -1:
                    labels[candidate] = cluster_id
                if labels[candidate] is not None:
                    continue
                labels[candidate] = cluster_id
                if len(neighbors[candidate]) >= min_samples:
                    queue.extend(neighbors[candidate])
            cluster_id += 1

        return [label if label is not None else -1 for label in labels]

    @staticmethod
    def _distance_km(first: tuple[float, float], second: tuple[float, float]) -> float:
        lat1, lon1 = map(radians, first)
        lat2, lon2 = map(radians, second)
        delta_lat = lat2 - lat1
        delta_lon = lon2 - lon1
        haversine = sin(delta_lat / 2) ** 2 + cos(lat1) * cos(lat2) * sin(delta_lon / 2) ** 2
        return 6371.0 * 2 * asin(sqrt(haversine))
