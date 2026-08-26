import { recipe_centrifuge, recipe_chem_plant, recipe_lcr } from "../../../00_util/recipeUtils"

ServerEvents.recipes((event) => {
    event.remove({ input: "gtceu:iridium_metal_residue_dust" })
    event.remove({ output: "gtceu:iridium_metal_residue_dust" }) // none of these fucking work and i have no idea why
    event.remove({ input: "gtceu:platinum_group_sludge_dust" })
    event.remove({ input: "gtceu:rarest_metal_mixture_dust" })
    event.remove({ input: "gtceu:inert_metal_mixture_dust" })
    event.remove({ output: "gtceu:rarest_metal_mixture_dust" })
    event.remove({ output: "gtceu:rhodium_sulfate" })
    event.remove({ output: "gtceu:ruthenium_tetroxide" })

    global.recipe_centrifuge(
        event,
        "pgs",
        ["6x gtceu:platinum_group_sludge_dust"],
        ["gtceu:aqua_regia 1200"],
        ["2x gtceu:rarest_metal_mixture_dust", "2x gtceu:inert_metal_mixture_dust", "2x gtceu:platinum_sludge_residue_dust", "6x gtceu:plat_palladium_metal_residue_dust"],
        [],
        30,
        480
    )

    global.recipe_chem_plant(
        event,
        "pgs",
        ["6x gtceu:platinum_group_sludge_dust"],
        ["gtceu:aqua_regia 1200"],
        ["3x gtceu:rarest_metal_mixture_dust", "3x gtceu:inert_metal_mixture_dust", "2x gtceu:platinum_sludge_residue_dust", "8x gtceu:plat_palladium_metal_residue_dust"],
        [],
        30,
        480,
        4500,
        "plat_line"
    )

    global.recipe_lcr(event,
        "shiny_iridium",
        ["5x gtceu:rarest_metal_mixture_dust"],
        ["gtceu:hydrochloric_acid 2000"],
        ["2x gtceu:iridium_metal_residue_dust"],
        ["gtceu:acidic_shiny_metal_mixture 250"],
        20,
        7860)

    global.recipe_lcr(event,
        "dewatered_iridium_metal_residue_dust",
        ["8x gtceu:iridium_metal_residue_dust", "3x gtceu:sodium_hydroxide_dust"],
        [],
        ["4x gtceu:dewatered_iridium_metal_residue_dust"],
        ["minecraft:water 500"],
        10,
        120)

    global.recipe_centrifuge(event,
        "impure_iridium_dust",
        ["4x gtceu:dewatered_iridium_metal_residue_dust"],
        [],
        ["3x gtceu:impure_iridium_metal_dust"],
        ["minecraft:water 500"],
        20,
        480)

    global.recipe_lcr(event,
        "acidic_iridium_solution",
        ["3x gtceu:impure_iridium_metal_dust"],
        ["gtceu:nitric_acid 1000"],
        [],
        ["minecraft:water 2000", "gtceu:nitrogen_dioxide 1500", "gtceu:acidic_iridium_solution 1000"],
        20,
        120)

        // event, name, input, itemOutput, fluidOutputs, eut, time
    global.recipe_distillation(event,
        "iridium_chloride_dust",
        "gtceu:acidic_iridium_solution 2000",
        "8x gtceu:iridium_chloride_dust",
        ["gtceu:hydrochloric_acid 4000", "gtceu:salt_water 2000"],
        256, 30
    )

    //event, name, inputItems, inputFluids, outputItems, outputFluids, duration, eut

    event.remove({input: "gtceu:iridium_chloride_dust"})
    global.recipe_electrolyzer(event, "iridium_dust",
        "4x gtceu:iridium_chloride_dust",
        [],
        "gtceu:iridium_dust",
        "gtceu:chlorine 3000",
        8,
        28
    )

    // osmium
    event.recipes.gtceu.electric_blast_furnace
    ("shiny_metallic_residue_dust")
    .itemInputs("gtceu:carbon_dust")
    .inputFluids("gtceu:acidic_shiny_metal_mixture 250")
    .outputFluids("gtceu:carbon_dioxide 1000")
    .itemOutputs("4x gtceu:shiny_metallic_residue_dust")
    .EUt(480)
    .duration(10 * 20)

    global.recipe_lcr(event,
        "acidic_osmium_solution",
        ["12x gtceu:sodium_hydroxide_dust", "2x gtceu:shiny_metallic_residue_dust"],
        ["minecraft:water 1000"],
        ["4x gtceu:salt_dust"],
        ["gtceu:nitrous_oxide 500", "gtceu:acidic_osmium_solution 3000"],
        20,
        7860)

    event.remove({input: "gtceu:acidic_osmium_solution"})
    global.recipe_distillation(event,
        "osmium_tetroxide",
        "gtceu:acidic_osmium_solution 9600",
        "5x gtceu:osmium_tetroxide_dust",
        ["gtceu:hydrochloric_acid 8000", "minecraft:water 1600"],
        256, 30
    )


    // ruthenium/rhodium

    global.recipe_lcr(event,
        "sulfuric_inert_metal_solution",
        ["5x gtceu:inert_metal_mixture_dust"],
        ["gtceu:sulfuric_acid 1333"],
        [],
        ["gtceu:sulfuric_inert_metal_solution 2000"],
        20,
        1920)

    global.recipe_centrifuge(event,
        "ruth_rhod_line",
        [],
        ["gtceu:sulfuric_inert_metal_solution 2000"],
        [],
        ["gtceu:sulfuric_rhodium_solution 1000", "gtceu:acidic_ruthenium_solution"],
        20,
        480)

    // rhodium
    global.recipe_lcr(event,
        "impure_rhodium_sludge_dust",
        ["6x gtceu:sodium_hydroxide_dust"],
        ["gtceu:sulfuric_rhodium_solution 3000"],
        ["2x gtceu:impure_rhodium_sludge_dust"],
        ["gtceu:sulfur_trioxide 8000", "gtceu:salt_water 2000"],
        5,
        480)

        //event, output, inputItems, inputFluids, eut, duration

    global.recipe_chem_bath(event,
        "2x gtceu:purified_rhodium_mixture_dust",
        "2x gtceu:impure_rhodium_sludge_dust",
        "gtceu:distilled_water 1000", 480, 45
    )
    global.recipe_chem_bath(event,
        "2x gtceu:purified_rhodium_mixture_dust",
        "2x gtceu:impure_rhodium_sludge_dust",
        "gtceu:sodium_persulfate 100", 120, 10
    )

    global.recipe_electrolyzer(event, "salty_rhodium_dust",
        "2x gtceu:purified_rhodium_mixture_dust",
        [],
        "gtceu:salty_rhodium_dust",
        ["gtceu:hydrogen 4500", "minecraft:water 3000", "gtceu:nitrogen_dioxide 1000"],
        20,
        7860
    )

    event.remove({input: "gtceu:rhodium_sulfate"})
    global.recipe_lcr(event,
        "rhodium_dust",
        ["2x gtceu:ammonium_chloride_dust", "2x gtceu:salty_rhodium_dust", "1x gtceu:sodium_dust"],
        [],
        ["1x gtceu:rhodium_dust"],
        ["gtceu:salt_water 1000"],
        10,
        1920)

    // ruthenium



    // plat and palladium

})
