ServerEvents.recipes((event) => {
    // @ts-ignore
    event.remove({output: "minecraft:netherite_ingot"})
    event.remove({output: "minecraft:netherite_scrap"})
    //event, inputItem, outputItem, eut, time
    global.recipe_mixer(event, 'netherite_dust',
        ['4x gtceu:gold_dust', '4x minecraft:netherite_scrap'], 'minecraft:lava 144',
        'gtceu:netherite_dust', [], 480, 30
    )
    global.recipe_macerator(event, 'minecraft:ancient_debris', '2x minecraft:netherite_scrap', 120, 40)

})
