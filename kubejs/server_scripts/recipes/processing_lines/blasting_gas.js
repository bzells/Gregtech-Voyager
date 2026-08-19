ServerEvents.recipes((event) => {
    event.recipes.gtceu
        .large_chemical_reactor("kubejs:calcium_carbonate") // recipe ID
        .itemInputs("gtceu:calcium_hydroxide_dust")
        .inputFluids("gtceu:carbon_dioxide 1000")
        .itemOutputs("gtceu:calcite_dust")
        .outputFluids("minecraft:water 1000")
        .duration(200) // in ticks
        .EUt(120)

    // event.recipes.gtceu.electric_blast_furnace("kubejs:calcium_oxide")
    //     .itemInputs("gtceu:calcium_carbonate_dust")
    //     .itemOutputs("gtceu:calcium_oxide_dust")
    //     .outputFluids("gtceu:carbon_dioxide 1000")
    //     .duration(20 * 10)
    //     .EUt(32)
    //     .blastFurnaceTemp(1800);

    event.recipes.gtceu
        .large_chemical_reactor("kubejs:calcium_carbide")
        .itemInputs("2x gtceu:quicklime_dust", "6x gtceu:carbon_dust")
        .itemOutputs("2x gtceu:calcium_carbide_dust")
        .outputFluids("gtceu:carbon_dioxide 2000")
        .duration(20 * 5)
        .EUt(120)

    event.recipes.gtceu
        .large_chemical_reactor("kubejs:acetylene") // recipe ID
        .itemInputs("gtceu:calcium_carbide_dust")
        .inputFluids("minecraft:water 1000")
        .itemOutputs("gtceu:calcium_hydroxide_dust")
        .outputFluids("gtceu:acetylene 1000")
        .duration(100) // in ticks
        .EUt(480)

    event.recipes.gtceu
        .large_chemical_reactor("kubejs:blasting_gas") // recipe ID
        .inputFluids("gtceu:acetylene 1000", "gtceu:nitrogen 1000", "gtceu:lpg 750")
        .outputFluids("kubejs:blasting_gas 1000")
        .duration(300) // in ticks
        .EUt(1920)
})
