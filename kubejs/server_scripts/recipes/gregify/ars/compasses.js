ServerEvents.recipes(event => {
    event.recipes.ars_nouveau.enchanting_apparatus(
        ['gtceu:source_lens', '#minecraft:saplings', '#minecraft:saplings', '#minecraft:saplings',
            '#minecraft:saplings', 'gtceu:steel_screw', 'gtceu:steel_screw'
        ], // input items
        'minecraft:compass', // reagent
        'naturescompass:naturescompass', // output
        2000, // source cost
        true // keep nbt of reagent, think like a smithing recipe
    )
});