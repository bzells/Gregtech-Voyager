const WorldGenLayers = Java.loadClass("com.gregtechceu.gtceu.api.data.worldgen.WorldGenLayers")
GTCEuServerEvents.oreVeins((event) => {
    event.remove("gtceu:bauxite_vein")
    event.remove("gtceu:ilmenite_vein")
    event.remove("gtceu:mica_vein")
    event.remove("gtceu:naquadah_vein")
    event.remove("gtceu:scheelite_vein")
    event.remove("gtceu:sheldonite_vein")

    /** @type {Record<string, $IWorldGenLayer_ | string>} */
    const dimToLayer = {
        "minecraft:overworld": "stone",
        "minecraft:the_end": WorldGenLayers.ENDSTONE,
        "minecraft:the_nether": WorldGenLayers.NETHERRACK,
        "twilightforest:twilight_forest": "twilightforest",
        "ad_astra:moon": "moon",
        "ad_astra:mars": "mars",
        "ad_astra:mercury": "mercury"
    }

    /** @typedef {[number, string, [number, number]]} LayerTuple */

    /**
     * @typedef {Object} VeinConfig
     * @property {number} weight
     * @property {number} density
     * @property {number} clusterSize
     * @property {string|$IWorldGenLayer_} layer
     * @property {string} dimension
     * @property {[number, number]} heightRange
     * @property {string|$Material_} [surfaceRock]
     * @property {"above"|"below"} [surfacePlacement] - defaults to above
     */

    /**  @typedef {VeinConfig & { layers: LayerTuple[] }} LayeredVeinConfig */

    /**
     * @typedef {Object} CuboidFace
     * @property {string|$Material_} mat
     * @property {number} [size]
     */

    /** @typedef {VeinConfig & { top: CuboidFace, middle: CuboidFace, bottom: CuboidFace, spread: CuboidFace }} CuboidVeinConfig */

    /**
     * @param {$GTOreDefinition_} vein
     * @param {VeinConfig} cfg
     */
    function setupVein(vein, { weight, density, clusterSize, layer, dimension, heightRange }) {
        vein.weight(weight)
        vein.density(density)
        vein.clusterSize(clusterSize)
        //@ts-expect-error Kube shenanigans
        vein.layer(layer)
        vein.dimensions(dimension)
        vein.heightRangeUniform(heightRange[0], heightRange[1])
    }

    /**
     * Does nothing if cfg.surfaceRock is fasly
     * @param {$GTOreDefinition_} vein
     * @param {VeinConfig} cfg
     */
    function applySurfaceRock(vein, cfg) {
        if (!cfg.surfaceRock) return
        vein.surfaceIndicatorGenerator((/** @type {$SurfaceIndicatorGenerator_} */ ind) =>
            // @ts-expect-error idk why it doesnt catch the undefined check (undefined is falsy)
            ind.surfaceRock(cfg.surfaceRock).placement(cfg.surfacePlacement ?? "above")
        )
    }

    /**
     * @param {string} key
     * @param {LayeredVeinConfig} cfg
     */
    function addMatVein(key, cfg) {
        // indredibly nested buy idunno
        event.add(key, (/** @type {$GTOreDefinition_} */ vein) => {
            setupVein(vein, cfg)
            vein.layeredVeinGenerator((/** @type {$LayeredVeinGenerator_} */ generator) =>
                generator.buildLayerPattern((/** @type {$GTLayerPattern$Builder_} */ pattern) =>
                    cfg.layers.reduce((p, [w, mat, size]) => p.layer((/** @type {*} */ l) => l.weight(w).mat(mat).size(size[0], size[1])), pattern)
                )
            )
            applySurfaceRock(vein, cfg)
        })
    }

    /**
     * @param {string} key
     * @param {LayeredVeinConfig} cfg
     */
    function addBlockVein(key, cfg) {
        event.add(key, (/** @type {$GTOreDefinition_} */ vein) => {
            setupVein(vein, cfg)
            vein.layeredVeinGenerator((/** @type {$LayeredVeinGenerator_} */ generator) =>
                generator.buildLayerPattern((/** @type {$GTLayerPattern$Builder_} */ pattern) =>
                    cfg.layers.reduce(
                        (p, [w, blockId, size]) =>
                            p.layer((/** @type {*} */ l) =>
                                l
                                    .weight(w)
                                    .state(() => Block.getBlock(blockId).defaultBlockState())
                                    .size(size[0], size[1])
                            ),
                        pattern
                    )
                )
            )
            applySurfaceRock(vein, cfg)
        })
    }

    /**
     * @param {string} key
     * @param {CuboidVeinConfig} cfg
     */
    function addCuboidVein(key, cfg) {
        event.add(
            key,
            /** @param {$GTOreDefinition_} vein */
            (vein) => {
                setupVein(vein, cfg)
                vein.cuboidVeinGenerator(
                    /** @param {$CuboidVeinGenerator_} generator */
                    (generator) =>
                        generator
                            //@ts-expect-error
                            .top((b) => b.mat(cfg.top.mat).size(cfg.top.size))
                            //@ts-expect-error
                            .middle((b) => b.mat(cfg.middle.mat).size(cfg.middle.size))
                            //@ts-expect-error
                            .bottom((b) => b.mat(cfg.bottom.mat).size(cfg.bottom.size))
                            //@ts-expect-error
                            .spread((b) => b.mat(cfg.spread.mat))
                )
                applySurfaceRock(vein, cfg)
            }
        )
    }

    /**
     * @typedef {Object} MarsOreConfig
     * @property {string} material
     * @property {number} weight
     * @property {number} density
     * @property {number} clusterSize
     * @property {string[]} mats - 3 or 4 long
     * @property {boolean} dense
     * @property {[number, number]} [heightRange] - default [-64, 200]
     */

    /**
     * @param {MarsOreConfig} cfg
     */
    function addMarsVein({ material, weight, density, clusterSize, mats, dense, heightRange }) {
        if (!heightRange) {
            heightRange = [-64, 200]
        }
        const dimension = "ad_astra:mars"
        const layer = dimToLayer[dimension]
        const gt = (/** @type {string} */ m) => `gtceu:${m}`
        const matIndex = mats.length == 3 ? [0, 1, 2, 0] : [0, 1, 2, 3]
        const weights = [1, 2, 3, 3]
        /** @type {[number,number][]}*/
        const standardSizes =
            mats.length == 3
                ? [
                      [1, 1],
                      [1, 3],
                      [1, 1],
                      [1, 2]
                  ]
                : [
                      [1, 2],
                      [1, 3],
                      [1, 2],
                      [1, 3]
                  ]
        /** @type {[number,number][]}*/
        const denseSizes = [
            [3, 5],
            [3, 5],
            [2, 6],
            [3, 5]
        ]

        /** @param {[number, number][]} sizes @returns {LayerTuple[]} */
        const buildLayers = (sizes) => matIndex.map((mi, i) => [weights[i], gt(mats[mi]), sizes[i]])

        addMatVein(`mars/${material}`, {
            weight: weight,
            density: density,
            clusterSize: clusterSize,
            layer: layer,
            dimension: dimension,
            heightRange: heightRange,
            layers: buildLayers(standardSizes)
        })

        if (dense) {
            addMatVein(`mars/${material}/dense`, {
                weight: Math.ceil(weight / 10),
                density: density,
                clusterSize: Math.ceil(clusterSize * 1.75),
                layer: layer,
                dimension: dimension,
                heightRange: heightRange,
                layers: buildLayers(denseSizes)
            })
        }
    }


    function addOWVein({ material, weight, density, clusterSize, mats, dense, heightRange }) {
        if (!heightRange) {
            heightRange = [-64, 200]
        }
        const dimension = "minecraft:overworld"
        const layer = dimToLayer[dimension]
        const gt = (/** @type {string} */ m) => `gtceu:${m}`
        const matIndex = mats.length == 3 ? [0, 1, 2, 0] : [0, 1, 2, 3]
        const weights = [1, 2, 3, 3]
        /** @type {[number,number][]}*/
        const standardSizes =
            mats.length == 3
                ? [
                      [1, 1],
                      [1, 3],
                      [1, 1],
                      [1, 2]
                  ]
                : [
                      [1, 2],
                      [1, 3],
                      [1, 2],
                      [1, 3]
                  ]
        /** @type {[number,number][]}*/
        const denseSizes = [
            [3, 5],
            [3, 5],
            [2, 6],
            [3, 5]
        ]

        /** @param {[number, number][]} sizes @returns {LayerTuple[]} */
        const buildLayers = (sizes) => matIndex.map((mi, i) => [weights[i], gt(mats[mi]), sizes[i]])

        addMatVein(`ow/${material}`, {
            weight: weight,
            density: density,
            clusterSize: clusterSize,
            layer: layer,
            dimension: dimension,
            heightRange: heightRange,
            layers: buildLayers(standardSizes)
        })

        if (dense) {
            addMatVein(`ow/${material}/dense`, {
                weight: Math.ceil(weight / 10),
                density: density,
                clusterSize: Math.ceil(clusterSize * 1.75),
                layer: layer,
                dimension: dimension,
                heightRange: heightRange,
                layers: buildLayers(denseSizes)
            })
        }
    }

    function addTFVein({ material, weight, density, clusterSize, mats, dense, heightRange }) {
        if (!heightRange) {
            heightRange = [-45, 5]
        }
        const dimension = "twilightforest:twilight_forest"
        const layer = dimToLayer[dimension]
        const gt = (/** @type {string} */ m) => `gtceu:${m}`
        const matIndex = mats.length == 3 ? [0, 1, 2, 0] : [0, 1, 2, 3]
        const weights = [1, 2, 3, 3]
        /** @type {[number,number][]}*/
        const standardSizes =
            mats.length == 3
                ? [
                      [1, 1],
                      [1, 3],
                      [1, 1],
                      [1, 2]
                  ]
                : [
                      [1, 2],
                      [1, 3],
                      [1, 2],
                      [1, 3]
                  ]
        /** @type {[number,number][]}*/
        const denseSizes = [
            [3, 5],
            [3, 5],
            [2, 6],
            [3, 5]
        ]

        /** @param {[number, number][]} sizes @returns {LayerTuple[]} */
        const buildLayers = (sizes) => matIndex.map((mi, i) => [weights[i], gt(mats[mi]), sizes[i]])

        addMatVein(`twilightforest/${material}`, {
            weight: weight,
            density: density,
            clusterSize: clusterSize,
            layer: layer,
            dimension: dimension,
            heightRange: heightRange,
            layers: buildLayers(standardSizes)
        })

        if (dense) {
            addMatVein(`twilightforest/${material}/dense`, {
                weight: Math.ceil(weight / 10),
                density: density,
                clusterSize: Math.ceil(clusterSize * 1.75),
                layer: layer,
                dimension: dimension,
                heightRange: heightRange,
                layers: buildLayers(denseSizes)
            })
        }
    }
    //tf

    const tfOres =
    [
        { material: "source", weight: 5, density: 0.3, clusterSize: 25, mats: ["source", "lapis", "amethyst", "lazurite"], dense: true },
        { material: "nickel", weight: 15, density: 0.3, clusterSize: 25, mats: ["nickel", "garnierite", "cobaltite", "garnierite"], dense: true },
        { material: "nickel/dense", weight: 1, density: 0.6, clusterSize: 50, mats: ["nickel", "chromite", "nickel", "chromite"], dense: false },
        { material: "silver", weight: 15, density: 0.3, clusterSize: 25, mats: ["lead", "galena", "silver", "silver"], dense: true },
        { material: "gem/cool", weight: 10, density: 0.3, clusterSize: 25, mats: ["diamond", "sapphire", "emerald", "opal"], dense: true },
        { material: "gem/warm", weight: 10, density: 0.3, clusterSize: 25, mats: ["ruby", "realgar", "topaz", "ruby"], dense: true },
        { material: "red", weight: 15, density: 0.3, clusterSize: 25, mats: ["ruby", "redstone", "cinnabar", "redstone"], dense: true },
        { material: "blue", weight: 15, density: 0.3, clusterSize: 25, mats: ["lapis", "lazurite", "sapphire", "lapis"], dense: true },
        { material: "yellow", weight: 15, density: 0.3, clusterSize: 25, mats: ["sphalerite", "topaz", "zinc", "gold"], dense: true },
        { material: "magnetite", weight: 60, density: 0.3, clusterSize: 30, mats: ["magnetite", "gold", "vanadium_magnetite", "magnetite"], dense: true },
        { material: "pitchblende", weight: 10, density: 0.3, clusterSize: 25, mats: ["pitchblende", "pitchblende", "pitchblende", "uraninite"], dense: true },
    ]

    //ow

    const overworldOres = 
    [
        { material: "mica", weight: 2, density: 0.3, clusterSize: 45, mats: ["kyanite", "mica", "lepidolite", "mica"], dense: true }
    ]

    // mars ores

    /** @type {MarsOreConfig[]} */
    const marsOres = [
        { material: "ostrite", weight: 10, density: 0.3, clusterSize: 25, mats: ["ostrite", "scheelite", "amethyst", "palladium"], dense: true },
        { material: "tungstate", weight: 10, density: 0.4, clusterSize: 30, mats: ["tungstate", "scheelite", "tungstate"], dense: true },
        { material: "bauxite", weight: 35, density: 0.7, clusterSize: 35, mats: ["bauxite", "aluminium", "bauxite"], dense: false },
        { material: "ilmenite", weight: 15, density: 0.3, clusterSize: 35, mats: ["ilmenite", "ilmenite", "ilmenite"], dense: true },
        { material: "magnetite", weight: 45, density: 0.7, clusterSize: 45, mats: ["hematite", "hematite", "gold", "hematite"], dense: false },
        { material: "garnierite", weight: 35, density: 0.7, clusterSize: 35, mats: ["pentlandite", "cobaltite", "garnierite"], dense: false },
        { material: "sulfur", weight: 20, density: 0.8, clusterSize: 45, mats: ["sulfur", "sphalerite", "pyrite"], dense: false },
        { material: "uraninite", weight: 25, density: 0.4, clusterSize: 25, mats: ["uraninite", "pitchblende", "uraninite"], dense: false },
        { material: "plutonium", weight: 10, density: 0.4, clusterSize: 30, mats: ["uraninite", "plutonium", "uraninite"], dense: true },
        { material: "electrotine", weight: 35, density: 0.9, clusterSize: 30, mats: ["electrotine", "gold", "redstone", "silver"], dense: false },
        { material: "cooperite", weight: 5, density: 0.4, clusterSize: 40, mats: ["platinum", "bornite", "platinum", "cooperite"], dense: false },
        { material: "dalumite", weight: 15, density: 0.3, clusterSize: 45, heightRange: [-64, 100], mats: ["dalumite", "ilmenite", "graphite"], dense: true }
    ]

    marsOres.forEach(addMarsVein)
    overworldOres.forEach(addOWVein)
    tfOres.forEach(addTFVein)

    // overworld ores

    // addCuboidVein("overworld/mica", {
    //     weight: 5,
    //     density: 0.3,
    //     clusterSize: 45,
    //     layer: "stone",
    //     dimension: "minecraft:overworld",
    //     heightRange: [20, 90],
    //     top: { mat: GTMaterials.Kyanite, size: 1 },
    //     middle: { mat: GTMaterials.Mica, size: 3 },
    //     bottom: { mat: GTMaterials.Lepidolite, size: 2 },
    //     spread: { mat: GTMaterials.Mica },
    //     surfaceRock: GTMaterials.Mica
    // })

    // addBlockVein("overworld/dense/mica", {
    //     weight: 2,
    //     density: 0.8,
    //     clusterSize: 45,
    //     layer: "stone",
    //     dimension: "minecraft:overworld",
    //     heightRange: [-45, 5],
    //     layers: [
    //         [2, "gtceu:mica_ore", [3, 6]],
    //         [2, "gtceu:kyanite_ore", [2, 4]],
    //         [1, "gtceu:mica_ore", [2, 4]]
    //     ]
    // })



    // moon ores

    addCuboidVein("moon/bauxite", {
        weight: 15,
        density: 0.8,
        clusterSize: 50,
        layer: "moon",
        dimension: "ad_astra:moon",
        heightRange: [0, 200],
        top: { mat: "gtceu:bauxite", size: 5 },
        middle: { mat: GTMaterials.Bauxite, size: 5 },
        bottom: { mat: GTMaterials.Aluminium, size: 2 },
        spread: { mat: GTMaterials.Bauxite },
        surfaceRock: GTMaterials.Bauxite
    })

    addCuboidVein("moon/ilmenite", {
        weight: 15,
        density: 0.8,
        clusterSize: 55,
        layer: "moon",
        dimension: "ad_astra:moon",
        heightRange: [0, 200],
        top: { mat: "gtceu:bauxite", size: 5 },
        middle: { mat: GTMaterials.Ilmenite, size: 5 },
        bottom: { mat: GTMaterials.Ilmenite, size: 7 },
        spread: { mat: GTMaterials.Bauxite },
        surfaceRock: GTMaterials.Ilmenite
    })

    addCuboidVein("moon/neodymium", {
        weight: 25,
        density: 0.8,
        clusterSize: 45,
        layer: "moon",
        dimension: "ad_astra:moon",
        heightRange: [0, 200],
        top: { mat: GTMaterials.Neodymium, size: 5 },
        middle: { mat: GTMaterials.Bastnasite, size: 3 },
        bottom: { mat: GTMaterials.Monazite, size: 2 },
        spread: { mat: GTMaterials.Neodymium },
        surfaceRock: GTMaterials.Neodymium
    })

    /** @type {(LayeredVeinConfig & { key: string })[]} */
    const moonMatOres = [
        {
            key: "moon/glunite",
            weight: 30,
            density: 0.3,
            clusterSize: 30,
            heightRange: [0, 200],
            layers: [
                [1, "gtceu:glunite", [1, 2]],
                [3, "gtceu:lapis", [1, 4]],
                [3, "gtceu:glunite", [1, 2]],
                [2, "gtceu:lunite", [1, 1]]
            ],
            surfaceRock: "gtceu:glunite",
            layer: "moon",
            dimension: "ad_astra:moon"
        },
        {
            // Note: reuses the glunite surface rock, matching the original script.
            key: "moon/chromite",
            weight: 10,
            density: 0.3,
            clusterSize: 30,
            heightRange: [0, 200],
            layers: [
                [1, "gtceu:magnetite", [1, 2]],
                [3, "gtceu:chromite", [1, 4]],
                [3, "gtceu:gold", [1, 2]],
                [2, "gtceu:chromite", [1, 1]]
            ],
            surfaceRock: "gtceu:glunite",
            layer: "moon",
            dimension: "ad_astra:moon"
        },
        {
            key: "moon/dense/magnetite",
            weight: 20,
            density: 1,
            clusterSize: 50,
            heightRange: [-45, 200],
            layers: [
                [1, "gtceu:magnetite", [3, 4]],
                [3, "gtceu:vanadium_magnetite", [1, 4]],
                [3, "gtceu:gold", [3, 4]],
                [2, "gtceu:silver", [2, 4]]
            ],
            layer: "moon",
            dimension: "ad_astra:moon"
        },
        {
            key: "moon/magnesite",
            weight: 20,
            density: 0.3,
            clusterSize: 40,
            heightRange: [-45, 200],
            layers: [
                [1, "gtceu:iron", [1, 2]],
                [3, "gtceu:magnesite", [1, 4]],
                [3, "gtceu:calcite", [1, 3]],
                [2, "gtceu:bentonite", [1, 3]]
            ],
            layer: "moon",
            dimension: "ad_astra:moon"
        },
        {
            key: "moon/bornite",
            weight: 15,
            density: 0.3,
            clusterSize: 30,
            heightRange: [0, 200],
            layers: [
                [3, "gtceu:tetrahedrite", [1, 2]],
                [2, "gtceu:bornite", [1, 1]],
                [1, "gtceu:bornite", [1, 1]],
                [2, "gtceu:tetrahedrite", [1, 1]]
            ],
            surfaceRock: "gtceu:bornite",
            layer: "moon",
            dimension: "ad_astra:moon"
        },
        {
            key: "moon/socochalamite",
            weight: 25,
            density: 0.3,
            clusterSize: 30,
            heightRange: [0, 200],
            layers: [
                [1, "gtceu:socochalamite", [1, 2]],
                [3, "gtceu:amethyst", [1, 2]],
                [3, "gtceu:socochalamite", [1, 2]],
                [2, "gtceu:glunite", [1, 1]]
            ],
            surfaceRock: "gtceu:socochalamite",
            layer: "moon",
            dimension: "ad_astra:moon"
        }
    ]

    moonMatOres.forEach((cfg) => addMatVein(cfg.key, cfg))

    // end ores
    addMatVein("end/plutonium", {
        weight: 10,
        density: 0.1,
        clusterSize: 60,
        layer: WorldGenLayers.ENDSTONE,
        dimension: "minecraft:the_end",
        heightRange: [20, 60],
        layers: [
            [1, "gtceu:plutonium", [1, 2]],
            [5, "gtceu:chromite", [2, 4]],
            [2, "gtceu:plutonium", [1, 2]],
            [5, "gtceu:chromite", [2, 5]]
        ],
        surfaceRock: "gtceu:plutonium"
    })
})

ServerEvents.tags("block", (event) => {
    event.add("minecraft:stone_ore_replaceables", "ad_astra:moon_stone")
    event.add("minecraft:stone_ore_replaceables", "ad_astra:moon_deepslate")
    event.add("minecraft:stone_ore_replaceables", "ad_astra:moon_dust")
})
