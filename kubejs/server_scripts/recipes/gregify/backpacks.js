ServerEvents.recipes(event => {

    event.shaped(
                Item.of('sophisticatedbackpacks:backpack', 1), // arg 1: output
                [
                    'DBD',
                    'BEB', // arg 2: the shape (array of strings)
                    'CAC'
                ],
                {
                    A: '#forge:wool',
                    B: 'minecraft:leather',
                    C: 'gtceu:treated_wood_rod',
                    E: '#forge:chests',
                    D: 'gtceu:steel_ring'
                }
    );

    event.shaped(
        Item.of('sophisticatedbackpacks:copper_backpack', 1), // arg 1: output
        [
            'DAD',
            'AEA', // arg 2: the shape (array of strings)
            'DAD'
        ],
        {
            //  ({type: "minecraft:item_nbt", item: "minecraft:enchanted_book", nbt: {StoredEnchantments: [{ id: "minecraft:looting", lvl: 1}]}}).withChance(.25)
            A: 'minecraft:copper_block',
            E: 'sophisticatedbackpacks:backpack',
            D: 'gtceu:steel_ingot'
        }
    );

    event.shaped(
        Item.of('sophisticatedbackpacks:iron_backpack', 1), // arg 1: output
        [
            'DAD',
            'AEA', // arg 2: the shape (array of strings)
            'DAD'
        ],
        {
            A: 'minecraft:iron_block',
            E: 'sophisticatedbackpacks:copper_backpack',
            D: 'tconstruct:pig_iron_ingot'
        }
    );

    event.shaped(
        Item.of('sophisticatedbackpacks:gold_backpack', 1), // arg 1: output
        [
            'DAD',
            'AEA', // arg 2: the shape (array of strings)
            'DAD'
        ],
        {
            A: 'minecraft:gold_block',
            E: 'sophisticatedbackpacks:iron_backpack',
            D: 'gtceu:aluminium_ingot'
        }
        );


});