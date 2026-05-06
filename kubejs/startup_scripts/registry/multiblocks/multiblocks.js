GTCEuStartupEvents.registry("gtceu:recipe_type", event => {

    event.create("steam_blast_furnace")
        .category("multiblock")
        // .setEUIO("in")
        .setMaxIOSize(4, 1, 2, 1)
        .setSlotOverlay(false, false, GuiTextures.ARROW_INPUT_OVERLAY)
        .setSound(GTSoundEntries.FURNACE); // keep one sound only

    event.create("micro_farm")
        .category("multiblock")
        .setEUIO("in")
        .setMaxIOSize(4, 9, 1, 1)
        .setSlotOverlay(false, false, GuiTextures.ARROW_INPUT_OVERLAY)

    event.create("large_helper_wheel")
        .category("multiblock")
        // .setEUIO("in")
        .setMaxIOSize(5, 1, 1, 1)
        .setSlotOverlay(false, false, GuiTextures.ARROW_INPUT_OVERLAY)
        .setSound(GTSoundEntries.COMPUTATION);

    event.create("celestial_post_box")
        .category("multiblock")
        // .setEUIO("in")
        .setMaxIOSize(9, 9, 4, 4)
        .setSlotOverlay(false, false, GuiTextures.ARROW_INPUT_OVERLAY)
        .setSound(GTSoundEntries.COMPUTATION);

});

