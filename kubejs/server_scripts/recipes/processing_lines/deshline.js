import { recipe_centrifuge, recipe_electrolyzer, recipe_lcr } from "../../00_util/recipeUtils"

ServerEvents.recipes((event) => {
    event.remove({ input: "" })

    global.recipe_electrolyzer(event, "lunite_dust", ["9x gtceu:lunite_dust"], [], ["2x gtceu:small_desh_dust", "2x gtceu:silicon_dust"], ["gtceu:oxygen 4000"], 20, 120)

    global.recipe_lcr(event, "desh_group_sludge_lunite", ["gtceu:purified_lunite_ore"], ["gtceu:formic_acid 100"], ["4x gtceu:desh_group_sludge_dust"], [], 10, 32)
    global.recipe_lcr(event, "desh_group_sludge_socochalamite", ["gtceu:purified_socochalamite_ore"], ["gtceu:formic_acid 100"], ["2x gtceu:desh_group_sludge_dust"], [], 10, 32)
    global.recipe_lcr(event, "desh_group_sludge_glunite", ["gtceu:purified_glunite_ore"], ["gtceu:formic_acid 100"], ["2x gtceu:desh_group_sludge_dust"], [], 10, 32)

    global.recipe_lcr(event, "desh_group_sludge_desh", ["gtceu:purified_desh_ore"], ["gtceu:formic_acid 100"], ["8x gtceu:desh_group_sludge_dust"], [], 10, 32)

    global.recipe_centrifuge(event, "dsg_processing", ["6x gtceu:desh_group_sludge_dust"], ["gtceu:aqua_regia 800"], ["6x gtceu:lunar_metal_residue_dust", "4x gtceu:dense_metal_mixture_dust"], [], 30, 480)

    global.recipe_lcr(
        event,
        "lunarium_metal_sludge",
        ["7x gtceu:dense_metal_mixture_dust", "2x gtceu:calcium_hydroxide_dust"],
        [],
        ["5x gtceu:lunarium_metal_sludge_dust", "7x gtceu:tungstic_acid_dust"],
        ["gtceu:hydrogen 2000"],
        15,
        7680
    )
    global.recipe_lcr(
        event,
        "dewatered_lunarium_metal_mixture",
        ["5x gtceu:lunarium_metal_sludge_dust"],
        ["kubejs:dewatering_fluid 4000"],
        ["3x gtceu:dewatered_lunarium_metal_mixture_dust"],
        ["minecraft:water 2000"],
        40,
        1980
    )
    global.recipe_centrifuge(
        event,
        "impure_lunarium",
        ["8x gtceu:dewatered_lunarium_metal_mixture_dust"],
        [],
        ["3x gtceu:impure_lunarium_dust", "1x gtceu:carbon_dust", "2x gtceu:small_zinc_dust", "gtceu:barium_dust", "gtceu:lunar_metal_residue_dust"],
        ["gtceu:hydrogen 3000"],
        30,
        120
    )

    global.recipe_lcr(event, "sulfuric_lunar_metal_residue", ["7x gtceu:lunar_metal_residue_dust"], ["gtceu:sulfuric_acid 1000"], [], ["gtceu:sulfuric_lunar_metal_residue 1000"], 10, 30)
    global.recipe_centrifuge(
        event,
        "sulfuric_lunar_metal_residue_processing",
        ["2x gtceu:calcium_hydroxide_dust"],
        ["gtceu:sulfuric_lunar_metal_residue 2000"],
        ["gtceu:titanium_dust", "gtceu:desh_dust", "3x minecraft:glowstone_dust", "2x gtceu:gold_dust", "gtceu:calcium_dust"],
        ["minecraft:water 2000", "gtceu:sulfur_trioxide 2000"],
        5,
        1980
    )
})
