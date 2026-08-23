ServerEvents.recipes((event) => {

    // event, name, inputItems, inputFluids, outputItems, outputFluids, duration, eut
    global.recipe_centrifuge(event, "cocoa_beans", "minecraft:jungle_log",
        [], ["2x gtceu:wood_dust", "2x minecraft:cocoa_beans"], ['gtceu:methane 80'], 30, 28
    )

    global.recipe_pyrolyse_oven(event, "jungle_wood_vinegar",
        "16x minecraft:jungle_log", "gtceu:nitrogen 1000",
        "16x minecraft:charcoal", "kubejs:jungle_wood_vinegar 4000",
        16, 480, 18
    )

    global.recipe_distillation(event, "cacao_wood_residue", "kubejs:jungle_wood_vinegar 1000",
        "gtceu:carbon_dust", 
        ["kubejs:cacao_residue 1000", "gtceu:acetone 2000", "gtceu:methanol 400", "gtceu:carbon_monoxide 1000"],
        480, 45
    )

    global.recipe_centrifuge(event, "raw_cacao_powder", [],
        ["kubejs:cacao_residue 1000"], ["2x kubejs:raw_cacao_powder", "1x gtceu:carbon_dust"], ['gtceu:ethanol 400', "kubejs:dirty_cacao_milk 1000"], 30, 120
    )
    global.recipe_mixer(event, "tempered_cacao_milk",
        ["minecraft:sugar", "kubejs:raw_cacao_powder"], "minecraft:milk 500",
        [], "kubejs:tempered_cacao 576", 120, 16
    )
    global.recipe_mixer(event, "tempered_cacao__cacao_milk",
        ["minecraft:sugar", "kubejs:raw_cacao_powder"], "kubejs:cacao_milk 400",
        [], "kubejs:tempered_cacao 1440", 120, 12
    )
    global.recipe_fluid_solidifier(event, "baking_chocolate_from_jungle_line",
        "kubejs:tempered_cacao 144", "kubejs:baking_chocolate", 1, 8
    )
    global.recipe_fluid_heater(event, "cacao_milk",
        "kubejs:dirty_cacao_milk 100", "kubejs:cacao_milk 80", .5, 28
    )

    
})