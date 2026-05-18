

ServerEvents.recipes(event => {

function teus_laser(output, ns, inputItems, nonconsumed, inputFluid, outFluid, eut, time)  
{
    event.recipes.gtceu
        .beam_of_teus(`kubejs:${output}_teus_laser`)   // recipe ID
        .itemInputs(inputItems)
        .notConsumable(nonconsumed)
        .inputFluids(inputFluid)
        .itemOutputs(`${ns}:${output}`)
        .outputFluids(outFluid)
        .duration(time * 20)                                 // in ticks
        .EUt(eut)     
} 
function chem_bath(output, ns, inputItems, inputFluid, eut, time)  
{
    event.recipes.gtceu
        .chemical_bath(`kubejs:${output}_chem_bath`)   // recipe ID
        .itemInputs(inputItems)
        .inputFluids(inputFluid)
        .itemOutputs(`${ns}:${output}`)
        .duration(time * 20)                                 // in ticks
        .EUt(eut)     
}   

    chem_bath('perfected_electrum_base_dust', 'gtceu', '4x gtceu:graphene_dust', 'gtceu:refined_fluxed_electrum 288', 1024, 30)

    teus_laser('hot_perfected_electrum_ingot', 'gtceu', 'gtceu:perfected_electrum_base_dust', 'kubejs:atomic_lattice', 'gtceu:electrum ' + 144*8, 'gtceu:degenerate_electrum_light_matter_plasma 288', 7777, 100)

});
