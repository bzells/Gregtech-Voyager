
ServerEvents.recipes(event => {

    function abs(alloy, amount, inputItems, fluid, duration, eut, temp, helpertier, circuit)
    {
        event.recipes.gtceu.alloy_blast_furnace("kubejs:hot_" + alloy)
            .itemInputs(inputItems)
            .circuit(circuit)
            .outputFluids(fluid + ' ' + amount)
            .duration(duration * 20) 
            .EUt(eut)
            .blastFurnaceTemp(temp);

        event.recipes.gtceu.alloy_blast_furnace("kubejs:hot_" + alloy)
            .itemInputs(inputItems)
            .inputFluids(fluid + ' ' + (amount / 2.88))
            .circuit(circuit + 1)
            .outputFluids(fluid + ' ' + amount)
            .duration(duration * 20) 
            .EUt(eut)
            .blastFurnaceTemp(temp);

        event.recipes.gtceu.alloy_blast_furnace("kubejs:hot_" + input + '_helper')
            .itemInputs(inputItems)
            .inputFluids(fluid + ' ' + ((amount / 2.88) * .85))
            .circuit(circuit + 2)
            .outputFluids(fluid + ' ' + amount)
            .duration(duration * 20 * .85) 
            .EUt(eut * .85)
            .blastFurnaceTemp(temp);

        if(!do_helium_cooling)
        {
            event.recipes.gtceu.vacuum_freezer("kubejs:"+ alloy +"_cooling")
                .inputFluids("gtceu:" + alloy + ' 144')
                .itemOutputs("gtceu:" + alloy + "_ingot")
                .duration(20 * 6) 
                .EUt(ebfeut / 4) 
        }
        else
        {
            event.recipes.gtceu.vacuum_freezer("kubejs:"+ alloy +"_cooling")
                .itemInputs("gtceu:hot_"+ alloy +"_ingot")
                .itemOutputs("gtceu:" + alloy + "_ingot")
                .inputFluids('gtceu:liquid_helium 500')
                .outputFluids('gtceu:helium 250')
                .duration((duration * 20) / 10) 
                .EUt((20 * duration) / 4) 
        }
    }



});

