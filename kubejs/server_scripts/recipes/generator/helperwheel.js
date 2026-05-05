

ServerEvents.recipes(event => {
    event.recipes.gtceu
        .helper_wheel('kubejs:track_runner_helper')   // recipe ID
        .itemInputs([{item: 'minecraft:cookie'}])
        .inputFluids("minecraft:water 100")
        .notConsumable('kubejs:track_runner_helper')
        .duration(100)                                 // in ticks
        .EUt(-32)      
        
    event.recipes.gtceu
        .helper_wheel('kubejs:track_runner_helper_gma_cookies')   
        .itemInputs([{item: 'kubejs:grandmas_cookie'}])
        .inputFluids("kubejs:melted_butter 100")
        .notConsumable('kubejs:track_runner_helper')
        .duration(300)                                 
        .EUt(-32)   


    event.shaped(
        Item.of('gtceu:lv_helper_wheel', 1), // arg 1: output
        [
            'DBD',
            'CAC', // arg 2: the shape (array of strings)
            'DBD'
        ],
        {
            A: 'gtceu:lv_machine_hull',
            B: '#gtceu:circuits/lv',  //arg 3: the mapping object
            C: 'gtceu:tin_rotor',
            D: 'gtceu:lv_electric_motor'
        }
    )

    event.shaped(
        Item.of('gtceu:mv_helper_wheel', 1), // arg 1: output
        [
            'DBD',
            'CAC', // arg 2: the shape (array of strings)
            'DBD'
        ],
        {
            A: 'gtceu:mv_machine_hull',
            B: '#gtceu:circuits/mv',  //arg 3: the mapping object
            C: 'gtceu:bronze_rotor',
            D: 'gtceu:mv_electric_motor'
        }
    )

    event.shaped(
        Item.of('gtceu:hv_helper_wheel', 1), // arg 1: output
        [
            'DBD',
            'CAC', // arg 2: the shape (array of strings)
            'DBD'
        ],
        {
            A: 'gtceu:hv_machine_hull',
            B: '#gtceu:circuits/hv',  //arg 3: the mapping object
            C: 'gtceu:steel_rotor',
            D: 'gtceu:hv_electric_motor'
        }
    )


});
