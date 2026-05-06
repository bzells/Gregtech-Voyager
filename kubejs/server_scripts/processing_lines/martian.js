

ServerEvents.recipes(event => {
    const fullName = (name) => 'kubejs:' + name;

    function create_mixer_recipe(name, ingredientsItem, fluidIngredients, itemOutputs, fluidOutputs, eut, time)
    {
        event.recipes.gtceu.mixer(fullName(name))
            .itemInputs(ingredientsItem)
            .inputFluids(fluidIngredients)
            .itemOutputs(itemOutputs)
            .outputFluids(fluidOutputs)
            .duration(time * 20)
            .EUt(eut);
    }
        
    

/**
     * Create a lcr recipe
     * @param {*} name - recipe name (dont include kubejs:)
     * @param {*} inputItems - array of input items (include amount)
     * @param {*} inputFluids - array of input fluids (include amount)
     * @param {*} outputItems - array of output items (include amount)
     * @param {*} outputFluids - array of output fluids (include amount)
     * @param {*} duration - time in seconds
     * @param {*} eut - eu/tick
     */
    function create_recipe_lcr(name, inputItems, inputFluids, outputItems, outputFluids, duration, eut, helper)
    {
      if(!helper)
      {
        event.recipes.gtceu.large_chemical_reactor("kubejs:lcr_" + name)
        .itemInputs(inputItems)
        .itemOutputs(outputItems)
        .inputFluids(inputFluids)
        .outputFluids(outputFluids)
        .duration(duration * 20) 
        .EUt(eut) 
      }
      else
      {
        event.recipes.gtceu.large_chemical_reactor("kubejs:lcr_helper_" + name)
          .itemInputs(inputItems)
          .notConsumable('kubejs:' + helper)
          .itemOutputs(outputItems)
          .inputFluids(inputFluids)
          .circuit(3)
          .outputFluids(outputFluids)
          .duration(duration * 20) 
          .EUt(eut) 
      }
       
    }

    event.recipes.gtceu.assembler("kubejs:radio")
        .itemInputs('12x gtceu:double_ostrum_plate', '32x gtceu:lunarium_ring', '16x gtceu:uranium_triplatinum_single_wire', '32x gtceu:qbit_cpu_chip', '8x #gtceu:circuits/luv', '2x gtceu:iv_emitter', '2x gtceu:iv_sensor')
        .inputFluids('gtceu:soldering_alloy 1000')
        .itemOutputs('kubejs:celestial_radio')
        .duration(1000) 
        .EUt(7860) 

    event.recipes.gtceu.celestial_post_box("kubejs:martian_contract")
        .notConsumable('kubejs:celestial_radio')
        .itemOutputs('kubejs:martian_contract')
        .duration(20) 
        .EUt(2)  

    event.recipes.gtceu.celestial_post_box("kubejs:t1_box_desh")
        .notConsumable('kubejs:martian_contract')
        .itemInputs('64x gtceu:desh_ingot')
        .chancedOutput('kubejs:martian_shipment_t1', 5000, 1000)
        .duration(20 * 60 * 10) 
        .EUt(7860) 

    event.recipes.gtceu.assembler("kubejs:t1_box_open")
        .itemInputs('kubejs:martian_shipment_t1')
        .itemOutputs('64x kubejs:martian_scrap')
        .duration(200) 
        .EUt(7860) 

    event.recipes.gtceu.celestial_post_box("kubejs:t1_box")
        .notConsumable('kubejs:martian_contract')
        .itemInputs('64x gtceu:lunarium_ingot')
        .chancedOutput('kubejs:martian_shipment_t1', 9000, 1000)
        .chancedOutput('2x kubejs:martian_shipment_t1', 5000, 500)
        .chancedOutput('6x kubejs:martian_shipment_t1', 2500, 250)
        .duration(20 * 60 * 10) 
        .EUt(7860) 
    

    event.recipes.gtceu.macerator("kubejs:macerator_martian_scrap")
        .itemInputs('4x kubejs:martian_scrap')
        .itemOutputs('16x kubejs:shredded_martian_scrap')
        .duration(96 * 2 * 20) 
        .EUt(1980) 

    create_recipe_lcr('dissolved_martian', '16x kubejs:shredded_martian_scrap', 'gtceu:aqua_regia 9000', [], 'kubejs:dissolved_martian_mineral_solution 1000', 240, 1980)
    create_recipe_lcr('dissolved_martian', '16x kubejs:shredded_martian_scrap', 'gtceu:aqua_regia 6000', [], 'kubejs:dissolved_martian_mineral_solution 1666', 180, 1560, 'basic_chemist_helper')

    event.recipes.gtceu.electrolyzer("kubejs:elec_martian_soup")
        .inputFluids('kubejs:dissolved_martian_mineral_solution 1000')
        .itemOutputs('128x gtceu:ostrum_dust', '48x gtceu:tungsten_dust', '16x gtceu:titanite_dust')
        .outputFluids('minecraft:water 2000')
        .duration(60 * 2 * 20) 
        .EUt(7860) 

});
