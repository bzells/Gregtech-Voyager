// @ts-nocheck
GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {
    event
        .create("steam_blast_furnace")
        .category("multiblock")
        // .setEUIO("in")
        .setMaxIOSize(4, 1, 2, 1)
        .setSlotOverlay(false, false, GuiTextures.ARROW_INPUT_OVERLAY)
        .setSound(GTSoundEntries.FURNACE) // keep one sound only

    event.create("micro_farm").category("multiblock").setEUIO("in").setMaxIOSize(4, 9, 1, 1).setSlotOverlay(false, false, GuiTextures.ARROW_INPUT_OVERLAY)

    event
        .create("large_helper_wheel")
        .category("multiblock")
        // .setEUIO("in")
        .setMaxIOSize(1, 0, 1, 0)
        .setSlotOverlay(false, false, GuiTextures.ARROW_INPUT_OVERLAY)
        .setSound(GTSoundEntries.CHEMICAL)



    event
        .create("helper_software_installation_unit")
        .category("multiblock")
        // .setEUIO("in")
        .setMaxIOSize(6, 1, 0, 0)
        .setSlotOverlay(false, false, GuiTextures.ARROW_INPUT_OVERLAY)
        .setSound(GTSoundEntries.COMPUTATION)

    event
        .create("atmospheric_collector")
        .category("multiblock")
        // .setEUIO("in")
        .setMaxIOSize(1, 1, 0, 1)
        .setSlotOverlay(false, false, GuiTextures.ARROW_INPUT_OVERLAY)
        .setSound(GTSoundEntries.ARC)

    // event.create("beam_of_teus")
    //     .category("multiblock")
    //     // .setEUIO("in")
    //     .setMaxIOSize(3, 2, 1, 1)
    //     .setSlotOverlay(false, false, GuiTextures.ARROW_INPUT_OVERLAY)
    //     .setSound(GTSoundEntries.ARC);

    event
        .create("radiation_chamber")
        .category("multiblock")
        // .setEUIO("in")
        .setMaxIOSize(3, 2, 2, 2)
        .setSlotOverlay(false, false, GuiTextures.ARROW_INPUT_OVERLAY)
        .setSound(GTSoundEntries.ARC)
})

