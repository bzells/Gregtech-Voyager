

ServerEvents.recipes(event => {

    event.remove({input: ['gtceu:oil_medium']})
    event.remove({input: ['gtceu:steam_cracked_ethane']})
    event.remove({input: ['gtceu:hydro_cracked_ethane']})
    event.recipes.gtceu
        .distillation_tower('kubejs:raw_oil')   // recipe ID
        .inputFluids("gtceu:oil_medium 100")
        .outputFluids('gtceu:sulfuric_gas 60', 'gtceu:sulfuric_heavy_fuel 10', 'gtceu:sulfuric_light_fuel 50', 'gtceu:naphtha 150', 'gtceu:sulfuric_kerosene 75')
        .itemOutputs('gtceu:carbon_dust')
        .duration(20)                                 // in ticks
        .EUt(96)
        
    event.recipes.gtceu
        .chemical_reactor('kubejs:sulfuric_kerosene')   // recipe ID
        .inputFluids("gtceu:sulfuric_kerosene 12000", 'gtceu:hydrogen 2000')
        .outputFluids('gtceu:hydrogen_sulfide 1000', 'gtceu:kerosene 12000')
        .duration(20 * 8)                                 // in ticks
        .EUt(480)  

    event.recipes.gtceu
        .distillation_tower('kubejs:steam_cracked_ethane')   // recipe ID
        .inputFluids("gtceu:steam_cracked_ethane 2000")
        .itemOutputs('gtceu:carbon_dust')
        .outputFluids('gtceu:ethylene 1000', 'gtceu:methane 1250', 'gtceu:acetylene 500')
        .duration(20)                                 // in ticks
        .EUt(96)

    event.recipes.gtceu
        .distillation_tower('kubejs:hydro_cracked_ethane')   // recipe ID
        .inputFluids("gtceu:hydro_cracked_ethane 1500")
        .itemOutputs('gtceu:carbon_dust')
        .outputFluids('gtceu:methane 2000', 'gtceu:hydrogen 2000', 'gtceu:acetylene 1000')
        .duration(20)                                 // in ticks
        .EUt(96)



});
