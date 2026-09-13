ServerEvents.recipes((event) => {
    function homestead_garden(circuit, flowers)
    {
        event.recipes.gtceu.homestead_garden("homestead_garden_flowers_" + circuit)
        .EUt(2)
        .circuit(circuit)
        .itemOutputs(flowers)
        .duration(100)
        .inputFluids("minecraft:water 5")
    }

    const flowers = ["minecraft:dandelion", "minecraft:poppy", "minecraft:blue_orchid",
        "minecraft:allium", "minecraft:oxeye_daisy", "minecraft:cornflower",
        "minecraft:red_tulip", "minecraft:orange_tulip", "minecraft:pink_tulip",
        "minecraft:white_tulip", "minecraft:azure_bluet", "minecraft:lily_of_the_valley",
        "minecraft:lilac", "minecraft:rose_bush", "minecraft:peony",
        "minecraft:torchflower", "minecraft:pitcher_plant", "minecraft:pink_petals",
        "minecraft:sunflower", "minecraft:wither_rose", "minecraft:spore_blossom",
        "minecraft:fern", "minecraft:vine", "minecraft:grass"
    ]

    for(let i = 0; i < flowers.length; i+=3)
    {
        homestead_garden(i/3, 
            [flowers[i], flowers[i+1], flowers[i+2]]
        )
    }

})
