//fluxed_titanium_electrum_compound



ServerEvents.recipes(event => {
    event.recipes.gtceu
        .large_chemical_reactor('kubejs:crystalline_titanium_electrum')   // recipe ID
        .itemInputs('3x gtceu:fluxed_titanium_electrum_compound_dust')
        .inputFluids("gtceu:fluorine 1000")
        .itemOutputs('8x kubejs:crystalline_titanium_electrum')
        .duration(400)                                 // in ticks
        .EUt(1924)  

    event.recipes.gtceu
        .large_chemical_reactor('kubejs:crystalline_titanium_electrum_helper')   // recipe ID
        .itemInputs('3x gtceu:fluxed_titanium_electrum_compound_dust')
        .notConsumable('kubejs:basic_chemist_helper')
        .inputFluids("gtceu:fluorine 850")
        .itemOutputs('12x kubejs:crystalline_titanium_electrum')
        .duration(400 * .66)                                 // in ticks
        .EUt(1924 * .85) 
        
    event.recipes.gtceu
        .chemical_bath('kubejs:refined_fluxed_electrum_crystal')   // recipe ID
        .itemInputs('kubejs:crystalline_titanium_electrum')
        .inputFluids("gtceu:acetone 1000")
        .itemOutputs('kubejs:refined_fluxed_electrum_crystal')
        .duration(100)                                 // in ticks
        .EUt(32) 




});
