ServerEvents.recipes((event) => {
    event.remove({ mod: "industrialforegoing" })



    const speedaddon1 = {
    type: "forge:nbt",
    item: "industrialforegoing:speed_addon_1",
    count: 1,
    nbt: "{TitaniumAugment:{Speed:2.0f}}"
    }

    const speedaddon2 = {
    type: "forge:nbt",
    item: "industrialforegoing:speed_addon_2",
    count: 1,
    nbt: "{TitaniumAugment:{Speed:3.0f}}"
    }

    const efficiencyaddon1 = {
    type: "forge:nbt",
    item: "industrialforegoing:efficiency_addon_1",
    count: 1,
    nbt: "{TitaniumAugment:{Efficiency:0.9f}}"
    }

    const efficiencyaddon2 = {
        type: "forge:nbt",
        item: "industrialforegoing:efficiency_addon_2",
        count: 1,
        nbt: "{TitaniumAugment:{Efficiency:0.8f}}"
    }

    const processingaddon1 = {
        type: "forge:nbt",
        item: "industrialforegoing:processing_addon_1",
        count: 1,
        nbt: "{TitaniumAugment:{Processing:2.0f}}"
    }

    const processingaddon2 = {
        type: "forge:nbt",
        item: "industrialforegoing:processing_addon_2",
        count: 1,
        nbt: "{TitaniumAugment:{Processing:3.0f}}"
    }

    const rangeaddon1 = {
    type: "forge:nbt",
    item: "industrialforegoing:range_addon1",
    count: 1,
    nbt: "{TitaniumAugment:{Range:1.0f}}"
    }

    const rangeaddon2 = {
        type: "forge:nbt",
        item: "industrialforegoing:range_addon2",
        count: 1,
        nbt: "{TitaniumAugment:{Range:2.0f}}"
    }

    const rangeaddon3 = {
        type: "forge:nbt",
        item: "industrialforegoing:range_addon3",
        count: 1,
        nbt: "{TitaniumAugment:{Range:3.0f}}"
    }

    const rangeaddon4 = {
        type: "forge:nbt",
        item: "industrialforegoing:range_addon4",
        count: 1,
        nbt: "{TitaniumAugment:{Range:4.0f}}"
    }

    const rangeaddon5 = {
        type: "forge:nbt",
        item: "industrialforegoing:range_addon5",
        count: 1,
        nbt: "{TitaniumAugment:{Range:5.0f}}"
    }

    const rangeaddon6 = {
        type: "forge:nbt",
        item: "industrialforegoing:range_addon6",
        count: 1,
        nbt: "{TitaniumAugment:{Range:6.0f}}"
    }

    const rangeaddon7 = {
        type: "forge:nbt",
        item: "industrialforegoing:range_addon7",
        count: 1,
        nbt: "{TitaniumAugment:{Range:7.0f}}"
    }

    const rangeaddon8 = {
        type: "forge:nbt",
        item: "industrialforegoing:range_addon8",
        count: 1,
        nbt: "{TitaniumAugment:{Range:8.0f}}"
    }

    const rangeaddon9 = {
        type: "forge:nbt",
        item: "industrialforegoing:range_addon9",
        count: 1,
        nbt: "{TitaniumAugment:{Range:9.0f}}"
    }

    const rangeaddon10 = {
        type: "forge:nbt",
        item: "industrialforegoing:range_addon10",
        count: 1,
        nbt: "{TitaniumAugment:{Range:10.0f}}"
    }

    const rangeaddon11 = {
        type: "forge:nbt",
        item: "industrialforegoing:range_addon11",
        count: 1,
        nbt: "{TitaniumAugment:{Range:11.0f}}"
    }

    const tierMatTable = 
    {
        1: "iron",
        2: "gold",
        3: "steel",
        4: "aluminium",
        5: "pearlic_steel",
        6: "energetic_alloy",
        7: "pink_steel",
        8: "stainless_steel",
        9: "fluxed_cobalt_electrum",
        10: "energetic_pearlic_alloy",
        11: "niobium_nitride"
    }

    const tiersmap =
    {
        0: "lv",
        1: "lv",
        2: "mv",
        3: "hv"
    }

    const rangeAddons = [
        rangeaddon1,
        rangeaddon2,
        rangeaddon3,
        rangeaddon4,
        rangeaddon5,
        rangeaddon6,
        rangeaddon7,
        rangeaddon8,
        rangeaddon9,
        rangeaddon10,
        rangeaddon11
    ]

    const speedAddons = [
        speedaddon1,
        speedaddon2
    ]

    const efficiencyAddons = [
        efficiencyaddon1,
        efficiencyaddon2
    ]

    const processingAddons = 
    [   
        processingaddon1,
        processingaddon2
    ]

    function addon(type, tier, addon)
    {
        let component;
        if(type == "range")
        {
            component = "sensor"
        }
        if(type == "speed")
        {
            component = "robot_arm"
        }
        if(type == "efficiency")
        {
            component = "electric_motor"
        }
        if(type == "processing")
        {
            component = "fluid_regulator"
        }
        event.recipes.gtceu.assembler(`kubejs:${type}_addon_${tier}`)
        .itemInputs(`1x #gtceu:circuits/${tiersmap[Math.floor(tier/3)]}`, `1x gtceu:${tiersmap[Math.floor(tier/3)]}_${component}`, `2x gtceu:${tierMatTable[tier]}_plate`)
        .itemOutputs(addon)
        .duration(100)
        .EUt(30)

    }

    for(const tier = 1; tier <= rangeAddons.length; tier++)
    {
        addon("range", tier, rangeAddons[tier - 1])
    }
    for(const tier = 1; tier <= speedAddons.length; tier++)
    {
        addon("speed", tier * 5, speedAddons[tier - 1])
    }
    for(const tier = 1; tier <= efficiencyAddons.length; tier++)
    {
        addon("efficiency", tier * 5, efficiencyAddons[tier - 1])
    }
    for(const tier = 1; tier <= processingAddons.length; tier++)
    {
        addon("processing", tier * 5, processingAddons[tier - 1])
    }

    // event.recipes.gtceu.assembler("kubejs:range_addon2").itemInputs("1x #gtceu:circuits/lv", "1x gtceu:lv_sensor", "2x gtceu:iron_plate").itemOutputs(Item.of(rangeaddon2)).duration(100).EUt(30)

    // event.recipes.gtceu.assembler("kubejs:range_addon4").itemInputs("1x #gtceu:circuits/lv", "1x gtceu:lv_sensor", "2x gtceu:steel_plate").itemOutputs(Item.of(rangeaddon4)).duration(100).EUt(30)

    // event.recipes.gtceu.assembler("kubejs:range_addon8").itemInputs("1x #gtceu:circuits/mv", "1x gtceu:mv_sensor", "2x gtceu:aluminium_plate").itemOutputs(Item.of(rangeaddon8)).duration(100).EUt(120)

    // event.recipes.gtceu
    //     .assembler("kubejs:range_addon11")
    //     .itemInputs("1x #gtceu:circuits/hv", "1x gtceu:hv_sensor", "2x gtceu:stainless_steel_plate")
    //     .itemOutputs(Item.of(rangeaddon11))
    //     .duration(100)
    //     .EUt(480)

    event.recipes.gtceu
        .assembler("kubejs:mobimprisonment")
        .itemInputs("1x #gtceu:circuits/mv", "4x gtceu:polyethylene_plate", "1x gtceu:pearlic_steel_plate")
        .itemOutputs("1x industrialforegoing:mob_imprisonment_tool")
        .duration(300)
        .EUt(120)
})
