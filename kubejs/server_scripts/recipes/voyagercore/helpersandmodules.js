ServerEvents.recipes((event) => {
    /**
     * @type {Record<string, number>}
     */
    const tiermap = {
        lv: 28,
        mv: 120,
        hv: 480,
        ev: 1920,
        iv: 7680,
        luv: 32768 * 0.9,
        zpm: 32768 * 4 * 0.9,
        uv: 32768 * 16 * 0.9
    }

    const tiers = ["mv", "hv", "ev", "iv", "luv"]
    const s_tiers = ["hv", "ev", "iv", "luv"]

    /**
     * @type {Record<string, string>}
     */
    const tierBaseGearMap = {
        lv: "tin_silver_alloy",
        mv: "fluxed_electrum",
        hv: "fluxed_cobalt_electrum",
        ev: "refined_fluxed_electrum",
        iv: "titanite_alloy",
        luv: "perfected_electrum"
        // "zpm": "",
        // "uv": ""
    }

    /**
     * @type {Record<string, string>}
     */
    const tierBaseMatMap = {
        lv: "steel",
        mv: "aluminium",
        hv: "stainless_steel",
        ev: "titanium",
        iv: "tungsten_steel",
        luv: "hsss"
        // "zpm": "",
        // "uv": ""
    }

    /**
     * @type {Record<string, string>}
     */
    const tierSpecialMatMap = {
        mv: "magnesium_diboride",
        hv: "red_steel",
        ev: "lunarium",
        iv: "titanex-879-htb",
        luv: "trellium"
        // "zpm": "",
        // "uv": ""
    }

    /**
     * @type {Record<string, string>}
     */
    const tierCoilMatMap = {
        mv: "gtceu:kanthal",
        hv: "gtceu:nichrome",
        ev: "kubejs:desh",
        iv: "kubejs:titanite",
        luv: "kubejs:industrial_perfected_electrum"
        // "zpm": "",
        // "uv": ""
    }

    /**
     * @type {Record<string, string>}
     */
    const tierMaxCircuitTierMap = {
        mv: "hv",
        hv: "iv",
        ev: "luv",
        iv: "zpm",
        luv: "uv"
        // "zpm": "",
        // "uv": ""
    }

    // @ts-ignore
    function generic_helper_hull_recipe(tier, frame_mat, platemat, fluids) {
        event.recipes.gtceu
            .helper_factory(`kubejs:${tier}_generic_helper_hull`)
            .itemInputs(`4x gtceu:${frame_mat}_frame`, `kubejs:${tier}_helper_computation_array`, `8x gtceu:double_${platemat}_plate`, `2x gtceu:${tier}_robot_arm`)
            .inputFluids(fluids)
            .itemOutputs(`voyagercore:${tier}_generic_helper_hull`)
            .duration(20 * 120)
            .EUt(tiermap[tier])
    }

    // @ts-ignore
    function specialized_helper_hull_recipe(tier, frame_mat, platemat, fluids)
    {
 
            event.recipes.gtceu.helper_factory(`kubejs:${tier}_specialized_helper_hull`)
                .itemInputs(`4x gtceu:${frame_mat}_frame`,`3x kubejs:${tier}_helper_computation_array`, `16x gtceu:double_${platemat}_plate`,`4x gtceu:${tier}_robot_arm`)
                .inputFluids(fluids)
                .itemOutputs(`voyagercore:${tier}_specialized_helper_hull`)
                .duration(20 * 120)
                .EUt(tiermap[tier])
        
        
    }

    function paramount_helper_hull_recipe(id, inputItems, inputFluids, tier)
    {
 
            event.recipes.gtceu.helper_factory(`kubejs:${id}_paramount_helper_hull`)
                .itemInputs(inputItems)
                .inputFluids(inputFluids)
                .itemOutputs(`voyagercore:${id}_paramount_helper_hull`)
                .duration(20 * 120)
                .EUt(tiermap[tier])
        
        
    }

    // @ts-ignore
    function base_module_recipe(tier, gearmat, platemat, fluids, extra_inputs) {
        if (extra_inputs) {
            event.recipes.gtceu
                .assembler(`kubejs:${tier}_helper_module`)
                .itemInputs(`4x gtceu:${platemat}_plate`, `4x gtceu:small_${gearmat}_gear`, `2x #gtceu:circuits/${tier}`, `2x gtceu:${tier}_emitter`)
                .itemInputs(extra_inputs)
                .inputFluids(fluids)
                .itemOutputs(`voyagercore:${tier}_helper_module`)
                .duration(20 * 30)
                .EUt(tiermap[tier])
        } else {
            event.recipes.gtceu
                .assembler(`kubejs:${tier}_helper_module`)
                .itemInputs(`4x gtceu:${platemat}_plate`, `4x gtceu:small_${gearmat}_gear`, `2x #gtceu:circuits/${tier}`, `2x gtceu:${tier}_emitter`)
                .inputFluids(fluids)
                .itemOutputs(`voyagercore:${tier}_helper_module`)
                .duration(20 * 30)
                .EUt(tiermap[tier]) // trolol
        }
    }

    // @ts-ignore
    function output_module_recipe(tier, ctier, coilMat, _platemat) {
        event.recipes.gtceu
            .assembler(`kubejs:${tier}_output_helper_module`)
            .itemInputs(
                `voyagercore:${tier}_speed_helper_module`,
                `voyagercore:${tier}_efficiency_helper_module`,
                tier != "mv" ? `voyagercore:${tier}_parallel_helper_module` : `voyagercore:${tier}_basic_helper_module`,
                `8x ${coilMat}_coil_block`,
                `2x #gtceu:circuits/${ctier}`,
                `2x gtceu:${tier}_field_generator`
            )
            .itemOutputs(`voyagercore:${tier}_output_helper_module`)
            .EUt(tiermap[tier])
            .duration(20 * 30)
    }

    // @ts-ignore
    function speed_module_recipe(tier, ctier, wiremat, platemat, extra_inputs) {
        if (extra_inputs) {
            event.recipes.gtceu
                .assembler(`kubejs:${tier}_speed_helper_module`)
                .itemInputs(
                    `voyagercore:${tier}_helper_module`,
                    `8x gtceu:${platemat}_plate`,
                    `32x gtceu:fine_${wiremat}_wire`,
                    `4x #gtceu:circuits/${ctier}`,
                    `2x gtceu:${tier}_electric_piston`,
                    `gtceu:${tier}_transformer_1a`
                )
                .itemInputs(extra_inputs)
                .itemOutputs(`voyagercore:${tier}_speed_helper_module`)
                .duration(20 * 30)
                .EUt(tiermap[tier]) // trolol
        } else {
            event.recipes.gtceu
                .assembler(`kubejs:${tier}_speed_helper_module`)
                .itemInputs(
                    `voyagercore:${tier}_helper_module`,
                    `8x gtceu:${platemat}_plate`,
                    `32x gtceu:fine_${wiremat}_wire`,
                    `4x #gtceu:circuits/${ctier}`,
                    `2x gtceu:${tier}_electric_piston`,
                    `gtceu:${tier}_transformer_1a`
                )
                .itemOutputs(`voyagercore:${tier}_speed_helper_module`)
                .duration(20 * 30)
                .EUt(tiermap[tier]) // trolol
        }
    }

    // @ts-ignore
    function efficiency_module_recipe(tier, ctier, wiremat, platemat, fluids, extra_inputs) {
        if (extra_inputs) {
            event.recipes.gtceu
                .assembler(`kubejs:${tier}_efficiency_helper_module`)
                .itemInputs(
                    `voyagercore:${tier}_helper_module`,
                    `4x gtceu:long_${platemat}_rod`,
                    `32x gtceu:fine_${wiremat}_wire`,
                    `2x #gtceu:circuits/${ctier}`,
                    `2x gtceu:${tier}_electric_pump`,
                    `gtceu:${tier}_transformer_1a`
                )
                .itemInputs(extra_inputs)
                .inputFluids(fluids)
                .itemOutputs(`voyagercore:${tier}_efficiency_helper_module`)
                .duration(20 * 30)
                .EUt(tiermap[tier]) // trolol
        } else {
            event.recipes.gtceu
                .assembler(`kubejs:${tier}_efficiency_helper_module`)
                .itemInputs(
                    `voyagercore:${tier}_helper_module`,
                    `4x gtceu:long_${platemat}_rod`,
                    `32x gtceu:fine_${wiremat}_wire`,
                    `2x #gtceu:circuits/${ctier}`,
                    `2x gtceu:${tier}_electric_pump`,
                    `gtceu:${tier}_transformer_1a`
                )
                .inputFluids(fluids)
                .itemOutputs(`voyagercore:${tier}_efficiency_helper_module`)
                .duration(20 * 30)
                .EUt(tiermap[tier]) // trolol
        }
    }

    // @ts-ignore
    function basic_module_recipe(tier, ctier, wiremat, platemat, extra_inputs) {
        if (extra_inputs) {
            event.recipes.gtceu
                .assembler(`kubejs:${tier}_basic_helper_module`)
                .itemInputs(
                    `voyagercore:${tier}_helper_module`,
                    `4x gtceu:${platemat}_plate`,
                    `32x gtceu:fine_${wiremat}_wire`,
                    `2x #gtceu:circuits/${ctier}`,
                    `1x gtceu:${tier}_electric_pump`,
                    `1x gtceu:${tier}_electric_piston`
                )
                .itemInputs(extra_inputs)
                .itemOutputs(`voyagercore:${tier}_basic_helper_module`)
                .duration(20 * 30)
                .EUt(tiermap[tier]) // trolol
        } else {
            event.recipes.gtceu
                .assembler(`kubejs:${tier}_basic_helper_module`)
                .itemInputs(
                    `voyagercore:${tier}_helper_module`,
                    `4x gtceu:${platemat}_plate`,
                    `32x gtceu:fine_${wiremat}_wire`,
                    `2x #gtceu:circuits/${ctier}`,
                    `1x gtceu:${tier}_electric_pump`,
                    `1x gtceu:${tier}_electric_piston`,
                    `2x gtceu:${tier}_electric_motor`
                )
                .itemOutputs(`voyagercore:${tier}_basic_helper_module`)
                .duration(20 * 30)
                .EUt(tiermap[tier]) // trolol
        }
    }

    // @ts-ignore
    function parallel_module_recipe(tier, ctier, wiremat, wiremat2, extra_inputs) {
        if (extra_inputs) {
            event.recipes.gtceu
                .assembler(`kubejs:${tier}_parallel_helper_module`)
                .itemInputs(
                    `voyagercore:${tier}_helper_module`,
                    `2x gtceu:${wiremat2}_octal_wire`,
                    `32x gtceu:fine_${wiremat}_wire`,
                    `2x #gtceu:circuits/${ctier}`,
                    `1x gtceu:${tier}_electric_pump`,
                    `1x gtceu:${tier}_electric_piston`
                )
                .itemInputs(extra_inputs)
                .itemOutputs(`voyagercore:${tier}_parallel_helper_module`)
                .duration(20 * 30)
                .EUt(tiermap[tier]) // trolol
        }
        else
        {
            event.recipes.gtceu.assembler(`kubejs:${tier}_parallel_helper_module`)
                .itemInputs(`voyagercore:${tier}_helper_module`, `2x gtceu:${wiremat2}_octal_wire`, `32x gtceu:fine_${wiremat}_wire`, `8x #gtceu:circuits/${ctier}`, `1x gtceu:${tier}_emitter`, `1x gtceu:${tier}_sensor`, `4x gtceu:${tier}_robot_arm`, `gtceu:${tier}_transformer_16a`)
                .itemOutputs(`voyagercore:${tier}_parallel_helper_module`)
                .duration(20 * 30)
                .EUt(tiermap[tier]) // trolol
        }
        
    }

    function assembler_module_recipe(id, tier, isRecipe, itemInputs, fluidInputs)
    {
        if(isRecipe)
        {
            event.recipes.gtceu.assembler(`kubejs:${tier}_${id}_helper_recipe_module`)
                .itemInputs(`voyagercore:${tier}_helper_module`)
                .itemInputs(itemInputs)
                .inputFluids(fluidInputs)
                .itemOutputs(`voyagercore:${tier}_${id}_helper_recipe_module`)
                .duration(20 * 30)
                .EUt(tiermap[tier]) // trolol
        }
        else
        {
            event.recipes.gtceu.assembler(`kubejs:${tier}_${id}_helper_module`)
                .itemInputs(`voyagercore:${tier}_helper_module`)
                .itemInputs(itemInputs)
                .inputFluids(fluidInputs)
                .itemOutputs(`voyagercore:${tier}_${id}_helper_module`)
                .duration(20 * 30)
                .EUt(tiermap[tier]) // trolol
        }
    }

    function assembler_paramount_module_recipe(id, tier, level, helper, items, fluids)
    {
        event.recipes.gtceu.assembler(`kubejs:${id}_${helper}_helper_module_${level}`)
                .itemInputs(`voyagercore:${tier}_helper_module`)
                .itemInputs(items)
                .inputFluids(fluids)
                .itemOutputs(`voyagercore:${id}_${helper}_helper_module_${level}`)
                .duration(20 * 30)
                .EUt(tiermap[tier]) // trolol
    }

    function tier_recipe_module_cube(tier, machine, wiremat, misc)
    {
        event.shaped(
            Item.of(`voyagercore:${tier}_${machine}_helper_recipe_module`, 1), // arg 1: output
            [
                'BDB',
                'ACA', // arg 2: the shape (array of strings)
                'EAE'
            ],
            {
                A: misc,
                B: `gtceu:${wiremat}_double_wire`,  //arg 3: the mapping object
                C: `voyagercore:${tier}_helper_module`,
                D: `gtceu:cube_${machine}`,
                E: `#gtceu:circuits/${tier}`
            }
        )
    }

    function grandma_module(id, level, tier, items, fluids)
    {
        assembler_paramount_module_recipe(id, tier, level, "grandma", items, fluids)
    }

    function hungry_module(id, level, tier, items, fluids)
    {
        assembler_paramount_module_recipe(id, tier, level, "hungry", items, fluids)
    }

    function embassy_module(id, level, tier, items, fluids)
    {
        assembler_paramount_module_recipe(id, tier, level, "embassy", items, fluids)
    }

    tiers.forEach(tier => {
        base_module_recipe(tier, tierBaseGearMap[tier], tierBaseMatMap[tier], "gtceu:polyethylene 1000")
    })

    tiers.forEach(tier => generic_helper_hull_recipe(tier, tierBaseMatMap[tier], tierBaseMatMap[tier], "gtceu:soldering_alloy 288"))
    s_tiers.forEach(tier => specialized_helper_hull_recipe(tier, tierBaseMatMap[tier], tierSpecialMatMap[tier], "gtceu:soldering_alloy 576"))
    tiers.forEach(tier => output_module_recipe(tier, tierMaxCircuitTierMap[tier], tierCoilMatMap[tier], tierBaseGearMap[tier]))

    hungry_module("stomach", 1, "ev",
        ['4x gtceu:double_ultimet_plate', 'voyagercore:ev_basic_helper_module', 'gtceu:ev_fluid_regulator', 'gtceu:ptfe_pipe_casing', '4x gtceu:tungsten_steel_tiny_fluid_pipe'],
        ['gtceu:hydrochloric_acid 8000']
    )

    grandma_module("baking_sheet", 1, "hv", 
        ['4x gtceu:double_desh_plate', 'voyagercore:ev_basic_helper_module', 'kubejs:grandmas_baking_sheet'],
        ['gtceu:rose_gold 576']
    )
    event.recipes.gtceu.assembler(`kubejs:helper_wheel_recipe_module`)
                .itemInputs(`voyagercore:hv_helper_module`)
                .itemInputs('4x gtceu:steel_rotor', '2x gtceu:hv_electric_motor')
                .inputFluids("kubejs:melted_butter 576")
                .itemOutputs(`voyagercore:hv_helper_wheel_recipe_module`)
                .duration(20 * 30)
                .EUt(tiermap["hv"]) // trolol
    paramount_helper_hull_recipe('grandma', 
        ['voyagercore:ev_specialized_helper_hull', 'kubejs:heart_of_gold', '8x gtceu:sugar_block'],
        ['gtceu:gold 576'],
        'ev'
    )
    paramount_helper_hull_recipe('hungry', 
        ['voyagercore:ev_specialized_helper_hull', 'kubejs:heart_of_gold', '6x gtceu:tungsten_carbide_drill_head', '4x gtceu:lapotron_crystal', 'gtceu:ev_field_generator'],
        ['gtceu:yttrium 576'],
        'ev'
    )
    paramount_helper_hull_recipe('embassy', 
        ['voyagercore:ev_specialized_helper_hull', 'kubejs:celestial_radio', 'minecraft:red_banner', 'minecraft:leather_chestplate'],
        ['gtceu:tungsten_steel 576'],
        'ev'
    )

    embassy_module("the_debater", 1, "ev",
        ['voyagercore:ev_basic_helper_module', 'minecraft:jukebox', 'gtceu:tungsten_steel_sword'],
        ['gtceu:desh 1152']
    )
    embassy_module("the_diplomat", 1, "iv",
        ['voyagercore:ev_output_helper_module', '2x gtceu:iv_emitter', '4x #gtceu:circuits/luv'],
        ['gtceu:titanite 1152']
    )
    embassy_module("the_networker", 1, "iv",
        ['voyagercore:iv_efficiency_helper_module', '2x gtceu:iv_sensor', '4x #gtceu:circuits/luv'],
        ['gtceu:titanex-594-hta 1152']
    )


    speed_module_recipe("mv", "hv", "energetic_alloy", "black_bronze")
    efficiency_module_recipe("mv", "mv", "fluxed_electrum", "fluxed_electrum", "gtceu:sodium_potassium 2000")
    basic_module_recipe("mv", "hv", "cupronickel", "kanthal")
    // parallel_module_recipe("mv", "ev", "platinum", "magnesium_diboride")

    speed_module_recipe("hv", "ev", "energetic_pearlic_alloy", "niobium_nitride")
    efficiency_module_recipe("hv", "hv", "fluxed_cobalt_electrum", "fluxed_cobalt_electrum", "gtceu:sodium_potassium 2000")
    basic_module_recipe("hv", "ev", "platinum", "nichrome")
    parallel_module_recipe("hv", "iv", "tantalum", "mercury_barium_calcium_cuprate")

    speed_module_recipe("ev", "iv", "lunarium", "titanium_carbide")
    efficiency_module_recipe("ev", "ev", "refined_fluxed_electrum", "refined_fluxed_electrum", "gtceu:sodium_potassium 2000")
    basic_module_recipe("ev", "iv", "niobium_titanium", "desh")
    parallel_module_recipe("ev", "luv", "iridium", "uranium_triplatinum")

    speed_module_recipe("iv", "luv", "titanex-901-htc", "hsse")
    efficiency_module_recipe("iv", "iv", "titanite_alloy", "titanite_alloy", "voyagercore:cryotheum 2000")
    basic_module_recipe("iv", "luv", "titanite", "hssg")
    parallel_module_recipe("iv", "zpm", "martian-composite", "samarium_iron_arsenic_oxide")

    speed_module_recipe("luv", "zpm", "europium", "duranium")
    efficiency_module_recipe("luv", "luv", "perfected_electrum", "perfected_electrum", "voyagercore:cryotheum 2000")
    basic_module_recipe("luv", "zpm", "industrial_perfected_electrum", "naquadah")
    parallel_module_recipe("luv", "uv", "trellium", "indium_tin_barium_titanium_cuprate")


    const ev_superconductor = "refined_fluxed_electrum"

    tier_recipe_module_cube("ev", "centrifuge", ev_superconductor, "gtceu:ev_electric_motor")
    tier_recipe_module_cube("ev", "thermal_centrifuge", "nichrome", "gtceu:ev_electric_motor")
    tier_recipe_module_cube("ev", "macerator", "tungsten", "gtceu:ev_electric_piston")
    tier_recipe_module_cube("ev", "electrolyzer", "platinum", "gtceu:tempered_glass")
    // tier_recipe_module_cube("luv", "assembler", "industrial_perfected_electrum", "gtceu:luv_field_generator")
    tier_recipe_module_cube("ev", "oven", "nichrome", "gtceu:cupronickel_spring")

    assembler_module_recipe('smd_assembler', 'hv', true,
        ['voyagercore:hv_parallel_helper_module', 'gtceu:hv_assembler', '#gtceu:circuits/iv', '16x gtceu:smd_diode', '16x gtceu:smd_inductor', '16x gtceu:smd_capacitor', '16x gtceu:fine_fluxed_cobalt_electrum_wire'],
        'gtceu:radon 250'
    )
    
    assembler_module_recipe('petrochem', 'ev', true,
        ['voyagercore:hv_parallel_helper_module', 'gtceu:distillation_tower', '8x kubejs:desh_coil_block', '#gtceu:circuits/ev', '16x gtceu:polyvinyl_butyral_plate','16x gtceu:fine_refined_fluxed_electrum_wire'],
        'gtceu:styrene_butadiene_rubber 250'
    )
    assembler_module_recipe('plat_line', 'ev', true,
        ['voyagercore:ev_parallel_helper_module', 'gtceu:large_chemical_reactor', '8x gtceu:tungsten_gear', 
        '2x #gtceu:circuits/luv', '4x gtceu:quantum_star','16x gtceu:fine_lunarium_wire'],
        'gtceu:styrene_butadiene_rubber 250'
    )
    assembler_module_recipe('desh_line', 'ev', true,
        ['voyagercore:ev_parallel_helper_module', 'gtceu:large_chemical_reactor', '8x gtceu:ruthenium_gear', 
        '2x #gtceu:circuits/luv', '4x gtceu:quantum_star','16x gtceu:fine_iridium_wire'],
        'gtceu:styrene_butadiene_rubber 250'
    )

    event.shaped(
        Item.of('voyagercore:helper_holder', 1), // arg 1: output
        [
            'BDB',
            'ACA', // arg 2: the shape (array of strings)
            'EFE'
        ],
        {
            A: 'gtceu:polyvinyl_chloride_small_item_pipe',
            B: 'gtceu:fluxed_cobalt_electrum_double_wire',  //arg 3: the mapping object
            C: 'gtceu:hv_machine_hull',
            D: 'gtceu:hv_conveyor_module',
            E: '#gtceu:circuits/hv',
            F: 'gtceu:maintenance_hatch'
        }
    )

    event.shaped(
        Item.of('voyagercore:mv_ebf_helper_recipe_module', 1), // arg 1: output
        [
            'BDB',
            'ACA', // arg 2: the shape (array of strings)
            'EAE'
        ],
        {
            A: 'gtceu:kanthal_coil_block',
            B: 'gtceu:fluxed_cobalt_electrum_double_wire',  //arg 3: the mapping object
            C: 'voyagercore:mv_helper_module',
            D: 'gtceu:electric_blast_furnace',
            E: '#gtceu:circuits/mv'
        }
    )

    // @ts-ignore
    event.shaped(
        Item.of('gtceu:mv_helper_factory', 1), // arg 1: output
        [
            'BDB',
            'ACA', // arg 2: the shape (array of strings)
            'EDE'
        ],
        {
            A: 'gtceu:fluxed_electrum_double_wire',
            B: 'gtceu:mv_robot_arm',  //arg 3: the mapping object
            C: 'gtceu:mv_machine_hull',
            D: 'gtceu:polyvinyl_chloride_normal_item_pipe',
            E: '#gtceu:circuits/mv'
        }
    )

    // @ts-ignore
    event.shaped(
        Item.of('gtceu:hv_helper_factory', 1), // arg 1: output
        [
            'BDB',
            'ACA', // arg 2: the shape (array of strings)
            'EDE'
        ],
        {
            A: 'gtceu:fluxed_cobalt_electrum_double_wire',
            B: 'gtceu:hv_robot_arm',  //arg 3: the mapping object
            C: 'gtceu:hv_machine_hull',
            D: 'gtceu:polytetrafluoroethylene_normal_fluid_pipe',
            E: '#gtceu:circuits/hv'
        }
    )
})
