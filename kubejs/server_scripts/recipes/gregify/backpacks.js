ServerEvents.recipes((event) => {
    event.custom({
        type: "sophisticatedbackpacks:basic_backpack",
        key: {
            A: { tag: "forge:wool" },
            B: { item: "minecraft:leather" },
            C: { item: "gtceu:treated_wood_rod" },
            E: { tag: "forge:chests" },
            D: { item: "gtceu:steel_ring" }
        },
        pattern: ["DBD", "BEB", "CAC"],
        result: {
            item: "sophisticatedbackpacks:backpack"
        }
    })

    event.custom({
        type: "sophisticatedbackpacks:backpack_upgrade",
        key: {
            A: { item: "minecraft:copper_block" },
            E: { item: "sophisticatedbackpacks:backpack" },
            D: { item: "gtceu:steel_ingot" }
        },
        pattern: ["DAD", "AEA", "DAD"],
        result: {
            item: "sophisticatedbackpacks:copper_backpack"
        }
    })

    event.custom({
        type: "sophisticatedbackpacks:backpack_upgrade",
        key: {
            A: { item: "minecraft:iron_block" },
            E: { item: "sophisticatedbackpacks:copper_backpack" },
            D: { item: "gtceu:steel_ingot" }
        },
        pattern: ["DAD", "AEA", "DAD"],
        result: {
            item: "sophisticatedbackpacks:iron_backpack"
        }
    })

    event.custom({
        type: "sophisticatedbackpacks:backpack_upgrade",
        key: {
            A: { item: "minecraft:gold_block" },
            E: { item: "sophisticatedbackpacks:iron_backpack" },
            D: { item: "gtceu:aluminium_ingot" }
        },
        pattern: ["DAD", "AEA", "DAD"],
        result: {
            item: "sophisticatedbackpacks:gold_backpack"
        }
    })

    event.custom({
        type: "sophisticatedbackpacks:backpack_upgrade",
        key: {
            A: { item: "minecraft:diamond_block" },
            E: { item: "sophisticatedbackpacks:gold_backpack" },
            D: { item: "gtceu:aluminium_ingot" }
        },
        pattern: ["DAD", "AEA", "DAD"],
        result: {
            item: "sophisticatedbackpacks:diamond_backpack"
        }
    })

    // upgrades !!!!!
    // @ts-ignore
    event.shaped(
        Item.of("sophisticatedbackpacks:upgrade_base", 2), // arg 1: output
        [
            "DBD",
            "BEB", // arg 2: the shape (array of strings)
            "DBD"
        ],
        {
            B: "gtceu:gold_rod",
            E: "gtceu:treated_wood_planks",
            D: "gtceu:iron_ring"
        }
    )

    // @ts-ignore
    event.shaped(
        Item.of("sophisticatedbackpacks:advanced_pickup_upgrade", 1), // arg 1: output
        [
            " B ",
            " E ", // arg 2: the shape (array of strings)
            "   "
        ],
        {
            B: "minecraft:hopper",
            E: "sophisticatedbackpacks:upgrade_base"
        }
    )

    // @ts-ignore
    event.shaped(
        Item.of("sophisticatedbackpacks:advanced_filter_upgrade", 1), // arg 1: output
        [
            " B ",
            " E ", // arg 2: the shape (array of strings)
            "   "
        ],
        {
            B: "gtceu:item_filter",
            E: "sophisticatedbackpacks:upgrade_base"
        }
    )

    // @ts-ignore
    event.shaped(
        Item.of("sophisticatedbackpacks:advanced_magnet_upgrade", 1), // arg 1: output
        [
            " B ",
            " E ", // arg 2: the shape (array of strings)
            "   "
        ],
        {
            B: "gtceu:lv_item_magnet",
            E: "sophisticatedbackpacks:upgrade_base"
        }
    )

    // @ts-ignore
    event.shaped(
        Item.of("sophisticatedbackpacks:advanced_void_upgrade", 1), // arg 1: output
        [
            " B ",
            "BEB", // arg 2: the shape (array of strings)
            " B "
        ],
        {
            B: "minecraft:obsidian",
            E: "sophisticatedbackpacks:upgrade_base"
        }
    )

    // @ts-ignore
    event.shaped(
        Item.of("sophisticatedbackpacks:advanced_restock_upgrade", 1), // arg 1: output
        [
            " B ",
            " E ", // arg 2: the shape (array of strings)
            "   "
        ],
        {
            B: "minecraft:chest",
            E: "sophisticatedbackpacks:upgrade_base"
        }
    )

    // @ts-ignore
    event.shaped(
        Item.of("sophisticatedbackpacks:advanced_deposit_upgrade", 1), // arg 1: output
        [
            "   ",
            " E ", // arg 2: the shape (array of strings)
            " B "
        ],
        {
            B: "minecraft:chest",
            E: "sophisticatedbackpacks:upgrade_base"
        }
    )

    // @ts-ignore
    event.shaped(
        Item.of("sophisticatedbackpacks:advanced_refill_upgrade", 1), // arg 1: output
        [
            "   ",
            "BE ", // arg 2: the shape (array of strings)
            "   "
        ],
        {
            B: "minecraft:chest",
            E: "sophisticatedbackpacks:upgrade_base"
        }
    )

    // @ts-ignore
    event.shaped(
        Item.of("sophisticatedbackpacks:stack_upgrade_starter_tier", 1), // arg 1: output
        [
            "BBB",
            "BEB", // arg 2: the shape (array of strings)
            "BBB"
        ],
        {
            B: "minecraft:copper_block",
            E: "sophisticatedbackpacks:upgrade_base"
        }
    )

    // @ts-ignore
    event.shaped(
        Item.of("sophisticatedbackpacks:stack_upgrade_tier_1", 1), // arg 1: output
        [
            "CBC",
            "BEB", // arg 2: the shape (array of strings)
            "CBC"
        ],
        {
            B: "minecraft:iron_block",
            C: "gtceu:steel_block",
            E: "sophisticatedbackpacks:upgrade_base"
        }
    )

    // @ts-ignore
    event.shaped(
        Item.of("sophisticatedbackpacks:stack_upgrade_tier_2", 1), // arg 1: output
        [
            "CBC",
            "BEB", // arg 2: the shape (array of strings)
            "CBC"
        ],
        {
            B: "minecraft:gold_block",
            C: "gtceu:aluminium_block",
            E: "sophisticatedbackpacks:upgrade_base"
        }
    )

    // @ts-ignore
    event.shaped(
        Item.of("sophisticatedbackpacks:advanced_tool_swapper_upgrade", 1), // arg 1: output
        [
            " B ",
            " E ", // arg 2: the shape (array of strings)
            "   "
        ],
        {
            B: "gtceu:iron_wrench",
            E: "sophisticatedbackpacks:upgrade_base"
        }
    )

    // Removes conversion recipes between the chest storage upgrades and the backpack storage upgrades

    event.remove({
        id:"sophisticatedstorage:backpack_stack_upgrade_starter_tier_from_storage_stack_upgrade_tier_1_plus"
    })

    event.remove({
        id:"sophisticatedstorage:backpack_stack_upgrade_tier_1_from_storage_stack_upgrade_tier_2"
    })

    event.remove({
        id:"sophisticatedstorage:backpack_stack_upgrade_tier_2_from_storage_stack_upgrade_tier_3"
    })
    event.remove({
        id:"sophisticatedstorage:backpack_stack_upgrade_tier_3_from_storage_stack_upgrade_tier_4"
    })
    event.remove({
        id:"sophisticatedstorage:backpack_stack_upgrade_tier_4_from_storage_stack_upgrade_tier_5"
    })
    event.remove({
        id:"sophisticatedstorage:backpack_stack_upgrade_omega_tier_from_storage_stack_upgrade_omega_tier"
    })
    
})
