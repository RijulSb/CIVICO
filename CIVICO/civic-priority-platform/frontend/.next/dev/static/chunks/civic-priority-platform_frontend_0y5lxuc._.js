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
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$controls$2f$WardIssueDirectory$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/components/maps/controls/WardIssueDirectory.tsx [app-client] (ecmascript)");
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
;
const DEFAULT_CENTER = [
    20.2961,
    85.8245
];
const DEFAULT_ZOOM = 12;
function MapInstanceBridge() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "0ef4ddf71e45909347beb1012090bba44e8d56d0bfc1e51fb25bf5903527837e") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0ef4ddf71e45909347beb1012090bba44e8d56d0bfc1e51fb25bf5903527837e";
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
    if ($[0] !== "0ef4ddf71e45909347beb1012090bba44e8d56d0bfc1e51fb25bf5903527837e") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0ef4ddf71e45909347beb1012090bba44e8d56d0bfc1e51fb25bf5903527837e";
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
const ALL_12_WARD_HOTSPOTS = [
    {
        id: "hotspot-1",
        latitude: 20.2874,
        longitude: 85.8378,
        count: 48,
        score: 0.89,
        dominantTheme: "road_repair",
        label: "ROAD REPAIR Cluster — Ward 5 (Saheed Nagar)"
    },
    {
        id: "hotspot-2",
        latitude: 20.3021,
        longitude: 85.8241,
        count: 36,
        score: 0.82,
        dominantTheme: "school_infrastructure",
        label: "SCHOOL INFRASTRUCTURE Cluster — Ward 3 (Jaydev Vihar)"
    },
    {
        id: "hotspot-3",
        latitude: 20.2798,
        longitude: 85.8189,
        count: 39,
        score: 0.84,
        dominantTheme: "health_clinic",
        label: "HEALTH CLINIC Cluster — Ward 8 (Bhauma Nagar)"
    },
    {
        id: "hotspot-4",
        latitude: 20.3250,
        longitude: 85.8150,
        count: 32,
        score: 0.79,
        dominantTheme: "school_infrastructure",
        label: "SCHOOL INFRASTRUCTURE Cluster — Ward 1 (Chandrasekharpur)"
    },
    {
        id: "hotspot-5",
        latitude: 20.3520,
        longitude: 85.8180,
        count: 27,
        score: 0.77,
        dominantTheme: "sanitation",
        label: "SANITATION Cluster — Ward 2 (Patia KIIT)"
    },
    {
        id: "hotspot-6",
        latitude: 20.2980,
        longitude: 85.8290,
        count: 22,
        score: 0.74,
        dominantTheme: "electricity",
        label: "ELECTRICITY Cluster — Ward 4 (Acharya Vihar)"
    },
    {
        id: "hotspot-7",
        latitude: 20.2430,
        longitude: 85.8330,
        count: 35,
        score: 0.81,
        dominantTheme: "water_supply",
        label: "WATER SUPPLY Cluster — Ward 6 (Old Town Lingaraj)"
    },
    {
        id: "hotspot-8",
        latitude: 20.2580,
        longitude: 85.7850,
        count: 21,
        score: 0.73,
        dominantTheme: "sanitation",
        label: "SANITATION Cluster — Ward 7 (Khandagiri Caves)"
    },
    {
        id: "hotspot-9",
        latitude: 20.1874,
        longitude: 85.6178,
        count: 76,
        score: 0.94,
        dominantTheme: "health_clinic",
        label: "HEALTH CLINIC Cluster — Khordha Town HQ"
    },
    {
        id: "hotspot-10",
        latitude: 20.1520,
        longitude: 85.7050,
        count: 41,
        score: 0.85,
        dominantTheme: "road_repair",
        label: "ROAD REPAIR Cluster — Jatni Railway Sector"
    },
    {
        id: "hotspot-11",
        latitude: 20.1650,
        longitude: 85.6320,
        count: 25,
        score: 0.76,
        dominantTheme: "road_repair",
        label: "ROAD REPAIR Cluster — Barunei Sanctuary"
    },
    {
        id: "hotspot-12",
        latitude: 20.1320,
        longitude: 85.5650,
        count: 19,
        score: 0.71,
        dominantTheme: "water_supply",
        label: "WATER SUPPLY Cluster — Kaipadar Gram Panchayat"
    }
];
function MapContent() {
    _s2();
    const { layers, selectedClusterId, selectedIssueId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$MapProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCivicMap"])();
    const [hotspots, setHotspots] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(ALL_12_WARD_HOTSPOTS);
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
                        // Merge server hotspots with baseline for 100% 12-ward coverage
                        setHotspots({
                            "MapContent.useEffect.loadMapData": (prev)=>mappedHotspots.length >= 12 ? mappedHotspots : ALL_12_WARD_HOTSPOTS
                        }["MapContent.useEffect.loadMapData"]);
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
    // Update detail drawer when any hotspot or issue across any sector is selected
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapContent.useEffect": ()=>{
            if (!selectedClusterId && !selectedIssueId) {
                setActiveClusterDetail(null);
                return;
            }
            if (selectedClusterId) {
                const found = hotspots.find({
                    "MapContent.useEffect.found": (h_0)=>h_0.id === selectedClusterId
                }["MapContent.useEffect.found"]);
                if (found) {
                    setActiveClusterDetail({
                        id: found.id,
                        title: found.label || "Civic Hotspot Cluster",
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
                                text: `Repeated citizen complaints regarding ${found.dominantTheme?.replace("_", " ") || "infrastructure"} in sector.`,
                                source: "Citizen Voice PWA"
                            },
                            {
                                id: "sub-2",
                                text: `Commuters flagging infrastructure damage causing traffic bottlenecks.`,
                                source: "Grievance Portal"
                            }
                        ]
                    });
                    return;
                }
            }
            if (selectedIssueId) {
                const foundIssue = issues.find({
                    "MapContent.useEffect.foundIssue": (i_1)=>i_1.id === selectedIssueId
                }["MapContent.useEffect.foundIssue"]);
                if (foundIssue) {
                    setActiveClusterDetail({
                        id: foundIssue.id,
                        title: foundIssue.title || "Civic Sector Hotspot",
                        totalIssues: 28,
                        dominantTheme: foundIssue.theme || "road_repair",
                        themes: [
                            foundIssue.theme || "road_repair",
                            "water_supply",
                            "sanitation"
                        ],
                        timeRange: "Active Sector Intake",
                        priorityScore: 0.84,
                        impactEstimate: `Sector Priority Area — ROI 2.4x CAPEX Benefit`,
                        affectedPopulation: 8960,
                        timeline: [
                            {
                                date: "2026-08-05",
                                count: 10,
                                theme: foundIssue.theme
                            },
                            {
                                date: "2026-08-15",
                                count: 18,
                                theme: foundIssue.theme
                            }
                        ],
                        submissions: [
                            {
                                id: "sub-issue-1",
                                text: foundIssue.description || "Citizen reported infrastructure deficit in sector.",
                                source: foundIssue.source || "Citizen Voice PWA"
                            },
                            {
                                id: "sub-issue-2",
                                text: "Verified by municipal PWD site inspection brief.",
                                source: "Municipal Log"
                            }
                        ]
                    });
                }
            }
        }
    }["MapContent.useEffect"], [
        selectedClusterId,
        selectedIssueId,
        hotspots,
        issues
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$TileLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TileLayer"], {
                attribution: "© OpenStreetMap contributors",
                url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            }, void 0, false, {
                fileName: "[project]/civic-priority-platform/frontend/components/maps/CivicMap.tsx",
                lineNumber: 343,
                columnNumber: 7
            }, this),
            layers.showHotspots && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$layers$2f$HotspotLayer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                hotspots: hotspots
            }, void 0, false, {
                fileName: "[project]/civic-priority-platform/frontend/components/maps/CivicMap.tsx",
                lineNumber: 345,
                columnNumber: 31
            }, this),
            layers.showIssues && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$layers$2f$IssueLayer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                issues: issues
            }, void 0, false, {
                fileName: "[project]/civic-priority-platform/frontend/components/maps/CivicMap.tsx",
                lineNumber: 347,
                columnNumber: 29
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$layers$2f$ContextLayers$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                showDemographics: layers.showDemographics,
                showInfrastructure: layers.showInfrastructure,
                showBoundaries: layers.showBoundaries,
                data: contextData
            }, void 0, false, {
                fileName: "[project]/civic-priority-platform/frontend/components/maps/CivicMap.tsx",
                lineNumber: 349,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$controls$2f$MapControls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/civic-priority-platform/frontend/components/maps/CivicMap.tsx",
                lineNumber: 351,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$controls$2f$LayerSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/civic-priority-platform/frontend/components/maps/CivicMap.tsx",
                lineNumber: 353,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$controls$2f$WardIssueDirectory$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/civic-priority-platform/frontend/components/maps/CivicMap.tsx",
                lineNumber: 355,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$layers$2f$BaseMapSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/civic-priority-platform/frontend/components/maps/CivicMap.tsx",
                lineNumber: 357,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$panels$2f$ClusterDetailPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                cluster: activeClusterDetail
            }, void 0, false, {
                fileName: "[project]/civic-priority-platform/frontend/components/maps/CivicMap.tsx",
                lineNumber: 359,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MapInstanceBridge, {}, void 0, false, {
                fileName: "[project]/civic-priority-platform/frontend/components/maps/CivicMap.tsx",
                lineNumber: 361,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MapInteractionBridge, {}, void 0, false, {
                fileName: "[project]/civic-priority-platform/frontend/components/maps/CivicMap.tsx",
                lineNumber: 363,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/civic-priority-platform/frontend/components/maps/CivicMap.tsx",
        lineNumber: 342,
        columnNumber: 10
    }, this);
}
_s2(MapContent, "VTwh/VD4Dm0cFISfXcj79IOS8wA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$MapProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCivicMap"]
    ];
});
_c2 = MapContent;
function MapViewport(t0) {
    _s3();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "0ef4ddf71e45909347beb1012090bba44e8d56d0bfc1e51fb25bf5903527837e") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0ef4ddf71e45909347beb1012090bba44e8d56d0bfc1e51fb25bf5903527837e";
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
    if ($[0] !== "0ef4ddf71e45909347beb1012090bba44e8d56d0bfc1e51fb25bf5903527837e") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0ef4ddf71e45909347beb1012090bba44e8d56d0bfc1e51fb25bf5903527837e";
    }
    const { center: t1, zoom: t2, className: t3 } = t0;
    const center = t1 === undefined ? DEFAULT_CENTER : t1;
    const zoom = t2 === undefined ? DEFAULT_ZOOM : t2;
    const className = t3 === undefined ? "" : t3;
    const t4 = `relative h-full min-h-[500px] w-full overflow-hidden rounded-xl bg-[#d9ded2] ${className}`;
    let t5;
    if ($[1] !== center || $[2] !== zoom) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MapViewport, {
            center: center,
            zoom: zoom
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/CivicMap.tsx",
            lineNumber: 431,
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
            lineNumber: 440,
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
                lineNumber: 447,
                columnNumber: 23
            }, this)
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/CivicMap.tsx",
            lineNumber: 447,
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
            lineNumber: 457,
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
"[project]/civic-priority-platform/frontend/components/maps/MapProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MapProvider",
    ()=>MapProvider,
    "useCivicMap",
    ()=>useCivicMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
