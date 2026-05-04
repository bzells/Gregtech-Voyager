GTCEuStartupEvents.registry("gtceu:recipe_type", event => {


});

GTCEuStartupEvents.registry("gtceu:machine", event => {

    function cubeMulti(type, casing) // note to self -> clean up the rest of the code so it looks like this. good lord this codebase is a MESS rn
    {

        event.create(`cube_${type}`, 'multiblock')
            .rotationState(RotationState.NON_Y_AXIS)
            .recipeType(type)
            .recipeModifiers([GTRecipeModifiers.OC_PERFECT, GTRecipeModifiers.BATCH_MODE])
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
                    .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setExactLimit(1)))
                .where('B', Predicates.blocks('gtceu:titanium_pipe_casing'))
                .build())
            .workableCasingModel(`kubejs:block/casing/${casing}_casing`,
            `gtceu:block/machines/${type}`);

    }

    cubeMulti('centrifuge', 'durable_desh')
    cubeMulti('electrolyzer', 'firm_ultimet')
    cubeMulti('macerator', 'stout_titanium_carbide')
});