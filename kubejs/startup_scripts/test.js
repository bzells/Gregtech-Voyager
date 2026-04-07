GTCEuStartupEvents.registry("gtceu:recipe_type", event => {

    event.create("steam_blast_furnace")
        .category("multiblock")
        // .setEUIO("in")
        .setMaxIOSize(4, 1, 2, 1)
        .setSlotOverlay(false, false, GuiTextures.ARROW_INPUT_OVERLAY)
        .setSound(GTSoundEntries.COMPUTATION); // keep one sound only

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
        .setSound(GTSoundEntries.COMPUTATION); // keep one sound only

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
                    // front  - moves by layer facing you
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
        .appearanceBlock(() => new Block.getBlock("gtceu:treated_wood_planks"))

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

    
});