/* -------------------------------------------------------------------------- */ /*                              DEFAULT STATE                                 */ /* -------------------------------------------------------------------------- */ const DEFAULT_CENTER = [
    20.2961,
    85.8245
];
const DEFAULT_ZOOM = 11;
const DEFAULT_FILTERS = {
    themeFilter: "all",
    timeRange: "30d",
    sourceFilter: "all"
};
const DEFAULT_LAYERS = {
    showHotspots: true,
    showIssues: true,
    showDemographics: false,
    showInfrastructure: false,
    showBoundaries: true
};
/* -------------------------------------------------------------------------- */ /*                                  CONTEXT                                   */ /* -------------------------------------------------------------------------- */ const CivicMapContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function MapProvider(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(25);
    if ($[0] !== "37e39536944c517245be775a84625ed9b93f4abb16a02a5855f4d0ac37aea91f") {
        for(let $i = 0; $i < 25; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "37e39536944c517245be775a84625ed9b93f4abb16a02a5855f4d0ac37aea91f";
    }
    const { children } = t0;
    const [map, setMap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [filters, setFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(DEFAULT_FILTERS);
    const [layers, setLayers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(DEFAULT_LAYERS);
    const [selectedClusterId, setSelectedClusterId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedIssueId, setSelectedIssueId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isPinMode, setIsPinMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pinLocation, setPinLocationState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t1;
    if ($[1] !== map) {
        t1 = ({
            "MapProvider[setCenter]": (lat, lng, zoom)=>{
                if (!map) {
                    return;
                }
                map.flyTo([
                    lat,
                    lng
                ], zoom ?? map.getZoom(), {
                    duration: 0.8
                });
            }
        })["MapProvider[setCenter]"];
        $[1] = map;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const setCenter = t1;
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "MapProvider[selectCluster]": (clusterId)=>{
                setSelectedClusterId(clusterId);
                setSelectedIssueId(null);
            }
        })["MapProvider[selectCluster]"];
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const selectCluster = t2;
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "MapProvider[selectIssue]": (issueId)=>{
                setSelectedIssueId(issueId);
                setSelectedClusterId(null);
            }
        })["MapProvider[selectIssue]"];
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const selectIssue = t3;
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "MapProvider[clearSelection]": ()=>{
                setSelectedClusterId(null);
                setSelectedIssueId(null);
            }
        })["MapProvider[clearSelection]"];
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    const clearSelection = t4;
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = ({
            "MapProvider[setPinMode]": (enabled)=>{
                setIsPinMode(enabled);
                if (!enabled) {
                    setPinLocationState(null);
                }
            }
        })["MapProvider[setPinMode]"];
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    const setPinMode = t5;
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = ({
            "MapProvider[setPinLocation]": (location)=>{
                setPinLocationState(location);
            }
        })["MapProvider[setPinLocation]"];
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    const setPinLocation = t6;
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = ({
            "MapProvider[updateFilters]": (updates)=>{
                setFilters({
                    "MapProvider[updateFilters > setFilters()]": (current)=>({
                            ...current,
                            ...updates
                        })
                }["MapProvider[updateFilters > setFilters()]"]);
            }
        })["MapProvider[updateFilters]"];
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    const updateFilters = t7;
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = ({
            "MapProvider[toggleLayer]": (layer)=>{
                setLayers({
                    "MapProvider[toggleLayer > setLayers()]": (current_0)=>({
                            ...current_0,
                            [layer]: !current_0[layer]
                        })
                }["MapProvider[toggleLayer > setLayers()]"]);
            }
        })["MapProvider[toggleLayer]"];
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    const toggleLayer = t8;
    let t9;
    if ($[10] !== map) {
        t9 = ({
            "MapProvider[resetView]": ()=>{
                if (!map) {
                    return;
                }
                map.flyTo(DEFAULT_CENTER, DEFAULT_ZOOM, {
                    duration: 0.8
                });
            }
        })["MapProvider[resetView]"];
        $[10] = map;
        $[11] = t9;
    } else {
        t9 = $[11];
    }
    const resetView = t9;
    let t10;
    if ($[12] !== filters || $[13] !== isPinMode || $[14] !== layers || $[15] !== map || $[16] !== pinLocation || $[17] !== resetView || $[18] !== selectedClusterId || $[19] !== selectedIssueId || $[20] !== setCenter) {
        t10 = {
            map,
            filters,
            layers,
            selectedClusterId,
            selectedIssueId,
            isPinMode,
            pinLocation,
            setMap,
            setCenter,
            selectCluster,
            selectIssue,
            clearSelection,
            setPinMode,
            setPinLocation,
            updateFilters,
            toggleLayer,
            resetView
        };
        $[12] = filters;
        $[13] = isPinMode;
        $[14] = layers;
        $[15] = map;
        $[16] = pinLocation;
        $[17] = resetView;
        $[18] = selectedClusterId;
        $[19] = selectedIssueId;
        $[20] = setCenter;
        $[21] = t10;
    } else {
        t10 = $[21];
    }
    const value = t10;
    let t11;
    if ($[22] !== children || $[23] !== value) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CivicMapContext.Provider, {
            value: value,
            children: children
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/MapProvider.tsx",
            lineNumber: 280,
            columnNumber: 11
        }, this);
        $[22] = children;
        $[23] = value;
        $[24] = t11;
    } else {
        t11 = $[24];
    }
    return t11;
}
_s(MapProvider, "fn9KnkjwyZSB6d3LQJnqCyrAlqU=");
_c = MapProvider;
function useCivicMap() {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "37e39536944c517245be775a84625ed9b93f4abb16a02a5855f4d0ac37aea91f") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "37e39536944c517245be775a84625ed9b93f4abb16a02a5855f4d0ac37aea91f";
    }
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(CivicMapContext);
    if (!context) {
        throw new Error("useCivicMap must be used inside a MapProvider.");
    }
    return context;
}
_s1(useCivicMap, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "MapProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
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
"[project]/civic-priority-platform/frontend/components/maps/controls/WardIssueDirectory.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WardIssueDirectory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/icons/chevron-down.mjs [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/icons/chevron-up.mjs [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crosshair$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crosshair$3e$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/icons/crosshair.mjs [app-client] (ecmascript) <export default as Crosshair>");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$filter$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListFilter$3e$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/icons/list-filter.mjs [app-client] (ecmascript) <export default as ListFilter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/icons/map-pin.mjs [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/icons/circle-plus.mjs [app-client] (ecmascript) <export default as PlusCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/icons/search.mjs [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$MapProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/components/maps/MapProvider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const INITIAL_WARD_SECTORS = [
    {
        ward: "Ward 5",
        sectorName: "Saheed Nagar Sector",
        issues: [
            {
                id: "dir-1",
                title: "Janpath Main Road Pothole Crater",
                ward: "Ward 5",
                category: "road_repair",
                status: "open",
                lat: 20.2874,
                lng: 85.8378,
                reportCount: 48
            },
            {
                id: "dir-2",
                title: "Residential Drinking Water Pipe Rupture",
                ward: "Ward 5",
                category: "water_supply",
                status: "in_progress",
                lat: 20.2890,
                lng: 85.8395,
                reportCount: 32
            },
            {
                id: "dir-3",
                title: "High-Voltage Transformer Sparking",
                ward: "Ward 5",
                category: "electricity",
                status: "open",
                lat: 20.2855,
                lng: 85.8360,
                reportCount: 19
            },
            {
                id: "dir-4",
                title: "Stormwater Drain Overflow near Market",
                ward: "Ward 5",
                category: "sanitation",
                status: "open",
                lat: 20.2882,
                lng: 85.8410,
                reportCount: 26
            }
        ]
    },
    {
        ward: "Ward 3",
        sectorName: "Jaydev Vihar Sector",
        issues: [
            {
                id: "dir-5",
                title: "Flyover Approach Road Cavity",
                ward: "Ward 3",
                category: "road_repair",
                status: "open",
                lat: 20.3021,
                lng: 85.8241,
                reportCount: 36
            },
            {
                id: "dir-6",
                title: "Primary School Boundary Wall Deficit",
                ward: "Ward 3",
                category: "school_infrastructure",
                status: "open",
                lat: 20.3045,
                lng: 85.8265,
                reportCount: 24
            },
            {
                id: "dir-7",
                title: "Feeder Line Power Outage",
                ward: "Ward 3",
                category: "electricity",
                status: "in_progress",
                lat: 20.3005,
                lng: 85.8220,
                reportCount: 15
            }
        ]
    },
    {
        ward: "Ward 8",
        sectorName: "Bhauma Nagar Sector",
        issues: [
            {
                id: "dir-8",
                title: "Community Health Center (CHC) Bed Deficit",
                ward: "Ward 8",
                category: "health_clinic",
                status: "open",
                lat: 20.2798,
                lng: 85.8189,
                reportCount: 39
            },
            {
                id: "dir-9",
                title: "Municipal Water Pump Motor Failure",
                ward: "Ward 8",
                category: "water_supply",
                status: "open",
                lat: 20.2775,
                lng: 85.8165,
                reportCount: 28
            },
            {
                id: "dir-10",
                title: "Market Yard Open Garbage Dump",
                ward: "Ward 8",
                category: "sanitation",
                status: "in_progress",
                lat: 20.2810,
                lng: 85.8210,
                reportCount: 21
            }
        ]
    },
    {
        ward: "Ward 1",
        sectorName: "Chandrasekharpur Sector",
        issues: [
            {
                id: "dir-11",
                title: "Government High School Roof Waterproofing",
                ward: "Ward 1",
                category: "school_infrastructure",
                status: "open",
                lat: 20.3250,
                lng: 85.8150,
                reportCount: 32
            },
            {
                id: "dir-12",
                title: "District Avenue Kutcha Paving Need",
                ward: "Ward 1",
                category: "road_repair",
                status: "open",
                lat: 20.3275,
                lng: 85.8180,
                reportCount: 22
            },
            {
                id: "dir-13",
                title: "Public Standpost Water Leakage",
                ward: "Ward 1",
                category: "water_supply",
                status: "resolved",
                lat: 20.3225,
                lng: 85.8120,
                reportCount: 18
            }
        ]
    },
    {
        ward: "Ward 2",
        sectorName: "Patia KIIT Sector",
        issues: [
            {
                id: "dir-14",
                title: "Main Drainage Blockage near Square",
                ward: "Ward 2",
                category: "sanitation",
                status: "open",
                lat: 20.3520,
                lng: 85.8180,
                reportCount: 27
            },
            {
                id: "dir-15",
                title: "University Road Pothole Stretch",
                ward: "Ward 2",
                category: "road_repair",
                status: "in_progress",
                lat: 20.3550,
                lng: 85.8210,
                reportCount: 41
            },
            {
                id: "dir-16",
                title: "Streetlight Dark Zone Outage",
                ward: "Ward 2",
                category: "electricity",
                status: "open",
                lat: 20.3490,
                lng: 85.8150,
                reportCount: 17
            }
        ]
    },
    {
        ward: "Ward 4",
        sectorName: "Acharya Vihar Sector",
        issues: [
            {
                id: "dir-17-a",
                title: "Overhanging High-Voltage Lines",
                ward: "Ward 4",
                category: "electricity",
                status: "open",
                lat: 20.2980,
                lng: 85.8290,
                reportCount: 22
            },
            {
                id: "dir-17-b",
                title: "PHC Essential Medicine Access Gap",
                ward: "Ward 4",
                category: "health_clinic",
                status: "in_progress",
                lat: 20.2960,
                lng: 85.8310,
                reportCount: 18
            }
        ]
    },
    {
        ward: "Ward 6",
        sectorName: "Old Town Lingaraj Sector",
        issues: [
            {
                id: "dir-18-a",
                title: "Heritage Temple Road Restoration",
                ward: "Ward 6",
                category: "road_repair",
                status: "open",
                lat: 20.2455,
                lng: 85.8355,
                reportCount: 35
            },
            {
                id: "dir-18-b",
                title: "Public Standpost Tap Water Supply",
                ward: "Ward 6",
                category: "water_supply",
                status: "open",
                lat: 20.2430,
                lng: 85.8330,
                reportCount: 29
            }
        ]
    },
    {
        ward: "Ward 7",
        sectorName: "Khandagiri Caves Sector",
        issues: [
            {
                id: "dir-19-a",
                title: "Tourist Complex Public Toilet Sanitation",
                ward: "Ward 7",
                category: "sanitation",
                status: "open",
                lat: 20.2580,
                lng: 85.7850,
                reportCount: 21
            },
            {
                id: "dir-19-b",
                title: "Bus Shelter Lighting Outage",
                ward: "Ward 7",
                category: "electricity",
                status: "in_progress",
                lat: 20.2525,
                lng: 85.7795,
                reportCount: 14
            }
        ]
    },
    {
        ward: "Khordha Town",
        sectorName: "Khordha Municipal HQ",
        issues: [
            {
                id: "dir-17",
                title: "Sub-Divisional Hospital (SDH) Ward Upgrade",
                ward: "Khordha Town",
                category: "health_clinic",
                status: "open",
                lat: 20.1874,
                lng: 85.6178,
                reportCount: 76
            },
            {
                id: "dir-18",
                title: "Collectorate Main Road Resurfacing",
                ward: "Khordha Town",
                category: "road_repair",
                status: "open",
                lat: 20.1895,
                lng: 85.6205,
                reportCount: 52
            },
            {
                id: "dir-19",
                title: "Main Bazaar Drinking Water Pipeline Repair",
                ward: "Khordha Town",
                category: "water_supply",
                status: "in_progress",
                lat: 20.1850,
                lng: 85.6150,
                reportCount: 38
            },
            {
                id: "dir-20",
                title: "Town Model Primary School Classroom Deficit",
                ward: "Khordha Town",
                category: "school_infrastructure",
                status: "open",
                lat: 20.1910,
                lng: 85.6230,
                reportCount: 29
            }
        ]
    },
    {
        ward: "Jatni Block",
        sectorName: "Jatni Railway Sector",
        issues: [
            {
                id: "dir-21",
                title: "Railway Overbridge Approach Road Craters",
                ward: "Jatni Block",
                category: "road_repair",
                status: "open",
                lat: 20.1520,
                lng: 85.7050,
                reportCount: 41
            },
            {
                id: "dir-22",
                title: "Loco Colony Borewell Motor Failure",
                ward: "Jatni Block",
                category: "water_supply",
                status: "open",
                lat: 20.1545,
                lng: 85.7080,
                reportCount: 31
            },
            {
                id: "dir-23",
                title: "Station Market Public Toilet Sanitation",
                ward: "Jatni Block",
                category: "sanitation",
                status: "open",
                lat: 20.1570,
                lng: 85.7110,
                reportCount: 23
            }
        ]
    },
    {
        ward: "Barunei Area",
        sectorName: "Barunei Sanctuary Sector",
        issues: [
            {
                id: "dir-24",
                title: "Eco-Tourism Access Path Road Repair",
                ward: "Barunei Area",
                category: "road_repair",
                status: "open",
                lat: 20.1650,
                lng: 85.6320,
                reportCount: 25
            },
            {
                id: "dir-25",
                title: "Mountain Stream Water Filter Plant Setup",
                ward: "Barunei Area",
                category: "water_supply",
                status: "open",
                lat: 20.1620,
                lng: 85.6290,
                reportCount: 19
            }
        ]
    },
    {
        ward: "Kaipadar GP",
        sectorName: "Kaipadar Rural Panchayat",
        issues: [
            {
                id: "dir-26-a",
                title: "Rural Kutcha Road Surface Metal Paving",
                ward: "Kaipadar GP",
                category: "road_repair",
                status: "open",
                lat: 20.1320,
                lng: 85.5650,
                reportCount: 19
            },
            {
                id: "dir-26-b",
                title: "Panchayat Drinking Water Tube-well Repair",
                ward: "Kaipadar GP",
                category: "water_supply",
                status: "open",
                lat: 20.1350,
                lng: 85.5680,
                reportCount: 16
            }
        ]
    }
];
const CATEGORY_ICONS = {
    road_repair: {
        symbol: "🛠️",
        bgStyle: "bg-red-100 text-red-800 border-red-300"
    },
    water_supply: {
        symbol: "💧",
        bgStyle: "bg-blue-100 text-blue-800 border-blue-300"
    },
    health_clinic: {
        symbol: "🏥",
        bgStyle: "bg-emerald-100 text-emerald-800 border-emerald-300"
    },
    school_infrastructure: {
        symbol: "🏫",
        bgStyle: "bg-purple-100 text-purple-800 border-purple-300"
    },
    electricity: {
        symbol: "⚡",
        bgStyle: "bg-amber-100 text-amber-800 border-amber-300"
    },
    sanitation: {
        symbol: "🧹",
        bgStyle: "bg-orange-100 text-orange-800 border-orange-300"
    }
};
function WardIssueDirectory() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(47);
    if ($[0] !== "2f636b8b7772567f909e861b57428ff23bc0ad744630343ebaac6cbcbd0c771f") {
        for(let $i = 0; $i < 47; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2f636b8b7772567f909e861b57428ff23bc0ad744630343ebaac6cbcbd0c771f";
    }
    const { setCenter, selectIssue } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$MapProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCivicMap"])();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [activeWard, setActiveWard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Ward 5");
    const [wardSectors, setWardSectors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(INITIAL_WARD_SECTORS);
    const [isAddModalOpen, setIsAddModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [customWardName, setCustomWardName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [customAddress, setCustomAddress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [customComplaintTitle, setCustomComplaintTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [customCategory, setCustomCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("road_repair");
    let t0;
    bb0: {
        if (!searchQuery.trim()) {
            t0 = wardSectors;
            break bb0;
        }
        let t1;
        if ($[1] !== searchQuery || $[2] !== wardSectors) {
            const query = searchQuery.toLowerCase();
            t1 = wardSectors.map({
                "WardIssueDirectory[wardSectors.map()]": (sector)=>{
                    const matchingIssues = sector.issues.filter({
                        "WardIssueDirectory[wardSectors.map() > sector.issues.filter()]": (issue)=>issue.title.toLowerCase().includes(query) || issue.ward.toLowerCase().includes(query) || issue.category.toLowerCase().includes(query)
                    }["WardIssueDirectory[wardSectors.map() > sector.issues.filter()]"]);
                    return {
                        ...sector,
                        issues: matchingIssues
                    };
                }
            }["WardIssueDirectory[wardSectors.map()]"]).filter({
                "WardIssueDirectory[(anonymous)()]": (sector_0)=>sector_0.issues.length > 0 || sector_0.ward.toLowerCase().includes(query)
            }["WardIssueDirectory[(anonymous)()]"]);
            $[1] = searchQuery;
            $[2] = wardSectors;
            $[3] = t1;
        } else {
            t1 = $[3];
        }
        t0 = t1;
    }
    const filteredSectors = t0;
    let t1;
    if ($[4] !== selectIssue || $[5] !== setCenter) {
        t1 = ({
            "WardIssueDirectory[handleLocateIssue]": (issue_0)=>{
                setCenter(issue_0.lat, issue_0.lng, 15);
                selectIssue(issue_0.id);
            }
        })["WardIssueDirectory[handleLocateIssue]"];
        $[4] = selectIssue;
        $[5] = setCenter;
        $[6] = t1;
    } else {
        t1 = $[6];
    }
    const handleLocateIssue = t1;
    let t2;
    if ($[7] !== setCenter) {
        t2 = ({
            "WardIssueDirectory[handleLocateWard]": (lat, lng)=>{
                setCenter(lat, lng, 13);
            }
        })["WardIssueDirectory[handleLocateWard]"];
        $[7] = setCenter;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    const handleLocateWard = t2;
    let t3;
    if ($[9] !== customAddress || $[10] !== customCategory || $[11] !== customComplaintTitle || $[12] !== customWardName || $[13] !== selectIssue || $[14] !== setCenter) {
        t3 = ({
            "WardIssueDirectory[handleAddCustomWard]": (e)=>{
                e.preventDefault();
                if (!customComplaintTitle.trim() || !customWardName.trim() && !customAddress.trim()) {
                    return;
                }
                const wardLabel = customWardName.trim() || `Custom: ${customAddress.trim().slice(0, 18)}`;
                const sectorLabel = customAddress.trim() ? `${customAddress.trim()} Sector` : `${wardLabel} Sector`;
                const lat_0 = 20.2 + (Math.random() * 0.12 - 0.06);
                const lng_0 = 85.7 + (Math.random() * 0.14 - 0.07);
                const newIssueId = `custom-issue-${Date.now()}`;
                const newIssue = {
                    id: newIssueId,
                    title: customComplaintTitle.trim(),
                    ward: wardLabel,
                    category: customCategory,
                    status: "open",
                    lat: lat_0,
                    lng: lng_0,
                    reportCount: 1
                };
                setWardSectors({
                    "WardIssueDirectory[handleAddCustomWard > setWardSectors()]": (prev)=>{
                        const existingWardIdx = prev.findIndex({
                            "WardIssueDirectory[handleAddCustomWard > setWardSectors() > prev.findIndex()]": (s)=>s.ward.toLowerCase() === wardLabel.toLowerCase()
                        }["WardIssueDirectory[handleAddCustomWard > setWardSectors() > prev.findIndex()]"]);
                        if (existingWardIdx >= 0) {
                            const updated = [
                                ...prev
                            ];
                            updated[existingWardIdx] = {
                                ...updated[existingWardIdx],
                                issues: [
                                    newIssue,
                                    ...updated[existingWardIdx].issues
                                ]
                            };
                            return updated;
                        } else {
                            return [
                                {
                                    ward: wardLabel,
                                    sectorName: sectorLabel,
                                    issues: [
                                        newIssue
                                    ]
                                },
                                ...prev
                            ];
                        }
                    }
                }["WardIssueDirectory[handleAddCustomWard > setWardSectors()]"]);
                setCenter(lat_0, lng_0, 15);
                selectIssue(newIssueId);
                setCustomWardName("");
                setCustomAddress("");
                setCustomComplaintTitle("");
                setIsAddModalOpen(false);
            }
        })["WardIssueDirectory[handleAddCustomWard]"];
        $[9] = customAddress;
        $[10] = customCategory;
        $[11] = customComplaintTitle;
        $[12] = customWardName;
        $[13] = selectIssue;
        $[14] = setCenter;
        $[15] = t3;
    } else {
        t3 = $[15];
    }
    const handleAddCustomWard = t3;
    let t4;
    if ($[16] !== isOpen) {
        t4 = ({
            "WardIssueDirectory[<button>.onClick]": ()=>setIsOpen(!isOpen)
        })["WardIssueDirectory[<button>.onClick]"];
        $[16] = isOpen;
        $[17] = t4;
    } else {
        t4 = $[17];
    }
    let t5;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$filter$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListFilter$3e$__["ListFilter"], {
            className: "h-4 w-4 text-[#e25a45]"
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/WardIssueDirectory.tsx",
            lineNumber: 551,
            columnNumber: 10
        }, this);
        $[18] = t5;
    } else {
        t5 = $[18];
    }
    let t6;
    if ($[19] !== wardSectors.length) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: [
                "\uD83D\uDCCD Ward & Issue Directory (",
                wardSectors.length,
                " Wards)"
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/WardIssueDirectory.tsx",
            lineNumber: 558,
            columnNumber: 10
        }, this);
        $[19] = wardSectors.length;
        $[20] = t6;
    } else {
        t6 = $[20];
    }
    let t7;
    if ($[21] !== isOpen) {
        t7 = isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
            className: "h-4 w-4 text-[#171817]/60 dark:text-white/60"
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/WardIssueDirectory.tsx",
            lineNumber: 566,
            columnNumber: 19
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
            className: "h-4 w-4 text-[#171817]/60 dark:text-white/60"
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/WardIssueDirectory.tsx",
            lineNumber: 566,
            columnNumber: 92
        }, this);
        $[21] = isOpen;
        $[22] = t7;
    } else {
        t7 = $[22];
    }
    let t8;
    if ($[23] !== t4 || $[24] !== t6 || $[25] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: t4,
            className: "flex items-center gap-2.5 rounded-xl border border-[#171817]/20 bg-white dark:bg-[#171817] px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-[#171817] dark:text-[#eeede9] shadow-xl backdrop-blur-md transition hover:bg-slate-50 dark:hover:bg-[#222522]",
            children: [
                t5,
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/WardIssueDirectory.tsx",
            lineNumber: 574,
            columnNumber: 10
        }, this);
        $[23] = t4;
        $[24] = t6;
        $[25] = t7;
        $[26] = t8;
    } else {
        t8 = $[26];
    }
    let t9;
    if ($[27] !== activeWard || $[28] !== filteredSectors || $[29] !== handleLocateIssue || $[30] !== handleLocateWard || $[31] !== isOpen || $[32] !== searchQuery || $[33] !== selectIssue || $[34] !== wardSectors.length) {
        t9 = isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-2 flex max-h-[calc(100vh-270px)] w-full flex-col rounded-2xl border border-[#171817]/20 bg-white text-[#171817] p-4 shadow-2xl backdrop-blur-md opacity-100",
            style: {
                backgroundColor: "#ffffff"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between border-b border-[#171817]/15 pb-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex h-7 w-7 items-center justify-center rounded-lg bg-[#e25a45] text-white",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/WardIssueDirectory.tsx",
                                        lineNumber: 586,
                                        columnNumber: 229
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/WardIssueDirectory.tsx",
                                    lineNumber: 586,
                                    columnNumber: 136
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-mono text-xs font-bold uppercase tracking-wider text-[#171817]",
                                            children: [
                                                "Khordha Wards & Issues (",
                                                wardSectors.length,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/WardIssueDirectory.tsx",
                                            lineNumber: 586,
                                            columnNumber: 270
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] text-[#171817]/60",
                                            children: "Select issue to fly map & pinpoint affected radius"
                                        }, void 0, false, {
                                            fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/WardIssueDirectory.tsx",
                                            lineNumber: 586,
                                            columnNumber: 408
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/WardIssueDirectory.tsx",
                                    lineNumber: 586,
                                    columnNumber: 265
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/WardIssueDirectory.tsx",
                            lineNumber: 586,
                            columnNumber: 93
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: {
                                        "WardIssueDirectory[<button>.onClick]": ()=>setIsAddModalOpen(true)
                                    }["WardIssueDirectory[<button>.onClick]"],
                                    className: "flex items-center gap-1 rounded-lg bg-[#171817] px-2 py-1 font-mono text-[10px] font-bold text-white shadow transition hover:bg-[#e25a45]",
                                    title: "Add custom ward or street address complaint",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__["PlusCircle"], {
                                            className: "h-3.5 w-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/WardIssueDirectory.tsx",
                                            lineNumber: 588,
                                            columnNumber: 256
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "+ Add Ward/Address"
                                        }, void 0, false, {
                                            fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/WardIssueDirectory.tsx",
                                            lineNumber: 588,
                                            columnNumber: 294
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/WardIssueDirectory.tsx",
                                    lineNumber: 586,
                                    columnNumber: 564
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: {
                                        "WardIssueDirectory[<button>.onClick]": ()=>setIsOpen(false)
                                    }["WardIssueDirectory[<button>.onClick]"],
                                    "aria-label": "Close directory",
                                    className: "rounded-lg p-1.5 text-[#171817]/60 hover:bg-slate-100",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/WardIssueDirectory.tsx",
                                        lineNumber: 590,
                                        columnNumber: 149
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/WardIssueDirectory.tsx",
                                    lineNumber: 588,
                                    columnNumber: 334
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/WardIssueDirectory.tsx",
                            lineNumber: 586,
                            columnNumber: 523
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/WardIssueDirectory.tsx",
                    lineNumber: 586,
                    columnNumber: 8
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative my-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                            className: "absolute left-3 top-2.5 h-4 w-4 text-[#171817]/40"
                        }, void 0, false, {
                            fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/WardIssueDirectory.tsx",
                            lineNumber: 590,
                            columnNumber: 226
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            value: searchQuery,
                            onChange: {
                                "WardIssueDirectory[<input>.onChange]": (e_0)=>setSearchQuery(e_0.target.value)
                            }["WardIssueDirectory[<input>.onChange]"],
                            placeholder: "Search Ward, Address or Issue Category...",
                            className: "w-full rounded-xl border border-[#171817]/20 bg-[#f6f5f2] py-2 pl-9 pr-3 text-xs text-[#171817] focus:outline-none focus:ring-2 focus:ring-[#e25a45]"
                        }, void 0, false, {
                            fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/WardIssueDirectory.tsx",
                            lineNumber: 590,
                            columnNumber: 298
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/WardIssueDirectory.tsx",
                    lineNumber: 590,
                    columnNumber: 195
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-y-auto space-y-3 pr-1 text-xs",
                    children: filteredSectors.map({
                        "WardIssueDirectory[filteredSectors.map()]": (sector_1)=>{
                            const isExpanded = activeWard === sector_1.ward || searchQuery.trim().length > 0;
                            const firstIssue = sector_1.issues[0];
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-xl border border-[#171817]/15 bg-[#f9f8f5] p-3 shadow-sm space-y-2.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onClick: {
                                                    "WardIssueDirectory[filteredSectors.map() > <div>.onClick]": ()=>setActiveWard(isExpanded ? null : sector_1.ward)
                                                }["WardIssueDirectory[filteredSectors.map() > <div>.onClick]"],
                                                className: "flex cursor-pointer items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "rounded-lg bg-[#171817] px-2.5 py-1 font-mono text-[10px] font-bold text-white",
                                                        children: sector_1.ward
                                                    }, void 0, false, {
                                                        fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/WardIssueDirectory.tsx",
                                                        lineNumber: 598,
                                                        columnNumber: 132
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold text-[#171817] text-xs",
                                                        children: sector_1.sectorName
                                                    }, void 0, false, {
                                                        fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/WardIssueDirectory.tsx",
                                                        lineNumber: 598,
                                                        columnNumber: 251
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/WardIssueDirectory.tsx",
                                                lineNumber: 596,
                                                columnNumber: 185
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: {
                                                    "WardIssueDirectory[filteredSectors.map() > <button>.onClick]": ()=>{
                                                        if (firstIssue) {
                                                            handleLocateWard(firstIssue.lat, firstIssue.lng);
                                                            selectIssue(firstIssue.id);
                                                        }
                                                    }
                                                }["WardIssueDirectory[filteredSectors.map() > <button>.onClick]"],
                                                className: "inline-flex items-center gap-1 rounded-lg bg-[#e25a45] px-2.5 py-1 font-mono text-[10px] font-bold text-white shadow hover:bg-[#d44833]",
                                                title: "Fly map to ward center and open sector intelligence",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crosshair$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crosshair$3e$__["Crosshair"], {
                                                        className: "h-3.5 w-3.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/WardIssueDirectory.tsx",
                                                        lineNumber: 605,
                                                        columnNumber: 292
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Locate Sector"
                                                    }, void 0, false, {
                                                        fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/WardIssueDirectory.tsx",
                                                        lineNumber: 605,
                                                        columnNumber: 329
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/WardIssueDirectory.tsx",
                                                lineNumber: 598,
                                                columnNumber: 336
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/WardIssueDirectory.tsx",
                                        lineNumber: 596,
                                        columnNumber: 134
                                    }, this),
                                    isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2 pt-1 border-t border-[#171817]/10",
                                        children: sector_1.issues.map({
                                            "WardIssueDirectory[filteredSectors.map() > sector_1.issues.map()]": (issue_1)=>{
                                                const iconData = CATEGORY_ICONS[issue_1.category] || {
                                                    symbol: "\uD83D\uDCCD",
                                                    bgStyle: "bg-slate-100 text-slate-800"
                                                };
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    onClick: {
                                                        "WardIssueDirectory[filteredSectors.map() > sector_1.issues.map() > <div>.onClick]": ()=>handleLocateIssue(issue_1)
                                                    }["WardIssueDirectory[filteredSectors.map() > sector_1.issues.map() > <div>.onClick]"],
                                                    className: "group flex items-center justify-between rounded-xl border border-[#171817]/10 bg-white p-2.5 transition hover:border-[#e25a45] hover:bg-red-50/40 cursor-pointer shadow-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-start gap-2.5 pr-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-base shrink-0 mt-0.5",
                                                                    children: iconData.symbol
                                                                }, void 0, false, {
                                                                    fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/WardIssueDirectory.tsx",
                                                                    lineNumber: 613,
                                                                    columnNumber: 339
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "space-y-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "font-semibold text-[#171817] text-xs leading-snug group-hover:text-[#e25a45]",
                                                                            children: issue_1.title
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/WardIssueDirectory.tsx",
                                                                            lineNumber: 613,
                                                                            columnNumber: 434
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: `px-2 py-0.5 rounded border font-mono text-[9px] font-bold uppercase ${iconData.bgStyle}`,
                                                                                    children: issue_1.category.replace("_", " ")
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/WardIssueDirectory.tsx",
                                                                                    lineNumber: 613,
                                                                                    columnNumber: 586
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "font-mono text-[10px] text-[#171817]/60 font-semibold",
                                                                                    children: [
                                                                                        issue_1.reportCount,
                                                                                        " Complaints"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/WardIssueDirectory.tsx",
                                                                                    lineNumber: 613,
                                                                                    columnNumber: 737
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/WardIssueDirectory.tsx",
                                                                            lineNumber: 613,
                                                                            columnNumber: 545
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/WardIssueDirectory.tsx",
                                                                    lineNumber: 613,
                                                                    columnNumber: 407
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/WardIssueDirectory.tsx",
                                                            lineNumber: 613,
                                                            columnNumber: 292
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            className: "shrink-0 rounded-xl bg-[#171817] p-2 text-white opacity-85 group-hover:opacity-100 group-hover:bg-[#e25a45] transition",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crosshair$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crosshair$3e$__["Crosshair"], {
                                                                className: "h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/WardIssueDirectory.tsx",
                                                                lineNumber: 613,
                                                                columnNumber: 1019
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/WardIssueDirectory.tsx",
                                                            lineNumber: 613,
                                                            columnNumber: 866
                                                        }, this)
                                                    ]
                                                }, issue_1.id, true, {
                                                    fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/WardIssueDirectory.tsx",
                                                    lineNumber: 611,
                                                    columnNumber: 28
                                                }, this);
                                            }
                                        }["WardIssueDirectory[filteredSectors.map() > sector_1.issues.map()]"])
                                    }, void 0, false, {
                                        fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/WardIssueDirectory.tsx",
                                        lineNumber: 605,
                                        columnNumber: 385
                                    }, this)
                                ]
                            }, sector_1.ward, true, {
                                fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/WardIssueDirectory.tsx",
                                lineNumber: 596,
                                columnNumber: 20
                            }, this);
                        }
                    }["WardIssueDirectory[filteredSectors.map()]"])
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/WardIssueDirectory.tsx",
                    lineNumber: 592,
                    columnNumber: 277
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/WardIssueDirectory.tsx",
            lineNumber: 584,
            columnNumber: 20
        }, this);
        $[27] = activeWard;
        $[28] = filteredSectors;
        $[29] = handleLocateIssue;
        $[30] = handleLocateWard;
        $[31] = isOpen;
        $[32] = searchQuery;
        $[33] = selectIssue;
        $[34] = wardSectors.length;
        $[35] = t9;
    } else {
        t9 = $[35];
    }
    let t10;
    if ($[36] !== customAddress || $[37] !== customCategory || $[38] !== customComplaintTitle || $[39] !== customWardName || $[40] !== handleAddCustomWard || $[41] !== isAddModalOpen) {
        t10 = isAddModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-[99999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full max-w-md rounded-2xl border border-[#171817]/20 bg-white p-6 text-[#171817] shadow-2xl",
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
                                        fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/WardIssueDirectory.tsx",
                                        lineNumber: 632,
                                        columnNumber: 362
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-base text-[#171817]",
                                        children: "Add Custom Ward or Address"
                                    }, void 0, false, {
                                        fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/WardIssueDirectory.tsx",
                                        lineNumber: 632,
                                        columnNumber: 411
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/WardIssueDirectory.tsx",
                                lineNumber: 632,
                                columnNumber: 321
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: {
                                    "WardIssueDirectory[<button>.onClick]": ()=>setIsAddModalOpen(false)
                                }["WardIssueDirectory[<button>.onClick]"],
                                className: "rounded-lg p-1 text-slate-500 hover:bg-slate-100",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/WardIssueDirectory.tsx",
                                    lineNumber: 634,
                                    columnNumber: 115
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/WardIssueDirectory.tsx",
                                lineNumber: 632,
                                columnNumber: 499
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/WardIssueDirectory.tsx",
                        lineNumber: 632,
                        columnNumber: 256
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleAddCustomWard,
                        className: "mt-4 space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs font-bold uppercase tracking-wider text-[#171817] mb-1",
                                        children: "Existing Ward OR Custom Ward Name"
                                    }, void 0, false, {
                                        fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/WardIssueDirectory.tsx",
                                        lineNumber: 634,
                                        columnNumber: 224
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "e.g. Ward 9, or Custom: Saheed Nagar Sector 2",
                                        value: customWardName,
                                        onChange: {
                                            "WardIssueDirectory[<input>.onChange]": (e_1)=>setCustomWardName(e_1.target.value)
                                        }["WardIssueDirectory[<input>.onChange]"],
                                        className: "w-full rounded-xl border border-[#171817]/20 bg-[#f6f5f2] px-3 py-2 text-xs outline-none focus:ring-2 focus:ring-[#e25a45]"
                                    }, void 0, false, {
                                        fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/WardIssueDirectory.tsx",
                                        lineNumber: 634,
                                        columnNumber: 353
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/WardIssueDirectory.tsx",
                                lineNumber: 634,
                                columnNumber: 219
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs font-bold uppercase tracking-wider text-[#171817] mb-1",
                                        children: "Direct Street Address / Location Name"
                                    }, void 0, false, {
                                        fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/WardIssueDirectory.tsx",
                                        lineNumber: 636,
                                        columnNumber: 204
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "e.g. Gautam Nagar Lane 4, near Railway Gate, Khordha",
                                        value: customAddress,
                                        onChange: {
                                            "WardIssueDirectory[<input>.onChange]": (e_2)=>setCustomAddress(e_2.target.value)
                                        }["WardIssueDirectory[<input>.onChange]"],
                                        className: "w-full rounded-xl border border-[#171817]/20 bg-[#f6f5f2] px-3 py-2 text-xs outline-none focus:ring-2 focus:ring-[#e25a45]"
                                    }, void 0, false, {
                                        fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/WardIssueDirectory.tsx",
                                        lineNumber: 636,
                                        columnNumber: 337
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/WardIssueDirectory.tsx",
                                lineNumber: 636,
                                columnNumber: 199
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs font-bold uppercase tracking-wider text-[#171817] mb-1",
                                        children: "Issue Category"
                                    }, void 0, false, {
                                        fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/WardIssueDirectory.tsx",
                                        lineNumber: 638,
                                        columnNumber: 204
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: customCategory,
                                        onChange: {
                                            "WardIssueDirectory[<select>.onChange]": (e_3)=>setCustomCategory(e_3.target.value)
                                        }["WardIssueDirectory[<select>.onChange]"],
                                        className: "w-full rounded-xl border border-[#171817]/20 bg-[#f6f5f2] px-3 py-2 text-xs outline-none focus:ring-2 focus:ring-[#e25a45]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "road_repair",
                                                children: "🛠️ Road Repair"
                                            }, void 0, false, {
                                                fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/WardIssueDirectory.tsx",
                                                lineNumber: 640,
                                                columnNumber: 192
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "water_supply",
                                                children: "💧 Water Supply"
                                            }, void 0, false, {
                                                fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/WardIssueDirectory.tsx",
                                                lineNumber: 640,
                                                columnNumber: 244
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "health_clinic",
                                                children: "🏥 Health Clinic"
                                            }, void 0, false, {
                                                fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/WardIssueDirectory.tsx",
                                                lineNumber: 640,
                                                columnNumber: 297
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "school_infrastructure",
                                                children: "🏫 School Infrastructure"
                                            }, void 0, false, {
                                                fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/WardIssueDirectory.tsx",
                                                lineNumber: 640,
                                                columnNumber: 352
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "electricity",
                                                children: "⚡ Electricity Grid"
                                            }, void 0, false, {
                                                fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/WardIssueDirectory.tsx",
                                                lineNumber: 640,
                                                columnNumber: 423
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "sanitation",
                                                children: "\uD83E\uDDF9 Sanitation & Garbage"
                                            }, void 0, false, {
                                                fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/WardIssueDirectory.tsx",
                                                lineNumber: 640,
                                                columnNumber: 478
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/WardIssueDirectory.tsx",
                                        lineNumber: 638,
                                        columnNumber: 314
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/WardIssueDirectory.tsx",
                                lineNumber: 638,
                                columnNumber: 199
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs font-bold uppercase tracking-wider text-[#171817] mb-1",
                                        children: "Complaint Title / Problem Description"
                                    }, void 0, false, {
                                        fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/WardIssueDirectory.tsx",
                                        lineNumber: 640,
                                        columnNumber: 571
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        required: true,
                                        rows: 3,
                                        placeholder: "Describe the civic issue experienced at this address...",
                                        value: customComplaintTitle,
                                        onChange: {
                                            "WardIssueDirectory[<textarea>.onChange]": (e_4)=>setCustomComplaintTitle(e_4.target.value)
                                        }["WardIssueDirectory[<textarea>.onChange]"],
                                        className: "w-full rounded-xl border border-[#171817]/20 bg-[#f6f5f2] px-3 py-2 text-xs outline-none focus:ring-2 focus:ring-[#e25a45]"
                                    }, void 0, false, {
                                        fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/WardIssueDirectory.tsx",
                                        lineNumber: 640,
                                        columnNumber: 704
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/WardIssueDirectory.tsx",
                                lineNumber: 640,
                                columnNumber: 566
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-end gap-2 pt-2 border-t",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: {
                                            "WardIssueDirectory[<button>.onClick]": ()=>setIsAddModalOpen(false)
                                        }["WardIssueDirectory[<button>.onClick]"],
                                        className: "rounded-xl border border-[#171817]/20 px-4 py-2 text-xs font-semibold text-[#171817] hover:bg-slate-100",
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/WardIssueDirectory.tsx",
                                        lineNumber: 642,
                                        columnNumber: 256
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        className: "rounded-xl bg-[#e25a45] px-4 py-2 text-xs font-bold text-white shadow hover:bg-[#d44833]",
                                        children: "Save & Map Location"
                                    }, void 0, false, {
                                        fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/WardIssueDirectory.tsx",
                                        lineNumber: 644,
                                        columnNumber: 187
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/WardIssueDirectory.tsx",
                                lineNumber: 642,
                                columnNumber: 202
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/WardIssueDirectory.tsx",
                        lineNumber: 634,
                        columnNumber: 155
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/WardIssueDirectory.tsx",
                lineNumber: 632,
                columnNumber: 136
            }, this)
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/WardIssueDirectory.tsx",
            lineNumber: 632,
            columnNumber: 29
        }, this);
        $[36] = customAddress;
        $[37] = customCategory;
        $[38] = customComplaintTitle;
        $[39] = customWardName;
        $[40] = handleAddCustomWard;
        $[41] = isAddModalOpen;
        $[42] = t10;
    } else {
        t10 = $[42];
    }
    let t11;
    if ($[43] !== t10 || $[44] !== t8 || $[45] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute left-4 top-[220px] z-[1000] w-auto max-w-[calc(100vw-2rem)] sm:w-[420px]",
            children: [
                t8,
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/controls/WardIssueDirectory.tsx",
            lineNumber: 657,
            columnNumber: 11
        }, this);
        $[43] = t10;
        $[44] = t8;
        $[45] = t9;
        $[46] = t11;
    } else {
        t11 = $[46];
    }
    return t11;
}
_s(WardIssueDirectory, "ksb/Bduju0a76f90FagoojdMOYU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$MapProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCivicMap"]
    ];
});
_c = WardIssueDirectory;
var _c;
__turbopack_context__.k.register(_c, "WardIssueDirectory");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/react-leaflet/lib/Circle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$LayerGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/react-leaflet/lib/LayerGroup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Marker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/react-leaflet/lib/Marker.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Popup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/react-leaflet/lib/Popup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/react-leaflet/lib/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/leaflet/dist/leaflet-src.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$MapProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/components/maps/MapProvider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const CATEGORY_CONFIG = {
    road_repair: {
        symbol: "🛠️",
        bg: "#dc2626",
        name: "Road Repair"
    },
    roads: {
        symbol: "🛣️",
        bg: "#dc2626",
        name: "Roads & Mobility"
    },
    water_supply: {
        symbol: "💧",
        bg: "#2563eb",
        name: "Water Supply"
    },
    water: {
        symbol: "🚰",
        bg: "#2563eb",
        name: "Drinking Water"
    },
    health_clinic: {
        symbol: "🏥",
        bg: "#16a34a",
        name: "Health Clinic"
    },
    health: {
        symbol: "🚑",
        bg: "#16a34a",
        name: "Healthcare"
    },
    school_infrastructure: {
        symbol: "🏫",
        bg: "#7e22ce",
        name: "School Infrastructure"
    },
    education: {
        symbol: "🎓",
        bg: "#7e22ce",
        name: "Education"
    },
    electricity: {
        symbol: "⚡",
        bg: "#d97706",
        name: "Electricity Grid"
    },
    sanitation: {
        symbol: "🧹",
        bg: "#ea580c",
        name: "Sanitation"
    }
};
function createHotspotIcon(theme = "roads", count) {
    const config = CATEGORY_CONFIG[theme.toLowerCase()] || {
        symbol: "📍",
        bg: "#e25a45",
        name: "Demand Cluster"
    };
    const size = count >= 50 ? 44 : count >= 20 ? 38 : 34;
    return __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].divIcon({
        className: "custom-hotspot-pin",
        html: `
      <div style="
        background: ${config.bg};
        border: 3px solid #ffffff;
        box-shadow: 0 4px 14px rgba(0,0,0,0.45);
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: ${size >= 40 ? "20px" : "16px"};
        color: white;
        cursor: pointer;
        position: relative;
      ">
        ${config.symbol}
        <span style="
          position: absolute;
          top: -6px;
          right: -6px;
          background: #171817;
          border: 1px solid #ffffff;
          border-radius: 50%;
          color: #ffffff;
          font-size: 10px;
          font-weight: 900;
          font-family: monospace;
          padding: 1px 5px;
        ">
          ${count}
        </span>
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
}
function HotspotLayer(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "3d4c65ed6c8834ed8eadb182d5b63d90be5acfa1fd06d9a6579af2c38bf57eb0") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3d4c65ed6c8834ed8eadb182d5b63d90be5acfa1fd06d9a6579af2c38bf57eb0";
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
                const themeKey = (hotspot_0.dominantTheme || "roads").toLowerCase();
                const config = CATEGORY_CONFIG[themeKey] || {
                    symbol: "\uD83D\uDCCD",
                    bg: "#e25a45",
                    name: "Demand Cluster"
                };
                const customIcon = createHotspotIcon(hotspot_0.dominantTheme, hotspot_0.count);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$LayerGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LayerGroup"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Circle"], {
                            center: [
                                hotspot_0.latitude,
                                hotspot_0.longitude
                            ],
                            radius: 500,
                            pathOptions: {
                                color: config.bg,
                                fillColor: config.bg,
                                fillOpacity: 0.12,
                                weight: 2,
                                dashArray: "6,6"
                            }
                        }, void 0, false, {
                            fileName: "[project]/civic-priority-platform/frontend/components/maps/layers/HotspotLayer.tsx",
                            lineNumber: 171,
                            columnNumber: 47
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Marker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Marker"], {
                            position: [
                                hotspot_0.latitude,
                                hotspot_0.longitude
                            ],
                            icon: customIcon,
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
                                        -20
                                    ],
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-0.5 text-xs font-sans",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-bold text-[#171817]",
                                                children: hotspot_0.label ?? "Civic Hotspot"
                                            }, void 0, false, {
                                                fileName: "[project]/civic-priority-platform/frontend/components/maps/layers/HotspotLayer.tsx",
                                                lineNumber: 181,
                                                columnNumber: 104
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] text-muted-foreground",
                                                children: [
                                                    "Theme: ",
                                                    config.name,
                                                    " (",
                                                    hotspot_0.count,
                                                    " reports)"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/civic-priority-platform/frontend/components/maps/layers/HotspotLayer.tsx",
                                                lineNumber: 181,
                                                columnNumber: 184
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/civic-priority-platform/frontend/components/maps/layers/HotspotLayer.tsx",
                                        lineNumber: 181,
                                        columnNumber: 57
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/civic-priority-platform/frontend/components/maps/layers/HotspotLayer.tsx",
                                    lineNumber: 181,
                                    columnNumber: 14
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Popup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popup"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "min-w-[200px] space-y-2.5 font-sans",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-2xl",
                                                        children: config.symbol
                                                    }, void 0, false, {
                                                        fileName: "[project]/civic-priority-platform/frontend/components/maps/layers/HotspotLayer.tsx",
                                                        lineNumber: 181,
                                                        columnNumber: 402
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "font-bold text-sm text-[#171817] line-clamp-1",
                                                                children: hotspot_0.label ?? "Civic Hotspot"
                                                            }, void 0, false, {
                                                                fileName: "[project]/civic-priority-platform/frontend/components/maps/layers/HotspotLayer.tsx",
                                                                lineNumber: 181,
                                                                columnNumber: 456
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-mono text-[10px] uppercase font-bold text-[#e25a45]",
                                                                children: [
                                                                    config.name,
                                                                    " Cluster"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/civic-priority-platform/frontend/components/maps/layers/HotspotLayer.tsx",
                                                                lineNumber: 181,
                                                                columnNumber: 559
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/civic-priority-platform/frontend/components/maps/layers/HotspotLayer.tsx",
                                                        lineNumber: 181,
                                                        columnNumber: 451
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/civic-priority-platform/frontend/components/maps/layers/HotspotLayer.tsx",
                                                lineNumber: 181,
                                                columnNumber: 361
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs space-y-1 border-t pt-2 text-slate-700",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: "Location:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/civic-priority-platform/frontend/components/maps/layers/HotspotLayer.tsx",
                                                                lineNumber: 181,
                                                                columnNumber: 741
                                                            }, this),
                                                            " ",
                                                            hotspot_0.latitude.toFixed(4),
                                                            "° N, ",
                                                            hotspot_0.longitude.toFixed(4),
                                                            "° E"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/civic-priority-platform/frontend/components/maps/layers/HotspotLayer.tsx",
                                                        lineNumber: 181,
                                                        columnNumber: 738
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: "Reports Volume:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/civic-priority-platform/frontend/components/maps/layers/HotspotLayer.tsx",
                                                                lineNumber: 181,
                                                                columnNumber: 846
                                                            }, this),
                                                            " ",
                                                            hotspot_0.count,
                                                            " submissions"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/civic-priority-platform/frontend/components/maps/layers/HotspotLayer.tsx",
                                                        lineNumber: 181,
                                                        columnNumber: 843
                                                    }, this),
                                                    typeof hotspot_0.score === "number" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: "Priority Score:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/civic-priority-platform/frontend/components/maps/layers/HotspotLayer.tsx",
                                                                lineNumber: 181,
                                                                columnNumber: 955
                                                            }, this),
                                                            " ",
                                                            Math.round(hotspot_0.score * 100),
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/civic-priority-platform/frontend/components/maps/layers/HotspotLayer.tsx",
                                                        lineNumber: 181,
                                                        columnNumber: 952
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/civic-priority-platform/frontend/components/maps/layers/HotspotLayer.tsx",
                                                lineNumber: 181,
                                                columnNumber: 674
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/civic-priority-platform/frontend/components/maps/layers/HotspotLayer.tsx",
                                        lineNumber: 181,
                                        columnNumber: 308
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/civic-priority-platform/frontend/components/maps/layers/HotspotLayer.tsx",
                                    lineNumber: 181,
                                    columnNumber: 301
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/civic-priority-platform/frontend/components/maps/layers/HotspotLayer.tsx",
                            lineNumber: 177,
                            columnNumber: 16
                        }, this)
                    ]
                }, hotspot_0.id, true, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/layers/HotspotLayer.tsx",
                    lineNumber: 171,
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
            lineNumber: 192,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/react-leaflet/lib/Circle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Marker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/react-leaflet/lib/Marker.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Popup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/react-leaflet/lib/Popup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/react-leaflet/lib/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/leaflet/dist/leaflet-src.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$MapProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/components/maps/MapProvider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const CATEGORY_CONFIG = {
    road_repair: {
        symbol: "🛠️",
        bg: "#ef4444",
        name: "Road Repair"
    },
    roads: {
        symbol: "🛣️",
        bg: "#ef4444",
        name: "Roads & Mobility"
    },
    water_supply: {
        symbol: "💧",
        bg: "#3b82f6",
        name: "Water Supply"
    },
    water: {
        symbol: "🚰",
        bg: "#3b82f6",
        name: "Drinking Water"
    },
    health_clinic: {
        symbol: "🏥",
        bg: "#10b981",
        name: "Health Clinic"
    },
    health: {
        symbol: "🚑",
        bg: "#10b981",
        name: "Healthcare"
    },
    school_infrastructure: {
        symbol: "🏫",
        bg: "#a855f7",
        name: "School Infrastructure"
    },
    education: {
        symbol: "🎓",
        bg: "#a855f7",
        name: "Education"
    },
    electricity: {
        symbol: "⚡",
        bg: "#f59e0b",
        name: "Electricity Grid"
    },
    sanitation: {
        symbol: "🧹",
        bg: "#f97316",
        name: "Sanitation"
    }
};
function createCategoryIcon(theme = "roads") {
    const config = CATEGORY_CONFIG[theme.toLowerCase()] || {
        symbol: "📍",
        bg: "#e25a45",
        name: "Civic Issue"
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].divIcon({
        className: "custom-category-pin",
        html: `
      <div style="
        background: ${config.bg};
        border: 2px solid #ffffff;
        box-shadow: 0 4px 12px rgba(0,0,0,0.4);
        width: 34px;
        height: 34px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        color: white;
        cursor: pointer;
        transition: transform 0.2s ease;
      ">
        ${config.symbol}
      </div>
    `,
        iconSize: [
            34,
            34
        ],
        iconAnchor: [
            17,
            17
        ]
    });
}
function IssueMarker(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(74);
    if ($[0] !== "a99ada1f20cb1bf154860e847fbab62f25bd22f1c04fc5aedaa064e0a7950208") {
        for(let $i = 0; $i < 74; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a99ada1f20cb1bf154860e847fbab62f25bd22f1c04fc5aedaa064e0a7950208";
    }
    const { issue } = t0;
    const { selectIssue } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$MapProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCivicMap"])();
    const t1 = issue.theme || "roads";
    let t2;
    if ($[1] !== t1) {
        t2 = t1.toLowerCase();
        $[1] = t1;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const themeKey = t2;
    let t3;
    if ($[3] !== themeKey) {
        t3 = CATEGORY_CONFIG[themeKey] || {
            symbol: "\uD83D\uDCCD",
            bg: "#e25a45",
            name: "Civic Issue"
        };
        $[3] = themeKey;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const config = t3;
    let t4;
    if ($[5] !== issue.theme) {
        t4 = createCategoryIcon(issue.theme);
        $[5] = issue.theme;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    const customIcon = t4;
    let t5;
    if ($[7] !== issue.id || $[8] !== selectIssue) {
        t5 = ({
            "IssueMarker[handleSelect]": ()=>{
                selectIssue(issue.id);
            }
        })["IssueMarker[handleSelect]"];
        $[7] = issue.id;
        $[8] = selectIssue;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    const handleSelect = t5;
    let t6;
    if ($[10] !== issue.latitude || $[11] !== issue.longitude) {
        t6 = [
            issue.latitude,
            issue.longitude
        ];
        $[10] = issue.latitude;
        $[11] = issue.longitude;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] !== config.bg) {
        t7 = {
            color: config.bg,
            fillColor: config.bg,
            fillOpacity: 0.15,
            weight: 1.5,
            dashArray: "5,5"
        };
        $[13] = config.bg;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[15] !== t6 || $[16] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Circle"], {
            center: t6,
            radius: 350,
            pathOptions: t7
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/markers/IssueMarker.tsx",
            lineNumber: 193,
            columnNumber: 10
        }, this);
        $[15] = t6;
        $[16] = t7;
        $[17] = t8;
    } else {
        t8 = $[17];
    }
    let t9;
    if ($[18] !== issue.latitude || $[19] !== issue.longitude) {
        t9 = [
            issue.latitude,
            issue.longitude
        ];
        $[18] = issue.latitude;
        $[19] = issue.longitude;
        $[20] = t9;
    } else {
        t9 = $[20];
    }
    let t10;
    if ($[21] !== handleSelect) {
        t10 = {
            click: handleSelect
        };
        $[21] = handleSelect;
        $[22] = t10;
    } else {
        t10 = $[22];
    }
    let t11;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = [
            0,
            -18
        ];
        $[23] = t11;
    } else {
        t11 = $[23];
    }
    const t12 = issue.title ?? "Civic Issue";
    let t13;
    if ($[24] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-bold text-[#171817]",
            children: t12
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/markers/IssueMarker.tsx",
            lineNumber: 229,
            columnNumber: 11
        }, this);
        $[24] = t12;
        $[25] = t13;
    } else {
        t13 = $[25];
    }
    let t14;
    if ($[26] !== config.name) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[10px] text-muted-foreground",
            children: [
                "Category: ",
                config.name
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/markers/IssueMarker.tsx",
            lineNumber: 237,
            columnNumber: 11
        }, this);
        $[26] = config.name;
        $[27] = t14;
    } else {
        t14 = $[27];
    }
    let t15;
    if ($[28] !== t13 || $[29] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
            direction: "top",
            offset: t11,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-0.5 text-xs font-sans",
                children: [
                    t13,
                    t14
                ]
            }, void 0, true, {
                fileName: "[project]/civic-priority-platform/frontend/components/maps/markers/IssueMarker.tsx",
                lineNumber: 245,
                columnNumber: 49
            }, this)
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/markers/IssueMarker.tsx",
            lineNumber: 245,
            columnNumber: 11
        }, this);
        $[28] = t13;
        $[29] = t14;
        $[30] = t15;
    } else {
        t15 = $[30];
    }
    let t16;
    if ($[31] !== config.symbol) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xl",
            children: config.symbol
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/markers/IssueMarker.tsx",
            lineNumber: 254,
            columnNumber: 11
        }, this);
        $[31] = config.symbol;
        $[32] = t16;
    } else {
        t16 = $[32];
    }
    const t17 = issue.title ?? "Civic Issue";
    let t18;
    if ($[33] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "font-bold text-sm text-[#171817] line-clamp-1",
            children: t17
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/markers/IssueMarker.tsx",
            lineNumber: 263,
            columnNumber: 11
        }, this);
        $[33] = t17;
        $[34] = t18;
    } else {
        t18 = $[34];
    }
    let t19;
    if ($[35] !== config.name) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "font-mono text-[10px] uppercase font-bold text-[#e25a45]",
            children: config.name
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/markers/IssueMarker.tsx",
            lineNumber: 271,
            columnNumber: 11
        }, this);
        $[35] = config.name;
        $[36] = t19;
    } else {
        t19 = $[36];
    }
    let t20;
    if ($[37] !== t18 || $[38] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t18,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/markers/IssueMarker.tsx",
            lineNumber: 279,
            columnNumber: 11
        }, this);
        $[37] = t18;
        $[38] = t19;
        $[39] = t20;
    } else {
        t20 = $[39];
    }
    let t21;
    if ($[40] !== t16 || $[41] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t16,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/markers/IssueMarker.tsx",
            lineNumber: 288,
            columnNumber: 11
        }, this);
        $[40] = t16;
        $[41] = t20;
        $[42] = t21;
    } else {
        t21 = $[42];
    }
    let t22;
    if ($[43] !== issue.description) {
        t22 = issue.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-slate-600 bg-slate-50 p-2 rounded border",
            children: issue.description
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/markers/IssueMarker.tsx",
            lineNumber: 297,
            columnNumber: 32
        }, this);
        $[43] = issue.description;
        $[44] = t22;
    } else {
        t22 = $[44];
    }
    let t23;
    if ($[45] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
            children: "Location:"
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/markers/IssueMarker.tsx",
            lineNumber: 305,
            columnNumber: 11
        }, this);
        $[45] = t23;
    } else {
        t23 = $[45];
    }
    let t24;
    if ($[46] !== issue.latitude) {
        t24 = issue.latitude.toFixed(4);
        $[46] = issue.latitude;
        $[47] = t24;
    } else {
        t24 = $[47];
    }
    let t25;
    if ($[48] !== issue.longitude) {
        t25 = issue.longitude.toFixed(4);
        $[48] = issue.longitude;
        $[49] = t25;
    } else {
        t25 = $[49];
    }
    let t26;
    if ($[50] !== t24 || $[51] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: [
                t23,
                " ",
                t24,
                "° N, ",
                t25,
                "° E"
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/markers/IssueMarker.tsx",
            lineNumber: 328,
            columnNumber: 11
        }, this);
        $[50] = t24;
        $[51] = t25;
        $[52] = t26;
    } else {
        t26 = $[52];
    }
    let t27;
    if ($[53] !== issue.source) {
        t27 = issue.source && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "capitalize text-[11px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                    children: "Source:"
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/markers/IssueMarker.tsx",
                    lineNumber: 337,
                    columnNumber: 65
                }, this),
                " ",
                issue.source
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/markers/IssueMarker.tsx",
            lineNumber: 337,
            columnNumber: 27
        }, this);
        $[53] = issue.source;
        $[54] = t27;
    } else {
        t27 = $[54];
    }
    let t28;
    if ($[55] !== issue.timestamp) {
        t28 = issue.timestamp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[11px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                    children: "Reported:"
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/markers/IssueMarker.tsx",
                    lineNumber: 345,
                    columnNumber: 57
                }, this),
                " ",
                issue.timestamp
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/markers/IssueMarker.tsx",
            lineNumber: 345,
            columnNumber: 30
        }, this);
        $[55] = issue.timestamp;
        $[56] = t28;
    } else {
        t28 = $[56];
    }
    let t29;
    if ($[57] !== t26 || $[58] !== t27 || $[59] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-1 text-xs border-t pt-2 text-slate-700",
            children: [
                t26,
                t27,
                t28
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/markers/IssueMarker.tsx",
            lineNumber: 353,
            columnNumber: 11
        }, this);
        $[57] = t26;
        $[58] = t27;
        $[59] = t28;
        $[60] = t29;
    } else {
        t29 = $[60];
    }
    let t30;
    if ($[61] !== t21 || $[62] !== t22 || $[63] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Popup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popup"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-w-[220px] space-y-2.5 font-sans",
                children: [
                    t21,
                    t22,
                    t29
                ]
            }, void 0, true, {
                fileName: "[project]/civic-priority-platform/frontend/components/maps/markers/IssueMarker.tsx",
                lineNumber: 363,
                columnNumber: 18
            }, this)
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/markers/IssueMarker.tsx",
            lineNumber: 363,
            columnNumber: 11
        }, this);
        $[61] = t21;
        $[62] = t22;
        $[63] = t29;
        $[64] = t30;
    } else {
        t30 = $[64];
    }
    let t31;
    if ($[65] !== customIcon || $[66] !== t10 || $[67] !== t15 || $[68] !== t30 || $[69] !== t9) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Marker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Marker"], {
            position: t9,
            icon: customIcon,
            eventHandlers: t10,
            children: [
                t15,
                t30
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/markers/IssueMarker.tsx",
            lineNumber: 373,
            columnNumber: 11
        }, this);
        $[65] = customIcon;
        $[66] = t10;
        $[67] = t15;
        $[68] = t30;
        $[69] = t9;
        $[70] = t31;
    } else {
        t31 = $[70];
    }
    let t32;
    if ($[71] !== t31 || $[72] !== t8) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t8,
                t31
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/markers/IssueMarker.tsx",
            lineNumber: 385,
            columnNumber: 11
        }, this);
        $[71] = t31;
        $[72] = t8;
        $[73] = t32;
    } else {
        t32 = $[73];
    }
    return t32;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/icons/activity.mjs [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/civic-priority-platform/frontend/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-client] (ecmascript) <export default as CheckCircle2>");
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
;
;
function ClusterDetailPanel(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(97);
    if ($[0] !== "775d332b4cd0e23c950ce9f1b566301d1862fc5dfe4e8a83047349b891b7c6cd") {
        for(let $i = 0; $i < 97; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "775d332b4cd0e23c950ce9f1b566301d1862fc5dfe4e8a83047349b891b7c6cd";
    }
    const { cluster, onClose } = t0;
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { selectedClusterId, clearSelection } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$components$2f$maps$2f$MapProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCivicMap"])();
    const [isSanctioned, setIsSanctioned] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
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
    if ($[4] !== router) {
        t2 = ({
            "ClusterDetailPanel[handleSanctionCapex]": ()=>{
                setIsSanctioned(true);
                setTimeout({
                    "ClusterDetailPanel[handleSanctionCapex > setTimeout()]": ()=>{
                        router.push("/priorities");
                    }
                }["ClusterDetailPanel[handleSanctionCapex > setTimeout()]"], 900);
            }
        })["ClusterDetailPanel[handleSanctionCapex]"];
        $[4] = router;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    const handleSanctionCapex = t2;
    let t3;
    if ($[6] !== cluster.priorityScore) {
        t3 = typeof cluster.priorityScore === "number" ? Math.round(cluster.priorityScore * 100) : 85;
        $[6] = cluster.priorityScore;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    const priorityPct = t3;
    const t4 = cluster.totalIssues * 0.08 + 0.4;
    let t5;
    if ($[8] !== t4) {
        t5 = t4.toFixed(1);
        $[8] = t4;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    const estimatedCostCr = t5;
    let t6;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = {
            backgroundColor: "#ffffff"
        };
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    let t8;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-9 w-9 items-center justify-center rounded-xl bg-[#e25a45] text-white shadow",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"], {
                className: "h-5 w-5"
            }, void 0, false, {
                fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                lineNumber: 119,
                columnNumber: 110
            }, this)
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 119,
            columnNumber: 10
        }, this);
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "font-mono text-[10px] uppercase tracking-wider text-[#e25a45]",
            children: "DBSCAN Hotspot Intelligence"
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 120,
            columnNumber: 10
        }, this);
        $[11] = t7;
        $[12] = t8;
    } else {
        t7 = $[11];
        t8 = $[12];
    }
    const t9 = cluster.title ?? "Civic Demand Hotspot";
    let t10;
    if ($[13] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        t8,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-base font-bold tracking-tight text-white line-clamp-1",
                            children: t9
                        }, void 0, false, {
                            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                            lineNumber: 130,
                            columnNumber: 65
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                    lineNumber: 130,
                    columnNumber: 56
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 130,
            columnNumber: 11
        }, this);
        $[13] = t9;
        $[14] = t10;
    } else {
        t10 = $[14];
    }
    let t11;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
            className: "h-5 w-5"
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 138,
            columnNumber: 11
        }, this);
        $[15] = t11;
    } else {
        t11 = $[15];
    }
    let t12;
    if ($[16] !== closePanel) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: closePanel,
            "aria-label": "Close hotspot details",
            className: "rounded-lg p-2 text-white/80 transition hover:bg-white/10 hover:text-white",
            children: t11
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 145,
            columnNumber: 11
        }, this);
        $[16] = closePanel;
        $[17] = t12;
    } else {
        t12 = $[17];
    }
    let t13;
    if ($[18] !== t10 || $[19] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between border-b border-[#171817]/15 bg-[#1c2d1c] px-5 py-4 text-white",
            children: [
                t10,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 153,
            columnNumber: 11
        }, this);
        $[18] = t10;
        $[19] = t12;
        $[20] = t13;
    } else {
        t13 = $[20];
    }
    let t14;
    if ($[21] !== estimatedCostCr || $[22] !== isSanctioned) {
        t14 = isSanctioned && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-xl border border-emerald-300 bg-emerald-50 p-4 space-y-1 text-xs font-sans text-emerald-900 animate-in fade-in slide-in-from-top-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 font-mono font-bold uppercase text-emerald-800",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                            className: "h-4 w-4 text-emerald-600"
                        }, void 0, false, {
                            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                            lineNumber: 162,
                            columnNumber: 271
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "CAPEX Allocation Sanctioned"
                        }, void 0, false, {
                            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                            lineNumber: 162,
                            columnNumber: 324
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                    lineNumber: 162,
                    columnNumber: 183
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-emerald-950 font-medium",
                    children: [
                        "Approved ₹",
                        estimatedCostCr,
                        " Cr for PWD Portfolio Optimization. Redirecting to Priorities Optimization Engine..."
                    ]
                }, void 0, true, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                    lineNumber: 162,
                    columnNumber: 370
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 162,
            columnNumber: 27
        }, this);
        $[21] = estimatedCostCr;
        $[22] = isSanctioned;
        $[23] = t14;
    } else {
        t14 = $[23];
    }
    let t15;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between text-xs text-[#171817]/60",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Report Volume"
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                    lineNumber: 171,
                    columnNumber: 88
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                    className: "h-3.5 w-3.5 text-[#e25a45]"
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                    lineNumber: 171,
                    columnNumber: 114
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 171,
            columnNumber: 11
        }, this);
        $[24] = t15;
    } else {
        t15 = $[24];
    }
    let t16;
    if ($[25] !== cluster.totalIssues) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-1 text-2xl font-black text-[#171817]",
            children: cluster.totalIssues
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 178,
            columnNumber: 11
        }, this);
        $[25] = cluster.totalIssues;
        $[26] = t16;
    } else {
        t16 = $[26];
    }
    let t17;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[10px] font-semibold text-emerald-700",
            children: "↑ 18% from last week"
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 186,
            columnNumber: 11
        }, this);
        $[27] = t17;
    } else {
        t17 = $[27];
    }
    let t18;
    if ($[28] !== t16) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-xl border border-[#171817]/15 bg-[#f6f5f2] p-3.5 shadow-sm",
            children: [
                t15,
                t16,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 193,
            columnNumber: 11
        }, this);
        $[28] = t16;
        $[29] = t18;
    } else {
        t18 = $[29];
    }
    let t19;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between text-xs text-[#171817]/60",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "MCDA Score"
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                    lineNumber: 201,
                    columnNumber: 88
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                    className: "h-3.5 w-3.5 text-[#e25a45]"
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                    lineNumber: 201,
                    columnNumber: 111
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 201,
            columnNumber: 11
        }, this);
        $[30] = t19;
    } else {
        t19 = $[30];
    }
    let t20;
    if ($[31] !== priorityPct) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-1 text-2xl font-black text-[#e25a45]",
            children: [
                priorityPct,
                "%"
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 208,
            columnNumber: 11
        }, this);
        $[31] = priorityPct;
        $[32] = t20;
    } else {
        t20 = $[32];
    }
    let t21;
    if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[10px] font-semibold text-[#171817]/70",
            children: "Transparent MCDA Rank"
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 216,
            columnNumber: 11
        }, this);
        $[33] = t21;
    } else {
        t21 = $[33];
    }
    let t22;
    if ($[34] !== t20) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-xl border border-[#171817]/15 bg-[#f6f5f2] p-3.5 shadow-sm",
            children: [
                t19,
                t20,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 223,
            columnNumber: 11
        }, this);
        $[34] = t20;
        $[35] = t22;
    } else {
        t22 = $[35];
    }
    let t23;
    if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between text-xs text-[#171817]/60",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Affected Population"
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                    lineNumber: 231,
                    columnNumber: 88
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                    className: "h-3.5 w-3.5 text-[#e25a45]"
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                    lineNumber: 231,
                    columnNumber: 120
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 231,
            columnNumber: 11
        }, this);
        $[36] = t23;
    } else {
        t23 = $[36];
    }
    let t24;
    if ($[37] !== cluster.affectedPopulation || $[38] !== cluster.totalIssues) {
        t24 = cluster.affectedPopulation ? cluster.affectedPopulation.toLocaleString() : (cluster.totalIssues * 280).toLocaleString();
        $[37] = cluster.affectedPopulation;
        $[38] = cluster.totalIssues;
        $[39] = t24;
    } else {
        t24 = $[39];
    }
    let t25;
    if ($[40] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-1 text-xl font-bold text-[#171817]",
            children: t24
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 247,
            columnNumber: 11
        }, this);
        $[40] = t24;
        $[41] = t25;
    } else {
        t25 = $[41];
    }
    let t26;
    if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[10px] text-[#171817]/60",
            children: "Ward Census 2011"
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 255,
            columnNumber: 11
        }, this);
        $[42] = t26;
    } else {
        t26 = $[42];
    }
    let t27;
    if ($[43] !== t25) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-xl border border-[#171817]/15 bg-[#f6f5f2] p-3.5 shadow-sm",
            children: [
                t23,
                t25,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 262,
            columnNumber: 11
        }, this);
        $[43] = t25;
        $[44] = t27;
    } else {
        t27 = $[44];
    }
    let t28;
    if ($[45] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between text-xs text-[#171817]/60",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Est. CAPEX"
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                    lineNumber: 270,
                    columnNumber: 88
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$indian$2d$rupee$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IndianRupee$3e$__["IndianRupee"], {
                    className: "h-3.5 w-3.5 text-[#e25a45]"
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                    lineNumber: 270,
                    columnNumber: 111
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 270,
            columnNumber: 11
        }, this);
        $[45] = t28;
    } else {
        t28 = $[45];
    }
    let t29;
    if ($[46] !== estimatedCostCr) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-1 text-xl font-bold text-[#171817]",
            children: [
                "₹",
                estimatedCostCr,
                " Cr"
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 277,
            columnNumber: 11
        }, this);
        $[46] = estimatedCostCr;
        $[47] = t29;
    } else {
        t29 = $[47];
    }
    let t30;
    if ($[48] === Symbol.for("react.memo_cache_sentinel")) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[10px] font-semibold text-emerald-700",
            children: "ROI 2.4x Benefit"
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 285,
            columnNumber: 11
        }, this);
        $[48] = t30;
    } else {
        t30 = $[48];
    }
    let t31;
    if ($[49] !== t29) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-xl border border-[#171817]/15 bg-[#f6f5f2] p-3.5 shadow-sm",
            children: [
                t28,
                t29,
                t30
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 292,
            columnNumber: 11
        }, this);
        $[49] = t29;
        $[50] = t31;
    } else {
        t31 = $[50];
    }
    let t32;
    if ($[51] !== t18 || $[52] !== t22 || $[53] !== t27 || $[54] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 gap-3 font-sans",
            children: [
                t18,
                t22,
                t27,
                t31
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 300,
            columnNumber: 11
        }, this);
        $[51] = t18;
        $[52] = t22;
        $[53] = t27;
        $[54] = t31;
        $[55] = t32;
    } else {
        t32 = $[55];
    }
    let t33;
    if ($[56] === Symbol.for("react.memo_cache_sentinel")) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between border-b border-[#171817]/10 pb-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "font-mono text-xs font-bold uppercase tracking-wider text-[#171817]",
                    children: "MCDA Weight Breakdown"
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                    lineNumber: 311,
                    columnNumber: 96
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-mono text-[10px] text-[#e25a45] font-semibold",
                    children: "4-Factor Model"
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                    lineNumber: 311,
                    columnNumber: 206
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 311,
            columnNumber: 11
        }, this);
        $[56] = t33;
    } else {
        t33 = $[56];
    }
    let t34;
    if ($[57] === Symbol.for("react.memo_cache_sentinel")) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between text-[11px] mb-1",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Population Impact (40%)"
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                    lineNumber: 318,
                    columnNumber: 66
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-bold",
                    children: "92/100"
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                    lineNumber: 318,
                    columnNumber: 102
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 318,
            columnNumber: 11
        }, this);
        $[57] = t34;
    } else {
        t34 = $[57];
    }
    let t35;
    if ($[58] === Symbol.for("react.memo_cache_sentinel")) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t34,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-1.5 w-full rounded-full bg-slate-200",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-1.5 rounded-full bg-[#e25a45]",
                        style: {
                            width: "92%"
                        }
                    }, void 0, false, {
                        fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                        lineNumber: 325,
                        columnNumber: 77
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                    lineNumber: 325,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 325,
            columnNumber: 11
        }, this);
        $[58] = t35;
    } else {
        t35 = $[58];
    }
    let t36;
    if ($[59] === Symbol.for("react.memo_cache_sentinel")) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between text-[11px] mb-1",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Citizen Urgency (30%)"
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                    lineNumber: 334,
                    columnNumber: 66
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-bold",
                    children: "85/100"
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                    lineNumber: 334,
                    columnNumber: 100
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 334,
            columnNumber: 11
        }, this);
        $[59] = t36;
    } else {
        t36 = $[59];
    }
    let t37;
    if ($[60] === Symbol.for("react.memo_cache_sentinel")) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t36,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-1.5 w-full rounded-full bg-slate-200",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-1.5 rounded-full bg-[#e25a45]",
                        style: {
                            width: "85%"
                        }
                    }, void 0, false, {
                        fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                        lineNumber: 341,
                        columnNumber: 77
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                    lineNumber: 341,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 341,
            columnNumber: 11
        }, this);
        $[60] = t37;
    } else {
        t37 = $[60];
    }
    let t38;
    if ($[61] === Symbol.for("react.memo_cache_sentinel")) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between text-[11px] mb-1",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Cost-Effectiveness (20%)"
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                    lineNumber: 350,
                    columnNumber: 66
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-bold",
                    children: "78/100"
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                    lineNumber: 350,
                    columnNumber: 103
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 350,
            columnNumber: 11
        }, this);
        $[61] = t38;
    } else {
        t38 = $[61];
    }
    let t39;
    if ($[62] === Symbol.for("react.memo_cache_sentinel")) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t38,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-1.5 w-full rounded-full bg-slate-200",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-1.5 rounded-full bg-emerald-600",
                        style: {
                            width: "78%"
                        }
                    }, void 0, false, {
                        fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                        lineNumber: 357,
                        columnNumber: 77
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                    lineNumber: 357,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 357,
            columnNumber: 11
        }, this);
        $[62] = t39;
    } else {
        t39 = $[62];
    }
    let t40;
    if ($[63] === Symbol.for("react.memo_cache_sentinel")) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between text-[11px] mb-1",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Development Plan Alignment (10%)"
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                    lineNumber: 366,
                    columnNumber: 66
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-bold",
                    children: "70/100"
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                    lineNumber: 366,
                    columnNumber: 111
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 366,
            columnNumber: 11
        }, this);
        $[63] = t40;
    } else {
        t40 = $[63];
    }
    let t41;
    if ($[64] === Symbol.for("react.memo_cache_sentinel")) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "rounded-xl border border-[#171817]/15 bg-[#f9f8f5] p-4 space-y-3 font-sans",
            children: [
                t33,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2 text-xs",
                    children: [
                        t35,
                        t37,
                        t39,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                t40,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-1.5 w-full rounded-full bg-slate-200",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-1.5 rounded-full bg-blue-600",
                                        style: {
                                            width: "70%"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                                        lineNumber: 373,
                                        columnNumber: 228
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                                    lineNumber: 373,
                                    columnNumber: 172
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                            lineNumber: 373,
                            columnNumber: 162
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                    lineNumber: 373,
                    columnNumber: 112
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 373,
            columnNumber: 11
        }, this);
        $[64] = t41;
    } else {
        t41 = $[64];
    }
    let t42;
    if ($[65] === Symbol.for("react.memo_cache_sentinel")) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 font-mono text-[11px] font-bold text-amber-900 uppercase",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"], {
                    className: "h-4 w-4 text-amber-600"
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                    lineNumber: 382,
                    columnNumber: 109
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Perception vs Municipal Ground Truth"
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                    lineNumber: 382,
                    columnNumber: 159
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 382,
            columnNumber: 11
        }, this);
        $[65] = t42;
    } else {
        t42 = $[65];
    }
    let t43;
    if ($[66] === Symbol.for("react.memo_cache_sentinel")) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
            children: "Citizen Perception:"
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 389,
            columnNumber: 11
        }, this);
        $[66] = t43;
    } else {
        t43 = $[66];
    }
    let t44;
    let t45;
    if ($[67] === Symbol.for("react.memo_cache_sentinel")) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 397,
            columnNumber: 11
        }, this);
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
            children: "Municipal Record:"
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 398,
            columnNumber: 11
        }, this);
        $[67] = t44;
        $[68] = t45;
    } else {
        t44 = $[67];
        t45 = $[68];
    }
    let t46;
    if ($[69] !== cluster.totalIssues) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-amber-950 leading-relaxed font-medium",
            children: [
                t43,
                " ",
                cluster.totalIssues,
                " reports of severe infrastructure deficit.",
                t44,
                t45,
                " PWD Repair Sanction Brief #8821 active in Khordha Block."
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 407,
            columnNumber: 11
        }, this);
        $[69] = cluster.totalIssues;
        $[70] = t46;
    } else {
        t46 = $[70];
    }
    let t47;
    if ($[71] === Symbol.for("react.memo_cache_sentinel")) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between pt-1 font-mono text-[10px] text-amber-800",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Status: Action & Comm Gap"
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                    lineNumber: 415,
                    columnNumber: 104
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-bold",
                    children: "Confidence: 94%"
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                    lineNumber: 415,
                    columnNumber: 146
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 415,
            columnNumber: 11
        }, this);
        $[71] = t47;
    } else {
        t47 = $[71];
    }
    let t48;
    if ($[72] !== t46) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "rounded-xl border border-amber-300 bg-amber-50/80 p-4 space-y-2 text-xs font-sans",
            children: [
                t42,
                t46,
                t47
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 422,
            columnNumber: 11
        }, this);
        $[72] = t46;
        $[73] = t48;
    } else {
        t48 = $[73];
    }
    let t49;
    if ($[74] !== cluster.submissions) {
        t49 = cluster.submissions && cluster.submissions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "space-y-3 font-sans",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "font-mono text-xs font-bold uppercase tracking-wider text-[#171817]",
                    children: "Representative Vernacular Submissions"
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                    lineNumber: 430,
                    columnNumber: 109
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: cluster.submissions.map(_ClusterDetailPanelClusterSubmissionsMap)
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                    lineNumber: 430,
                    columnNumber: 235
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 430,
            columnNumber: 68
        }, this);
        $[74] = cluster.submissions;
        $[75] = t49;
    } else {
        t49 = $[75];
    }
    let t50;
    if ($[76] !== t14 || $[77] !== t32 || $[78] !== t48 || $[79] !== t49) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 overflow-y-auto p-5 space-y-6 bg-white text-[#171817]",
            children: [
                t14,
                t32,
                t41,
                t48,
                t49
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 438,
            columnNumber: 11
        }, this);
        $[76] = t14;
        $[77] = t32;
        $[78] = t48;
        $[79] = t49;
        $[80] = t50;
    } else {
        t50 = $[80];
    }
    let t51;
    if ($[81] === Symbol.for("react.memo_cache_sentinel")) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 449,
            columnNumber: 11
        }, this);
        $[81] = t51;
    } else {
        t51 = $[81];
    }
    let t52;
    if ($[82] !== closePanel) {
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: closePanel,
            className: "flex items-center justify-center gap-2 rounded-xl border border-[#171817]/20 bg-white px-3 py-2.5 text-xs font-bold text-[#171817] shadow-sm transition hover:bg-slate-100",
            children: [
                t51,
                "Close Panel"
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 456,
            columnNumber: 11
        }, this);
        $[82] = closePanel;
        $[83] = t52;
    } else {
        t52 = $[83];
    }
    const t53 = `flex items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-xs font-bold text-white shadow transition ${isSanctioned ? "bg-emerald-600" : "bg-[#e25a45] hover:bg-[#d44833]"}`;
    let t54;
    if ($[84] !== isSanctioned) {
        t54 = isSanctioned ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                    className: "h-4 w-4"
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                    lineNumber: 465,
                    columnNumber: 28
                }, this),
                "Sanctioned ✓"
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 465,
            columnNumber: 26
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                    className: "h-4 w-4"
                }, void 0, false, {
                    fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                    lineNumber: 465,
                    columnNumber: 84
                }, this),
                "Sanction CAPEX"
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 465,
            columnNumber: 82
        }, this);
        $[84] = isSanctioned;
        $[85] = t54;
    } else {
        t54 = $[85];
    }
    let t55;
    if ($[86] !== handleSanctionCapex || $[87] !== t53 || $[88] !== t54) {
        t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: handleSanctionCapex,
            className: t53,
            children: t54
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 473,
            columnNumber: 11
        }, this);
        $[86] = handleSanctionCapex;
        $[87] = t53;
        $[88] = t54;
        $[89] = t55;
    } else {
        t55 = $[89];
    }
    let t56;
    if ($[90] !== t52 || $[91] !== t55) {
        t56 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border-t border-[#171817]/15 bg-[#eeede9] p-4 font-sans",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-3",
                children: [
                    t52,
                    t55
                ]
            }, void 0, true, {
                fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                lineNumber: 483,
                columnNumber: 84
            }, this)
        }, void 0, false, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 483,
            columnNumber: 11
        }, this);
        $[90] = t52;
        $[91] = t55;
        $[92] = t56;
    } else {
        t56 = $[92];
    }
    let t57;
    if ($[93] !== t13 || $[94] !== t50 || $[95] !== t56) {
        t57 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
            className: "absolute right-0 top-0 z-[1100] flex h-full w-full sm:max-w-md flex-col border-l border-[#171817]/20 bg-white text-[#171817] dark:bg-[#171817] dark:text-[#eeede9] shadow-2xl opacity-100",
            style: t6,
            children: [
                t13,
                t50,
                t56
            ]
        }, void 0, true, {
            fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
            lineNumber: 492,
            columnNumber: 11
        }, this);
        $[93] = t13;
        $[94] = t50;
        $[95] = t56;
        $[96] = t57;
    } else {
        t57 = $[96];
    }
    return t57;
}
_s(ClusterDetailPanel, "q+Sh9uWTX4LIfAI/0pK5TsNkqF8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
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
                lineNumber: 503,
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
                        lineNumber: 503,
                        columnNumber: 275
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: submission.timestamp || "Verified PWA"
                    }, void 0, false, {
                        fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                        lineNumber: 503,
                        columnNumber: 356
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
                lineNumber: 503,
                columnNumber: 179
            }, this)
        ]
    }, submission.id, true, {
        fileName: "[project]/civic-priority-platform/frontend/components/maps/panels/ClusterDetailPanel.tsx",
        lineNumber: 503,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "ClusterDetailPanel");
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
const API_BASE = __TURBOPACK__imported__module__$5b$project$5d2f$civic$2d$priority$2d$platform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
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

//# sourceMappingURL=civic-priority-platform_frontend_0y5lxuc._.js.map