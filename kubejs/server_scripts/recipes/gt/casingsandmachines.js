ServerEvents.recipes((event) => {
    /**
     *
     * @param {*} mat
     * @param {*} output
     * @param {*} [additionalInputs]
     */
    function casing_recipe(mat, output, additionalInputs) {
        if (additionalInputs) {
            event.recipes.gtceu
                .assembler("kubejs:" + mat + "_casing")
                .itemInputs("6x gtceu:" + mat + "_plate", "1x gtceu:" + mat + "_frame", additionalInputs)
                .circuit(6)
                .itemOutputs("2x kubejs:" + output + "_casing")
                .duration(30)
                .EUt(16)
        } else {
            event.recipes.gtceu
                .assembler("kubejs:" + mat + "_casing")
                .itemInputs("6x gtceu:" + mat + "_plate", "1x gtceu:" + mat + "_frame")
                .circuit(6)
                .itemOutputs("2x kubejs:" + output + "_casing")
                .duration(30)
                .EUt(16)
        }
    }

    casing_recipe("desh", "durable_desh")
    casing_recipe("ultimet", "firm_ultimet")
    // casing_recipe("ostrum", "ostrum")
    // casing_recipe('frost_conducting', 'aluminex_202_a')
    // casing_recipe("titanite_alloy", "titanite", ["#gtceu:circuits/iv"])
    // casing_recipe("black_bronze", "heatproof_helper")
    casing_recipe("refined_fluxed_electrum", "heat_resistant_refined_fluxed_electrum")
    // casing_recipe('tungsten', 'condensation_resistant_tungsten')
    // casing_recipe('titanium', 'platinum', '2x #gtceu:circuits/ev')
    // @ts-ignore
    event.shaped(
        Item.of("gtceu:alloy_blast_smelter", 1), // arg 1: output
        [
            "ADA",
            "CBC", // arg 2: the shape (array of strings)
            "ADA"
        ],
        {
            A: "gtceu:double_ostrum_plate",
            B: "gtceu:iv_alloy_smelter", //arg 3: the mapping object
            C: "gtceu:uranium_triplatinum_double_wire",
            D: "#gtceu:circuits/luv"
        }
    )
    event.replaceInput({ output: "gtceu:large_assembler" }, "gtceu:platinum_single_cable", "gtceu:titanex-901-htc_gear")

    event.recipes.gtceu
        .assembler("kubejs:heatproof_helper_casing")
        .itemInputs("6x gtceu:black_bronze_plate", "1x gtceu:heatproof_machine_casing", "gtceu:aluminium_normal_fluid_pipe")
        .circuit(6)
        .itemOutputs("2x voyagercore:heatproof_helper_casing")
        .duration(30)
        .EUt(16)

    event.recipes.gtceu
        .assembler("kubejs:ostrum_casing")
        .itemInputs("6x gtceu:ostrum_plate", "1x gtceu:ostrum_frame")
        .circuit(6)
        .itemOutputs("2x voyagercore:ostrum_casing")
        .duration(30)
        .EUt(16)

    event.recipes.gtceu
        .assembler("kubejs:chemical_plant_casing")
        .itemInputs("voyagercore:condensation_resistant_tungsten_casing", "gtceu:lunarium_rotor")
        .inputFluids("gtceu:styrene_butadiene_rubber 576")
        .circuit(6)
        .itemOutputs("2x voyagercore:chemical_plant_casing")
        .duration(30)
        .EUt(16)

    event.recipes.gtceu
        .assembler("kubejs:condensation_resistant_tungsten_casing")
        .itemInputs("6x gtceu:tungsten_plate", "1x gtceu:tungsten_frame")
        .circuit(6)
        .itemOutputs("2x voyagercore:condensation_resistant_tungsten_casing")
        .duration(30)
        .EUt(16)

    event.recipes.gtceu
        .assembler("kubejs:stout_titanium_carbide_casing")
        .itemInputs("6x gtceu:titanium_carbide_plate", "1x gtceu:titanium_frame")
        .circuit(6)
        .itemOutputs("2x kubejs:stout_titanium_carbide_casing")
        .duration(30)
        .EUt(16)

    event.recipes.gtceu
        .assembler("kubejs:platinum_casing")
        .itemInputs("6x gtceu:platinum_plate", "1x gtceu:titanium_frame", "2x #gtceu:circuits/ev")
        .circuit(6)
        .itemOutputs("2x voyagercore:platinum_casing")
        .duration(30)
        .EUt(16)

    event.recipes.gtceu
        .assembler("kubejs:frost_conducting_casing")
        .itemInputs("6x gtceu:aluminex_202_a_plate", "1x gtceu:aluminex_202_a_frame", "2x kubejs:heat_sheild", "#gtceu:circuits/iv")
        .circuit(6)
        .itemOutputs("2x voyagercore:frost_conducting_casing")
        .duration(30)
        .EUt(7680)

    event.recipes.gtceu
        .assembler("kubejs:cooling_lamp")
        .itemInputs("8x voyagercore:frost_conducting_casing", "1x gtceu:iv_emitter")
        .inputFluids("gtceu:pcb_coolant 8000")
        .circuit(1)
        .itemOutputs("2x voyagercore:cooling_lamp")
        .duration(30)
        .EUt(7860)

    event.recipes.gtceu
        .assembler("kubejs:radiation_proof_lead_casing")
        .itemInputs("6x gtceu:lead_plate", "1x gtceu:titanium_frame")
        .circuit(6)
        .itemOutputs("2x voyagercore:radiation_proof_lead_casing")
        .duration(30)
        .EUt(16)

    event.recipes.gtceu.assembler('kubejs:radiation_conducting_titanex_casing')
        .itemInputs(
            '1x voyagercore:radiation_proof_lead_casing',
            '6x gtceu:double_titanex-879-htb_plate',
            'gtceu:iv_field_generator'
        )
        .circuit(6)
        .itemOutputs("4x voyagercore:radiant_titanex_casing")
        .duration(30)
        .EUt(16)

    event.recipes.gtceu
        .assembler("kubejs:clean_assembly_casing")
        .itemInputs("1x gtceu:blue_steel_frame", "6x gtceu:double_blue_steel_plate", "3x gtceu:hv_robot_arm", "8x gtceu:nichrome_double_wire")
        .circuit(6)
        .itemOutputs("1x voyagercore:clean_assembly_casing")
        .duration(30)
        .EUt(480)

    // crushing wheels

    event.recipes.gtceu
        .assembler("kubejs:luv_crushing_wheel")
        .itemInputs("1x gtceu:luv_machine_hull", "3x gtceu:hsse_buzz_saw_blade", "5x gtceu:hssg_gear", "16x gtceu:fine_perfected_electrum_wire", "#gtceu:circuits/luv")
        .circuit(6)
        .itemOutputs("4x voyagercore:luv_crushing_wheel")
        .duration(10 * 20)
        .EUt(32000)

    event.recipes.gtceu
        .assembler("kubejs:zpm_crushing_wheel")
        .itemInputs("1x gtceu:zpm_machine_hull", "3x gtceu:duranium_buzz_saw_blade", "5x gtceu:calorite_gear", "16x gtceu:fine_europium_wire", "#gtceu:circuits/zpm")
        .circuit(6)
        .itemOutputs("4x voyagercore:zpm_crushing_wheel")
        .duration(10 * 20)
        .EUt(32000)

    // fuck it ill put these here too

    /**
     *
     * @param {*} mat
     * @param {*} output
     * @param {*} [input]
     */
    function cube_multi(mat, output, input) {
        if (!input) {
            // @ts-ignore
            event.shaped(
                Item.of("gtceu:cube_" + output, 1), // arg 1: output
                [
                    "ABA",
                    "BCB", // arg 2: the shape (array of strings)
                    "ABA"
                ],
                {
                    A: "gtceu:double_" + mat + "_plate",
                    B: "#gtceu:circuits/ev", //arg 3: the mapping object
                    C: "gtceu:ev_" + output
                }
            )
        } else {
            // @ts-ignore
            event.shaped(
                Item.of("gtceu:cube_" + output, 1), // arg 1: output
                [
                    "ABA",
                    "BCB", // arg 2: the shape (array of strings)
                    "ABA"
                ],
                {
                    A: "gtceu:double_" + mat + "_plate",
                    B: "#gtceu:circuits/ev", //arg 3: the mapping object
                    C: "gtceu:" + input
                }
            )
        }
    }

    cube_multi("desh", "centrifuge")
    cube_multi("titanium_carbide", "macerator")
    cube_multi("ultimet", "electrolyzer")
    cube_multi("lead", "oven", "molybdenum_disilicide_coil_block")
    cube_multi("tungsten", "autoclave")
    cube_multi("refined_fluxed_electrum", "thermal_centrifuge")
    cube_multi("platinum", "assembler")

    event.shaped(
        Item.of("voyagercore:chemical_plant", 1), // arg 1: output
        [
            "DED",
            "ABC", // arg 2: the shape (array of strings)
            "FEF"
        ],
        {
            A: "gtceu:iv_mixer",
            B: "gtceu:large_chemical_reactor", //arg 3: the mapping object
            C: "gtceu:iv_centrifuge",
            D: "#gtceu:circuits/luv",
            E: "gtceu:dense_tungsten_steel_plate",
            F: "gtceu:styrene_butadiene_rubber_plate"
        }
    )

    event.shaped(
        Item.of("voyagercore:helper_electric_blast_furnace", 1), // arg 1: output
        [
            "DDD",
            "DBD", // arg 2: the shape (array of strings)
            "FEF"
        ],
        {
            B: "gtceu:electric_blast_furnace", //arg 3: the mapping object
            D: "gtceu:black_bronze_plate",
            E: "gtceu:polyvinyl_chloride_normal_item_pipe",
            F: "#gtceu:circuits/mv"
        }
    )

    event.shaped(
        Item.of("voyagercore:grandmas_stovetop_oven", 1), // arg 1: output
        [
            "DDD",
            "DBD", // arg 2: the shape (array of strings)
            "FEF"
        ],
        {
            B: "voyagercore:ev_oven_helper_recipe_module", //arg 3: the mapping object
            D: "gtceu:titanium_plate",
            E: "gtceu:ev_electric_furnace",
            F: "#gtceu:circuits/ev"
        }
    )

    event.shaped(
        Item.of("voyagercore:helper_factory", 1), // arg 1: output
        [
            "DED",
            "ABC", // arg 2: the shape (array of strings)
            "FEF"
        ],
        {
            A: "gtceu:ev_bender",
            B: "gtceu:ev_machine_hull", //arg 3: the mapping object
            C: "gtceu:ev_assembler",
            D: "#gtceu:circuits/luv",
            E: "gtceu:desh_gear",
            F: "gtceu:fine_refined_fluxed_electrum_wire"
        }
    )

    event.shaped(
        Item.of("voyagercore:helper_assembler", 1), // arg 1: output
        [
            "DED",
            "CBC", // arg 2: the shape (array of strings)
            "FEF"
        ],
        {
            B: "gtceu:ev_machine_hull", //arg 3: the mapping object
            C: "gtceu:ev_robot_arm",
            D: "#gtceu:circuits/ev",
            E: "gtceu:tungsten_gear",
            F: "gtceu:fine_refined_fluxed_electrum_wire"
        }
    )

    const tier_gear_map =
    {
        "mv": "vanadium_steel",
        "hv": "red_steel"
    }

    const tier_wire_map =
    {
        "mv": "fluxed_electrum",
        "hv": "fluxed_cobalt_electrum"
    }

    function singleblock_ha(tier)
    {
        event.shaped(
        Item.of(`gtceu:${tier}_helper_assembler`, 1), // arg 1: output
            [
                "DED",
                "CBC", // arg 2: the shape (array of strings)
                "FEF"
            ],
            {
                B: `gtceu:${tier}_machine_hull`, //arg 3: the mapping object
                C: `gtceu:${tier}_robot_arm`,
                D: `#gtceu:circuits/${tier}`,
                E: `gtceu:${tier_gear_map[tier]}_gear`,
                F: `gtceu:fine_${tier_wire_map[tier]}_wire`
            }
        )
    }

    singleblock_ha('mv')
    singleblock_ha('hv')

    event.recipes.gtceu
        .canner("kubejs:ev_precise_robot_arm_box")
        .itemInputs("1x gtceu:ev_machine_hull", "4x gtceu:ev_robot_arm")
        .itemOutputs("1x voyagercore:ev_precise_robot_arm_box")
        .duration(10 * 20)
        .EUt(1920)

    event.shaped(
        Item.of("voyagercore:celestial_post_box", 1), // arg 1: output
        [
            "DED",
            "CBC", // arg 2: the shape (array of strings)
            "FEF"
        ],
        {
            B: "gtceu:large_packer", //arg 3: the mapping object
            C: "gtceu:iv_conveyor_module",
            D: "#gtceu:circuits/luv",
            E: "gtceu:iv_robot_arm",
            F: "gtceu:iv_sensor"
        }
    )

    function steam_multi(machine)
    {
        event.shaped(
            Item.of(`voyagercore:large_steam_${machine}`, 1), // arg 1: output
            [
                "FEF",
                "FBF", // arg 2: the shape (array of strings)
                "FEF"
            ],
            {
                B: `gtceu:hp_steam_${machine}`, //arg 3: the mapping object
                E: "gtceu:potin_gear",
                F: "gtceu:steam_machine_casing"
            }
        )
    }

    const steammultis = ['forge_hammer', 'compressor']

    steammultis.forEach(m => steam_multi(m))

    event.shaped(
            Item.of(`voyagercore:large_steam_centrifuge`, 1), // arg 1: output
            [
                "FEF",
                "FBF", // arg 2: the shape (array of strings)
                "FEF"
            ],
            {
                B: `gtceu:steel_frame`, //arg 3: the mapping object
                E: "gtceu:potin_gear",
                F: "gtceu:steam_machine_casing"
            }
        )

    event.shaped(
            Item.of(`voyagercore:large_steam_ore_washer`, 1), // arg 1: output
            [
                "FEF",
                "FBF", // arg 2: the shape (array of strings)
                "FEF"
            ],
            {
                B: `gtceu:bronze_frame`, //arg 3: the mapping object
                E: "gtceu:potin_gear",
                F: "gtceu:steam_machine_casing"
            }
        )
})


