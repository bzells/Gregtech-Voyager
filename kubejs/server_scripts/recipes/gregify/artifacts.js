LootJS.modifiers((event) => {
    // event.removeLoot(item => item.id.startsWith('artifacts:'));
    event.removeGlobalModifier("@artifacts")
    event.removeGlobalModifier("@inventorypets")

    // event.addLootModifier("inventorypets:blocks/cloud_block").removeLoot({mod: "inventorypets"});
})
