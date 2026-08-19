ServerEvents.recipes((event) => {

    event.remove({output: "apotheosis:salvaging_table"})

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

    enchantment_altar_ars(
        [apotheosis("gem_dust"), "gtceu:rose_gold_plate", apotheosis("gem_dust"), "gtceu:rose_gold_plate", apotheosis("gem_dust"), "gtceu:rose_gold_plate", apotheosis("gem_dust"), "gtceu:rose_gold_plate"]
        , "minecraft:smithing_table", apotheosis("salvaging_table"), 8000, true
    )





    
})
