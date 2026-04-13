ServerEvents.recipes(event => {




    event.remove({type: 'minecraft:smelting', output: 'gtceu:fluxed_electrum_ingot'})
    event.remove({type: 'minecraft:smelting', output: 'gtceu:fluxed_cobalt_electrum_ingot'})


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


});