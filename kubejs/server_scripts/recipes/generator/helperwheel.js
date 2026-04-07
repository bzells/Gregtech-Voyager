

ServerEvents.recipes(event => {
    event.recipes.gtceu
        .helper_wheel('kubejs:track_runner_helper')   // recipe ID
        .itemInputs([{item: 'minecraft:cookie'}])
        .inputFluids("minecraft:water 100")
        .notConsumable('kubejs:track_runner_helper')
        .duration(500)                                 // in ticks
        .EUt(-32)                                // EU produced total]


    event.shaped(
        Item.of('gtceu:lv_helper_wheel', 1), // arg 1: output
        [
            '   ',
            ' A ', // arg 2: the shape (array of strings)
            '   '
        ],
        {
            A: 'gtceu:clay_dust',
            B: 'gtceu:quartz_sand_dust',  //arg 3: the mapping object
            C: 'minecraft:bucket',
            D: 'gtceu:stone_dust'
        }
    )


});