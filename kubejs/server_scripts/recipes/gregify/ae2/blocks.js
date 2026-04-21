
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
            C: 'ae2:annihilation_core ',
            D: 'gtceu:ev_electric_pump',
            E: 'gtceu:ev_electric_piston'
        }
    )

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

    event.shapeless(
        Item.of('ae2:cable_interface', 1),
        [
            'ae2:interface',
            'ae2:cable_anchor'
        ]
    )

});