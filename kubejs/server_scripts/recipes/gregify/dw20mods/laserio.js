ServerEvents.recipes((event) => {
    event.remove({ mod: "laserio" })
// event, output, inputItems, inputFluids, eut, duration

    global.recipe_circuit_assembler_with_id(event, 'nether_quartz', '2x laserio:logic_chip',
        ['gtceu:nether_quartz_plate','#gtceu:circuits/lv', '4x gtceu:cpu_chip', '4x gtceu:fine_gold_wire'],
        [], 28, 20
    )
    global.recipe_circuit_assembler_with_id(event, 'quartzite', '2x laserio:logic_chip',
        ['gtceu:quartzite_plate','#gtceu:circuits/lv', '4x gtceu:cpu_chip', '4x gtceu:fine_gold_wire'],
        [], 28, 20
    )
    global.recipe_circuit_assembler_with_id(event, 'certus_quartz', '2x laserio:logic_chip',
        ['gtceu:certus_quartz_plate','#gtceu:circuits/lv', '4x gtceu:cpu_chip', '4x gtceu:fine_gold_wire'],
        [], 28, 20
    )

    global.recipe_circuit_assembler_with_id(event, 'nether_quartz_energetic', '12x laserio:logic_chip',
        ['gtceu:nether_quartz_plate','#gtceu:circuits/lv', '4x gtceu:cpu_chip', '4x gtceu:fine_energetic_alloy_wire'],
        [], 120, 20
    )
    global.recipe_circuit_assembler_with_id(event, 'quartzite_energetic','12x laserio:logic_chip',
        ['gtceu:quartzite_plate','#gtceu:circuits/lv', '4x gtceu:cpu_chip', '4x gtceu:fine_energetic_alloy_wire'],
        [], 120, 20
    )
    global.recipe_circuit_assembler_with_id(event, 'certus_quartz_energetic', '12x laserio:logic_chip',
        ['gtceu:certus_quartz_plate','#gtceu:circuits/lv', '4x gtceu:cpu_chip', '4x gtceu:fine_energetic_alloy_wire'],
        [], 120, 20
    )

    global.recipe_assembler(event, '2x laserio:laser_connector', 
        ['2x gtceu:double_silicon_plate','2x gtceu:long_pearlic_steel_rod', '2x gtceu:electrum_single_cable', 'laserio:logic_chip'],
        [], 120, 20)

    global.recipe_assembler(event, 'laserio:laser_connector_advanced', 
        ['laserio:laser_connector','2x gtceu:long_energetic_alloy_rod', '2x gtceu:fluxed_electrum_single_wire', 'laserio:logic_chip'],
        [], 120, 20)
    
    global.recipe_assembler_with_id(event, 'energetic', '8x laserio:laser_connector', 
        ['2x gtceu:double_silicon_plate','gtceu:long_energetic_pearlic_alloy_rod', 'laserio:logic_chip', 'gtceu:electrum_single_cable'],
        [], 120, 20)

    global.recipe_assembler(event, 'laserio:laser_node', 
        ['2x laserio:laser_connector', 'gtceu:mv_sensor', '#gtceu:circuits/mv'],
        [], 120, 20)


    global.recipe_assembler(event, '2x laserio:card_item', 
        ['1x gtceu:pearlic_steel_plate','gtceu:electrum_large_item_pipe', '2x laserio:logic_chip'],
        [], 120, 20)

    global.recipe_assembler(event, '2x laserio:card_fluid', 
        ['1x gtceu:energetic_alloy_plate','gtceu:polytetrafluoroethylene_large_fluid_pipe', '2x laserio:logic_chip'],
        [], 120, 20)

    global.recipe_assembler(event, '8x laserio:card_redstone', 
        ['1x gtceu:redstone_plate','minecraft:repeater', '2x laserio:logic_chip'],
        [], 120, 20)

    global.recipe_assembler(event, '4x laserio:filter_basic', 
        ['1x gtceu:item_filter','gtceu:small_aluminium_gear', '1x laserio:logic_chip'],
        [], 120, 20)

    global.recipe_assembler(event, '4x laserio:filter_count', 
        ['4x laserio:filter_basic','gtceu:mv_robot_arm', '1x laserio:logic_chip'],
        [], 120, 20)

    global.recipe_assembler(event, '4x laserio:filter_tag', 
        ['4x laserio:filter_basic','gtceu:item_tag_filter', '1x laserio:logic_chip'],
        [], 120, 20)

    global.recipe_assembler(event, '4x laserio:filter_mod', 
        ['4x laserio:filter_basic','minecraft:name_tag', '1x laserio:logic_chip'],
        [], 120, 20)

    global.recipe_assembler(event, '4x laserio:filter_nbt', 
        ['4x laserio:filter_basic','gtceu:zinc_plate', '1x laserio:logic_chip'],
        [], 120, 20)

    global.recipe_assembler(event, '2x laserio:overclocker_card', 
        ['gtceu:hv_conveyor_module','16x gtceu:fine_energetic_alloy_wire', '4x laserio:logic_chip', '2x #gtceu:circuits/mv'],
        [], 480, 20)

    global.recipe_assembler(event, '2x laserio:overclocker_node', 
        ['2x gtceu:ev_conveyor_module','16x gtceu:fine_energetic_pearlic_alloy_wire', '4x laserio:logic_chip', '2x #gtceu:circuits/ev'],
        [], 1920, 20)

    event.shaped(
        Item.of("laserio:laser_wrench", 1), // arg 1: output
        [
            "CDC",
            "CAC", // arg 2: the shape (array of strings)
            " C "
        ],
        {
            A: "#gtceu:tools/crafting_wrenches",
            C: "gtceu:steel_plate",
            D: "laserio:logic_chip"
        }
    )

    event.shaped(
        Item.of("laserio:card_holder", 1), // arg 1: output
        [
            " D ",
            "CAC", // arg 2: the shape (array of strings)
            "CCC"
        ],
        {
            A: "minecraft:chest",
            C: "gtceu:steel_plate",
            D: "laserio:logic_chip"
        }
    )

    event.shaped(
        Item.of("laserio:card_cloner", 1), // arg 1: output
        [
            " D ",
            "CAC", // arg 2: the shape (array of strings)
            "CCC"
        ],
        {
            A: "minecraft:chest",
            C: "gtceu:aluminium_plate",
            D: "laserio:logic_chip"
        }
    )


})
