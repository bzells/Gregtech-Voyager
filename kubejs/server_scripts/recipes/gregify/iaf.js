ServerEvents.recipes((event) => {
    event.replaceInput({input: "minecraft:iron_ingot", output: "iceandfire:dragonsteel_fire_ingot"}
        , "minecraft:iron_ingot"
        , "gtceu:source_steel_ingot"
    )
    event.replaceInput({input: "minecraft:iron_ingot", output: "iceandfire:dragonsteel_lightning_ingot"}
        , "minecraft:iron_ingot"
        , "gtceu:source_steel_ingot"
    )
    event.replaceInput({input: "minecraft:iron_ingot", output: "iceandfire:dragonsteel_ice_ingot"}
        , "minecraft:iron_ingot"
        , "gtceu:source_steel_ingot"
    )

    function iaf(str)
    {
        return "iceandfire:" + str
    }

    function apotheosis(str)
    {
        return "apotheosis:" + str
    }
    
    function ars(str)
    {
        return "ars_nouveau:" + str
    }

    event.remove({input: iaf("dragonforge_lightning_brick")})
    event.remove({input: iaf("dragonforge_fire_brick")})
    event.remove({input: iaf("dragonforge_ice_brick")})

    const iaf_bricks = [iaf("dragonforge_lightning_brick"), iaf("dragonforge_fire_brick"), iaf("dragonforge_ice_brick")]

    const dragon_types = ["ice", "fire", "lightning"]


    function enchantment_altar_ars(inputs, reagant, output, cost, keepNBT)
    {
        event.recipes.ars_nouveau.enchanting_apparatus(
            inputs, // input items
                reagant, // reagent
                output, // output
                cost, // source cost
                keepNBT // keep nbt of reagent, think like a smithing recipe
            )
    }

    dragon_types.forEach(element =>
        {
            const brick = iaf(`dragonforge_${element}_brick`)
            enchantment_altar_ars(
                [apotheosis("epic_material"), brick, apotheosis("epic_material"), brick,
                 apotheosis("epic_material"), brick, apotheosis("epic_material"), brick
                ],
                ars("sourcestone"), iaf(`dragonforge_${element}_input`), 15000, true
            )

            enchantment_altar_ars(
                [apotheosis("mythic_material"), brick, `gtceu:exquisite_andradite_gem`, brick,
                 iaf(`${element}_dragon_heart`), brick, apotheosis("mythic_material"), brick
                ],
                `gtceu:electric_blast_furnace`, iaf(`dragonforge_${element}_core`), 30000, true
            )
        }
    )




    
})
