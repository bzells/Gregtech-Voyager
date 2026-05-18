LootJS.modifiers(event => {
    event
        .addLootTableModifier("minecraft:entities/creeper")
        .addWeightedLoot([
            Item.of("1x kubejs:explosive_heart").withChance(.1),
        ]);

    // event
    //     .addLootTableModifier("kubejs:venus_obelisk_loot")
    //     .addWeightedLoot([
    //         Item.of("1x kubejs:ev_voucher").withChance(20),
    //         Item.of("1x kubejs:iv_voucher").withChance(15),
    //         Item.of("1x kubejs:luv_voucher").withChance(5),
    //         Item.of("2x kubejs:venus_capsule").withChance(5),
    //         Item.of("7x gtceu:tiny_perfected_electrum_dust").withChance(25),
    //         Item.of("4x gtceu:small_perfected_electrum_dust").withChance(15),
    //         Item.of("16x gtceu:venus_sand_dust").withChance(85),
    //     ]);

    });