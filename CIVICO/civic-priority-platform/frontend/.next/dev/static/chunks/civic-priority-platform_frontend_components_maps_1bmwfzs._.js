(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/civic-priority-platform/frontend/components/maps/CivicMap.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CivicMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$MapContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/react-leaflet/lib/MapContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$TileLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/react-leaflet/lib/TileLayer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/react-leaflet/lib/hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$MapProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/components/maps/MapProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$layers$2f$BaseMapSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/components/maps/layers/BaseMapSelector.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$layers$2f$HotspotLayer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/components/maps/layers/HotspotLayer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$layers$2f$IssueLayer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/components/maps/layers/IssueLayer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$layers$2f$ContextLayers$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/components/maps/layers/ContextLayers.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$controls$2f$MapControls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/components/maps/controls/MapControls.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$controls$2f$LayerSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/components/maps/controls/LayerSelector.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$panels$2f$ClusterDetailPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$utils$2f$useMapEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/components/maps/utils/useMapEvents.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
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
;
;
;
;
const DEFAULT_CENTER = [
    20.2961,
    85.8245
];
const DEFAULT_ZOOM = 11;
/**
 * Connects the Leaflet map instance to MapProvider.
 */ function MapInstanceBridge() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "3aaa722a9064c03eb9539217522fea0a188882f8455f0d9f344dec5336f5aca5") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3aaa722a9064c03eb9539217522fea0a188882f8455f0d9f344dec5336f5aca5";
    }
    const map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"])();
    const { setMap } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$MapProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCivicMap"])();
    let t0;
    let t1;
    if ($[1] !== map || $[2] !== setMap) {
        t0 = ({
            "MapInstanceBridge[useEffect()]": ()=>{
                setMap(map);
                return ()=>{
                    setMap(null);
                };
            }
        })["MapInstanceBridge[useEffect()]"];
        t1 = [
            map,
            setMap
        ];
        $[1] = map;
        $[2] = setMap;
        $[3] = t0;
        $[4] = t1;
    } else {
        t0 = $[3];
        t1 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    return null;
}
_s(MapInstanceBridge, "kuDZ4ueF7U4DK89wVUHJOVw6NYs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"],
        __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$MapProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCivicMap"]
    ];
});
_c = MapInstanceBridge;
/**
 * Connects Leaflet map events to the application's
 * map interaction logic.
 */ function MapInteractionBridge() {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "3aaa722a9064c03eb9539217522fea0a188882f8455f0d9f344dec5336f5aca5") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3aaa722a9064c03eb9539217522fea0a188882f8455f0d9f344dec5336f5aca5";
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$utils$2f$useMapEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMapEvents"])();
    return null;
}
_s1(MapInteractionBridge, "Ld/tk8Iz8AdZhC1l7acENaOEoCo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$utils$2f$useMapEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMapEvents"]
    ];
});
_c1 = MapInteractionBridge;
/**
 * Renders all map functionality.
 *
 * Visibility is controlled through MapProvider's
 * `layers` state rather than individual properties.
 */ function MapContent() {
    _s2();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "3aaa722a9064c03eb9539217522fea0a188882f8455f0d9f344dec5336f5aca5") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3aaa722a9064c03eb9539217522fea0a188882f8455f0d9f344dec5336f5aca5";
    }
    const { layers } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$MapProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCivicMap"])();
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$TileLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TileLayer"], {
            attribution: "\xA9 OpenStreetMap contributors",
            url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/CivicMap.tsx",
            lineNumber: 98,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] !== layers.showHotspots) {
        t1 = layers.showHotspots && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$layers$2f$HotspotLayer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/CivicMap.tsx",
            lineNumber: 105,
            columnNumber: 33
        }, this);
        $[2] = layers.showHotspots;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    let t2;
    if ($[4] !== layers.showIssues) {
        t2 = layers.showIssues && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$layers$2f$IssueLayer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/CivicMap.tsx",
            lineNumber: 113,
            columnNumber: 31
        }, this);
        $[4] = layers.showIssues;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    let t9;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$layers$2f$ContextLayers$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/CivicMap.tsx",
            lineNumber: 127,
            columnNumber: 10
        }, this);
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$controls$2f$MapControls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/CivicMap.tsx",
            lineNumber: 128,
            columnNumber: 10
        }, this);
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$controls$2f$LayerSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/CivicMap.tsx",
            lineNumber: 129,
            columnNumber: 10
        }, this);
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$layers$2f$BaseMapSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/CivicMap.tsx",
            lineNumber: 130,
            columnNumber: 10
        }, this);
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$panels$2f$ClusterDetailPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/CivicMap.tsx",
            lineNumber: 131,
            columnNumber: 10
        }, this);
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MapInstanceBridge, {}, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/CivicMap.tsx",
            lineNumber: 132,
            columnNumber: 10
        }, this);
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MapInteractionBridge, {}, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/CivicMap.tsx",
            lineNumber: 133,
            columnNumber: 10
        }, this);
        $[6] = t3;
        $[7] = t4;
        $[8] = t5;
        $[9] = t6;
        $[10] = t7;
        $[11] = t8;
        $[12] = t9;
    } else {
        t3 = $[6];
        t4 = $[7];
        t5 = $[8];
        t6 = $[9];
        t7 = $[10];
        t8 = $[11];
        t9 = $[12];
    }
    let t10;
    if ($[13] !== t1 || $[14] !== t2) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t0,
                t1,
                t2,
                t3,
                t4,
                t5,
                t6,
                t7,
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/CivicMap.tsx",
            lineNumber: 152,
            columnNumber: 11
        }, this);
        $[13] = t1;
        $[14] = t2;
        $[15] = t10;
    } else {
        t10 = $[15];
    }
    return t10;
}
_s2(MapContent, "BRyyKnf5cndV/DToEAq8akf08XA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$MapProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCivicMap"]
    ];
});
_c2 = MapContent;
function MapViewport(t0) {
    _s3();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "3aaa722a9064c03eb9539217522fea0a188882f8455f0d9f344dec5336f5aca5") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3aaa722a9064c03eb9539217522fea0a188882f8455f0d9f344dec5336f5aca5";
    }
    const { center, zoom } = t0;
    const map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"])();
    let t1;
    let t2;
    if ($[1] !== center || $[2] !== map || $[3] !== zoom) {
        t1 = ({
            "MapViewport[useEffect()]": ()=>{
                const currentCenter = map.getCenter();
                const currentZoom = map.getZoom();
                const centerChanged = Math.abs(currentCenter.lat - center[0]) > 0.0001 || Math.abs(currentCenter.lng - center[1]) > 0.0001;
                const zoomChanged = currentZoom !== zoom;
                if (centerChanged || zoomChanged) {
                    map.setView(center, zoom, {
                        animate: true
                    });
                }
            }
        })["MapViewport[useEffect()]"];
        t2 = [
            center,
            zoom,
            map
        ];
        $[1] = center;
        $[2] = map;
        $[3] = zoom;
        $[4] = t1;
        $[5] = t2;
    } else {
        t1 = $[4];
        t2 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    return null;
}
_s3(MapViewport, "IoceErwr5KVGS9kN4RQ1bOkYMAg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"]
    ];
});
_c3 = MapViewport;
function CivicMap(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "3aaa722a9064c03eb9539217522fea0a188882f8455f0d9f344dec5336f5aca5") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3aaa722a9064c03eb9539217522fea0a188882f8455f0d9f344dec5336f5aca5";
    }
    const { center: t1, zoom: t2, className: t3 } = t0;
    const center = t1 === undefined ? DEFAULT_CENTER : t1;
    const zoom = t2 === undefined ? DEFAULT_ZOOM : t2;
    const className = t3 === undefined ? "" : t3;
    const t4 = `relative h-full min-h-[500px] w-full overflow-hidden rounded-xl ${className}`;
    let t5;
    if ($[1] !== center || $[2] !== zoom) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MapViewport, {
            center: center,
            zoom: zoom
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/CivicMap.tsx",
            lineNumber: 235,
            columnNumber: 10
        }, this);
        $[1] = center;
        $[2] = zoom;
        $[3] = t5;
    } else {
        t5 = $[3];
    }
    let t6;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MapContent, {}, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/CivicMap.tsx",
            lineNumber: 244,
            columnNumber: 10
        }, this);
        $[4] = t6;
    } else {
        t6 = $[4];
    }
    let t7;
    if ($[5] !== center || $[6] !== t5 || $[7] !== zoom) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$MapProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapProvider"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$MapContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapContainer"], {
                center: center,
                zoom: zoom,
                scrollWheelZoom: true,
                className: "h-full min-h-[500px] w-full",
                children: [
                    t5,
                    t6
                ]
            }, void 0, true, {
                fileName: "[project]/civic-priority-platform/frontend/components/maps/CivicMap.tsx",
                lineNumber: 251,
                columnNumber: 23
            }, this)
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/CivicMap.tsx",
            lineNumber: 251,
            columnNumber: 10
        }, this);
        $[5] = center;
        $[6] = t5;
        $[7] = zoom;
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] !== t4 || $[10] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t4,
            children: t7
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/CivicMap.tsx",
            lineNumber: 261,
            columnNumber: 10
        }, this);
        $[9] = t4;
        $[10] = t7;
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    return t8;
}
_c4 = CivicMap;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "MapInstanceBridge");
__turbopack_context__.k.register(_c1, "MapInteractionBridge");
__turbopack_context__.k.register(_c2, "MapContent");
__turbopack_context__.k.register(_c3, "MapViewport");
__turbopack_context__.k.register(_c4, "CivicMap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/civic-priority-platform/frontend/components/maps/CivicMap.tsx [app-client] (ecmascript, next/dynamic entry)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/civic-priority-platform/frontend/components/maps/CivicMap.tsx [app-client] (ecmascript)"));
}),
"[project]/civic-priority-platform/frontend/components/maps/controls/LayerSelector.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LayerSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/icons/chart-column.mjs [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$construction$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Construction$3e$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/icons/construction.mjs [app-client] (ecmascript) <export default as Construction>");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/icons/layers.mjs [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pinned$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPinned$3e$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/icons/map-pinned.mjs [app-client] (ecmascript) <export default as MapPinned>");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/icons/message-square.mjs [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/icons/shield.mjs [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$MapProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/components/maps/MapProvider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const LAYER_OPTIONS = [
    {
        key: "showHotspots",
        label: "Hotspots",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pinned$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPinned$3e$__["MapPinned"]
    },
    {
        key: "showIssues",
        label: "Individual issues",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"]
    },
    {
        key: "showDemographics",
        label: "Demographics",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"]
    },
    {
        key: "showInfrastructure",
        label: "Infrastructure",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$construction$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Construction$3e$__["Construction"]
    },
    {
        key: "showBoundaries",
        label: "Boundaries",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"]
    }
];
function LayerSelector() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "ffbbf827584e751d0e2af38ea0e0797a6f15b28ac35369e743bb3cc3650bb1dc") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ffbbf827584e751d0e2af38ea0e0797a6f15b28ac35369e743bb3cc3650bb1dc";
    }
    const { layers, toggleLayer } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$MapProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCivicMap"])();
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-3 flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                    className: "h-4 w-4"
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/LayerSelector.tsx",
                    lineNumber: 46,
                    columnNumber: 56
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-sm font-semibold",
                    children: "Map layers"
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/LayerSelector.tsx",
                    lineNumber: 46,
                    columnNumber: 86
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/LayerSelector.tsx",
            lineNumber: 46,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] !== layers || $[3] !== toggleLayer) {
        t1 = LAYER_OPTIONS.map({
            "LayerSelector[LAYER_OPTIONS.map()]": (option)=>{
                const Icon = option.icon;
                const enabled = layers[option.key];
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: {
                        "LayerSelector[LAYER_OPTIONS.map() > <button>.onClick]": ()=>toggleLayer(option.key)
                    }["LayerSelector[LAYER_OPTIONS.map() > <button>.onClick]"],
                    "aria-pressed": enabled,
                    className: `flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors ${enabled ? "bg-muted font-medium" : "hover:bg-muted/60"}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                            className: "h-4 w-4 shrink-0"
                        }, void 0, false, {
                            fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/LayerSelector.tsx",
                            lineNumber: 59,
                            columnNumber: 252
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "flex-1",
                            children: option.label
                        }, void 0, false, {
                            fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/LayerSelector.tsx",
                            lineNumber: 59,
                            columnNumber: 289
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `h-2.5 w-2.5 rounded-full ${enabled ? "bg-primary" : "bg-muted-foreground/30"}`,
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/LayerSelector.tsx",
                            lineNumber: 59,
                            columnNumber: 335
                        }, this)
                    ]
                }, option.key, true, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/LayerSelector.tsx",
                    lineNumber: 57,
                    columnNumber: 16
                }, this);
            }
        }["LayerSelector[LAYER_OPTIONS.map()]"]);
        $[2] = layers;
        $[3] = toggleLayer;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    let t2;
    if ($[5] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute left-4 top-4 z-[1000] w-56 rounded-xl border bg-background/95 p-3 shadow-lg backdrop-blur-sm",
            children: [
                t0,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-1",
                    children: t1
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/LayerSelector.tsx",
                    lineNumber: 70,
                    columnNumber: 133
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/LayerSelector.tsx",
            lineNumber: 70,
            columnNumber: 10
        }, this);
        $[5] = t1;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    return t2;
}
_s(LayerSelector, "3fzJ9KIxPcGHTN/VxVo+XJZoTaU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$MapProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCivicMap"]
    ];
});
_c = LayerSelector;
var _c;
__turbopack_context__.k.register(_c, "LayerSelector");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/civic-priority-platform/frontend/components/maps/controls/MapControls.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MapControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$locate$2d$fixed$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LocateFixed$3e$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/icons/locate-fixed.mjs [app-client] (ecmascript) <export default as LocateFixed>");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/icons/map-pin.mjs [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/icons/rotate-ccw.mjs [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$MapProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/components/maps/MapProvider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function MapControls() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(21);
    if ($[0] !== "57652e3e719ce42c7033f376d5e6b90ed386989f6dc472906c92c9b93b78d5bd") {
        for(let $i = 0; $i < 21; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "57652e3e719ce42c7033f376d5e6b90ed386989f6dc472906c92c9b93b78d5bd";
    }
    const { setCenter, setPinMode, isPinMode, resetView } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$MapProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCivicMap"])();
    let t0;
    if ($[1] !== setCenter) {
        t0 = ({
            "MapControls[handleLocate]": ()=>{
                if (!navigator.geolocation) {
                    return;
                }
                navigator.geolocation.getCurrentPosition({
                    "MapControls[handleLocate > navigator.geolocation.getCurrentPosition(arg0)]": (position)=>{
                        setCenter(position.coords.latitude, position.coords.longitude, 15);
                    }
                }["MapControls[handleLocate > navigator.geolocation.getCurrentPosition(arg0)]"], _MapControlsHandleLocateNavigatorGeolocationGetCurrentPositionArg);
            }
        })["MapControls[handleLocate]"];
        $[1] = setCenter;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const handleLocate = t0;
    let t1;
    if ($[3] !== isPinMode || $[4] !== setPinMode) {
        t1 = ({
            "MapControls[handleReport]": ()=>{
                setPinMode(!isPinMode);
            }
        })["MapControls[handleReport]"];
        $[3] = isPinMode;
        $[4] = setPinMode;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    const handleReport = t1;
    const t2 = `flex h-10 w-10 items-center justify-center rounded-lg border bg-background shadow-md transition-colors ${isPinMode ? "border-primary bg-primary text-primary-foreground" : "hover:bg-muted"}`;
    let t3;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
            className: "h-5 w-5"
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/MapControls.tsx",
            lineNumber: 57,
            columnNumber: 10
        }, this);
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== handleReport || $[8] !== isPinMode || $[9] !== t2) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: handleReport,
            "aria-label": "Report an issue",
            "aria-pressed": isPinMode,
            className: t2,
            children: t3
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/MapControls.tsx",
            lineNumber: 64,
            columnNumber: 10
        }, this);
        $[7] = handleReport;
        $[8] = isPinMode;
        $[9] = t2;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    let t5;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$locate$2d$fixed$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LocateFixed$3e$__["LocateFixed"], {
            className: "h-5 w-5"
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/MapControls.tsx",
            lineNumber: 74,
            columnNumber: 10
        }, this);
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    let t6;
    if ($[12] !== handleLocate) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: handleLocate,
            "aria-label": "Locate me",
            className: "flex h-10 w-10 items-center justify-center rounded-lg border bg-background shadow-md transition-colors hover:bg-muted",
            children: t5
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/MapControls.tsx",
            lineNumber: 81,
            columnNumber: 10
        }, this);
        $[12] = handleLocate;
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    let t7;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
            className: "h-5 w-5"
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/MapControls.tsx",
            lineNumber: 89,
            columnNumber: 10
        }, this);
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[15] !== resetView) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: resetView,
            "aria-label": "Reset map view",
            className: "flex h-10 w-10 items-center justify-center rounded-lg border bg-background shadow-md transition-colors hover:bg-muted",
            children: t7
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/MapControls.tsx",
            lineNumber: 96,
            columnNumber: 10
        }, this);
        $[15] = resetView;
        $[16] = t8;
    } else {
        t8 = $[16];
    }
    let t9;
    if ($[17] !== t4 || $[18] !== t6 || $[19] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute right-4 top-4 z-[1000] flex flex-col gap-2",
            children: [
                t4,
                t6,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/MapControls.tsx",
            lineNumber: 104,
            columnNumber: 10
        }, this);
        $[17] = t4;
        $[18] = t6;
        $[19] = t8;
        $[20] = t9;
    } else {
        t9 = $[20];
    }
    return t9;
}
_s(MapControls, "Ycic0juVlO5gYAHxInBm0ltSxTg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$MapProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCivicMap"]
    ];
});
_c = MapControls;
function _MapControlsHandleLocateNavigatorGeolocationGetCurrentPositionArg() {}
var _c;
__turbopack_context__.k.register(_c, "MapControls");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/civic-priority-platform/frontend/components/maps/layers/BaseMapSelector.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BasemapSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$TileLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/react-leaflet/lib/TileLayer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/icons/map.mjs [app-client] (ecmascript) <export default as Map>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const BASEMAPS = [
    {
        id: "osm",
        label: "OpenStreetMap",
        url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        attribution: "&copy; OpenStreetMap contributors"
    },
    {
        id: "light",
        label: "Light",
        url: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
        attribution: "&copy; OpenStreetMap contributors &copy; CARTO"
    },
    {
        id: "dark",
        label: "Dark",
        url: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
        attribution: "&copy; OpenStreetMap contributors &copy; CARTO"
    }
];
function BasemapSelector() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(23);
    if ($[0] !== "fe060da1adc0318dd5468ff3a17e22e0f6dc82c2aa47aa8ef728838a1bfc0d51") {
        for(let $i = 0; $i < 23; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "fe060da1adc0318dd5468ff3a17e22e0f6dc82c2aa47aa8ef728838a1bfc0d51";
    }
    const [activeBasemap, setActiveBasemap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("osm");
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    if ($[1] !== activeBasemap) {
        t0 = BASEMAPS.find({
            "BasemapSelector[BASEMAPS.find()]": (basemap)=>basemap.id === activeBasemap
        }["BasemapSelector[BASEMAPS.find()]"]) ?? BASEMAPS[0];
        $[1] = activeBasemap;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const active = t0;
    let t1;
    if ($[3] !== active.attribution || $[4] !== active.id || $[5] !== active.url) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$TileLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TileLayer"], {
            attribution: active.attribution,
            url: active.url
        }, active.id, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/layers/BaseMapSelector.tsx",
            lineNumber: 53,
            columnNumber: 10
        }, this);
        $[3] = active.attribution;
        $[4] = active.id;
        $[5] = active.url;
        $[6] = t1;
    } else {
        t1 = $[6];
    }
    let t2;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "BasemapSelector[<button>.onClick]": ()=>setOpen(_BasemapSelectorButtonOnClickSetOpen)
        })["BasemapSelector[<button>.onClick]"];
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    let t3;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__["Map"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/layers/BaseMapSelector.tsx",
            lineNumber: 72,
            columnNumber: 10
        }, this);
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    let t4;
    if ($[9] !== active.label) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "hidden sm:inline",
            children: active.label
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/layers/BaseMapSelector.tsx",
            lineNumber: 79,
            columnNumber: 10
        }, this);
        $[9] = active.label;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    let t5;
    if ($[11] !== open || $[12] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: t2,
            "aria-label": "Change map style",
            "aria-expanded": open,
            className: "flex h-10 items-center gap-2 rounded-lg border bg-background/95 px-3 text-sm font-medium shadow-md backdrop-blur transition hover:bg-background",
            children: [
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/layers/BaseMapSelector.tsx",
            lineNumber: 87,
            columnNumber: 10
        }, this);
        $[11] = open;
        $[12] = t4;
        $[13] = t5;
    } else {
        t5 = $[13];
    }
    let t6;
    if ($[14] !== activeBasemap || $[15] !== open) {
        t6 = open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-2 w-44 rounded-lg border bg-background/95 p-1 shadow-lg backdrop-blur",
            children: BASEMAPS.map({
                "BasemapSelector[BASEMAPS.map()]": (basemap_0)=>{
                    const isActive = basemap_0.id === activeBasemap;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: {
                            "BasemapSelector[BASEMAPS.map() > <button>.onClick]": ()=>{
                                setActiveBasemap(basemap_0.id);
                                setOpen(false);
                            }
                        }["BasemapSelector[BASEMAPS.map() > <button>.onClick]"],
                        className: `flex w-full items-center rounded-md px-3 py-2 text-left text-sm transition ${isActive ? "bg-muted font-medium" : "hover:bg-muted/70"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: basemap_0.label
                            }, void 0, false, {
                                fileName: "[project]/civic-priority-platform/frontend/components/maps/layers/BaseMapSelector.tsx",
                                lineNumber: 104,
                                columnNumber: 216
                            }, this),
                            isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ml-auto text-xs text-muted-foreground",
                                children: "Active"
                            }, void 0, false, {
                                fileName: "[project]/civic-priority-platform/frontend/components/maps/layers/BaseMapSelector.tsx",
                                lineNumber: 104,
                                columnNumber: 259
                            }, this)
                        ]
                    }, basemap_0.id, true, {
                        fileName: "[project]/civic-priority-platform/frontend/components/maps/layers/BaseMapSelector.tsx",
                        lineNumber: 99,
                        columnNumber: 18
                    }, this);
                }
            }["BasemapSelector[BASEMAPS.map()]"])
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/layers/BaseMapSelector.tsx",
            lineNumber: 96,
            columnNumber: 18
        }, this);
        $[14] = activeBasemap;
        $[15] = open;
        $[16] = t6;
    } else {
        t6 = $[16];
    }
    let t7;
    if ($[17] !== t5 || $[18] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute right-4 top-4 z-[1000]",
            children: [
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/layers/BaseMapSelector.tsx",
            lineNumber: 115,
            columnNumber: 10
        }, this);
        $[17] = t5;
        $[18] = t6;
        $[19] = t7;
    } else {
        t7 = $[19];
    }
    let t8;
    if ($[20] !== t1 || $[21] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t1,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/layers/BaseMapSelector.tsx",
            lineNumber: 124,
            columnNumber: 10
        }, this);
        $[20] = t1;
        $[21] = t7;
        $[22] = t8;
    } else {
        t8 = $[22];
    }
    return t8;
}
_s(BasemapSelector, "UTi4AKnYeyoawF+k0PW0xar9/8g=");
_c = BasemapSelector;
function _BasemapSelectorButtonOnClickSetOpen(current) {
    return !current;
}
var _c;
__turbopack_context__.k.register(_c, "BasemapSelector");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/civic-priority-platform/frontend/components/maps/layers/ContextLayers.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContextLayers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$GeoJSON$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/react-leaflet/lib/GeoJSON.js [app-client] (ecmascript)");
"use client";
;
;
;
const EMPTY_FEATURE_COLLECTION = {
    type: "FeatureCollection",
    features: []
};
const DEFAULT_DATA = {
    demographics: EMPTY_FEATURE_COLLECTION,
    infrastructure: EMPTY_FEATURE_COLLECTION,
    boundaries: EMPTY_FEATURE_COLLECTION
};
function getStyle(layer) {
    switch(layer){
        case "demographics":
            return {
                color: "#2563eb",
                weight: 1,
                fillOpacity: 0.18
            };
        case "infrastructure":
            return {
                color: "#16a34a",
                weight: 1.5,
                fillOpacity: 0.12
            };
        case "boundaries":
            return {
                color: "#111827",
                weight: 2,
                fillOpacity: 0,
                dashArray: "6 5"
            };
        default:
            return {};
    }
}
function normalizeGeoJSON(data) {
    return data ?? EMPTY_FEATURE_COLLECTION;
}
function ContextLayers(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(24);
    if ($[0] !== "109ac51139ae2c302c7c903f203430399f78df720a050c71567f1ecd48693654") {
        for(let $i = 0; $i < 24; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "109ac51139ae2c302c7c903f203430399f78df720a050c71567f1ecd48693654";
    }
    const { showDemographics: t1, showInfrastructure: t2, showBoundaries: t3, data: t4 } = t0;
    const showDemographics = t1 === undefined ? false : t1;
    const showInfrastructure = t2 === undefined ? false : t2;
    const showBoundaries = t3 === undefined ? true : t3;
    const data = t4 === undefined ? DEFAULT_DATA : t4;
    let t5;
    if ($[1] !== data.demographics) {
        t5 = normalizeGeoJSON(data.demographics);
        $[1] = data.demographics;
        $[2] = t5;
    } else {
        t5 = $[2];
    }
    let t6;
    if ($[3] !== data.infrastructure) {
        t6 = normalizeGeoJSON(data.infrastructure);
        $[3] = data.infrastructure;
        $[4] = t6;
    } else {
        t6 = $[4];
    }
    let t7;
    if ($[5] !== data.boundaries) {
        t7 = normalizeGeoJSON(data.boundaries);
        $[5] = data.boundaries;
        $[6] = t7;
    } else {
        t7 = $[6];
    }
    let t8;
    if ($[7] !== t5 || $[8] !== t6 || $[9] !== t7) {
        t8 = {
            demographics: t5,
            infrastructure: t6,
            boundaries: t7
        };
        $[7] = t5;
        $[8] = t6;
        $[9] = t7;
        $[10] = t8;
    } else {
        t8 = $[10];
    }
    const layers = t8;
    let t9;
    if ($[11] !== layers || $[12] !== showDemographics) {
        t9 = showDemographics && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$GeoJSON$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GeoJSON"], {
            data: layers.demographics,
            style: _ContextLayersGeoJSONStyle
        }, "demographics", false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/layers/ContextLayers.tsx",
            lineNumber: 115,
            columnNumber: 30
        }, this);
        $[11] = layers;
        $[12] = showDemographics;
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    let t10;
    if ($[14] !== layers || $[15] !== showInfrastructure) {
        t10 = showInfrastructure && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$GeoJSON$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GeoJSON"], {
            data: layers.infrastructure,
            style: _ContextLayersGeoJSONStyle2
        }, "infrastructure", false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/layers/ContextLayers.tsx",
            lineNumber: 124,
            columnNumber: 33
        }, this);
        $[14] = layers;
        $[15] = showInfrastructure;
        $[16] = t10;
    } else {
        t10 = $[16];
    }
    let t11;
    if ($[17] !== layers || $[18] !== showBoundaries) {
        t11 = showBoundaries && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$GeoJSON$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GeoJSON"], {
            data: layers.boundaries,
            style: _ContextLayersGeoJSONStyle3
        }, "boundaries", false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/layers/ContextLayers.tsx",
            lineNumber: 133,
            columnNumber: 29
        }, this);
        $[17] = layers;
        $[18] = showBoundaries;
        $[19] = t11;
    } else {
        t11 = $[19];
    }
    let t12;
    if ($[20] !== t10 || $[21] !== t11 || $[22] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t9,
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/layers/ContextLayers.tsx",
            lineNumber: 142,
            columnNumber: 11
        }, this);
        $[20] = t10;
        $[21] = t11;
        $[22] = t9;
        $[23] = t12;
    } else {
        t12 = $[23];
    }
    return t12;
}
_c = ContextLayers;
function _ContextLayersGeoJSONStyle3() {
    return getStyle("boundaries");
}
function _ContextLayersGeoJSONStyle2() {
    return getStyle("infrastructure");
}
function _ContextLayersGeoJSONStyle() {
    return getStyle("demographics");
}
var _c;
__turbopack_context__.k.register(_c, "ContextLayers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/civic-priority-platform/frontend/components/maps/layers/HotspotLayer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HotspotLayer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$CircleMarker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/react-leaflet/lib/CircleMarker.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$LayerGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/react-leaflet/lib/LayerGroup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Popup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/react-leaflet/lib/Popup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/react-leaflet/lib/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$MapProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/components/maps/MapProvider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function getHotspotRadius(count) {
    if (count >= 100) return 24;
    if (count >= 50) return 19;
    if (count >= 20) return 15;
    if (count >= 10) return 11;
    return 8;
}
function getHotspotColor(score = 0) {
    if (score >= 0.8) return "#dc2626";
    if (score >= 0.6) return "#ea580c";
    if (score >= 0.4) return "#f59e0b";
    return "#2563eb";
}
function HotspotLayer(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "8bf67735ba7fb97891ec9cdb1e558e4c7733304171e376387459fef562864c0f") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8bf67735ba7fb97891ec9cdb1e558e4c7733304171e376387459fef562864c0f";
    }
    const { hotspots: t1 } = t0;
    const hotspots = t1 === undefined ? [] : t1;
    const { layers, filters, selectCluster } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$MapProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCivicMap"])();
    if (!layers.showHotspots) {
        return null;
    }
    let t2;
    if ($[1] !== filters) {
        t2 = ({
            "HotspotLayer[hotspots.filter()]": (hotspot)=>{
                if (filters.themeFilter === "all") {
                    return true;
                }
                return hotspot.dominantTheme?.toLowerCase() === filters.themeFilter.toLowerCase();
            }
        })["HotspotLayer[hotspots.filter()]"];
        $[1] = filters;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const visibleHotspots = hotspots.filter(t2);
    const T0 = __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$LayerGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LayerGroup"];
    let t3;
    if ($[3] !== selectCluster) {
        t3 = ({
            "HotspotLayer[visibleHotspots.map()]": (hotspot_0)=>{
                const radius = getHotspotRadius(hotspot_0.count);
                const color = getHotspotColor(hotspot_0.score);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$CircleMarker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CircleMarker"], {
                    center: [
                        hotspot_0.latitude,
                        hotspot_0.longitude
                    ],
                    radius: radius,
                    pathOptions: {
                        color,
                        fillColor: color,
                        fillOpacity: 0.3,
                        weight: 2
                    },
                    eventHandlers: {
                        click: ()=>{
                            selectCluster(hotspot_0.id);
                        }
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                            direction: "top",
                            offset: [
                                0,
                                -radius
                            ],
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-semibold",
                                        children: hotspot_0.label ?? "Civic hotspot"
                                    }, void 0, false, {
                                        fileName: "[project]/civic-priority-platform/frontend/components/maps/layers/HotspotLayer.tsx",
                                        lineNumber: 83,
                                        columnNumber: 94
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            hotspot_0.count,
                                            " reported issue",
                                            hotspot_0.count === 1 ? "" : "s"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/civic-priority-platform/frontend/components/maps/layers/HotspotLayer.tsx",
                                        lineNumber: 83,
                                        columnNumber: 163
                                    }, this),
                                    hotspot_0.dominantTheme && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "capitalize",
                                        children: [
                                            "Theme: ",
                                            hotspot_0.dominantTheme
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/civic-priority-platform/frontend/components/maps/layers/HotspotLayer.tsx",
                                        lineNumber: 83,
                                        columnNumber: 264
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/civic-priority-platform/frontend/components/maps/layers/HotspotLayer.tsx",
                                lineNumber: 83,
                                columnNumber: 59
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/civic-priority-platform/frontend/components/maps/layers/HotspotLayer.tsx",
                            lineNumber: 83,
                            columnNumber: 12
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Popup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popup"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-[180px] space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-semibold",
                                        children: hotspot_0.label ?? "Civic hotspot"
                                    }, void 0, false, {
                                        fileName: "[project]/civic-priority-platform/frontend/components/maps/layers/HotspotLayer.tsx",
                                        lineNumber: 83,
                                        columnNumber: 391
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: hotspot_0.count
                                                    }, void 0, false, {
                                                        fileName: "[project]/civic-priority-platform/frontend/components/maps/layers/HotspotLayer.tsx",
                                                        lineNumber: 83,
                                                        columnNumber: 490
                                                    }, this),
                                                    " issues"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/civic-priority-platform/frontend/components/maps/layers/HotspotLayer.tsx",
                                                lineNumber: 83,
                                                columnNumber: 487
                                            }, this),
                                            hotspot_0.dominantTheme && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "capitalize",
                                                children: [
                                                    "Dominant theme: ",
                                                    hotspot_0.dominantTheme
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/civic-priority-platform/frontend/components/maps/layers/HotspotLayer.tsx",
                                                lineNumber: 83,
                                                columnNumber: 563
                                            }, this),
                                            typeof hotspot_0.score === "number" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: [
                                                    "Priority score: ",
                                                    Math.round(hotspot_0.score * 100),
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/civic-priority-platform/frontend/components/maps/layers/HotspotLayer.tsx",
                                                lineNumber: 83,
                                                columnNumber: 675
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/civic-priority-platform/frontend/components/maps/layers/HotspotLayer.tsx",
                                        lineNumber: 83,
                                        columnNumber: 462
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: {
                                            "HotspotLayer[visibleHotspots.map() > <button>.onClick]": ()=>selectCluster(hotspot_0.id)
                                        }["HotspotLayer[visibleHotspots.map() > <button>.onClick]"],
                                        className: "text-sm font-medium underline",
                                        children: "View hotspot details"
                                    }, void 0, false, {
                                        fileName: "[project]/civic-priority-platform/frontend/components/maps/layers/HotspotLayer.tsx",
                                        lineNumber: 83,
                                        columnNumber: 741
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/civic-priority-platform/frontend/components/maps/layers/HotspotLayer.tsx",
                                lineNumber: 83,
                                columnNumber: 350
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/civic-priority-platform/frontend/components/maps/layers/HotspotLayer.tsx",
                            lineNumber: 83,
                            columnNumber: 343
                        }, this)
                    ]
                }, hotspot_0.id, true, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/layers/HotspotLayer.tsx",
                    lineNumber: 74,
                    columnNumber: 16
                }, this);
            }
        })["HotspotLayer[visibleHotspots.map()]"];
        $[3] = selectCluster;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const t4 = visibleHotspots.map(t3);
    let t5;
    if ($[5] !== T0 || $[6] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T0, {
            children: t4
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/layers/HotspotLayer.tsx",
            lineNumber: 96,
            columnNumber: 10
        }, this);
        $[5] = T0;
        $[6] = t4;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    return t5;
}
_s(HotspotLayer, "dDNPJq5xfCVCMdK6EtkPoUEB02o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$MapProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCivicMap"]
    ];
});
_c = HotspotLayer;
var _c;
__turbopack_context__.k.register(_c, "HotspotLayer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/civic-priority-platform/frontend/components/maps/layers/IssueLayer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>IssueLayer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$markers$2f$IssueMarker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/components/maps/markers/IssueMarker.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$MapProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/components/maps/MapProvider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const DEFAULT_ISSUES = [
    {
        id: "issue-001",
        latitude: 20.298,
        longitude: 85.826,
        title: "Damaged road near residential area",
        description: "Residents reported potholes and unsafe road conditions.",
        theme: "roads",
        source: "citizen",
        createdAt: "2026-08-02T09:30:00Z",
        status: "open"
    },
    {
        id: "issue-002",
        latitude: 20.291,
        longitude: 85.818,
        title: "Irregular water supply",
        description: "Households reported inconsistent water availability.",
        theme: "water",
        source: "grievance",
        createdAt: "2026-07-28T11:15:00Z",
        status: "in_progress"
    },
    {
        id: "issue-003",
        latitude: 20.306,
        longitude: 85.811,
        title: "School infrastructure concern",
        description: "Local residents highlighted infrastructure requirements.",
        theme: "education",
        source: "citizen",
        createdAt: "2026-07-22T14:20:00Z",
        status: "open"
    }
];
function isWithinTimeRange(createdAt, timeRange) {
    if (timeRange === "custom") {
        return true;
    }
    const days = timeRange === "7d" ? 7 : timeRange === "30d" ? 30 : 90;
    const issueDate = new Date(createdAt).getTime();
    const cutoff = Date.now() - days * 24 * 60 * 60 * 1000;
    return issueDate >= cutoff;
}
function IssueLayer(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "50a3cec650f78dee27338f7fffb3df7b8bdda49926fbd26ef2a4c858a663c31b") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "50a3cec650f78dee27338f7fffb3df7b8bdda49926fbd26ef2a4c858a663c31b";
    }
    const { issues: t1 } = t0;
    const issues = t1 === undefined ? DEFAULT_ISSUES : t1;
    const { filters: t2, layers } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$MapProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCivicMap"])();
    const { themeFilter, timeRange, sourceFilter } = t2;
    let t3;
    bb0: {
        if (!layers.showIssues) {
            let t4;
            if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
                t4 = [];
                $[1] = t4;
            } else {
                t4 = $[1];
            }
            t3 = t4;
            break bb0;
        }
        let t4;
        if ($[2] !== issues || $[3] !== sourceFilter || $[4] !== themeFilter || $[5] !== timeRange) {
            let t5;
            if ($[7] !== sourceFilter || $[8] !== themeFilter || $[9] !== timeRange) {
                t5 = ({
                    "IssueLayer[issues.filter()]": (issue)=>{
                        const matchesTheme = themeFilter === "all" || issue.theme === themeFilter;
                        const matchesSource = sourceFilter === "all" || issue.source === sourceFilter;
                        const matchesTime = isWithinTimeRange(issue.createdAt, timeRange);
                        return matchesTheme && matchesSource && matchesTime;
                    }
                })["IssueLayer[issues.filter()]"];
                $[7] = sourceFilter;
                $[8] = themeFilter;
                $[9] = timeRange;
                $[10] = t5;
            } else {
                t5 = $[10];
            }
            t4 = issues.filter(t5);
            $[2] = issues;
            $[3] = sourceFilter;
            $[4] = themeFilter;
            $[5] = timeRange;
            $[6] = t4;
        } else {
            t4 = $[6];
        }
        t3 = t4;
    }
    const visibleIssues = t3;
    let t4;
    if ($[11] !== visibleIssues) {
        t4 = visibleIssues.map(_IssueLayerVisibleIssuesMap);
        $[11] = visibleIssues;
        $[12] = t4;
    } else {
        t4 = $[12];
    }
    let t5;
    if ($[13] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: t4
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/layers/IssueLayer.tsx",
            lineNumber: 137,
            columnNumber: 10
        }, this);
        $[13] = t4;
        $[14] = t5;
    } else {
        t5 = $[14];
    }
    return t5;
}
_s(IssueLayer, "Krzv9KWXUHKTP1vEmzmBOupa3J8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$MapProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCivicMap"]
    ];
});
_c = IssueLayer;
function _IssueLayerVisibleIssuesMap(issue_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$markers$2f$IssueMarker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IssueMarker"], {
        issue: issue_0
    }, issue_0.id, false, {
        fileName: "[project]/civic-priority-platform/frontend/components/maps/layers/IssueLayer.tsx",
        lineNumber: 146,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "IssueLayer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/civic-priority-platform/frontend/components/maps/markers/IssueMarker.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IssueMarker",
    ()=>IssueMarker,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$CircleMarker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/react-leaflet/lib/CircleMarker.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Popup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/react-leaflet/lib/Popup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/react-leaflet/lib/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$MapProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/components/maps/MapProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$utils$2f$mapStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/components/maps/utils/mapStyles.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function IssueMarker(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(43);
    if ($[0] !== "6198f556a0aef173c45292cb5c773b152e6b27c1836498211e7113a513fcd27b") {
        for(let $i = 0; $i < 43; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6198f556a0aef173c45292cb5c773b152e6b27c1836498211e7113a513fcd27b";
    }
    const { issue } = t0;
    const { selectIssue } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$MapProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCivicMap"])();
    let t1;
    if ($[1] !== issue.source || $[2] !== issue.theme) {
        t1 = issue.theme ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$utils$2f$mapStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getThemeColor"])(issue.theme) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$utils$2f$mapStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSourceColor"])(issue.source);
        $[1] = issue.source;
        $[2] = issue.theme;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const color = t1;
    let t2;
    if ($[4] !== issue.id || $[5] !== selectIssue) {
        t2 = ({
            "IssueMarker[handleSelect]": ()=>{
                selectIssue(issue.id);
            }
        })["IssueMarker[handleSelect]"];
        $[4] = issue.id;
        $[5] = selectIssue;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    const handleSelect = t2;
    let t3;
    if ($[7] !== issue.latitude || $[8] !== issue.longitude) {
        t3 = [
            issue.latitude,
            issue.longitude
        ];
        $[7] = issue.latitude;
        $[8] = issue.longitude;
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    let t4;
    if ($[10] !== color) {
        t4 = {
            color,
            fillColor: color,
            fillOpacity: 0.75,
            weight: 2
        };
        $[10] = color;
        $[11] = t4;
    } else {
        t4 = $[11];
    }
    let t5;
    if ($[12] !== handleSelect) {
        t5 = {
            click: handleSelect
        };
        $[12] = handleSelect;
        $[13] = t5;
    } else {
        t5 = $[13];
    }
    const t6 = issue.title ?? "Civic issue";
    let t7;
    if ($[14] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
            children: t6
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/markers/IssueMarker.tsx",
            lineNumber: 93,
            columnNumber: 10
        }, this);
        $[14] = t6;
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    const t8 = issue.title ?? "Civic issue";
    let t9;
    if ($[16] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "font-semibold",
            children: t8
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/markers/IssueMarker.tsx",
            lineNumber: 102,
            columnNumber: 10
        }, this);
        $[16] = t8;
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    let t10;
    if ($[18] !== issue.description) {
        t10 = issue.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-muted-foreground",
            children: issue.description
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/markers/IssueMarker.tsx",
            lineNumber: 110,
            columnNumber: 32
        }, this);
        $[18] = issue.description;
        $[19] = t10;
    } else {
        t10 = $[19];
    }
    let t11;
    if ($[20] !== issue.theme) {
        t11 = issue.theme && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "capitalize",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                    children: "Theme:"
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/markers/IssueMarker.tsx",
                    lineNumber: 118,
                    columnNumber: 52
                }, this),
                " ",
                issue.theme
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/markers/IssueMarker.tsx",
            lineNumber: 118,
            columnNumber: 26
        }, this);
        $[20] = issue.theme;
        $[21] = t11;
    } else {
        t11 = $[21];
    }
    let t12;
    if ($[22] !== issue.source) {
        t12 = issue.source && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "capitalize",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                    children: "Source:"
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/markers/IssueMarker.tsx",
                    lineNumber: 126,
                    columnNumber: 53
                }, this),
                " ",
                issue.source
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/markers/IssueMarker.tsx",
            lineNumber: 126,
            columnNumber: 27
        }, this);
        $[22] = issue.source;
        $[23] = t12;
    } else {
        t12 = $[23];
    }
    let t13;
    if ($[24] !== issue.timestamp) {
        t13 = issue.timestamp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                    children: "Reported:"
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/markers/IssueMarker.tsx",
                    lineNumber: 134,
                    columnNumber: 33
                }, this),
                " ",
                issue.timestamp
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/markers/IssueMarker.tsx",
            lineNumber: 134,
            columnNumber: 30
        }, this);
        $[24] = issue.timestamp;
        $[25] = t13;
    } else {
        t13 = $[25];
    }
    let t14;
    if ($[26] !== t11 || $[27] !== t12 || $[28] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-1 text-xs",
            children: [
                t11,
                t12,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/markers/IssueMarker.tsx",
            lineNumber: 142,
            columnNumber: 11
        }, this);
        $[26] = t11;
        $[27] = t12;
        $[28] = t13;
        $[29] = t14;
    } else {
        t14 = $[29];
    }
    let t15;
    if ($[30] !== handleSelect) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: handleSelect,
            className: "text-sm font-medium underline",
            children: "View details"
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/markers/IssueMarker.tsx",
            lineNumber: 152,
            columnNumber: 11
        }, this);
        $[30] = handleSelect;
        $[31] = t15;
    } else {
        t15 = $[31];
    }
    let t16;
    if ($[32] !== t10 || $[33] !== t14 || $[34] !== t15 || $[35] !== t9) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Popup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popup"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-w-[200px] space-y-2",
                children: [
                    t9,
                    t10,
                    t14,
                    t15
                ]
            }, void 0, true, {
                fileName: "[project]/civic-priority-platform/frontend/components/maps/markers/IssueMarker.tsx",
                lineNumber: 160,
                columnNumber: 18
            }, this)
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/markers/IssueMarker.tsx",
            lineNumber: 160,
            columnNumber: 11
        }, this);
        $[32] = t10;
        $[33] = t14;
        $[34] = t15;
        $[35] = t9;
        $[36] = t16;
    } else {
        t16 = $[36];
    }
    let t17;
    if ($[37] !== t16 || $[38] !== t3 || $[39] !== t4 || $[40] !== t5 || $[41] !== t7) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$CircleMarker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CircleMarker"], {
            center: t3,
            radius: 7,
            pathOptions: t4,
            eventHandlers: t5,
            children: [
                t7,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/markers/IssueMarker.tsx",
            lineNumber: 171,
            columnNumber: 11
        }, this);
        $[37] = t16;
        $[38] = t3;
        $[39] = t4;
        $[40] = t5;
        $[41] = t7;
        $[42] = t17;
    } else {
        t17 = $[42];
    }
    return t17;
}
_s(IssueMarker, "VpOs29xvNP5xGyGwXt4E0fO4FkI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$MapProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCivicMap"]
    ];
});
_c = IssueMarker;
const __TURBOPACK__default__export__ = IssueMarker;
var _c;
__turbopack_context__.k.register(_c, "IssueMarker");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ClusterDetailPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/icons/external-link.mjs [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/icons/file-text.mjs [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/icons/map-pin.mjs [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$MapProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/components/maps/MapProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$panels$2f$TimelineChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/components/maps/panels/TimelineChart.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ClusterDetailPanel(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(60);
    if ($[0] !== "48192c2ced113e22345dfdfd36916c9cd4ff19af39e622d90311dd1161cb153b") {
        for(let $i = 0; $i < 60; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "48192c2ced113e22345dfdfd36916c9cd4ff19af39e622d90311dd1161cb153b";
    }
    const { cluster, onClose } = t0;
    const { selectedClusterId, clearSelection } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$MapProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCivicMap"])();
    if (!selectedClusterId || !cluster) {
        return null;
    }
    let t1;
    if ($[1] !== clearSelection || $[2] !== onClose) {
        t1 = ({
            "ClusterDetailPanel[closePanel]": ()=>{
                clearSelection();
                onClose?.();
            }
        })["ClusterDetailPanel[closePanel]"];
        $[1] = clearSelection;
        $[2] = onClose;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const closePanel = t1;
    let t2;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
            className: "h-5 w-5"
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 69,
            columnNumber: 10
        }, this);
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const t3 = cluster.title ?? "Hotspot details";
    let t4;
    if ($[5] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "font-semibold",
            children: t3
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 77,
            columnNumber: 10
        }, this);
        $[5] = t3;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== cluster.totalIssues) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-muted-foreground",
            children: [
                cluster.totalIssues,
                " reported issues"
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 85,
            columnNumber: 10
        }, this);
        $[7] = cluster.totalIssues;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== t4 || $[10] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        t4,
                        t5
                    ]
                }, void 0, true, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                    lineNumber: 93,
                    columnNumber: 55
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 93,
            columnNumber: 10
        }, this);
        $[9] = t4;
        $[10] = t5;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 102,
            columnNumber: 10
        }, this);
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] !== closePanel) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: closePanel,
            "aria-label": "Close hotspot details",
            className: "rounded-md p-2 hover:bg-muted",
            children: t7
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 109,
            columnNumber: 10
        }, this);
        $[13] = closePanel;
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    let t9;
    if ($[15] !== t6 || $[16] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between border-b px-5 py-4",
            children: [
                t6,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 117,
            columnNumber: 10
        }, this);
        $[15] = t6;
        $[16] = t8;
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    let t10;
    if ($[18] !== cluster.totalIssues) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
            label: "Issues",
            value: cluster.totalIssues
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 126,
            columnNumber: 11
        }, this);
        $[18] = cluster.totalIssues;
        $[19] = t10;
    } else {
        t10 = $[19];
    }
    let t11;
    if ($[20] !== cluster.priorityScore) {
        t11 = typeof cluster.priorityScore === "number" ? `${Math.round(cluster.priorityScore * 100)}%` : "\u2014";
        $[20] = cluster.priorityScore;
        $[21] = t11;
    } else {
        t11 = $[21];
    }
    let t12;
    if ($[22] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
            label: "Priority",
            value: t11
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 142,
            columnNumber: 11
        }, this);
        $[22] = t11;
        $[23] = t12;
    } else {
        t12 = $[23];
    }
    const t13 = cluster.impactEstimate ?? "\u2014";
    let t14;
    if ($[24] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
            label: "Impact",
            value: t13
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 151,
            columnNumber: 11
        }, this);
        $[24] = t13;
        $[25] = t14;
    } else {
        t14 = $[25];
    }
    let t15;
    if ($[26] !== cluster.affectedPopulation) {
        t15 = cluster.affectedPopulation ? cluster.affectedPopulation.toLocaleString() : "\u2014";
        $[26] = cluster.affectedPopulation;
        $[27] = t15;
    } else {
        t15 = $[27];
    }
    let t16;
    if ($[28] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
            label: "Affected",
            value: t15
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 167,
            columnNumber: 11
        }, this);
        $[28] = t15;
        $[29] = t16;
    } else {
        t16 = $[29];
    }
    let t17;
    if ($[30] !== t10 || $[31] !== t12 || $[32] !== t14 || $[33] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 gap-3",
            children: [
                t10,
                t12,
                t14,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 175,
            columnNumber: 11
        }, this);
        $[30] = t10;
        $[31] = t12;
        $[32] = t14;
        $[33] = t16;
        $[34] = t17;
    } else {
        t17 = $[34];
    }
    let t18;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
            title: "Issue profile"
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 186,
            columnNumber: 11
        }, this);
        $[35] = t18;
    } else {
        t18 = $[35];
    }
    let t19;
    if ($[36] !== cluster.dominantTheme) {
        t19 = cluster.dominantTheme && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-lg border p-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-muted-foreground",
                    children: "Dominant theme"
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                    lineNumber: 193,
                    columnNumber: 75
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-1 font-medium capitalize",
                    children: cluster.dominantTheme
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                    lineNumber: 193,
                    columnNumber: 138
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 193,
            columnNumber: 36
        }, this);
        $[36] = cluster.dominantTheme;
        $[37] = t19;
    } else {
        t19 = $[37];
    }
    let t20;
    if ($[38] !== cluster.timeRange) {
        t20 = cluster.timeRange && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-lg border p-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-muted-foreground",
                    children: "Time range"
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                    lineNumber: 201,
                    columnNumber: 71
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-1 font-medium",
                    children: cluster.timeRange
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                    lineNumber: 201,
                    columnNumber: 130
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 201,
            columnNumber: 32
        }, this);
        $[38] = cluster.timeRange;
        $[39] = t20;
    } else {
        t20 = $[39];
    }
    let t21;
    if ($[40] !== cluster.themes) {
        t21 = cluster.themes && cluster.themes.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-lg border p-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mb-2 text-xs text-muted-foreground",
                    children: "Related themes"
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                    lineNumber: 209,
                    columnNumber: 97
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap gap-2",
                    children: cluster.themes.map(_ClusterDetailPanelClusterThemesMap)
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                    lineNumber: 209,
                    columnNumber: 165
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 209,
            columnNumber: 58
        }, this);
        $[40] = cluster.themes;
        $[41] = t21;
    } else {
        t21 = $[41];
    }
    let t22;
    if ($[42] !== t19 || $[43] !== t20 || $[44] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "mt-6 space-y-3",
            children: [
                t18,
                t19,
                t20,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 217,
            columnNumber: 11
        }, this);
        $[42] = t19;
        $[43] = t20;
        $[44] = t21;
        $[45] = t22;
    } else {
        t22 = $[45];
    }
    let t23;
    if ($[46] !== cluster.timeline) {
        t23 = cluster.timeline && cluster.timeline.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "mt-6 space-y-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                    title: "Issue trend"
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                    lineNumber: 227,
                    columnNumber: 98
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$panels$2f$TimelineChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    data: cluster.timeline
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                    lineNumber: 227,
                    columnNumber: 134
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 227,
            columnNumber: 62
        }, this);
        $[46] = cluster.timeline;
        $[47] = t23;
    } else {
        t23 = $[47];
    }
    let t24;
    if ($[48] !== cluster.submissions) {
        t24 = cluster.submissions && cluster.submissions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "mt-6 space-y-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                    title: "Representative submissions"
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                    lineNumber: 235,
                    columnNumber: 104
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: cluster.submissions.map(_ClusterDetailPanelClusterSubmissionsMap)
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                    lineNumber: 235,
                    columnNumber: 155
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 235,
            columnNumber: 68
        }, this);
        $[48] = cluster.submissions;
        $[49] = t24;
    } else {
        t24 = $[49];
    }
    let t25;
    if ($[50] !== t17 || $[51] !== t22 || $[52] !== t23 || $[53] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 overflow-y-auto p-5",
            children: [
                t17,
                t22,
                t23,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 243,
            columnNumber: 11
        }, this);
        $[50] = t17;
        $[51] = t22;
        $[52] = t23;
        $[53] = t24;
        $[54] = t25;
    } else {
        t25 = $[54];
    }
    let t26;
    if ($[55] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            className: "flex items-center justify-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium hover:bg-muted",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                    className: "h-4 w-4"
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                    lineNumber: 254,
                    columnNumber: 147
                }, this),
                "Export report"
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 254,
            columnNumber: 11
        }, this);
        $[55] = t26;
    } else {
        t26 = $[55];
    }
    let t27;
    if ($[56] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border-t p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-2",
                children: [
                    t26,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "flex items-center justify-center gap-2 rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-foreground",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                                lineNumber: 261,
                                columnNumber: 235
                            }, this),
                            "Create proposal"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                        lineNumber: 261,
                        columnNumber: 86
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                lineNumber: 261,
                columnNumber: 41
            }, this)
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 261,
            columnNumber: 11
        }, this);
        $[56] = t27;
    } else {
        t27 = $[56];
    }
    let t28;
    if ($[57] !== t25 || $[58] !== t9) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
            className: "absolute right-0 top-0 z-[1100] flex h-full w-full max-w-md flex-col border-l bg-background shadow-xl",
            children: [
                t9,
                t25,
                t27
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 268,
            columnNumber: 11
        }, this);
        $[57] = t25;
        $[58] = t9;
        $[59] = t28;
    } else {
        t28 = $[59];
    }
    return t28;
}
_s(ClusterDetailPanel, "BCwyrUw8KZVXo3mXwb60Lf/lsY0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$MapProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCivicMap"]
    ];
});
_c = ClusterDetailPanel;
function _ClusterDetailPanelClusterSubmissionsMap(submission) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "rounded-lg border p-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm",
                children: submission.text
            }, void 0, false, {
                fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                lineNumber: 278,
                columnNumber: 73
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 flex gap-3 text-xs text-muted-foreground",
                children: [
                    submission.source && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "capitalize",
                        children: submission.source
                    }, void 0, false, {
                        fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                        lineNumber: 278,
                        columnNumber: 202
                    }, this),
                    submission.timestamp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: submission.timestamp
                    }, void 0, false, {
                        fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                        lineNumber: 278,
                        columnNumber: 283
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                lineNumber: 278,
                columnNumber: 117
            }, this)
        ]
    }, submission.id, true, {
        fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
        lineNumber: 278,
        columnNumber: 10
    }, this);
}
function _ClusterDetailPanelClusterThemesMap(theme) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "rounded-full bg-muted px-2.5 py-1 text-xs capitalize",
        children: theme
    }, theme, false, {
        fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
        lineNumber: 281,
        columnNumber: 10
    }, this);
}
function StatCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "48192c2ced113e22345dfdfd36916c9cd4ff19af39e622d90311dd1161cb153b") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "48192c2ced113e22345dfdfd36916c9cd4ff19af39e622d90311dd1161cb153b";
    }
    const { label, value } = t0;
    let t1;
    if ($[1] !== label) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-muted-foreground",
            children: label
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 297,
            columnNumber: 10
        }, this);
        $[1] = label;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== value) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-1 text-lg font-semibold",
            children: value
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 305,
            columnNumber: 10
        }, this);
        $[3] = value;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== t1 || $[6] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-lg border p-3",
            children: [
                t1,
                t2
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 313,
            columnNumber: 10
        }, this);
        $[5] = t1;
        $[6] = t2;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    return t3;
}
_c1 = StatCard;
function SectionTitle(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "48192c2ced113e22345dfdfd36916c9cd4ff19af39e622d90311dd1161cb153b") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "48192c2ced113e22345dfdfd36916c9cd4ff19af39e622d90311dd1161cb153b";
    }
    const { title } = t0;
    let t1;
    if ($[1] !== title) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-sm font-semibold",
            children: title
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 335,
            columnNumber: 10
        }, this);
        $[1] = title;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    return t1;
}
_c2 = SectionTitle;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ClusterDetailPanel");
__turbopack_context__.k.register(_c1, "StatCard");
__turbopack_context__.k.register(_c2, "SectionTitle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/civic-priority-platform/frontend/components/maps/panels/TimelineChart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TimelineChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
"use client";
;
;
function TimelineChart(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(21);
    if ($[0] !== "be34aa636c665cdcb82fd3704b95e285165bf565e6cc3320d09a02350f893472") {
        for(let $i = 0; $i < 21; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "be34aa636c665cdcb82fd3704b95e285165bf565e6cc3320d09a02350f893472";
    }
    const { data } = t0;
    if (data.length === 0) {
        let t1;
        if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
            t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-lg border p-6 text-center text-sm text-muted-foreground",
                children: "No timeline data available."
            }, void 0, false, {
                fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/TimelineChart.tsx",
                lineNumber: 26,
                columnNumber: 12
            }, this);
            $[1] = t1;
        } else {
            t1 = $[1];
        }
        return t1;
    }
    let t1;
    if ($[2] !== data) {
        t1 = Math.max(...data.map(_TimelineChartDataMap), 1);
        $[2] = data;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const maxCount = t1;
    let t2;
    if ($[4] !== data || $[5] !== maxCount) {
        let t3;
        if ($[7] !== maxCount) {
            t3 = ({
                "TimelineChart[data.map()]": (point_0, index)=>{
                    const height = point_0.count / maxCount * 100;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "group flex min-w-0 flex-1 flex-col items-center justify-end",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mb-1 text-[10px] font-medium opacity-0 transition-opacity group-hover:opacity-100",
                                children: point_0.count
                            }, void 0, false, {
                                fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/TimelineChart.tsx",
                                lineNumber: 49,
                                columnNumber: 128
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full min-w-[4px] rounded-t bg-primary transition-opacity group-hover:opacity-80",
                                style: {
                                    height: `${Math.max(height, 4)}%`
                                },
                                title: `${point_0.date}: ${point_0.count} issues`
                            }, void 0, false, {
                                fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/TimelineChart.tsx",
                                lineNumber: 49,
                                columnNumber: 250
                            }, this)
                        ]
                    }, `${point_0.date}-${index}`, true, {
                        fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/TimelineChart.tsx",
                        lineNumber: 49,
                        columnNumber: 18
                    }, this);
                }
            })["TimelineChart[data.map()]"];
            $[7] = maxCount;
            $[8] = t3;
        } else {
            t3 = $[8];
        }
        t2 = data.map(t3);
        $[4] = data;
        $[5] = maxCount;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[9] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-40 items-end gap-2",
            children: t2
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/TimelineChart.tsx",
            lineNumber: 68,
            columnNumber: 10
        }, this);
        $[9] = t2;
        $[10] = t3;
    } else {
        t3 = $[10];
    }
    let t4;
    if ($[11] !== data[0].date) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: data[0].date
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/TimelineChart.tsx",
            lineNumber: 76,
            columnNumber: 10
        }, this);
        $[11] = data[0].date;
        $[12] = t4;
    } else {
        t4 = $[12];
    }
    const t5 = data[data.length - 1];
    let t6;
    if ($[13] !== t5.date) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: t5.date
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/TimelineChart.tsx",
            lineNumber: 85,
            columnNumber: 10
        }, this);
        $[13] = t5.date;
        $[14] = t6;
    } else {
        t6 = $[14];
    }
    let t7;
    if ($[15] !== t4 || $[16] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-2 flex justify-between gap-2 text-[10px] text-muted-foreground",
            children: [
                t4,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/TimelineChart.tsx",
            lineNumber: 93,
            columnNumber: 10
        }, this);
        $[15] = t4;
        $[16] = t6;
        $[17] = t7;
    } else {
        t7 = $[17];
    }
    let t8;
    if ($[18] !== t3 || $[19] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-lg border p-4",
            children: [
                t3,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/TimelineChart.tsx",
            lineNumber: 102,
            columnNumber: 10
        }, this);
        $[18] = t3;
        $[19] = t7;
        $[20] = t8;
    } else {
        t8 = $[20];
    }
    return t8;
}
_c = TimelineChart;
function _TimelineChartDataMap(point) {
    return point.count;
}
var _c;
__turbopack_context__.k.register(_c, "TimelineChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/civic-priority-platform/frontend/components/maps/utils/mapStyles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BOUNDARY_STYLE",
    ()=>BOUNDARY_STYLE,
    "CLUSTER_STYLE",
    ()=>CLUSTER_STYLE,
    "GEOJSON_STYLE",
    ()=>GEOJSON_STYLE,
    "MAP_DEFAULTS",
    ()=>MAP_DEFAULTS,
    "SOURCE_COLORS",
    ()=>SOURCE_COLORS,
    "THEME_COLORS",
    ()=>THEME_COLORS,
    "createClusterIcon",
    ()=>createClusterIcon,
    "createIssueIcon",
    ()=>createIssueIcon,
    "getSourceColor",
    ()=>getSourceColor,
    "getThemeColor",
    ()=>getThemeColor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/leaflet/dist/leaflet-src.js [app-client] (ecmascript)");
;
const THEME_COLORS = {
    roads: "#ef4444",
    water: "#3b82f6",
    schools: "#8b5cf6",
    health: "#ec4899",
    sanitation: "#f59e0b",
    electricity: "#eab308",
    housing: "#10b981",
    other: "#64748b"
};
const SOURCE_COLORS = {
    citizen: "#2563eb",
    news: "#7c3aed",
    grievance: "#dc2626",
    other: "#64748b"
};
const MAP_DEFAULTS = {
    zoom: 12,
    minZoom: 5,
    maxZoom: 19,
    clusterRadius: 45,
    issueVisibleZoom: 15
};
const getThemeColor = (theme)=>{
    if (!theme) return THEME_COLORS.other;
    return THEME_COLORS[theme.toLowerCase()] ?? THEME_COLORS.other;
};
const getSourceColor = (source)=>{
    if (!source) return SOURCE_COLORS.other;
    return SOURCE_COLORS[source.toLowerCase()] ?? SOURCE_COLORS.other;
};
const createIssueIcon = (theme, source)=>{
    const color = source ? getSourceColor(source) : getThemeColor(theme);
    return __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].divIcon({
        className: "civic-issue-marker",
        html: `
      <div
        style="
          width: 30px;
          height: 30px;
          border-radius: 9999px;
          background: ${color};
          border: 3px solid white;
          box-shadow: 0 2px 8px rgba(0,0,0,0.25);
        "
      ></div>
    `,
        iconSize: [
            30,
            30
        ],
        iconAnchor: [
            15,
            15
        ],
        popupAnchor: [
            0,
            -15
        ]
    });
};
const createClusterIcon = (count, theme)=>{
    const color = getThemeColor(theme);
    const size = count >= 100 ? 56 : count >= 50 ? 50 : count >= 20 ? 44 : 38;
    return __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].divIcon({
        className: "civic-cluster-marker",
        html: `
      <div
        style="
          width: ${size}px;
          height: ${size}px;
          border-radius: 9999px;
          background: ${color};
          border: 3px solid white;
          box-shadow: 0 3px 10px rgba(0,0,0,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 700;
          font-size: 14px;
        "
      >
        ${count}
      </div>
    `,
        iconSize: [
            size,
            size
        ],
        iconAnchor: [
            size / 2,
            size / 2
        ]
    });
};
const CLUSTER_STYLE = {
    radius: MAP_DEFAULTS.clusterRadius,
    weight: 3,
    opacity: 1
};
const GEOJSON_STYLE = {
    weight: 1,
    opacity: 0.8,
    fillOpacity: 0.15
};
const BOUNDARY_STYLE = {
    weight: 2,
    opacity: 0.9,
    fillOpacity: 0.05
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/civic-priority-platform/frontend/components/maps/utils/useMapEvents.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMapEvents",
    ()=>useMapEvents
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/react-leaflet/lib/hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$MapProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/components/maps/MapProvider.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function useMapEvents() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18);
    if ($[0] !== "b2e8559aaa55efef521e9cf5a254851b3adb8abf141fccde56caaec375bd396f") {
        for(let $i = 0; $i < 18; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b2e8559aaa55efef521e9cf5a254851b3adb8abf141fccde56caaec375bd396f";
    }
    const map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"])();
    const { isPinMode, setPinLocation, clearSelection } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$MapProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCivicMap"])();
    let t0;
    if ($[1] !== isPinMode || $[2] !== setPinLocation) {
        t0 = ({
            "useMapEvents[handleMapClick]": (event)=>{
                if (!isPinMode) {
                    return;
                }
                setPinLocation({
                    lat: event.latlng.lat,
                    lng: event.latlng.lng
                });
            }
        })["useMapEvents[handleMapClick]"];
        $[1] = isPinMode;
        $[2] = setPinLocation;
        $[3] = t0;
    } else {
        t0 = $[3];
    }
    const handleMapClick = t0;
    let t1;
    if ($[4] !== handleMapClick) {
        t1 = {
            click: handleMapClick
        };
        $[4] = handleMapClick;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMapEvents"])(t1);
    let t2;
    let t3;
    if ($[6] !== map) {
        t2 = ({
            "useMapEvents[useEffect()]": ()=>{
                const handleMoveEnd = _useMapEventsUseEffectHandleMoveEnd;
                const handleZoomEnd = _useMapEventsUseEffectHandleZoomEnd;
                map.on("moveend", handleMoveEnd);
                map.on("zoomend", handleZoomEnd);
                return ()=>{
                    map.off("moveend", handleMoveEnd);
                    map.off("zoomend", handleZoomEnd);
                };
            }
        })["useMapEvents[useEffect()]"];
        t3 = [
            map
        ];
        $[6] = map;
        $[7] = t2;
        $[8] = t3;
    } else {
        t2 = $[7];
        t3 = $[8];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    if ($[9] !== map) {
        t4 = ({
            "useMapEvents[flyToLocation]": (lat, lng, t5)=>{
                const zoom = t5 === undefined ? 15 : t5;
                map.flyTo([
                    lat,
                    lng
                ], zoom, {
                    duration: 0.8
                });
            }
        })["useMapEvents[flyToLocation]"];
        $[9] = map;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    const flyToLocation = t4;
    let t5;
    if ($[11] !== clearSelection || $[12] !== map) {
        t5 = ({
            "useMapEvents[resetMap]": (center, zoom_0)=>{
                clearSelection();
                map.flyTo(center, zoom_0, {
                    duration: 0.8
                });
            }
        })["useMapEvents[resetMap]"];
        $[11] = clearSelection;
        $[12] = map;
        $[13] = t5;
    } else {
        t5 = $[13];
    }
    const resetMap = t5;
    let t6;
    if ($[14] !== flyToLocation || $[15] !== map || $[16] !== resetMap) {
        t6 = {
            map,
            flyToLocation,
            resetMap
        };
        $[14] = flyToLocation;
        $[15] = map;
        $[16] = resetMap;
        $[17] = t6;
    } else {
        t6 = $[17];
    }
    return t6;
}
_s(useMapEvents, "3DES4CFWKA9yMUfXqZ2EiW/S+HI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"],
        __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$MapProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCivicMap"],
        __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMapEvents"]
    ];
});
function _useMapEventsUseEffectHandleZoomEnd() {}
function _useMapEventsUseEffectHandleMoveEnd() {}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=civic-priority-platform_frontend_components_maps_1bmwfzs._.js.map