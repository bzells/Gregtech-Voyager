ServerEvents.recipes(event => {
event.remove({input: 'gtceu:iridium_metal_residue_dust'}) 
event.remove({output: 'gtceu:iridium_metal_residue_dust'}) // none of these fucking work and i have no idea why
event.remove({input: 'gtceu:platinum_group_sludge_dust'})
event.remove({input: 'gtceu:rarest_metal_mixture_dust'})
event.remove({input: 'gtceu:inert_metal_mixture_dust'})
event.remove({output: 'gtceu:rarest_metal_mixture_dust'})
event.remove({output: 'gtceu:rhodium_sulfate' })
event.remove({output: 'gtceu:ruthenium_tetroxide' })
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

    create_recipe_centrifuge('pgs', '6x gtceu:platinum_group_sludge_dust', 'gtceu:aqua_regia 1200'
      , ['2x gtceu:rarest_metal_mixture_dust', '2x gtceu:inert_metal_mixture_dust', '2x gtceu:platinum_sludge_residue_dust', 
        '6x gtceu:plat_palladium_metal_residue_dust'],
        [], 30, 480
    )
    create_recipe_centrifuge('pgs', '6x gtceu:platinum_group_sludge_dust', 'gtceu:aqua_regia 900'
      , ['3x gtceu:rarest_metal_mixture_dust', '3x gtceu:inert_metal_mixture_dust', '2x gtceu:platinum_sludge_residue_dust', 
        '8x gtceu:plat_palladium_metal_residue_dust'],
        [], 30, 480 * .66, 'basic_chemist_helper'
    )

    create_recipe_centrifuge('pgs_adv', '4x gtceu:platinum_group_sludge_dust', 'gtceu:aqua_regia 600'
      , ['5x gtceu:rarest_metal_mixture_dust', '5x gtceu:inert_metal_mixture_dust', '6x gtceu:platinum_sludge_residue_dust', 
        '12x gtceu:plat_palladium_metal_residue_dust'],
        [], 30, 480 * .33, 'advanced_chemist_helper'
    )

    create_recipe_lcr('dewatering_fluid', ['2x gtceu:barium_dust', 'gtceu:zinc_dust'], 'gtceu:kerosene 2000',
        [], 'kubejs:dewatering_fluid 5000', 40, 480
    )

    create_recipe_lcr('dewatering_fluid', ['2x gtceu:barium_dust', 'gtceu:zinc_dust'], 'gtceu:kerosene 1200',
        [], 'kubejs:dewatering_fluid 6000', 30, 400, 'basic_chemist_helper'
    )


    // iridium
    create_recipe_lcr('dewatered_iridium_metal_residue', '5x gtceu:iridium_metal_residue_dust', 'kubejs:dewatering_fluid 2000',
          ['4x gtceu:dewatered_iridium_metal_residue_dust', 'gtceu:platinum_sludge_residue_dust'], [], 80, 120
    )

    create_recipe_lcr('impure_iridium', ['4x gtceu:dewatered_iridium_metal_residue_dust'], ['gtceu:phosphoric_acid 2000'], ['3x gtceu:impure_iridium_metal_dust', 'gtceu:tiny_zinc_dust', '2x gtceu:tiny_barium_dust'],
      [], 5, 30
    )

    create_recipe_centrifuge('iridium_chloride', ['3x gtceu:impure_iridium_metal_dust'], [], ['2x gtceu:iridium_chloride_dust', 'gtceu:platinum_sludge_residue_dust', '2x gtceu:phosphorus_dust'],
      ['gtceu:oxygen 5000'], 40, 120
    )


    //osmium
    create_recipe_lcr('rarest_metal_mixture_dust_processing', ['7x gtceu:rarest_metal_mixture_dust'], ['gtceu:hydrochloric_acid 4000'], 
      ['5x gtceu:iridium_metal_residue_dust'],
      ['gtceu:acidic_shiny_metal_mixture 2000', 'gtceu:hydrogen 3000'], 20, 7680
    )
    create_recipe_lcr('impure_shiny_metal_mixture', [], ['gtceu:acidic_shiny_metal_mixture 2000', 'gtceu:sulfuric_acid 1000'], [],
      ['gtceu:hydrogen 2000', 'gtceu:impure_shiny_metal_mixture 1000'], 10, 480
    )

    create_recipe_lcr('acidic_osmium_solution', [], ['gtceu:impure_shiny_metal_mixture 1000', 'gtceu:distilled_water 2000'], 
      ['gtceu:sulfur_dust'],
      ['gtceu:acidic_osmium_solution 1000', 'gtceu:oxygen 4000'], 40, 480
    )

    // plat and palladium
    create_recipe_lcr('sulfuric_plat_palladium_residue', ['6x gtceu:plat_palladium_metal_residue_dust'], ['gtceu:sulfuric_acid 1000, minecraft:water 1000'], 
      [],
      ['gtceu:sulfuric_plat-palladium_metal_solution 2000'], 20, 120
    )
    create_recipe_centrifuge('palladium_and_platinum', [], ['gtceu:sulfuric_plat-palladium_metal_solution 2000'], ['2x gtceu:palladium_dust', '2x gtceu:platinum_dust'],
      ['gtceu:diluted_sulfuric_acid 1000'], 10, 30
    )

    // ruthenium/rhodium
    create_recipe_lcr('sulfuric_inert_metal_solution', ['6x gtceu:inert_metal_mixture_dust'], ['gtceu:sulfuric_acid 1500'], 
      [],
      ['gtceu:sulfuric_inert_metal_solution 1000', 'gtceu:hydrogen 1000'], 20, 1980
    )


    create_recipe_centrifuge('sulfuric_inert_metal_solution_processing', [], ['gtceu:sulfuric_inert_metal_solution 1000'], [],
      ['gtceu:acidic_ruthenium_solution 1000', 'gtceu:sulfuric_rhodium_solution 750'], 20, 480
    )

    create_recipe_lcr('ruthen_tetroxide', ['gtceu:calcium_hydroxide_dust'], ['gtceu:acidic_ruthenium_solution 1000'], 
      ['5x gtceu:ruthenium_tetroxide_dust', 'gtceu:calcium_dust'],
      ['minecraft:water 2000', 'gtceu:sulfur_trioxide 1000'], 5, 120
    )

    create_recipe_lcr('impure_rhodium_sludge', ['gtceu:calcium_hydroxide_dust'], ['gtceu:sulfuric_rhodium_solution 1000'], 
      ['3x gtceu:impure_rhodium_sludge_dust'],
      [], 5, 120
    )

    create_recipe_centrifuge('rhodium_sulfate', ['9x gtceu:impure_rhodium_sludge_dust'], ['gtceu:oxygen 1000', 'gtceu:distilled_water 1000'], [],
      ['gtceu:rhodium_sulfate 1000', 'minecraft:water 2000'], 10, 120
    )


    



});