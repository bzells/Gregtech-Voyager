ServerEvents.recipes(event => {

    event.remove({output: 'paraglider:paraglider'})

    event.shaped(
                Item.of('paraglider:paraglider', 1), // arg 1: output
                [
                    ' C ',
                    'CDC', // arg 2: the shape (array of strings)
                    'DAD'
                ],
                {
                    A: 'gtceu:iron_rod',
                    C: 'gtceu:treated_wood_rod',
                    D: 'minecraft:leather'
                }
    );

    event.remove({output: 'framedblocks:framed_cube'})

    event.recipes.gtceu.assembler('kubejs:framed_cube')
        .itemInputs(
            '4x gtceu:wood_screw',
            '2x gtceu:wood_plate',
            '4x minecraft:stick'
        )
        .itemOutputs('8x framedblocks:framed_cube')
        .duration(60)
        .EUt(2);

});