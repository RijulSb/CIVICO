"use client";

interface LegendItem {
  label: string;
  description?: string;
  color: string;
}

interface MapLegendProps {
  items?: LegendItem[];
  className?: string;
}

const DEFAULT_ITEMS: LegendItem[] = [
  {
    label: "High priority",
    description: "Urgent concentration of issues",
    color: "bg-red-600",
  },
  {
    label: "Medium priority",
    description: "Requires attention",
    color: "bg-amber-500",
  },
  {
    label: "Low priority",
    description: "Lower urgency",
    color: "bg-blue-600",
  },
];

export default function MapLegend({
  items = DEFAULT_ITEMS,
  className = "",
}: MapLegendProps) {
  return (
    <div
      className={`absolute bottom-4 left-4 z-[1000] rounded-lg border border-slate-200 bg-white p-3 shadow-md ${className}`}
    >
      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-700">
        Map legend
      </p>

      <div className="space-y-2">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <span className={`h-3 w-3 shrink-0 rounded-full ${item.color}`} />

            <div>
              <p className="text-xs font-medium text-slate-800">{item.label}</p>

              {item.description && (
                <p className="text-[11px] text-slate-500">{item.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