GTCEuStartupEvents.registry("gtceu:machine", (event) => {
    event
        .create("steam_blast_furnace", "multiblock")
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes("steam_blast_furnace")
        .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT, GTRecipeModifiers.BATCH_MODE])

        // base block appearance
        .appearanceBlock(() => new Block.getBlock("gtceu:firebricks"))

        .pattern((definition) =>
            FactoryBlockPattern.start()

                .aisle("AAA", "CCC", "BBB")
                .aisle("ABA", "C C", "BEB")
                .aisle("AAA", "C@C", "BBB")

                .where("@", Predicates.controller(Predicates.blocks(definition.get())))

                .where(
                    "A",
                    Predicates.blocks("gtceu:steel_brick_casing")

                        .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                        .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                ) // make sure this is inside the .where, otherwise it will break shit

                .where("B", Predicates.blocks("gtceu:steel_firebox_casing"))
                .where("C", Predicates.blocks("gtceu:steel_machine_casing"))
                .where("E", Predicates.blocks("gtceu:lv_muffler_hatch"))
                .where(" ", Predicates.air())

                .build()
        )

        .workableCasingModel("gtceu:block/casings/steam/steel/side", "kubejs:block/multiblock/steam_blast_furnace")

    event
        .create("micro_farm", "multiblock")
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes("micro_farm")
        .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT])

        // base block appearance
        .appearanceBlock(GTBlocks.TREATED_WOOD_PLANK)

        .pattern((definition) =>
            FactoryBlockPattern.start()

                .aisle("AAAAA", "BBBBB")
                .aisle("ACCCA", "B   B")
                .aisle("ACCCA", "B D B")
                .aisle("ACCCA", "B   B")
                .aisle("AA@AA", "BBBBB")

                .where("@", Predicates.controller(Predicates.blocks(definition.get())))

                .where(
                    "A",
                    Predicates.blocks("gtceu:treated_wood_planks")

                        .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                        .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                        .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))
                        .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(1).setPreviewCount(1))
                ) // make sure this is inside the .where, otherwise it will break shit

                .where("B", Predicates.blocks("gtceu:treated_wood_fence"))
                .where("C", Predicates.blocks("minecraft:dirt"))
                .where("D", Predicates.blocks("minecraft:air"))

                .where(" ", Predicates.air())

                .build()
        )

            .workableCasingModel(
            "gtceu:block/treated_wood_planks",       
            "kubejs:block/multiblock/micro_farm"
        )



        // .create("celestial_post_box", "multiblock")
        // .rotationState(RotationState.NON_Y_AXIS)
        // .recipeTypes("celestial_post_box")
        // .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT])

        // // base block appearance
        // .appearanceBlock(() => Block.getBlock("kubejs:ostrum_casing"))

        // .pattern((definition) =>
        //     FactoryBlockPattern.start()

        //         .aisle("AAAAA", "ABBBA", "ABBBA", "ABBBA", "AAAAA")
        //         .aisle("ABBBA", "TECET", "TECET", "TECET", "ACCCA")
        //         .aisle("ABBBA", "TCDCT", "TCDCT", "TCDCT", "ACCCA")
        //         .aisle("ABBBA", "TECET", "TECET", "TECET", "ACCCA")
        //         .aisle("AA@AA", "ATTTA", "ATTTA", "ATTTA", "AAAAA")

        //         .where("@", Predicates.controller(Predicates.blocks(definition.get())))

        //         .where(
        //             "A",
        //             Predicates.blocks("kubejs:ostrum_casing")

        //                 .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
        //                 .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
        //                 .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
        //                 .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))
        //                 .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(1))
        //         ) // make sure this is inside the .where, otherwise it will break shit

        //         .where("B", Predicates.blocks("gtceu:assembly_line_grating"))
        //         .where("T", Predicates.blocks("gtceu:laminated_glass"))
        //         .where("C", Predicates.blocks("gtceu:high_power_casing"))
        //         .where("D", Predicates.blocks("gtceu:lunarium_block"))
        //         .where("E", Predicates.blocks("gtceu:assembly_line_unit"))

        //         .where(" ", Predicates.air())

        //         .build()
        // )

        // .workableCasingModel(`kubejs:block/casing/ostrum_casing`, `gtceu:block/machines/electrolyzer`)

    event
        .create("helper_software_installation_unit", "multiblock")
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes("helper_software_installation_unit")
        .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT])

        // base block appearance
        .appearanceBlock(() => Block.getBlock("voyagercore:ostrum_casing"))

        .pattern((definition) =>
            FactoryBlockPattern.start()

                .aisle("AAAAA", "TCCCT", "TCCCT", "AAAAA")
                .aisle("AAAAA", "TDDDT", "TDDDT", "AAAAA")
                .aisle("AA@AA", "TCCCT", "TCCCT", "AAAAA")

                .where("@", Predicates.controller(Predicates.blocks(definition.get())))

                .where(
                    "A",
                    Predicates.blocks("voyagercore:ostrum_casing")

                        .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                        .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                        .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                        .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))
                        .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(1))
                ) // make sure this is inside the .where, otherwise it will break shit

                .where("T", Predicates.blocks("gtceu:computer_heat_vent"))
                .where("C", Predicates.blocks("gtceu:computer_casing"))
                .where("D", Predicates.blocks("gtceu:high_power_casing"))

                .where(" ", Predicates.air())

                .build()
        )

        .workableCasingModel(`voyagercore:block/casing/ostrum_casing`, `kubejs:block/multiblock/helper_software_installation_unit`)


        event
        .create("large_dehumidifier", "multiblock")
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes("large_dehumidifier")
        .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT])

        // base block appearance
        .appearanceBlock(() => Block.getBlock("gtceu:lv_machine_casing"))

        .pattern((definition) =>
            FactoryBlockPattern.start()

                .aisle("AAA", "AAA", "AAA")
                .aisle("AAA", "A A", "AAA")
                .aisle("AAA", "A@A", "AAA")

                .where("@", Predicates.controller(Predicates.blocks(definition.get())))

                .where(
                    "A",
                    Predicates.blocks("gtceu:lv_machine_casing")

                        .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                        .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                        .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))
                        .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(1))
                ) // make sure this is inside the .where, otherwise it will break shit

                .where(" ", Predicates.air())

                .build()
        )

        .workableCasingModel(`gtceu:block/casings/voltage/lv/bottom`, `gtceu:block/machines/air_scrubber`)

    // core mod incoming!!

    event
        .create("atmospheric_collector", "multiblock")
        .rotationState(RotationState.NON_Y_AXIS)
        .langValue("Atmospheric Collector")
        .recipeType("atmospheric_collector")
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT])
        .appearanceBlock(() => Block.getBlock("gtceu:clean_machine_casing"))
        .pattern((definition) =>
            FactoryBlockPattern.start()
                .aisle(
                    "     AAAAAAAAAAAAAAA    ",
                    "     AAAAA     AAAAA    ",
                    "     AAA         AAA    ",
                    "     AA           AA    ",
                    "     AA           AA    ",
                    "     A             A    ",
                    "     A             A    ",
                    "     A             A    ",
                    "     A             A    ",
                    "     A             A    ",
                    "      A           A     ",
                    "      A           A     ",
                    "       A         A      ",
                    "        AA     AA       ",
                    "          AAAAA         "
                )
                .aisle(
                    "NNNNNAAAAAAAAAAAAAAA GGG",
                    "NNNNNA    RRRRR    ATGGG",
                    "     A  RR     RR  A GGG",
                    "     A R         R A    ",
                    "     A R         R A    ",
                    "     AR           RA    ",
                    "     AR           RA    ",
                    "     AR           RA    ",
                    "     AR           RA    ",
                    "     AR           RA    ",
                    "      AR         RA     ",
                    "      AR         RA     ",
                    "       ARR     RRA      ",
                    "        AARRRRRAA       ",
                    "          AAAAA         "
                )
                .aisle(
                    "NNNNNAAAAAAAAAAAAAAATGGG",
                    "NNNNNA             A GGG",
                    "     A    FFFFF    ATGGG",
                    "     A  FFFFFFFFF  A    ",
                    "     A  FFFFFFFFF  A    ",
                    "     A FFFFFFFFFFF A    ",
                    "     A FFFFFFFFFFF A    ",
                    "     A FFFFFFFFFFF A    ",
                    "     A FFFFFFFFFFF A    ",
                    "     A FFFFFFFFFFF A    ",
                    "      A FFFFFFFFF A     ",
                    "      A FFFFFFFFF A     ",
                    "       A  FFFFF  A      ",
                    "        AA     AA       ",
                    "          AAAAA         "
                )
                .aisle(
                    "NNNNNAAAAAAAAAAAAAAA GGG",
                    "NNNNNA             ATGGG",
                    "     A             A GGG",
                    "     A             A    ",
                    "     A             A    ",
                    "     A             A    ",
                    "     A             A    ",
                    "     A             A    ",
                    "     A             A    ",
                    "     A             A    ",
                    "      A           A     ",
                    "      A           A     ",
                    "       A         A      ",
                    "        AA     AA       ",
                    "          AAAAA         "
                )
                .aisle(
                    "     AAAAAAAAAAAAAAA    ",
                    "     A             A    ",
                    "     A             A    ",
                    "     A             A    ",
                    "     A             A    ",
                    "     A             A    ",
                    "     A             A    ",
                    "     A             A    ",
                    "     A             A    ",
                    "     A             A    ",
                    "      A           A     ",
                    "      A           A     ",
                    "       A         A      ",
                    "        AA     AA       ",
                    "          AAAAA         "
                )
                .aisle(
                    "NNNNNAAAAAAAAAAAAAAA    ",
                    "NNNNNA             A    ",
                    "     A             A    ",
                    "     A             A    ",
                    "     A             A    ",
                    "     A             A    ",
                    "     A             A    ",
                    "     A             A    ",
                    "     A             A    ",
                    "     A             A    ",
                    "      A           A     ",
                    "      A           A     ",
                    "       A         A      ",
                    "        AA     AA       ",
                    "          AAAAA         "
                )
                .aisle(
                    "NNNNNAAAAAAAAAAAAAAA    ",
                    "NNNNNA             A    ",
                    "     A             A    ",
                    "     A             A    ",
                    "     A             A    ",
                    "     A             A    ",
                    "     A             A    ",
                    "     A             A    ",
                    "     A             A    ",
                    "     A             A    ",
                    "      A           A     ",
                    "      A           A     ",
                    "       A         A      ",
                    "        AA     AA       ",
                    "          AAAAA         "
                )
                .aisle(
                    "NNNNNAAAAAAAAAAAAAAA GGG",
                    "NNNNNA             ATGGG",
                    "     A             A GGG",
                    "     A             A    ",
                    "     A             A    ",
                    "     A             A    ",
                    "     A             A    ",
                    "     A             A    ",
                    "     A             A    ",
                    "     A             A    ",
                    "      A           A     ",
                    "      A           A     ",
                    "       A         A      ",
                    "        AA     AA       ",
                    "          AAAAA         "
                )
                .aisle(
                    "     AAAAAAAAAAAAAAATGGG",
                    "     A             A GGG",
                    "     A             ATGGG",
                    "     A             A    ",
                    "     A             A    ",
                    "     A             A    ",
                    "     A             A    ",
                    "     A             A    ",
                    "     A             A    ",
                    "     A             A    ",
                    "      A           A     ",
                    "      A           A     ",
                    "       A         A      ",
                    "        AA     AA       ",
                    "          AAAAA         "
                )
                .aisle(
                    "NNNNNAAAAAAAAAAAAAAA GGG",
                    "NNNNNA             ATGGG",
                    "     A             A GGG",
                    "     A             A    ",
                    "     A             A    ",
                    "     A             A    ",
                    "     A             A    ",
                    "     A             A    ",
                    "     A             A    ",
                    "     A             A    ",
                    "      A           A     ",
                    "      A           A     ",
                    "       A         A      ",
                    "        AA     AA       ",
                    "          AAAAA         "
                )
                .aisle(
                    "NNNNNAAAAAAAAAAAAAAA    ",
                    "NNNNNA             A    ",
                    "     A             A    ",
                    "     A             A    ",
                    "     A             A    ",
                    "     A             A    ",
                    "     A             A    ",
                    "     A             A    ",
                    "     A             A    ",
                    "     A             A    ",
                    "      A           A     ",
                    "      A           A     ",
                    "       A         A      ",
                    "        AA     AA       ",
                    "          AAAAA         "
                )
                .aisle(
                    "NNNNNAAAAAAAAAAAAAAA    ",
                    "NNNNNA             A    ",
                    "     A             A    ",
                    "     A             A    ",
                    "     A             A    ",
                    "     A             A    ",
                    "     A             A    ",
                    "     A             A    ",
                    "     A             A    ",
                    "     A             A    ",
                    "      A           A     ",
                    "      A           A     ",
                    "       A         A      ",
                    "        AA     AA       ",
                    "          AAAAA         "
                )
                .aisle(
                    "     AAAAAAAAAAAAAAA    ",
                    "     A             A    ",
                    "     A             A    ",
                    "     A             A    ",
                    "     A             A    ",
                    "     A             A    ",
                    "     A             A    ",
                    "     A             A    ",
                    "     A             A    ",
                    "     A             A    ",
                    "      A           A     ",
                    "      A           A     ",
                    "       A         A      ",
                    "        AA     AA       ",
                    "          AAAAA         "
                )
                .aisle(
                    "NNNNNAAAAAAAAAAAAAAA GGG",
                    "NNNNNA             ATGGG",
                    "     A             A GGG",
                    "     A             A    ",
                    "     A             A    ",
                    "     A             A    ",
                    "     A             A    ",
                    "     A             A    ",
                    "     A             A    ",
                    "     A             A    ",
                    "      A           A     ",
                    "      A           A     ",
                    "       A         A      ",
                    "        AA     AA       ",
                    "          AAAAA         "
                )
                .aisle(
                    "NNNNNAAAAAAAAAAAAAAATGGG",
                    "NNNNNA             A GGG",
                    "     A    FFFFF    ATGGG",
                    "     A  FFFFFFFFF  A    ",
                    "     A  FFFFFFFFF  A    ",
                    "     A FFFFFFFFFFF A    ",
                    "     A FFFFFFFFFFF A    ",
                    "     A FFFFFFFFFFF A    ",
                    "     A FFFFFFFFFFF A    ",
                    "     A FFFFFFFFFFF A    ",
                    "      A FFFFFFFFF A     ",
                    "      A FFFFFFFFF A     ",
                    "       A  FFFFF  A      ",
                    "        AA     AA       ",
                    "          AAAAA         "
                )
                .aisle(
                    "NNNNNAAAAAAAAAAAAAAA GGG",
                    "NNNNNA    RRRRR    ATG@G",
                    "     A  RR     RR  A GGG",
                    "     A R         R A    ",
                    "     A R         R A    ",
                    "     AR           RA    ",
                    "     AR           RA    ",
                    "     AR           RA    ",
                    "     AR           RA    ",
                    "     AR           RA    ",
                    "      AR         RA     ",
                    "      AR         RA     ",
                    "       ARR     RRA      ",
                    "        AARRRRRAA       ",
                    "          AAAAA         "
                )
                .aisle(
                    "     AAAAAAAAAAAAAAA    ",
                    "     AAAAA     AAAAA    ",
                    "     AAA         AAA    ",
                    "     AA           AA    ",
                    "     AA           AA    ",
                    "     A             A    ",
                    "     A             A    ",
                    "     A             A    ",
                    "     A             A    ",
                    "     A             A    ",
                    "      A           A     ",
                    "      A           A     ",
                    "       A         A      ",
                    "        AA     AA       ",
                    "          AAAAA         "
                )
                .where("A", Predicates.blocks("gtceu:clean_machine_casing"))
                .where("N", Predicates.blocks("gtceu:nonconducting_casing").or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(1)))
                .where("T", Predicates.blocks("gtceu:tungstensteel_pipe_casing"))
                .where(
                    "G",
                    Predicates.blocks("gtceu:corrosion_proof_casing")
                        .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(16).setPreviewCount(1))
                        .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(16).setPreviewCount(1))
                        .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                        .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                        .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setExactLimit(1))
                )
                .where("F", Predicates.blocks("kubejs:atmospheric_filter_casing"))
                .where("R", Predicates.blocks("gtceu:robust_machine_casing"))
                .where("@", Predicates.controller(Predicates.blocks(definition.get())))
                .build()
        )
        .workableCasingModel("gtceu:block/casings/solid/machine_casing_clean_stainless_steel", "gtceu:block/machines/gas_collector")

    event
        .create("radiation_chamber", "multiblock")
        .rotationState(RotationState.NON_Y_AXIS)
        .langValue("Radiation Chamber")
        .recipeType("radiation_chamber")
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_PERFECT])
        .appearanceBlock(() => Block.getBlock("voyagercore:radiation_proof_lead_casing"))
        .pattern((definition) =>
            FactoryBlockPattern.start()
                .aisle("    BBB    ", "    LLL    ", "    LLL    ", "    LLL    ", "    LLL    ", "    BBB    ")
                .aisle("  BBAAABB  ", "  LLA ALL  ", "  LLA ALL  ", "  LLA ALL  ", "  LLA ALL  ", "  BBAAABB  ")
                .aisle(" BAAAAAAAB ", " LA     AL ", " LA     AL ", " LA     AL ", " LA     AL ", " BAAAAAAAB ")
                .aisle(" BAAAAAAAB ", " L       L ", " L       L ", " L       L ", " L       L ", " BAAAAAAAB ")
                .aisle("BAAABBBAAAB", "LA   T   AL", "LA   T   AL", "LA   T   AL", "LA   T   AL", "BAAABBBAAAB")
                .aisle("BAAABFBAAAB", "L   T T   L", "L   T T   L", "L   T T   L", "L   T T   L", "BAAABFBAAAB")
                .aisle("BAAABBBAAAB", "LA   T   AL", "LA   T   AL", "LA   T   AL", "LA   T   AL", "BAAABBBAAAB")
                .aisle(" BAAAAAAAB ", " L       L ", " L       L ", " L       L ", " L       L ", " BAAAAAAAB ")
                .aisle(" BAAAAAAAB ", " LA     AL ", " LA     AL ", " LA     AL ", " LA     AL ", " BAAAAAAAB ")
                .aisle("  BBAAABB  ", "  LLA ALL  ", "  LLA ALL  ", "  LLA ALL  ", "  LLA ALL  ", "  BBAAABB  ")
                .aisle("    B@B    ", "    LLL    ", "    LLL    ", "    LLL    ", "    LLL    ", "    BPB    ")
                .where(
                    "B",
                    Predicates.blocks("voyagercore:radiation_proof_lead_casing")
                        .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setPreviewCount(1))
                        .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setPreviewCount(1))
                        // .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setPreviewCount(1))
                        .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setPreviewCount(1))
                        .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1).setPreviewCount(1))
                        .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(1))
                )
                .where("A", Predicates.blocks("gtceu:nonconducting_casing"))
                .where("L", Predicates.blocks("gtceu:laminated_glass"))
                .where("T", Predicates.blocks("gtceu:tungstensteel_pipe_casing"))
                .where("F", Predicates.abilities(PartAbility.IMPORT_FLUIDS))
                .where("P", Predicates.blocks("gtceu:iv_parallel_hatch"))
                .where("@", Predicates.controller(Predicates.blocks(definition.get())))
                .build()
        )
        .workableCasingModel("voyagercore:block/casing/radiation_proof_lead_casing", "kubejs:block/multiblock/radiation_chamber")
})
