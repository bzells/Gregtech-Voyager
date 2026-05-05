LootJS.modifiers(event => {
    event
        .addLootTableModifier("minecraft:entities/creeper")
        .addWeightedLoot([
            Item.of("1x kubejs:explosive_heart").withChance(100),
        ]);

    });