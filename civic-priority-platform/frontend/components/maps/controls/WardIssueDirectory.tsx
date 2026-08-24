"use client";

import { useMemo, useState } from "react";
import {
  Activity,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  Crosshair,
  Filter,
  ListFilter,
  MapPin,
  PlusCircle,
  Search,
  Sparkles,
  X,
} from "lucide-react";
import { useCivicMap } from "../MapProvider";

export interface DirectoryIssue {
  id: string;
  title: string;
  ward: string;
  category: "road_repair" | "water_supply" | "health_clinic" | "school_infrastructure" | "electricity" | "sanitation";
  status: "open" | "in_progress" | "resolved";
  lat: number;
  lng: number;
  reportCount?: number;
}

const INITIAL_WARD_SECTORS: { ward: string; sectorName: string; issues: DirectoryIssue[] }[] = [
  {
    ward: "Ward 5",
    sectorName: "Saheed Nagar Sector",
    issues: [
      { id: "dir-1", title: "Janpath Main Road Pothole Crater", ward: "Ward 5", category: "road_repair", status: "open", lat: 20.2874, lng: 85.8378, reportCount: 48 },
      { id: "dir-2", title: "Residential Drinking Water Pipe Rupture", ward: "Ward 5", category: "water_supply", status: "in_progress", lat: 20.2890, lng: 85.8395, reportCount: 32 },
      { id: "dir-3", title: "High-Voltage Transformer Sparking", ward: "Ward 5", category: "electricity", status: "open", lat: 20.2855, lng: 85.8360, reportCount: 19 },
      { id: "dir-4", title: "Stormwater Drain Overflow near Market", ward: "Ward 5", category: "sanitation", status: "open", lat: 20.2882, lng: 85.8410, reportCount: 26 },
    ],
  },
  {
    ward: "Ward 3",
    sectorName: "Jaydev Vihar Sector",
    issues: [
      { id: "dir-5", title: "Flyover Approach Road Cavity", ward: "Ward 3", category: "road_repair", status: "open", lat: 20.3021, lng: 85.8241, reportCount: 36 },
      { id: "dir-6", title: "Primary School Boundary Wall Deficit", ward: "Ward 3", category: "school_infrastructure", status: "open", lat: 20.3045, lng: 85.8265, reportCount: 24 },
      { id: "dir-7", title: "Feeder Line Power Outage", ward: "Ward 3", category: "electricity", status: "in_progress", lat: 20.3005, lng: 85.8220, reportCount: 15 },
    ],
  },
  {
    ward: "Ward 8",
    sectorName: "Bhauma Nagar Sector",
    issues: [
      { id: "dir-8", title: "Community Health Center (CHC) Bed Deficit", ward: "Ward 8", category: "health_clinic", status: "open", lat: 20.2798, lng: 85.8189, reportCount: 39 },
      { id: "dir-9", title: "Municipal Water Pump Motor Failure", ward: "Ward 8", category: "water_supply", status: "open", lat: 20.2775, lng: 85.8165, reportCount: 28 },
      { id: "dir-10", title: "Market Yard Open Garbage Dump", ward: "Ward 8", category: "sanitation", status: "in_progress", lat: 20.2810, lng: 85.8210, reportCount: 21 },
    ],
  },
  {
    ward: "Ward 1",
    sectorName: "Chandrasekharpur Sector",
    issues: [
      { id: "dir-11", title: "Government High School Roof Waterproofing", ward: "Ward 1", category: "school_infrastructure", status: "open", lat: 20.3250, lng: 85.8150, reportCount: 32 },
      { id: "dir-12", title: "District Avenue Kutcha Paving Need", ward: "Ward 1", category: "road_repair", status: "open", lat: 20.3275, lng: 85.8180, reportCount: 22 },
      { id: "dir-13", title: "Public Standpost Water Leakage", ward: "Ward 1", category: "water_supply", status: "resolved", lat: 20.3225, lng: 85.8120, reportCount: 18 },
    ],
  },
  {
    ward: "Ward 2",
    sectorName: "Patia KIIT Sector",
    issues: [
      { id: "dir-14", title: "Main Drainage Blockage near Square", ward: "Ward 2", category: "sanitation", status: "open", lat: 20.3520, lng: 85.8180, reportCount: 27 },
      { id: "dir-15", title: "University Road Pothole Stretch", ward: "Ward 2", category: "road_repair", status: "in_progress", lat: 20.3550, lng: 85.8210, reportCount: 41 },
      { id: "dir-16", title: "Streetlight Dark Zone Outage", ward: "Ward 2", category: "electricity", status: "open", lat: 20.3490, lng: 85.8150, reportCount: 17 },
    ],
  },
  {
    ward: "Ward 4",
    sectorName: "Acharya Vihar Sector",
    issues: [
      { id: "dir-17-a", title: "Overhanging High-Voltage Lines", ward: "Ward 4", category: "electricity", status: "open", lat: 20.2980, lng: 85.8290, reportCount: 22 },
      { id: "dir-17-b", title: "PHC Essential Medicine Access Gap", ward: "Ward 4", category: "health_clinic", status: "in_progress", lat: 20.2960, lng: 85.8310, reportCount: 18 },
    ],
  },
  {
    ward: "Ward 6",
    sectorName: "Old Town Lingaraj Sector",
    issues: [
      { id: "dir-18-a", title: "Heritage Temple Road Restoration", ward: "Ward 6", category: "road_repair", status: "open", lat: 20.2455, lng: 85.8355, reportCount: 35 },
      { id: "dir-18-b", title: "Public Standpost Tap Water Supply", ward: "Ward 6", category: "water_supply", status: "open", lat: 20.2430, lng: 85.8330, reportCount: 29 },
    ],
  },
  {
    ward: "Ward 7",
    sectorName: "Khandagiri Caves Sector",
    issues: [
      { id: "dir-19-a", title: "Tourist Complex Public Toilet Sanitation", ward: "Ward 7", category: "sanitation", status: "open", lat: 20.2580, lng: 85.7850, reportCount: 21 },
      { id: "dir-19-b", title: "Bus Shelter Lighting Outage", ward: "Ward 7", category: "electricity", status: "in_progress", lat: 20.2525, lng: 85.7795, reportCount: 14 },
    ],
  },
  {
    ward: "Khordha Town",
    sectorName: "Khordha Municipal HQ",
    issues: [
      { id: "dir-17", title: "Sub-Divisional Hospital (SDH) Ward Upgrade", ward: "Khordha Town", category: "health_clinic", status: "open", lat: 20.1874, lng: 85.6178, reportCount: 76 },
      { id: "dir-18", title: "Collectorate Main Road Resurfacing", ward: "Khordha Town", category: "road_repair", status: "open", lat: 20.1895, lng: 85.6205, reportCount: 52 },
      { id: "dir-19", title: "Main Bazaar Drinking Water Pipeline Repair", ward: "Khordha Town", category: "water_supply", status: "in_progress", lat: 20.1850, lng: 85.6150, reportCount: 38 },
      { id: "dir-20", title: "Town Model Primary School Classroom Deficit", ward: "Khordha Town", category: "school_infrastructure", status: "open", lat: 20.1910, lng: 85.6230, reportCount: 29 },
    ],
  },
  {
    ward: "Jatni Block",
    sectorName: "Jatni Railway Sector",
    issues: [
      { id: "dir-21", title: "Railway Overbridge Approach Road Craters", ward: "Jatni Block", category: "road_repair", status: "open", lat: 20.1520, lng: 85.7050, reportCount: 41 },
      { id: "dir-22", title: "Loco Colony Borewell Motor Failure", ward: "Jatni Block", category: "water_supply", status: "open", lat: 20.1545, lng: 85.7080, reportCount: 31 },
      { id: "dir-23", title: "Station Market Public Toilet Sanitation", ward: "Jatni Block", category: "sanitation", status: "open", lat: 20.1570, lng: 85.7110, reportCount: 23 },
    ],
  },
  {
    ward: "Barunei Area",
    sectorName: "Barunei Sanctuary Sector",
    issues: [
      { id: "dir-24", title: "Eco-Tourism Access Path Road Repair", ward: "Barunei Area", category: "road_repair", status: "open", lat: 20.1650, lng: 85.6320, reportCount: 25 },
      { id: "dir-25", title: "Mountain Stream Water Filter Plant Setup", ward: "Barunei Area", category: "water_supply", status: "open", lat: 20.1620, lng: 85.6290, reportCount: 19 },
    ],
  },
  {
    ward: "Kaipadar GP",
    sectorName: "Kaipadar Rural Panchayat",
    issues: [
      { id: "dir-26-a", title: "Rural Kutcha Road Surface Metal Paving", ward: "Kaipadar GP", category: "road_repair", status: "open", lat: 20.1320, lng: 85.5650, reportCount: 19 },
      { id: "dir-26-b", title: "Panchayat Drinking Water Tube-well Repair", ward: "Kaipadar GP", category: "water_supply", status: "open", lat: 20.1350, lng: 85.5680, reportCount: 16 },
    ],
  },
];

