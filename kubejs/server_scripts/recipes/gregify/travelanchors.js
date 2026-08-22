ServerEvents.recipes((event) => {
    // @ts-ignore
    event.remove({output: "travelanchors:travel_anchor"})
    event.remove({output: "travelanchors:travel_staff"})

    event.shaped(
            Item.of("travelanchors:travel_anchor", 1), // arg 1: output
            [
                "ACA",
                "BDB", // arg 2: the shape (array of strings)
                "AEA"
            ],
            {
                A: "gtceu:pearlic_steel_plate",
                B: "#gtceu:circuits/hv",
                C: "gtceu:black_steel_plate",
                D: "gtceu:energetic_alloy_frame",
                E: "gtceu:lv_field_generator"
            }
        )

    event.shaped(
            Item.of("travelanchors:travel_staff", 1), // arg 1: output
            [
                "  A",
                " C ", // arg 2: the shape (array of strings)
                "B  "
            ],
            {
                A: "minecraft:ender_eye",
                B: "gtceu:long_energetic_pearlic_alloy_rod",
                C: "gtceu:mv_field_generator",
            }
        )
})
