
ServerEvents.recipes(event => {

    event.remove({mod: 'ae2'})


    function make_base_circuit(name, mat, foil_mat)
    {
        event.recipes.gtceu
            .forming_press('kubejs:' + name + 'circuit')   // recipe ID
            .itemInputs('gtceu:' + mat + '_plate', 'gtceu:plastic_printed_circuit_board', '8x gtceu:'+ foil_mat + '_foil')
            .itemOutputs('ae2:' + name)
            .duration(150)                                 // in ticks
            .EUt(480) 

        event.recipes.gtceu
            .forming_press('kubejs:' + name + 'circuit_epoxy')   // recipe ID
            .itemInputs('gtceu:' + mat + '_plate', 'gtceu:epoxy_printed_circuit_board', '4x gtceu:'+ foil_mat + '_foil')
            .itemOutputs('2x ae2:' + name)
            .duration(150)                                 // in ticks
            .EUt(480) 

        event.recipes.gtceu
            .forming_press('kubejs:' + name + 'circuit_fiber')   // recipe ID
            .itemInputs('gtceu:' + mat + '_plate', 'gtceu:fiber_reinforced_printed_circuit_board', '2x gtceu:'+ foil_mat + '_foil')
            .itemOutputs('4x ae2:' + name)
            .duration(150)                                 // in ticks
            .EUt(480)
            
        event.recipes.gtceu
            .forming_press('kubejs:' + name + 'circuit_multifiber')   // recipe ID
            .itemInputs('gtceu:' + mat + '_plate', 'gtceu:multilayer_fiber_reinforced_printed_circuit_board', '1x gtceu:'+ foil_mat + '_foil')
            .itemOutputs('8x ae2:' + name)
            .duration(150)                                 // in ticks
            .EUt(4096)
    }

    function make_processor(name, circuit_tier, bolt_mat)
    {
        event.recipes.gtceu.circuit_assembler("kubejs:" + name)
            .itemInputs("2x ae2:printed_" + name, "1x #gtceu:circuits/" + circuit_tier, "4x gtceu:ram_chip", '4x gtceu:' + bolt_mat + '_bolt', 'ae2:printed_silicon')
            .itemOutputs("2x ae2:" + name)
            .inputFluids("#forge:soldering_alloy 144")
            .duration(20*10) 
            .EUt(480)
            .cleanroom(CleanroomType.CLEANROOM)
    }

    event.recipes.gtceu
            .forming_press('kubejs:printed_silicon')   
            .itemInputs('gtceu:silicon_plate' , '16x gtceu:copper_foil', 'gtceu:plastic_printed_circuit_board')
            .itemOutputs('ae2:printed_silicon')
            .duration(50)                              
            .EUt(480) 

    event.recipes.gtceu
            .forming_press('kubejs:printed_silicon_epoxy')  
            .itemInputs('gtceu:silicon_plate' , '8x gtceu:copper_foil', 'gtceu:epoxy_printed_circuit_board')
            .itemOutputs('2x ae2:printed_silicon')
            .duration(50)                              
            .EUt(480) 

    event.recipes.gtceu
            .forming_press('kubejs:printed_silicon_fiber') 
            .itemInputs('gtceu:silicon_plate' , '4x gtceu:copper_foil', 'gtceu:fiber_reinforced_printed_circuit_board')
            .itemOutputs('4x ae2:printed_silicon')
            .duration(50)                                 
            .EUt(480)

    event.recipes.gtceu
            .forming_press('kubejs:printed_silicon_multifiber')  
            .itemInputs('gtceu:silicon_plate' , '2x gtceu:copper_foil', 'gtceu:multilayer_fiber_reinforced_printed_circuit_board')
            .itemOutputs('8x ae2:printed_silicon')
            .duration(50)                                 
            .EUt(4096)

    event.recipes.gtceu
        .autoclave('kubejs:fluix')  
        .itemInputs('ae2:fluix_dust')
        .inputFluids('gtceu:distilled_water 1000')
        .itemOutputs('ae2:fluix_crystal')
        .duration(20 * 25)                                 
        .EUt(480)

    event.recipes.gtceu
        .autoclave('kubejs:fluix_merc')  
        .itemInputs('ae2:fluix_dust')
        .inputFluids('gtceu:mercury 250')
        .itemOutputs('1x ae2:fluix_crystal')
        .duration(20 * 5)                                 
        .EUt(400)

    event.recipes.gtceu
        .macerator('kubejs:fluix_crush')  
        .itemInputs('ae2:fluix_crystal')
        .itemOutputs('1x ae2:fluix_dust')
        .duration(20)                                 
        .EUt(8)

    make_base_circuit('printed_calculation_processor', 'certus_quartz', 'fluxed_electrum')
    make_base_circuit('printed_logic_processor', 'cobalt_brass', 'fluxed_cobalt_electrum')
    make_base_circuit('printed_engineering_processor', 'blue_steel', 'refined_fluxed_electrum')

    make_processor('calculation_processor', 'mv', 'fluxed_electrum')
    make_processor('logic_processor', 'hv', 'fluxed_cobalt_electrum')
    make_processor('engineering_processor', 'ev', 'refined_fluxed_electrum')

    event.shaped(
        Item.of('ae2:formation_core', 2), 
        [
            ' D ',
            'BAC',
            ' D '
        ],
        {
            A: 'ae2:logic_processor',
            B: 'gtceu:glowstone_plate',  
            C: 'ae2:fluix_dust',
            D: 'gtceu:certus_quartz_plate'
        }
    )

    event.shaped(
        Item.of('ae2:annihilation_core', 2), 
        [
            ' D ',
            'BAC', 
            ' D '
        ],
        {
            A: 'ae2:logic_processor',
            B: 'gtceu:redstone_plate', 
            C: 'ae2:fluix_dust',
            D: 'gtceu:nether_quartz_plate'
        }
    )

    event.shaped(
        Item.of('ae2:item_cell_housing', 1), 
        [
            'CDC',
            'DAD', 
            '   '
        ],
        {
            A: 'ae2:fluix_crystal',
            C: 'ae2:quartz_glass',
            D: 'gtceu:titanium_plate'
        }
    )

    event.shaped(
        Item.of('ae2:fluid_cell_housing', 1), 
        [
            'CDC',
            'DAD', 
            '   '
        ],
        {
            A: 'ae2:fluix_crystal',
            C: 'ae2:quartz_glass',
            D: 'gtceu:polyvinyl_chloride_plate'
        }
    )

    event.shaped(
        Item.of('ae2:basic_card', 1), 
        [
            'CD ',
            'BAD', 
            'CD '
        ],
        {
            A: 'ae2:calculation_processor',
            B: 'gtceu:fine_red_alloy_wire',
            C: 'gtceu:fine_gold_wire',
            D: 'gtceu:aluminium_plate'
        }
    )

    event.shapeless(
        Item.of('ae2:redstone_card', 1),
        [
            'ae2:basic_card',
            'gtceu:redstone_plate'
        ]
    )

    event.shapeless(
        Item.of('ae2:capacity_card', 1),
        [
            'ae2:basic_card',
            'gtceu:ram_chip'
        ]
    )

    event.shapeless(
        Item.of('ae2:void_card', 1),
        [
            'ae2:basic_card',
            'gtceu:obsidian_plate',
            'ae2:calculation_processor'
        ]
    )

    event.shapeless(
        Item.of('ae2:fuzzy_card', 1),
        [
            'ae2:advanced_card',
            'gtceu:lv_robot_arm',
        ]
    )

    event.shapeless(
        Item.of('ae2:inverter_card', 1),
        [
            'ae2:advanced_card',
            'minecraft:redstone_torch',
        ]
    )

    event.recipes.gtceu
        .assembler('kubejs:acceleration_card')  
        .itemInputs('2x ae2:advanced_card', 'ae2:calculation_processor', 'ae2:fluix_crystal')
        .itemOutputs('2x ae2:speed_card')
        .duration(40)                                 
        .EUt(1925)

    event.recipes.gtceu
        .assembler('kubejs:crafting_card')  
        .itemInputs('2x ae2:advanced_card', '2x ae2:engineering_processor', 'ae2:fluix_crystal', '4x gtceu:ram_chip')
        .itemOutputs('ae2:crafting_card')
        .duration(200)                                 
        .EUt(8192)

    event.recipes.gtceu
        .assembler('kubejs:equal_distribution_card')  
        .itemInputs('1x ae2:advanced_card', '1x ae2:logic_processor')
        .itemOutputs('ae2:equal_distribution_card')
        .duration(40)                                 
        .EUt(120)

    event.recipes.gtceu
        .assembler('kubejs:energy_card')  
        .itemInputs('1x ae2:advanced_card', '1x ae2:dense_energy_cell')
        .itemOutputs('ae2:energy_card')
        .duration(40)                                 
        .EUt(120)

    event.recipes.gtceu
        .assembler('kubejs:energy_cell')  
        .itemInputs('1x ae2:calculation_processor', '8x ae2:fluix_dust', 'gtceu:ev_machine_casing')
        .itemOutputs('ae2:energy_cell')
        .duration(40)                                 
        .EUt(1920)

    event.recipes.gtceu
        .assembler('kubejs:dense_energy_cell')  
        .itemInputs('1x ae2:engineering_processor', '8x ae2:energy_cell', 'gtceu:iv_machine_casing')
        .itemOutputs('ae2:dense_energy_cell')
        .duration(40)                                 
        .EUt(1920)

    event.shaped(
        Item.of('ae2:advanced_card', 1), 
        [
            'CD ',
            'BAD', 
            'CD '
        ],
        {
            A: 'ae2:calculation_processor',
            B: 'gtceu:fine_red_alloy_wire',
            C: 'gtceu:fine_fluxed_cobalt_electrum_wire',
            D: 'gtceu:aluminium_plate'
        }
    )


    event.recipes.gtceu
        .assembler('kubejs:1k_component')  
        .itemInputs('ae2:calculation_processor', '8x gtceu:fine_tin_silver_alloy_wire', '3x ae2:quartz_glass', '2x #gtceu:circuits/lv')
        .itemOutputs('1x ae2:cell_component_1k')
        .duration(100)                                 
        .EUt(30)

    event.recipes.gtceu
        .assembler('kubejs:4k_component')  
        .itemInputs('ae2:logic_processor', '8x gtceu:fine_fluxed_electrum_wire', '3x ae2:cell_component_1k', '2x #gtceu:circuits/mv')
        .itemOutputs('1x ae2:cell_component_4k')
        .duration(300)                                 
        .EUt(120)

    event.recipes.gtceu
        .assembler('kubejs:16k_component')  
        .itemInputs('ae2:engineering_processor', '8x gtceu:fine_fluxed_cobalt_electrum_wire', '3x ae2:cell_component_4k', '2x #gtceu:circuits/hv')
        .itemOutputs('1x ae2:cell_component_16k')
        .duration(300)                                 
        .EUt(480)

    event.recipes.gtceu
        .assembler('kubejs:64k_component')  
        .itemInputs('ae2:engineering_processor', '8x gtceu:fine_refined_fluxed_electrum_wire', '3x ae2:cell_component_16k', '2x #gtceu:circuits/ev')
        .itemOutputs('1x ae2:cell_component_64k')
        .duration(300)                                 
        .EUt(480)

    event.recipes.gtceu
        .assembler('kubejs:256k_component')  
        .itemInputs('ae2:engineering_processor', '8x gtceu:fine_refined_fluxed_electrum_wire', '3x ae2:cell_component_64k', '2x #gtceu:circuits/iv')
        .itemOutputs('1x ae2:cell_component_256k')
        .duration(800)                                 
        .EUt(8000)

    event.recipes.gtceu
        .canner('kubejs:1k_cell')  
        .itemInputs('ae2:cell_component_1k', 'ae2:item_cell_housing')
        .itemOutputs('1x ae2:item_storage_cell_1k')
        .duration(100)                                 
        .EUt(120)

    event.recipes.gtceu
        .canner('kubejs:4k_cell')  
        .itemInputs('ae2:cell_component_4k', 'ae2:item_cell_housing')
        .itemOutputs('1x ae2:item_storage_cell_4k')
        .duration(100)                                 
        .EUt(120)

    event.recipes.gtceu
        .canner('kubejs:16k_cell')  
        .itemInputs('ae2:cell_component_16k', 'ae2:item_cell_housing')
        .itemOutputs('1x ae2:item_storage_cell_16k')
        .duration(100)                                 
        .EUt(120)

    event.recipes.gtceu
        .canner('kubejs:64k_cell')  
        .itemInputs('ae2:cell_component_64k', 'ae2:item_cell_housing')
        .itemOutputs('1x ae2:item_storage_cell_64k')
        .duration(100)                                 
        .EUt(120)

    event.recipes.gtceu
        .canner('kubejs:256k_cell')  
        .itemInputs('ae2:cell_component_256k', 'ae2:item_cell_housing')
        .itemOutputs('1x ae2:item_storage_cell_256k')
        .duration(100)                                 
        .EUt(120)

     event.recipes.gtceu
        .canner('kubejs:1k_cell_fluid')  
        .itemInputs('ae2:cell_component_1k', 'ae2:fluid_cell_housing')
        .itemOutputs('1x ae2:fluid_storage_cell_1k')
        .duration(100)                                 
        .EUt(120)

    event.recipes.gtceu
        .canner('kubejs:4k_cell_fluid')  
        .itemInputs('ae2:cell_component_4k', 'ae2:fluid_cell_housing')
        .itemOutputs('1x ae2:fluid_storage_cell_4k')
        .duration(100)                                 
        .EUt(120)

    event.recipes.gtceu
        .canner('kubejs:16k_cell_fluid')  
        .itemInputs('ae2:cell_component_16k', 'ae2:fluid_cell_housing')
        .itemOutputs('1x ae2:fluid_storage_cell_16k')
        .duration(100)                                 
        .EUt(120)

    event.recipes.gtceu
        .canner('kubejs:64k_cell_fluid')  
        .itemInputs('ae2:cell_component_64k', 'ae2:fluid_cell_housing')
        .itemOutputs('1x ae2:fluid_storage_cell_64k')
        .duration(100)                                 
        .EUt(120)

    event.recipes.gtceu
        .canner('kubejs:256k_cell_fluid')  
        .itemInputs('ae2:cell_component_256k', 'ae2:fluid_cell_housing')
        .itemOutputs('1x ae2:fluid_storage_cell_256k')
        .duration(100)                                 
        .EUt(120)

    event.shaped(
        Item.of('ae2:memory_card', 1), 
        [
            ' B ',
            'BAB', 
            'EEE'
        ],
        {
            A: 'ae2:logic_processor',
            B: 'gtceu:iron_plate',
            E: 'gtceu:fine_gold_wire'
        }
    )


});