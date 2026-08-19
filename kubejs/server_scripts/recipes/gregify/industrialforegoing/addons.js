ServerEvents.recipes((event) => {
    event.remove({ mod: "industrialforegoing" })

    const rangeaddon2 = {
        type: "forge:nbt",
        item: "industrialforegoing:range_addon2",
        count: 1,
        nbt: "{TitaniumAugment:{Range:2.0f}}"
    }

    const rangeaddon4 = {
        type: "forge:nbt",
        item: "industrialforegoing:range_addon4",
        count: 1,
        nbt: "{TitaniumAugment:{Range:4.0f}}"
    }

    const rangeaddon8 = {
        type: "forge:nbt",
        item: "industrialforegoing:range_addon8",
        count: 1,
        nbt: "{TitaniumAugment:{Range:8.0f}}"
    }

    const rangeaddon11 = {
        type: "forge:nbt",
        item: "industrialforegoing:range_addon11",
        count: 1,
        nbt: "{TitaniumAugment:{Range:11.0f}}"
    }

    event.recipes.gtceu.assembler("kubejs:range_addon2").itemInputs("1x #gtceu:circuits/lv", "1x gtceu:lv_sensor", "2x gtceu:iron_plate").itemOutputs(Item.of(rangeaddon2)).duration(100).EUt(30)

    event.recipes.gtceu.assembler("kubejs:range_addon4").itemInputs("1x #gtceu:circuits/lv", "1x gtceu:lv_sensor", "2x gtceu:steel_plate").itemOutputs(Item.of(rangeaddon4)).duration(100).EUt(30)

    event.recipes.gtceu.assembler("kubejs:range_addon8").itemInputs("1x #gtceu:circuits/mv", "1x gtceu:mv_sensor", "2x gtceu:aluminium_plate").itemOutputs(Item.of(rangeaddon8)).duration(100).EUt(120)

    event.recipes.gtceu
        .assembler("kubejs:range_addon11")
        .itemInputs("1x #gtceu:circuits/hv", "1x gtceu:hv_sensor", "2x gtceu:stainless_steel_plate")
        .itemOutputs(Item.of(rangeaddon11))
        .duration(100)
        .EUt(480)

    event.recipes.gtceu
        .assembler("kubejs:mobimprisonment")
        .itemInputs("1x #gtceu:circuits/mv", "4x gtceu:polyethylene_plate", "1x gtceu:pearlic_steel_plate")
        .itemOutputs("1x industrialforegoing:mob_imprisonment_tool")
        .duration(300)
        .EUt(120)
})
