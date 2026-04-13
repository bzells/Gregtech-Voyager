ServerEvents.recipes(event => {

    event.recipes.gtceu.electric_blast_furnace("kubejs:aluminum_helper")
        .itemInputs("gtceu:aluminium_dust")
        .notConsumable('kubejs:lv_ebf_helper')
        .itemOutputs("gtceu:aluminium_ingot")
        .circuit(3)
        .duration((44.2*20)*.85) // 60 sec
        .EUt(102)
        .blastFurnaceTemp(1700);

    event.recipes.gtceu.electric_blast_furnace("kubejs:aluminum_fluid_helper")
        .itemInputs("gtceu:aluminium_dust")
        .notConsumable('kubejs:lv_ebf_helper')
        .itemOutputs("gtceu:aluminium_ingot")
        .inputFluids("gtceu:nitrogen 820")
        .duration((29.6*20)*.85) // 60 sec
        .circuit(4)
        .EUt(102)
        .blastFurnaceTemp(1700);

    event.recipes.gtceu.electric_blast_furnace("kubejs:ssteel_helper")
        .itemInputs("gtceu:stainless_steel_dust")
        .notConsumable('kubejs:mv_ebf_helper')
        .itemOutputs("gtceu:stainless_steel_ingot")
        .duration((55*20)*.85) // 60 sec
        .circuit(3)
        .EUt(480)
        .blastFurnaceTemp(1700);

    event.recipes.gtceu.electric_blast_furnace("kubejs:ssteel_fluid_helper")
        .itemInputs("gtceu:stainless_steel_dust")
        .notConsumable('kubejs:mv_ebf_helper')
        .itemOutputs("gtceu:stainless_steel_ingot")
        .inputFluids("gtceu:nitrogen 820")
        .circuit(4)
        .duration((36.85*20)*.85) // 60 sec
        .EUt(480 * .85)
        .blastFurnaceTemp(1700);

        event.recipes.gtceu.electric_blast_furnace("kubejs:fluxed_electrum_helper")
        .itemInputs("gtceu:fluxed_electrum_dust")
        .itemOutputs("gtceu:fluxed_electrum_ingot")
        .notConsumable('kubejs:lv_ebf_helper')
        .circuit(3)
        // .inputFluids("gtceu:nitrogen 1000")
        .duration(.85 * (20 * 56)) 
        .EUt(120 * .85)
        .blastFurnaceTemp(1200);

    event.recipes.gtceu.electric_blast_furnace("kubejs:fluxed_electrum_c2_helper")
        .itemInputs("gtceu:fluxed_electrum_dust")
        .itemOutputs("gtceu:fluxed_electrum_ingot")
        .notConsumable('kubejs:lv_ebf_helper')
        .circuit(4)
        .inputFluids("gtceu:nitrogen 1000")
        .duration((20 * 56) * .67 * .85) 
        .EUt(120 * .85)
        .blastFurnaceTemp(1200);

    event.recipes.gtceu.electric_blast_furnace("kubejs:fluxed_cobalt_electrum_helper")
        .itemInputs("gtceu:fluxed_cobalt_electrum_dust")
        .itemOutputs("gtceu:fluxed_cobalt_electrum_ingot")
        .notConsumable('kubejs:mv_ebf_helper')
        .circuit(3)
        .duration(.85 * (20 * 66)) 
        .EUt(480 * .85)
        .blastFurnaceTemp(2000);

    event.recipes.gtceu.electric_blast_furnace("kubejs:fluxed_cobalt_electrum_ingot_c2_helper")
        .itemInputs("gtceu:fluxed_cobalt_electrum_dust")
        .itemOutputs("gtceu:fluxed_cobalt_electrum_ingot")
        .notConsumable('kubejs:mv_ebf_helper')
        .circuit(4)
        .inputFluids("gtceu:nitrogen 1000")
        .duration((20 * 66) * .67 * .85) 
        .EUt(480)
        .blastFurnaceTemp(2000);





});