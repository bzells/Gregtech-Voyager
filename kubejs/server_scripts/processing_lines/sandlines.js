

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

function atm_collect(circuit, ns, itemOutput, cntI, fluidOutput, cntF, time, eut, dimension)
{
    event.recipes.gtceu.atmospheric_collector("kubejs:atmospheric_collector_" + itemOutput + '_circuit_' + circuit)
            .itemOutputs(`${cntI}x ${ns}:${itemOutput}`)
            .outputFluids(`${fluidOutput} ${cntF}`)
            .duration(20 * time)
            .circuit(circuit)
            .EUt(eut)
            .dimension(dimension)
}

    function centrifuge(name, inputItems, inputFluids, outputItems, outputFluids, duration, eut, helper)
    {
      

        if(helper)
        {
          event.recipes.gtceu.centrifuge("kubejs:centrifuge_helper_" + name)
          .itemInputs(inputItems)
          .notConsumable('kubejs:' + helper)
          .chancedOutput(outputItems[0], 5000, 500)
          .chancedOutput(outputItems[1], 3000, 500)
          .chancedOutput(outputItems[2], 1000, 500)
          .chancedOutput(outputItems[3], 500, 500)
          .inputFluids(inputFluids)
          .circuit(3)
          .outputFluids(outputFluids)
          .duration(duration * 20 * .85) 
          .EUt(eut)  
        }
        else
        {
          event.recipes.gtceu.centrifuge("kubejs:centrifuge_" + name)
          .itemInputs(inputItems)
          .chancedOutput(outputItems[0], 3500, 500)
          .chancedOutput(outputItems[1], 1500, 500)
          .chancedOutput(outputItems[2], 500, 500)
          .chancedOutput(outputItems[3], 250, 500)
          .inputFluids(inputFluids)
          .outputFluids(outputFluids)
          .duration(duration * 20) 
          .EUt(eut)  
        }
    }

    function macerator(outputItem, ns, inputItem, time, eut)
    {
        event.recipes.gtceu.macerator("kubejs:macerator_" + outputItem)
          .itemInputs(inputItem)
          .itemOutputs(`${ns}:${outputItem}`)
          .duration(time * 20) 
          .EUt(eut)  
    }

    // mars sand

    // venus sand

    macerator('venus_sand_dust', 'gtceu', 'ad_astra:venus_sand', 100, 32)
    atm_collect(9, 'gtceu', 'venus_sand_dust', 256, 'gtceu:venus_air', 50000, 50, 2000, 'ad_astra:venus')
    atm_collect(10, 'gtceu', 'venus_sand_dust', 64, 'gtceu:liquid_venus_air', 50000, 75, 2000, 'ad_astra:venus')
    centrifuge('venus_sand', '15x gtceu:venus_sand_dust', [], ['3x gtceu:basalt_dust', '2x gtceu:titanium_dust', 'gtceu:calorite_dust', '2x gtceu:bismuth_dust'], 'gtceu:sulfuric_acid 250', 60, 1024)
    

});
