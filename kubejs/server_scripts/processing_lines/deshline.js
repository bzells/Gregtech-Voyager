

ServerEvents.recipes(event => {

    event.remove({input: ''})
 
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

    /**
     * Create a centrifuge recipe
     * @param {*} name - recipe name (dont include kubejs:)
     * @param {*} inputItems - array of input items (include amount)
     * @param {*} inputFluids - array of input fluids (include amount)
     * @param {*} outputItems - array of output items (include amount)
     * @param {*} outputFluids - array of output fluids (include amount)
     * @param {*} duration - time in seconds
     * @param {*} eut - eu/tick
     */
    function create_recipe_centrifuge(name, inputItems, inputFluids, outputItems, outputFluids, duration, eut, helper)
    {
      

        if(helper)
        {
          event.recipes.gtceu.centrifuge("kubejs:centrifuge_helper_" + name)
          .itemInputs(inputItems)
          .notConsumable('kubejs:' + helper)
          .itemOutputs(outputItems)
          .inputFluids(inputFluids)
          .circuit(3)
          .outputFluids(outputFluids)
          .duration(duration * 20) 
          .EUt(eut)  
        }
        else
        {
          event.recipes.gtceu.centrifuge("kubejs:centrifuge_" + name)
          .itemInputs(inputItems)
          .itemOutputs(outputItems)
          .inputFluids(inputFluids)
          .outputFluids(outputFluids)
          .duration(duration * 20) 
          .EUt(eut)  
        }
    }

    /**
     * Create a electrolyzer recipe
     * @param {*} name - recipe name (dont include kubejs:)
     * @param {*} inputItems - input item (include amount)
     * @param {*} inputFluids - input fluid (include amount)
     * @param {*} outputItems - array of output items (include amount)
     * @param {*} outputFluids - array of output fluids (include amount)
     * @param {*} duration - time in seconds
     * @param {*} eut - eu/tick
     */
    function create_recipe_electrolyzer(name, inputItems, inputFluids, outputItems, outputFluids, duration, eut)
    {

          event.recipes.gtceu.electrolyzer("kubejs:electrolyzer_" + name)
          .itemInputs(inputItems)
          .itemOutputs(outputItems)
          .inputFluids(inputFluids)
          .outputFluids(outputFluids)
          .duration(duration * 20) 
          .EUt(eut)  

    }

    create_recipe_electrolyzer('lunite_dust', '9x gtceu:lunite_dust', [], ['2x gtceu:small_desh_dust', '2x gtceu:silicon_dust'], 'gtceu:oxygen 4000', 20, 120)

    create_recipe_lcr('desh_group_sludge_lunite', 'gtceu:purified_lunite_ore', 'gtceu:formic_acid 100', ['4x gtceu:desh_group_sludge_dust'], [], 10, 32)
    create_recipe_lcr('desh_group_sludge_socochalamite', 'gtceu:purified_socochalamite_ore', 'gtceu:formic_acid 100', ['2x gtceu:desh_group_sludge_dust'], [], 10, 32)
    create_recipe_lcr('desh_group_sludge_glunite', 'gtceu:purified_glunite_ore', 'gtceu:formic_acid 100', ['2x gtceu:desh_group_sludge_dust'], [], 10, 32)

    create_recipe_centrifuge('dsg_processing', '6x gtceu:desh_group_sludge_dust', 'gtceu:aqua_regia 800', ['6x gtceu:lunar_metal_residue_dust', '4x gtceu:dense_metal_mixture_dust'], [], 30, 480)
    create_recipe_centrifuge('dsg_processing', '5x gtceu:desh_group_sludge_dust', 'gtceu:aqua_regia 600', ['8x gtceu:lunar_metal_residue_dust', '7x gtceu:dense_metal_mixture_dust'], [], 20, 390, 'basic_chemist_helper')


    create_recipe_centrifuge('dsg_processing_adv', '4x gtceu:desh_group_sludge_dust', 'gtceu:aqua_regia 300', ['12x gtceu:lunar_metal_residue_dust', '10x gtceu:dense_metal_mixture_dust'], [], 15, 120, 'advanced_chemist_helper')


    create_recipe_lcr('lunarium_metal_sludge', ['7x gtceu:dense_metal_mixture_dust', '2x gtceu:calcium_hydroxide_dust'], [], ['5x gtceu:lunarium_metal_sludge_dust', '7x gtceu:tungstic_acid_dust'], 'gtceu:hydrogen 2000', 15, 7680)
    create_recipe_lcr('dewatered_lunarium_metal_mixture', '5x gtceu:lunarium_metal_sludge_dust', 'kubejs:dewatering_fluid 4000', '3x gtceu:dewatered_lunarium_metal_mixture_dust', 'minecraft:water 2000', 40, 1980)
    create_recipe_centrifuge('impure_lunarium', '8x gtceu:dewatered_lunarium_metal_mixture_dust', [], ['3x gtceu:impure_lunarium_dust', '1x gtceu:carbon_dust', '2x gtceu:small_zinc_dust', 'gtceu:barium_dust', 'gtceu:lunar_metal_residue_dust'],
        ['gtceu:hydrogen 3000'], 30, 120
    )

    create_recipe_lcr('sulfuric_lunar_metal_residue', '7x gtceu:lunar_metal_residue_dust', 'gtceu:sulfuric_acid 1000', [], ['gtceu:sulfuric_lunar_metal_residue 1000'], 10, 30)
    create_recipe_centrifuge('sulfuric_lunar_metal_residue_processing', '2x gtceu:calcium_hydroxide_dust', 'gtceu:sulfuric_lunar_metal_residue 2000', ['gtceu:titanium_dust', 'gtceu:desh_dust', '3x minecraft:glowstone_dust', '2x gtceu:gold_dust', 'gtceu:calcium_dust'],
        ['minecraft:water 2000', 'gtceu:sulfur_trioxide 2000'], 5, 1980
    )

});
