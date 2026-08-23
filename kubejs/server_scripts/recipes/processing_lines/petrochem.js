ServerEvents.recipes((event) => {

    event.remove({ input: ["gtceu:steam_cracked_ethane"] })
    event.remove({ input: ["gtceu:hydro_cracked_ethane"] })


    event.recipes.gtceu
        .distillation_tower("kubejs:steam_cracked_ethane") // recipe ID
        .inputFluids("gtceu:steam_cracked_ethane 2000")
        .itemOutputs("gtceu:carbon_dust")
        .outputFluids("gtceu:ethylene 1000", "gtceu:methane 1250", "gtceu:acetylene 500")
        .duration(20) // in ticks
        .EUt(96)

    event.recipes.gtceu
        .distillation_tower("kubejs:hydro_cracked_ethane") // recipe ID
        .inputFluids("gtceu:hydro_cracked_ethane 1500")
        .itemOutputs("gtceu:carbon_dust")
        .outputFluids("gtceu:methane 2000", "gtceu:hydrogen 2000", "gtceu:acetylene 1000")
        .duration(20) // in ticks
        .EUt(96)
})
