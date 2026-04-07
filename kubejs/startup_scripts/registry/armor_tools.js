StartupEvents.registry('item', event => {
  // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
  // If you want a custom item model, you can create one in Blockbench and put it in kubejs/assets/kubejs/models/item/test_item.json

    event.create('source_steel_helmet', 'helmet').tier('diamond').displayName('Source Steel Helmet').texture('minecraft:item/iron_helmet').color(1, '0xd745ff');
    event.create('source_steel_chestplate', 'chestplate').tier('diamond').displayName('Source Steel Chestplate').texture('minecraft:item/iron_chestplate').color(1, '0xd745ff');
    event.create('source_steel_leggings', 'leggings').tier('diamond').displayName('Source Steel Leggings').texture('minecraft:item/iron_leggings').color(1, '0xd745ff');
    event.create('source_steel_boots', 'boots').tier('diamond').displayName('Source Steel Boots').texture('minecraft:item/iron_boots').color(1, '0xd745ff');
}) 