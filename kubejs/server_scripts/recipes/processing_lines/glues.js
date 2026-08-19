import { recipe_mixer } from "../../00_util/recipeUtils"

ServerEvents.recipes((event) => {
    global.recipe_mixer(event, "component_polymer", ["2x gtceu:carbon_fiber_mesh", "gtceu:borosilicate_glass_dust"], "gtceu:epoxy 1000", [], "gtceu:component_polymer 2000", 240, 30)
})
