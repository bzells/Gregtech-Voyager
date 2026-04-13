

ServerEvents.recipes(event => {
    // event.recipes.gtceu
    //     .helper_wheel('kubejs:track_runner_helper')   // recipe ID
    //     .itemInputs([{item: 'minecraft:cookie'}])
    //     .inputFluids("minecraft:water 100")
    //     .notConsumable('kubejs:track_runner_helper')
    //     .duration(500)                                 // in ticks
    //     .EUt(-32)                                // EU produced total]


    const fullName = (name) => 'kubejs:' + name;

    function create_mixer_recipe(name, ingredientsItem, fluidIngredients, itemOutputs, fluidOutputs, tier, time)
    {
        event.recipes.gtceu.mixer(fullName(name))
            .itemInputs(ingredientsItem)
            .inputFluids(fluidIngredients)
            .itemOutputs(itemOutputs)
            .outputFluids(fluidOutputs)
            .duration(time)
            .EUt(tier);
    }

    event.shaped(
        Item.of('gtceu:lv_oven', 1), // arg 1: output
        [
            'DBD',
            'CAC', // arg 2: the shape (array of strings)
            'DBD'
        ],
        {
            A: 'gtceu:lv_machine_hull',
            B: '#gtceu:circuits/lv',  //arg 3: the mapping object
            C: 'gtceu:tempered_glass',
            D: 'gtceu:steel_spring'
        }
    )

    event.shaped(
        Item.of('gtceu:mv_oven', 1), // arg 1: output
        [
            'DBD',
            'CAC', // arg 2: the shape (array of strings)
            'DBD'
        ],
        {
            A: 'gtceu:mv_machine_hull',
            B: '#gtceu:circuits/mv',  //arg 3: the mapping object
            C: 'gtceu:tempered_glass',
            D: 'gtceu:cupronickel_spring'
        }
    )

    event.shaped(
        Item.of('gtceu:hv_oven', 1), // arg 1: output
        [
            'DBD',
            'CAC', // arg 2: the shape (array of strings)
            'DBD'
        ],
        {
            A: 'gtceu:hv_machine_hull',
            B: '#gtceu:circuits/hv',  //arg 3: the mapping object
            C: 'gtceu:tempered_glass',
            D: 'gtceu:cupronickel_spring'
        }
    )

    event.recipes.gtceu
        .oven('kubejs:roasted_cacao_beans')   // recipe ID
        .itemInputs('32x minecraft:cocoa_beans')
        .itemOutputs('32x kubejs:roasted_cacao_beans')
        .duration(20*60)                                 // in ticks
        .EUt(30)     

    event.recipes.gtceu
        .forge_hammer('kubejs:cacao_dust')   // recipe ID
        .itemInputs('1x kubejs:roasted_cacao_beans')
        .itemOutputs('1x kubejs:cacao_powder')
        .duration(10)                                 // in ticks
        .EUt(30)   
        
    event.recipes.gtceu
        .assembler('kubejs:bakingsheet')   // recipe ID
        .itemInputs('32x gtceu:double_aluminium_plate', '8x gtceu:stainless_steel_plate')
        .itemOutputs('1x kubejs:grandmas_baking_sheet')
        .duration(20*60)                                 // in ticks
        .EUt(120)    

    event.recipes.gtceu
        .assembler('kubejs:heart_of_gold')   // recipe ID
        .itemInputs('32x gtceu:rose_gold_plate', '8x gtceu:polyethylene_tiny_fluid_pipe', '4x gtceu:rose_gold_rod', '2x gtceu:hv_electric_motor', '#gtceu:circuits/ev')
        .itemOutputs('1x kubejs:heart_of_gold')
        .inputFluids('gtceu:gold 2000')
        .duration(20*60)                                 // in ticks
        .EUt(120)

    event.recipes.gtceu
        .helper_assembler('kubejs:gmahelper')   // recipe ID
        .itemInputs('1x kubejs:heart_of_gold', '1x gtceu:fluxed_electrum_frame', '4x gtceu:rose_gold_rod', '2x gtceu:hv_electric_motor', '64x minecraft:cookie')
        .itemOutputs('1x kubejs:grandma_helper')
        .inputFluids('kubejs:melted_butter 2000')
        .duration(20*60)                                 // in ticks
        .EUt(480)

    event.recipes.gtceu
        .extractor('kubejs:melted_butter')   // recipe ID
        .itemInputs('1x kubejs:butter')
        .outputFluids('kubejs:melted_butter 1000')
        .duration(20)                                 // in ticks
        .EUt(8)

    event.recipes.gtceu
        .fluid_solidifier('kubejs:butter')   // recipe ID
        .inputFluids('minecraft:milk 1000')
        .itemOutputs('4x kubejs:butter')
        .duration(200)                                 // in ticks
        .EUt(16)

    create_mixer_recipe('baking_chocolate', ['kubejs:cacao_powder', 'minecraft:sugar'], ['minecraft:milk 1000'], ['4x kubejs:baking_chocolate'], [], 30, 200)

    // create_mixer_recipe('butter', [], ['minecraft:milk 1000'], ['4x kubejs:butter'], ['minecraft:milk 250'], 30, 200)

    create_mixer_recipe('cookiedough', ['2x minecraft:egg', '2x kubejs:butter', '2x kubejs:baking_chocolate', 'kubejs:baking_flour', '2x minecraft:sugar'], [], ['16x kubejs:cookie_dough'], [], 120, 16*20)

    event.recipes.gtceu
        .oven('kubejs:gmacookies')   // recipe ID
        .notConsumable('kubejs:grandma_helper')
        .notConsumable('kubejs:grandmas_baking_sheet')
        .itemInputs('16x kubejs:cookie_dough')
        .itemOutputs('16x kubejs:grandmas_cookie')
        .duration(20*60)                                 // in ticks
        .EUt(120)  



    event.recipes.gtceu
        .centrifuge('kubejs:baking_flour')   // recipe ID
        .itemInputs('1x gtceu:wheat_dust')
        .itemOutputs('1x kubejs:baking_flour')
        .duration(100)                                 // in ticks
        .EUt(30) 

});
