ServerEvents.recipes((event) => {
    event.remove({ mod: "itemcollectors" })

    event.shaped(
            Item.of("itemcollectors:basic_collector", 1), // arg 1: output
            [
                "ACA",
                "CDC", // arg 2: the shape (array of strings)
                "ACA"
            ],
            {
                A: "gtceu:pearlic_steel_gear",
                C: "gtceu:dense_obsidian_plate",
                D: "minecraft:hopper"
            }
        )

    event.shaped(
            Item.of("itemcollectors:advanced_collector", 1), // arg 1: output
            [
                "ACA",
                "BDB", // arg 2: the shape (array of strings)
                "ACA"
            ],
            {
                A: "gtceu:pearlic_steel_gear",
                B: "gtceu:item_filter",
                C: "gtceu:dense_obsidian_plate",
                D: "itemcollectors:basic_collector"
            }
        )
    
})
