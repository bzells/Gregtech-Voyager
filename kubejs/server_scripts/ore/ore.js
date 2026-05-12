
const WorldGenLayers = Java.loadClass("com.gregtechceu.gtceu.api.data.worldgen.WorldGenLayers")
GTCEuServerEvents.oreVeins(event => {

    // event.modify('gtceu:ilmenite_vein', vein => {
    //     vein.dimensions(['ad_astra:moon']); // only spawns in moon now
    // });

    event.remove('gtceu:bauxite_vein')
    event.remove('gtceu:mica_vein')
    event.remove('gtceu:naquadah_vein')
    event.remove('gtceu:scheelite_vein')
    event.remove('gtceu:sheldonite_vein')

    const dimToLayer = 
    {
        "minecraft:overworld" : "stone",
        "minecraft:the_end" : WorldGenLayers.ENDSTONE,
        "minecraft:the_nether": WorldGenLayers.NETHERRACK,
        "twilightforest:twilight_forest": "twilightforest",
        "ad_astra:moon" : "moon",
        "ad_astra:mars" : "mars",
        "ad_astra:mercury" : "mercury"
    };

    function oreVein3(material, dimension, ns, weight, density, cSize, lRange, hRange, mats, addDense)
    {
        if(!addDense)
        {
            event.add(`${dimension}/${material}`, vein => {
            vein.weight(weight)
            vein.density(density)
            vein.clusterSize(cSize)
            vein.layer(dimToLayer[`${ns}:${dimension}`])
            vein.dimensions(`${ns}:${dimension}`)
            vein.heightRangeUniform(lRange, hRange)
            vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(1).mat(`gtceu:${mats[0]}`).size(1, 1))
                .layer(l => l.weight(2).mat(`gtceu:${mats[1]}`).size(1, 3))
                .layer(l => l.weight(3).mat(`gtceu:${mats[2]}`).size(1, 1))
                .layer(l => l.weight(3).mat(`gtceu:${mats[0]}`).size(1, 2))
                )
            )

            })
        }
        else
        {

            event.add(`${dimension}/${material}`, vein => {
            vein.weight(weight)
            vein.density(density)
            vein.clusterSize(cSize)
            vein.layer(dimToLayer[`${ns}:${dimension}`])
            vein.dimensions(`${ns}:${dimension}`)
            vein.heightRangeUniform(lRange, hRange)
            vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(1).mat(`gtceu:${mats[0]}`).size(1, 1))
                .layer(l => l.weight(2).mat(`gtceu:${mats[1]}`).size(1, 3))
                .layer(l => l.weight(3).mat(`gtceu:${mats[2]}`).size(1, 1))
                .layer(l => l.weight(3).mat(`gtceu:${mats[0]}`).size(1, 2))
                )
            )

            })

           event.add(`${dimension}/${material}/dense`, vein => {
            vein.weight(Math.floor(weight/10))
            vein.density(density)
            vein.clusterSize(Math.floor(cSize * 1.75))
            vein.layer(dimToLayer[`${ns}:${dimension}`])
            vein.dimensions(`${ns}:${dimension}`)
            vein.heightRangeUniform(lRange, hRange)
            vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(1).mat(`gtceu:${mats[0]}`).size(3, 5))
                .layer(l => l.weight(2).mat(`gtceu:${mats[1]}`).size(3, 5))
                .layer(l => l.weight(3).mat(`gtceu:${mats[2]}`).size(2, 6))
                .layer(l => l.weight(3).mat(`gtceu:${mats[0]}`).size(3, 5))
                )
            )

            }) 
        }
        
    }
    function oreVein4(material, dimension, ns, weight, density, cSize, lRange, hRange, mats, addDense)
    {
        if(!addDense)
        {
            event.add(`${dimension}/${material}`, vein => {
            vein.weight(weight)
            vein.density(density)
            vein.clusterSize(cSize)
            vein.layer(dimToLayer[`${ns}:${dimension}`])
            vein.dimensions(`${ns}:${dimension}`)
            vein.heightRangeUniform(lRange, hRange)
            vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(1).mat(`gtceu:${mats[0]}`).size(1, 2))
                .layer(l => l.weight(2).mat(`gtceu:${mats[1]}`).size(1, 3))
                .layer(l => l.weight(3).mat(`gtceu:${mats[2]}`).size(1, 2))
                .layer(l => l.weight(3).mat(`gtceu:${mats[3]}`).size(1, 3))
                )
            )

            })
        }
        else
        {

            event.add(`${dimension}/${material}`, vein => {
            vein.weight(weight)
            vein.density(density)
            vein.clusterSize(cSize)
            vein.layer(dimToLayer[`${ns}:${dimension}`])
            vein.dimensions(`${ns}:${dimension}`)
            vein.heightRangeUniform(lRange, hRange)
            vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(1).mat(`gtceu:${mats[0]}`).size(1, 1))
                .layer(l => l.weight(2).mat(`gtceu:${mats[1]}`).size(1, 2))
                .layer(l => l.weight(3).mat(`gtceu:${mats[2]}`).size(1, 1))
                .layer(l => l.weight(3).mat(`gtceu:${mats[3]}`).size(1, 3))
                )
            )

            })

           event.add(`${dimension}/${material}/dense`, vein => {
            vein.weight(Math.floor(weight/10))
            vein.density(density)
            vein.clusterSize(Math.floor(cSize * 1.75))
            vein.layer(dimToLayer[`${ns}:${dimension}`])
            vein.dimensions(`${ns}:${dimension}`)
            vein.heightRangeUniform(lRange, hRange)
            vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(1).mat(`gtceu:${mats[0]}`).size(3, 5))
                .layer(l => l.weight(2).mat(`gtceu:${mats[1]}`).size(3, 5))
                .layer(l => l.weight(3).mat(`gtceu:${mats[2]}`).size(2, 6))
                .layer(l => l.weight(3).mat(`gtceu:${mats[3]}`).size(3, 5))
                )
            )

            }) 
        }
    }

    // mars ores

    oreVein4('ostrite', 'mars', 'ad_astra', 10, 0.3, 25, -64, 200, ['ostrite', 'scheelite', 'amethyst', 'palladium'], true)
    oreVein3('tungstate', 'mars', 'ad_astra', 10, 0.4, 30, -64, 200, ['tungstate', 'scheelite', 'tungstate'], true)
    oreVein3('bauxite', 'mars', 'ad_astra', 35, 0.7, 35, -64, 200, ['bauxite', 'aluminium', 'bauxite'], false)
    oreVein3('ilmenite', 'mars', 'ad_astra', 15, 0.3, 35, -64, 200, ['ilmenite', 'ilmenite', 'ilmenite'], true)
    oreVein4('magnetite', 'mars', 'ad_astra', 45, 0.7, 45, -64, 200, ['hematite', 'hematite', 'gold', 'hematite'], false)
    oreVein3('garnierite', 'mars', 'ad_astra', 35, 0.7, 35, -64, 200, ['pentlandite', 'cobaltite', 'garnierite'], false)
    oreVein3('sulfur', 'mars', 'ad_astra', 20, 0.8, 45, -64, 200, ['sulfur', 'sphalerite', 'pyrite'], false)
    oreVein3('uraninite', 'mars', 'ad_astra', 25, 0.4, 25, -64, 200, ['uraninite', 'pitchblende', 'uraninite'], false)
    oreVein3('plutonium', 'mars', 'ad_astra', 10, 0.4, 30, -64, 200, ['uraninite', 'plutonium', 'uraninite'], true)
    oreVein4('electrotine', 'mars', 'ad_astra', 35, 0.9, 30, -64, 200, ['electrotine', 'gold', 'redstone', 'silver'], false)
    oreVein4('cooperite', 'mars', 'ad_astra', 15, 0.4, 40, -64, 200, ['cooperite', 'cooperite', 'platinum', 'palladium'], true) 


    // overworld ores

    event.add("overworld/mica", vein => {
        vein.weight(10)
        vein.density(.3)
        vein.clusterSize(45)
        vein.layer("stone")
        vein.dimensions("minecraft:overworld")
        vein.heightRangeUniform(20, 90)
        vein.cuboidVeinGenerator(generator => generator
            .top(b => b.mat(GTMaterials.Kyanite).size(1))
            .middle(b => b.mat(GTMaterials.Mica).size(3))
            .bottom(b => b.mat(GTMaterials.Lepidolite).size(2))
            .spread(b => b.mat(GTMaterials.Mica))
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Mica)
            .placement("above")
        )
    })

    event.add("overworld/dense/mica", vein => {
        vein.weight(2)
        vein.density(.8)
        vein.clusterSize(45)
        vein.layer("stone")
        vein.dimensions("minecraft:overworld")
        vein.heightRangeUniform(-45, 5)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).state(() => Block.getBlock("gtceu:mica_ore").defaultBlockState()).size(3, 6))
                .layer(l => l.weight(2).state(() => Block.getBlock("gtceu:kyanite_ore").defaultBlockState()).size(2, 4))
                .layer(l => l.weight(1).state(() => Block.getBlock("gtceu:mica_ore").defaultBlockState()).size(2, 4))
            )
        )
        })

    // twilight ores

    event.add("twilight/source", vein => {
        vein.weight(5)
        vein.density(0.3)
        vein.clusterSize(40)
        vein.layer("twilightforest")
        vein.dimensions("twilightforest:twilight_forest")
        vein.heightRangeUniform(-45, 5)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).state(() => Block.getBlock("gtceu:source_ore").defaultBlockState()).size(1, 2))
                .layer(l => l.weight(2).state(() => Block.getBlock("gtceu:lapis_ore").defaultBlockState()).size(1, 2))
                .layer(l => l.weight(1).state(() => Block.getBlock("gtceu:lazurite_ore").defaultBlockState()).size(1, 2))
            )
        )
        })

    event.add("twilight/dense/source", vein => {
        vein.weight(1)
        vein.density(.7)
        vein.clusterSize(40)
        vein.layer("twilightforest")
        vein.dimensions("twilightforest:twilight_forest")
        vein.heightRangeUniform(-45, 5)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).state(() => Block.getBlock("gtceu:source_ore").defaultBlockState()).size(3, 6))
                .layer(l => l.weight(2).state(() => Block.getBlock("gtceu:lapis_ore").defaultBlockState()).size(1, 2))
                .layer(l => l.weight(1).state(() => Block.getBlock("gtceu:lazurite_ore").defaultBlockState()).size(1, 2))
            )
        )
        })


    event.add("twilight/nickel", vein => {
        vein.weight(15)
        vein.density(0.3)
        vein.clusterSize(45)
        vein.layer("twilightforest")
        vein.dimensions("twilightforest:twilight_forest")
        vein.heightRangeUniform(-45, 5)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).state(() => Block.getBlock("gtceu:nickel_ore").defaultBlockState()).size(1, 3))
                .layer(l => l.weight(2).state(() => Block.getBlock("gtceu:magnesite_ore").defaultBlockState()).size(1, 3))
                .layer(l => l.weight(1).state(() => Block.getBlock("gtceu:nickel_ore").defaultBlockState()).size(1, 2))
            )
        )

    
    })

    event.add("twilight/dense/nickel", vein => {
        vein.weight(1)
        vein.density(.8)
        vein.clusterSize(40)
        vein.layer("twilightforest")
        vein.dimensions("twilightforest:twilight_forest")
        vein.heightRangeUniform(-45, 5)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).state(() => Block.getBlock("gtceu:nickel_ore").defaultBlockState()).size(3, 6))
                .layer(l => l.weight(2).state(() => Block.getBlock("gtceu:magnesite_ore").defaultBlockState()).size(2, 3))
                .layer(l => l.weight(2).state(() => Block.getBlock("gtceu:nickel_ore").defaultBlockState()).size(2, 2))
                .layer(l => l.weight(1).state(() => Block.getBlock("gtceu:chromite_ore").defaultBlockState()).size(1, 3))
            )
        )

    })


    event.add("twilight/cobalt", vein => {
        vein.weight(25)
        vein.density(0.3)
        vein.clusterSize(45)
        vein.layer("twilightforest")
        vein.dimensions("twilightforest:twilight_forest")
        vein.heightRangeUniform(-45, 5)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).state(() => Block.getBlock("gtceu:cobalt_ore").defaultBlockState()).size(1, 3))
                .layer(l => l.weight(2).state(() => Block.getBlock("gtceu:cobaltite_ore").defaultBlockState()).size(1, 2))
                .layer(l => l.weight(1).state(() => Block.getBlock("gtceu:garnierite_ore").defaultBlockState()).size(1, 2))
                .layer(l => l.weight(2).state(() => Block.getBlock("gtceu:cobalt_ore").defaultBlockState()).size(1, 3))
            )
        )

    
    })

    event.add("twilight/dense/cobalt", vein => {
        vein.weight(1)
        vein.density(.7)
        vein.clusterSize(45)
        vein.layer("twilightforest")
        vein.dimensions("twilightforest:twilight_forest")
        vein.heightRangeUniform(-45, 5)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).state(() => Block.getBlock("gtceu:cobalt_ore").defaultBlockState()).size(2, 4))
                .layer(l => l.weight(2).state(() => Block.getBlock("gtceu:cobaltite_ore").defaultBlockState()).size(3, 6))
                .layer(l => l.weight(1).state(() => Block.getBlock("gtceu:garnierite_ore").defaultBlockState()).size(1, 2))
                .layer(l => l.weight(2).state(() => Block.getBlock("gtceu:cobalt_ore").defaultBlockState()).size(1, 3))
            )
        )

    
    })

    event.add("twilight/silver", vein => {
        vein.weight(30)
        vein.density(0.3)
        vein.clusterSize(45)
        vein.layer("twilightforest")
        vein.dimensions("twilightforest:twilight_forest")
        vein.heightRangeUniform(-45, 5)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).state(() => Block.getBlock("gtceu:silver_ore").defaultBlockState()).size(1, 3))
                .layer(l => l.weight(2).state(() => Block.getBlock("gtceu:galena_ore").defaultBlockState()).size(1, 2))
                .layer(l => l.weight(1).state(() => Block.getBlock("gtceu:lead_ore").defaultBlockState()).size(1, 2))
                .layer(l => l.weight(2).state(() => Block.getBlock("gtceu:gold_ore").defaultBlockState()).size(1, 3))
            )
        )

    
    })

    event.add("twilight/dense/silver", vein => {
        vein.weight(2)
        vein.density(.7)
        vein.clusterSize(45)
        vein.layer("twilightforest")
        vein.dimensions("twilightforest:twilight_forest")
        vein.heightRangeUniform(-45, 5)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).state(() => Block.getBlock("gtceu:silver_ore").defaultBlockState()).size(3, 6))
                .layer(l => l.weight(2).state(() => Block.getBlock("gtceu:galena_ore").defaultBlockState()).size(2, 4))
                .layer(l => l.weight(1).state(() => Block.getBlock("gtceu:lead_ore").defaultBlockState()).size(1, 2))
                .layer(l => l.weight(2).state(() => Block.getBlock("gtceu:gold_ore").defaultBlockState()).size(1, 3))
            )
        )
    })

    event.add("twilight/gem", vein => {
        vein.weight(15)
        vein.density(0.3)
        vein.clusterSize(35)
        vein.layer("twilightforest")
        vein.dimensions("twilightforest:twilight_forest")
        vein.heightRangeUniform(-45, 5)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).state(() => Block.getBlock("gtceu:emerald_ore").defaultBlockState()).size(1, 3))
                .layer(l => l.weight(2).state(() => Block.getBlock("gtceu:diamond_ore").defaultBlockState()).size(1, 2))
                .layer(l => l.weight(1).state(() => Block.getBlock("gtceu:ruby_ore").defaultBlockState()).size(1, 2))
                .layer(l => l.weight(2).state(() => Block.getBlock("gtceu:sapphire_ore").defaultBlockState()).size(1, 3))
                .layer(l => l.weight(2).state(() => Block.getBlock("gtceu:realgar_ore").defaultBlockState()).size(1, 3))
            )
        )

    
    })

    event.add("twilight/dense/gem", vein => {
        vein.weight(1)
        vein.density(.7)
        vein.clusterSize(45)
        vein.layer("twilightforest")
        vein.dimensions("twilightforest:twilight_forest")
        vein.heightRangeUniform(-45, 5)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).state(() => Block.getBlock("gtceu:emerald_ore").defaultBlockState()).size(2, 4))
                .layer(l => l.weight(2).state(() => Block.getBlock("gtceu:diamond_ore").defaultBlockState()).size(2, 4))
                .layer(l => l.weight(1).state(() => Block.getBlock("gtceu:ruby_ore").defaultBlockState()).size(2, 4))
                .layer(l => l.weight(2).state(() => Block.getBlock("gtceu:sapphire_ore").defaultBlockState()).size(2, 4))
                .layer(l => l.weight(2).state(() => Block.getBlock("gtceu:realgar_ore").defaultBlockState()).size(2, 4))
            )
        )
    })

    event.add("twilight/pitchblende", vein => {
        vein.weight(15)
        vein.density(0.2)
        vein.clusterSize(45)
        vein.layer("twilightforest")
        vein.dimensions("twilightforest:twilight_forest")
        vein.heightRangeUniform(-45, 5)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).state(() => Block.getBlock("gtceu:pitchblende_ore").defaultBlockState()).size(1, 2))
                .layer(l => l.weight(2).state(() => Block.getBlock("gtceu:pitchblende_ore").defaultBlockState()).size(1, 2))
                .layer(l => l.weight(1).state(() => Block.getBlock("gtceu:pitchblende_ore").defaultBlockState()).size(1, 2))
                .layer(l => l.weight(2).state(() => Block.getBlock("gtceu:uraninite_ore").defaultBlockState()).size(1, 2))
            )
        )

    
    })

    event.add("twilight/dense/pitchblende", vein => {
        vein.weight(1)
        vein.density(.8)
        vein.clusterSize(45)
        vein.layer("twilightforest")
        vein.dimensions("twilightforest:twilight_forest")
        vein.heightRangeUniform(-45, 5)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).state(() => Block.getBlock("gtceu:pitchblende_ore").defaultBlockState()).size(3, 6))
                .layer(l => l.weight(2).state(() => Block.getBlock("gtceu:pitchblende_ore").defaultBlockState()).size(2, 2))
                .layer(l => l.weight(1).state(() => Block.getBlock("gtceu:pitchblende_ore").defaultBlockState()).size(2, 2))
                .layer(l => l.weight(2).state(() => Block.getBlock("gtceu:uraninite_ore").defaultBlockState()).size(3, 6))
            )
        )
    })




    event.add("twilight/magnetite", vein => {
        vein.weight(40)
        vein.density(0.4)
        vein.clusterSize(45)
        vein.layer("twilightforest")
        vein.dimensions("twilightforest:twilight_forest")
        vein.heightRangeUniform(-45, 5)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).state(() => Block.getBlock("gtceu:magnetite_ore").defaultBlockState()).size(2, 3))
                .layer(l => l.weight(2).state(() => Block.getBlock("gtceu:vanadium_magnetite_ore").defaultBlockState()).size(2, 3))
                .layer(l => l.weight(1).state(() => Block.getBlock("gtceu:gold_ore").defaultBlockState()).size(1, 2))
                .layer(l => l.weight(2).state(() => Block.getBlock("gtceu:magnetite_ore").defaultBlockState()).size(1, 3))
            )
        )

    
    })

    event.add("twilight/dense/magnetite", vein => {
        vein.weight(3)
        vein.density(1)
        vein.clusterSize(40)
        vein.layer("twilightforest")
        vein.dimensions("twilightforest:twilight_forest")
        vein.heightRangeUniform(-45, 5)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).state(() => Block.getBlock("gtceu:magnetite_ore").defaultBlockState()).size(3, 6))
                .layer(l => l.weight(2).state(() => Block.getBlock("gtceu:vanadium_magnetite_ore").defaultBlockState()).size(2, 2))
                .layer(l => l.weight(1).state(() => Block.getBlock("gtceu:gold_ore").defaultBlockState()).size(2, 2))
                .layer(l => l.weight(2).state(() => Block.getBlock("gtceu:magnetite_ore").defaultBlockState()).size(3, 6))
            )
        )
    })

    event.add("twilight/red", vein => {
        vein.weight(25)
        vein.density(0.3)
        vein.clusterSize(45)
        vein.layer("twilightforest")
        vein.dimensions("twilightforest:twilight_forest")
        vein.heightRangeUniform(-45, 5)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).state(() => Block.getBlock("gtceu:ruby_ore").defaultBlockState()).size(1, 2))
                .layer(l => l.weight(2).state(() => Block.getBlock("gtceu:redstone_ore").defaultBlockState()).size(2, 3))
                .layer(l => l.weight(1).state(() => Block.getBlock("gtceu:realgar_ore").defaultBlockState()).size(1, 2))
                .layer(l => l.weight(2).state(() => Block.getBlock("gtceu:redstone_ore").defaultBlockState()).size(1, 3))
            )
        )

    
    })

    event.add("twilight/dense/red", vein => {
        vein.weight(1)
        vein.density(.9)
        vein.clusterSize(45)
        vein.layer("twilightforest")
        vein.dimensions("twilightforest:twilight_forest")
        vein.heightRangeUniform(-64, 5)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(12).state(() => Block.getBlock("gtceu:ruby_ore").defaultBlockState()).size(2, 3))
                .layer(l => l.weight(12).state(() => Block.getBlock("gtceu:redstone_ore").defaultBlockState()).size(3, 6))
                .layer(l => l.weight(8).state(() => Block.getBlock("gtceu:realgar_ore").defaultBlockState()).size(2, 2))
                .layer(l => l.weight(4).state(() => Block.getBlock("gtceu:plutonium_ore").defaultBlockState()).size(1, 1))
            )
        )
    })

    event.add("twilight/blue", vein => {
        vein.weight(25)
        vein.density(0.3)
        vein.clusterSize(45)
        vein.layer("twilightforest")
        vein.dimensions("twilightforest:twilight_forest")
        vein.heightRangeUniform(-45, 5)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).state(() => Block.getBlock("gtceu:lazurite_ore").defaultBlockState()).size(1, 2))
                .layer(l => l.weight(2).state(() => Block.getBlock("gtceu:lapis_ore").defaultBlockState()).size(2, 3))
                .layer(l => l.weight(1).state(() => Block.getBlock("gtceu:sodalite_ore").defaultBlockState()).size(1, 2))
                .layer(l => l.weight(2).state(() => Block.getBlock("gtceu:sapphire_ore").defaultBlockState()).size(1, 3))
            )
        )

    
    })

    event.add("twilight/dense/blue", vein => {
        vein.weight(1)
        vein.density(.9)
        vein.clusterSize(45)
        vein.layer("twilightforest")
        vein.dimensions("twilightforest:twilight_forest")
        vein.heightRangeUniform(-45, 5)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).state(() => Block.getBlock("gtceu:lazurite_ore").defaultBlockState()).size(2, 3))
                .layer(l => l.weight(2).state(() => Block.getBlock("gtceu:lapis_ore").defaultBlockState()).size(3, 6))
                .layer(l => l.weight(1).state(() => Block.getBlock("gtceu:sodalite_ore").defaultBlockState()).size(2, 2))
                .layer(l => l.weight(1).state(() => Block.getBlock("gtceu:sapphire_ore").defaultBlockState()).size(3, 6))
                .layer(l => l.weight(1).state(() => Block.getBlock("gtceu:tantalite_ore").defaultBlockState()).size(2, 4))
            )
        )
    })

    event.add("twilight/green", vein => {
        vein.weight(25)
        vein.density(0.3)
        vein.clusterSize(45)
        vein.layer("twilightforest")
        vein.dimensions("twilightforest:twilight_forest")
        vein.heightRangeUniform(-45, 5)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).state(() => Block.getBlock("gtceu:beryllium_ore").defaultBlockState()).size(1, 2))
                .layer(l => l.weight(2).state(() => Block.getBlock("gtceu:emerald_ore").defaultBlockState()).size(2, 3))
                .layer(l => l.weight(1).state(() => Block.getBlock("gtceu:olivine_ore").defaultBlockState()).size(1, 2))
                .layer(l => l.weight(1).state(() => Block.getBlock("gtceu:thorium_ore").defaultBlockState()).size(1, 2))
            )
        )

    
    })

    event.add("twilight/dense/green", vein => {
        vein.weight(1)
        vein.density(0.9)
        vein.clusterSize(45)
        vein.layer("twilightforest")
        vein.dimensions("twilightforest:twilight_forest")
        vein.heightRangeUniform(-45, 5)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).state(() => Block.getBlock("gtceu:beryllium_ore").defaultBlockState()).size(2, 3))
                .layer(l => l.weight(2).state(() => Block.getBlock("gtceu:emerald_ore").defaultBlockState()).size(3, 6))
                .layer(l => l.weight(1).state(() => Block.getBlock("gtceu:olivine_ore").defaultBlockState()).size(2, 2))
                .layer(l => l.weight(1).state(() => Block.getBlock("gtceu:thorium_ore").defaultBlockState()).size(3, 6))
            )
        )
    })


    event.add("twilight/yellow", vein => {
        vein.weight(25)
        vein.density(0.3)
        vein.clusterSize(45)
        vein.layer("twilightforest")
        vein.dimensions("twilightforest:twilight_forest")
        vein.heightRangeUniform(-45, 5)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).state(() => Block.getBlock("gtceu:sphalerite_ore").defaultBlockState()).size(1, 2))
                .layer(l => l.weight(2).state(() => Block.getBlock("gtceu:gold_ore").defaultBlockState()).size(2, 3))
                .layer(l => l.weight(1).state(() => Block.getBlock("gtceu:topaz_ore").defaultBlockState()).size(1, 2))
                .layer(l => l.weight(1).state(() => Block.getBlock("gtceu:sulfur_ore").defaultBlockState()).size(2, 3))
            )
        )

    
    })

    event.add("twilight/dense/yellow", vein => {
        vein.weight(3)
        vein.density(0.9)
        vein.clusterSize(40)
        vein.layer("twilightforest")
        vein.dimensions("twilightforest:twilight_forest")
        vein.heightRangeUniform(-45, 5)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).state(() => Block.getBlock("gtceu:sphalerite_ore").defaultBlockState()).size(2, 3))
                .layer(l => l.weight(2).state(() => Block.getBlock("gtceu:gold_ore").defaultBlockState()).size(3, 6))
                .layer(l => l.weight(1).state(() => Block.getBlock("gtceu:topaz_ore").defaultBlockState()).size(2, 2))
                .layer(l => l.weight(1).state(() => Block.getBlock("gtceu:sulfur_ore").defaultBlockState()).size(3, 6))
            )
        )
    })
    

    
    // moon ores
    event.add("moon/bauxite", vein => {
        vein.weight(15)
        vein.density(.8)
        vein.clusterSize(50)
        vein.layer("moon")
        vein.dimensions("ad_astra:moon")
        vein.heightRangeUniform(0, 200)
        vein.cuboidVeinGenerator(generator => generator
            // .top(b => b.mat(GTMaterials.Bauxite).size(1))
            .top(b => b.mat('gtceu:bauxite').size(5))
            .middle(b => b.mat(GTMaterials.Bauxite).size(5))
            .bottom(b => b.mat(GTMaterials.Aluminium).size(2))
            .spread(b => b.mat(GTMaterials.Bauxite))
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Bauxite)
            .placement("above")
        )
    })

    event.add("moon/ilmenite", vein => {
        vein.weight(15)
        vein.density(.8)
        vein.clusterSize(55)
        vein.layer("moon")
        vein.dimensions("ad_astra:moon")
        vein.heightRangeUniform(0, 200)
        vein.cuboidVeinGenerator(generator => generator
            // .top(b => b.mat(GTMaterials.Bauxite).size(1))
            .top(b => b.mat('gtceu:bauxite').size(5))
            .middle(b => b.mat(GTMaterials.Ilmenite).size(5))
            .bottom(b => b.mat(GTMaterials.Ilmenite).size(7))
            .spread(b => b.mat(GTMaterials.Bauxite))
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Ilmenite)
            .placement("above")
        )
    })

    event.add("moon/neodymium", vein => { 
        vein.weight(25)
        vein.density(.8)
        vein.clusterSize(45)
        vein.layer("moon")
        vein.dimensions("ad_astra:moon")
        vein.heightRangeUniform(0, 200)
        vein.cuboidVeinGenerator(generator => generator
            .top(b => b.mat(GTMaterials.Neodymium).size(5))
            .middle(b => b.mat(GTMaterials.Bastnasite).size(3))
            .bottom(b => b.mat(GTMaterials.Monazite).size(2))
            .spread(b => b.mat(GTMaterials.Neodymium))
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Neodymium)
            .placement("above")
        )
    })

    event.add("moon/glunite", vein => { 
        vein.weight(30)
        vein.density(.3)
        vein.clusterSize(30)
        vein.layer("moon")
        vein.dimensions("ad_astra:moon")
        vein.heightRangeUniform(0, 200)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(1).mat('gtceu:glunite').size(1, 2))
                .layer(l => l.weight(3).mat('gtceu:lapis').size(1, 4))
                .layer(l => l.weight(3).mat('gtceu:glunite').size(1, 2))
                .layer(l => l.weight(2).mat('gtceu:lunite').size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock('gtceu:glunite')
            .placement("above")
        )
    })

    event.add("moon/chromite", vein => { 
        vein.weight(10)
        vein.density(.3)
        vein.clusterSize(30)
        vein.layer("moon")
        vein.dimensions("ad_astra:moon")
        vein.heightRangeUniform(0, 200)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(1).mat('gtceu:magnetite').size(1, 2))
                .layer(l => l.weight(3).mat('gtceu:chromite').size(1, 4))
                .layer(l => l.weight(3).mat('gtceu:gold').size(1, 2))
                .layer(l => l.weight(2).mat('gtceu:chromite').size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock('gtceu:glunite')
            .placement("above")
        )
    })
    event.add("moon/dense/magnetite", vein => {
        vein.weight(20)
        vein.density(1)
        vein.clusterSize(50)
        vein.layer("moon")
        vein.dimensions("ad_astra:moon")
        vein.heightRangeUniform(-45, 200)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(1).mat('gtceu:magnetite').size(3, 4))
                .layer(l => l.weight(3).mat('gtceu:vanadium_magnetite').size(1, 4))
                .layer(l => l.weight(3).mat('gtceu:gold').size(3, 4))
                .layer(l => l.weight(2).mat('gtceu:silver').size(2, 4))
            )
        )
    })

    event.add("moon/magnesite", vein => {
        vein.weight(20)
        vein.density(.3)
        vein.clusterSize(40)
        vein.layer("moon")
        vein.dimensions("ad_astra:moon")
        vein.heightRangeUniform(-45, 200)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(1).mat('gtceu:iron').size(1, 2))
                .layer(l => l.weight(3).mat('gtceu:magnesite').size(1, 4))
                .layer(l => l.weight(3).mat('gtceu:calcite').size(1, 3))
                .layer(l => l.weight(2).mat('gtceu:bentonite').size(1, 3))
            )
        )
    })

    event.add("moon/bornite", vein => { 
        vein.weight(15)
        vein.density(.3)
        vein.clusterSize(30)
        vein.layer("moon")
        vein.dimensions("ad_astra:moon")
        vein.heightRangeUniform(0, 200)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat('gtceu:platinum').size(1, 2))
                .layer(l => l.weight(2).mat('gtceu:bornite').size(1, 1))
                .layer(l => l.weight(1).mat('gtceu:bornite').size(1, 1))
                .layer(l => l.weight(2).mat('gtceu:platinum').size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock('gtceu:bornite')
            .placement("above")
        )
    })

    event.add("moon/socochalamite", vein => { 
        vein.weight(25)
        vein.density(.3)
        vein.clusterSize(30)
        vein.layer("moon")
        vein.dimensions("ad_astra:moon")
        vein.heightRangeUniform(0, 200)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(1).mat('gtceu:socochalamite').size(1, 2))
                .layer(l => l.weight(3).mat('gtceu:amethyst').size(1, 2))
                .layer(l => l.weight(3).mat('gtceu:socochalamite').size(1, 2))
                .layer(l => l.weight(2).mat('gtceu:glunite').size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock('gtceu:socochalamite')
            .placement("above")
        )
    })

    
    // end ores
    event.add("end/plutonium", vein => { 
        vein.weight(10)
        vein.density(.1)
        vein.clusterSize(60)
        vein.layer(WorldGenLayers.ENDSTONE)
        vein.dimensions("minecraft:the_end")
        vein.heightRangeUniform(20, 60)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(1).mat('gtceu:plutonium').size(1, 2))
                .layer(l => l.weight(5).mat('gtceu:chromite').size(2, 4))
                .layer(l => l.weight(2).mat('gtceu:plutonium').size(1, 2))
                .layer(l => l.weight(5).mat('gtceu:chromite').size(2, 5))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock('gtceu:plutonium')
            .placement("above")
        )
    })

    // mars ores



    // event.add("moon/olivine", vein => {
    //     vein.weight(60)
    //     vein.density(1.0)
    //     vein.clusterSize(50)
    //     vein.layer("test")
    //     // vein.dimensions("ad_astra:moon")
    //     vein.heightRangeUniform(10, 60)
    //     vein.veinedVeinGenerator(generator => generator
    //         .oreBlock(GTMaterials.Olivine, 2)
    //         .oreBlock(GTMaterials.Chromite, 2)
    //         .oreBlock(GTMaterials.Hematite, 1)
    //         .veininessThreshold(0.01)
    //         .maxRichnessThreshold(0.75)
    //         .minRichness(0.6)
    //         .maxRichness(1.0)
    //     )
    //     vein.surfaceIndicatorGenerator(indicator => indicator
    //         .surfaceRock(GTMaterials.Olivine)
    //         .placement("above")
    //     )
    // })
    // event.modify('gtceu:aluminium_vein', vein => {
    //     vein.dimensions(['ad_astra:moon']); // only spawns in moon now
    // });
});  

ServerEvents.tags('block', event => {
    event.add('minecraft:stone_ore_replaceables', 'ad_astra:moon_stone');
    event.add('minecraft:stone_ore_replaceables', 'ad_astra:moon_deepslate');
    event.add('minecraft:stone_ore_replaceables', 'ad_astra:moon_dust');
});
