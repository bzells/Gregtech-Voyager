ServerEvents.recipes(event => {

    event.remove({mod: 'industrialforegoing'})

    event.shaped(
                Item.of('industrialforegoing:machine_frame_pity', 1), // arg 1: output
                [
                    '   ',
                    'CAC', // arg 2: the shape (array of strings)
                    'BDB'
                ],
                {
                    D: 'gtceu:bronze_frame',
                    C: 'gtceu:rubber_plate',
                    A: 'gtceu:lv_machine_hull',
                    B: 'gtceu:copper_single_cable'
                }
    );

    event.shaped(
                Item.of('industrialforegoing:plant_gatherer', 1), // arg 1: output
                [
                    'BEB',
                    'DAC', // arg 2: the shape (array of strings)
                    'FFF'
                ],
                {
                    D: 'gtceu:lv_electric_pump',
                    C: 'gtceu:lv_robot_arm',
                    A: 'industrialforegoing:machine_frame_pity',
                    B: '#gtceu:circuits/lv',
                    E: 'kubejs:farmer_helper',
                    F: 'gtceu:steel_plate',
                    // G: 'minecraft:bucket'
                }
    );

    event.shaped(
                Item.of('industrialforegoing:plant_sower', 1), // arg 1: output
                [
                    'BGB',
                    'DAC', // arg 2: the shape (array of strings)
                    'FFF'
                ],
                {
                    D: 'gtceu:lv_electric_pump',
                    C: 'gtceu:lv_robot_arm',
                    A: 'industrialforegoing:machine_frame_pity',
                    B: '#gtceu:circuits/lv',
                    // E: 'minecraft:bucket',
                    F: 'gtceu:bronze_plate',
                    G: '#forge:seeds'
                }
    );

    // event.recipes.gtceu.assembler('kubejs:framed_cube')
    //     .itemInputs(
    //         '4x gtceu:wood_screw',
    //         '2x gtceu:wood_plate',
    //         '4x minecraft:stick'
    //     )
    //     .itemOutputs('8x framedblocks:framed_cube')
    //     .duration(60)
    //     .EUt(2);

});