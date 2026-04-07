ServerEvents.recipes(event => {
    event.recipes.ars_nouveau.enchanting_apparatus(
        ['minecraft:blaze_rod', 'gtceu:topaz_gem', 'minecraft:blaze_rod', 'gtceu:topaz_gem',
            'minecraft:ender_eye'
        ], // input items
        'gtceu:flawless_topaz_gem', // reagent
        {type: 'minecraft:item_nbt', item: 'gateways:gate_pearl',
            nbt: {
                gateway: 'gateways:basic/blaze'
            }
        }, // output
        4000, // source cost
        true // keep nbt of reagent, think like a smithing recipe
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ['minecraft:slime_ball', 'minecraft:emerald', 'minecraft:slime_ball', 'minecraft:emerald',
            'minecraft:slime_ball'
        ], // input items
        'gtceu:flawless_emerald_gem', // reagent
        {type: 'minecraft:item_nbt', item: 'gateways:gate_pearl',
            nbt: {
                gateway: 'gateways:basic/slime'
            }
        }, // output
        1000, // source cost
        true // keep nbt of reagent, think like a smithing recipe
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ['minecraft:ender_pearl', 'gtceu:source_gem', 'minecraft:ender_pearl', 'gtceu:source_gem',
            'gtceu:source_gem'
        ], // input items
        'gtceu:flawless_source_gem', // reagent
        {type: 'minecraft:item_nbt', item: 'gateways:gate_pearl',
            nbt: {
                gateway: 'gateways:basic/enderman'
            }
        }, // output
        1000, // source cost
        true // keep nbt of reagent, think like a smithing recipe
    )



});