const CATEGORY_ICONS: Record<string, { symbol: string; bgStyle: string }> = {
  road_repair: { symbol: "🛠️", bgStyle: "bg-red-100 text-red-800 border-red-300" },
  water_supply: { symbol: "💧", bgStyle: "bg-blue-100 text-blue-800 border-blue-300" },
  health_clinic: { symbol: "🏥", bgStyle: "bg-emerald-100 text-emerald-800 border-emerald-300" },
  school_infrastructure: { symbol: "🏫", bgStyle: "bg-purple-100 text-purple-800 border-purple-300" },
  electricity: { symbol: "⚡", bgStyle: "bg-amber-100 text-amber-800 border-amber-300" },
  sanitation: { symbol: "🧹", bgStyle: "bg-orange-100 text-orange-800 border-orange-300" },
};

export default function WardIssueDirectory() {
  const { setCenter, selectIssue } = useCivicMap();
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeWard, setActiveWard] = useState<string | null>("Ward 5");
  const [wardSectors, setWardSectors] = useState(INITIAL_WARD_SECTORS);

  // Add Custom Ward/Address Modal State
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [customWardName, setCustomWardName] = useState("");
  const [customAddress, setCustomAddress] = useState("");
  const [customComplaintTitle, setCustomComplaintTitle] = useState("");
  const [customCategory, setCustomCategory] = useState<DirectoryIssue["category"]>("road_repair");

  const filteredSectors = useMemo(() => {
    if (!searchQuery.trim()) return wardSectors;
    const query = searchQuery.toLowerCase();
    return wardSectors
      .map((sector) => {
        const matchingIssues = sector.issues.filter(
          (issue) =>
            issue.title.toLowerCase().includes(query) ||
            issue.ward.toLowerCase().includes(query) ||
            issue.category.toLowerCase().includes(query)
        );
        return {
          ...sector,
          issues: matchingIssues,
        };
      })
      .filter((sector) => sector.issues.length > 0 || sector.ward.toLowerCase().includes(query));
  }, [searchQuery, wardSectors]);

  const handleLocateIssue = (issue: DirectoryIssue) => {
    setCenter(issue.lat, issue.lng, 15);
    selectIssue(issue.id);
  };

  const handleLocateWard = (lat: number, lng: number) => {
    setCenter(lat, lng, 13);
  };

  const handleAddCustomWard = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customComplaintTitle.trim() || (!customWardName.trim() && !customAddress.trim())) return;

    const wardLabel = customWardName.trim() || `Custom: ${customAddress.trim().slice(0, 18)}`;
    const sectorLabel = customAddress.trim() ? `${customAddress.trim()} Sector` : `${wardLabel} Sector`;
    
    // Generate slight offset coords near Khordha center for visualization
    const lat = 20.20 + (Math.random() * 0.12 - 0.06);
    const lng = 85.70 + (Math.random() * 0.14 - 0.07);
    const newIssueId = `custom-issue-${Date.now()}`;

    const newIssue: DirectoryIssue = {
      id: newIssueId,
      title: customComplaintTitle.trim(),
      ward: wardLabel,
      category: customCategory,
      status: "open",
      lat,
      lng,
      reportCount: 1,
    };

    setWardSectors((prev) => {
      const existingWardIdx = prev.findIndex((s) => s.ward.toLowerCase() === wardLabel.toLowerCase());
      if (existingWardIdx >= 0) {
        const updated = [...prev];
        updated[existingWardIdx] = {
          ...updated[existingWardIdx],
          issues: [newIssue, ...updated[existingWardIdx].issues],
        };
        return updated;
      } else {
        return [
          {
            ward: wardLabel,
            sectorName: sectorLabel,
            issues: [newIssue],
          },
          ...prev,
        ];
      }
    });

    // Automatically fly camera to newly added custom location
    setCenter(lat, lng, 15);
    selectIssue(newIssueId);

    // Reset Form
    setCustomWardName("");
    setCustomAddress("");
    setCustomComplaintTitle("");
    setIsAddModalOpen(false);
  };

  return (
    <div className="absolute left-4 top-[220px] z-[1000] w-auto max-w-[calc(100vw-2rem)] sm:w-[420px]">
      {/* Toggle Open/Close Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 rounded-xl border border-[#171817]/20 bg-white dark:bg-[#171817] px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-[#171817] dark:text-[#eeede9] shadow-xl backdrop-blur-md transition hover:bg-slate-50 dark:hover:bg-[#222522]"
      >
        <ListFilter className="h-4 w-4 text-[#e25a45]" />
        <span>📍 Ward & Issue Directory ({wardSectors.length} Wards)</span>
        {isOpen ? (
          <ChevronUp className="h-4 w-4 text-[#171817]/60 dark:text-white/60" />
        ) : (
          <ChevronDown className="h-4 w-4 text-[#171817]/60 dark:text-white/60" />
        )}
      </button>

      {/* Expanded Directory Drawer Panel */}
      {isOpen && (
        <div
          className="mt-2 flex max-h-[calc(100vh-270px)] w-full flex-col rounded-2xl border border-[#171817]/20 bg-white text-[#171817] p-4 shadow-2xl backdrop-blur-md opacity-100"
          style={{ backgroundColor: "#ffffff" }}
        >
          {/* Panel Header */}
          <div className="flex items-center justify-between border-b border-[#171817]/15 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#e25a45] text-white">
                <MapPin className="h-4 w-4" />
              </div>
              <div>
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#171817]">
                  Khordha Wards & Issues ({wardSectors.length})
                </h3>
                <p className="text-[10px] text-[#171817]/60">
                  Select issue to fly map & pinpoint affected radius
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setIsAddModalOpen(true)}
                className="flex items-center gap-1 rounded-lg bg-[#171817] px-2 py-1 font-mono text-[10px] font-bold text-white shadow transition hover:bg-[#e25a45]"
                title="Add custom ward or street address complaint"
              >
                <PlusCircle className="h-3.5 w-3.5" />
                <span>+ Add Ward/Address</span>
              </button>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close directory"
                className="rounded-lg p-1.5 text-[#171817]/60 hover:bg-slate-100"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Search Filter */}
          <div className="relative my-3">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-[#171817]/40" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Ward, Address or Issue Category..."
              className="w-full rounded-xl border border-[#171817]/20 bg-[#f6f5f2] py-2 pl-9 pr-3 text-xs text-[#171817] focus:outline-none focus:ring-2 focus:ring-[#e25a45]"
            />
          </div>

          {/* Sector & Issue List */}
          <div className="flex-1 overflow-y-auto space-y-3 pr-1 text-xs">
            {filteredSectors.map((sector) => {
              const isExpanded = activeWard === sector.ward || searchQuery.trim().length > 0;
              const firstIssue = sector.issues[0];

              return (
                <div
                  key={sector.ward}
                  className="rounded-xl border border-[#171817]/15 bg-[#f9f8f5] p-3 shadow-sm space-y-2.5"
                >
                  {/* Ward Header */}
                  <div className="flex items-center justify-between">
                    <div
                      onClick={() => setActiveWard(isExpanded ? null : sector.ward)}
                      className="flex cursor-pointer items-center gap-2"
                    >
                      <span className="rounded-lg bg-[#171817] px-2.5 py-1 font-mono text-[10px] font-bold text-white">
                        {sector.ward}
                      </span>
                      <span className="font-bold text-[#171817] text-xs">{sector.sectorName}</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        if (firstIssue) {
                          handleLocateWard(firstIssue.lat, firstIssue.lng);
                          selectIssue(firstIssue.id);
                        }
                      }}
                      className="inline-flex items-center gap-1 rounded-lg bg-[#e25a45] px-2.5 py-1 font-mono text-[10px] font-bold text-white shadow hover:bg-[#d44833]"
                      title="Fly map to ward center and open sector intelligence"
                    >
                      <Crosshair className="h-3.5 w-3.5" />
                      <span>Locate Sector</span>
                    </button>
                  </div>

                  {/* Ward Issue Items */}
                  {isExpanded && (
                    <div className="space-y-2 pt-1 border-t border-[#171817]/10">
                      {sector.issues.map((issue) => {
                        const iconData = CATEGORY_ICONS[issue.category] || { symbol: "📍", bgStyle: "bg-slate-100 text-slate-800" };

                        return (
                          <div
                            key={issue.id}
                            onClick={() => handleLocateIssue(issue)}
                            className="group flex items-center justify-between rounded-xl border border-[#171817]/10 bg-white p-2.5 transition hover:border-[#e25a45] hover:bg-red-50/40 cursor-pointer shadow-sm"
                          >
                            <div className="flex items-start gap-2.5 pr-2">
                              <span className="text-base shrink-0 mt-0.5">{iconData.symbol}</span>
                              <div className="space-y-1">
                                <p className="font-semibold text-[#171817] text-xs leading-snug group-hover:text-[#e25a45]">
                                  {issue.title}
                                </p>
                                <div className="flex items-center gap-2">
                                  <span className={`px-2 py-0.5 rounded border font-mono text-[9px] font-bold uppercase ${iconData.bgStyle}`}>
                                    {issue.category.replace("_", " ")}
                                  </span>
                                  <span className="font-mono text-[10px] text-[#171817]/60 font-semibold">
                                    {issue.reportCount} Complaints
                                  </span>
                                </div>
                              </div>
                            </div>

                            <button
                              type="button"
                              className="shrink-0 rounded-xl bg-[#171817] p-2 text-white opacity-85 group-hover:opacity-100 group-hover:bg-[#e25a45] transition"
                            >
                              <Crosshair className="h-4 w-4" />
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Add Custom Ward / Address Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-md rounded-2xl border border-[#171817]/20 bg-white p-6 text-[#171817] shadow-2xl">
            <div className="flex items-center justify-between border-b pb-3">
              <div className="flex items-center gap-2">
                <PlusCircle className="h-5 w-5 text-[#e25a45]" />
                <h3 className="font-bold text-base text-[#171817]">Add Custom Ward or Address</h3>
              </div>
              <button
                type="button"
                onClick={() => setIsAddModalOpen(false)}
                className="rounded-lg p-1 text-slate-500 hover:bg-slate-100"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleAddCustomWard} className="mt-4 space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#171817] mb-1">
                  Existing Ward OR Custom Ward Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Ward 9, or Custom: Saheed Nagar Sector 2"
                  value={customWardName}
                  onChange={(e) => setCustomWardName(e.target.value)}
                  className="w-full rounded-xl border border-[#171817]/20 bg-[#f6f5f2] px-3 py-2 text-xs outline-none focus:ring-2 focus:ring-[#e25a45]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#171817] mb-1">
                  Direct Street Address / Location Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Gautam Nagar Lane 4, near Railway Gate, Khordha"
                  value={customAddress}
                  onChange={(e) => setCustomAddress(e.target.value)}
                  className="w-full rounded-xl border border-[#171817]/20 bg-[#f6f5f2] px-3 py-2 text-xs outline-none focus:ring-2 focus:ring-[#e25a45]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#171817] mb-1">
                  Issue Category
                </label>
                <select
                  value={customCategory}
                  onChange={(e) => setCustomCategory(e.target.value as DirectoryIssue["category"])}
                  className="w-full rounded-xl border border-[#171817]/20 bg-[#f6f5f2] px-3 py-2 text-xs outline-none focus:ring-2 focus:ring-[#e25a45]"
                >
                  <option value="road_repair">🛠️ Road Repair</option>
                  <option value="water_supply">💧 Water Supply</option>
                  <option value="health_clinic">🏥 Health Clinic</option>
                  <option value="school_infrastructure">🏫 School Infrastructure</option>
                  <option value="electricity">⚡ Electricity Grid</option>
                  <option value="sanitation">🧹 Sanitation & Garbage</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#171817] mb-1">
                  Complaint Title / Problem Description
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Describe the civic issue experienced at this address..."
                  value={customComplaintTitle}
                  onChange={(e) => setCustomComplaintTitle(e.target.value)}
                  className="w-full rounded-xl border border-[#171817]/20 bg-[#f6f5f2] px-3 py-2 text-xs outline-none focus:ring-2 focus:ring-[#e25a45]"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="rounded-xl border border-[#171817]/20 px-4 py-2 text-xs font-semibold text-[#171817] hover:bg-slate-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-[#e25a45] px-4 py-2 text-xs font-bold text-white shadow hover:bg-[#d44833]"
                >
                  Save & Map Location
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
