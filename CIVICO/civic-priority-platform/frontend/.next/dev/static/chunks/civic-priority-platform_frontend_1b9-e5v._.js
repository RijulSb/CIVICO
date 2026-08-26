(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/civic-priority-platform/frontend/app/priorities/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PrioritiesLinearWorkspace
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/components/layout/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$feedback$2f$FeedbackHub$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/components/feedback/FeedbackHub.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/icons/download.mjs [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCheck$3e$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/icons/file-check.mjs [app-client] (ecmascript) <export default as FileCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/icons/play.mjs [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/icons/circle-plus.mjs [app-client] (ecmascript) <export default as PlusCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$vertical$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sliders$3e$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/icons/sliders-vertical.mjs [app-client] (ecmascript) <export default as Sliders>");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
;
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
// Dynamic import for Leaflet Ward Coverage Map
const WardCoverageMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/civic-priority-platform/frontend/components/priorities/WardCoverageMap.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/civic-priority-platform/frontend/components/priorities/WardCoverageMap.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-64 w-full items-center justify-center rounded-xl bg-slate-100 font-mono text-xs text-slate-500",
            children: "Loading Ward Coverage Map..."
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
            lineNumber: 12,
            columnNumber: 18
        }, ("TURBOPACK compile-time value", void 0))
});
_c = WardCoverageMap;
const DEFAULT_WARDS = [
    {
        id: "ward_005",
        name: "Ward 5",
        block: "Khordha Block",
        population: 15000,
        demandCount: 126,
        dominantTheme: "Road repair",
        latitude: 20.2874,
        longitude: 85.8378,
        customAddress: "Saheed Nagar Sector",
        infraGap: "Connecting asphalt road deficit 4.8 km"
    },
    {
        id: "ward_012",
        name: "Ward 12",
        block: "School Sector",
        population: 12000,
        demandCount: 98,
        dominantTheme: "School infrastructure",
        latitude: 20.3045,
        longitude: 85.8265,
        customAddress: "Primary School Lane",
        infraGap: "Classroom & lab infrastructure gap"
    },
    {
        id: "ward_008",
        name: "Ward 8",
        block: "Bhauma Nagar",
        population: 28000,
        demandCount: 84,
        dominantTheme: "Health access",
        latitude: 20.2798,
        longitude: 85.8189,
        customAddress: "Community Center Road",
        infraGap: "Longest travel distance to CHC/SDH"
    },
    {
        id: "ward_003",
        name: "Ward 3",
        block: "Jaydev Vihar",
        population: 18500,
        demandCount: 76,
        dominantTheme: "Sanitation & Drains",
        latitude: 20.3021,
        longitude: 85.8241,
        customAddress: "Flyover Approach",
        infraGap: "Seasonal stormwater flooding"
    },
    {
        id: "ward_001",
        name: "Ward 1",
        block: "Chandrasekharpur",
        population: 14200,
        demandCount: 65,
        dominantTheme: "Water supply",
        latitude: 20.3250,
        longitude: 85.8150,
        customAddress: "District Avenue",
        infraGap: "Public standpost pipe leaks"
    }
];
const DEFAULT_PROJECTS = [
    {
        id: "proj_001",
        wardId: "ward_005",
        wardName: "Ward 5",
        title: "Main road resurfacing & pothole repair (4.8 km)",
        category: "road",
        estimatedCost: 80000000,
        estimatedMonths: 6,
        affectedPopulation: 15000,
        demandCount: 126,
        demandScore: 95,
        urgencyScore: 92,
        equityScore: 75,
        costEffectivenessScore: 88,
        alignmentScore: 90,
        benefitScore: 91.2,
        dependencyIds: [],
        selectionReason: "High citizen demand (126 requests) and 6,000 daily commuters benefited.",
        status: "selected"
    },
    {
        id: "proj_002",
        wardId: "ward_012",
        wardName: "Ward 12",
        title: "Government Primary School upgrade & science lab",
        category: "school",
        estimatedCost: 60000000,
        estimatedMonths: 8,
        affectedPopulation: 12000,
        demandCount: 98,
        demandScore: 88,
        urgencyScore: 85,
        equityScore: 90,
        costEffectivenessScore: 85,
        alignmentScore: 88,
        benefitScore: 87.4,
        dependencyIds: [],
        selectionReason: "Large enrolment deficit and 5.2 km travel distance gap to nearest secondary school.",
        status: "selected"
    },
    {
        id: "proj_003",
        wardId: "ward_008",
        wardName: "Ward 8",
        title: "Community Health Center (CHC) expansion & bed upgrade",
        category: "health",
        estimatedCost: 120000000,
        estimatedMonths: 12,
        affectedPopulation: 28000,
        demandCount: 84,
        demandScore: 82,
        urgencyScore: 90,
        equityScore: 88,
        costEffectivenessScore: 80,
        alignmentScore: 85,
        benefitScore: 84.6,
        dependencyIds: [],
        selectionReason: "Critical healthcare access gap; resolves longest travel distance to hospital.",
        status: "selected"
    },
    {
        id: "proj_004",
        wardId: "ward_003",
        wardName: "Ward 3",
        title: "Bio-Sanitation Plant & Stormwater Drain Grid",
        category: "sanitation",
        estimatedCost: 85000000,
        estimatedMonths: 9,
        affectedPopulation: 18500,
        demandCount: 76,
        demandScore: 78,
        urgencyScore: 80,
        equityScore: 82,
        costEffectivenessScore: 84,
        alignmentScore: 86,
        benefitScore: 81.5,
        dependencyIds: [],
        selectionReason: "High urban flooding risk & seasonal sanitation overload.",
        status: "selected"
    },
    {
        id: "proj_005",
        wardId: "ward_001",
        wardName: "Ward 1",
        title: "Drinking Water Pipeline Network & Standposts",
        category: "water",
        estimatedCost: 81000000,
        estimatedMonths: 7,
        affectedPopulation: 14200,
        demandCount: 65,
        demandScore: 72,
        urgencyScore: 78,
        equityScore: 85,
        costEffectivenessScore: 80,
        alignmentScore: 82,
        benefitScore: 78.3,
        dependencyIds: [],
        selectionReason: "Direct drinking water supply for 14,200 residents.",
        status: "selected"
    },
    {
        id: "proj_006",
        wardId: "ward_012",
        wardName: "Ward 12",
        title: "Build Vocational Skill Training Centre",
        category: "livelihood",
        estimatedCost: 140000000,
        estimatedMonths: 14,
        affectedPopulation: 8500,
        demandCount: 42,
        demandScore: 60,
        urgencyScore: 62,
        equityScore: 70,
        costEffectivenessScore: 65,
        alignmentScore: 72,
        benefitScore: 64.8,
        dependencyIds: [
            "proj_002"
        ],
        selectionReason: "",
        exclusionReason: "Cost ₹14 Cr; lower immediate urgency score (62/100) and benefit per crore than the selected school upgrade.",
        status: "excluded"
    }
];
function PrioritiesLinearWorkspace() {
    _s();
    const { showSuccess, showError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$feedback$2f$FeedbackHub$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFeedback"])();
    // 5 Visible Workspace Stages
    const [currentStep, setCurrentStep] = __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](1);
    // State Management
    const [wards, setWards] = __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](DEFAULT_WARDS);
    const [projects, setProjects] = __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](DEFAULT_PROJECTS);
    const [expandedWardId, setExpandedWardId] = __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const [expandedProjectId, setExpandedProjectId] = __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    // Constraints State
    const [constraints, setConstraints] = __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        budget: 450000000,
        // ₹45 Cr
        timelineMonths: 18,
        maxProjectsPerWard: 2,
        maxConcurrentProjects: 6,
        minimumWardCoverage: 4,
        requireDependencyOrder: true,
        preserveGeographicBalance: true,
        reservePercent: 5
    });
    // Optimization Execution State
    const [isOptimizing, setIsOptimizing] = __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [optimizingStepText, setOptimizingStepText] = __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]("");
    const [optimizationResult, setOptimizationResult] = __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    // Add Ward Modal Form State
    const [isAddWardModalOpen, setIsAddWardModalOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [newWardName, setNewWardName] = __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]("");
    const [newBlockName, setNewBlockName] = __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]("Khordha Block");
    const [newCustomAddress, setNewCustomAddress] = __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]("");
    const [newPopulation, setNewPopulation] = __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]("15000");
    const [newDemandCount, setNewDemandCount] = __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]("45");
    const [newTheme, setNewTheme] = __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]("road");
    const [newInfraGap, setNewInfraGap] = __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]("");
    // ---------------------------------------------------------------------------
    // Action Handlers
    // ---------------------------------------------------------------------------
    const handleAddWardSubmit = (e)=>{
        e.preventDefault();
        if (!newWardName.trim()) return;
        const wardId = `ward_${Date.now()}`;
        const lat = 20.20 + (Math.random() * 0.12 - 0.06);
        const lng = 85.70 + (Math.random() * 0.14 - 0.07);
        const addedWard = {
            id: wardId,
            name: newWardName.trim(),
            block: newBlockName.trim() || "Khordha Block",
            population: parseInt(newPopulation) || 15000,
            demandCount: parseInt(newDemandCount) || 30,
            dominantTheme: newTheme,
            latitude: lat,
            longitude: lng,
            customAddress: newCustomAddress.trim() || undefined,
            infraGap: newInfraGap.trim() || undefined
        };
        setWards((prev)=>[
                addedWard,
                ...prev
            ]);
        // Automatically generate a candidate proposal project for the new ward
        const newProjId = `proj_${Date.now()}`;
        const categoryLabels = {
            road: "Road resurfacing & pothole repair",
            school: "Primary school upgrade",
            health: "Health clinic expansion",
            water: "Drinking water pipeline network",
            sanitation: "Drainage & bio-sanitation grid",
            electricity: "Feeder line transformer upgrade",
            livelihood: "Skill training center"
        };
        const newProject = {
            id: newProjId,
            wardId: wardId,
            wardName: addedWard.name,
            title: `${categoryLabels[newTheme] || "Infrastructure upgrade"} in ${addedWard.name}`,
            category: newTheme,
            estimatedCost: 75000000,
            // ₹7.5 Cr
            estimatedMonths: 8,
            affectedPopulation: addedWard.population,
            demandCount: addedWard.demandCount,
            demandScore: 85,
            urgencyScore: 82,
            equityScore: 80,
            costEffectivenessScore: 84,
            alignmentScore: 86,
            benefitScore: 84.2,
            dependencyIds: [],
            selectionReason: `Generated proposal from ${addedWard.demandCount} citizen demand reports in ${addedWard.name}.`,
            status: "candidate"
        };
        setProjects((prev_0)=>[
                newProject,
                ...prev_0
            ]);
        showSuccess("Ward & Candidate Project Added ✓", `Added ${addedWard.name} with project "${newProject.title}".`);
        setIsAddWardModalOpen(false);
        setNewWardName("");
        setNewCustomAddress("");
        setNewInfraGap("");
    };
    // ---------------------------------------------------------------------------
    // Fetch real ward population data on mount from backend context API
    // ---------------------------------------------------------------------------
    __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "PrioritiesLinearWorkspace.useEffect": ()=>{
            const API_BASE = ("TURBOPACK compile-time value", "http://localhost:8000") || "http://localhost:8000";
            fetch(`${API_BASE}/api/v1/context/wards`, {
                signal: AbortSignal.timeout(3000)
            }).then({
                "PrioritiesLinearWorkspace.useEffect": (r)=>r.json()
            }["PrioritiesLinearWorkspace.useEffect"]).then({
                "PrioritiesLinearWorkspace.useEffect": (wardRecords)=>{
                    if (!Array.isArray(wardRecords) || wardRecords.length === 0) return;
                    // Merge real population numbers into DEFAULT_WARDS where ward_id matches
                    setWards({
                        "PrioritiesLinearWorkspace.useEffect": (prev_1)=>prev_1.map({
                                "PrioritiesLinearWorkspace.useEffect": (w)=>{
                                    const real = wardRecords.find({
                                        "PrioritiesLinearWorkspace.useEffect.real": (r_0)=>r_0.ward_id?.toLowerCase().includes(w.name.toLowerCase().replace("ward ", "")) || r_0.ward_name?.toLowerCase().includes(w.name.toLowerCase().replace("ward ", ""))
                                    }["PrioritiesLinearWorkspace.useEffect.real"]);
                                    if (real) {
                                        return {
                                            ...w,
                                            population: Math.round((real.population_thousands || w.population / 1000) * 1000),
                                            block: real.zone_name ? `${real.zone_name} Zone` : w.block
                                        };
                                    }
                                    return w;
                                }
                            }["PrioritiesLinearWorkspace.useEffect"])
                    }["PrioritiesLinearWorkspace.useEffect"]);
                }
            }["PrioritiesLinearWorkspace.useEffect"]).catch({
                "PrioritiesLinearWorkspace.useEffect": ()=>{
                // Backend offline — default wards remain, no crash
                }
            }["PrioritiesLinearWorkspace.useEffect"]);
        }
    }["PrioritiesLinearWorkspace.useEffect"], []);
    const handleRunOptimization = async ()=>{
        setCurrentStep(4);
        setIsOptimizing(true);
        setOptimizingStepText("Launching 0/1 Knapsack ILP solver...");
        const API_BASE_0 = ("TURBOPACK compile-time value", "http://localhost:8000") || "http://localhost:8000";
        // Show animated step text while we wait (non-blocking)
        const steps = [
            "Analyzing citizen demand scores across all wards...",
            "Applying budget & contingency reserve constraints...",
            "Resolving ward concentration limits & dependencies...",
            "Executing Integer Linear Programming solver (PuLP CBC)...",
            "Building explainable portfolio recommendations..."
        ];
        let stepIdx = 0;
        const stepInterval = setInterval(()=>{
            stepIdx = (stepIdx + 1) % steps.length;
            setOptimizingStepText(steps[stepIdx]);
        }, 700);
        try {
            // Hard 5-second timeout — never hang indefinitely
            const controller = new AbortController();
            const timeout = setTimeout(()=>controller.abort(), 5000);
            const res = await fetch(`${API_BASE_0}/api/v1/optimization/run`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                signal: controller.signal,
                body: JSON.stringify({
                    constituency: "khordha",
                    projectIds: projects.map((p_1)=>p_1.id),
                    constraints: constraints
                })
            });
            clearTimeout(timeout);
            clearInterval(stepInterval);
            if (res.ok) {
                const data = await res.json();
                setOptimizationResult(data);
                setIsOptimizing(false);
                setCurrentStep(5);
                showSuccess("Portfolio Optimization Completed ✓", `Selected ${data.summary?.selectedProjectCount} projects · ₹${data.summary?.totalCost} Cr allocated`);
                return;
            }
            throw new Error(`Server returned ${res.status}`);
        } catch (err) {
            clearInterval(stepInterval);
            if (err?.name !== "AbortError") {
                console.warn("Optimization backend fallback:", err?.message);
            }
            // ---------- Local knapsack fallback (instant) ----------
            const netBudget = constraints.budget * (1 - constraints.reservePercent / 100);
            const sorted = [
                ...projects
            ].sort((a, b)=>b.benefitScore / (b.estimatedCost / 1e7) - a.benefitScore / (a.estimatedCost / 1e7));
            const selected = [];
            const rejected = [];
            let accumulated = 0;
            const wardCounts = {};
            for (const proj of sorted){
                const wc = wardCounts[proj.wardId] || 0;
                if (accumulated + proj.estimatedCost <= netBudget && wc < constraints.maxProjectsPerWard && selected.length < constraints.maxConcurrentProjects) {
                    selected.push({
                        ...proj,
                        status: "selected"
                    });
                    accumulated += proj.estimatedCost;
                    wardCounts[proj.wardId] = wc + 1;
                } else {
                    const reason = accumulated + proj.estimatedCost > netBudget ? `Budget exceeded — ₹${(proj.estimatedCost / 1e7).toFixed(1)} Cr would exceed ₹${(netBudget / 1e7).toFixed(1)} Cr net limit.` : wc >= constraints.maxProjectsPerWard ? `Ward project cap reached (max ${constraints.maxProjectsPerWard} per ward).` : `Active project capacity full (max ${constraints.maxConcurrentProjects} concurrent).`;
                    rejected.push({
                        ...proj,
                        status: "excluded",
                        exclusionReason: reason
                    });
                }
            }
            const totalCostCr = +(accumulated / 1e7).toFixed(1);
            const remainingCr = +((constraints.budget - accumulated) / 1e7).toFixed(1);
            const avgBenefit = +(selected.reduce((s, p)=>s + p.benefitScore, 0) / Math.max(selected.length, 1)).toFixed(1);
            const wardCoverage = new Set(selected.map((p_0)=>p_0.wardId)).size;
            setOptimizationResult({
                runId: `run_local_${Date.now()}`,
                status: "completed",
                source: "local_knapsack",
                summary: {
                    selectedProjectCount: selected.length,
                    totalCost: totalCostCr,
                    remainingBudget: remainingCr,
                    totalBenefit: avgBenefit,
                    wardCoverage,
                    totalWardsTested: wards.length,
                    utilizationPercent: +(accumulated / constraints.budget * 100).toFixed(1)
                },
                selectedProjects: selected,
                rejectedProjects: rejected,
                constraintsStatus: [
                    {
                        name: "Available Budget Limit",
                        satisfied: accumulated <= netBudget,
                        detail: `₹${totalCostCr} Cr allocated within ₹${(netBudget / 1e7).toFixed(1)} Cr net limit (${constraints.reservePercent}% reserve held).`
                    },
                    {
                        name: "Planning Timeline",
                        satisfied: true,
                        detail: `All ${selected.length} projects complete within ${constraints.timelineMonths} months.`
                    },
                    {
                        name: "Minimum Ward Coverage",
                        satisfied: wardCoverage >= constraints.minimumWardCoverage,
                        detail: `${wardCoverage} wards funded (min ${constraints.minimumWardCoverage} required).`
                    },
                    {
                        name: "Max Projects Per Ward",
                        satisfied: true,
                        detail: `Enforced max ${constraints.maxProjectsPerWard} projects per ward.`
                    },
                    {
                        name: "Contingency Reserve",
                        satisfied: true,
                        detail: `₹${remainingCr} Cr held as unallocated emergency reserve.`
                    }
                ],
                explanations: [
                    `Selected ${selected.length} of ${projects.length} proposals for maximum citizen benefit (avg ${avgBenefit}/100).`,
                    `₹${totalCostCr} Cr committed across ${wardCoverage} wards — ${+(accumulated / constraints.budget * 100).toFixed(0)}% budget utilization.`
                ]
            });
            showSuccess("Optimization Complete ✓", `${selected.length} projects · ₹${totalCostCr} Cr · ${wardCoverage} wards covered`);
        } finally{
            setIsOptimizing(false);
            setCurrentStep(5);
        }
    };
    const handleExportCSV = ()=>{
        const csvRows = [
            [
                "CIVICO PORTFOLIO OPTIMIZATION REPORT"
            ],
            [
                "Constituency",
                "Khordha Lok Sabha"
            ],
            [
                "Date",
                new Date().toISOString()
            ],
            [],
            [
                "Priority",
                "Project Title",
                "Category",
                "Ward",
                "Cost (Cr)",
                "Duration (Mo)",
                "Benefit Score",
                "Demand Count",
                "Reason"
            ],
            ...(optimizationResult?.selectedProjects || projects.filter((p_2)=>p_2.status === "selected")).map((p_3, i)=>[
                    i + 1,
                    p_3.title,
                    p_3.category,
                    p_3.wardName || p_3.ward,
                    (p_3.estimatedCost / 1e7).toFixed(1),
                    p_3.estimatedMonths || 8,
                    p_3.benefitScore || 85,
                    p_3.demandCount || 45,
                    p_3.selectionReason || "Optimal benefit per crore"
                ])
        ];
        const csvContent = "data:text/csv;charset=utf-8," + csvRows.map((r_1)=>r_1.map((c)=>`"${c}"`).join(",")).join("\n");
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", `CIVICO_Portfolio_Allocation_Plan_${constraints.budget / 1e7}Cr.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        showSuccess("Allocation Plan Exported ✓", "Downloaded CSV report.");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#f6f5f2] text-[#171817] font-sans",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                lineNumber: 495,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10 space-y-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-6 border-b border-[#171817]/15 pb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center justify-between gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "inline-flex items-center gap-2 rounded-full border border-[#171817]/15 bg-white px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-[#171817]/70 shadow-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$vertical$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sliders$3e$__["Sliders"], {
                                                className: "h-3.5 w-3.5 text-[#e25a45]"
                                            }, void 0, false, {
                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                lineNumber: 504,
                                                columnNumber: 15
                                            }, this),
                                            "Linear Decision Workspace • Khordha Constituency"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                        lineNumber: 503,
                                        columnNumber: 13
                                    }, this),
                                    currentStep === 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: handleExportCSV,
                                        className: "inline-flex items-center gap-2 rounded-xl bg-[#171817] px-4 py-2 text-xs font-bold text-white shadow transition hover:bg-[#e25a45] cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                lineNumber: 509,
                                                columnNumber: 17
                                            }, this),
                                            "Export Plan (CSV)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                        lineNumber: 508,
                                        columnNumber: 35
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                lineNumber: 502,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-3xl font-black uppercase tracking-tight text-[#171817] sm:text-5xl",
                                        children: "Portfolio Optimization Workbench"
                                    }, void 0, false, {
                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                        lineNumber: 515,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-sm text-[#171817]/70 max-w-3xl",
                                        children: "Given available budget, timeline, ward needs, and implementation limits — which projects should be funded first?"
                                    }, void 0, false, {
                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                        lineNumber: 518,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                lineNumber: 514,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full rounded-2xl border border-[#171817]/15 bg-white p-4 shadow-sm",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between font-mono text-xs",
                                    children: [
                                        {
                                            step: 1,
                                            label: "01 Wards"
                                        },
                                        {
                                            step: 2,
                                            label: "02 Candidate Projects"
                                        },
                                        {
                                            step: 3,
                                            label: "03 Constraints"
                                        },
                                        {
                                            step: 4,
                                            label: "04 Optimize"
                                        },
                                        {
                                            step: 5,
                                            label: "05 Allocation Plan"
                                        }
                                    ].map((s_0, idx)=>{
                                        const isActive = currentStep === s_0.step;
                                        const isDone = currentStep > s_0.step;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>{
                                                        // Step 4 (Optimize) is only triggered via the "Run Portfolio Optimization"
                                                        // button on the Constraints page — never via stepper nav.
                                                        if (s_0.step === 4) return;
                                                        setCurrentStep(s_0.step);
                                                    },
                                                    title: s_0.step === 4 ? "Use 'Run Portfolio Optimization' on the Constraints page" : undefined,
                                                    className: `flex items-center gap-2 font-bold px-3 py-1.5 rounded-xl transition ${s_0.step === 4 ? isActive ? "bg-[#171817] text-white shadow cursor-default" : isDone ? "bg-emerald-100 text-emerald-950 cursor-default" : "text-[#171817]/30 cursor-not-allowed" : isActive ? "bg-[#171817] text-white shadow cursor-pointer" : isDone ? "bg-emerald-100 text-emerald-950 hover:bg-emerald-200 cursor-pointer" : "text-[#171817]/50 hover:bg-slate-100 cursor-pointer"}`,
                                                    children: [
                                                        isDone ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                            className: "h-3.5 w-3.5 text-emerald-600"
                                                        }, void 0, false, {
                                                            fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                            lineNumber: 551,
                                                            columnNumber: 33
                                                        }, this) : null,
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: s_0.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                            lineNumber: 552,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                    lineNumber: 545,
                                                    columnNumber: 21
                                                }, this),
                                                idx < 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                    className: "h-4 w-4 text-[#171817]/30 shrink-0 hidden sm:block"
                                                }, void 0, false, {
                                                    fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                    lineNumber: 554,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, s_0.step, true, {
                                            fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                            lineNumber: 544,
                                            columnNumber: 22
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                    lineNumber: 525,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                lineNumber: 524,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                        lineNumber: 501,
                        columnNumber: 9
                    }, this),
                    currentStep === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "space-y-6 animate-in fade-in",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl border border-[#171817]/15 bg-white p-6 shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono text-xs font-bold text-[#e25a45] uppercase tracking-wider",
                                                children: "Stage 01 • Ward Needs Directory"
                                            }, void 0, false, {
                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                lineNumber: 567,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl font-black text-[#171817] mt-1",
                                                children: [
                                                    "Review & Add Constituency Wards (",
                                                    wards.length,
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                lineNumber: 570,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-[#171817]/65 mt-1",
                                                children: "Input ward details, citizen demand counts, population, and dominant infrastructure gaps."
                                            }, void 0, false, {
                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                lineNumber: 573,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                        lineNumber: 566,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setIsAddWardModalOpen(true),
                                                className: "flex items-center gap-2 rounded-xl bg-[#e25a45] px-4 py-2.5 text-xs font-bold text-white shadow transition hover:bg-[#d44833] cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__["PlusCircle"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                        lineNumber: 580,
                                                        columnNumber: 19
                                                    }, this),
                                                    "+ Add Ward / Address"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                lineNumber: 579,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setCurrentStep(2),
                                                className: "flex items-center gap-2 rounded-xl bg-[#171817] px-4 py-2.5 text-xs font-bold text-white shadow transition hover:bg-[#333] cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Continue to Projects"
                                                    }, void 0, false, {
                                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                        lineNumber: 585,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                        lineNumber: 586,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                lineNumber: 584,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                        lineNumber: 578,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                lineNumber: 565,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl border border-[#171817]/15 bg-white overflow-hidden shadow-sm",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "overflow-x-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: "w-full text-left font-sans text-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                className: "border-b border-[#171817]/15 bg-[#f6f5f2] font-mono text-[11px] font-bold uppercase text-[#171817]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "py-3.5 px-4",
                                                            children: "Ward / Sector"
                                                        }, void 0, false, {
                                                            fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                            lineNumber: 597,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "py-3.5 px-4",
                                                            children: "Block / Area"
                                                        }, void 0, false, {
                                                            fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                            lineNumber: 598,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "py-3.5 px-4",
                                                            children: "Dominant Need"
                                                        }, void 0, false, {
                                                            fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                            lineNumber: 599,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "py-3.5 px-4",
                                                            children: "Demand"
                                                        }, void 0, false, {
                                                            fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                            lineNumber: 600,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "py-3.5 px-4",
                                                            children: "Population"
                                                        }, void 0, false, {
                                                            fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                            lineNumber: 601,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "py-3.5 px-4 text-right",
                                                            children: "Action"
                                                        }, void 0, false, {
                                                            fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                            lineNumber: 602,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                    lineNumber: 596,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                lineNumber: 595,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                className: "divide-y divide-[#171817]/10",
                                                children: wards.map((w_0)=>{
                                                    const isExpanded = expandedWardId === w_0.id;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                className: "hover:bg-slate-50 transition",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "py-3.5 px-4 font-bold text-[#171817]",
                                                                        children: [
                                                                            w_0.name,
                                                                            w_0.customAddress && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "block text-[10px] font-normal text-[#171817]/60",
                                                                                children: [
                                                                                    "📍 ",
                                                                                    w_0.customAddress
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                                lineNumber: 612,
                                                                                columnNumber: 53
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                        lineNumber: 610,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "py-3.5 px-4 font-mono text-slate-700",
                                                                        children: w_0.block
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                        lineNumber: 616,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "py-3.5 px-4",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "rounded-md bg-red-100 px-2 py-0.5 font-mono text-[10px] font-bold text-red-800",
                                                                            children: w_0.dominantTheme
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                            lineNumber: 618,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                        lineNumber: 617,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "py-3.5 px-4 font-mono font-bold text-[#171817]",
                                                                        children: [
                                                                            w_0.demandCount,
                                                                            " Submissions"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                        lineNumber: 622,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "py-3.5 px-4 font-mono text-slate-700",
                                                                        children: [
                                                                            w_0.population.toLocaleString(),
                                                                            " residents"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                        lineNumber: 625,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "py-3.5 px-4 text-right",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            onClick: ()=>setExpandedWardId(isExpanded ? null : w_0.id),
                                                                            className: "font-mono text-[11px] font-bold text-[#e25a45] hover:underline cursor-pointer",
                                                                            children: isExpanded ? "Close Data ▲" : "Edit Data ▼"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                            lineNumber: 629,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                        lineNumber: 628,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                lineNumber: 609,
                                                                columnNumber: 27
                                                            }, this),
                                                            isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    colSpan: 6,
                                                                    className: "bg-[#f9f8f5] p-4 border-b border-[#171817]/10",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-[#171817]/60 text-[10px] block",
                                                                                        children: "Geographic Coordinates"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                                        lineNumber: 640,
                                                                                        columnNumber: 37
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "font-bold",
                                                                                        children: [
                                                                                            w_0.latitude.toFixed(4),
                                                                                            "° N, ",
                                                                                            w_0.longitude.toFixed(4),
                                                                                            "° E"
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                                        lineNumber: 641,
                                                                                        columnNumber: 37
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                                lineNumber: 639,
                                                                                columnNumber: 35
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-[#171817]/60 text-[10px] block",
                                                                                        children: "Existing Infrastructure Gap"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                                        lineNumber: 644,
                                                                                        columnNumber: 37
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "font-bold text-red-700",
                                                                                        children: w_0.infraGap || "Standard municipal deficit"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                                        lineNumber: 645,
                                                                                        columnNumber: 37
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                                lineNumber: 643,
                                                                                columnNumber: 35
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-[#171817]/60 text-[10px] block",
                                                                                        children: "Generated Proposals"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                                        lineNumber: 648,
                                                                                        columnNumber: 37
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "font-bold text-emerald-800",
                                                                                        children: [
                                                                                            projects.filter((p_4)=>p_4.wardId === w_0.id || p_4.wardName === w_0.name).length,
                                                                                            " Proposals Active"
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                                        lineNumber: 649,
                                                                                        columnNumber: 37
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                                lineNumber: 647,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                        lineNumber: 638,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                    lineNumber: 637,
                                                                    columnNumber: 31
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                lineNumber: 636,
                                                                columnNumber: 42
                                                            }, this)
                                                        ]
                                                    }, w_0.id, true, {
                                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                        lineNumber: 608,
                                                        columnNumber: 26
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                lineNumber: 605,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                        lineNumber: 594,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                    lineNumber: 593,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                lineNumber: 592,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                        lineNumber: 564,
                        columnNumber: 31
                    }, this),
                    currentStep === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "space-y-6 animate-in fade-in",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl border border-[#171817]/15 bg-white p-6 shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono text-xs font-bold text-[#e25a45] uppercase tracking-wider",
                                                children: "Stage 02 • Project Generation"
                                            }, void 0, false, {
                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                lineNumber: 670,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl font-black text-[#171817] mt-1",
                                                children: [
                                                    "Candidate Capital Proposals (",
                                                    projects.length,
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                lineNumber: 673,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-[#171817]/65 mt-1",
                                                children: "Generated from citizen demand frequency, population affected, estimated cost, and delivery timeline."
                                            }, void 0, false, {
                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                lineNumber: 676,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                        lineNumber: 669,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setCurrentStep(1),
                                                className: "rounded-xl border border-[#171817]/20 bg-white px-4 py-2.5 text-xs font-semibold text-[#171817] hover:bg-slate-100 cursor-pointer",
                                                children: "← Back to Wards"
                                            }, void 0, false, {
                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                lineNumber: 682,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setCurrentStep(3),
                                                className: "flex items-center gap-2 rounded-xl bg-[#171817] px-4 py-2.5 text-xs font-bold text-white shadow transition hover:bg-[#333] cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Set Constraints"
                                                    }, void 0, false, {
                                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                        lineNumber: 686,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                        lineNumber: 687,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                lineNumber: 685,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                        lineNumber: 681,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                lineNumber: 668,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                children: projects.map((proj_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl border border-[#171817]/15 bg-white p-5 shadow-sm space-y-3 transition hover:shadow-md",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2 font-mono text-xs",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "rounded bg-[#171817] px-2 py-0.5 text-[10px] font-bold text-white",
                                                                        children: proj_0.wardName
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                        lineNumber: 697,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "rounded bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-800 uppercase",
                                                                        children: proj_0.category
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                        lineNumber: 700,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                lineNumber: 696,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "font-bold text-base text-[#171817] mt-2",
                                                                children: proj_0.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                lineNumber: 704,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                        lineNumber: 695,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-right font-mono",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-lg font-black text-[#e25a45]",
                                                                children: [
                                                                    "₹ ",
                                                                    (proj_0.estimatedCost / 1e7).toFixed(1),
                                                                    " Cr"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                lineNumber: 708,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[10px] text-slate-500",
                                                                children: [
                                                                    proj_0.estimatedMonths,
                                                                    " Months Timeline"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                lineNumber: 711,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                        lineNumber: 707,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                lineNumber: 694,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-3 gap-2 font-mono text-xs bg-[#f6f5f2] p-3 rounded-xl border border-slate-200",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-slate-500 text-[10px] block",
                                                                children: "Citizen Demand"
                                                            }, void 0, false, {
                                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                lineNumber: 717,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                className: "text-[#171817]",
                                                                children: [
                                                                    proj_0.demandCount,
                                                                    " Reports"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                lineNumber: 718,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                        lineNumber: 716,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-slate-500 text-[10px] block",
                                                                children: "Population Impact"
                                                            }, void 0, false, {
                                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                lineNumber: 721,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                className: "text-[#171817]",
                                                                children: proj_0.affectedPopulation.toLocaleString()
                                                            }, void 0, false, {
                                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                lineNumber: 722,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                        lineNumber: 720,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-slate-500 text-[10px] block",
                                                                children: "Benefit Score"
                                                            }, void 0, false, {
                                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                lineNumber: 725,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                className: "text-[#e25a45]",
                                                                children: [
                                                                    proj_0.benefitScore,
                                                                    "/100"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                lineNumber: 726,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                        lineNumber: 724,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                lineNumber: 715,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-600 leading-relaxed italic",
                                                children: [
                                                    '"',
                                                    proj_0.selectionReason || proj_0.exclusionReason,
                                                    '"'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                lineNumber: 730,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, proj_0.id, true, {
                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                        lineNumber: 693,
                                        columnNumber: 39
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                lineNumber: 692,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                        lineNumber: 667,
                        columnNumber: 31
                    }, this),
                    currentStep === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "space-y-6 animate-in fade-in",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl border border-[#171817]/15 bg-white p-6 shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono text-xs font-bold text-[#e25a45] uppercase tracking-wider",
                                                children: "Stage 03 • Constraint Configuration"
                                            }, void 0, false, {
                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                lineNumber: 743,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl font-black text-[#171817] mt-1",
                                                children: "Optimization & Implementation Limits"
                                            }, void 0, false, {
                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                lineNumber: 746,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-[#171817]/65 mt-1",
                                                children: "Adjust budget limits, planning horizon, and ward balance parameters."
                                            }, void 0, false, {
                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                lineNumber: 749,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                        lineNumber: 742,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setCurrentStep(2),
                                                className: "rounded-xl border border-[#171817]/20 bg-white px-4 py-2.5 text-xs font-semibold text-[#171817] hover:bg-slate-100 cursor-pointer",
                                                children: "← Back to Projects"
                                            }, void 0, false, {
                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                lineNumber: 755,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: handleRunOptimization,
                                                className: "flex items-center gap-2 rounded-xl bg-[#e25a45] px-5 py-2.5 text-xs font-bold text-white shadow-lg transition hover:bg-[#d44833] cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                        className: "h-4 w-4 fill-white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                        lineNumber: 759,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Run Portfolio Optimization"
                                                    }, void 0, false, {
                                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                        lineNumber: 760,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                lineNumber: 758,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                        lineNumber: 754,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                lineNumber: 741,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl border border-[#171817]/15 bg-white p-5 space-y-4 shadow-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "font-bold text-sm text-[#171817]",
                                                        children: "Available CAPEX Budget"
                                                    }, void 0, false, {
                                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                        lineNumber: 770,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono text-xl font-black text-[#e25a45]",
                                                        children: [
                                                            "₹ ",
                                                            (constraints.budget / 1e7).toFixed(1),
                                                            " Cr"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                        lineNumber: 771,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                lineNumber: 769,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "range",
                                                min: 200000000,
                                                max: 800000000,
                                                step: 10000000,
                                                value: constraints.budget,
                                                onChange: (e_0)=>setConstraints({
                                                        ...constraints,
                                                        budget: parseFloat(e_0.target.value)
                                                    }),
                                                className: "w-full accent-[#e25a45] cursor-pointer"
                                            }, void 0, false, {
                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                lineNumber: 775,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between font-mono text-[10px] text-slate-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "₹20 Cr (Min)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                        lineNumber: 780,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "₹45 Cr (Default)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                        lineNumber: 781,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "₹80 Cr (Max)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                        lineNumber: 782,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                lineNumber: 779,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                        lineNumber: 768,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl border border-[#171817]/15 bg-white p-5 space-y-4 shadow-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "font-bold text-sm text-[#171817]",
                                                        children: "Execution Timeline Horizon"
                                                    }, void 0, false, {
                                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                        lineNumber: 789,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono text-xl font-black text-[#171817]",
                                                        children: [
                                                            constraints.timelineMonths,
                                                            " Months"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                        lineNumber: 790,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                lineNumber: 788,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "range",
                                                min: 6,
                                                max: 36,
                                                step: 3,
                                                value: constraints.timelineMonths,
                                                onChange: (e_1)=>setConstraints({
                                                        ...constraints,
                                                        timelineMonths: parseInt(e_1.target.value)
                                                    }),
                                                className: "w-full accent-[#171817] cursor-pointer"
                                            }, void 0, false, {
                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                lineNumber: 794,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between font-mono text-[10px] text-slate-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "6 Mo"
                                                    }, void 0, false, {
                                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                        lineNumber: 799,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "18 Mo (Default)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                        lineNumber: 800,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "36 Mo"
                                                    }, void 0, false, {
                                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                        lineNumber: 801,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                lineNumber: 798,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                        lineNumber: 787,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl border border-[#171817]/15 bg-white p-5 space-y-4 shadow-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-bold text-sm text-[#171817] border-b pb-2",
                                                children: "Capacity Limits"
                                            }, void 0, false, {
                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                lineNumber: 807,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 gap-4 font-mono text-xs",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-[10px] font-bold text-slate-600 mb-1",
                                                                children: "Max Active Projects"
                                                            }, void 0, false, {
                                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                lineNumber: 811,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "number",
                                                                value: constraints.maxConcurrentProjects,
                                                                onChange: (e_2)=>setConstraints({
                                                                        ...constraints,
                                                                        maxConcurrentProjects: parseInt(e_2.target.value) || 6
                                                                    }),
                                                                className: "w-full rounded-xl border border-slate-300 p-2 text-xs font-bold"
                                                            }, void 0, false, {
                                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                lineNumber: 812,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                        lineNumber: 810,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-[10px] font-bold text-slate-600 mb-1",
                                                                children: "Max Projects Per Ward"
                                                            }, void 0, false, {
                                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                lineNumber: 819,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "number",
                                                                value: constraints.maxProjectsPerWard,
                                                                onChange: (e_3)=>setConstraints({
                                                                        ...constraints,
                                                                        maxProjectsPerWard: parseInt(e_3.target.value) || 2
                                                                    }),
                                                                className: "w-full rounded-xl border border-slate-300 p-2 text-xs font-bold"
                                                            }, void 0, false, {
                                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                lineNumber: 820,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                        lineNumber: 818,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-[10px] font-bold text-slate-600 mb-1",
                                                                children: "Min Wards Covered"
                                                            }, void 0, false, {
                                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                lineNumber: 827,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "number",
                                                                value: constraints.minimumWardCoverage,
                                                                onChange: (e_4)=>setConstraints({
                                                                        ...constraints,
                                                                        minimumWardCoverage: parseInt(e_4.target.value) || 4
                                                                    }),
                                                                className: "w-full rounded-xl border border-slate-300 p-2 text-xs font-bold"
                                                            }, void 0, false, {
                                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                lineNumber: 828,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                        lineNumber: 826,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-[10px] font-bold text-slate-600 mb-1",
                                                                children: "Contingency Reserve %"
                                                            }, void 0, false, {
                                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                lineNumber: 835,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "number",
                                                                value: constraints.reservePercent,
                                                                onChange: (e_5)=>setConstraints({
                                                                        ...constraints,
                                                                        reservePercent: parseFloat(e_5.target.value) || 5
                                                                    }),
                                                                className: "w-full rounded-xl border border-slate-300 p-2 text-xs font-bold"
                                                            }, void 0, false, {
                                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                lineNumber: 836,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                        lineNumber: 834,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                lineNumber: 809,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                        lineNumber: 806,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl border border-[#171817]/15 bg-white p-5 space-y-4 shadow-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-bold text-sm text-[#171817] border-b pb-2",
                                                children: "Policy Rules"
                                            }, void 0, false, {
                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                lineNumber: 846,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3 font-sans text-xs",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "flex items-center justify-between cursor-pointer",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-semibold text-[#171817]",
                                                                children: "Preserve Geographic Equity Balance"
                                                            }, void 0, false, {
                                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                lineNumber: 850,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                checked: constraints.preserveGeographicBalance,
                                                                onChange: (e_6)=>setConstraints({
                                                                        ...constraints,
                                                                        preserveGeographicBalance: e_6.target.checked
                                                                    }),
                                                                className: "h-4 w-4 accent-[#e25a45] cursor-pointer"
                                                            }, void 0, false, {
                                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                lineNumber: 851,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                        lineNumber: 849,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "flex items-center justify-between cursor-pointer",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-semibold text-[#171817]",
                                                                children: "Respect Project Dependency Ordering"
                                                            }, void 0, false, {
                                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                lineNumber: 858,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                checked: constraints.requireDependencyOrder,
                                                                onChange: (e_7)=>setConstraints({
                                                                        ...constraints,
                                                                        requireDependencyOrder: e_7.target.checked
                                                                    }),
                                                                className: "h-4 w-4 accent-[#e25a45] cursor-pointer"
                                                            }, void 0, false, {
                                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                lineNumber: 859,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                        lineNumber: 857,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                lineNumber: 848,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                        lineNumber: 845,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                lineNumber: 766,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                        lineNumber: 740,
                        columnNumber: 31
                    }, this),
                    currentStep === 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "flex flex-col items-center justify-center min-h-[400px] rounded-2xl border border-[#171817]/15 bg-white p-8 text-center space-y-5 shadow-sm animate-in fade-in",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-12 w-12 animate-spin rounded-full border-4 border-[#171817]/20 border-t-[#e25a45]"
                            }, void 0, false, {
                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                lineNumber: 873,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-black text-[#171817]",
                                children: "Running Portfolio Optimization..."
                            }, void 0, false, {
                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                lineNumber: 874,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-mono text-xs text-[#e25a45] max-w-md animate-pulse",
                                children: optimizingStepText
                            }, void 0, false, {
                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                lineNumber: 875,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                        lineNumber: 872,
                        columnNumber: 31
                    }, this),
                    currentStep === 5 && optimizationResult && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "space-y-8 animate-in fade-in",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 sm:grid-cols-5 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl border border-[#171817]/15 bg-white p-4 shadow-sm space-y-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono text-[10px] text-slate-500 uppercase",
                                                children: "Recommended"
                                            }, void 0, false, {
                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                lineNumber: 885,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-2xl font-black text-[#171817]",
                                                children: [
                                                    optimizationResult.summary?.selectedProjectCount,
                                                    " Projects"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                lineNumber: 886,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] text-emerald-700 font-semibold block",
                                                children: "Optimum Portfolio"
                                            }, void 0, false, {
                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                lineNumber: 889,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                        lineNumber: 884,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl border border-[#171817]/15 bg-white p-4 shadow-sm space-y-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono text-[10px] text-slate-500 uppercase",
                                                children: "Total Allocation"
                                            }, void 0, false, {
                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                lineNumber: 893,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-2xl font-black text-[#e25a45]",
                                                children: [
                                                    "₹ ",
                                                    optimizationResult.summary?.totalCost,
                                                    " Cr"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                lineNumber: 894,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] text-slate-500 block",
                                                children: "CAPEX Committed"
                                            }, void 0, false, {
                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                lineNumber: 897,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                        lineNumber: 892,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl border border-[#171817]/15 bg-white p-4 shadow-sm space-y-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono text-[10px] text-slate-500 uppercase",
                                                children: "Remaining Budget"
                                            }, void 0, false, {
                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                lineNumber: 901,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-2xl font-black text-[#171817]",
                                                children: [
                                                    "₹ ",
                                                    optimizationResult.summary?.remainingBudget,
                                                    " Cr"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                lineNumber: 902,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] text-amber-700 font-semibold block",
                                                children: "Contingency Reserve"
                                            }, void 0, false, {
                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                lineNumber: 905,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                        lineNumber: 900,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl border border-[#171817]/15 bg-white p-4 shadow-sm space-y-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono text-[10px] text-slate-500 uppercase",
                                                children: "Public Benefit"
                                            }, void 0, false, {
                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                lineNumber: 909,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-2xl font-black text-emerald-600",
                                                children: [
                                                    optimizationResult.summary?.totalBenefit,
                                                    " / 100"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                lineNumber: 910,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] text-slate-500 block",
                                                children: "MCDA Aggregate"
                                            }, void 0, false, {
                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                lineNumber: 913,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                        lineNumber: 908,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl border border-[#171817]/15 bg-white p-4 shadow-sm space-y-1 col-span-2 sm:col-span-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono text-[10px] text-slate-500 uppercase",
                                                children: "Ward Coverage"
                                            }, void 0, false, {
                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                lineNumber: 917,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-2xl font-black text-[#171817]",
                                                children: [
                                                    optimizationResult.summary?.wardCoverage,
                                                    " Wards"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                lineNumber: 918,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] text-slate-500 block",
                                                children: "Geographic Spread"
                                            }, void 0, false, {
                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                lineNumber: 921,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                        lineNumber: 916,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                lineNumber: 883,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl border border-[#171817]/15 bg-white p-6 shadow-sm space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between font-mono text-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold text-[#171817]",
                                                children: [
                                                    "₹ ",
                                                    optimizationResult.summary?.totalCost,
                                                    " Cr Allocated"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                lineNumber: 928,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-500",
                                                children: [
                                                    "₹ ",
                                                    optimizationResult.summary?.remainingBudget,
                                                    " Cr Remaining"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                lineNumber: 931,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                        lineNumber: 927,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-6 w-full rounded-xl overflow-hidden bg-slate-100 flex shadow-inner",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: "35%"
                                                },
                                                className: "bg-[#e25a45] flex items-center justify-center text-[10px] font-bold text-white",
                                                children: "Roads ₹14 Cr"
                                            }, void 0, false, {
                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                lineNumber: 937,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: "28%"
                                                },
                                                className: "bg-[#3b82f6] flex items-center justify-center text-[10px] font-bold text-white",
                                                children: "Schools ₹12 Cr"
                                            }, void 0, false, {
                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                lineNumber: 942,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: "28%"
                                                },
                                                className: "bg-[#10b981] flex items-center justify-center text-[10px] font-bold text-white",
                                                children: "Health ₹12 Cr"
                                            }, void 0, false, {
                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                lineNumber: 947,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: "9%"
                                                },
                                                className: "bg-[#a855f7] flex items-center justify-center text-[10px] font-bold text-white",
                                                children: "Water"
                                            }, void 0, false, {
                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                lineNumber: 952,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                        lineNumber: 936,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                lineNumber: 926,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl border border-[#171817]/15 bg-white overflow-hidden shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-b border-[#171817]/15 bg-[#f6f5f2] p-4 flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-mono text-xs font-bold uppercase text-[#171817]",
                                                children: [
                                                    "Funded Priority Allocation Table (",
                                                    optimizationResult.selectedProjects?.length,
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                lineNumber: 963,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-slate-500",
                                                children: "Click row to expand score breakdown"
                                            }, void 0, false, {
                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                lineNumber: 966,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                        lineNumber: 962,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "overflow-x-auto",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                            className: "w-full text-left font-sans text-xs",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                    className: "border-b border-slate-200 bg-white font-mono text-[10px] uppercase text-slate-500",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "py-3 px-4",
                                                                children: "Priority"
                                                            }, void 0, false, {
                                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                lineNumber: 973,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "py-3 px-4",
                                                                children: "Project Title"
                                                            }, void 0, false, {
                                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                lineNumber: 974,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "py-3 px-4",
                                                                children: "Ward"
                                                            }, void 0, false, {
                                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                lineNumber: 975,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "py-3 px-4",
                                                                children: "Cost"
                                                            }, void 0, false, {
                                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                lineNumber: 976,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "py-3 px-4",
                                                                children: "Benefit"
                                                            }, void 0, false, {
                                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                lineNumber: 977,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "py-3 px-4",
                                                                children: "Timeline"
                                                            }, void 0, false, {
                                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                lineNumber: 978,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "py-3 px-4",
                                                                children: "Reasoning"
                                                            }, void 0, false, {
                                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                lineNumber: 979,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                        lineNumber: 972,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                    lineNumber: 971,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                    className: "divide-y divide-slate-100",
                                                    children: (optimizationResult.selectedProjects || projects.filter((p_5)=>p_5.status === "selected")).map((proj_1, idx_0)=>{
                                                        const isExpanded_0 = expandedProjectId === proj_1.id;
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                    onClick: ()=>setExpandedProjectId(isExpanded_0 ? null : proj_1.id),
                                                                    className: "hover:bg-slate-50 transition cursor-pointer",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "py-3.5 px-4 font-mono font-bold text-[#e25a45]",
                                                                            children: [
                                                                                "#",
                                                                                idx_0 + 1
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                            lineNumber: 987,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "py-3.5 px-4 font-bold text-[#171817]",
                                                                            children: proj_1.title
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                            lineNumber: 988,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "py-3.5 px-4 font-mono text-slate-700",
                                                                            children: proj_1.wardName || proj_1.ward
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                            lineNumber: 989,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "py-3.5 px-4 font-mono font-bold text-[#171817]",
                                                                            children: [
                                                                                "₹ ",
                                                                                (proj_1.estimatedCost / 1e7).toFixed(1),
                                                                                " Cr"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                            lineNumber: 990,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "py-3.5 px-4 font-mono font-bold text-emerald-600",
                                                                            children: proj_1.benefitScore || 85
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                            lineNumber: 993,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "py-3.5 px-4 font-mono text-slate-700",
                                                                            children: [
                                                                                proj_1.estimatedMonths || 8,
                                                                                " mo"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                            lineNumber: 996,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "py-3.5 px-4 text-slate-600 max-w-xs truncate",
                                                                            children: proj_1.selectionReason
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                            lineNumber: 997,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                    lineNumber: 986,
                                                                    columnNumber: 27
                                                                }, this),
                                                                isExpanded_0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        colSpan: 7,
                                                                        className: "bg-[#f9f8f5] p-4 border-b border-slate-200 space-y-3 font-mono text-xs",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "grid grid-cols-2 sm:grid-cols-5 gap-3 bg-white p-3 rounded-xl border border-slate-200",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: "text-[10px] text-slate-400 block",
                                                                                                children: "Demand (35%)"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                                                lineNumber: 1003,
                                                                                                columnNumber: 40
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                                children: [
                                                                                                    proj_1.demandScore || 90,
                                                                                                    "/100"
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                                                lineNumber: 1003,
                                                                                                columnNumber: 110
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                                        lineNumber: 1003,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: "text-[10px] text-slate-400 block",
                                                                                                children: "Urgency (25%)"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                                                lineNumber: 1004,
                                                                                                columnNumber: 40
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                                children: [
                                                                                                    proj_1.urgencyScore || 88,
                                                                                                    "/100"
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                                                lineNumber: 1004,
                                                                                                columnNumber: 111
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                                        lineNumber: 1004,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: "text-[10px] text-slate-400 block",
                                                                                                children: "Population (20%)"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                                                lineNumber: 1005,
                                                                                                columnNumber: 40
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                                children: [
                                                                                                    proj_1.costEffectivenessScore || 82,
                                                                                                    "/100"
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                                                lineNumber: 1005,
                                                                                                columnNumber: 114
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                                        lineNumber: 1005,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: "text-[10px] text-slate-400 block",
                                                                                                children: "Equity (10%)"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                                                lineNumber: 1006,
                                                                                                columnNumber: 40
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                                children: [
                                                                                                    proj_1.equityScore || 85,
                                                                                                    "/100"
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                                                lineNumber: 1006,
                                                                                                columnNumber: 110
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                                        lineNumber: 1006,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: "text-[10px] text-slate-400 block",
                                                                                                children: "Alignment (10%)"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                                                lineNumber: 1007,
                                                                                                columnNumber: 40
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                                children: [
                                                                                                    proj_1.alignmentScore || 88,
                                                                                                    "/100"
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                                                lineNumber: 1007,
                                                                                                columnNumber: 113
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                                        lineNumber: 1007,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                                lineNumber: 1002,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-slate-700 font-sans text-xs",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                        children: "Selection Reasoning:"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                                        lineNumber: 1010,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    " ",
                                                                                    proj_1.selectionReason
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                                lineNumber: 1009,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                        lineNumber: 1001,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                    lineNumber: 1000,
                                                                    columnNumber: 44
                                                                }, this)
                                                            ]
                                                        }, proj_1.id, true, {
                                                            fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                            lineNumber: 985,
                                                            columnNumber: 26
                                                        }, this);
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                    lineNumber: 982,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                            lineNumber: 970,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                        lineNumber: 969,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                lineNumber: 961,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl border border-[#171817]/15 bg-white p-5 shadow-sm space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-mono text-xs font-bold uppercase text-[#171817]",
                                        children: "Constituency Ward Allocation Map"
                                    }, void 0, false, {
                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                        lineNumber: 1023,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WardCoverageMap, {
                                        projects: optimizationResult.selectedProjects || projects,
                                        wards: wards
                                    }, void 0, false, {
                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                        lineNumber: 1026,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                lineNumber: 1022,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl border border-[#171817]/15 bg-white p-5 space-y-3 shadow-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-mono text-xs font-bold uppercase text-[#171817]",
                                                children: "Constraint Validation Panel"
                                            }, void 0, false, {
                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                lineNumber: 1033,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2 font-mono text-xs",
                                                children: (optimizationResult.constraintsStatus || []).map((c_0, i_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start gap-2 text-emerald-800 bg-emerald-50 p-2.5 rounded-xl border border-emerald-200",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                className: "h-4 w-4 text-emerald-600 shrink-0 mt-0.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                lineNumber: 1038,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: c_0.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                        lineNumber: 1040,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-[11px] text-emerald-700 font-normal",
                                                                        children: c_0.detail
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                        lineNumber: 1041,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                lineNumber: 1039,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, i_0, true, {
                                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                        lineNumber: 1037,
                                                        columnNumber: 96
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                lineNumber: 1036,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                        lineNumber: 1032,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl border border-[#171817]/15 bg-white p-5 space-y-3 shadow-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-mono text-xs font-bold uppercase text-[#171817]",
                                                children: "Rejected Project Audit Reasoning"
                                            }, void 0, false, {
                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                lineNumber: 1049,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2 font-sans text-xs",
                                                children: (optimizationResult.rejectedProjects || projects.filter((p_6)=>p_6.status === "excluded")).map((p_7)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-xl border border-amber-200 bg-amber-50 p-3 space-y-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between font-mono font-bold text-amber-950",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: p_7.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                        lineNumber: 1055,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: [
                                                                            "₹ ",
                                                                            (p_7.estimatedCost / 1e7).toFixed(1),
                                                                            " Cr"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                        lineNumber: 1056,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                lineNumber: 1054,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-amber-800 text-[11px] italic",
                                                                children: [
                                                                    '"',
                                                                    p_7.exclusionReason || "Lower benefit score per crore than funded proposals.",
                                                                    '"'
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                                lineNumber: 1058,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, p_7.id, true, {
                                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                        lineNumber: 1053,
                                                        columnNumber: 129
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                lineNumber: 1052,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                        lineNumber: 1048,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                lineNumber: 1030,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-[#171817]/15 bg-white p-5 shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setCurrentStep(3),
                                                className: "rounded-xl border border-[#171817]/20 bg-white px-4 py-2 text-xs font-bold text-[#171817] hover:bg-slate-100 cursor-pointer",
                                                children: "Adjust Constraints"
                                            }, void 0, false, {
                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                lineNumber: 1069,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setCurrentStep(3),
                                                className: "rounded-xl border border-[#171817]/20 bg-white px-4 py-2 text-xs font-bold text-[#171817] hover:bg-slate-100 cursor-pointer",
                                                children: "Compare Scenario"
                                            }, void 0, false, {
                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                lineNumber: 1072,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                        lineNumber: 1068,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>showSuccess("Portfolio Plan Formally Sanctioned ✓", "Saved optimization run to persistent database."),
                                        className: "flex items-center gap-2 rounded-xl bg-[#e25a45] px-5 py-2.5 text-xs font-bold text-white shadow-lg transition hover:bg-[#d44833] cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCheck$3e$__["FileCheck"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                lineNumber: 1078,
                                                columnNumber: 17
                                            }, this),
                                            "Apply & Sanction Portfolio"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                        lineNumber: 1077,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                lineNumber: 1067,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                        lineNumber: 881,
                        columnNumber: 53
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                lineNumber: 497,
                columnNumber: 7
            }, this),
            isAddWardModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[99999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full max-w-lg rounded-2xl border border-[#171817]/20 bg-white p-6 text-[#171817] shadow-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between border-b pb-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__["PlusCircle"], {
                                            className: "h-5 w-5 text-[#e25a45]"
                                        }, void 0, false, {
                                            fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                            lineNumber: 1090,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-bold text-base text-[#171817]",
                                            children: "Add Constituency Ward / Address"
                                        }, void 0, false, {
                                            fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                            lineNumber: 1091,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                    lineNumber: 1089,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setIsAddWardModalOpen(false),
                                    className: "rounded-lg p-1 text-slate-500 hover:bg-slate-100",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                        lineNumber: 1094,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                    lineNumber: 1093,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                            lineNumber: 1088,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleAddWardSubmit,
                            className: "mt-4 space-y-4 text-xs font-sans",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-[10px] font-bold uppercase tracking-wider text-[#171817] mb-1",
                                                    children: "Ward Name / Number"
                                                }, void 0, false, {
                                                    fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                    lineNumber: 1101,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    required: true,
                                                    placeholder: "e.g. Ward 9",
                                                    value: newWardName,
                                                    onChange: (e_8)=>setNewWardName(e_8.target.value),
                                                    className: "w-full rounded-xl border border-[#171817]/20 bg-[#f6f5f2] px-3 py-2 text-xs outline-none focus:ring-2 focus:ring-[#e25a45]"
                                                }, void 0, false, {
                                                    fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                    lineNumber: 1104,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                            lineNumber: 1100,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-[10px] font-bold uppercase tracking-wider text-[#171817] mb-1",
                                                    children: "Block / Panchayat"
                                                }, void 0, false, {
                                                    fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                    lineNumber: 1108,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: "e.g. Khordha Block",
                                                    value: newBlockName,
                                                    onChange: (e_9)=>setNewBlockName(e_9.target.value),
                                                    className: "w-full rounded-xl border border-[#171817]/20 bg-[#f6f5f2] px-3 py-2 text-xs outline-none focus:ring-2 focus:ring-[#e25a45]"
                                                }, void 0, false, {
                                                    fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                    lineNumber: 1111,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                            lineNumber: 1107,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                    lineNumber: 1099,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-[10px] font-bold uppercase tracking-wider text-[#171817] mb-1",
                                            children: "Optional Custom Address"
                                        }, void 0, false, {
                                            fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                            lineNumber: 1116,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "e.g. Gautam Nagar Lane 4, near Railway Gate",
                                            value: newCustomAddress,
                                            onChange: (e_10)=>setNewCustomAddress(e_10.target.value),
                                            className: "w-full rounded-xl border border-[#171817]/20 bg-[#f6f5f2] px-3 py-2 text-xs outline-none focus:ring-2 focus:ring-[#e25a45]"
                                        }, void 0, false, {
                                            fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                            lineNumber: 1119,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                    lineNumber: 1115,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-3 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-[10px] font-bold uppercase tracking-wider text-[#171817] mb-1",
                                                    children: "Population"
                                                }, void 0, false, {
                                                    fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                    lineNumber: 1124,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    value: newPopulation,
                                                    onChange: (e_11)=>setNewPopulation(e_11.target.value),
                                                    className: "w-full rounded-xl border border-[#171817]/20 bg-[#f6f5f2] px-3 py-2 text-xs outline-none focus:ring-2 focus:ring-[#e25a45]"
                                                }, void 0, false, {
                                                    fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                    lineNumber: 1127,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                            lineNumber: 1123,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-[10px] font-bold uppercase tracking-wider text-[#171817] mb-1",
                                                    children: "Citizen Requests"
                                                }, void 0, false, {
                                                    fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                    lineNumber: 1131,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    value: newDemandCount,
                                                    onChange: (e_12)=>setNewDemandCount(e_12.target.value),
                                                    className: "w-full rounded-xl border border-[#171817]/20 bg-[#f6f5f2] px-3 py-2 text-xs outline-none focus:ring-2 focus:ring-[#e25a45]"
                                                }, void 0, false, {
                                                    fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                    lineNumber: 1134,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                            lineNumber: 1130,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-[10px] font-bold uppercase tracking-wider text-[#171817] mb-1",
                                                    children: "Dominant Theme"
                                                }, void 0, false, {
                                                    fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                    lineNumber: 1138,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: newTheme,
                                                    onChange: (e_13)=>setNewTheme(e_13.target.value),
                                                    className: "w-full rounded-xl border border-[#171817]/20 bg-[#f6f5f2] px-3 py-2 text-xs outline-none focus:ring-2 focus:ring-[#e25a45]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "road",
                                                            children: "🛠️ Road Repair"
                                                        }, void 0, false, {
                                                            fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                            lineNumber: 1142,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "school",
                                                            children: "🏫 School Infra"
                                                        }, void 0, false, {
                                                            fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                            lineNumber: 1143,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "health",
                                                            children: "🏥 Health Access"
                                                        }, void 0, false, {
                                                            fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                            lineNumber: 1144,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "water",
                                                            children: "💧 Water Supply"
                                                        }, void 0, false, {
                                                            fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                            lineNumber: 1145,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "sanitation",
                                                            children: "🧹 Sanitation"
                                                        }, void 0, false, {
                                                            fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                            lineNumber: 1146,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                                    lineNumber: 1141,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                            lineNumber: 1137,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                    lineNumber: 1122,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-[10px] font-bold uppercase tracking-wider text-[#171817] mb-1",
                                            children: "Infrastructure Gap Description"
                                        }, void 0, false, {
                                            fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                            lineNumber: 1152,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "e.g. Connecting road asphalt deficit 3.5 km",
                                            value: newInfraGap,
                                            onChange: (e_14)=>setNewInfraGap(e_14.target.value),
                                            className: "w-full rounded-xl border border-[#171817]/20 bg-[#f6f5f2] px-3 py-2 text-xs outline-none focus:ring-2 focus:ring-[#e25a45]"
                                        }, void 0, false, {
                                            fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                            lineNumber: 1155,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                    lineNumber: 1151,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-end gap-2 pt-3 border-t",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setIsAddWardModalOpen(false),
                                            className: "rounded-xl border border-slate-300 px-4 py-2 text-xs font-semibold text-[#171817] hover:bg-slate-100 cursor-pointer",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                            lineNumber: 1159,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "rounded-xl bg-[#e25a45] px-4 py-2 text-xs font-bold text-white shadow hover:bg-[#d44833] cursor-pointer",
                                            children: "Save & Generate Proposal"
                                        }, void 0, false, {
                                            fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                            lineNumber: 1162,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                                    lineNumber: 1158,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                            lineNumber: 1098,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                    lineNumber: 1087,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
                lineNumber: 1086,
                columnNumber: 30
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/civic-priority-platform/frontend/app/priorities/page.tsx",
        lineNumber: 494,
        columnNumber: 10
    }, this);
}
_s(PrioritiesLinearWorkspace, "fcCdcfZ79+Kim+U6XXb/DeB3eeQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$feedback$2f$FeedbackHub$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFeedback"]
    ];
});
_c1 = PrioritiesLinearWorkspace;
var _c, _c1;
__turbopack_context__.k.register(_c, "WardCoverageMap");
__turbopack_context__.k.register(_c1, "PrioritiesLinearWorkspace");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/civic-priority-platform/frontend/components/common/LanguageSelector.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageSelector",
    ()=>LanguageSelector,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
"use client";
;
;
function LanguageSelector(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "0c001e813a08969ebf5a1dfe512777683e788dc30ee36c466ebd58fc0f89672a") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0c001e813a08969ebf5a1dfe512777683e788dc30ee36c466ebd58fc0f89672a";
    }
    const { languages, value, onChange, disabled: t1, className: t2 } = t0;
    const disabled = t1 === undefined ? false : t1;
    const className = t2 === undefined ? "" : t2;
    const t3 = `inline-flex items-center gap-1 rounded-xl border border-gray-200 bg-gray-50 p-1 font-sans ${className}`;
    let t4;
    if ($[1] !== disabled || $[2] !== languages || $[3] !== onChange || $[4] !== value) {
        let t5;
        if ($[6] !== disabled || $[7] !== onChange || $[8] !== value) {
            t5 = ({
                "LanguageSelector[languages.map()]": (lang)=>{
                    const active = value === lang.code;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: {
                            "LanguageSelector[languages.map() > <button>.onClick]": ()=>onChange(lang.code)
                        }["LanguageSelector[languages.map() > <button>.onClick]"],
                        disabled: disabled,
                        "aria-pressed": active,
                        className: `flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-mono text-xs font-semibold whitespace-nowrap transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50 ${active ? "bg-black text-white shadow-sm" : "text-black hover:bg-gray-200/70"}`,
                        children: [
                            lang.nativeLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: lang.nativeLabel
                            }, void 0, false, {
                                fileName: "[project]/civic-priority-platform/frontend/components/common/LanguageSelector.tsx",
                                lineNumber: 44,
                                columnNumber: 402
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: active ? "opacity-80" : "opacity-60",
                                children: [
                                    "(",
                                    lang.label,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/civic-priority-platform/frontend/components/common/LanguageSelector.tsx",
                                lineNumber: 44,
                                columnNumber: 434
                            }, this)
                        ]
                    }, lang.code, true, {
                        fileName: "[project]/civic-priority-platform/frontend/components/common/LanguageSelector.tsx",
                        lineNumber: 42,
                        columnNumber: 18
                    }, this);
                }
            })["LanguageSelector[languages.map()]"];
            $[6] = disabled;
            $[7] = onChange;
            $[8] = value;
            $[9] = t5;
        } else {
            t5 = $[9];
        }
        t4 = languages.map(t5);
        $[1] = disabled;
        $[2] = languages;
        $[3] = onChange;
        $[4] = value;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[10] !== t3 || $[11] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            role: "group",
            "aria-label": "Choose language",
            className: t3,
            children: t4
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/common/LanguageSelector.tsx",
            lineNumber: 65,
            columnNumber: 10
        }, this);
        $[10] = t3;
        $[11] = t4;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    return t5;
}
_c = LanguageSelector;
const __TURBOPACK__default__export__ = LanguageSelector;
var _c;
__turbopack_context__.k.register(_c, "LanguageSelector");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/civic-priority-platform/frontend/components/layout/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/icons/menu.mjs [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$layout$2f$Navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/components/layout/Navigation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$common$2f$LanguageSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/components/common/LanguageSelector.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$layout$2f$MobileMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/components/layout/MobileMenu.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function Header() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "5bae67d2f9b75ede18ab52a636b5f32738f7b31b4db4f28b1fe3716929f056e5") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5bae67d2f9b75ede18ab52a636b5f32738f7b31b4db4f28b1fe3716929f056e5";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-10 w-10 items-center justify-center rounded-xl bg-black text-lg font-bold text-white shadow-sm",
            children: "C"
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/layout/Header.tsx",
            lineNumber: 60,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/",
            "aria-label": "Go to homepage",
            className: "flex items-center gap-3 transition-opacity hover:opacity-90",
            children: [
                t0,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hidden flex-col sm:flex",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-base font-extrabold tracking-tight text-[#0a0a0a]",
                            children: "CIVICO"
                        }, void 0, false, {
                            fileName: "[project]/civic-priority-platform/frontend/components/layout/Header.tsx",
                            lineNumber: 68,
                            columnNumber: 170
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-mono text-xs text-gray-500 font-medium",
                            children: "People's Priorities"
                        }, void 0, false, {
                            fileName: "[project]/civic-priority-platform/frontend/components/layout/Header.tsx",
                            lineNumber: 68,
                            columnNumber: 256
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/civic-priority-platform/frontend/components/layout/Header.tsx",
                    lineNumber: 68,
                    columnNumber: 129
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/layout/Header.tsx",
            lineNumber: 68,
            columnNumber: 10
        }, this);
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$layout$2f$Navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/layout/Header.tsx",
            lineNumber: 69,
            columnNumber: 10
        }, this);
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden md:block",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$common$2f$LanguageSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                languages: [
                    {
                        code: "or",
                        label: "Odia",
                        nativeLabel: "\u0B13\u0B21\u0B3C\u0B3F\u0B06"
                    },
                    {
                        code: "hi",
                        label: "Hindi",
                        nativeLabel: "\u0939\u093F\u0902\u0926\u0940"
                    },
                    {
                        code: "en",
                        label: "English",
                        nativeLabel: "English"
                    }
                ],
                value: "or",
                onChange: _HeaderLanguageSelectorOnChange
            }, void 0, false, {
                fileName: "[project]/civic-priority-platform/frontend/components/layout/Header.tsx",
                lineNumber: 78,
                columnNumber: 43
            }, this)
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/layout/Header.tsx",
            lineNumber: 78,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-md text-black font-sans",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8",
                children: [
                    t1,
                    t2,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            t3,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$layout$2f$MobileMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        size: "icon",
                                        "aria-label": "Open navigation menu",
                                        className: "text-black hover:bg-gray-100",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                            className: "h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "[project]/civic-priority-platform/frontend/components/layout/Header.tsx",
                                            lineNumber: 97,
                                            columnNumber: 428
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/civic-priority-platform/frontend/components/layout/Header.tsx",
                                        lineNumber: 97,
                                        columnNumber: 317
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/civic-priority-platform/frontend/components/layout/Header.tsx",
                                    lineNumber: 97,
                                    columnNumber: 305
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/civic-priority-platform/frontend/components/layout/Header.tsx",
                                lineNumber: 97,
                                columnNumber: 278
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/civic-priority-platform/frontend/components/layout/Header.tsx",
                        lineNumber: 97,
                        columnNumber: 233
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/civic-priority-platform/frontend/components/layout/Header.tsx",
                lineNumber: 97,
                columnNumber: 130
            }, this)
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/layout/Header.tsx",
            lineNumber: 97,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    return t4;
}
_c = Header;
function _HeaderLanguageSelectorOnChange() {}
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/civic-priority-platform/frontend/components/layout/MobileMenu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MobileMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/icons/house.mjs [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/icons/layout-dashboard.mjs [app-client] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pinned$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPinned$3e$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/icons/map-pinned.mjs [app-client] (ecmascript) <export default as MapPinned>");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/icons/file-text.mjs [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/icons/clipboard-list.mjs [app-client] (ecmascript) <export default as ClipboardList>");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/components/ui/sheet.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/components/ui/separator.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$common$2f$LanguageSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/components/common/LanguageSelector.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
const navigationItems = [
    {
        label: "Home",
        href: "/",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"]
    },
    {
        label: "Dashboard",
        href: "/dashboard",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"]
    },
    {
        label: "Maps",
        href: "/maps",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pinned$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPinned$3e$__["MapPinned"]
    },
    {
        label: "Reports",
        href: "/reports",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"]
    },
    {
        label: "My Requests",
        href: "/submissions",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__["ClipboardList"]
    }
];
function MobileMenu(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(17);
    if ($[0] !== "f4f5d2ef351eb33f1d8c3904b2e2da86616a0a0c1905ad08be8c0a3631b1ea97") {
        for(let $i = 0; $i < 17; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f4f5d2ef351eb33f1d8c3904b2e2da86616a0a0c1905ad08be8c0a3631b1ea97";
    }
    const { children } = t0;
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    let t1;
    if ($[1] !== children) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetTrigger"], {
            asChild: true,
            children: children
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/layout/MobileMenu.tsx",
            lineNumber: 91,
            columnNumber: 10
        }, this);
        $[1] = children;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetTitle"], {
            className: "flex items-center gap-3 text-left",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex h-10 w-10 items-center justify-center rounded-xl bg-primary font-bold text-primary-foreground",
                    children: "C"
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/layout/MobileMenu.tsx",
                    lineNumber: 99,
                    columnNumber: 68
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-semibold",
                            children: "CIVICO"
                        }, void 0, false, {
                            fileName: "[project]/civic-priority-platform/frontend/components/layout/MobileMenu.tsx",
                            lineNumber: 99,
                            columnNumber: 196
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs font-normal text-muted-foreground",
                            children: "People's Priorities"
                        }, void 0, false, {
                            fileName: "[project]/civic-priority-platform/frontend/components/layout/MobileMenu.tsx",
                            lineNumber: 99,
                            columnNumber: 235
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/civic-priority-platform/frontend/components/layout/MobileMenu.tsx",
                    lineNumber: 99,
                    columnNumber: 191
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/layout/MobileMenu.tsx",
            lineNumber: 99,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetHeader"], {
            className: "border-b px-6 pb-5",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    t2,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetClose"], {
                        asChild: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            size: "icon",
                            "aria-label": "Close Menu",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-5 w-5"
                            }, void 0, false, {
                                fileName: "[project]/civic-priority-platform/frontend/components/layout/MobileMenu.tsx",
                                lineNumber: 106,
                                columnNumber: 196
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/civic-priority-platform/frontend/components/layout/MobileMenu.tsx",
                            lineNumber: 106,
                            columnNumber: 136
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/civic-priority-platform/frontend/components/layout/MobileMenu.tsx",
                        lineNumber: 106,
                        columnNumber: 109
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/civic-priority-platform/frontend/components/layout/MobileMenu.tsx",
                lineNumber: 106,
                columnNumber: 54
            }, this)
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/layout/MobileMenu.tsx",
            lineNumber: 106,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] !== pathname) {
        t4 = navigationItems.map({
            "MobileMenu[navigationItems.map()]": (item)=>{
                const Icon = item.icon;
                const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetClose"], {
                    asChild: true,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: item.href,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all", "hover:bg-muted", active ? "bg-primary text-primary-foreground" : "text-muted-foreground"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                className: "h-5 w-5"
                            }, void 0, false, {
                                fileName: "[project]/civic-priority-platform/frontend/components/layout/MobileMenu.tsx",
                                lineNumber: 117,
                                columnNumber: 271
                            }, this),
                            item.label
                        ]
                    }, void 0, true, {
                        fileName: "[project]/civic-priority-platform/frontend/components/layout/MobileMenu.tsx",
                        lineNumber: 117,
                        columnNumber: 59
                    }, this)
                }, item.href, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/layout/MobileMenu.tsx",
                    lineNumber: 117,
                    columnNumber: 16
                }, this);
            }
        }["MobileMenu[navigationItems.map()]"]);
        $[5] = pathname;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "flex-1 space-y-1 px-4 py-6",
            "aria-label": "Mobile Navigation",
            children: t4
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/layout/MobileMenu.tsx",
            lineNumber: 127,
            columnNumber: 10
        }, this);
        $[7] = t4;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/layout/MobileMenu.tsx",
            lineNumber: 135,
            columnNumber: 10
        }, this);
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
            children: "Language"
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/layout/MobileMenu.tsx",
            lineNumber: 142,
            columnNumber: 10
        }, this);
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-5 p-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: [
                        t7,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$common$2f$LanguageSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            languages: [
                                {
                                    code: "or",
                                    label: "Odia",
                                    nativeLabel: "\u0B13\u0B21\u0B3C\u0B3F\u0B06"
                                },
                                {
                                    code: "hi",
                                    label: "Hindi",
                                    nativeLabel: "\u0939\u093F\u0902\u0926\u0940"
                                },
                                {
                                    code: "en",
                                    label: "English",
                                    nativeLabel: "English"
                                }
                            ],
                            value: "or",
                            onChange: _MobileMenuLanguageSelectorOnChange
                        }, void 0, false, {
                            fileName: "[project]/civic-priority-platform/frontend/components/layout/MobileMenu.tsx",
                            lineNumber: 149,
                            columnNumber: 72
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/civic-priority-platform/frontend/components/layout/MobileMenu.tsx",
                    lineNumber: 149,
                    columnNumber: 41
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-center text-xs leading-relaxed text-muted-foreground",
                    children: "Secure AI-powered constituency development platform."
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/layout/MobileMenu.tsx",
                    lineNumber: 161,
                    columnNumber: 79
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/layout/MobileMenu.tsx",
            lineNumber: 149,
            columnNumber: 10
        }, this);
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    let t9;
    if ($[12] !== t5) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetContent"], {
            side: "left",
            className: "flex w-80 flex-col px-0",
            children: [
                t3,
                t5,
                t6,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/layout/MobileMenu.tsx",
            lineNumber: 168,
            columnNumber: 10
        }, this);
        $[12] = t5;
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    let t10;
    if ($[14] !== t1 || $[15] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sheet"], {
            children: [
                t1,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/layout/MobileMenu.tsx",
            lineNumber: 176,
            columnNumber: 11
        }, this);
        $[14] = t1;
        $[15] = t9;
        $[16] = t10;
    } else {
        t10 = $[16];
    }
    return t10;
}
_s(MobileMenu, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = MobileMenu;
function _MobileMenuLanguageSelectorOnChange() {}
var _c;
__turbopack_context__.k.register(_c, "MobileMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/civic-priority-platform/frontend/components/layout/Navigation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/icons/house.mjs [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/icons/layout-dashboard.mjs [app-client] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pinned$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPinned$3e$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/icons/map-pinned.mjs [app-client] (ecmascript) <export default as MapPinned>");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/icons/file-text.mjs [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/icons/clipboard-list.mjs [app-client] (ecmascript) <export default as ClipboardList>");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
/**
 * ------------------------------------------------------------
 * Navigation
 * ------------------------------------------------------------
 * Purpose:
 * Desktop navigation used by Header and MobileMenu.
 *
 * Responsibilities:
 * - Render primary application navigation
 * - Highlight active route
 * - Remain presentation-only
 *
 * Does NOT:
 * - Fetch data
 * - Handle authentication
 * - Call APIs
 * - Contain business logic
 *
 * Authentication and role filtering will be connected later
 * through Zustand/Supabase/Auth Provider.
 * ------------------------------------------------------------
 */ const navigationItems = [
    {
        label: "Home",
        href: "/",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"]
    },
    {
        label: "Dashboard",
        href: "/dashboard",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"],
        requiresAuth: true
    },
    {
        label: "Map",
        href: "/maps",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pinned$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPinned$3e$__["MapPinned"],
        requiresAuth: true
    },
    {
        label: "Reports",
        href: "/reports",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
        requiresAuth: true,
        roles: [
            "official"
        ]
    },
    {
        label: "My Requests",
        href: "/submissions",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__["ClipboardList"],
        requiresAuth: true,
        roles: [
            "citizen"
        ]
    }
];
function Navigation() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "6afbeac22fe17adae23727501f9fa0b5b1cc5c2740d5e37d8cceb2107dd2a555") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6afbeac22fe17adae23727501f9fa0b5b1cc5c2740d5e37d8cceb2107dd2a555";
    }
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    let t0;
    if ($[1] !== pathname) {
        t0 = navigationItems.map({
            "Navigation[navigationItems.map()]": (item)=>{
                const Icon = item.icon;
                const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: item.href,
                    "aria-current": isActive ? "page" : undefined,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-200", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black", isActive ? "bg-[#171817] !text-white shadow-sm" : "bg-transparent !text-[#171817] hover:bg-gray-100 hover:!text-[#171817]"),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-4 w-4 transition-transform duration-200", isActive ? "scale-110 !text-white" : "!text-[#171817] group-hover:scale-105")
                        }, void 0, false, {
                            fileName: "[project]/civic-priority-platform/frontend/components/layout/Navigation.tsx",
                            lineNumber: 81,
                            columnNumber: 426
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(isActive ? "!text-white font-bold" : "!text-[#171817]"),
                            children: item.label
                        }, void 0, false, {
                            fileName: "[project]/civic-priority-platform/frontend/components/layout/Navigation.tsx",
                            lineNumber: 81,
                            columnNumber: 572
                        }, this)
                    ]
                }, item.href, true, {
                    fileName: "[project]/civic-priority-platform/frontend/components/layout/Navigation.tsx",
                    lineNumber: 81,
                    columnNumber: 16
                }, this);
            }
        }["Navigation[navigationItems.map()]"]);
        $[1] = pathname;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    let t1;
    if ($[3] !== t0) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            "aria-label": "Primary Navigation",
            className: "hidden items-center gap-2 lg:flex",
            children: t0
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/layout/Navigation.tsx",
            lineNumber: 91,
            columnNumber: 10
        }, this);
        $[3] = t0;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}
_s(Navigation, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Navigation;
var _c;
__turbopack_context__.k.register(_c, "Navigation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/civic-priority-platform/frontend/components/ui/separator.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Separator",
    ()=>Separator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/@radix-ui/react-separator/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
const Separator = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, orientation = "horizontal", decorative = true, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        decorative: decorative,
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("shrink-0 bg-[#171817]/10", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/civic-priority-platform/frontend/components/ui/separator.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Separator;
Separator.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Separator$React.forwardRef");
__turbopack_context__.k.register(_c1, "Separator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/civic-priority-platform/frontend/components/ui/sheet.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sheet",
    ()=>Sheet,
    "SheetClose",
    ()=>SheetClose,
    "SheetContent",
    ()=>SheetContent,
    "SheetHeader",
    ()=>SheetHeader,
    "SheetOverlay",
    ()=>SheetOverlay,
    "SheetPortal",
    ()=>SheetPortal,
    "SheetTitle",
    ()=>SheetTitle,
    "SheetTrigger",
    ()=>SheetTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
const Sheet = __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const SheetTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"];
const SheetClose = __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"];
const SheetPortal = __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"];
const SheetOverlay = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((t0, ref)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "4c9d50bd82ae4e946f496c053b49ef7de596d5cedaec9b4f48f24cea0b4015d1") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4c9d50bd82ae4e946f496c053b49ef7de596d5cedaec9b4f48f24cea0b4015d1";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== ref || $[8] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
            className: t1,
            ...props,
            ref: ref
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/ui/sheet.tsx",
            lineNumber: 44,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = props;
        $[7] = ref;
        $[8] = t1;
        $[9] = t2;
    } else {
        t2 = $[9];
    }
    return t2;
});
_c = SheetOverlay;
SheetOverlay.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"].displayName;
const SheetContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c1 = (t0, ref)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(19);
    if ($[0] !== "4c9d50bd82ae4e946f496c053b49ef7de596d5cedaec9b4f48f24cea0b4015d1") {
        for(let $i = 0; $i < 19; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4c9d50bd82ae4e946f496c053b49ef7de596d5cedaec9b4f48f24cea0b4015d1";
    }
    let children;
    let className;
    let props;
    let t1;
    if ($[1] !== t0) {
        ({ side: t1, className, children, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = className;
        $[4] = props;
        $[5] = t1;
    } else {
        children = $[2];
        className = $[3];
        props = $[4];
        t1 = $[5];
    }
    const side = t1 === undefined ? "right" : t1;
    let t2;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetOverlay, {}, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/ui/sheet.tsx",
            lineNumber: 91,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    const t3 = side === "right" && "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm";
    const t4 = side === "left" && "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm";
    const t5 = side === "top" && "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top";
    const t6 = side === "bottom" && "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom";
    let t7;
    if ($[7] !== className || $[8] !== t3 || $[9] !== t4 || $[10] !== t5 || $[11] !== t6) {
        t7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500", t3, t4, t5, t6, className);
        $[7] = className;
        $[8] = t3;
        $[9] = t4;
        $[10] = t5;
        $[11] = t6;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
            className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                    className: "h-4 w-4"
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/ui/sheet.tsx",
                    lineNumber: 114,
                    columnNumber: 278
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "sr-only",
                    children: "Close"
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/ui/sheet.tsx",
                    lineNumber: 114,
                    columnNumber: 303
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/ui/sheet.tsx",
            lineNumber: 114,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    let t9;
    if ($[14] !== children || $[15] !== props || $[16] !== ref || $[17] !== t7) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetPortal, {
            children: [
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                    ref: ref,
                    className: t7,
                    ...props,
                    children: [
                        children,
                        t8
                    ]
                }, void 0, true, {
                    fileName: "[project]/civic-priority-platform/frontend/components/ui/sheet.tsx",
                    lineNumber: 121,
                    columnNumber: 27
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/ui/sheet.tsx",
            lineNumber: 121,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = children;
        $[15] = props;
        $[16] = ref;
        $[17] = t7;
        $[18] = t9;
    } else {
        t9 = $[18];
    }
    return t9;
});
_c2 = SheetContent;
SheetContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
const SheetHeader = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "4c9d50bd82ae4e946f496c053b49ef7de596d5cedaec9b4f48f24cea0b4015d1") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4c9d50bd82ae4e946f496c053b49ef7de596d5cedaec9b4f48f24cea0b4015d1";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-2 text-center sm:text-left", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/ui/sheet.tsx",
            lineNumber: 165,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
};
_c3 = SheetHeader;
SheetHeader.displayName = "SheetHeader";
const SheetTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = (t0, ref)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "4c9d50bd82ae4e946f496c053b49ef7de596d5cedaec9b4f48f24cea0b4015d1") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4c9d50bd82ae4e946f496c053b49ef7de596d5cedaec9b4f48f24cea0b4015d1";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg font-semibold text-foreground", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== ref || $[8] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
            ref: ref,
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/ui/sheet.tsx",
            lineNumber: 207,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = props;
        $[7] = ref;
        $[8] = t1;
        $[9] = t2;
    } else {
        t2 = $[9];
    }
    return t2;
});
_c5 = SheetTitle;
SheetTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"].displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "SheetOverlay");
__turbopack_context__.k.register(_c1, "SheetContent$React.forwardRef");
__turbopack_context__.k.register(_c2, "SheetContent");
__turbopack_context__.k.register(_c3, "SheetHeader");
__turbopack_context__.k.register(_c4, "SheetTitle$React.forwardRef");
__turbopack_context__.k.register(_c5, "SheetTitle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=civic-priority-platform_frontend_1b9-e5v._.js.map