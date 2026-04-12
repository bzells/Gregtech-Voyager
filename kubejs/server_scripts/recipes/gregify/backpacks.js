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
        'sophisticatedbackpacks:copper_backpack',
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
        ).modifyResult((grid, result) => {
        let bp = grid.find('sophisticatedbackpacks:backpack')
        let nbt = bp.nbt
        return result.withNBT(nbt)
     })

    event.shaped(
        'sophisticatedbackpacks:iron_backpack',
        [
            'DAD',
            'AEA', // arg 2: the shape (array of strings)
            'DAD'
        ],
        {
            //  ({type: "minecraft:item_nbt", item: "minecraft:enchanted_book", nbt: {StoredEnchantments: [{ id: "minecraft:looting", lvl: 1}]}}).withChance(.25)
            A: 'minecraft:iron_block',
            E: 'sophisticatedbackpacks:copper_backpack',
            D: 'gtceu:steel_ingot'
        }
        ).modifyResult((grid, result) => {
        let bp = grid.find('sophisticatedbackpacks:copper_backpack')
        let nbt = bp.nbt
        return result.withNBT(nbt)
     })

    event.shaped(
        'sophisticatedbackpacks:gold_backpack',
        [
            'DAD',
            'AEA', // arg 2: the shape (array of strings)
            'DAD'
        ],
        {
            //  ({type: "minecraft:item_nbt", item: "minecraft:enchanted_book", nbt: {StoredEnchantments: [{ id: "minecraft:looting", lvl: 1}]}}).withChance(.25)
            A: 'minecraft:gold_block',
            E: 'sophisticatedbackpacks:iron_backpack',
            D: 'gtceu:aluminium_ingot'
        }
        ).modifyResult((grid, result) => {
        let bp = grid.find('sophisticatedbackpacks:iron_backpack')
        let nbt = bp.nbt
        return result.withNBT(nbt)
     })
     

     event.shaped(
        'sophisticatedbackpacks:diamond_backpack',
        [
            'DAD',
            'AEA', // arg 2: the shape (array of strings)
            'DAD'
        ],
        {
            //  ({type: "minecraft:item_nbt", item: "minecraft:enchanted_book", nbt: {StoredEnchantments: [{ id: "minecraft:looting", lvl: 1}]}}).withChance(.25)
            A: 'minecraft:diamond_block',
            E: 'sophisticatedbackpacks:gold_backpack',
            D: 'gtceu:aluminium_ingot'
        }
        ).modifyResult((grid, result) => {
        let bp = grid.find('sophisticatedbackpacks:gold_backpack')
        let nbt = bp.nbt
        return result.withNBT(nbt)
     })


     // upgrades !!!!!
    event.shaped(
        Item.of('sophisticatedbackpacks:upgrade_base', 2), // arg 1: output
        [
            'DBD',
            'BEB', // arg 2: the shape (array of strings)
            'DBD'
        ],
        {
            B: 'gtceu:gold_rod',
            E: 'gtceu:treated_wood_planks',
            D: 'gtceu:iron_ring'
        }
    );

    event.shaped(
        Item.of('sophisticatedbackpacks:advanced_pickup_upgrade', 1), // arg 1: output
        [
            ' B ',
            ' E ', // arg 2: the shape (array of strings)
            '   '
        ],
        {
            B: 'minecraft:hopper',
            E: 'sophisticatedbackpacks:upgrade_base',
        }
    );

    event.shaped(
        Item.of('sophisticatedbackpacks:advanced_filter_upgrade', 1), // arg 1: output
        [
            ' B ',
            ' E ', // arg 2: the shape (array of strings)
            '   '
        ],
        {
            B: 'gtceu:item_filter',
            E: 'sophisticatedbackpacks:upgrade_base',
        }
    );

    event.shaped(
        Item.of('sophisticatedbackpacks:advanced_magnet_upgrade', 1), // arg 1: output
        [
            ' B ',
            ' E ', // arg 2: the shape (array of strings)
            '   '
        ],
        {
            B: 'gtceu:lv_item_magnet',
            E: 'sophisticatedbackpacks:upgrade_base',
        }
    );

    event.shaped(
        Item.of('sophisticatedbackpacks:advanced_void_upgrade', 1), // arg 1: output
        [
            ' B ',
            'BEB', // arg 2: the shape (array of strings)
            ' B '
        ],
        {
            B: 'minecraft:obsidian',
            E: 'sophisticatedbackpacks:upgrade_base',
        }
    );

    event.shaped(
        Item.of('sophisticatedbackpacks:advanced_restock_upgrade', 1), // arg 1: output
        [
            ' B ',
            ' E ', // arg 2: the shape (array of strings)
            '   '
        ],
        {
            B: 'minecraft:chest',
            E: 'sophisticatedbackpacks:upgrade_base',
        }
    );

    event.shaped(
        Item.of('sophisticatedbackpacks:advanced_deposit_upgrade', 1), // arg 1: output
        [
            '   ',
            ' E ', // arg 2: the shape (array of strings)
            ' B '
        ],
        {
            B: 'minecraft:chest',
            E: 'sophisticatedbackpacks:upgrade_base',
        }
    );

    event.shaped(
        Item.of('sophisticatedbackpacks:advanced_refill_upgrade', 1), // arg 1: output
        [
            '   ',
            'BE ', // arg 2: the shape (array of strings)
            '   '
        ],
        {
            B: 'minecraft:chest',
            E: 'sophisticatedbackpacks:upgrade_base',
        }
    );

    event.shaped(
        Item.of('sophisticatedbackpacks:stack_upgrade_starter_tier', 1), // arg 1: output
        [
            'BBB',
            'BEB', // arg 2: the shape (array of strings)
            'BBB'
        ],
        {
            B: 'minecraft:copper_block',
            E: 'sophisticatedbackpacks:upgrade_base',
        }
    );

    event.shaped(
        Item.of('sophisticatedbackpacks:stack_upgrade_tier_1', 1), // arg 1: output
        [
            'CBC',
            'BEB', // arg 2: the shape (array of strings)
            'CBC'
        ],
        {
            B: 'minecraft:iron_block',
            C: 'gtceu:steel_block',
            E: 'sophisticatedbackpacks:upgrade_base',
        }
    );

    event.shaped(
        Item.of('sophisticatedbackpacks:stack_upgrade_tier_2', 1), // arg 1: output
        [
            'CBC',
            'BEB', // arg 2: the shape (array of strings)
            'CBC'
        ],
        {
            B: 'minecraft:gold_block',
            C: 'gtceu:aluminium_block',
            E: 'sophisticatedbackpacks:upgrade_base',
        }
    );

    event.shaped(
        Item.of('sophisticatedbackpacks:advanced_tool_swapper_upgrade', 1), // arg 1: output
        [
            ' B ',
            'FEC', // arg 2: the shape (array of strings)
            ' D '
        ],
        {
            B: 'minecraft:iron_pickaxe',
            C: 'minecraft:iron_axe',
            D: 'minecraft:iron_shovel',
            F: 'minecraft:iron_sword',
            E: 'sophisticatedbackpacks:upgrade_base',
        }
    );

});