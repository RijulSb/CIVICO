(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PortfolioSimulationCanvas",
    ()=>PortfolioSimulationCanvas,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/icons/briefcase.mjs [app-client] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/icons/circle-alert.mjs [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRightLeft$3e$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/icons/arrow-right-left.mjs [app-client] (ecmascript) <export default as ArrowRightLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCheck$3e$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/icons/file-check.mjs [app-client] (ecmascript) <export default as FileCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$vertical$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sliders$3e$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/icons/sliders-vertical.mjs [app-client] (ecmascript) <export default as Sliders>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const mockProjects = [
    {
        id: "proj-1",
        code: "PROJ-101",
        title: "Ward 14 Drinking Water & Pipeline Replacement",
        category: "Water & Sanitation",
        costCr: 12.5,
        livesAffected: 38400,
        priorityScore: 94,
        ward: "Ward 14",
        selectedPlanA: true,
        selectedPlanB: true
    },
    {
        id: "proj-2",
        code: "PROJ-102",
        title: "Janpath Corridor Smart Mobility & Pothole Repair",
        category: "Roads & Mobility",
        costCr: 18.0,
        livesAffected: 62000,
        priorityScore: 91,
        ward: "Ward 08",
        selectedPlanA: true,
        selectedPlanB: false
    },
    {
        id: "proj-3",
        code: "PROJ-103",
        title: "Unit 3 Bio-Sanitation Plant & Waste Grid",
        category: "Sanitation",
        costCr: 8.5,
        livesAffected: 24500,
        priorityScore: 84,
        ward: "Ward 03",
        selectedPlanA: true,
        selectedPlanB: true
    },
    {
        id: "proj-4",
        code: "PROJ-104",
        title: "Patia Primary Health Center Modernization",
        category: "Healthcare",
        costCr: 14.0,
        livesAffected: 41000,
        priorityScore: 78,
        ward: "Ward 01",
        selectedPlanA: false,
        selectedPlanB: true
    },
    {
        id: "proj-5",
        code: "PROJ-105",
        title: "Green Canopy & Urban Park Infrastructure",
        category: "Environment",
        costCr: 6.0,
        livesAffected: 18000,
        priorityScore: 68,
        ward: "Ward 22",
        selectedPlanA: false,
        selectedPlanB: false,
        displacedProjectCode: "PROJ-105 Evicted by Knapsack Solver to stay in Budget"
    }
];
function PortfolioSimulationCanvas() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(31);
    if ($[0] !== "b12fa990cc79d50314b9d662bc9b519d73cf881a727eb7c11c8e14c224468f66") {
        for(let $i = 0; $i < 31; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b12fa990cc79d50314b9d662bc9b519d73cf881a727eb7c11c8e14c224468f66";
    }
    const [activePlan, setActivePlan] = __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]("compare");
    __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]("baseline");
    let t0;
    let t1;
    let t2;
    let t3;
    if ($[1] !== activePlan) {
        const planAProjects = mockProjects.filter(_PortfolioSimulationCanvasMockProjectsFilter);
        const planACost = planAProjects.reduce(_PortfolioSimulationCanvasPlanAProjectsReduce, 0);
        const planALives = planAProjects.reduce(_PortfolioSimulationCanvasPlanAProjectsReduce2, 0);
        const planBProjects = mockProjects.filter(_PortfolioSimulationCanvasMockProjectsFilter2);
        const planBCost = planBProjects.reduce(_PortfolioSimulationCanvasPlanBProjectsReduce, 0);
        const planBLives = planBProjects.reduce(_PortfolioSimulationCanvasPlanBProjectsReduce2, 0);
        t2 = "flex h-full w-full flex-col bg-[#f4f3ef] font-sans";
        let t4;
        if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 font-mono text-xs text-[#e25a45] uppercase tracking-wider",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
                                className: "h-4 w-4 animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                                lineNumber: 100,
                                columnNumber: 116
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Simulation Canvas • Optimization Constraint Sandbox"
                            }, void 0, false, {
                                fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                                lineNumber: 100,
                                columnNumber: 163
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                        lineNumber: 100,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mt-1 text-lg font-bold tracking-tight text-white",
                        children: "Portfolio Allocation & Tradeoff Analysis (Ward Level)"
                    }, void 0, false, {
                        fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                        lineNumber: 100,
                        columnNumber: 233
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                lineNumber: 100,
                columnNumber: 12
            }, this);
            $[6] = t4;
        } else {
            t4 = $[6];
        }
        let t5;
        if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
            t5 = ({
                "PortfolioSimulationCanvas[<button>.onClick]": ()=>setActivePlan("planA")
            })["PortfolioSimulationCanvas[<button>.onClick]"];
            $[7] = t5;
        } else {
            t5 = $[7];
        }
        const t6 = `rounded-lg px-3 py-1.5 font-semibold transition cursor-pointer ${activePlan === "planA" ? "bg-[#e25a45] text-white" : "text-white/70 hover:bg-white/10"}`;
        let t7;
        if ($[8] !== t6) {
            t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: t5,
                className: t6,
                children: "Plan A (Max Impact)"
            }, void 0, false, {
                fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                lineNumber: 117,
                columnNumber: 12
            }, this);
            $[8] = t6;
            $[9] = t7;
        } else {
            t7 = $[9];
        }
        let t8;
        if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
            t8 = ({
                "PortfolioSimulationCanvas[<button>.onClick]": ()=>setActivePlan("planB")
            })["PortfolioSimulationCanvas[<button>.onClick]"];
            $[10] = t8;
        } else {
            t8 = $[10];
        }
        const t9 = `rounded-lg px-3 py-1.5 font-semibold transition cursor-pointer ${activePlan === "planB" ? "bg-[#3b82f6] text-white" : "text-white/70 hover:bg-white/10"}`;
        let t10;
        if ($[11] !== t9) {
            t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: t8,
                className: t9,
                children: "Plan B (Equity Weighted)"
            }, void 0, false, {
                fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                lineNumber: 135,
                columnNumber: 13
            }, this);
            $[11] = t9;
            $[12] = t10;
        } else {
            t10 = $[12];
        }
        let t11;
        if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
            t11 = ({
                "PortfolioSimulationCanvas[<button>.onClick]": ()=>setActivePlan("compare")
            })["PortfolioSimulationCanvas[<button>.onClick]"];
            $[13] = t11;
        } else {
            t11 = $[13];
        }
        const t12 = `rounded-lg px-3 py-1.5 font-semibold transition cursor-pointer ${activePlan === "compare" ? "bg-white text-[#171817]" : "text-white/70 hover:bg-white/10"}`;
        let t13;
        if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
            t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRightLeft$3e$__["ArrowRightLeft"], {
                className: "h-3.5 w-3.5 inline mr-1"
            }, void 0, false, {
                fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                lineNumber: 153,
                columnNumber: 13
            }, this);
            $[14] = t13;
        } else {
            t13 = $[14];
        }
        let t14;
        if ($[15] !== t12) {
            t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: t11,
                className: t12,
                children: [
                    t13,
                    "Compare Optimization Constraints"
                ]
            }, void 0, true, {
                fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                lineNumber: 160,
                columnNumber: 13
            }, this);
            $[15] = t12;
            $[16] = t14;
        } else {
            t14 = $[16];
        }
        if ($[17] !== t10 || $[18] !== t14 || $[19] !== t7) {
            t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between border-b border-[#171817]/15 bg-[#171817] p-4 text-white",
                children: [
                    t4,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1 rounded-xl bg-white/10 p-1 font-mono text-xs text-white",
                        children: [
                            t7,
                            t10,
                            t14
                        ]
                    }, void 0, true, {
                        fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                        lineNumber: 167,
                        columnNumber: 124
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                lineNumber: 167,
                columnNumber: 12
            }, this);
            $[17] = t10;
            $[18] = t14;
            $[19] = t7;
            $[20] = t3;
        } else {
            t3 = $[20];
        }
        t0 = "flex-1 overflow-y-auto p-6 space-y-6";
        t1 = activePlan === "compare" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-2xl border border-[#171817]/20 bg-white p-5 shadow-sm space-y-5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between border-b border-slate-100 pb-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 font-mono text-xs font-bold text-[#171817] uppercase tracking-wider",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$vertical$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sliders$3e$__["Sliders"], {
                                    className: "h-4 w-4 text-[#e25a45]"
                                }, void 0, false, {
                                    fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                                    lineNumber: 176,
                                    columnNumber: 318
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Compare Optimization Constraints (Plan A vs Plan B)"
                                }, void 0, false, {
                                    fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                                    lineNumber: 176,
                                    columnNumber: 364
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                            lineNumber: 176,
                            columnNumber: 209
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono text-xs text-emerald-700 font-semibold flex items-center gap-1 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                        className: "h-3.5 w-3.5 text-emerald-600"
                                    }, void 0, false, {
                                        fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                                        lineNumber: 176,
                                        columnNumber: 629
                                    }, this),
                                    " PuLP ILP Solver Active"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                                lineNumber: 176,
                                columnNumber: 475
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                            lineNumber: 176,
                            columnNumber: 434
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                    lineNumber: 176,
                    columnNumber: 127
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 gap-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-xl border border-[#e25a45]/30 bg-[#eeede9]/50 p-4 space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono text-xs font-bold text-[#e25a45] uppercase tracking-wider",
                                            children: "Plan A: Maximum Citizen Impact"
                                        }, void 0, false, {
                                            fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                                            lineNumber: 176,
                                            columnNumber: 900
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "rounded bg-[#e25a45] px-2 py-0.5 font-mono text-[10px] font-bold text-white",
                                            children: "OPTIMAL IMPACT"
                                        }, void 0, false, {
                                            fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                                            lineNumber: 176,
                                            columnNumber: 1023
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                                    lineNumber: 176,
                                    columnNumber: 849
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1 font-mono text-[11px] text-[#777872] bg-white p-2.5 rounded-lg border border-slate-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "• CAPEX Limit: ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "text-[#171817]",
                                                    children: "₹ 45.0 Cr"
                                                }, void 0, false, {
                                                    fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                                                    lineNumber: 176,
                                                    columnNumber: 1276
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                                            lineNumber: 176,
                                            columnNumber: 1258
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "• Regional Equity Cap: ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "text-[#171817]",
                                                    children: "35% max / ward"
                                                }, void 0, false, {
                                                    fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                                                    lineNumber: 176,
                                                    columnNumber: 1359
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                                            lineNumber: 176,
                                            columnNumber: 1333
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "• Max Ward Projects: ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "text-[#171817]",
                                                    children: "3 per ward"
                                                }, void 0, false, {
                                                    fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                                                    lineNumber: 176,
                                                    columnNumber: 1445
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                                            lineNumber: 176,
                                            columnNumber: 1421
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                                    lineNumber: 176,
                                    columnNumber: 1144
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-2 font-mono text-xs bg-white p-3 rounded-lg border border-slate-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[#777872] text-[10px]",
                                                    children: "CAPEX Spent"
                                                }, void 0, false, {
                                                    fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                                                    lineNumber: 176,
                                                    columnNumber: 1620
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-bold text-[#171817] text-base",
                                                    children: [
                                                        "₹ ",
                                                        planACost.toFixed(1),
                                                        " Cr"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                                                    lineNumber: 176,
                                                    columnNumber: 1683
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                                            lineNumber: 176,
                                            columnNumber: 1615
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[#777872] text-[10px]",
                                                    children: "Lives Affected"
                                                }, void 0, false, {
                                                    fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                                                    lineNumber: 176,
                                                    columnNumber: 1775
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-bold text-[#e25a45] text-base",
                                                    children: planALives.toLocaleString()
                                                }, void 0, false, {
                                                    fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                                                    lineNumber: 176,
                                                    columnNumber: 1841
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                                            lineNumber: 176,
                                            columnNumber: 1770
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                                    lineNumber: 176,
                                    columnNumber: 1509
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-mono text-xs text-[#777872]",
                                    children: [
                                        "Efficiency Metric: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            className: "text-[#171817]",
                                            children: [
                                                "₹ ",
                                                (planACost * 10000000 / planALives).toFixed(0),
                                                " / Person Affected"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                                            lineNumber: 176,
                                            columnNumber: 2003
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                                    lineNumber: 176,
                                    columnNumber: 1936
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                            lineNumber: 176,
                            columnNumber: 764
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-xl border border-[#3b82f6]/30 bg-[#eeede9]/50 p-4 space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono text-xs font-bold text-[#3b82f6] uppercase tracking-wider",
                                            children: "Plan B: Regional Equity Weighted"
                                        }, void 0, false, {
                                            fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                                            lineNumber: 176,
                                            columnNumber: 2261
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "rounded bg-[#3b82f6] px-2 py-0.5 font-mono text-[10px] font-bold text-white",
                                            children: "EQUITY BALANCED"
                                        }, void 0, false, {
                                            fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                                            lineNumber: 176,
                                            columnNumber: 2386
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                                    lineNumber: 176,
                                    columnNumber: 2210
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1 font-mono text-[11px] text-[#777872] bg-white p-2.5 rounded-lg border border-slate-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "• CAPEX Limit: ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "text-[#171817]",
                                                    children: "₹ 35.0 Cr"
                                                }, void 0, false, {
                                                    fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                                                    lineNumber: 176,
                                                    columnNumber: 2640
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                                            lineNumber: 176,
                                            columnNumber: 2622
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "• Regional Equity Cap: ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "text-[#171817]",
                                                    children: "25% max / ward"
                                                }, void 0, false, {
                                                    fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                                                    lineNumber: 176,
                                                    columnNumber: 2723
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                                            lineNumber: 176,
                                            columnNumber: 2697
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "• Max Ward Projects: ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "text-[#171817]",
                                                    children: "2 per ward"
                                                }, void 0, false, {
                                                    fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                                                    lineNumber: 176,
                                                    columnNumber: 2809
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                                            lineNumber: 176,
                                            columnNumber: 2785
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                                    lineNumber: 176,
                                    columnNumber: 2508
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-2 font-mono text-xs bg-white p-3 rounded-lg border border-slate-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[#777872] text-[10px]",
                                                    children: "CAPEX Spent"
                                                }, void 0, false, {
                                                    fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                                                    lineNumber: 176,
                                                    columnNumber: 2984
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-bold text-[#171817] text-base",
                                                    children: [
                                                        "₹ ",
                                                        planBCost.toFixed(1),
                                                        " Cr"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                                                    lineNumber: 176,
                                                    columnNumber: 3047
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                                            lineNumber: 176,
                                            columnNumber: 2979
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[#777872] text-[10px]",
                                                    children: "Lives Affected"
                                                }, void 0, false, {
                                                    fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                                                    lineNumber: 176,
                                                    columnNumber: 3139
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-bold text-[#3b82f6] text-base",
                                                    children: planBLives.toLocaleString()
                                                }, void 0, false, {
                                                    fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                                                    lineNumber: 176,
                                                    columnNumber: 3205
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                                            lineNumber: 176,
                                            columnNumber: 3134
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                                    lineNumber: 176,
                                    columnNumber: 2873
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-mono text-xs text-[#777872]",
                                    children: [
                                        "Efficiency Metric: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            className: "text-[#171817]",
                                            children: [
                                                "₹ ",
                                                (planBCost * 10000000 / planBLives).toFixed(0),
                                                " / Person Affected"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                                            lineNumber: 176,
                                            columnNumber: 3367
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                                    lineNumber: 176,
                                    columnNumber: 3300
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                            lineNumber: 176,
                            columnNumber: 2125
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                    lineNumber: 176,
                    columnNumber: 724
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
            lineNumber: 176,
            columnNumber: 38
        }, this);
        $[1] = activePlan;
        $[2] = t0;
        $[3] = t1;
        $[4] = t2;
        $[5] = t3;
    } else {
        t0 = $[2];
        t1 = $[3];
        t2 = $[4];
        t3 = $[5];
    }
    let t4;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between font-mono text-xs text-[#777872]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                "Candidate Capital Projects (",
                                mockProjects.length,
                                ") — Ward Allocation"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                            lineNumber: 190,
                            columnNumber: 121
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Knapsack Selection Matrix"
                        }, void 0, false, {
                            fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                            lineNumber: 190,
                            columnNumber: 202
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                    lineNumber: 190,
                    columnNumber: 37
                }, this),
                mockProjects.map(_PortfolioSimulationCanvasMockProjectsMap)
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
            lineNumber: 190,
            columnNumber: 10
        }, this);
        $[21] = t4;
    } else {
        t4 = $[21];
    }
    let t5;
    if ($[22] !== t0 || $[23] !== t1) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t0,
            children: [
                t1,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
            lineNumber: 197,
            columnNumber: 10
        }, this);
        $[22] = t0;
        $[23] = t1;
        $[24] = t5;
    } else {
        t5 = $[24];
    }
    let t6;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "Optimization Algorithm: Branch & Bound 0/1 Knapsack (PuLP ILP Engine)"
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
            lineNumber: 206,
            columnNumber: 10
        }, this);
        $[25] = t6;
    } else {
        t6 = $[25];
    }
    let t7;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border-t border-[#171817]/15 bg-[#e2e1db] p-3 font-mono text-xs text-[#777872] flex items-center justify-between",
            children: [
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    className: "flex items-center gap-1 font-bold text-[#171817] hover:text-[#e25a45] transition cursor-pointer",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCheck$3e$__["FileCheck"], {
                            className: "h-4 w-4 text-[#e25a45]"
                        }, void 0, false, {
                            fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                            lineNumber: 213,
                            columnNumber: 274
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Formally Sanction Portfolio Allocation"
                        }, void 0, false, {
                            fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                            lineNumber: 213,
                            columnNumber: 322
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                    lineNumber: 213,
                    columnNumber: 144
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
            lineNumber: 213,
            columnNumber: 10
        }, this);
        $[26] = t7;
    } else {
        t7 = $[26];
    }
    let t8;
    if ($[27] !== t2 || $[28] !== t3 || $[29] !== t5) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t2,
            children: [
                t3,
                t5,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
            lineNumber: 220,
            columnNumber: 10
        }, this);
        $[27] = t2;
        $[28] = t3;
        $[29] = t5;
        $[30] = t8;
    } else {
        t8 = $[30];
    }
    return t8;
}
_s(PortfolioSimulationCanvas, "OhKcDMecZJaJgaJOQhB7jIeYW/4=");
_c = PortfolioSimulationCanvas;
function _PortfolioSimulationCanvasMockProjectsMap(proj) {
    const isPlanA = proj.selectedPlanA;
    const isPlanB = proj.selectedPlanB;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl border border-[#171817]/15 bg-white p-4 shadow-sm space-y-3 transition hover:border-[#171817]/30",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 font-mono text-xs text-[#777872]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-[#171817]",
                                        children: proj.code
                                    }, void 0, false, {
                                        fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                                        lineNumber: 233,
                                        columnNumber: 284
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "• ",
                                            proj.ward
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                                        lineNumber: 233,
                                        columnNumber: 345
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rounded bg-slate-100 px-2 py-0.5 font-mono text-[10px] text-slate-700",
                                        children: proj.category
                                    }, void 0, false, {
                                        fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                                        lineNumber: 233,
                                        columnNumber: 371
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                                lineNumber: 233,
                                columnNumber: 210
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "mt-1 text-base font-bold text-[#171817]",
                                children: proj.title
                            }, void 0, false, {
                                fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                                lineNumber: 233,
                                columnNumber: 487
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                        lineNumber: 233,
                        columnNumber: 205
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-right font-mono",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-lg font-bold text-[#e25a45]",
                                children: [
                                    "₹ ",
                                    proj.costCr,
                                    " Cr"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                                lineNumber: 233,
                                columnNumber: 604
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] text-[#777872]",
                                children: "Estimated CAPEX"
                            }, void 0, false, {
                                fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                                lineNumber: 233,
                                columnNumber: 680
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                        lineNumber: 233,
                        columnNumber: 566
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                lineNumber: 233,
                columnNumber: 149
            }, this),
            proj.displacedProjectCode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-lg bg-amber-50 border border-amber-200 p-2 font-mono text-[10px] text-amber-900 flex items-center gap-1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                        className: "h-3.5 w-3.5 text-amber-600 shrink-0"
                    }, void 0, false, {
                        fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                        lineNumber: 233,
                        columnNumber: 914
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "Tradeoff Note: ",
                            proj.displacedProjectCode
                        ]
                    }, void 0, true, {
                        fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                        lineNumber: 233,
                        columnNumber: 977
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                lineNumber: 233,
                columnNumber: 783
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between pt-2 border-t border-slate-100 font-mono text-xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4 text-[#777872]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Lives Affected: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        className: "text-[#171817]",
                                        children: proj.livesAffected.toLocaleString()
                                    }, void 0, false, {
                                        fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                                        lineNumber: 233,
                                        columnNumber: 1217
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                                lineNumber: 233,
                                columnNumber: 1195
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Priority Score: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        className: "text-[#e25a45]",
                                        children: [
                                            proj.priorityScore,
                                            "/100"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                                        lineNumber: 233,
                                        columnNumber: 1327
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                                lineNumber: 233,
                                columnNumber: 1305
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                        lineNumber: 233,
                        columnNumber: 1139
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `rounded px-2.5 py-1 text-[11px] font-bold ${isPlanA ? "bg-[#e25a45] text-white" : "bg-slate-100 text-slate-400"}`,
                                children: [
                                    "Plan A ",
                                    isPlanA ? "\u2713" : "\u2014"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                                lineNumber: 233,
                                columnNumber: 1449
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `rounded px-2.5 py-1 text-[11px] font-bold ${isPlanB ? "bg-[#3b82f6] text-white" : "bg-slate-100 text-slate-400"}`,
                                children: [
                                    "Plan B ",
                                    isPlanB ? "\u2713" : "\u2014"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                                lineNumber: 233,
                                columnNumber: 1627
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                        lineNumber: 233,
                        columnNumber: 1408
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
                lineNumber: 233,
                columnNumber: 1039
            }, this)
        ]
    }, proj.id, true, {
        fileName: "[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx",
        lineNumber: 233,
        columnNumber: 10
    }, this);
}
function _PortfolioSimulationCanvasPlanBProjectsReduce2(sum_2, p_4) {
    return sum_2 + p_4.livesAffected;
}
function _PortfolioSimulationCanvasPlanBProjectsReduce(sum_1, p_3) {
    return sum_1 + p_3.costCr;
}
function _PortfolioSimulationCanvasMockProjectsFilter2(p_2) {
    return p_2.selectedPlanB;
}
function _PortfolioSimulationCanvasPlanAProjectsReduce2(sum_0, p_1) {
    return sum_0 + p_1.livesAffected;
}
function _PortfolioSimulationCanvasPlanAProjectsReduce(sum, p_0) {
    return sum + p_0.costCr;
}
function _PortfolioSimulationCanvasMockProjectsFilter(p) {
    return p.selectedPlanA;
}
const __TURBOPACK__default__export__ = PortfolioSimulationCanvas;
var _c;
__turbopack_context__.k.register(_c, "PortfolioSimulationCanvas");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx [app-client] (ecmascript, next/dynamic entry)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/civic-priority-platform/frontend/components/priorities/PortfolioSimulationCanvas.tsx [app-client] (ecmascript)"));
}),
"[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/icons/arrow-right-left.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ArrowRightLeft
]);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m16 3 4 4-4 4",
            key: "1x1c3m"
        }
    ],
    [
        "path",
        {
            d: "M20 7H4",
            key: "zbl0bi"
        }
    ],
    [
        "path",
        {
            d: "m8 21-4-4 4-4",
            key: "h9nckh"
        }
    ],
    [
        "path",
        {
            d: "M4 17h16",
            key: "g4d7ey"
        }
    ]
];
const ArrowRightLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("arrow-right-left", __iconNode);
;
}),
"[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/icons/arrow-right-left.mjs [app-client] (ecmascript) <export default as ArrowRightLeft>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowRightLeft",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/icons/arrow-right-left.mjs [app-client] (ecmascript)");
}),
"[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/icons/briefcase.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Briefcase
]);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",
            key: "jecpp"
        }
    ],
    [
        "rect",
        {
            width: "20",
            height: "14",
            x: "2",
            y: "6",
            rx: "2",
            key: "i6l2r4"
        }
    ]
];
const Briefcase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("briefcase", __iconNode);
;
}),
"[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/icons/briefcase.mjs [app-client] (ecmascript) <export default as Briefcase>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Briefcase",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/icons/briefcase.mjs [app-client] (ecmascript)");
}),
"[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/icons/circle-alert.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>CircleAlert
]);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12",
            y1: "8",
            y2: "12",
            key: "1pkeuh"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12.01",
            y1: "16",
            y2: "16",
            key: "4dfq90"
        }
    ]
];
const CircleAlert = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("circle-alert", __iconNode);
;
}),
"[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/icons/circle-alert.mjs [app-client] (ecmascript) <export default as AlertCircle>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AlertCircle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/icons/circle-alert.mjs [app-client] (ecmascript)");
}),
"[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/icons/file-check.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>FileCheck
]);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
            key: "1oefj6"
        }
    ],
    [
        "path",
        {
            d: "M14 2v5a1 1 0 0 0 1 1h5",
            key: "wfsgrz"
        }
    ],
    [
        "path",
        {
            d: "m9 15 2 2 4-4",
            key: "1grp1n"
        }
    ]
];
const FileCheck = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("file-check", __iconNode);
;
}),
"[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/icons/file-check.mjs [app-client] (ecmascript) <export default as FileCheck>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FileCheck",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/icons/file-check.mjs [app-client] (ecmascript)");
}),
"[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Sparkles
]);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
            key: "1s2grr"
        }
    ],
    [
        "path",
        {
            d: "M20 2v4",
            key: "1rf3ol"
        }
    ],
    [
        "path",
        {
            d: "M22 4h-4",
            key: "gwowj6"
        }
    ],
    [
        "circle",
        {
            cx: "4",
            cy: "20",
            r: "2",
            key: "6kqj1y"
        }
    ]
];
const Sparkles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("sparkles", __iconNode);
;
}),
"[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sparkles",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=civic-priority-platform_frontend_1xrzjjg._.js.map