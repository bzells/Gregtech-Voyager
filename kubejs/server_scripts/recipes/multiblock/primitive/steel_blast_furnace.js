ServerEvents.recipes(event => {

    event.shaped(
        Item.of('gtceu:steam_blast_furnace', 1), // arg 1: output
        [
            'DCD',
            'BAB', // arg 2: the shape (array of strings)
            'DCD'
        ],
        {
            A: 'gtceu:steel_machine_casing',
            B: 'gtceu:firebricks',  //arg 3: the mapping object
            C: 'minecraft:blast_furnace',
            D: 'gtceu:steel_plate'
        }
    )
    event.recipes.gtceu.steam_blast_furnace("kubejs:steam_blast_furnace_chts")
        .itemInputs("2x minecraft:iron_ingot", "1x minecraft:charcoal")
        .itemOutputs("2x gtceu:steel_ingot")
        // .EUt(16) why the hell wont this work with steam...?
        .duration(800)

    event.recipes.gtceu.steam_blast_furnace("kubejs:steam_blast_furnace_cts")
        .itemInputs("3x minecraft:iron_ingot", "1x minecraft:coal")
        .itemOutputs("3x gtceu:steel_ingot")
        .duration(700)

    event.recipes.gtceu.steam_blast_furnace("kubejs:steam_blast_furnace_coke")
        .itemInputs("3x minecraft:iron_ingot", "1x gtceu:coke_gem")
        .itemOutputs("3x gtceu:steel_ingot")
        .duration(600)

    // event.recipes.gtceu.steam_blast_furnace("kubejs:steam_blast_furnace_chts_helper")
    //     .itemInputs("2x minecraft:iron_ingot", "1x minecraft:charcoal")
    //     .notConsumable("kubejs:brick_helper")
    //     .itemOutputs("2x gtceu:steel_ingot")
    //     .curcuit(2)
    //     .duration(400)

    // event.recipes.gtceu.steam_blast_furnace("kubejs:steam_blast_furnace_cts_helper")
    //     .itemInputs("3x minecraft:iron_ingot", "1x minecraft:coal")
    //     .notConsumable("kubejs:brick_helper")
    //     .itemOutputs("3x gtceu:steel_ingot")
    //     .curcuit(2)
    //     .duration(350)

    // event.recipes.gtceu.steam_blast_furnace("kubejs:steam_blast_furnace_coke_helper")
    //     .itemInputs("3x minecraft:iron_ingot", "1x gtceu:coke_gem")
    //     .notConsumable("kubejs:brick_helper")
    //     .itemOutputs("3x gtceu:steel_ingot")
    //     .curcuit(2)
    //     .duration(300)

    // event.recipes.gtceu.steam_blast_furnace("kubejs:steam_blast_furnace_brick_helper")
    //     .itemInputs("4x minecraft:brick")
    //     .notConsumable("kubejs:brick_helper")
    //     .itemOutputs("1x minecraft:bricks")
    //     .duration(100)

    event.recipes.gtceu.steam_blast_furnace("kubejs:steam_blast_furnace_wriron")
        .itemInputs("1x minecraft:iron_block")
        .itemOutputs("1x gtceu:wrought_iron_block")
        .duration(1800)

    // event.recipes.gtceu.steam_blast_furnace("kubejs:steam_blast_furnace_wriron_helper")
    //     .itemInputs("5x minecraft:iron_ingot")
    //     .notConsumable("kubejs:brick_helper")
    //     .itemOutputs("5x gtceu:wrought_iron_ingot")
    //     .duration(300)



})