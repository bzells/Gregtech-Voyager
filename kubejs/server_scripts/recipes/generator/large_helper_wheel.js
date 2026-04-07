

ServerEvents.recipes(event => {
    event.recipes.gtceu
        .large_helper_wheel('kubejs:large_helper_wheel')   // recipe ID
        .itemInputs([{item: 'minecraft:cookie'}])
        .inputFluids("minecraft:water 1000")
        .notConsumable('kubejs:track_runner_helper')
        .notConsumable('kubejs:track_runner_helper')
        .notConsumable('kubejs:track_runner_helper')
        .notConsumable('kubejs:track_runner_helper')
        .duration(200)                                 // in ticks
        .EUt(-128 * 4)                                // EU produced total]


    event.shaped(
        Item.of('gtceu:large_helper_wheel', 1), // arg 1: output
        [
            'DBD',
            'BAB', // arg 2: the shape (array of strings)
            'CBC'
        ],
        {
            A: 'gtceu:mv_machine_hull',
            B: 'gtceu:fluxed_electrum_rotor',  //arg 3: the mapping object
            C: 'gtceu:stainless_steel_plate',
            D: '#gtceu:circuits/hv'
        }
    )


});