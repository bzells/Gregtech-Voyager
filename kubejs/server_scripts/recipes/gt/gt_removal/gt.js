// @ts-nocheck
ServerEvents.recipes((event) => {
    event.remove({ output: "gtceu:diode" })
    event.remove({ type: "minecraft:crafting_shaped", output: "gtceu:lv_energy_input_hatch" })
    event.remove({ type: "minecraft:crafting_shaped", output: "gtceu:mv_energy_input_hatch" })
    event.remove({ type: "minecraft:crafting_shaped", output: "gtceu:mv_energy_output_hatch" })
    event.remove({ type: "minecraft:crafting_shaped", output: "gtceu:hv_energy_input_hatch" })
    event.remove({ type: "minecraft:crafting_shaped", output: "gtceu:hv_energy_output_hatch" })
    event.remove({ output: "gtceu:phenolic_circuit_board" })
    event.remove({ output: "gtceu:cupronickel_coil_block" })
    event.remove({ output: "gtceu:kanthal_coil_block" })
    event.remove({ output: "gtceu:nichrome_coil_block" })
    event.remove({ output: "gtceu:rtm_alloy_coil_block" })
    event.remove({ output: "gtceu:transistor" })
    event.remove({ type: "gtceu:assembler", output: "gtceu:diode" })
    event.remove({ output: "gtceu:micro_processor_computer" })
    event.remove({ output: "gtceu:alloy_blast_smelter" })
    event.remove({ output: "gtceu:graphene_dust" })

    event.remove({ id: /gtceu:.*mining_hammer/ }) // Going with this one since it works. IDFK. Other option is using ==> /.*mining_hammer.*/ <== but has the exact same outcome, even though it *really* shouldn't

    event.remove({ type: "minecraft:crafting_shaped", output: "gtceu:phenolic_printed_circuit_board" })
    event.remove({ type: "gtceu:rock_breaker", output: "minecraft:obsidian" })

    event.remove({ id: "gtceu:chemical_reactor/nitrobenzene" })
    event.remove({ id: "gtceu:large_chemical_reactor/nitrobenzene" })

    event.remove({ id: "gtceu:assembler/flower_pot" })
    // event.remove({type: 'minecraft:crafting_shaped' ,output: ['gtceu:mv_electric_motor', 'gtceu:mv_electric_pump', 'gtceu:mv_conveyor_module', 'gtceu_mv_electric_piston', 'gtceu:mv_robot_arm']})

    event.replaceInput(
        { input: "gtceu:annealed_copper_bolt" }, // Arg 1: the filter
        "gtceu:annealed_copper_bolt", // Arg 2: the item to replace
        "gtceu:fluxed_electrum_bolt" // Arg 3: the item to replace it with
        // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
    )

    event.replaceInput(
        { output: "gtceu:iv_parallel_hatch" }, // Arg 1: the filter
        "gtceu:platinum_double_cable", // Arg 2: the item to replace
        "gtceu:titanite_octal_cable" // Arg 3: the item to replace it with
        // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
    )

    // event.replaceInput(
    //   { output: 'gtceu:power_substation' }, // Arg 1: the filter
    //   '#gtceu:circuits/luv',            // Arg 2: the item to replace
    //   '#gtceu:circuits/zpm'         // Arg 3: the item to replace it with
    //   // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
    // )

    event.replaceInput(
        { output: "gtceu:assembly_line_casing" }, // Arg 1: the filter
        "#gtceu:circuits/ev", // Arg 2: the item to replace
        "#gtceu:circuits/zpm" // Arg 3: the item to replace it with
        // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
    )

    event.replaceInput(
        { output: "gtceu:assembly_line_casing" }, // Arg 1: the filter
        "gtceu:hpic_chip", // Arg 2: the item to replace
        "#gtceu:circuits/luv" // Arg 3: the item to replace it with
        // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
    )

    event.replaceInput(
        { output: "gtceu:assembly_line_casing" }, // Arg 1: the filter
        "gtceu:tungsten_steel_frame", // Arg 2: the item to replace
        "gtceu:titanite_frame" // Arg 3: the item to replace it with
        // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
    )

    event.replaceInput(
        { output: "gtceu:assembly_line_unit" }, // Arg 1: the filter
        "gtceu:tungsten_steel_frame", // Arg 2: the item to replace
        "gtceu:titanite_frame" // Arg 3: the item to replace it with
        // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
    )

    event.replaceInput(
        { output: "gtceu:assembly_line_unit" }, // Arg 1: the filter
        "gtceu:steel_plate", // Arg 2: the item to replace
        "gtceu:double_titanite_plate" // Arg 3: the item to replace it with
        // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
    )
})
