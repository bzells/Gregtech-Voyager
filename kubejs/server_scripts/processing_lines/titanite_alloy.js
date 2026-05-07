

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

    create_recipe_lcr('lunarium_slurry', ['3x gtceu:lunarium_dust', 'gtceu:carbon_dust'],
        ['gtceu:chlorine 4000', 'gtceu:fluorine 2000'], [], 'gtceu:lunarium_growth_slurry 1000', 30, 7680
    )

    create_recipe_lcr('lunarium_slurry', ['2x gtceu:lunarium_dust', 'gtceu:carbon_dust'],
        ['gtceu:chlorine 4000', 'gtceu:fluorine 2000'], [], 'gtceu:lunarium_growth_slurry 1500', 25, 6520, 'basic_chemist_helper'
    )

    event.recipes.gtceu.chemical_bath("kubejs:titanichite_spores")
        .itemInputs('gtceu:small_titanite_dust')
        .itemOutputs('kubejs:titanichite_bud')
        .inputFluids('gtceu:lunarium_growth_slurry 250')
        .duration(60 * 20) 
        .EUt(480) 

    create_recipe_lcr('titanichite', ['kubejs:titanichite_bud', '4x kubejs:crystalline_titanium_electrum'], 'gtceu:uranium 1000', '4x gtceu:raw_titanichite', [], 45, 7680)


    create_mixer_recipe('titanite_alloy', ['4x gtceu:titanichite_dust', '2x gtceu:tungsten_dust', '2x gtceu:graphene_dust', 'gtceu:electrotine_dust'], [], '9x gtceu:titanite_alloy_dust', [], 7680, 9*5)

});