GTCEuStartupEvents.registry("gtceu:machine", event => {

    event.create("steam_blast_furnace", "multiblock")
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes("steam_blast_furnace")
        .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT, GTRecipeModifiers.BATCH_MODE])

        // base block appearance
        .appearanceBlock(() => new Block.getBlock("gtceu:firebricks"))

        .pattern(definition => FactoryBlockPattern.start()

            .aisle("AAA", "CCC", "BBB")
            .aisle("ABA", "C C", "BEB")
            .aisle("AAA", "C@C", "BBB")


            .where("@", Predicates.controller(Predicates.blocks(definition.get())))

            .where("A", Predicates.blocks("gtceu:steel_brick_casing")
        
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
            ) // make sure this is inside the .where, otherwise it will break shit

            .where("B", Predicates.blocks("gtceu:steel_firebox_casing"))
            .where("C", Predicates.blocks("gtceu:steel_machine_casing"))
            .where("E", Predicates.blocks("gtceu:lv_muffler_hatch"))
            .where(" ", Predicates.air())

            .build())

            .workableCasingModel(
            "gtceu:block/casings/steam/steel/side",
            "kubejs:block/multiblock/steam_blast_furnace"
        )

    event.create("micro_farm", "multiblock")
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes("micro_farm")
        .recipeModifiers([GTRecipeModifiers.OC_PERFECT])

        // base block appearance
        .appearanceBlock(GTBlocks.TREATED_WOOD_PLANK)

        .pattern(definition => FactoryBlockPattern.start()

            .aisle("AAAAA", "BBBBB")
            .aisle("ACCCA", "B   B")
            .aisle("ACCCA", "B D B")
            .aisle("ACCCA", "B   B")
            .aisle("AA@AA", "BBBBB")


            .where("@", Predicates.controller(Predicates.blocks(definition.get())))

            .where("A", Predicates.blocks("gtceu:treated_wood_planks")
        
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(1).setPreviewCount(1)))  // make sure this is inside the .where, otherwise it will break shit

            .where("B", Predicates.blocks("gtceu:treated_wood_fence"))
            .where("C", Predicates.blocks("minecraft:dirt"))
            .where("D", Predicates.blocks("minecraft:air"))

            .where(" ", Predicates.air())

            .build())

            .workableCasingModel(
            "gtceu:block/treated_wood_planks",       
            "kubejs:block/multiblock/micro_farm"
        )


    event.create("large_helper_wheel", "multiblock")
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes("large_helper_wheel")
        // .recipeModifiers([GTRecipeModifiers.PERFECT_OC])

        // base block appearance
        .appearanceBlock(() => Block.getBlock("gtceu:treated_wood_planks"))

        .pattern(definition => FactoryBlockPattern.start()

            .aisle("AAA", "ABA", "AAA")
            .aisle("AAA", "BCB", "ATA")
            .aisle("AAA", "A@A", "AAA")



            .where("@", Predicates.controller(Predicates.blocks(definition.get())))

            .where("A", Predicates.blocks("gtceu:frostproof_machine_casing")
        
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.OUTPUT_ENERGY).setMaxGlobalLimited(4).setPreviewCount(4)))  // make sure this is inside the .where, otherwise it will break shit

            .where("B", Predicates.blocks("gtceu:steel_firebox_casing"))
            .where("T", Predicates.blocks("gtceu:tempered_glass"))
            .where("C", Predicates.blocks("gtceu:fluxed_electrum_frame"))

            .where(" ", Predicates.air())

            .build())

            .workableCasingModel(
            "gtceu:block/casings/solid/machine_casing_frost_proof",       
            "kubejs:block/overlay/helper_wheel"
        )


        event.create("large_helper_factory", "multiblock")
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes("helper_assembler")
        .recipeModifiers([GTRecipeModifiers.OC_PERFECT])

        // base block appearance
        .appearanceBlock(() => Block.getBlock('gtceu:clean_machine_casing'))

        .pattern(definition => FactoryBlockPattern.start()
            .aisle("AABBBBBAA", "AABDDDBAA", "AABBBBBAA", "AA     AA")
            .aisle("AABBBBBAA", "ACCCCCCCA", "AEBBBBBEA", "AA     AA")
            .aisle("AABB@BBAA", "AABDDDBAA", "AABBBBBAA", "AA     AA")


            .where("@", Predicates.controller(Predicates.blocks(definition.get())))

            .where("A", Predicates.blocks("gtceu:clean_machine_casing")
        
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(8).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(8).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(8).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(1).setPreviewCount(1)))  // make sure this is inside the .where, otherwise it will break shit

            .where("B", Predicates.blocks("gtceu:stable_machine_casing"))
            .where("C", Predicates.blocks("gtceu:titanium_gearbox"))
            .where("D", Predicates.blocks("gtceu:laminated_glass"))
            .where("E", Predicates.blocks("gtceu:titanium_pipe_casing"))
            .where(" ", Predicates.air())

            .build())

            .workableCasingModel(
            "gtceu:block/stable_machine_casing",       
            "kubejs:block/multiblock/large_helper_assembler"
        )

    event.create("celestial_post_box", "multiblock")
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes("celestial_post_box")
        // .recipeModifiers([GTRecipeModifiers.PERFECT_OC])

        // base block appearance
        .appearanceBlock(() => Block.getBlock("kubejs:ostrum_casing"))

        .pattern(definition => FactoryBlockPattern.start()

            .aisle("AAAAA", "ABBBA", "ABBBA", "ABBBA", "AAAAA")
            .aisle("ABBBA", "TECET", "TECET", "TECET", "ACCCA")
            .aisle("ABBBA", "TCDCT", "TCDCT", "TCDCT", "ACCCA")
            .aisle("ABBBA", "TECET", "TECET", "TECET", "ACCCA")
            .aisle("AA@AA", "ATTTA", "ATTTA", "ATTTA", "AAAAA")



            .where("@", Predicates.controller(Predicates.blocks(definition.get())))

            .where("A", Predicates.blocks("kubejs:ostrum_casing")
        
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(1)))  // make sure this is inside the .where, otherwise it will break shit

            .where("B", Predicates.blocks("gtceu:assembly_line_grating"))
            .where("T", Predicates.blocks("gtceu:laminated_glass"))
            .where("C", Predicates.blocks("gtceu:high_power_casing"))
            .where("D", Predicates.blocks("gtceu:lunarium_block"))
            .where("E", Predicates.blocks("gtceu:assembly_line_unit"))

            .where(" ", Predicates.air())

            .build())

            .workableCasingModel(`kubejs:block/casing/ostrum_casing`,
            `gtceu:block/machines/electrolyzer`);


             // core mod incoming!!

        // event.create('titanite_blast_furnace', 'multiblock')
        // .rotationState(RotationState.NON_Y_AXIS)
        // .recipeType('electric_blast_furnace')
        // .machine((holder) => new $CoiledMulti(holder))
        // .recipeModifiers([GTRecipeModifiers.OC_PERFECT, GTRecipeModifiers.PARALLEL_HATCH])
        // .appearanceBlock(GCYMBlocks.CASING_HIGH_TEMPERATURE_SMELTING)
        // .pattern(definition => FactoryBlockPattern.start()
        //     .aisle('AAA', 'CCC', 'CCC', 'AAA') 
        //     .aisle('AAA', 'C C', 'C C', 'AMA') 
        //     .aisle('A@A', 'CCC', 'CCC', 'APA') 
        //     .where('A', Predicates.blocks('kubejs:titanite_casing')
        //         .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setPreviewCount(1))
        //         .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setPreviewCount(1))
        //         .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setPreviewCount(1))
        //         .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setPreviewCount(1))
        //         .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2))
        //         .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
        //     .where('C', Predicates.heatingCoils())
        //     .where('M', Predicates.abilities(PartAbility.MUFFLER))
        //     .where('M', Predicates.blocks('gtceu:iv_parallel_hatch'))
        //     .where('@', Predicates.controller(Predicates.blocks(definition.get())))
        //     .build())
        // .workableCasingModel('kubejs:block/casing/titanite_casing',
        //     'kubejs:block/multiblock/titanite_blast_furnace');
    
});