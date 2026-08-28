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



        event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:creeper_head", "minecraft:tnt", "minecraft:tnt", "minecraft:tnt", "tconstruct:pig_iron_ingot", "tconstruct:hepatizon_ingot"], // input items
        "kubejs:heart_of_destruction", // reagent
        "inventorypets:pet_creeper", // output
        10000, // source cost
        true // keep nbt of reagent, think like a smithing recipe
    )

    // event.recipes.ars_nouveau.enchanting_apparatus(
    //     ["minecraft:leather", "minecraft:leather", "minecraft:leather", "minecraft:leather", "tconstruct:pig_iron_ingot", "gtceu:source_steel_ingot"], // input items
    //     "minecraft:raw_beef", // reagent
    //     "inventorypets:pet_cow", // output
    //     10000, // source cost
    //     true // keep nbt of reagent, think like a smithing recipe
    // )

    // event.recipes.ars_nouveau.enchanting_apparatus(
    //     ["minecraft:magma_cream", "minecraft:magma_cream", "minecraft:magma_cream", "minecraft:magma_cream", "tconstruct:queens_slime_ingot", "gtceu:source_steel_ingot"], // input items
    //     "minecraft:magma_block", // reagent
    //     "inventorypets:pet_magma_cube", // output
    //     10000, // source cost
    //     true // keep nbt of reagent, think like a smithing recipe
    // )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["ars_nouveau:fire_essence", "apotheosis:gem_dust", "gtceu:sculk_dust"], // input items
        "kubejs:explosive_heart", // reagent
        "kubejs:heart_of_destruction", // output
        10000, // source cost
        true // keep nbt of reagent, think like a smithing recipe
    )
    event.recipes.gtceu.compressor("kubejs:anvil_pet")
    .itemInputs("16x minecraft:anvil")
    .itemOutputs("inventorypets:pet_anvil")
    .EUt(28)
    .duration(360 * 20)

    event.recipes.gtceu.chemical_bath("kubejs:squid_pet")
    .itemInputs("#inventorypets:all_pets")
    .inputFluids("minecraft:water 32000")
    .itemOutputs("inventorypets:pet_squid")
    .EUt(120)
    .duration(60 * 20)

    event.recipes.gtceu.chemical_bath("kubejs:pet_magma_cube")
    .itemInputs("inventorypets:pet_slime")
    .inputFluids("minecraft:lava 32000")
    .itemOutputs("inventorypets:pet_magma_cube")
    .EUt(120)
    .duration(60 * 20)

    event.recipes.gtceu.chemical_bath("kubejs:pet_enderman")
    .itemInputs("minecraft:pumpkin")
    .inputFluids("gtceu:pearlic_steel 1440")
    .itemOutputs("inventorypets:pet_enderman")
    .EUt(120)
    .duration(60 * 20)

    event.shaped(
        Item.of("inventorypets:pet_slime", 1), // arg 1: output
        [
            "CCC",
            "CAC", // arg 2: the shape (array of strings)
            "CCC"
        ],
        {
            A: "bhc:red_heart",
            C: "tconstruct:earth_congealed_slime",
        }
    )

    // event.recipes.ars_nouveau.enchanting_apparatus(
    //     ["minecraft:ink_sac", "minecraft:ink_sac", "minecraft:ink_sac", "minecraft:ink_sac", "tconstruct:slimesteel_ingot", "gtceu:source_steel_ingot"], // input items
    //     "minecraft:water_bucket", // reagent
    //     "inventorypets:pet_squid", // output
    //     10000, // source cost
    //     true // keep nbt of reagent, think like a smithing recipe
    // )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["apotheosis:rare_material", "minecraft:experience_bottle", "apotheosis:rare_material", "minecraft:experience_bottle", "apotheosis:rare_material", "gtceu:source_steel_ingot"], // input items
        "minecraft:feather", // reagent
        "inventorypets:pet_pixie", // output
        10000, // source cost
        true // keep nbt of reagent, think like a smithing recipe
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["apotheosis:epic_material", "minecraft:experience_bottle", "apotheosis:epic_material", "minecraft:experience_bottle", "apotheosis:epic_material", "tconstruct:queens_slime_ingot"], // input items
        "minecraft:gold_nugget", // reagent
        "inventorypets:pet_loot", // output
        10000, // source cost
        true // keep nbt of reagent, think like a smithing recipe
    )

    event.shaped(
        Item.of("inventorypets:pet_sheep", 1), // arg 1: output
        [
            "CCC",
            "CAC", // arg 2: the shape (array of strings)
            "CCC"
        ],
        {
            A: "farmersdelight:roasted_mutton_chops",
            C: "#minecraft:wool",
        }
    )

    event.shaped(
        Item.of("inventorypets:pet_silverfish", 1), // arg 1: output
        [
            "CCC",
            "CAC", // arg 2: the shape (array of strings)
            "CCC"
        ],
        {
            A: "miners_delight:silverfish_eggs",
            C: "gtceu:pearlic_steel_foil",
        }
    )

    event.shapeless(Item.of("inventorypets:pet_cow", 1), ["cookingforblockheads:cow_jar", "#gtceu:circuits/lv"])

    
})
