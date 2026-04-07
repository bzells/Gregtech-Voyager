// stole from monifactory, ty ty pansmith, dont know why it doesnt work tho!!!
const BlockTags = Java.loadClass("net.minecraft.tags.BlockTags")

GTCEuStartupEvents.registry("gtceu:world_gen_layer", event => {
    event.create("moon")
        .targets("#ad_astra:moon_stone_replaceables")
        // .targets("#minecraft:stone_ore_replaceables")
        .dimensions("ad_astra:moon")

    event.create("mars")
        .targets("#ad_astra:mars_stone_replaceables")
        .dimensions("ad_astra:mars")

    event.create("mercury")
        .targets("#ad_astra:mercury_stone_replaceables")
        .dimensions("ad_astra:mercury")

    event.create("venus")
        .targets("#ad_astra:venus_stone_replaceables")
        .dimensions("ad_astra:venus")

    event.create("glacio")
        .targets("#ad_astra:glacio_stone_replaceables")
        .dimensions("ad_astra:glacio")

    event.create("glacio_deepslate")
        .targets("#minecraft:deepslate_ore_replaceables")
        .dimensions("ad_astra:glacio")

    event.create("twilightforest")
        .targets("#minecraft:stone_ore_replaceables")
        .dimensions("twilightforest:twilight_forest")
})


// thank god for my discord members :sob:
GTCEuStartupEvents.registry('gtceu:tag_prefix', event => {
    event.create('moon', 'ore')
        .stateSupplier(() => {
            let block = Block.getBlock('ad_astra:moon_stone')
            if (block.id == "minecraft:air") {
                return Block.getBlock('minecraft:stone').defaultBlockState()
            }
            return block.defaultBlockState()
        })
        .baseModelLocation('ad_astra:block/moon_stone')
        .unificationEnabled(true)
        .materialIconType(GTMaterialIconType.ore)
        .generationCondition(ItemGenerationCondition.hasOreProperty)
        .miningToolTag("minecraft:mineable/pickaxe")

    event.create('mars', 'ore')
        .stateSupplier(() => {
            let block = Block.getBlock('ad_astra:mars_stone')
            if (block.id == "minecraft:air") {
                return Block.getBlock('minecraft:stone').defaultBlockState()
            }
            return block.defaultBlockState()
        })
        .baseModelLocation('ad_astra:block/mars_stone')
        .unificationEnabled(true)
        .materialIconType(GTMaterialIconType.ore)
        .generationCondition(ItemGenerationCondition.hasOreProperty)
        .miningToolTag("minecraft:mineable/pickaxe")

    event.create('mercury', 'ore')
        .stateSupplier(() => {
            let block = Block.getBlock('ad_astra:mercury_stone')
            if (block.id == "minecraft:air") {
                return Block.getBlock('minecraft:stone').defaultBlockState()
            }
            return block.defaultBlockState()
        })
        .baseModelLocation('ad_astra:block/mercury_stone')
        .unificationEnabled(true)
        .materialIconType(GTMaterialIconType.ore)
        .generationCondition(ItemGenerationCondition.hasOreProperty)
        .miningToolTag("minecraft:mineable/pickaxe")

    event.create('venus', 'ore')
        .stateSupplier(() => {
            let block = Block.getBlock('ad_astra:venus_stone')
            if (block.id == "minecraft:air") {
                return Block.getBlock('minecraft:stone').defaultBlockState()
            }
            return block.defaultBlockState()
        })
        .baseModelLocation('ad_astra:block/venus_stone')
        .unificationEnabled(true)
        .materialIconType(GTMaterialIconType.ore)
        .generationCondition(ItemGenerationCondition.hasOreProperty)
        .miningToolTag("minecraft:mineable/pickaxe")

    event.create('glacio', 'ore')
        .stateSupplier(() => {
            let block = Block.getBlock('ad_astra:glacio_stone')
            if (block.id == "minecraft:air") {
                return Block.getBlock('minecraft:stone').defaultBlockState()
            }
            return block.defaultBlockState()
        })
        .baseModelLocation('ad_astra:block/glacio_stone')
        .unificationEnabled(true)
        .materialIconType(GTMaterialIconType.ore)
        .generationCondition(ItemGenerationCondition.hasOreProperty)
        .miningToolTag("minecraft:mineable/pickaxe")

})

WorldgenEvents.remove(event => {
    event.removeFeatureById("underground_ores", [
        "ad_astra:moon_iron_ore",
        "ad_astra:deepslate_desh_ore",
        "ad_astra:moon_desh_ore",
        "ad_astra:moon_cheese_ore",
        "ad_astra:moon_ice_shard_ore",
        "ad_astra:mars_diamond_ore",
        "ad_astra:mars_ice_shard_ore",
        "ad_astra:mars_iron_ore",
        "ad_astra:mars_ostrum_ore",
        "ad_astra:mercury_iron_ore",
        "ad_astra:glacio_ice_shard_ore",
        "ad_astra:glacio_coal_ore",
        "ad_astra:glacio_copper_ore",
        "ad_astra:glacio_iron_ore",
        "ad_astra:glacio_lapis_ore",
        "ad_astra:venus_coal_ore",
        "ad_astra:venus_gold_ore",
        "ad_astra:venus_diamond_ore",
        "ad_astra:venus_calorite_ore",
        "iceandfire:silver_ore",
        "occultism:silver_ore",
        "iceandfire:deepslate_silver_ore",
        "occultism:deepslate_silver_ore"
    ])
})

WorldgenEvents.remove(event => {
    event.removeOres(props => {
        props.blocks = [
            "ad_astra:mars_diamond_ore",
            "ad_astra:mars_ice_shard_ore",
            "ad_astra:mars_iron_ore",
            "ad_astra:mars_ostrum_ore",
            "ad_astra:mercury_iron_ore",
            "ad_astra:glacio_ice_shard_ore",
            "ad_astra:glacio_coal_ore",
            "ad_astra:glacio_copper_ore",
            "ad_astra:glacio_iron_ore",
            "ad_astra:glacio_lapis_ore",
            "ad_astra:venus_coal_ore",
            "ad_astra:venus_gold_ore",
            "ad_astra:venus_diamond_ore",
            "ad_astra:venus_calorite_ore",
            "iceandfire:silver_ore",
            "occultism:silver_ore",
            "iceandfire:deepslate_silver_ore",
            "occultism:deepslate_silver_ore"
        ]
    })
})

WorldgenEvents.remove(event => {
    event.removeOres(props => {
        props.blocks = [
            "ad_astra:moon_iron_ore",
            "ad_astra:deepslate_desh_ore",
            "ad_astra:moon_desh_ore",
            "ad_astra:moon_cheese_ore",
            "ad_astra:moon_ice_shard_ore",
            "ad_astra:mars_diamond_ore",
            "ad_astra:mars_ice_shard_ore",
            "ad_astra:mars_iron_ore",
            "ad_astra:mars_ostrum_ore",
            "ad_astra:mars_ostrum_ore",
            "ad_astra:mercury_iron_ore",
            "ad_astra:glacio_ice_shard_ore",
            "ad_astra:glacio_coal_ore",
            "ad_astra:glacio_copper_ore",
            "ad_astra:glacio_iron_ore",
            "ad_astra:glacio_lapis_ore",
            "ad_astra:venus_coal_ore",
            "ad_astra:venus_gold_ore",
            "ad_astra:venus_diamond_ore",
            "ad_astra:venus_calorite_ore",
            "iceandfire:silver_ore",
            "occultism:silver_ore",
            "iceandfire:deepslate_silver_ore",
            "occultism:deepslate_silver_ore"
        ]
    })
})