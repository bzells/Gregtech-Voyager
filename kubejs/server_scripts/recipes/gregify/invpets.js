ServerEvents.recipes((event) => {


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

    function inv_pets(str)
    {
        return "inventorypets:" + str
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


    event.recipes.gtceu.alloy_smelter("kubejs:coal_nuggets")
        .itemInputs("#minecraft:coals")
        .notConsumable("gtceu:nugget_casting_mold")
        .itemOutputs("9x " + inv_pets("nugget_coal"))
        .EUt(2)
        .duration(100)




    
})
