import { recipe_centrifuge, recipe_chem_plant, recipe_lcr } from "../../../00_util/recipeUtils"

ServerEvents.recipes((event) => {


    function distill(input, ns, amt, fluidOutputs, itemOutput, eut, seconds) {
        event.recipes.gtceu
            .distillation_tower(`kubejs:${input}_distilling`) // recipe ID
            .inputFluids(`${ns}:${input} ${amt}`)
            .outputFluids(fluidOutputs)
            .itemOutputs(itemOutput)
            .duration(seconds * 20) // in ticks
            .EUt(eut)
    }

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
        1920
    )

    //iridium

    global.recipe_centrifuge(event,
        "acidic_shiny_mix_and_iridium_concentrate",
        ["4x gtceu:rarest_metal_mixture_dust"],
        ["minecraft:water 1000"],
        [],
        ["gtceu:iridium_metal_concentrate 500", "gtceu:acidic_shiny_metal_mixture 500"],
        30, //time
        1920) // eut

    global.recipe_lcr(
        event,
        "salty_iridium_metal_brine",
        ["3x gtceu:calcium_chloride_dust"],
        ["gtceu:iridium_metal_concentrate 500"],
        [],
        ["gtceu:salty_iridium_metal_brine 1000"],
        20, // time
        120 // eut
    )

    global.recipe_centrifuge(event,
        "impure_iridium_dust",
        [],
        ["gtceu:salty_iridium_metal_brine 1000"],
        ["3x gtceu:impure_iridium_metal_dust"],
        ["gtceu:salty_calcium_brine_sludge 1000"],
        20, //time
        480) // eut

    global.recipe_lcr(
        event,
        "acidic_iridium_solution",
        ["3x gtceu:impure_iridium_metal_dust"],
        ["gtceu:hydrochloric_acid 3000"],
        [],
        ["gtceu:acidic_iridium_solution 1000"],
        20, // time
        120 // eut
    )

    distill(
        "acidic_iridium_solution",
        "gtceu", 1000, "gtceu:hydrogen 3000",
        "4x gtceu:iridium_chloride_dust",
        120, 40
    )

    // osmium

    event.recipes.gtceu.electric_blast_furnace("impure_shiny_metal_mixture_dust")
    .inputFluids("gtceu:acidic_shiny_metal_mixture 1500")
    .itemOutputs("3x gtceu:impure_shiny_metal_mixture_dust")
    .outputFluids("gtceu:nitric_acid 1000")
    .EUt(480)
    .blastFurnaceTemp(2700)
    .duration(20 * 20)

    event.recipes.gtceu.electric_blast_furnace("impure_shiny_metal_mixture_dust_argon_boosted")
    .inputFluids("gtceu:acidic_shiny_metal_mixture 1500", "gtceu:argon 100")
    .itemOutputs("3x gtceu:impure_shiny_metal_mixture_dust")
    .outputFluids("gtceu:nitric_acid 1000")
    .EUt(480)
    .circuit(2)
    .blastFurnaceTemp(2700)
    .duration(20 * 10)

    // event, name, ingredientsItem, fluidIngredients, itemOutputs, fluidOutputs, eut, time
    global.recipe_mixer(
        event,
        "acidic_osmium_solution",
        "1x gtceu:impure_shiny_metal_mixture_dust",
        "minecraft:water 4000",
        [],
        "gtceu:acidic_osmium_solution 1000",
        1920,
        60
    )

    distill(
        "acidic_osmium_solution",
        "gtceu", 3000, ["gtceu:hydrochloric_acid 2000", "minecraft:water 2000"],
        "15x gtceu:osmium_tetroxide_dust",
        120, 40
    )

    // ruthenium

    event.recipes.gtceu.electric_blast_furnace("precipitated_inert_metal_solution")
    .itemInputs("9x gtceu:inert_metal_mixture_dust")
    .itemOutputs("3x gtceu:precipitated_inert_metal_dust")
    .outputFluids("gtceu:nitric_acid 1000")
    .EUt(1920)
    .blastFurnaceTemp(2700)
    .duration(20 * 20)

    event.recipes.gtceu.electric_blast_furnace("precipitated_inert_metal_solution_argon_boosted")
    .itemInputs("9x gtceu:inert_metal_mixture_dust")
    .itemOutputs("4x gtceu:precipitated_inert_metal_dust")
    .outputFluids("gtceu:nitric_acid 1000")
    .EUt(1920)
    .circuit(2)
    .blastFurnaceTemp(2700)
    .duration(20 * 10)

    global.recipe_centrifuge(event,
        "impure_ruth_rhod_solutions",
        ["4x gtceu:precipitated_inert_metal_dust"],
        ["gtceu:distilled_water 1000"],
        [],
        ["gtceu:impure_ruthenium_solution 1000", "gtceu:impure_rhodium_solution 1000"],
        20, //time
        480) // eut

    distill(
        "impure_ruthenium_solution",
        "gtceu", 1000, ["gtceu:hydrochloric_acid 2000", "minecraft:water 1000"],
        "4x gtceu:dry_ruthenium_mixture_dust",
        120, 40
    )

    global.recipe_lcr(
        event,
        "ruthenium_tetroxide_dust",
        ["4x gtceu:dry_ruthenium_mixture_dust"],
        ["gtceu:sulfuric_acid 1000"],
        ["5x gtceu:ruthenium_tetroxide_dust"],
        ["gtceu:hydrogen_sulfide 1000"],
        10, // time
        1920 // eut
    )

    // rhodium

    global.recipe_lcr(
        event,
        "impure_rhodium_sludge_dust",
        ["9x gtceu:sodium_metabisulfate_dust"],
        ["gtceu:impure_rhodium_solution 1000"],
        ["2x gtceu:impure_rhodium_sludge_dust"],
        ["gtceu:sulfur_trioxide 1000", "gtceu:sulfur_dioxide 1000"],
        15, // time
        480 // eut
    )

    // (event, output, inputItems, inputFluids, eut, duration
    global.recipe_chem_bath(
        event,
        "2x gtceu:purified_rhodium_mixture_dust",
        "2x gtceu:impure_rhodium_sludge_dust",
        "gtceu:distilled_water 1000", 120, 45
    )
    global.recipe_chem_bath(
        event,
        "2x gtceu:purified_rhodium_mixture_dust",
        "2x gtceu:impure_rhodium_sludge_dust",
        "gtceu:sodium_persulfate 100", 120, 5
    )

    global.recipe_lcr(
        event,
        "rhodium_dust",
        ["2x gtceu:purified_rhodium_mixture_dust"],
        ["gtceu:chlorine 2000"],
        ["2x gtceu:rhodium_dust", "2x gtceu:salt_dust"],
        [],
        10, // time
        1920 // eut
    )



    // platinum/palladium

    global.recipe_lcr(
        event,
        "acidic_pgs",
        ["3x gtceu:platinum_group_metal_residue_dust"],
        ["gtceu:formic_acid 1000"],
        [],
        ["gtceu:acidic_platinum_group_solution 1000"],
        10, // time
        1920 // eut
    )

    global.recipe_lcr(
        event,
        "salty_platinum_mixture_dust",
        ["3x gtceu:calcium_chloride_dust"],
        ["gtceu:acidic_platinum_group_solution 1000"],
        ["4x gtceu:salty_platinum_mixture_dust"],
        [],
        20, // time
        28 // eut
    )

    global.recipe_centrifuge(event,
        "dirty_platinum_mixture",
        ["4x gtceu:salty_platinum_mixture_dust"],
        [],
        ["3x gtceu:dirty_platinum_mixture_dust"],
        ["gtceu:salty_calcium_brine_sludge 1000"],
        10, //time
        120) // eut

    global.recipe_chem_bath(
        event,
        "2x gtceu:purified_platinum_metal_dust",
        "2x gtceu:dirty_platinum_mixture_dust",
        "gtceu:distilled_water 1000", 28, 45
    )
    global.recipe_chem_bath(
        event,
        "2x gtceu:purified_platinum_metal_dust",
        "2x gtceu:dirty_platinum_mixture_dust",
        "gtceu:sodium_persulfate 100", 28, 2
    )

    global.recipe_electrolyzer(
        event,
        "plat_palladium",
        "3x gtceu:purified_platinum_metal_dust",
        [],
        ["gtceu:platinum_dust", "gtceu:palladium_dust"],
        ["gtceu:carbon_monoxide 1000"], 
        10,
        120
    )

    // plat waste
    global.recipe_chem_bath(
        event,
        "3x gtceu:washed_platinum_sludge_residue_dust",
        "3x gtceu:platinum_sludge_residue_dust",
        "gtceu:distilled_water 1000", 28, 15
    )
    event.recipes.gtceu.electric_blast_furnace("purified_platinum_group_sludge_dust")
    .itemInputs("6x gtceu:washed_platinum_sludge_residue_dust")
    .itemOutputs("5x gtceu:purified_platinum_sludge_residue_dust")
    .EUt(32)
    .blastFurnaceTemp(1800)
    .duration(20 * 20)

    global.recipe_centrifuge(event,
        "pg_waste",
        ["5x gtceu:purified_platinum_sludge_residue_dust"],
        [],
        ["3x gtceu:platinum_group_waste_dust", "2x gtceu:gold_dust"],
        [],
        10, //time
        120) // eut

    global.recipe_centrifuge(event,
        "pg_waste_final",
        ["5x gtceu:platinum_group_waste_dust"],
        [],
        ["4x gtceu:silicon_dioxide_dust", "2x gtceu:platinum_dust", "2x gtceu:chromium_dust"],
        [],
        30, //time
        1280) // eut


    event.remove({output: "gtceu:osmium_tetroxide_dust"})
    
    event.remove({input: "gtceu:rhodium_sulfate"})
    
    event.remove({input: "gtceu:platinum_sludge_residue_dust"})
    

        // helper boosts
    global.recipe_chem_plant(
        event,
        "plat_palladium",
        ["4x gtceu:purified_platinum_metal_dust"],
        ["gtceu:aqua_regia 200"],
        ["2x gtceu:platinum_dust", "2x gtceu:palladium_dust"],
        ["gtceu:oxygen 100"],
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
        ["2x gtceu:purified_rhodium_mixture_dust"],
        ["gtceu:aqua_regia 200"],
        ["3x gtceu:rhodium_dust"],
        [],
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

    // harder platinum/palladium

    event.replaceOutput({type: "gtceu:chemical_bath"},
        "gtceu:platinum_dust",
        "gtceu:platinum_raw_dust"
    )
    event.replaceOutput({input: "#forge:ores/nickel"},
        "gtceu:platinum_dust",
        "gtceu:platinum_raw_dust"
    )
    event.replaceOutput({input: "gtceu:refined_nickel_ore"},
        "gtceu:platinum_dust",
        "gtceu:platinum_raw_dust"
    )

    event.replaceOutput({input: "gtceu:cooperite_dust"},
        "gtceu:palladium_dust",
        "gtceu:palladium_raw_dust"
    )
    event.replaceOutput({type: "gtceu:chemical_bath"},
        "gtceu:palladium_dust",
        "gtceu:palladium_raw_dust"
    )
    event.remove({input: "gtceu:platinum_raw_dust"})
    event.remove({input: "gtceu:palladium_raw_dust"})
    event.remove({type: "minecraft:smelting", output: "gtceu:platinum_ingot"})
    event.remove({type: "minecraft:blasting", output: "gtceu:platinum_ingot"})

    event.recipes.gtceu.electric_blast_furnace("raw_platinum_to_ingot_ebf")
    .itemInputs("1x gtceu:platinum_raw_dust")
    .itemOutputs("3x gtceu:platinum_nugget")
    .EUt(480)
    .blastFurnaceTemp(2700)
    .duration(20 * 20)

    // event.recipes.gtceu.electric_blast_furnace("platinum_to_ingot_ebf")
    // .itemInputs("1x gtceu:platinum_dust")
    // .itemOutputs("1x gtceu:platinum_ingot")
    // .EUt(480)
    // .blastFurnaceTemp(2700)
    // .duration(20 * 40)

    event.recipes.gtceu.electric_blast_furnace("raw_palladium_to_ingot_ebf")
    .itemInputs("1x gtceu:palladium_raw_dust")
    .itemOutputs("3x gtceu:palladium_nugget")
    .EUt(480)
    .blastFurnaceTemp(1828)
    .duration(20 * 45)

    global.recipe_lcr(event,
        "raw_plat_to_pgs",
        ["3x gtceu:platinum_raw_dust", "2x gtceu:sodium_dust"],
        ["gtceu:nitric_acid 100"],
        ["3x gtceu:platinum_group_sludge_dust", "4x gtceu:salt_dust"],
        [],
        2.5,
        30)




    global.recipe_lcr(
        event,
        "smb",
        ["14x gtceu:sodium_bisulfate_dust"],
        ["gtceu:hydrogen 4000"],
        ["9x gtceu:sodium_metabisulfate_dust"],
        ["minecraft:water 3000"],
        15, // time
        120 // eut
    )

    event.recipes.gtceu.electric_blast_furnace("salty_calcium_brine_sludge_recycle")
    .inputFluids("gtceu:salty_calcium_brine_sludge 1000")
    .itemOutputs("3x gtceu:calcium_chloride_dust")
    .EUt(120)
    .blastFurnaceTemp(1200)
    .duration(20 * 15)
    


})
