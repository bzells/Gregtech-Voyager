ServerEvents.recipes(event => {



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
          .outputFluids(outputFluids)
          .duration(duration * 20) 
          .EUt(eut) 
      }
       
    }

    create_recipe_lcr('plastic_boards_sodium_persulfate', ['3x gtceu:plastic_circuit_board', '12x gtceu:copper_foil'], ['gtceu:sodium_persulfate 300'], ['2x gtceu:plastic_printed_circuit_board'],
        [], 20, 30, 'ev_technician_helper'
    )
    create_recipe_lcr('plastic_boards_iron_iii', ['3x gtceu:plastic_circuit_board', '12x gtceu:copper_foil'], ['gtceu:iron_iii_chloride 150'], ['2x gtceu:plastic_printed_circuit_board'],
        [], 20, 30, 'ev_technician_helper'
    )

    create_recipe_lcr('epoxy_boards_sodium_persulfate', ['3x gtceu:epoxy_circuit_board', '16x gtceu:electrum_foil'], ['gtceu:sodium_persulfate 750'], ['2x gtceu:epoxy_printed_circuit_board'],
        [], 35, 30, 'ev_technician_helper'
    )
    create_recipe_lcr('epoxy_boards_iron_iii', ['3x gtceu:epoxy_circuit_board', '16x gtceu:electrum_foil'], ['gtceu:iron_iii_chloride 250'], ['2x gtceu:epoxy_printed_circuit_board'],
        [], 35, 30, 'ev_technician_helper'
    )


});