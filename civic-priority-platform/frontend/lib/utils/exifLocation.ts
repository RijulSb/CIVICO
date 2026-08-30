import ExifReader from "exifreader";

export interface GeoPoint {
  latitude: number;
  longitude: number;
}

export async function extractGeoFromImageFile(
  file: File,
): Promise<GeoPoint | null> {
  if (!file || !file.type.startsWith("image/")) {
    return null;
  }

  try {
    const arrayBuffer = await file.arrayBuffer();
    const tags = ExifReader.load(arrayBuffer);

    const lat = tags.GPSLatitude;
    const lon = tags.GPSLongitude;
    const latRef = tags.GPSLatitudeRef?.value || tags.GPSLatitudeRef;
    const lonRef = tags.GPSLongitudeRef?.value || tags.GPSLongitudeRef;

    if (!lat || !lon) {
      return null;
    }

    const parseCoordinate = (
      coordTag: any,
      refTag: unknown,
    ): number | null => {
      let decimal: number | null = null;

      if (typeof coordTag.description === "number") {
        decimal = coordTag.description;
      } else if (typeof coordTag.value === "number") {
        decimal = coordTag.value;
      } else if (Array.isArray(coordTag.value) && coordTag.value.length >= 3) {
        const coords = coordTag.value.map((part: any) => {
          if (typeof part === "number") return part;
          if (Array.isArray(part) && part.length === 2 && part[1] !== 0) {
            return part[0] / part[1];
          }

          if (typeof part === "object" && part !== null) {
            const obj = part as { numerator?: number; denominator?: number };
            if (obj.numerator != null && obj.denominator) {
              return obj.numerator / obj.denominator;
            }
          }
          return Number(part) || 0;
        });

        const [deg, min, sec] = coords;
        decimal = deg + min / 60 + sec / 3600;
      }

      if (decimal == null || !Number.isFinite(decimal)) {
        return null;
      }

      const refStr = String(Array.isArray(refTag) ? refTag[0] : refTag || "")
        .trim()
        .toUpperCase();
      if (refStr === "S" || refStr === "W") {
        decimal = -decimal;
      }

      return decimal;
    };

    const latitude = parseCoordinate(lat, latRef);
    const longitude = parseCoordinate(lon, lonRef);

    if (
      latitude == null ||
      longitude == null ||
      Math.abs(latitude) > 90 ||
      Math.abs(longitude) > 180
    ) {
      return null;
    }

    return { latitude, longitude };
  } catch (error) {
    console.warn("EXIF extraction notice:", error);
    return null;
  }
}
