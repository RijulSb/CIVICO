"use client";

import * as React from "react";
import { Network, Search, ArrowUpRight, ShieldCheck, Cpu } from "lucide-react";

export interface GraphNode {
  id: string;
  label: string;
  type: "Citizen Report" | "Ward" | "Infrastructure Asset" | "Government Scheme";
  subtext: string;
  connections: string[];
  status: "Critical Deficit" | "Under Repair" | "Optimal" | "Funded";
}

const mockNodes: GraphNode[] = [
  {
    id: "cr-881",
    label: "Citizen Report #CR-881",
    type: "Citizen Report",
    subtext: "92 Water Shortage Complaints",
    connections: ["ward-14", "asset-441"],
    status: "Critical Deficit",
  },
  {
    id: "ward-14",
    label: "Ward 14 (Saheed Nagar)",
    type: "Ward",
    subtext: "Population 38,400",
    connections: ["cr-881", "asset-441", "scheme-amrut"],
    status: "Critical Deficit",
  },
  {
    id: "asset-441",
    label: "Main Water Pipeline #441",
    type: "Infrastructure Asset",
    subtext: "Pressure Drop: 42 PSI (Leaking)",
    connections: ["cr-881", "ward-14", "asset-sub2"],
    status: "Under Repair",
  },
  {
    id: "asset-sub2",
    label: "Pumping Substation #2",
    type: "Infrastructure Asset",
    subtext: "Motor Shaft Friction Alert",
    connections: ["asset-441", "scheme-amrut"],
    status: "Under Repair",
  },
  {
    id: "scheme-amrut",
    label: "AMRUT 2.0 Water Grant",
    type: "Government Scheme",
    subtext: "CAPEX ₹1.4 Cr Allocated",
    connections: ["ward-14", "asset-sub2"],
    status: "Funded",
  },
];

export function KnowledgeGraphVisualizer() {
  const [selectedNode, setSelectedNode] = React.useState<GraphNode>(mockNodes[0]);
  const [searchTerm, setSearchTerm] = React.useState("");

  const filtered = mockNodes.filter(
    (n) =>
      n.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
      n.subtext.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm font-sans transition-all duration-300 hover:shadow-md">
      {/* Box Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-5">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs font-semibold text-black/50 uppercase tracking-widest">
            <Network className="h-4 w-4 text-black" />
            <span>02 — Knowledge Graph Topology</span>
          </div>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#0a0a0a]">
            Asset & Request Links
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Trace how citizen complaints map to physical municipal infrastructure
          </p>
        </div>

        {/* Search */}
        <div className="relative min-w-[240px]">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search nodes or assets..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-gray-50 pl-9 pr-3 py-2 text-sm text-black placeholder-gray-400 focus:border-black focus:bg-white focus:outline-none"
          />
        </div>
      </div>

      {/* Topology Content */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Node Cards */}
        <div className="lg:col-span-2 space-y-3">
          {filtered.map((node) => {
            const isSelected = selectedNode.id === node.id;
            return (
              <div
                key={node.id}
                onClick={() => setSelectedNode(node)}
                className={`cursor-pointer rounded-xl border p-4 transition-all duration-200 flex items-center justify-between ${
                  isSelected
                    ? "border-black bg-black text-white shadow-md"
                    : "border-gray-200 bg-gray-50/50 text-[#0a0a0a] hover:border-gray-400 hover:bg-white"
                }`}
              >
                <div>
                  <div className="flex items-center gap-2 font-mono text-xs">
                    <span
                      className={`px-2 py-0.5 rounded font-bold uppercase tracking-wider ${
                        isSelected ? "bg-white/20 text-white" : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {node.type}
                    </span>
                    <span className={isSelected ? "text-gray-400" : "text-gray-500"}>
                      Status: {node.status}
                    </span>
                  </div>
                  <h4 className="mt-2 text-base font-bold">{node.label}</h4>
                  <p className={`mt-0.5 text-xs ${isSelected ? "text-gray-300" : "text-gray-500"}`}>
                    {node.subtext}
                  </p>
                </div>
                <ArrowUpRight className={`h-5 w-5 ${isSelected ? "text-white" : "text-gray-400"}`} />
              </div>
            );
          })}
        </div>

        {/* Selected Node Details Box */}
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-gray-200 pb-3">
              <span className="font-mono text-xs font-bold text-gray-500 uppercase tracking-wider">
                Node Inspector
              </span>
              <Cpu className="h-4 w-4 text-black" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-[#0a0a0a]">{selectedNode.label}</h3>
            <p className="mt-1 font-mono text-xs text-gray-500">{selectedNode.type}</p>

            <div className="mt-6 space-y-3 font-mono text-xs">
              <div className="rounded-lg bg-white p-3 border border-gray-200">
                <span className="text-gray-400 block text-[10px]">DIAGNOSTIC STATUS</span>
                <span className="font-bold text-black text-sm">{selectedNode.status}</span>
              </div>

              <div className="rounded-lg bg-white p-3 border border-gray-200">
                <span className="text-gray-400 block text-[10px]">CONNECTED DEPENDENCIES</span>
                <span className="font-bold text-black">{selectedNode.connections.join(", ")}</span>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-black py-3 text-sm font-semibold text-white shadow hover:bg-gray-800 transition"
          >
            <span>Trace Root Cause Pathway</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default KnowledgeGraphVisualizer;
