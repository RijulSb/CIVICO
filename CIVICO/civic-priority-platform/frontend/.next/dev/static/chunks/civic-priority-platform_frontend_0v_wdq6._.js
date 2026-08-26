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
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/lib/api.ts [app-client] (ecmascript)");
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
;
const DEFAULT_CENTER = [
    20.2961,
    85.8245
];
const DEFAULT_ZOOM = 12;
function MapInstanceBridge() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "7411d92494560428c4d6fb84b5c5c55eaba303ec72395e3396a11f8c443bdaa2") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7411d92494560428c4d6fb84b5c5c55eaba303ec72395e3396a11f8c443bdaa2";
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
function MapInteractionBridge() {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "7411d92494560428c4d6fb84b5c5c55eaba303ec72395e3396a11f8c443bdaa2") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7411d92494560428c4d6fb84b5c5c55eaba303ec72395e3396a11f8c443bdaa2";
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
function MapContent() {
    _s2();
    const { layers, selectedClusterId, selectedIssueId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$MapProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCivicMap"])();
    const [hotspots, setHotspots] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [issues, setIssues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [contextData, setContextData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [activeClusterDetail, setActiveClusterDetail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapContent.useEffect": ()=>{
            let isMounted = true;
            async function loadMapData() {
                try {
                    // 1. Fetch DBSCAN Hotspots
                    const hotspotRes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateHotspots"])({
                        constituency: "khordha"
                    });
                    if (isMounted && hotspotRes.hotspots && hotspotRes.hotspots.length > 0) {
                        const mappedHotspots = hotspotRes.hotspots.map({
                            "MapContent.useEffect.loadMapData.mappedHotspots": (h, i)=>({
                                    id: `hotspot-${i + 1}`,
                                    latitude: h.latitude,
                                    longitude: h.longitude,
                                    count: h.submission_count,
                                    score: Math.min(0.55 + h.submission_count * 0.008, 0.98),
                                    dominantTheme: h.theme,
                                    label: `${h.theme.replace("_", " ").toUpperCase()} Cluster — ${h.ward}`
                                })
                        }["MapContent.useEffect.loadMapData.mappedHotspots"]);
                        setHotspots(mappedHotspots);
                    }
                    // 2. Fetch GeoJSON Submissions
                    const issuesGeoJson = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMapIssues"])();
                    if (isMounted && issuesGeoJson.features) {
                        const mappedIssues = issuesGeoJson.features.map({
                            "MapContent.useEffect.loadMapData.mappedIssues": (f, i_0)=>{
                                const props = f.properties || {};
                                const coords = f.geometry?.coordinates || [
                                    85.8245,
                                    20.2961
                                ];
                                return {
                                    id: props.id || `issue-${i_0 + 1}`,
                                    latitude: coords[1],
                                    longitude: coords[0],
                                    title: `${(props.category || "civic").replace("_", " ").toUpperCase()} in ${props.ward || "Khordha"}`,
                                    description: `Reported issue status: ${props.status || "open"}. Type: ${props.submission_type || "text"}.`,
                                    theme: props.category || "roads",
                                    source: "citizen",
                                    createdAt: props.created_at || new Date().toISOString(),
                                    status: props.status || "open"
                                };
                            }
                        }["MapContent.useEffect.loadMapData.mappedIssues"]);
                        setIssues(mappedIssues);
                    }
                    // 3. Fetch Ward Context for Boundaries & Demographics
                    const wards = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWardsContext"])();
                    if (isMounted && wards && wards.length > 0) {
                        const boundaryFeatures = wards.map({
                            "MapContent.useEffect.loadMapData.boundaryFeatures": (w, idx)=>{
                                const centerLat = 20.18 + idx % 3 * 0.06;
                                const centerLng = 85.58 + Math.floor(idx / 3) * 0.08;
                                const delta = 0.025;
                                return {
                                    type: "Feature",
                                    geometry: {
                                        type: "Polygon",
                                        coordinates: [
                                            [
                                                [
                                                    centerLng - delta,
                                                    centerLat - delta
                                                ],
                                                [
                                                    centerLng + delta,
                                                    centerLat - delta
                                                ],
                                                [
                                                    centerLng + delta,
                                                    centerLat + delta
                                                ],
                                                [
                                                    centerLng - delta,
                                                    centerLat + delta
                                                ],
                                                [
                                                    centerLng - delta,
                                                    centerLat - delta
                                                ]
                                            ]
                                        ]
                                    },
                                    properties: {
                                        ward_id: w.ward_id,
                                        ward_name: w.ward_name,
                                        population: w.population_thousands * 1000,
                                        area: w.area_sq_km
                                    }
                                };
                            }
                        }["MapContent.useEffect.loadMapData.boundaryFeatures"]);
                        const boundariesGeoJson = {
                            type: "FeatureCollection",
                            features: boundaryFeatures
                        };
                        setContextData({
                            boundaries: boundariesGeoJson,
                            demographics: boundariesGeoJson
                        });
                    }
                } catch (err) {
                    console.error("Error fetching map layers:", err);
                }
            }
            loadMapData();
            return ({
                "MapContent.useEffect": ()=>{
                    isMounted = false;
                }
            })["MapContent.useEffect"];
        }
    }["MapContent.useEffect"], []);
    // Update detail drawer when a hotspot is clicked
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapContent.useEffect": ()=>{
            if (!selectedClusterId) {
                if (!selectedIssueId) {
                    setActiveClusterDetail(null);
                }
                return;
            }
            const found = hotspots.find({
                "MapContent.useEffect.found": (h_0)=>h_0.id === selectedClusterId
            }["MapContent.useEffect.found"]);
            if (found) {
                setActiveClusterDetail({
                    id: found.id,
                    title: found.label || "Civic Hotspot",
                    totalIssues: found.count,
                    dominantTheme: found.dominantTheme,
                    themes: [
                        found.dominantTheme || "road_repair",
                        "water_supply",
                        "sanitation"
                    ],
                    timeRange: "Past 30 Days",
                    priorityScore: found.score ?? 0.85,
                    impactEstimate: `High Priority Cluster — ROI 2.4x for Khordha CAPEX`,
                    affectedPopulation: found.count * 320,
                    timeline: [
                        {
                            date: "2026-08-01",
                            count: Math.round(found.count * 0.2),
                            theme: found.dominantTheme
                        },
                        {
                            date: "2026-08-10",
                            count: Math.round(found.count * 0.35),
                            theme: found.dominantTheme
                        },
                        {
                            date: "2026-08-20",
                            count: Math.round(found.count * 0.45),
                            theme: found.dominantTheme
                        }
                    ],
                    submissions: [
                        {
                            id: "sub-1",
                            text: `Repeated citizen complaints regarding ${found.dominantTheme} in area.`,
                            source: "Citizen Voice PWA"
                        },
                        {
                            id: "sub-2",
                            text: `Commuters flagging infrastructure damage causing traffic bottlenecks.`,
                            source: "Grievance Portal"
                        }
                    ]
                });
            }
        }
    }["MapContent.useEffect"], [
        selectedClusterId,
        selectedIssueId,
        hotspots
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$TileLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TileLayer"], {
                attribution: "© OpenStreetMap contributors",
                url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            }, void 0, false, {
                fileName: "[project]/civic-priority-platform/frontend/components/maps/CivicMap.tsx",
                lineNumber: 210,
                columnNumber: 7
            }, this),
            layers.showHotspots && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$layers$2f$HotspotLayer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                hotspots: hotspots
            }, void 0, false, {
                fileName: "[project]/civic-priority-platform/frontend/components/maps/CivicMap.tsx",
                lineNumber: 212,
                columnNumber: 31
            }, this),
            layers.showIssues && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$layers$2f$IssueLayer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                issues: issues
            }, void 0, false, {
                fileName: "[project]/civic-priority-platform/frontend/components/maps/CivicMap.tsx",
                lineNumber: 214,
                columnNumber: 29
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$layers$2f$ContextLayers$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                showDemographics: layers.showDemographics,
                showInfrastructure: layers.showInfrastructure,
                showBoundaries: layers.showBoundaries,
                data: contextData
            }, void 0, false, {
                fileName: "[project]/civic-priority-platform/frontend/components/maps/CivicMap.tsx",
                lineNumber: 216,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$controls$2f$MapControls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/civic-priority-platform/frontend/components/maps/CivicMap.tsx",
                lineNumber: 218,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$controls$2f$LayerSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/civic-priority-platform/frontend/components/maps/CivicMap.tsx",
                lineNumber: 220,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$layers$2f$BaseMapSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/civic-priority-platform/frontend/components/maps/CivicMap.tsx",
                lineNumber: 222,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$panels$2f$ClusterDetailPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                cluster: activeClusterDetail
            }, void 0, false, {
                fileName: "[project]/civic-priority-platform/frontend/components/maps/CivicMap.tsx",
                lineNumber: 224,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MapInstanceBridge, {}, void 0, false, {
                fileName: "[project]/civic-priority-platform/frontend/components/maps/CivicMap.tsx",
                lineNumber: 226,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MapInteractionBridge, {}, void 0, false, {
                fileName: "[project]/civic-priority-platform/frontend/components/maps/CivicMap.tsx",
                lineNumber: 228,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/civic-priority-platform/frontend/components/maps/CivicMap.tsx",
        lineNumber: 209,
        columnNumber: 10
    }, this);
}
_s2(MapContent, "yZ6LHfFCjlgDCwkjBpYDuY6XKx4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$MapProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCivicMap"]
    ];
});
_c2 = MapContent;
function MapViewport(t0) {
    _s3();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "7411d92494560428c4d6fb84b5c5c55eaba303ec72395e3396a11f8c443bdaa2") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7411d92494560428c4d6fb84b5c5c55eaba303ec72395e3396a11f8c443bdaa2";
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
    if ($[0] !== "7411d92494560428c4d6fb84b5c5c55eaba303ec72395e3396a11f8c443bdaa2") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7411d92494560428c4d6fb84b5c5c55eaba303ec72395e3396a11f8c443bdaa2";
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
            lineNumber: 296,
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
            lineNumber: 305,
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
                lineNumber: 312,
                columnNumber: 23
            }, this)
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/CivicMap.tsx",
            lineNumber: 312,
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
            lineNumber: 322,
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
    if ($[0] !== "676d22dc197b1db4da405be0956673fc770772b4d487eb50eda1a77f57ef81d9") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "676d22dc197b1db4da405be0956673fc770772b4d487eb50eda1a77f57ef81d9";
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
            className: "absolute left-4 top-4 z-[1000] w-auto max-w-[calc(100vw-2rem)] sm:w-56 rounded-xl border bg-background/95 p-3 shadow-lg backdrop-blur-sm",
            children: [
                t0,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-1",
                    children: t1
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/LayerSelector.tsx",
                    lineNumber: 70,
                    columnNumber: 168
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
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/icons/activity.mjs [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/icons/external-link.mjs [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/icons/flame.mjs [app-client] (ecmascript) <export default as Flame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$indian$2d$rupee$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IndianRupee$3e$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/icons/indian-rupee.mjs [app-client] (ecmascript) <export default as IndianRupee>");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/icons/shield-alert.mjs [app-client] (ecmascript) <export default as ShieldAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/icons/users.mjs [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$MapProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/components/maps/MapProvider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ClusterDetailPanel(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(85);
    if ($[0] !== "37d708f1233b89e2d73de48498125b85296091e4e8338a7d382d4f28d61c919b") {
        for(let $i = 0; $i < 85; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "37d708f1233b89e2d73de48498125b85296091e4e8338a7d382d4f28d61c919b";
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
    if ($[4] !== cluster.priorityScore) {
        t2 = typeof cluster.priorityScore === "number" ? Math.round(cluster.priorityScore * 100) : 85;
        $[4] = cluster.priorityScore;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    const priorityPct = t2;
    const t3 = cluster.totalIssues * 0.08 + 0.4;
    let t4;
    if ($[6] !== t3) {
        t4 = t3.toFixed(1);
        $[6] = t3;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    const estimatedCostCr = t4;
    let t5;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = {
            backgroundColor: "#ffffff"
        };
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    let t7;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-9 w-9 items-center justify-center rounded-xl bg-[#e25a45] text-white shadow",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"], {
                className: "h-5 w-5"
            }, void 0, false, {
                fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                lineNumber: 97,
                columnNumber: 110
            }, this)
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 97,
            columnNumber: 10
        }, this);
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "font-mono text-[10px] uppercase tracking-wider text-[#e25a45]",
            children: "DBSCAN Hotspot Intelligence"
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 98,
            columnNumber: 10
        }, this);
        $[9] = t6;
        $[10] = t7;
    } else {
        t6 = $[9];
        t7 = $[10];
    }
    const t8 = cluster.title ?? "Civic Demand Hotspot";
    let t9;
    if ($[11] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        t7,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-base font-bold tracking-tight text-white line-clamp-1",
                            children: t8
                        }, void 0, false, {
                            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                            lineNumber: 108,
                            columnNumber: 64
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                    lineNumber: 108,
                    columnNumber: 55
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 108,
            columnNumber: 10
        }, this);
        $[11] = t8;
        $[12] = t9;
    } else {
        t9 = $[12];
    }
    let t10;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
            className: "h-5 w-5"
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 116,
            columnNumber: 11
        }, this);
        $[13] = t10;
    } else {
        t10 = $[13];
    }
    let t11;
    if ($[14] !== closePanel) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: closePanel,
            "aria-label": "Close hotspot details",
            className: "rounded-lg p-2 text-white/80 transition hover:bg-white/10 hover:text-white",
            children: t10
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 123,
            columnNumber: 11
        }, this);
        $[14] = closePanel;
        $[15] = t11;
    } else {
        t11 = $[15];
    }
    let t12;
    if ($[16] !== t11 || $[17] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between border-b border-[#171817]/15 bg-[#1c2d1c] px-5 py-4 text-white",
            children: [
                t9,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 131,
            columnNumber: 11
        }, this);
        $[16] = t11;
        $[17] = t9;
        $[18] = t12;
    } else {
        t12 = $[18];
    }
    let t13;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between text-xs text-[#171817]/60",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Report Volume"
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                    lineNumber: 140,
                    columnNumber: 88
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                    className: "h-3.5 w-3.5 text-[#e25a45]"
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                    lineNumber: 140,
                    columnNumber: 114
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 140,
            columnNumber: 11
        }, this);
        $[19] = t13;
    } else {
        t13 = $[19];
    }
    let t14;
    if ($[20] !== cluster.totalIssues) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-1 text-2xl font-black text-[#171817]",
            children: cluster.totalIssues
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 147,
            columnNumber: 11
        }, this);
        $[20] = cluster.totalIssues;
        $[21] = t14;
    } else {
        t14 = $[21];
    }
    let t15;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[10px] font-semibold text-emerald-700",
            children: "↑ 18% from last week"
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 155,
            columnNumber: 11
        }, this);
        $[22] = t15;
    } else {
        t15 = $[22];
    }
    let t16;
    if ($[23] !== t14) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-xl border border-[#171817]/15 bg-[#f6f5f2] p-3.5 shadow-sm",
            children: [
                t13,
                t14,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 162,
            columnNumber: 11
        }, this);
        $[23] = t14;
        $[24] = t16;
    } else {
        t16 = $[24];
    }
    let t17;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between text-xs text-[#171817]/60",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "MCDA Score"
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                    lineNumber: 170,
                    columnNumber: 88
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                    className: "h-3.5 w-3.5 text-[#e25a45]"
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                    lineNumber: 170,
                    columnNumber: 111
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 170,
            columnNumber: 11
        }, this);
        $[25] = t17;
    } else {
        t17 = $[25];
    }
    let t18;
    if ($[26] !== priorityPct) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-1 text-2xl font-black text-[#e25a45]",
            children: [
                priorityPct,
                "%"
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 177,
            columnNumber: 11
        }, this);
        $[26] = priorityPct;
        $[27] = t18;
    } else {
        t18 = $[27];
    }
    let t19;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[10px] font-semibold text-[#171817]/70",
            children: "Transparent MCDA Rank"
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 185,
            columnNumber: 11
        }, this);
        $[28] = t19;
    } else {
        t19 = $[28];
    }
    let t20;
    if ($[29] !== t18) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-xl border border-[#171817]/15 bg-[#f6f5f2] p-3.5 shadow-sm",
            children: [
                t17,
                t18,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 192,
            columnNumber: 11
        }, this);
        $[29] = t18;
        $[30] = t20;
    } else {
        t20 = $[30];
    }
    let t21;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between text-xs text-[#171817]/60",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Affected Population"
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                    lineNumber: 200,
                    columnNumber: 88
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                    className: "h-3.5 w-3.5 text-[#e25a45]"
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                    lineNumber: 200,
                    columnNumber: 120
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 200,
            columnNumber: 11
        }, this);
        $[31] = t21;
    } else {
        t21 = $[31];
    }
    let t22;
    if ($[32] !== cluster.affectedPopulation || $[33] !== cluster.totalIssues) {
        t22 = cluster.affectedPopulation ? cluster.affectedPopulation.toLocaleString() : (cluster.totalIssues * 280).toLocaleString();
        $[32] = cluster.affectedPopulation;
        $[33] = cluster.totalIssues;
        $[34] = t22;
    } else {
        t22 = $[34];
    }
    let t23;
    if ($[35] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-1 text-xl font-bold text-[#171817]",
            children: t22
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 216,
            columnNumber: 11
        }, this);
        $[35] = t22;
        $[36] = t23;
    } else {
        t23 = $[36];
    }
    let t24;
    if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[10px] text-[#171817]/60",
            children: "Ward Census 2011"
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 224,
            columnNumber: 11
        }, this);
        $[37] = t24;
    } else {
        t24 = $[37];
    }
    let t25;
    if ($[38] !== t23) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-xl border border-[#171817]/15 bg-[#f6f5f2] p-3.5 shadow-sm",
            children: [
                t21,
                t23,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 231,
            columnNumber: 11
        }, this);
        $[38] = t23;
        $[39] = t25;
    } else {
        t25 = $[39];
    }
    let t26;
    if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between text-xs text-[#171817]/60",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Est. CAPEX"
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                    lineNumber: 239,
                    columnNumber: 88
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$indian$2d$rupee$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IndianRupee$3e$__["IndianRupee"], {
                    className: "h-3.5 w-3.5 text-[#e25a45]"
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                    lineNumber: 239,
                    columnNumber: 111
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 239,
            columnNumber: 11
        }, this);
        $[40] = t26;
    } else {
        t26 = $[40];
    }
    let t27;
    if ($[41] !== estimatedCostCr) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-1 text-xl font-bold text-[#171817]",
            children: [
                "₹",
                estimatedCostCr,
                " Cr"
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 246,
            columnNumber: 11
        }, this);
        $[41] = estimatedCostCr;
        $[42] = t27;
    } else {
        t27 = $[42];
    }
    let t28;
    if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[10px] font-semibold text-emerald-700",
            children: "ROI 2.4x Benefit"
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 254,
            columnNumber: 11
        }, this);
        $[43] = t28;
    } else {
        t28 = $[43];
    }
    let t29;
    if ($[44] !== t27) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-xl border border-[#171817]/15 bg-[#f6f5f2] p-3.5 shadow-sm",
            children: [
                t26,
                t27,
                t28
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 261,
            columnNumber: 11
        }, this);
        $[44] = t27;
        $[45] = t29;
    } else {
        t29 = $[45];
    }
    let t30;
    if ($[46] !== t16 || $[47] !== t20 || $[48] !== t25 || $[49] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 gap-3 font-sans",
            children: [
                t16,
                t20,
                t25,
                t29
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 269,
            columnNumber: 11
        }, this);
        $[46] = t16;
        $[47] = t20;
        $[48] = t25;
        $[49] = t29;
        $[50] = t30;
    } else {
        t30 = $[50];
    }
    let t31;
    if ($[51] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between border-b border-[#171817]/10 pb-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "font-mono text-xs font-bold uppercase tracking-wider text-[#171817]",
                    children: "MCDA Weight Breakdown"
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                    lineNumber: 280,
                    columnNumber: 96
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-mono text-[10px] text-[#e25a45] font-semibold",
                    children: "4-Factor Model"
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                    lineNumber: 280,
                    columnNumber: 206
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 280,
            columnNumber: 11
        }, this);
        $[51] = t31;
    } else {
        t31 = $[51];
    }
    let t32;
    if ($[52] === Symbol.for("react.memo_cache_sentinel")) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between text-[11px] mb-1",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Population Impact (40%)"
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                    lineNumber: 287,
                    columnNumber: 66
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-bold",
                    children: "92/100"
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                    lineNumber: 287,
                    columnNumber: 102
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 287,
            columnNumber: 11
        }, this);
        $[52] = t32;
    } else {
        t32 = $[52];
    }
    let t33;
    if ($[53] === Symbol.for("react.memo_cache_sentinel")) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t32,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-1.5 w-full rounded-full bg-slate-200",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-1.5 rounded-full bg-[#e25a45]",
                        style: {
                            width: "92%"
                        }
                    }, void 0, false, {
                        fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                        lineNumber: 294,
                        columnNumber: 77
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                    lineNumber: 294,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 294,
            columnNumber: 11
        }, this);
        $[53] = t33;
    } else {
        t33 = $[53];
    }
    let t34;
    if ($[54] === Symbol.for("react.memo_cache_sentinel")) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between text-[11px] mb-1",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Citizen Urgency (30%)"
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                    lineNumber: 303,
                    columnNumber: 66
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-bold",
                    children: "85/100"
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                    lineNumber: 303,
                    columnNumber: 100
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 303,
            columnNumber: 11
        }, this);
        $[54] = t34;
    } else {
        t34 = $[54];
    }
    let t35;
    if ($[55] === Symbol.for("react.memo_cache_sentinel")) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t34,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-1.5 w-full rounded-full bg-slate-200",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-1.5 rounded-full bg-[#e25a45]",
                        style: {
                            width: "85%"
                        }
                    }, void 0, false, {
                        fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                        lineNumber: 310,
                        columnNumber: 77
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                    lineNumber: 310,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 310,
            columnNumber: 11
        }, this);
        $[55] = t35;
    } else {
        t35 = $[55];
    }
    let t36;
    if ($[56] === Symbol.for("react.memo_cache_sentinel")) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between text-[11px] mb-1",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Cost-Effectiveness (20%)"
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                    lineNumber: 319,
                    columnNumber: 66
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-bold",
                    children: "78/100"
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                    lineNumber: 319,
                    columnNumber: 103
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 319,
            columnNumber: 11
        }, this);
        $[56] = t36;
    } else {
        t36 = $[56];
    }
    let t37;
    if ($[57] === Symbol.for("react.memo_cache_sentinel")) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t36,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-1.5 w-full rounded-full bg-slate-200",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-1.5 rounded-full bg-emerald-600",
                        style: {
                            width: "78%"
                        }
                    }, void 0, false, {
                        fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                        lineNumber: 326,
                        columnNumber: 77
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                    lineNumber: 326,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 326,
            columnNumber: 11
        }, this);
        $[57] = t37;
    } else {
        t37 = $[57];
    }
    let t38;
    if ($[58] === Symbol.for("react.memo_cache_sentinel")) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between text-[11px] mb-1",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Development Plan Alignment (10%)"
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                    lineNumber: 335,
                    columnNumber: 66
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-bold",
                    children: "70/100"
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                    lineNumber: 335,
                    columnNumber: 111
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 335,
            columnNumber: 11
        }, this);
        $[58] = t38;
    } else {
        t38 = $[58];
    }
    let t39;
    if ($[59] === Symbol.for("react.memo_cache_sentinel")) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "rounded-xl border border-[#171817]/15 bg-[#f9f8f5] p-4 space-y-3 font-sans",
            children: [
                t31,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2 text-xs",
                    children: [
                        t33,
                        t35,
                        t37,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                t38,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-1.5 w-full rounded-full bg-slate-200",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-1.5 rounded-full bg-blue-600",
                                        style: {
                                            width: "70%"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                                        lineNumber: 342,
                                        columnNumber: 228
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                                    lineNumber: 342,
                                    columnNumber: 172
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                            lineNumber: 342,
                            columnNumber: 162
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                    lineNumber: 342,
                    columnNumber: 112
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 342,
            columnNumber: 11
        }, this);
        $[59] = t39;
    } else {
        t39 = $[59];
    }
    let t40;
    if ($[60] === Symbol.for("react.memo_cache_sentinel")) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 font-mono text-[11px] font-bold text-amber-900 uppercase",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"], {
                    className: "h-4 w-4 text-amber-600"
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                    lineNumber: 351,
                    columnNumber: 109
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Perception vs Municipal Ground Truth"
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                    lineNumber: 351,
                    columnNumber: 159
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 351,
            columnNumber: 11
        }, this);
        $[60] = t40;
    } else {
        t40 = $[60];
    }
    let t41;
    if ($[61] === Symbol.for("react.memo_cache_sentinel")) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
            children: "Citizen Perception:"
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 358,
            columnNumber: 11
        }, this);
        $[61] = t41;
    } else {
        t41 = $[61];
    }
    let t42;
    let t43;
    if ($[62] === Symbol.for("react.memo_cache_sentinel")) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 366,
            columnNumber: 11
        }, this);
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
            children: "Municipal Record:"
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 367,
            columnNumber: 11
        }, this);
        $[62] = t42;
        $[63] = t43;
    } else {
        t42 = $[62];
        t43 = $[63];
    }
    let t44;
    if ($[64] !== cluster.totalIssues) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-amber-950 leading-relaxed font-medium",
            children: [
                t41,
                " ",
                cluster.totalIssues,
                " reports of severe infrastructure deficit.",
                t42,
                t43,
                " PWD Repair Sanction Brief #8821 active in Khordha Block."
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 376,
            columnNumber: 11
        }, this);
        $[64] = cluster.totalIssues;
        $[65] = t44;
    } else {
        t44 = $[65];
    }
    let t45;
    if ($[66] === Symbol.for("react.memo_cache_sentinel")) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between pt-1 font-mono text-[10px] text-amber-800",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Status: Action & Comm Gap"
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                    lineNumber: 384,
                    columnNumber: 104
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-bold",
                    children: "Confidence: 94%"
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                    lineNumber: 384,
                    columnNumber: 146
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 384,
            columnNumber: 11
        }, this);
        $[66] = t45;
    } else {
        t45 = $[66];
    }
    let t46;
    if ($[67] !== t44) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "rounded-xl border border-amber-300 bg-amber-50/80 p-4 space-y-2 text-xs font-sans",
            children: [
                t40,
                t44,
                t45
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 391,
            columnNumber: 11
        }, this);
        $[67] = t44;
        $[68] = t46;
    } else {
        t46 = $[68];
    }
    let t47;
    if ($[69] !== cluster.submissions) {
        t47 = cluster.submissions && cluster.submissions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "space-y-3 font-sans",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "font-mono text-xs font-bold uppercase tracking-wider text-[#171817]",
                    children: "Representative Vernacular Submissions"
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                    lineNumber: 399,
                    columnNumber: 109
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: cluster.submissions.map(_ClusterDetailPanelClusterSubmissionsMap)
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                    lineNumber: 399,
                    columnNumber: 235
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 399,
            columnNumber: 68
        }, this);
        $[69] = cluster.submissions;
        $[70] = t47;
    } else {
        t47 = $[70];
    }
    let t48;
    if ($[71] !== t30 || $[72] !== t46 || $[73] !== t47) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 overflow-y-auto p-5 space-y-6 bg-white text-[#171817]",
            children: [
                t30,
                t39,
                t46,
                t47
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 407,
            columnNumber: 11
        }, this);
        $[71] = t30;
        $[72] = t46;
        $[73] = t47;
        $[74] = t48;
    } else {
        t48 = $[74];
    }
    let t49;
    if ($[75] === Symbol.for("react.memo_cache_sentinel")) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 417,
            columnNumber: 11
        }, this);
        $[75] = t49;
    } else {
        t49 = $[75];
    }
    let t50;
    if ($[76] !== closePanel) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: closePanel,
            className: "flex items-center justify-center gap-2 rounded-xl border border-[#171817]/20 bg-white px-3 py-2.5 text-xs font-bold text-[#171817] shadow-sm transition hover:bg-slate-100",
            children: [
                t49,
                "Close Panel"
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 424,
            columnNumber: 11
        }, this);
        $[76] = closePanel;
        $[77] = t50;
    } else {
        t50 = $[77];
    }
    let t51;
    if ($[78] === Symbol.for("react.memo_cache_sentinel")) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            className: "flex items-center justify-center gap-2 rounded-xl bg-[#e25a45] px-3 py-2.5 text-xs font-bold text-white shadow transition hover:bg-[#d44833]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                    className: "h-4 w-4"
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                    lineNumber: 432,
                    columnNumber: 186
                }, this),
                "Sanction CAPEX"
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 432,
            columnNumber: 11
        }, this);
        $[78] = t51;
    } else {
        t51 = $[78];
    }
    let t52;
    if ($[79] !== t50) {
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border-t border-[#171817]/15 bg-[#eeede9] p-4 font-sans",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-3",
                children: [
                    t50,
                    t51
                ]
            }, void 0, true, {
                fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                lineNumber: 439,
                columnNumber: 84
            }, this)
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 439,
            columnNumber: 11
        }, this);
        $[79] = t50;
        $[80] = t52;
    } else {
        t52 = $[80];
    }
    let t53;
    if ($[81] !== t12 || $[82] !== t48 || $[83] !== t52) {
        t53 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
            className: "absolute right-0 top-0 z-[1100] flex h-full w-full sm:max-w-md flex-col border-l border-[#171817]/20 bg-white text-[#171817] dark:bg-[#171817] dark:text-[#eeede9] shadow-2xl opacity-100",
            style: t5,
            children: [
                t12,
                t48,
                t52
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 447,
            columnNumber: 11
        }, this);
        $[81] = t12;
        $[82] = t48;
        $[83] = t52;
        $[84] = t53;
    } else {
        t53 = $[84];
    }
    return t53;
}
_s(ClusterDetailPanel, "BCwyrUw8KZVXo3mXwb60Lf/lsY0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$MapProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCivicMap"]
    ];
});
_c = ClusterDetailPanel;
function _ClusterDetailPanelClusterSubmissionsMap(submission) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "rounded-lg border border-[#171817]/10 bg-[#f4f3ef] p-3 text-xs",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-medium text-[#171817]",
                children: [
                    '"',
                    submission.text,
                    '"'
                ]
            }, void 0, true, {
                fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                lineNumber: 458,
                columnNumber: 114
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 flex items-center justify-between font-mono text-[10px] text-[#171817]/60",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "capitalize",
                        children: submission.source || "Citizen Voice Intake"
                    }, void 0, false, {
                        fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                        lineNumber: 458,
                        columnNumber: 275
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: submission.timestamp || "Verified PWA"
                    }, void 0, false, {
                        fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                        lineNumber: 458,
                        columnNumber: 356
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                lineNumber: 458,
                columnNumber: 179
            }, this)
        ]
    }, submission.id, true, {
        fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
        lineNumber: 458,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "ClusterDetailPanel");
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(19);
    if ($[0] !== "895a252417c6f85cae13df6a1244554b57b2fcfaa96269278c73eb5160cdecdc") {
        for(let $i = 0; $i < 19; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "895a252417c6f85cae13df6a1244554b57b2fcfaa96269278c73eb5160cdecdc";
    }
    const map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"])();
    const { isPinMode, setPinLocation, clearSelection } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$MapProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCivicMap"])();
    let t0;
    if ($[1] !== clearSelection || $[2] !== isPinMode || $[3] !== setPinLocation) {
        t0 = ({
            "useMapEvents[handleMapClick]": (event)=>{
                clearSelection();
                if (!isPinMode) {
                    return;
                }
                setPinLocation({
                    lat: event.latlng.lat,
                    lng: event.latlng.lng
                });
            }
        })["useMapEvents[handleMapClick]"];
        $[1] = clearSelection;
        $[2] = isPinMode;
        $[3] = setPinLocation;
        $[4] = t0;
    } else {
        t0 = $[4];
    }
    const handleMapClick = t0;
    let t1;
    if ($[5] !== handleMapClick) {
        t1 = {
            click: handleMapClick
        };
        $[5] = handleMapClick;
        $[6] = t1;
    } else {
        t1 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMapEvents"])(t1);
    let t2;
    let t3;
    if ($[7] !== map) {
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
        $[7] = map;
        $[8] = t2;
        $[9] = t3;
    } else {
        t2 = $[8];
        t3 = $[9];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    if ($[10] !== map) {
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
        $[10] = map;
        $[11] = t4;
    } else {
        t4 = $[11];
    }
    const flyToLocation = t4;
    let t5;
    if ($[12] !== clearSelection || $[13] !== map) {
        t5 = ({
            "useMapEvents[resetMap]": (center, zoom_0)=>{
                clearSelection();
                map.flyTo(center, zoom_0, {
                    duration: 0.8
                });
            }
        })["useMapEvents[resetMap]"];
        $[12] = clearSelection;
        $[13] = map;
        $[14] = t5;
    } else {
        t5 = $[14];
    }
    const resetMap = t5;
    let t6;
    if ($[15] !== flyToLocation || $[16] !== map || $[17] !== resetMap) {
        t6 = {
            map,
            flyToLocation,
            resetMap
        };
        $[15] = flyToLocation;
        $[16] = map;
        $[17] = resetMap;
        $[18] = t6;
    } else {
        t6 = $[18];
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
"[project]/civic-priority-platform/frontend/lib/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createPortfolio",
    ()=>createPortfolio,
    "createSubmission",
    ()=>createSubmission,
    "generateHotspots",
    ()=>generateHotspots,
    "generateRanking",
    ()=>generateRanking,
    "getDashboard",
    ()=>getDashboard,
    "getMapHotspots",
    ()=>getMapHotspots,
    "getMapIssues",
    ()=>getMapIssues,
    "getSubmission",
    ()=>getSubmission,
    "getWardsContext",
    ()=>getWardsContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const API_BASE = ("TURBOPACK compile-time value", "http://localhost:8000") || "http://localhost:8000";
const API_PREFIX = `${API_BASE}/api/v1`;
async function fetchJson(url, options) {
    const res = await fetch(url, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            ...options?.headers || {}
        }
    });
    if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`API call failed: ${res.status} ${res.statusText} - ${errorText}`);
    }
    return res.json();
}
async function createSubmission(payload) {
    return fetchJson(`${API_PREFIX}/submissions`, {
        method: "POST",
        body: JSON.stringify(payload)
    });
}
async function getSubmission(submissionId) {
    return fetchJson(`${API_PREFIX}/submissions/${submissionId}`);
}
async function getDashboard(constituency = "khordha") {
    try {
        return await fetchJson(`${API_PREFIX}/dashboard?constituency=${encodeURIComponent(constituency)}`);
    } catch (err) {
        console.warn("Backend unavailable, returning fallback dashboard data:", err);
        return getFallbackDashboard(constituency);
    }
}
async function generateHotspots(payload = {}) {
    try {
        return await fetchJson(`${API_PREFIX}/hotspots`, {
            method: "POST",
            body: JSON.stringify({
                constituency: "khordha",
                ...payload
            })
        });
    } catch (err) {
        console.warn("Backend unavailable, returning fallback hotspots:", err);
        return {
            constituency: payload.constituency || "khordha",
            hotspots: getFallbackHotspots()
        };
    }
}
async function generateRanking(payload = {}) {
    try {
        return await fetchJson(`${API_PREFIX}/ranking`, {
            method: "POST",
            body: JSON.stringify({
                constituency: "khordha",
                ...payload
            })
        });
    } catch (err) {
        console.warn("Backend unavailable, returning fallback ranking:", err);
        return {
            constituency: payload.constituency || "khordha",
            projects: getFallbackProjects(),
            scoring_weights: {
                population_impact: 0.4,
                urgency: 0.3,
                cost_effectiveness: 0.2,
                alignment_with_plans: 0.1
            }
        };
    }
}
async function createPortfolio(payload) {
    try {
        return await fetchJson(`${API_PREFIX}/portfolios`, {
            method: "POST",
            headers: {
                "Idempotency-Key": `port_${Date.now()}`
            },
            body: JSON.stringify({
                constituency: "khordha",
                ...payload
            })
        });
    } catch (err) {
        console.warn("Backend unavailable, returning fallback portfolio:", err);
        const projects = getFallbackProjects().slice(0, 3);
        return {
            portfolio_id: `fallback-${Date.now()}`,
            constituency: payload.constituency || "khordha",
            budget: payload.budget,
            selected_projects: projects,
            total_benefit: projects.reduce((acc, p)=>acc + p.score, 0),
            constraints: payload.constraints || {
                geographical: [
                    "Max 3 projects per ward"
                ],
                timeline: [
                    "Roads before building construction"
                ],
                administrative: [
                    "Capacity cap active"
                ]
            },
            status: "optimized"
        };
    }
}
async function getMapIssues() {
    try {
        return await fetchJson(`${API_PREFIX}/maps/issues`);
    } catch (err) {
        return {
            type: "FeatureCollection",
            features: []
        };
    }
}
async function getMapHotspots() {
    try {
        return await fetchJson(`${API_PREFIX}/maps/hotspots`);
    } catch (err) {
        return {
            type: "FeatureCollection",
            features: []
        };
    }
}
async function getWardsContext() {
    try {
        return await fetchJson(`${API_PREFIX}/context/wards`);
    } catch (err) {
        return [
            {
                ward_id: "Ward 1",
                ward_name: "Chandrasekharpur",
                city_name: "Khordha",
                zone_name: "North",
                area_sq_km: 4.2,
                population_thousands: 8.2,
                male_population_thousands: 4.2,
                female_population_thousands: 4.0,
                children_population_thousands: 1.1,
                youth_population_thousands: 2.3
            },
            {
                ward_id: "Ward 2",
                ward_name: "Patia",
                city_name: "Khordha",
                zone_name: "North",
                area_sq_km: 3.8,
                population_thousands: 7.4,
                male_population_thousands: 3.8,
                female_population_thousands: 3.6,
                children_population_thousands: 0.9,
                youth_population_thousands: 2.1
            },
            {
                ward_id: "Ward 3",
                ward_name: "Jaydev Vihar",
                city_name: "Khordha",
                zone_name: "Central",
                area_sq_km: 5.1,
                population_thousands: 9.1,
                male_population_thousands: 4.6,
                female_population_thousands: 4.5,
                children_population_thousands: 1.3,
                youth_population_thousands: 2.8
            },
            {
                ward_id: "Ward 4",
                ward_name: "Acharya Vihar",
                city_name: "Khordha",
                zone_name: "Central",
                area_sq_km: 2.9,
                population_thousands: 6.8,
                male_population_thousands: 3.5,
                female_population_thousands: 3.3,
                children_population_thousands: 0.8,
                youth_population_thousands: 1.9
            },
            {
                ward_id: "Ward 5",
                ward_name: "Saheed Nagar",
                city_name: "Khordha",
                zone_name: "Central",
                area_sq_km: 6.0,
                population_thousands: 11.2,
                male_population_thousands: 5.8,
                female_population_thousands: 5.4,
                children_population_thousands: 1.6,
                youth_population_thousands: 3.4
            },
            {
                ward_id: "Ward 8",
                ward_name: "Bhauma Nagar",
                city_name: "Khordha",
                zone_name: "South",
                area_sq_km: 4.5,
                population_thousands: 7.6,
                male_population_thousands: 3.9,
                female_population_thousands: 3.7,
                children_population_thousands: 1.0,
                youth_population_thousands: 2.2
            }
        ];
    }
}
// ---------------------------------------------------------------------------
// Fallbacks for client resilience during local dev / build
// ---------------------------------------------------------------------------
function getFallbackHotspots() {
    return [
        {
            ward: "Ward 5",
            theme: "road_repair",
            submission_count: 42,
            latitude: 20.1874,
            longitude: 85.6178,
            radius: 500
        },
        {
            ward: "Ward 3",
            theme: "school_infrastructure",
            submission_count: 28,
            latitude: 20.1921,
            longitude: 85.6241,
            radius: 500
        },
        {
            ward: "Ward 8",
            theme: "health_clinic",
            submission_count: 19,
            latitude: 20.1798,
            longitude: 85.6089,
            radius: 500
        }
    ];
}
function getFallbackProjects() {
    return [
        {
            project_id: "proj_001",
            theme: "road_repair",
            ward: "Ward 5",
            score: 87.5,
            population_impact_score: 90,
            urgency_score: 85,
            cost_effectiveness_score: 80,
            alignment_score: 75,
            social_impact: "Saves 12,000 commute hours/day for 11,200 residents in Ward 5",
            economic_impact: "ROI: 2.5x — generates 50 local jobs, reduces transport cost 30%",
            estimated_cost: 12000000
        },
        {
            project_id: "proj_002",
            theme: "school_infrastructure",
            ward: "Ward 3",
            score: 81.2,
            population_impact_score: 85,
            urgency_score: 78,
            cost_effectiveness_score: 82,
            alignment_score: 70,
            social_impact: "Improves learning outcomes for 9,100 students in Ward 3",
            economic_impact: "ROI: 3.1x — boosts enrolment 15%, reduces dropout 20%",
            estimated_cost: 8000000
        },
        {
            project_id: "proj_003",
            theme: "health_clinic",
            ward: "Ward 8",
            score: 76.8,
            population_impact_score: 75,
            urgency_score: 80,
            cost_effectiveness_score: 70,
            alignment_score: 80,
            social_impact: "Reduces OOP medical expenditure for 7,600 residents in Ward 8",
            economic_impact: "ROI: 1.8x — reduces disease burden, generates 20 healthcare jobs",
            estimated_cost: 15000000
        }
    ];
}
function getFallbackDashboard(constituency) {
    return {
        constituency,
        total_submissions: 145,
        hotspots: getFallbackHotspots(),
        top_projects: getFallbackProjects(),
        user_submissions: [
            {
                submission_id: "sub_001",
                status: "processed",
                theme: "road_repair",
                confidence: 0.92,
                message: "Submission processed."
            }
        ]
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=civic-priority-platform_frontend_0v_wdq6._.js.map