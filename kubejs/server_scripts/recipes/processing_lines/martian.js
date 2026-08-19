import { recipe_centrifuge, recipe_chem_plant, recipe_lcr, recipe_radiation_chamber } from "../../00_util/recipeUtils"

ServerEvents.recipes((event) => {
    /**
     *
     * @param {*} output
     * @param {*} trade_deal
     * @param {*} inputs
     * @param {*} time
     * @param {*} eut
     * @param {*} [helper]
     */
    function c_postbox(output, trade_deal, inputs, time, eut, level) {
            event.recipes.gtceu
                .celestial_post_box(`kubejs:${trade_deal}_${output}`)
                .itemInputs(inputs)
                .notConsumable(`kubejs:${trade_deal}`)
                .addData("paramount", "embassy")
                .addData("paramount_level", level)
                .chancedOutput(`kubejs:${output}`, 9500, 500)
                .chancedOutput(`3x kubejs:${output}`, 2000, 1500)
                .duration(time * 20)
                .EUt(eut)
    }



    // c_postbox_good("martian_shipment_t1", "martian_contract", "64x gtceu:lunarium_ingot", 60 * 10, 13000)
    // c_postbox_good("martian_shipment_t1", "martian_contract", "64x gtceu:lunarium_ingot", 60 * 10, 13000, "embassy")

    // c_postbox_bad("martian_shipment_t1", "martian_contract", "64x gtceu:desh_ingot", 60 * 10, 13000)
    // c_postbox_bad("martian_shipment_t1", "martian_contract", "64x gtceu:desh_ingot", 60 * 10, 13000, "embassy")

    event.recipes.gtceu.assembler("kubejs:radio")
        .itemInputs('2x gtceu:double_ostrum_plate', '4x gtceu:lunarium_ring', '4x gtceu:uranium_triplatinum_single_wire', '2x gtceu:qbit_cpu_chip', '2x #gtceu:circuits/iv', '1x gtceu:iv_emitter', '1x gtceu:iv_sensor')
        .inputFluids('gtceu:soldering_alloy 1000')
        .itemOutputs({type: "minecraft:item_nbt", item: "kubejs:celestial_radio", nbt: {message:1}})
        .duration(1000) 
        .EUt(7860) 

    event.recipes.gtceu.celestial_post_box("kubejs:martian_contract").notConsumable("kubejs:celestial_radio").itemOutputs("kubejs:martian_contract").addData("paramount", "embassy").addData("paramount_level", 1).duration(100).EUt(2)

    c_postbox("martian_shipment_t1", "martian_contract", "64x gtceu:lunarium_ingot", 60 * 10, 7860, 1)

    event.recipes.gtceu.assembler("kubejs:t1_box_open").itemInputs("kubejs:martian_shipment_t1").itemOutputs("64x kubejs:martian_scrap").duration(200).EUt(7860)

    event.recipes.gtceu
        .macerator("kubejs:macerator_martian_scrap")
        .itemInputs("4x kubejs:martian_scrap")
        .itemOutputs("16x kubejs:shredded_martian_scrap")
        .duration(96 * 2 * 20)
        .EUt(1980)

    global.recipe_lcr(event, "dissolved_martian", "16x kubejs:shredded_martian_scrap", "gtceu:aqua_regia 9000", [], "kubejs:dissolved_martian_mineral_solution 1000", 240, 1980)

    event.recipes.gtceu
        .electrolyzer("kubejs:elec_martian_soup")
        .inputFluids("kubejs:dissolved_martian_mineral_solution 1000")
        .itemOutputs("128x gtceu:ostrum_dust", "48x gtceu:tungsten_dust", "16x gtceu:titanite_dust")
        .outputFluids("minecraft:water 2000")
        .duration(60 * 2 * 20)
        .EUt(7860)

    // sulfuria

    global.recipe_centrifuge(
        event,
        "martian_sand",
        "64x gtceu:martian_sand_dust",
        "gtceu:toluene 500",
        ["12x gtceu:salt_dust", "9x gtceu:magnetite_dust", "7x gtceu:magnesium_dust", "5x gtceu:phosphorus_dust", "3x gtceu:inert_sulfur_dust"],
        [],
        60,
        1920
    )
    global.recipe_radiation_chamber(event, "excited_sulfur", "2x gtceu:inert_sulfur_dust", "uranium", 1, "2x gtceu:excited_sulfur_dust", "gtceu:radon 2000", 7860, 48)

    global.recipe_lcr(event, "carb_tetrach", "gtceu:carbon_dust", "gtceu:chlorine 4000", [], "gtceu:carbon_tetrachloride 1000", 20, 480)

    global.recipe_lcr(event, "sulfuria_sol", ["2x gtceu:excited_sulfur_dust", "gtceu:copper_dust"], "gtceu:carbon_tetrachloride 1000", [], "gtceu:sulfuria_solution 1000", 30, 1920)

    event.recipes.gtceu
        .distillation_tower("kubejs:sulfuria")
        .inputFluids("gtceu:sulfuria_solution 1000")
        .outputFluids("gtceu:carbon_tetrachloride 1000")
        .itemOutputs("3x gtceu:copper_sulfuriate_dust")
        .duration(20 * 32)
        .EUt(7860)

    global.recipe_chem_plant(
        event,
        "htba-s",
        ["2x gtceu:sulfuria_dust", "3x gtceu:borax_dust"],
        ["gtceu:argon 1250", "gtceu:vanadium_gallium 1152"],
        [],
        "kubejs:high_temp_binding_agent_s 1152",
        40,
        7860 * 1.5,
        5000, "chemist"
    )

    event.recipes.gtceu
        .canner("kubejs:ht-ba_s")
        .inputFluids("kubejs:high_temp_binding_agent_s 2400")
        .itemInputs("3x gtceu:enriched_naquadah_rod")
        .itemOutputs("3x kubejs:high_temp_binding_agent_rod_s")
        .duration(20 * 32)
        .EUt(7860)

    event.recipes.gtceu
        .mixer("kubejs:pyrotheum")
        .inputFluids("gtceu:blaze 1000")
        .itemInputs("gtceu:sulfuria_dust")
        .outputFluids("voyagercore:pyrotheum 1000")
        .duration(20 * 15)
        .EUt(400)

    event.recipes.gtceu
        .mixer("kubejs:cryotheum")
        .inputFluids("gtceu:ice 2000")
        .itemInputs("gtceu:sulfuria_dust")
        .outputFluids("voyagercore:cryotheum 1000")
        .duration(20 * 15)
        .EUt(400)
})
