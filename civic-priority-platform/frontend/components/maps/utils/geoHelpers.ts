import L from "leaflet";

export type Coordinates = {
  lat: number;
  lng: number;
};

export type GeoPoint = {
  latitude: number;
  longitude: number;
};

export type MapPoint = {
  id?: string;
  lat: number;
  lng: number;
};

export const toLatLng = (point: Coordinates | GeoPoint): L.LatLng => {
  if ("lat" in point) {
    return L.latLng(point.lat, point.lng);
  }

  return L.latLng(point.latitude, point.longitude);
};

export const toCoordinates = (point: L.LatLng): Coordinates => ({
  lat: point.lat,
  lng: point.lng,
});

export const isValidCoordinate = (lat: number, lng: number): boolean => {
  return (
    Number.isFinite(lat) &&
    Number.isFinite(lng) &&
    lat >= -90 &&
    lat <= 90 &&
    lng >= -180 &&
    lng <= 180
  );
};

export const calculateBounds = (points: MapPoint[]): L.LatLngBounds | null => {
  const validPoints = points.filter((point) =>
    isValidCoordinate(point.lat, point.lng),
  );

  if (!validPoints.length) {
    return null;
  }

  const bounds = L.latLngBounds(
    validPoints.map((point) => [point.lat, point.lng]),
  );

  return bounds;
};

export const calculateCenter = (points: MapPoint[]): Coordinates | null => {
  const bounds = calculateBounds(points);

  if (!bounds) {
    return null;
  }

  const center = bounds.getCenter();

  return {
    lat: center.lat,
    lng: center.lng,
  };
};

export const getDistanceInMeters = (
  first: Coordinates,
  second: Coordinates,
): number => {
  return L.latLng(first.lat, first.lng).distanceTo(
    L.latLng(second.lat, second.lng),
  );
};

export const isPointInsideBounds = (
  point: Coordinates,
  bounds: L.LatLngBounds,
): boolean => {
  return bounds.contains(L.latLng(point.lat, point.lng));
};

export const expandBounds = (
  bounds: L.LatLngBounds,
  padding = 0.05,
): L.LatLngBounds => {
  const southWest = bounds.getSouthWest();
  const northEast = bounds.getNorthEast();

  const latPadding = (northEast.lat - southWest.lat) * padding;

  const lngPadding = (northEast.lng - southWest.lng) * padding;

  return L.latLngBounds(
    [southWest.lat - latPadding, southWest.lng - lngPadding],
    [northEast.lat + latPadding, northEast.lng + lngPadding],
  );
};

export const formatCoordinates = (
  coordinates: Coordinates,
  precision = 5,
): string => {
  return `${coordinates.lat.toFixed(
    precision,
  )}, ${coordinates.lng.toFixed(precision)}`;
};

export const getZoomForPointCount = (count: number): number => {
  if (count <= 1) return 16;
  if (count <= 5) return 14;
  if (count <= 20) return 12;
  if (count <= 100) return 10;

  return 8;
};
