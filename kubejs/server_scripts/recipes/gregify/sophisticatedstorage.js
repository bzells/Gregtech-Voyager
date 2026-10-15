// Sophisticated Storage gregification. Tiers mirror backpacks.js:
// copper -> copper, iron -> steel, gold -> aluminium, diamond -> diamond plate.
// Special recipe types (storage_tier_upgrade, wood storage, ...) are NOT rewritten, only their ingredients.
ServerEvents.recipes((event) => {
    const ss = { mod: "sophisticatedstorage" }
    // utility items where raw iron/gold should stay as-is (not tiers)
    const tiers = { mod: "sophisticatedstorage", not: { id: /^sophisticatedstorage:(storage_tool|storage_io|storage_input|upgrade_base)$/ } }

    // Base wood storage (chest, barrel, limited barrels, vanilla-chest conversion), tier upgrades, shulker: lever -> screw
    event.replaceInput(ss, "minecraft:lever", "gtceu:wrought_iron_screw")

    // Tier upgrades + tiered chests/barrels/shulkers/stack upgrades
    event.replaceInput(tiers, "#forge:ingots/copper", "gtceu:copper_plate")
    event.replaceInput(tiers, "#forge:ingots/iron", "gtceu:steel_plate")
    event.replaceInput(tiers, "#forge:storage_blocks/iron", "gtceu:steel_block")
    event.replaceInput(tiers, "#forge:ingots/gold", "gtceu:aluminium_plate")
    event.replaceInput(tiers, "#forge:storage_blocks/gold", "gtceu:aluminium_block")
    event.replaceInput(tiers, "#forge:gems/diamond", "gtceu:diamond_plate")
    // netherite left vanilla: GT already gates the ingot (see vanilla.js)

    // Upgrade base: same as backpacks.js
    event.remove({ id: "sophisticatedstorage:upgrade_base" })
    event
        .shaped(Item.of("sophisticatedstorage:upgrade_base", 2), ["DBD", "BEB", "DBD"], {
            B: "gtceu:gold_rod",
            E: "gtceu:treated_wood_planks",
            D: "gtceu:iron_ring"
        })
        .id("kjs:sophisticatedstorage/upgrade_base")

    // Storage <-> backpack stack upgrade conversions (backpack side removed in backpacks.js)
    event.remove({ id: /^sophisticatedstorage:storage_stack_upgrade_.*_from_backpack_stack_upgrade_/ })
})
