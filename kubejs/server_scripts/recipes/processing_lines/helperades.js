    function mixer(event, name, ingredientsItem, fluidIngredients, itemOutputs, fluidOutputs, eut, time) {
        event.recipes.gtceu
            .mixer("kubejs:mixer_" + name)
            .itemInputs(ingredientsItem)
            .inputFluids(fluidIngredients)
            .itemOutputs(itemOutputs)
            .outputFluids(fluidOutputs)
            .duration(time * 20)
            .EUt(eut)
    }

    function lcr(event, name, inputItems, inputFluids, outputItems, outputFluids, duration, eut, helper) {
        event.recipes.gtceu
            .large_chemical_reactor("kubejs:lcr_" + name)
            .itemInputs(inputItems)
            .itemOutputs(outputItems)
            .inputFluids(inputFluids)
            .outputFluids(outputFluids)
            .duration(duration * 20)
            .EUt(eut)
    }
ServerEvents.recipes((event) => {


    mixer(event, "sugar_water",
        "2x minecraft:sugar",
        "gtceu:distilled_water 1000",
        [],
        "gtceu:sugar_water 1000", 32, 10
    )
    mixer(event, "iodized_salt",
        ["1x gtceu:salt_dust", "gtceu:potassium_iodide_dust"],
        [],
        ["2x gtceu:iodized_salt_dust"],
        [], 120, 20
    )
    mixer(event, "electrolyte_mixture",
        ["1x gtceu:phosphate_dust", "gtceu:calcium_dust", "gtceu:potassium_dust"],
        [],
        ["3x gtceu:electrolyte_mixture_dust"],
        [], 120, 20
    )
    event.recipes.gtceu.chemical_reactor("kubejs:soda")
    .notConsumable("#forge:dyes/light_blue")
    .inputFluids("gtceu:sugar_water 1000", "gtceu:carbon_dioxide 1000")
    .outputFluids("gtceu:soda 1000")
    .EUt(1920)
    .duration(20)

    event.recipes.gtceu.large_chemical_reactor("kubejs:helperade")
    .itemInputs("3x gtceu:electrolyte_mixture_dust", "2x gtceu:iodized_salt_dust")
    .inputFluids("gtceu:soda 1000")
    .outputFluids("voyagercore:helperade_br 1000")
    .EUt(1920)
    .duration(20 * 30)

})