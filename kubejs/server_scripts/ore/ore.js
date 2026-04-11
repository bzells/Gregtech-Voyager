
const WorldGenLayers = Java.loadClass("com.gregtechceu.gtceu.api.data.worldgen.WorldGenLayers")
GTCEuServerEvents.oreVeins(event => {

    // event.modify('gtceu:ilmenite_vein', vein => {
    //     vein.dimensions(['ad_astra:moon']); // only spawns in moon now
    // });

    event.remove('gtceu:bauxite_vein')
    event.remove('gtceu:mica_vein')


    // overworld ores

    event.add("overworld/mica", vein => {
        vein.weight(15)
        vein.density(1.0)
        vein.clusterSize(30)
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
        vein.density(1)
        vein.clusterSize(35)
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
        vein.clusterSize(20)
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
        vein.density(1)
        vein.clusterSize(30)
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
        vein.density(0.5)
        vein.clusterSize(25)
        vein.layer("twilightforest")
        vein.dimensions("twilightforest:twilight_forest")
        vein.heightRangeUniform(-45, 5)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).state(() => Block.getBlock("gtceu:nickel_ore").defaultBlockState()).size(1, 3))
                .layer(l => l.weight(2).state(() => Block.getBlock("gtceu:magnesite_ore").defaultBlockState()).size(2, 3))
                .layer(l => l.weight(1).state(() => Block.getBlock("gtceu:nickel_ore").defaultBlockState()).size(1, 2))
            )
        )

    
    })

    event.add("twilight/dense/nickel", vein => {
        vein.weight(1)
        vein.density(1)
        vein.clusterSize(30)
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
        vein.density(0.5)
        vein.clusterSize(25)
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
        vein.density(1)
        vein.clusterSize(30)
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
        vein.density(0.5)
        vein.clusterSize(25)
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
        vein.weight(3)
        vein.density(1)
        vein.clusterSize(30)
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
        vein.density(0.5)
        vein.clusterSize(25)
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
        vein.density(1)
        vein.clusterSize(30)
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
        vein.density(0.5)
        vein.clusterSize(25)
        vein.layer("twilightforest")
        vein.dimensions("twilightforest:twilight_forest")
        vein.heightRangeUniform(-45, 5)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).state(() => Block.getBlock("gtceu:pitchblende_ore").defaultBlockState()).size(1, 3))
                .layer(l => l.weight(2).state(() => Block.getBlock("gtceu:pitchblende_ore").defaultBlockState()).size(1, 2))
                .layer(l => l.weight(1).state(() => Block.getBlock("gtceu:pitchblende_ore").defaultBlockState()).size(1, 2))
                .layer(l => l.weight(2).state(() => Block.getBlock("gtceu:uraninite_ore").defaultBlockState()).size(1, 3))
            )
        )

    
    })

    event.add("twilight/dense/pitchblende", vein => {
        vein.weight(1)
        vein.density(1)
        vein.clusterSize(30)
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

    event.add("twilight/neodymium", vein => {
        vein.weight(15)
        vein.density(0.5)
        vein.clusterSize(25)
        vein.layer("twilightforest")
        vein.dimensions("twilightforest:twilight_forest")
        vein.heightRangeUniform(-45, 5)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(1).state(() => Block.getBlock("gtceu:neodymium_ore").defaultBlockState()).size(1, 2))
                .layer(l => l.weight(3).state(() => Block.getBlock("gtceu:monazite_ore").defaultBlockState()).size(1, 2))
                .layer(l => l.weight(3).state(() => Block.getBlock("gtceu:bastnasite_ore").defaultBlockState()).size(1, 2))
                .layer(l => l.weight(1).state(() => Block.getBlock("gtceu:neodymium_ore").defaultBlockState()).size(1, 2))
            )
        )

    
    })

    event.add("twilight/dense/neodymium", vein => {
        vein.weight(1)
        vein.density(1)
        vein.clusterSize(30)
        vein.layer("twilightforest")
        vein.dimensions("twilightforest:twilight_forest")
        vein.heightRangeUniform(-45, 5)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).state(() => Block.getBlock("gtceu:neodymium_ore").defaultBlockState()).size(3, 6))
                .layer(l => l.weight(2).state(() => Block.getBlock("gtceu:monazite_ore").defaultBlockState()).size(2, 2))
                .layer(l => l.weight(1).state(() => Block.getBlock("gtceu:bastnasite_ore").defaultBlockState()).size(2, 2))
                .layer(l => l.weight(2).state(() => Block.getBlock("gtceu:neodymium_ore").defaultBlockState()).size(3, 6))
            )
        )
    })

    event.add("twilight/magnetite", vein => {
        vein.weight(30)
        vein.density(0.9)
        vein.clusterSize(25)
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
        vein.density(0.5)
        vein.clusterSize(25)
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
        vein.density(1)
        vein.clusterSize(45)
        vein.layer("twilightforest")
        vein.dimensions("twilightforest:twilight_forest")
        vein.heightRangeUniform(-64, 5)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(12).state(() => Block.getBlock("gtceu:ruby_ore").defaultBlockState()).size(2, 3))
                .layer(l => l.weight(12).state(() => Block.getBlock("gtceu:redstone_ore").defaultBlockState()).size(3, 6))
                .layer(l => l.weight(8).state(() => Block.getBlock("gtceu:realgar_ore").defaultBlockState()).size(2, 2))
                .layer(l => l.weight(2).state(() => Block.getBlock("gtceu:plutonium_ore").defaultBlockState()).size(1, 1))
            )
        )
    })

    event.add("twilight/blue", vein => {
        vein.weight(25)
        vein.density(0.5)
        vein.clusterSize(25)
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
        vein.density(1)
        vein.clusterSize(30)
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
        vein.density(0.5)
        vein.clusterSize(25)
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
        vein.density(1)
        vein.clusterSize(30)
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
        vein.density(0.5)
        vein.clusterSize(25)
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
        vein.density(1)
        vein.clusterSize(30)
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
        vein.density(.3)
        vein.clusterSize(35)
        vein.layer("moon")
        vein.dimensions("ad_astra:moon")
        vein.heightRangeUniform(0, 200)
        vein.cuboidVeinGenerator(generator => generator
            // .top(b => b.mat(GTMaterials.Bauxite).size(1))
            .top(b => b.mat('gtceu:bauxite').size(1))
            .middle(b => b.mat(GTMaterials.Bauxite).size(3))
            .bottom(b => b.mat(GTMaterials.Aluminium).size(2))
            .spread(b => b.mat(GTMaterials.Bauxite))
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Bauxite)
            .placement("above")
        )
    })

    event.add("moon/ilmenite", vein => {
        vein.weight(10)
        vein.density(.3)
        vein.clusterSize(35)
        vein.layer("moon")
        vein.dimensions("ad_astra:moon")
        vein.heightRangeUniform(0, 200)
        vein.cuboidVeinGenerator(generator => generator
            // .top(b => b.mat(GTMaterials.Bauxite).size(1))
            .top(b => b.mat('gtceu:bauxite').size(1))
            .middle(b => b.mat(GTMaterials.Ilmenite).size(3))
            .bottom(b => b.mat(GTMaterials.Ilmenite).size(2))
            .spread(b => b.mat(GTMaterials.Bauxite))
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Ilmenite)
            .placement("above")
        )
    })

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
