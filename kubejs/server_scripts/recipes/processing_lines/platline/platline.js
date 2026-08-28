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
        ["10x gtceu:platinum_group_sludge_dust"],
        ["gtceu:aqua_regia 2000"],
        ["4x gtceu:rarest_metal_mixture_dust", "3x gtceu:inert_metal_mixture_dust", "3x gtceu:platinum_sludge_residue_dust", "10x gtceu:platinum_group_metal_residue_dust"],
        [],
        30,
        480
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
    .blastFurnaceTemp(1800)
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
    global.recipe_distillation(event,
        "dry_ruthenium_mixture",
        "gtceu:acidic_ruthenium_solution 3000",
        "4x gtceu:dry_ruthenium_mixture_dust",
        ["gtceu:hydrogen_sulfide 4000", "gtceu:nitric_acid 1000"],
        120, 15
    )

    global.recipe_lcr(event,
        "ruthenium_tetroxide_dust",
        ["4x gtceu:dry_ruthenium_mixture_dust", "6x gtceu:salt_dust"],
        ["minecraft:water 3000"],
        ["20x gtceu:ruthenium_tetroxide_dust", "gtceu:sodium_dust"],
        ["gtceu:sulfur_trioxide 4000", "gtceu:salt_water 3000"],
        10,
        480)


    // plat and palladium

    global.recipe_lcr(event,
        "acidic_platinum_group_solution",
        ["3x gtceu:platinum_group_metal_residue_dust"],
        ["gtceu:formic_acid 1000"],
        [],
        ["gtceu:acidic_platinum_group_solution 2000"],
        20,
        1920)

    global.recipe_lcr(event,
        "salty_platinum_mixture_dust",
        ["3x gtceu:sodium_bicarbonate_dust"],
        ["gtceu:acidic_platinum_group_solution 5000"],
        ["4x gtceu:salty_platinum_mixture_dust"],
        ["minecraft:water 5000", "gtceu:carbon_dioxide 4000"],
        32,
        30)

    global.recipe_centrifuge(event,
        "dirty_platinum_mixture",
        ["8x gtceu:salty_platinum_mixture_dust"],
        [],
        ["3x gtceu:dirty_platinum_mixture_dust", "3x gtceu:carbon_dust", "2x gtceu:salt_dust"],
        [],
        16,
        120)

    global.recipe_lcr(event,
        "purified_platinum_metal_dust",
        ["3x gtceu:dirty_platinum_mixture_dust", "1x gtceu:sodium_dust"],
        ["gtceu:oxygen 1000"],
        ["5x gtceu:purified_platinum_metal_dust"],
        ["gtceu:salt_water 1000"],
        16,
        30)

    global.recipe_electrolyzer(event, "plat_palladium",
        "5x gtceu:purified_platinum_metal_dust",
        [],
        ["2x gtceu:platinum_dust", "gtceu:palladium_dust"],
        ["gtceu:hydrogen 1000", "gtceu:nitrogen 1000"],
        8,
        28
    )

    // plat waste
    event.remove({input: "gtceu:platinum_sludge_residue_dust"})
    global.recipe_chem_bath(event,
        "10x gtceu:washed_platinum_sludge_residue_dust",
        "10x gtceu:platinum_sludge_residue_dust",
        "gtceu:distilled_water 1000", 120, 10
    )

    global.recipe_lcr(event,
        "purified_platinum_sludge_residue",
        ["30x gtceu:washed_platinum_sludge_residue_dust", "6x gtceu:sodium_bicarbonate_dust"],
        [],
        ["26x gtceu:purified_platinum_sludge_residue_dust", "3x gtceu:sodium_hydroxide_dust"],
        ["gtceu:carbon_dioxide 1000"],
        16,
        30)

    global.recipe_centrifuge(event,
        "pgwaste",
        ["25x gtceu:purified_platinum_sludge_residue_dust"],
        [],
        ["15x gtceu:platinum_group_waste_dust", "10x gtceu:gold_dust"],
        [],
        16,
        30)

    event.recipes.gtceu.electric_blast_furnace
    ("platinum_group_waste_ashes_dust")
    .itemInputs("5x gtceu:platinum_group_waste_dust")
    .inputFluids("gtceu:oxygen 2000")
    .outputFluids("gtceu:carbon_dioxide 1000")
    .itemOutputs("5x gtceu:platinum_group_waste_ashes_dust")
    .EUt(1920)
    .blastFurnaceTemp(2400)
    .duration(10 * 20)

    global.recipe_centrifuge(event,
        "pgwaste_centrifuge",
        ["15x gtceu:platinum_group_waste_ashes_dust"],
        [],
        ["4x gtceu:silicon_dioxide_dust", "3x gtceu:ash_dust", "3x gtceu:platinum_dust", "3x gtceu:arsenic_dust", "2x gtceu:chromium_dust"],
        [],
        40,
        1920)
    

        // helper boosts
    global.recipe_chem_plant(
        event,
        "plat_palladium",
        ["5x gtceu:purified_platinum_metal_dust"],
        ["gtceu:aqua_regia 200"],
        ["2x gtceu:platinum_dust", "2x gtceu:palladium_dust"],
        ["gtceu:hydrogen 400", "gtceu:nitrogen 400"],
        24,
        120,
        3600,
        "plat_line"
    )

    global.recipe_chem_plant(
        event,
        "ruthenium",
        ["5x gtceu:ruthenium_tetroxide_dust", "3x gtceu:carbon_dust"],
        ["gtceu:aqua_regia 200"],
        ["2x gtceu:ruthenium_dust"],
        ["gtceu:carbon_dioxide 800"],
        30,
        480,
        3600,
        "plat_line"
    )

    global.recipe_chem_plant(
        event,
        "rhodium",
        ["2x gtceu:ammonium_chloride_dust", "2x gtceu:salty_rhodium_dust", "1x gtceu:sodium_dust"],
        ["gtceu:aqua_regia 200"],
        ["2x gtceu:rhodium_dust"],
        ["gtceu:salt_water 400"],
        30,
        480,
        3600,
        "plat_line"
    )

    global.recipe_chem_plant(
        event,
        "iridium",
        ["4x gtceu:iridium_chloride_dust"],
        ["gtceu:aqua_regia 200"],
        ["2x gtceu:iridium_dust"],
        ["gtceu:chlorine 1000"],
        30,
        480,
        3600,
        "plat_line"
    )

    global.recipe_chem_plant(
        event,
        "osmium",
        ["5x gtceu:osmium_tetroxide_dust"],
        ["gtceu:aqua_regia 200"],
        ["2x gtceu:osmium_dust"],
        ["gtceu:oxygen 1000"],
        60,
        7860,
        4600,
        "plat_line"
    )


})
