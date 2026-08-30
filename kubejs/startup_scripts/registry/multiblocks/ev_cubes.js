// @ts-nocheck
GTCEuStartupEvents.registry("gtceu:machine", (event) => {
    function cubeMulti(type, casing) {
        // note to self -> clean up the rest of the code so it looks like this. good lord this codebase is a MESS rn
        event
            .create(`cube_${type}`, "multiblock")
            .rotationState(RotationState.NON_Y_AXIS)
            .recipeType(type)
            .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT, GTRecipeModifiers.BATCH_MODE, $VoyagerCoreRecipeModifiers.CUBE_BOOSTING, $VoyagerCoreRecipeModifiers.HELPER_COMPATABILITY])
            .appearanceBlock(() => Block.getBlock(`kubejs:${casing}_casing`))
            .pattern(definition => FactoryBlockPattern.start()
                .aisle('CCC', 'CCC', 'CCC')
                .aisle('CCC', 'CBC', 'CCC')
                .aisle('CCC', 'C@C', 'CCC')
                .where('@', Predicates.controller(Predicates.blocks(definition.get())))
                .where('C', Predicates.blocks(`kubejs:${casing}_casing`).setMinGlobalLimited(5)
                    .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                    .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                    .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))
                    .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))
                    .or(Predicates.blocks('gtceu:maintenance_hatch').setExactLimit(1))
                    .or(Predicates.abilities($VoyagerPartAbilities.HELPER_HOLDER).setMaxGlobalLimited(1).setPreviewCount(1))
                    .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setExactLimit(1)))
                .where('B', Predicates.blocks('gtceu:titanium_pipe_casing'))
                .build())
            .workableCasingModel(`kubejs:block/casing/${casing}_casing`,
            `gtceu:block/machines/${type}`);

    }

    function cubeVMulti(type, casing) {
        // note to self -> clean up the rest of the code so it looks like this. good lord this codebase is a MESS rn
        event
            .create(`cube_${type}`, "multiblock")
            .rotationState(RotationState.NON_Y_AXIS)
            .recipeType(type)
            .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT, GTRecipeModifiers.BATCH_MODE, $VoyagerCoreRecipeModifiers.CUBE_BOOSTING, $VoyagerCoreRecipeModifiers.HELPER_COMPATABILITY])
            .appearanceBlock(() => Block.getBlock(`voyagercore:${casing}_casing`))
            .pattern(definition => FactoryBlockPattern.start()
                .aisle('CCC', 'CCC', 'CCC')
                .aisle('CCC', 'CBC', 'CCC')
                .aisle('CCC', 'C@C', 'CCC')
                .where('@', Predicates.controller(Predicates.blocks(definition.get())))
                .where('C', Predicates.blocks(`voyagercore:${casing}_casing`).setMinGlobalLimited(5)
                    .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                    .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                    .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))
                    .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))
                    .or(Predicates.blocks('gtceu:maintenance_hatch').setExactLimit(1))
                    .or(Predicates.abilities($VoyagerPartAbilities.HELPER_HOLDER).setMaxGlobalLimited(1).setPreviewCount(1))
                    .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setExactLimit(1)))
                .where('B', Predicates.blocks('gtceu:titanium_pipe_casing'))
                .build())
            .workableCasingModel(`voyagercore:block/casing/${casing}_casing`,
            `gtceu:block/machines/${type}`);

    }

    function cubeMultiCustomVC(type, casing) {
        // note to self -> clean up the rest of the code so it looks like this. good lord this codebase is a MESS rn
        event
            .create(`cube_${type}`, "multiblock")
            .rotationState(RotationState.NON_Y_AXIS)
            .recipeType(type)
            .recipeModifiers([GTRecipeModifiers.BATCH_MODE, $VoyagerCoreRecipeModifiers.CUBE_BOOSTING, $VoyagerCoreRecipeModifiers.HELPER_COMPATABILITY, GTRecipeModifiers.OC_NON_PERFECT])
            .appearanceBlock(() => Block.getBlock(`voyagercore:${casing}_casing`))
            .pattern(definition => FactoryBlockPattern.start()
                .aisle('CCC', 'CCC', 'CCC')
                .aisle('CCC', 'CBC', 'CCC')
                .aisle('CCC', 'C@C', 'CCC')
                .where('@', Predicates.controller(Predicates.blocks(definition.get())))
                .where('C', Predicates.blocks(`voyagercore:${casing}_casing`).setMinGlobalLimited(5)
                    .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(4).setPreviewCount(1))
                    .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                    .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))
                    .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))
                    .or(Predicates.blocks('gtceu:maintenance_hatch').setExactLimit(1))
                    .or(Predicates.abilities($VoyagerPartAbilities.HELPER_HOLDER).setMaxGlobalLimited(1).setPreviewCount(1))
                    .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setExactLimit(1)))
                .where('B', Predicates.blocks('gtceu:titanium_pipe_casing'))
                .build())
            .workableCasingModel(`voyagercore:block/casing/${casing}_casing`,
            `kubejs:block/overlay/${type}`);

    }

    cubeMulti("centrifuge", "durable_desh")
    cubeMulti("electrolyzer", "firm_ultimet")
    cubeMulti("macerator", "stout_titanium_carbide")
    cubeMultiCustomVC("oven", "radiation_proof_lead")
    cubeMulti("thermal_centrifuge", "heat_resistant_refined_fluxed_electrum")
    cubeVMulti("autoclave", "condensation_resistant_tungsten")
    cubeVMulti("assembler", "platinum")
    cubeVMulti("mixer", "energetic")
    // cubeMulti('radiation_chamber', 'radiation_proof_lead')
})
