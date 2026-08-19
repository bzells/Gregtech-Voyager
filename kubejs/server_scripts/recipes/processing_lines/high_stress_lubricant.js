import { recipe_mixer, recipe_electrolyzer, recipe_lcr, recipe_chem_plant, recipe_centrifuge, recipe_distillation } from "../../00_util/recipeUtils"

ServerEvents.recipes((event) => {
    event.remove({ input: "gtceu:iridium_metal_residue_dust" })
    event.remove({ output: "gtceu:iridium_metal_residue_dust" }) // none of these fucking work and i have no idea why
    event.remove({ input: "gtceu:platinum_group_sludge_dust" })
    event.remove({ input: "gtceu:rarest_metal_mixture_dust" })
    event.remove({ input: "gtceu:inert_metal_mixture_dust" })
    event.remove({ output: "gtceu:rarest_metal_mixture_dust" })
    event.remove({ output: "gtceu:rhodium_sulfate" })
    event.remove({ output: "gtceu:ruthenium_tetroxide" })

    global.recipe_mixer(event, "igp_lubricant_base", "gtceu:indium_gallium_phosphide_dust", "gtceu:lubricant 2000", [], "kubejs:igp_lubricant_base 1000", 7680, 20)

    global.recipe_distillation(event, "igp_lubricant_base", 1000, "gtceu:carbon_dust", ["kubejs:gallium_lubricant_residue 1000", "kubejs:indium_binded_phospho_lubricant_sludge 1000"], 7860, 10)

    global.recipe_electrolyzer(event, "gallium_lubricant_residue_byproduct", [], ["kubejs:gallium_lubricant_residue 1000"], ["gtceu:gallium_dust"], ["gtceu:creosote 500"], 10, 30)

    global.recipe_lcr(
        event,
        "acidic_phospho_lubricant",
        ["gtceu:sulfur_dust", "gtceu:molybdenum_dust"],
        ["kubejs:indium_binded_phospho_lubricant_sludge 1000", "gtceu:hydrogen 2000"],
        [],
        ["kubejs:acidic_phospho_lubricant 1000"],
        10,
        7680
    )

    global.recipe_distillation(
        event,
        "acidic_phospho_lubricant",
        1000,
        [],
        ["kubejs:phospho_lubricant_residue 250", "kubejs:phospho_indium_molybdenum_binded_lubricant 1000", "gtceu:hydrogen_sulfide 1000"],
        7680,
        45
    )

    global.recipe_centrifuge(event, "phospho_lubricant_byproducts", [], ["kubejs:phospho_lubricant_residue 1000"], ["gtceu:phosphorus_dust"], ["gtceu:creosote 500"], 10, 32)


    global.recipe_chem_plant(
        event,
        "high_stress_lubricant",
        ["gtceu:gallium_dust"],
        ["gtceu:kerosene 2000", "kubejs:phospho_indium_molybdenum_binded_lubricant 1000"],
        [],
        ["voyagercore:high_stress_lubricant 3000"],
        10,
        480,
        4500,
        "chemist"
    )

})
