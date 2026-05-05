ServerEvents.recipes(event => {
    event.recipes.ars_nouveau.enchanting_apparatus(
        ['minecraft:creeper_head', 'minecraft:tnt', 'minecraft:tnt', 'minecraft:tnt',
            'tconstruct:pig_iron_ingot', 'tconstruct:hapatizon_ingot'
        ], // input items
        'kubejs:heart_of_destruction', // reagent
        'inventorypets:pet_creeper', // output
        10000, // source cost
        true // keep nbt of reagent, think like a smithing recipe
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ['ars_nouveau:fire_essence', 'apotheosis:gem_dust', 'gtceu:sculk_dust'
        ], // input items
        'kubejs:explosive_heart', // reagent
        'kubejs:heart_of_destruction', // output
        10000, // source cost
        true // keep nbt of reagent, think like a smithing recipe
    )
});