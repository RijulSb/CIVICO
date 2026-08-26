(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/civic-priority-platform/frontend/components/dashboard/DemandHotspotMap.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/react-leaflet/lib/Circle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$CircleMarker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/react-leaflet/lib/CircleMarker.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$MapContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/react-leaflet/lib/MapContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Popup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/react-leaflet/lib/Popup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$TileLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/react-leaflet/lib/TileLayer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/react-leaflet/lib/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/react-leaflet/lib/hooks.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const DEFAULT_CENTER = [
    20.295,
    85.825
];
function radiusFor(hotspot) {
    const base = hotspot.intensity === "high" ? 720 : hotspot.intensity === "medium" ? 520 : 360;
    return base + Math.min(hotspot.submissionCount * 5, 620);
}
// Inner component that can call useMap() and exposes flyTo via ref
function FlyToController({ mapRef }) {
    _s();
    const map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"])();
    mapRef.current = map;
    return null;
}
_s(FlyToController, "cX187cvZ2hODbkaiLn05gMk1sCM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"]
    ];
});
_c = FlyToController;
const DemandHotspotMap = /*#__PURE__*/ _s1((0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c1 = _s1(function DemandHotspotMap(t0, ref) {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18);
    if ($[0] !== "5e4a2530bd865d415cf24fb5c5c2dae563edbf7c6c683360781e9179f242ab92") {
        for(let $i = 0; $i < 18; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5e4a2530bd865d415cf24fb5c5c2dae563edbf7c6c683360781e9179f242ab92";
    }
    const { hotspots, selectedId, onSelect, themeMeta } = t0;
    const mapInstanceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "DemandHotspotMap[useImperativeHandle()]": ()=>({
                    flyTo (lat, lng, t2) {
                        const zoom = t2 === undefined ? 15 : t2;
                        mapInstanceRef.current?.flyTo([
                            lat,
                            lng
                        ], zoom, {
                            duration: 1.2
                        });
                    }
                })
        })["DemandHotspotMap[useImperativeHandle()]"];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, t1);
    let t2;
    if ($[2] !== hotspots[0]) {
        t2 = hotspots[0] ? [
            hotspots[0].latitude,
            hotspots[0].longitude
        ] : DEFAULT_CENTER;
        $[2] = hotspots[0];
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const center = t2;
    let t3;
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FlyToController, {
            mapRef: mapInstanceRef
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/dashboard/DemandHotspotMap.tsx",
            lineNumber: 81,
            columnNumber: 10
        }, this);
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$TileLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TileLayer"], {
            attribution: "\xA9 <a href=\"https://carto.com/\">CARTO</a>",
            url: "https://basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/dashboard/DemandHotspotMap.tsx",
            lineNumber: 82,
            columnNumber: 10
        }, this);
        $[4] = t3;
        $[5] = t4;
    } else {
        t3 = $[4];
        t4 = $[5];
    }
    let t5;
    if ($[6] !== hotspots || $[7] !== onSelect || $[8] !== selectedId || $[9] !== themeMeta) {
        let t6;
        if ($[11] !== onSelect || $[12] !== selectedId || $[13] !== themeMeta) {
            t6 = ({
                "DemandHotspotMap[hotspots.map()]": (hotspot)=>{
                    const meta = themeMeta[hotspot.theme];
                    const selected = selectedId === hotspot.id;
                    const centerPoint = [
                        hotspot.latitude,
                        hotspot.longitude
                    ];
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Circle"], {
                                center: centerPoint,
                                radius: radiusFor(hotspot),
                                pathOptions: {
                                    color: meta.fill,
                                    fillColor: meta.fill,
                                    fillOpacity: selected ? 0.28 : 0.18,
                                    opacity: 0.32,
                                    weight: selected ? 2 : 1
                                },
                                eventHandlers: {
                                    click: ()=>onSelect(hotspot)
                                }
                            }, void 0, false, {
                                fileName: "[project]/civic-priority-platform/frontend/components/dashboard/DemandHotspotMap.tsx",
                                lineNumber: 98,
                                columnNumber: 40
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$CircleMarker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CircleMarker"], {
                                center: centerPoint,
                                radius: selected ? 14 : hotspot.intensity === "high" ? 11 : 9,
                                pathOptions: {
                                    color: "#ffffff",
                                    fillColor: meta.fill,
                                    fillOpacity: 0.92,
                                    opacity: 1,
                                    weight: selected ? 4 : 2
                                },
                                eventHandlers: {
                                    click: ()=>onSelect(hotspot)
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                        direction: "top",
                                        offset: [
                                            0,
                                            -8
                                        ],
                                        opacity: 1,
                                        permanent: selected,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-sans text-xs font-bold",
                                            children: hotspot.ward
                                        }, void 0, false, {
                                            fileName: "[project]/civic-priority-platform/frontend/components/dashboard/DemandHotspotMap.tsx",
                                            lineNumber: 114,
                                            columnNumber: 91
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/civic-priority-platform/frontend/components/dashboard/DemandHotspotMap.tsx",
                                        lineNumber: 114,
                                        columnNumber: 16
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Popup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popup"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-1 p-1 font-sans text-xs",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-bold text-[#171817]",
                                                    children: [
                                                        hotspot.ward,
                                                        " - ",
                                                        meta.label
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/civic-priority-platform/frontend/components/dashboard/DemandHotspotMap.tsx",
                                                    lineNumber: 114,
                                                    columnNumber: 224
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        hotspot.submissionCount,
                                                        " verified requests"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/civic-priority-platform/frontend/components/dashboard/DemandHotspotMap.tsx",
                                                    lineNumber: 114,
                                                    columnNumber: 297
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        hotspot.affectedPopulation.toLocaleString(),
                                                        " residents affected"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/civic-priority-platform/frontend/components/dashboard/DemandHotspotMap.tsx",
                                                    lineNumber: 114,
                                                    columnNumber: 347
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: {
                                                        "DemandHotspotMap[hotspots.map() > <button>.onClick]": ()=>onSelect(hotspot)
                                                    }["DemandHotspotMap[hotspots.map() > <button>.onClick]"],
                                                    className: "mt-2 rounded-md bg-[#171817] px-2 py-1 text-xs font-bold text-white",
                                                    children: "View evidence"
                                                }, void 0, false, {
                                                    fileName: "[project]/civic-priority-platform/frontend/components/dashboard/DemandHotspotMap.tsx",
                                                    lineNumber: 114,
                                                    columnNumber: 418
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/civic-priority-platform/frontend/components/dashboard/DemandHotspotMap.tsx",
                                            lineNumber: 114,
                                            columnNumber: 175
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/civic-priority-platform/frontend/components/dashboard/DemandHotspotMap.tsx",
                                        lineNumber: 114,
                                        columnNumber: 168
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/civic-priority-platform/frontend/components/dashboard/DemandHotspotMap.tsx",
                                lineNumber: 106,
                                columnNumber: 18
                            }, this)
                        ]
                    }, hotspot.id, true, {
                        fileName: "[project]/civic-priority-platform/frontend/components/dashboard/DemandHotspotMap.tsx",
                        lineNumber: 98,
                        columnNumber: 18
                    }, this);
                }
            })["DemandHotspotMap[hotspots.map()]"];
            $[11] = onSelect;
            $[12] = selectedId;
            $[13] = themeMeta;
            $[14] = t6;
        } else {
            t6 = $[14];
        }
        t5 = hotspots.map(t6);
        $[6] = hotspots;
        $[7] = onSelect;
        $[8] = selectedId;
        $[9] = themeMeta;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[15] !== center || $[16] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$MapContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapContainer"], {
            center: center,
            zoom: 12,
            scrollWheelZoom: false,
            className: "h-full w-full",
            children: [
                t3,
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/dashboard/DemandHotspotMap.tsx",
            lineNumber: 137,
            columnNumber: 10
        }, this);
        $[15] = center;
        $[16] = t5;
        $[17] = t6;
    } else {
        t6 = $[17];
    }
    return t6;
}, "JZ8n0JkBhIQ4qANbhyG2viYMEBw=")), "JZ8n0JkBhIQ4qANbhyG2viYMEBw=");
_c2 = DemandHotspotMap;
const __TURBOPACK__default__export__ = DemandHotspotMap;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "FlyToController");
__turbopack_context__.k.register(_c1, "DemandHotspotMap$forwardRef");
__turbopack_context__.k.register(_c2, "DemandHotspotMap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/civic-priority-platform/frontend/components/dashboard/DemandHotspotMap.tsx [app-client] (ecmascript, next/dynamic entry)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/civic-priority-platform/frontend/components/dashboard/DemandHotspotMap.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=0fw-_vic-priority-platform_frontend_components_dashboard_DemandHotspotMap_tsx_0ew2y4z._.js.map