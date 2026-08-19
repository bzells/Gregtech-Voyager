import { recipe_lcr, recipe_mixer } from "../../00_util/recipeUtils"

ServerEvents.recipes((event) => {
    /**
     *
     * @param {*} name
     * @param {*} inputItems
     * @param {*} inputFluids
     * @param {*} outputItems
     * @param {*} outputFluids
     * @param {*} duration
     * @param {*} eut
     */
    function autoclave(name, inputItems, inputFluids, outputItems, outputFluids, duration, eut) {
        event.recipes.gtceu
            .autoclave("kubejs:autoclave_" + name)
            .itemInputs(inputItems)
            .itemOutputs(outputItems)
            .inputFluids(inputFluids)
            .outputFluids(outputFluids)
            .duration(duration * 20)
            .EUt(eut)
    }

    /**
     *
     * @param {*} name
     * @param {*} inputItems
     * @param {*} inputFluids
     * @param {*} outputItems
     * @param {*} outputFluids
     * @param {*} duration
     * @param {*} eut
     * @param {*} [helper]
     */
    function radiation_chamber(name, inputItems, inputFluids, outputItems, outputFluids, duration, eut, helper) {
        if (!helper) {
            event.recipes.gtceu
                .radiation_chamber("kubejs:radiation_chamber_" + name)
                .itemInputs(inputItems)
                .itemOutputs(outputItems)
                .perTick(true)
                .inputFluids(inputFluids)
                .perTick(false)
                .outputFluids(outputFluids)
                .duration(duration * 20)
                .EUt(eut)
        } else {
            event.recipes.gtceu
                .radiation_chamber("kubejs:radiation_chamber_helper_" + name)
                .itemInputs(inputItems)
                .notConsumable("kubejs:" + helper)
                .itemOutputs(outputItems)
                .perTick(true)
                .inputFluids(inputFluids)
                .perTick(false)
                .circuit(3)
                .outputFluids(outputFluids)
                .duration(duration * 20)
                .EUt(eut)
        }
    }

    global.recipe_lcr(event, "lunarium_slurry", ["2x gtceu:lunarium_dust", "gtceu:carbon_dust"], ["gtceu:chlorine 1000", "gtceu:fluorine 1000"], [], "gtceu:lunarium_growth_slurry 4500", 30, 7680)


    radiation_chamber("titanichite_spores", "gtceu:small_titanite_dust", "gtceu:lunarium_growth_slurry 1", "kubejs:titanichite_bud", [], 60, 480)

    autoclave("titanichite", ["kubejs:titanichite_bud", "4x kubejs:crystalline_titanium_electrum"], "gtceu:uranium 2000", "4x gtceu:raw_titanichite", [], 25, 7680)
    autoclave("titanichite_plut241", ["kubejs:titanichite_bud", "4x kubejs:crystalline_titanium_electrum"], "gtceu:plutonium_241 600", "12x gtceu:raw_titanichite", [], 25, 7680)

    global.recipe_mixer(
        event,
        "titanite_alloy",
        ["4x gtceu:titanichite_dust", "2x gtceu:tungsten_dust", "2x gtceu:graphene_dust", "gtceu:electrotine_dust"],
        [],
        "9x gtceu:titanite_alloy_dust",
        [],
        7680,
        9 * 5
    )
})
