
ServerEvents.recipes(event => {

    event.shaped(
        Item.of('ae2:controller', 1), 
        [
            'CDC',
            'DAD', 
            'CDC'
        ],
        {
            A: 'gtceu:ev_machine_hull',
            C: 'gtceu:titanium_plate',
            D: 'ae2:engineering_processor'
        }
    )

    event.shaped(
        Item.of('ae2:drive', 1), 
        [
            'CDC',
            'BAB', 
            'CDC'
        ],
        {
            A: 'gtceu:titanium_frame',
            B: 'ae2:engineering_processor',
            C: 'gtceu:titanium_plate',
            D: 'ae2:fluix_glass_cable'
        }
    )

    event.recipes.gtceu
        .wiremill('kubejs:quartz_fiber') 
        .itemInputs('gtceu:nether_quartz_dust')
        .itemOutputs('1x ae2:quartz_fiber')
        .duration(20)                                 
        .EUt(32)

    event.recipes.gtceu
        .wiremill('kubejs:cable_anchor') 
        .itemInputs('gtceu:iron_plate')
        .itemOutputs('8x ae2:cable_anchor')
        .duration(20)                                 
        .EUt(32)

    event.recipes.gtceu
        .assembler('kubejs:fluix_cable') 
        .itemInputs('ae2:quartz_fiber', '2x ae2:fluix_crystal')
        .itemOutputs('2x ae2:fluix_glass_cable')
        .duration(100)                                 
        .EUt(480)

    event.recipes.gtceu
        .assembler('kubejs:fluix_covered_cable') 
        .itemInputs('ae2:fluix_glass_cable')
        .inputFluids('gtceu:rubber 288')
        .itemOutputs('1x ae2:fluix_covered_cable')
        .duration(50)                                 
        .EUt(480)

    event.recipes.gtceu
        .assembler('kubejs:fluix_covered_cable_scr') 
        .itemInputs('ae2:fluix_glass_cable')
        .inputFluids('gtceu:silicone_rubber 72')
        .itemOutputs('1x ae2:fluix_covered_cable')
        .duration(50)                                 
        .EUt(480)

    event.recipes.gtceu
        .assembler('kubejs:fluix_covered_cable_sbr') 
        .itemInputs('ae2:fluix_glass_cable')
        .inputFluids('gtceu:styrene_butadiene_rubber 36')
        .itemOutputs('1x ae2:fluix_covered_cable')
        .duration(50)                                 
        .EUt(480)

    //

    event.recipes.gtceu
        .assembler('kubejs:fluix_covered_dense_cable') 
        .itemInputs('4x ae2:fluix_covered_cable')
        .inputFluids('gtceu:rubber 576')
        .itemOutputs('1x ae2:fluix_covered_dense_cable')
        .duration(50)                                 
        .EUt(480)

    event.recipes.gtceu
        .assembler('kubejs:fluix_covered_dense_cable_scr') 
        .itemInputs('4x ae2:fluix_covered_cable')
        .inputFluids('gtceu:silicone_rubber 144')
        .itemOutputs('1x ae2:fluix_covered_dense_cable')
        .duration(50)                                 
        .EUt(480)

    event.recipes.gtceu
        .assembler('kubejs:fluix_covered_dense_cable_sbr') 
        .itemInputs('4x ae2:fluix_covered_cable')
        .inputFluids('gtceu:styrene_butadiene_rubber 72')
        .itemOutputs('1x ae2:fluix_covered_dense_cable')
        .duration(50)                                 
        .EUt(480)

    event.recipes.gtceu
        .assembler('kubejs:fluix_smart_cable') 
        .itemInputs('8x ae2:fluix_covered_cable', '#gtceu:circuits/mv')
        .itemOutputs('8x ae2:fluix_smart_cable')
        .duration(200)                                 
        .EUt(480)

    event.recipes.gtceu
        .assembler('kubejs:fluix_smart_dense_cable') 
        .itemInputs('3x ae2:fluix_covered_dense_cable', '2x #gtceu:circuits/hv')
        .itemOutputs('3x ae2:fluix_smart_dense_cable')
        .duration(200)                                 
        .EUt(480)

    event.shaped(
        Item.of('ae2:interface', 1), 
        [
            ' D ',
            'BAC', 
            ' E '
        ],
        {
            A: 'gtceu:titanium_frame',
            B: 'ae2:formation_core',
            C: 'ae2:annihilation_core',
            D: 'gtceu:ev_electric_pump',
            E: 'gtceu:ev_electric_piston'
        }
    )

    event.shaped(
        Item.of('ae2:me_p2p_tunnel', 2), 
        [
            ' A ',
            'ABA', 
            'CCC'
        ],
        {
            A: 'gtceu:titanium_plate',
            B: 'ae2:engineering_processor',
            C: 'ae2:fluix_crystal',
        }
    )


    event.recipes.gtceu
        .assembler('kubejs:storage_bus') 
        .itemInputs('ae2:interface', 'gtceu:ev_conveyor_module', 'minecraft:chest')
        .itemOutputs('ae2:storage_bus')
        .duration(100)                                 
        .EUt(30)

    event.recipes.gtceu
        .alloy_smelter('kubejs:quartz_glass') 
        .itemInputs('2x gtceu:glass_dust', '2x gtceu:certus_quartz_dust')
        .itemOutputs('ae2:quartz_glass')
        .duration(100)                                 
        .EUt(30)

    event.shaped(
        Item.of('ae2:energy_acceptor', 1), 
        [
            ' B ',
            ' A ', 
            ' E '
        ],
        {
            A: 'gtceu:ev_machine_hull',
            B: 'gtceu:ev_voltage_coil',
            E: 'ae2:fluix_glass_cable'
        }
    )

    event.shaped(
        Item.of('ae2:import_bus', 1), 
        [
            ' B ',
            ' A ', 
            ' E '
        ],
        {
            A: 'ae2:annihilation_core',
            B: 'gtceu:ev_electric_piston',
            E: 'gtceu:ev_electric_pump'
        }
    )

    event.shaped(
        Item.of('ae2:export_bus', 1), 
        [
            ' B ',
            ' A ', 
            ' E '
        ],
        {
            A: 'ae2:formation_core',
            B: 'gtceu:ev_electric_piston',
            E: 'gtceu:ev_electric_pump'
        }
    )

    event.shapeless(
        Item.of('ae2:cable_interface', 1),
        [
            'ae2:interface',
            'ae2:cable_anchor'
        ]
    )

    event.shapeless(
        Item.of('ae2:toggle_bus', 1),
        [
            'ae2:cable_anchor',
            'ae2:level_emitter',
            'ae2:calculation_processor'
        ]
    )
    event.shapeless(
        Item.of('ae2:inverted_toggle_bus', 1),
        [
            'ae2:toggle_bus',
        ]
    )

    event.shapeless(
        Item.of('ae2:level_emitter', 1),
        [
            'minecraft:redstone_torch',
            'ae2:calculation_processor'
        ]
    )

    event.shapeless(
        Item.of('ae2:energy_level_emitter', 1),
        [
            'ae2:fluix_crystal',
            'ae2:level_emitter'
        ]
    )

    event.shapeless(
        Item.of('ae2:certus_quartz_cutting_knife', 1),
        [
            'gtceu:certus_quartz_gem',
            'minecraft:stick',
        ]
    )

    event.shapeless(
        Item.of('ae2:nether_quartz_cutting_knife', 1),
        [
            'minecraft:quartz',
            'minecraft:stick',
        ]
    )

    const colors = ['white', 'light_gray', 'gray', 'black', 'brown', 'red', 'orange', 'yellow', 'lime', 'green', 'cyan', 'light_blue', 'blue', 'purple', 'magenta', 'pink']

    colors.forEach(color =>
        {
        event.recipes.gtceu
            .chemical_bath('kubejs:cable_' + color) 
            .itemInputs('ae2:fluix_glass_cable')
            .inputFluids('gtceu:' + color + '_dye 18')
            .itemOutputs('ae2:' + color + '_glass_cable')
            .duration(10)                                 
            .EUt(8)

        event.recipes.gtceu
            .chemical_bath('kubejs:cable_covered' + color) 
            .itemInputs('ae2:fluix_covered_cable')
            .inputFluids('gtceu:' + color + '_dye 18')
            .itemOutputs('ae2:' + color + '_covered_cable')
            .duration(10)                                 
            .EUt(8)

        event.recipes.gtceu
            .chemical_bath('kubejs:cable_smart' + color) 
            .itemInputs('ae2:fluix_smart_cable')
            .inputFluids('gtceu:' + color + '_dye 18')
            .itemOutputs('ae2:' + color + '_smart_cable')
            .duration(10)                                 
            .EUt(8)

        event.recipes.gtceu
            .chemical_bath('kubejs:cable_covered_dense' + color) 
            .itemInputs('ae2:fluix_covered_dense_cable')
            .inputFluids('gtceu:' + color + '_dye 18')
            .itemOutputs('ae2:' + color + '_covered_dense_cable')
            .duration(10)                                 
            .EUt(8)

        event.recipes.gtceu
            .chemical_bath('kubejs:cable_smart_dense' + color) 
            .itemInputs('ae2:fluix_smart_dense_cable')
            .inputFluids('gtceu:' + color + '_dye 18')
            .itemOutputs('ae2:' + color + '_smart_dense_cable')
            .duration(10)                                 
            .EUt(8)
        }

        
    )

});