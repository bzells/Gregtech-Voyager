

ServerEvents.recipes(event => {
    // event.recipes.gtceu
    //     .helper_wheel('kubejs:track_runner_helper')   // recipe ID
    //     .itemInputs([{item: 'minecraft:cookie'}])
    //     .inputFluids("minecraft:water 100")
    //     .notConsumable('kubejs:track_runner_helper')
    //     .duration(500)                                 // in ticks
    //     .EUt(-32)                                // EU produced total]


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

    function oven(output, ingredientsItem, bakingsheet, grandma, eut, time)
    {
        if(bakingsheet[1])
        {
            event.recipes.gtceu.mixer('kubejs:' + output)
            .itemInputs(ingredientsItem)
            .itemOutputs('kubejs:' + output)
            .chancedInput(bakingsheet[0], 25, 0)
            .notConsumable('kubejs:' + grandma + '_grandma_helper')
            .duration(time * 20)
            .EUt(eut);
        }
        else
        {
           event.recipes.gtceu.mixer('kubejs:better_' + output)
            .itemInputs(ingredientsItem, bakingsheet)
            .itemOutputs(output)
            .notConsumable('kubejs:' + grandma + '_grandma_helper')
            .duration(time * 20)
            .EUt(eut);
        } 
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

    create_mixer_recipe('uranium_ethanol_solution', [], ['gtceu:ethanol 2000', 'gtceu:uranium_235 100'], [], ['gtceu:uranium_ethanol_solution 2000'], 1980, 50)
    create_recipe_lcr('radioactive_cookie_dough', ['kubejs:cookie_dough', 'gtceu:tiny_rad_away_dust'], ['gtceu:glycerol 111', 'gtceu:uranium_ethanol_solution 11'],
        'kubejs:uranium_cookie_dough', [], 3.6, 1980
    )

    create_recipe_lcr('radioactive_cookie_dough_bulk', ['9x kubejs:cookie_dough', 'gtceu:rad_away_dust'], ['gtceu:glycerol 999', 'gtceu:uranium_ethanol_solution 99'],
        '9x kubejs:uranium_cookie_dough', [], 3.6 * 9, 1980
    )

    create_recipe_lcr('radioactive_cookie_dough_bulk', ['12x kubejs:cookie_dough', 'gtceu:rad_away_dust'], ['gtceu:glycerol 667', 'gtceu:uranium_ethanol_solution 67'],
        '12x kubejs:uranium_cookie_dough', [], 3.6 * 9 * .66, 1520, 'basic_chemist_helper'
    )

    oven('grandmas_uranium_cookies', 'kubejs:uranium_cookie_dough', ['kubejs:grandmas_baking_sheet', 1], 'radiation_resistant', 1980, 60)
    oven('grandmas_uranium_cookies', 'kubejs:uranium_cookie_dough', 'kubejs:grandmas_tungsten_baking_sheet', 'radiation_resistant', 1980, 60)


});
