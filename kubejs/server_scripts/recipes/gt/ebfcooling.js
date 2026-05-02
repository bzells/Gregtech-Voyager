ServerEvents.recipes(event => {




    event.remove({type: 'minecraft:smelting', output: 'gtceu:fluxed_electrum_ingot'})
    event.remove({type: 'minecraft:smelting', output: 'gtceu:fluxed_cobalt_electrum_ingot'})
    event.remove({output: 'gtceu:hot_tungsten_steel_ingot'})

    function ebf_recipe(input, ebfduration, ebfeut, ebftemp, blastfluid, helpertier, do_helium_cooling)
    {
        event.recipes.gtceu.electric_blast_furnace("kubejs:hot_" + input)
            .itemInputs("gtceu:" + input + '_dust')
            .itemOutputs("gtceu:hot_" + input + '_ingot')
            .circuit(1)
            .duration(ebfduration) 
            .EUt(ebfeut)
            .blastFurnaceTemp(ebftemp);

        event.recipes.gtceu.electric_blast_furnace("kubejs:hot_" + input + '_fluid')
            .itemInputs("gtceu:" + input + '_dust')
            .inputFluids(blastfluid + ' 100')
            .itemOutputs("gtceu:hot_" + input + '_ingot')
            .circuit(2)
            .duration(ebfduration * .67)
            .EUt(ebfeut)
            .blastFurnaceTemp(ebftemp);

        event.recipes.gtceu.electric_blast_furnace("kubejs:hot_" + input + '_helper')
            .itemInputs("gtceu:" + input + '_dust')
            .notConsumable('kubejs:' + helpertier +'_ebf_helper')
            .inputFluids(blastfluid + ' 85')
            .itemOutputs("gtceu:hot_" + input + '_ingot')
            .circuit(3)
            .duration(ebfduration * .67 * .85) 
            .EUt(ebfeut * .85)
            .blastFurnaceTemp(ebftemp);

        if(!do_helium_cooling)
        {
            event.recipes.gtceu.vacuum_freezer("kubejs:"+ input +"_cooling")
                .itemInputs("gtceu:hot_"+ input +"_ingot")
                .itemOutputs("gtceu:" + input + "_ingot")
                .duration(20 * 6) 
                .EUt(ebfeut / 4) 
        }
        else
        {
            event.recipes.gtceu.vacuum_freezer("kubejs:"+ input +"_cooling")
                .itemInputs("gtceu:hot_"+ input +"_ingot")
                .itemOutputs("gtceu:" + input + "_ingot")
                .inputFluids('gtceu:liquid_helium 500')
                .outputFluids('gtceu:helium 250')
                .duration((ebfduration) / 10) 
                .EUt(ebfeut / 4) 
        }
        


    }


    // if someone wants to PR and clean this code using the new function, please do 😂

    event.recipes.gtceu.electric_blast_furnace("kubejs:everlasting_steak_ebf")
        .itemInputs("artifacts:everlasting_beef")
        .itemOutputs("artifacts:eternal_steak")
        .duration(1200*30) // 60 sec
        .EUt(256)
        .blastFurnaceTemp(2700);

    event.recipes.gtceu.electric_blast_furnace("kubejs:fluxed_electrum")
        .itemInputs("gtceu:fluxed_electrum_dust")
        .itemOutputs("gtceu:fluxed_electrum_ingot")
        .circuit(1)
        // .inputFluids("gtceu:nitrogen 1000")
        .duration(20 * 56) 
        .EUt(120)
        .blastFurnaceTemp(1200);

    event.recipes.gtceu.electric_blast_furnace("kubejs:fluxed_electrum_c2")
        .itemInputs("gtceu:fluxed_electrum_dust")
        .itemOutputs("gtceu:fluxed_electrum_ingot")
        .circuit(2)
        .inputFluids("gtceu:nitrogen 1000")
        .duration((20 * 56) * .67) 
        .EUt(120)
        .blastFurnaceTemp(1200);

    event.recipes.gtceu.electric_blast_furnace("kubejs:fluxed_cobalt_electrum")
        .itemInputs("gtceu:fluxed_cobalt_electrum_dust")
        .itemOutputs("gtceu:fluxed_cobalt_electrum_ingot")
        .circuit(1)
        .duration(20 * 66) 
        .EUt(480)
        .blastFurnaceTemp(2000);

    event.recipes.gtceu.electric_blast_furnace("kubejs:fluxed_cobalt_electrum_ingot_c2")
        .itemInputs("gtceu:fluxed_cobalt_electrum_dust")
        .itemOutputs("gtceu:fluxed_cobalt_electrum_ingot")
        .circuit(2)
        .inputFluids("gtceu:nitrogen 1000")
        .duration((20 * 66) * .67) 
        .EUt(480)
        .blastFurnaceTemp(2000);

    event.recipes.gtceu.chemical_bath("kubejs:black_bronze_cooling")
        .itemInputs("gtceu:hot_black_bronze_ingot")
        .itemOutputs("gtceu:black_bronze_ingot")
        .inputFluids("gtceu:distilled_water 100")
        .duration(20 * 6) 
        .EUt(120)

    event.recipes.gtceu.electric_blast_furnace("kubejs:refined_fluxed_electrum")
        .itemInputs("2x kubejs:refined_fluxed_electrum_crystal")
        .itemOutputs("1x gtceu:hot_refined_fluxed_electrum_ingot")
        .inputFluids("kubejs:blasting_gas 1000")
        .circuit(1)
        .duration(20 * 50) 
        .EUt(1925)
        .blastFurnaceTemp(3600);

    event.recipes.gtceu.electric_blast_furnace("kubejs:refined_fluxed_electrum_dust")
        .itemInputs("1x gtceu:refined_fluxed_electrum_dust")
        .itemOutputs("1x gtceu:hot_refined_fluxed_electrum_ingot")
        .circuit(1)
        .duration(20 * 50) 
        .EUt(1925)
        .blastFurnaceTemp(3600);

    event.recipes.gtceu.electric_blast_furnace("kubejs:refined_fluxed_electrumdust_c2")
        .itemInputs("1x gtceu:refined_fluxed_electrum_dust")
        .itemOutputs("1x gtceu:hot_refined_fluxed_electrum_ingot")
        .inputFluids("kubejs:blasting_gas 1000")
        .circuit(2)
        .duration(20 * 44) 
        .EUt(1925)
        .blastFurnaceTemp(3600);

    event.recipes.gtceu.vacuum_freezer("kubejs:refined_fluxed_electrum_cooling")
        .itemInputs("gtceu:hot_refined_fluxed_electrum_ingot")
        .itemOutputs("gtceu:refined_fluxed_electrum_ingot")
        .duration(20 * 6) 
        .EUt(120)

    ebf_recipe('tungsten_steel', 50*20, 1920, 4500, 'gtceu:helium', 'ev', false)
    ebf_recipe('desh', 64*20, 7680, 3600, 'kubejs:blasting_gas', 'hv', false)


});