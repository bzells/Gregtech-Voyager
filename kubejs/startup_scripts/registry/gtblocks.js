
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('helper_wheel')
        .category('generator')                        // category shown in JEI/REI
        .setEUIO('out')                                
        .setMaxIOSize(2, 2, 1, 1);      
        
    event.create('helper_assembler')
        .category('simple')                        // category shown in JEI/REI
        .setEUIO('in')                                
        .setMaxIOSize(9, 2, 1, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT);

    event.create('oven')
        .category('simple')                        // category shown in JEI/REI
        .setEUIO('in')                                
        .setMaxIOSize(9, 9, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT);

    event.create('voucher_claimer')
        .category('simple')                        // category shown in JEI/REI
        .setEUIO('in')                                
        .setMaxIOSize(1, 9, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT);
});


GTCEuStartupEvents.registry("gtceu:machine", event => {
    event.create('helper_wheel', 'generator')
        .tiers(GTValues.LV, GTValues.MV)
        .tankScalingFunction(tier => tier * 1600)
        .definition((tier, builder) =>
            builder
                .langValue(`${GTValues.VLVH[tier]} Helper Wheel`)
                .recipeType('helper_wheel')
                .workableTieredHullModel("kubejs:block/overlay/helper_wheel")
    )

    event.create('helper_assembler', 'simple')
    .tiers(GTValues.LV, GTValues.MV, GTValues.HV)
    .tankScalingFunction(tier => tier * 1600)
    .definition((tier, builder) =>
        builder
            .langValue(`${GTValues.VLVH[tier]} Helper Assembler`)
            .recipeType('helper_assembler')
            .workableTieredHullModel("kubejs:block/overlay/helper_assembler")
            
    )

    event.create('oven', 'simple')
    .tiers(GTValues.LV, GTValues.MV, GTValues.HV)
    .tankScalingFunction(tier => tier * 1600)
    .definition((tier, builder) =>
        builder
            .langValue(`${GTValues.VLVH[tier]} Oven`)
            .recipeType('oven')
            .workableTieredHullModel("kubejs:block/overlay/oven")
            
    )

    event.create('voucher_claimer', 'simple')
    .tiers(GTValues.LV, GTValues.MV, GTValues.HV)
    .definition((tier, builder) =>
        builder
            .langValue(`${GTValues.VLVH[tier]} Voucher Claimer`)
            .recipeType('voucher_claimer')
            .workableTieredHullModel("kubejs:block/overlay/oven")
            
    )
});