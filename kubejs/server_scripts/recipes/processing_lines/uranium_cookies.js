import { recipe_lcr, recipe_mixer } from "../../00_util/recipeUtils"

ServerEvents.recipes((event) => {
    /**
     *
     * @param {*} output
     * @param {*} count
     * @param {*} ingredientsItem
     * @param {*} bakingsheet
     * @param {*} grandma
     * @param {*} eut
     * @param {*} time
     */
    function oven(output, count, ingredientsItem, bakingsheet, grandma, eut, time) {
        event.recipes.gtceu
            .oven("kubejs:" + output + "_" + bakingsheet)
            .itemInputs(ingredientsItem)
            .itemOutputs(count + "x kubejs:" + output)
            .notConsumable("kubejs:" + grandma + "_grandma_helper")
            .notConsumable("kubejs:" + bakingsheet)
            .duration(time * 20)
            .EUt(eut)
    }

    global.recipe_mixer(event, "uranium_ethanol_solution", [], ["gtceu:ethanol 2000", "gtceu:uranium_235 100"], [], ["gtceu:uranium_ethanol_solution 2000"], 1980, 50)
    global.recipe_lcr(
        event,
        "radioactive_cookie_dough",
        ["kubejs:cookie_dough", "gtceu:tiny_rad_away_dust"],
        ["gtceu:glycerol 111", "gtceu:uranium_ethanol_solution 11"],
        "kubejs:uranium_cookie_dough",
        [],
        3.6,
        1980
    )

    global.recipe_lcr(
        event,
        "radioactive_cookie_dough_bulk",
        ["9x kubejs:cookie_dough", "gtceu:rad_away_dust"],
        ["gtceu:glycerol 999", "gtceu:uranium_ethanol_solution 99"],
        "9x kubejs:uranium_cookie_dough",
        [],
        3.6 * 9,
        1980
    )



    // oven('grandmas_uranium_cookies', 16, '16x kubejs:uranium_cookie_dough', 'grandmas_baking_sheet', 'radiation_resistant', 1980, 60)
    // oven('grandmas_uranium_cookies', 32, '32x kubejs:uranium_cookie_dough', 'grandmas_tungsten_baking_sheet', 'radiation_resistant', 1520, 60 *.66)


});
