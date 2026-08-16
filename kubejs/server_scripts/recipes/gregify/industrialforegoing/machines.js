ServerEvents.recipes((event) => {
    event.remove({ mod: "industrialforegoing" })

    function enchantment_altar_ars(inputs, reagant, output, cost, keepNBT)
    {
        event.recipes.ars_nouveau.enchanting_apparatus(
            inputs, // input items
                reagant, // reagent
                output, // output
                cost, // source cost
                keepNBT // keep nbt of reagent, think like a smithing recipe
            )
    }

    function if_machine(crafting_result, a, b, c, d, e, f)
    {
        event.shaped(
        Item.of(crafting_result, 1), // arg 1: output
            [
                "FEF",
                "CAC", // arg 2: the shape (array of strings)
                "BDB"
            ],
            {
                A: a,
                B: b,
                C: c,
                D: d,
                E: e,
                F: f
            }
        )
    }

    function if_machine_c(crafting_result, count, a, b, c, d, e, f)
    {
        event.shaped(
        Item.of(crafting_result, count), // arg 1: output
            [
                "FEF",
                "CAC", // arg 2: the shape (array of strings)
                "BDB"
            ],
            {
                A: a,
                B: b,
                C: c,
                D: d,
                E: e,
                F: f
            }
        )
    }

    function if_ns(str)
    {
        return "industrialforegoing:" + str
    }
    function apotheosis(str)
    {
        return "apotheosis:" + str
    }
    
    function ars(str)
    {
        return "ars_nouveau:" + str
    }

    const pity_frame = if_ns("machine_frame_pity")
    const simple_frame = if_ns("machine_frame_simple")
    const advanced_frame = if_ns("machine_frame_advanced")

    if_machine(if_ns("mob_slaughter_factory"), simple_frame, "gtceu:vanadium_steel_buzz_saw_blade", '#gtceu:circuits/mv', 'gtceu:mv_fluid_regulator', "gtceu:double_pink_steel_plate", "gtceu:vanadium_steel_buzz_saw_blade")
    if_machine(if_ns("mob_crusher"), advanced_frame, "gtceu:red_steel_buzz_saw_blade", '#gtceu:circuits/ev', if_ns("pink_slime"), "gtceu:double_pink_steel_plate", "gtceu:pink_steel_gear")
    if_machine(if_ns("animal_rancher"), pity_frame, "gtceu:lv_robot_arm", '#gtceu:circuits/lv', "minecraft:shears", "gtceu:pink_steel_plate", "minecraft:bucket")
    
    if_machine(if_ns("block_placer"), pity_frame, "gtceu:lv_robot_arm", '#gtceu:circuits/lv', "minecraft:dispenser", "gtceu:pink_steel_plate", "minecraft:piston")
    if_machine(if_ns("block_breaker"), pity_frame, "gtceu:lv_robot_arm", '#gtceu:circuits/lv', "gtceu:steel_drill_head", "gtceu:pink_steel_plate", "minecraft:piston")
    
    if_machine(if_ns("plant_fertilizer"), simple_frame, "gtceu:bio_chaff", '#gtceu:circuits/mv', 'gtceu:mv_electric_motor', "gtceu:double_pink_steel_plate", "gtceu:steel_gear")
    
    if_machine(if_ns("animal_feeder"), simple_frame, "minecraft:hay_block", '#gtceu:circuits/mv', 'gtceu:aluminium_crate', "gtceu:double_pink_steel_plate", "gtceu:alumiunium_gear")
    if_machine(if_ns("animal_baby_separator"), simple_frame, "gtceu:pearlic_steel_rod", '#gtceu:circuits/mv', 'gtceu:mv_conveyor_module', "gtceu:double_pink_steel_plate", "gtceu:alumiunium_gear")
    

    if_machine(if_ns("mob_duplicator"), advanced_frame, "gtceu:quantum_star", '#gtceu:circuits/ev', 'gtceu:hv_field_generator', "minecraft:spawner", "gtceu:energetic_pearlic_alloy_gear")
    
    if_machine(if_ns("mechanical_dirt"), 8, advanced_frame, "gtceu:hv_conveyor_module", '#gtceu:circuits/ev', 'gtceu:hv_field_generator', "#forge:heads", "gtceu:energetic_alloy_gear")
    

    enchantment_altar_ars(
        ['minecraft:enchanting_table', apotheosis("warden_tendril"), apotheosis("warden_tendril"), apotheosis("infused_hellshelf"), apotheosis("infused_seashelf"), 
            'gtceu:energetic_pearlic_alloy_frame', apotheosis("warden_tendril"), apotheosis("warden_tendril")], advanced_frame, if_ns("enchantment_factory"),
            50000, true
    )

    enchantment_altar_ars(
        ['minecraft:grindstone', apotheosis("warden_tendril"), apotheosis("warden_tendril"), apotheosis("beeshelf"), apotheosis("stoneshelf"), 
            'gtceu:energetic_pearlic_alloy_frame', apotheosis("warden_tendril"), apotheosis("warden_tendril")], advanced_frame, if_ns("enchantment_extractor"),
            25000, true
    )

    enchantment_altar_ars(
        ['minecraft:anvil', apotheosis("warden_tendril"), apotheosis("warden_tendril"), apotheosis("melonshelf"), apotheosis("deepshelf"), 
            'gtceu:energetic_pearlic_alloy_frame', apotheosis("warden_tendril"), apotheosis("warden_tendril")], advanced_frame, if_ns("enchantment_applicator"),
            10000, true
    )


    // @ts-ignore
    event.shaped(
        Item.of("industrialforegoing:machine_frame_pity", 1), // arg 1: output
        [
            "   ",
            "CAC", // arg 2: the shape (array of strings)
            "BDB"
        ],
        {
            D: "gtceu:aluminium_frame",
            C: "gtceu:rubber_plate",
            A: "gtceu:lv_machine_hull",
            B: "gtceu:gold_single_cable"
        }
    )


    // event, output, inputItems, inputFluids, eut, duration
    global.recipe_assembler( event,
        advanced_frame, 
        [
            simple_frame, '8x gtceu:energetic_pearlic_alloy_plate', '2x gtceu:fluxed_cobalt_electrum_double_wire'
        ],
        if_ns("pink_slime") + " 1000", 480, 10
    )

    // @ts-ignore
    event.shaped(
        Item.of("industrialforegoing:plant_gatherer", 1), // arg 1: output
        [
            "BEB",
            "DAC", // arg 2: the shape (array of strings)
            "FFF"
        ],
        {
            D: "gtceu:mv_electric_pump",
            C: "gtceu:mv_robot_arm",
            A: "industrialforegoing:machine_frame_pity",
            B: "#gtceu:circuits/mv",
            E: "gtceu:copper_single_cable",
            F: "gtceu:aluminium_plate"
            // G: 'minecraft:bucket'
        }
    )

    // @ts-ignore
    event.shaped(
        Item.of("industrialforegoing:plant_sower", 1), // arg 1: output
        [
            "BGB",
            "DAC", // arg 2: the shape (array of strings)
            "FFF"
        ],
        {
            D: "gtceu:mv_electric_pump",
            C: "gtceu:mv_robot_arm",
            A: "industrialforegoing:machine_frame_pity",
            B: "#gtceu:circuits/mv",
            // E: 'minecraft:bucket',
            F: "gtceu:aluminium_plate",
            G: "#forge:seeds"
        }
    )

    event.shaped(
        Item.of("industrialforegoing:machine_frame_simple", 1), // arg 1: output
        [
            "   ",
            "CAC", // arg 2: the shape (array of strings)
            "FBF"
        ],
        {
            C: "gtceu:pink_steel_plate",
            A: "gtceu:steel_plate",
            B: "gtceu:mv_machine_hull",
            F: "gtceu:electrum_single_cable",
        }
    )

    // event.recipes.gtceu.assembler('kubejs:framed_cube')
    //     .itemInputs(
    //         '4x gtceu:wood_screw',
    //         '2x gtceu:wood_plate',
    //         '4x minecraft:stick'
    //     )
    //     .itemOutputs('8x framedblocks:framed_cube')
    //     .duration(60)
    //     .EUt(2);
})
