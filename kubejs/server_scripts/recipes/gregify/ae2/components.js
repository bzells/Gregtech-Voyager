
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


});