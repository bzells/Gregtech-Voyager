ServerEvents.recipes(event => {
    event.recipes.gtceu.rock_breaker("kubejs:obisidan_redstone")
        .itemInputs("minecraft:redstone")
        .itemOutputs("minecraft:obsidian")
        .duration(10*20) // 60 sec
        .EUt(256)

    event.shaped(
        Item.of('gtceu:concrete_bucket', 1), // arg 1: output
        [
            'A B',
            'ACB', // arg 2: the shape (array of strings)
            ' D '
        ],
        {
            A: 'gtceu:clay_dust',
            B: 'gtceu:quartz_sand_dust',  //arg 3: the mapping object
            C: 'minecraft:bucket',
            D: 'gtceu:stone_dust'
        }
        )

        event.shaped(
        Item.of('minecraft:bricks', 2), // arg 1: output
        [
            'AAA',
            'ACA', // arg 2: the shape (array of strings)
            'AAA'
        ],
        {
            C: 'gtceu:concrete_bucket',
            A: 'minecraft:brick',
        }
        )

    event.remove({output: 'gtceu:firebricks'})

    event.recipes.gtceu.compressor("kubejs:firebricks")
        .itemInputs('4x gtceu:firebrick')
        .EUt(2)
        .itemOutputs('gtceu:firebricks')

    event.recipes.gtceu.compressor("kubejs:bricks")
        .itemInputs('4x minecraft:brick')
        .EUt(2)
        .itemOutputs('minecraft:bricks')


});