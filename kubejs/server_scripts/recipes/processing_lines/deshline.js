
ServerEvents.recipes((event) => {
    
    function chance_sifting(input, output, eut, time)
    {
        event.recipes.gtceu.sifter("chance_sifting_" + output.split(":")[1])
        .itemInputs(input)
        .chancedOutput(output, 2500, 150)
        .chancedOutput(output, 1500, 100)
        .chancedOutput(output, 1500, 100)
        .chancedOutput(output, 1500, 50)
        .chancedOutput(output, 1000, 50)
        .chancedOutput(output, 500, 50)
        .EUt(eut)
        .duration(time * 20)
    }

    function chance_sifting2(input, output, output2, eut, time)
    {
        event.recipes.gtceu.sifter("chance_sifting_" + output.split(":")[1])
        .itemInputs(input)
        .chancedOutput(output, 6000, 1000)
        .chancedOutput(output, 2500, 500)
        .chancedOutput(output, 1500, 250)
        .chancedOutput(output2, 4000, 1000)
        .chancedOutput(output2, 1000, 100)
        .chancedOutput(output2, 1000, 50)
        .EUt(eut)
        .duration(time * 20)
    }

    global.recipe_electrolyzer(event, "lunite_dust", ["9x gtceu:lunite_dust"], [], ["3x gtceu:raw_desh_dust", "2x gtceu:silicon_dust"], ["gtceu:oxygen 2000"], 20, 120)

    global.recipe_lcr(event, "desh_group_sludge_lunite", ["gtceu:purified_lunite_ore"], ["gtceu:formic_acid 100"], ["6x gtceu:desh_group_sludge_dust"], [], 10, 32)
    global.recipe_lcr(event, "desh_group_sludge_socochalamite", ["gtceu:purified_socochalamite_ore"], ["gtceu:formic_acid 100"], ["4x gtceu:desh_group_sludge_dust"], [], 10, 32)
    global.recipe_lcr(event, "desh_group_sludge_glunite", ["gtceu:purified_glunite_ore"], ["gtceu:formic_acid 100"], ["4x gtceu:desh_group_sludge_dust"], [], 10, 32)

    global.recipe_lcr(event, "desh_group_sludge_desh", ["gtceu:purified_desh_ore"], ["gtceu:formic_acid 100"], ["8x gtceu:desh_group_sludge_dust"], [], 10, 32)

    global.recipe_lcr(event, "desh_group_sludge_raw_desh", ["gtceu:raw_desh_dust", "gtceu:carbon_dust"], ["gtceu:formic_acid 100"], ["4x gtceu:desh_group_sludge_dust"], ["gtceu:carbon_dioxide 1000"], 10, 32)


    global.recipe_centrifuge(event, "dsg_processing", ["12x gtceu:desh_group_sludge_dust"], ["gtceu:aqua_regia 2000"], ["6x gtceu:lunar_metal_residue_dust", "4x gtceu:dense_metal_mixture_dust", "2x gtceu:solar_metal_mixture_dust"], [], 30, 1920)

    // lunarium

    global.recipe_mixer(
        event,
        "dense_metal_mixture_processing",
        "4x gtceu:dense_metal_mixture_dust",
        "gtceu:toluene 100",
        ["4x gtceu:lunarium_metal_sludge_dust"],
        "gtceu:thick_dense_metal_solution 333",
        1920,
        30
    )

    global.recipe_lcr(
        event,
        "acidic_lunarium_sludge_solution",
        "4x gtceu:lunarium_metal_sludge_dust",
        "gtceu:hydrochloric_acid 667",
        [],
        "gtceu:acidic_lunarium_sludge_solution 2000",
        1920,
        30
    )


    // event, name, input, itemOutput, fluidOutputs, eut, time
    global.recipe_distillation(
        event,
        "dirty_lunarium_dust",
        "gtceu:acidic_lunarium_sludge_solution 2000",
        "3x gtceu:dirty_lunarium_dust",
        ["gtceu:hydrochloric_acid 2000", "gtceu:toluene 50"],
        7860,
        15
    )

    chance_sifting("gtceu:dirty_lunarium_dust",
        "gtceu:raw_lunarium_dust",
        120,
        10
    )

    event.recipes.gtceu.electric_blast_furnace("lunarium_dust_from_raw")
    .itemInputs("3x gtceu:raw_lunarium_dust", "gtceu:carbon_dust")
    .itemOutputs("gtceu:lunarium_dust")
    .outputFluids("gtceu:carbon_dioxide 1000")
    .EUt(1920)
    .circuit(1)
    .duration(20 * 75)
    .blastFurnaceTemp(3600)

    event.recipes.gtceu.electric_blast_furnace("lunarium_ingot_from_raw")
    .itemInputs("4x gtceu:raw_lunarium_dust")
    .itemOutputs("gtceu:hot_lunarium_ingot")
    .EUt(7860)
    .circuit(2)
    .duration(20 * 35)
    .blastFurnaceTemp(4500)

    // tungsten
    event.recipes.gtceu.electric_blast_furnace("dirty_tungsten_dust")
    .inputFluids("gtceu:thick_dense_metal_solution 999")
    .outputFluids("gtceu:nitric_acid 1000")
    .itemOutputs("3x gtceu:dirty_tungsten_dust")
    .EUt(480)
    .circuit(1)
    .duration(20 * 30)
    .blastFurnaceTemp(2700)

    event.recipes.gtceu.electric_blast_furnace("dirty_tungsten_dust_boosted")
    .inputFluids("gtceu:thick_dense_metal_solution 999", "kubejs:blasting_gas 100")
    .outputFluids("gtceu:nitric_acid 1000")
    .itemOutputs("3x gtceu:dirty_tungsten_dust")
    .EUt(480)
    .circuit(2)
    .duration(20 * 20)
    .blastFurnaceTemp(2700)

    chance_sifting("gtceu:dirty_tungsten_dust",
        "gtceu:raw_tungsten_dust",
        120,
        10
    )

    event.recipes.gtceu.electric_blast_furnace("tungsten_dust_from_raw")
    .itemInputs("3x gtceu:raw_tungsten_dust", "gtceu:carbon_dust")
    .itemOutputs("gtceu:tungsten_dust")
    .outputFluids("gtceu:carbon_dioxide 1000")
    .EUt(480)
    .circuit(1)
    .duration(20 * 90)
    .blastFurnaceTemp(2700)

    event.recipes.gtceu.electric_blast_furnace("tungsten_ingot_from_raw")
    .itemInputs("4x gtceu:raw_tungsten_dust")
    .itemOutputs("gtceu:hot_tungsten_ingot")
    .EUt(1920)
    .circuit(2)
    .duration(20 * 45)
    .blastFurnaceTemp(3600)

    // desh
    global.recipe_lcr(
        event,
        "sulfuric_lunar_residue_solution",
        "3x gtceu:lunar_metal_residue_dust",
        "gtceu:sulfuric_acid 1000",
        [],
        "gtceu:sulfuric_lunar_residue_solution 1000",
        120,
        30
    )

    // global.recipe_electrolyzer(event: any, name: any, inputItems: any, inputFluids: any, outputItems: any, outputFluids: any, duration: any, eut: any): void
    global.recipe_electrolyzer(
        event,
        "lunar_metal_blend",
        [],
        "gtceu:sulfuric_lunar_residue_solution 1000",
        ["4x gtceu:lunar_metal_blend_dust", "gtceu:sulfur_dust"],
        ["gtceu:oxygen 4000", "gtceu:hydrogen 2000"],
        15, 120

    )

    chance_sifting2(
        "2x gtceu:lunar_metal_blend_dust",
        "gtceu:desh_dust",
        "gtceu:rutile_dust",
        120,
        20
    )

    event.recipes.gtceu.electric_blast_furnace("desh_ingot_from_raw")
    .itemInputs("gtceu:raw_desh_dust", "gtceu:carbon_dust")
    .itemOutputs("3x gtceu:desh_nugget")
    .outputFluids("gtceu:carbon_dioxide 1000")
    .EUt(7860)
    .circuit(1)
    .duration(20 * 45)
    .blastFurnaceTemp(3600)

    // solar crystals

    global.recipe_lcr(
        event,
        "solar_crystal_blend",
        "2x gtceu:solar_metal_mixture_dust",
        "gtceu:fluorine 500",
        ["3x gtceu:solar_crystal_blend_dust"],
        [],
        480,
        20
    )

    event.recipes.gtceu.autoclave("dormant_solar_crystal")
    .itemInputs("1x gtceu:solar_crystal_blend_dust")
    .inputFluids("gtceu:mercury 500")
    .itemOutputs("kubejs:dormant_solar_crystal")
    .EUt(1920)
    .duration(45 * 20)

    event.recipes.gtceu.electric_blast_furnace("activated_solar_crystal")
    .itemInputs("kubejs:dormant_solar_crystal", "3x gtceu:sodalite_dust")
    .itemOutputs("kubejs:activated_solar_crystal")
    .EUt(32000 * .94)
    .circuit(1)
    .duration(20 * 120)
    .blastFurnaceTemp(4500)

    event.recipes.gtceu.electric_blast_furnace("activated_solar_crystal_boosted")
    .itemInputs("3x kubejs:dormant_solar_crystal", "2x gtceu:opal_dust")
    .inputFluids("kubejs:blasting_gas 1000")
    .itemOutputs("4x kubejs:activated_solar_crystal")
    .EUt(32000 * .94)
    .circuit(2)
    .duration(20 * 80)
    .blastFurnaceTemp(6200)
})
