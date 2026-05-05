

ServerEvents.recipes(event => {


    
    event.recipes.gtceu
        .large_helper_wheel('kubejs:large_helper_wheel')   // recipe ID
        .itemInputs([{item: 'kubejs:grandmas_cookie'}])
        .inputFluids("kubejs:melted_butter 100")
        .notConsumable('kubejs:lcptr_helper')
        .duration(500)                                 // in ticks
        .EUt(-128 * 6)     


    event.shaped(
        Item.of('gtceu:large_helper_wheel', 1), // arg 1: output
        [
            'DBD',
            'BAB', // arg 2: the shape (array of strings)
            'CBC'
        ],
        {
            A: 'gtceu:ev_machine_hull',
            B: 'gtceu:refined_fluxed_electrum_rotor',  //arg 3: the mapping object
            C: 'gtceu:titanium_plate',
            D: '#gtceu:circuits/iv'
        }
    )


});