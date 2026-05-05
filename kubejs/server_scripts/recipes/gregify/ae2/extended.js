
ServerEvents.recipes(event => {

    event.remove({output: 'expatternprovider:ex_pattern_provider'})
    event.remove({output: 'expatternprovider:ex_interface'})
    event.remove({output: 'expatternprovider:ex_drive'})
    event.remove({output: 'expatternprovider:circuit_cutter'})

    event.recipes.gtceu
        .assembler('kubejs:ex_interface')
        .itemInputs(
            'ae2:interface',
            '4x gtceu:iridium_plate',
            'gtceu:iv_electric_pump',
            'gtceu:iv_electric_piston',
            '2x #gtceu:circuits/iv'
        )
        .itemOutputs('expatternprovider:ex_interface')
        .duration(200)
        .EUt(7680)

    event.recipes.gtceu
        .assembler('kubejs:ex_pattern_provider')
        .itemInputs(
            'ae2:pattern_provider',
            '4x gtceu:iridium_plate',
            'gtceu:iv_conveyor_module',
            'gtceu:iv_robot_arm',
            '2x #gtceu:circuits/iv'
        )
        .itemOutputs('expatternprovider:ex_pattern_provider')
        .duration(200)
        .EUt(7680)

    event.recipes.gtceu
        .assembler('kubejs:ex_drive')
        .itemInputs(
            'ae2:drive',
            'gtceu:iridium_frame',
            '4x gtceu:osmium_plate',
            '2x #gtceu:circuits/iv'
        )
        .itemOutputs('expatternprovider:ex_drive')
        .duration(200)
        .EUt(7680)

    event.recipes.gtceu
        .assembler('kubejs:circuit_cutter')
        .itemInputs(
            'gtceu:iv_machine_hull',
            '4x gtceu:platinum_plate',
            'ae2:engineering_processor',
            'gtceu:iv_robot_arm',
            'gtceu:iv_sensor',
            '2x #gtceu:circuits/iv'
        )
        .itemOutputs('expatternprovider:circuit_cutter')
        .duration(200)
        .EUt(7680)

});
