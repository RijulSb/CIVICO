"use client";

export interface TimelinePoint {
  date: string;
  count: number;
  theme?: string;
}

interface TimelineChartProps {
  data: TimelinePoint[];
}

export default function TimelineChart({ data }: TimelineChartProps) {
  if (data.length === 0) {
    return (
      <div className="rounded-lg border p-6 text-center text-sm text-muted-foreground">
        No timeline data available.
      </div>
    );
  }

  const maxCount = Math.max(...data.map((point) => point.count), 1);

  return (
    <div className="rounded-lg border p-4">
      <div className="flex h-40 items-end gap-2">
        {data.map((point, index) => {
          const height = (point.count / maxCount) * 100;

          return (
            <div
              key={`${point.date}-${index}`}
              className="group flex min-w-0 flex-1 flex-col items-center justify-end"
            >
              <span className="mb-1 text-[10px] font-medium opacity-0 transition-opacity group-hover:opacity-100">
                {point.count}
              </span>

              <div
                className="w-full min-w-[4px] rounded-t bg-primary transition-opacity group-hover:opacity-80"
                style={{
                  height: `${Math.max(height, 4)}%`,
                }}
                title={`${point.date}: ${point.count} issues`}
              />
            </div>
          );
        })}
      </div>

      <div className="mt-2 flex justify-between gap-2 text-[10px] text-muted-foreground">
        <span>{data[0].date}</span>

        <span>{data[data.length - 1].date}</span>
      </div>
    </div>
  );
}
