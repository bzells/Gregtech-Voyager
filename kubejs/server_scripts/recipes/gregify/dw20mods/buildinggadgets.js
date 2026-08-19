ServerEvents.recipes((event) => {
    event.remove({ mod: "buildinggadgets2" })

    event.shaped(
        Item.of("buildinggadgets2:gadget_building", 1), // arg 1: output
        [
            "CDC",
            "EAE", // arg 2: the shape (array of strings)
            "CBC"
        ],
        {
            A: "#gtceu:circuits/lv",
            B: "gtceu:red_alloy_rod",
            C: "gtceu:steel_plate",
            D: "laserio:logic_chip",
            E: "gtceu:diamond_plate"
        }
    )

    event.shaped(
        Item.of("buildinggadgets2:gadget_exchanging", 1), // arg 1: output
        [
            "CDC",
            "EAE", // arg 2: the shape (array of strings)
            "CBC"
        ],
        {
            A: "#gtceu:circuits/mv",
            B: "gtceu:energetic_alloy_rod",
            C: "gtceu:aluminium_plate",
            D: "laserio:logic_chip",
            E: "gtceu:lapis_plate"
        }
    )

    event.shaped(
        Item.of("buildinggadgets2:gadget_copy_paste", 1), // arg 1: output
        [
            "CDC",
            "EAE", // arg 2: the shape (array of strings)
            "CBC"
        ],
        {
            A: "#gtceu:circuits/hv",
            B: "gtceu:energetic_pearlic_alloy_rod",
            C: "gtceu:stainless_steel_plate",
            D: "laserio:logic_chip",
            E: "gtceu:emerald_plate"
        }
    )

    event.shaped(
        Item.of("buildinggadgets2:gadget_cut_paste", 1), // arg 1: output
        [
            "CDC",
            "EAE", // arg 2: the shape (array of strings)
            "CBC"
        ],
        {
            A: "#gtceu:circuits/hv",
            B: "gtceu:energetic_pearlic_alloy_rod",
            C: "gtceu:black_steel_plate",
            D: "laserio:logic_chip",
            E: "gtceu:ruby_plate"
        }
    )

    event.shaped(
        Item.of("buildinggadgets2:gadget_destruction", 1), // arg 1: output
        [
            "CDC",
            "EAE", // arg 2: the shape (array of strings)
            "CBC"
        ],
        {
            A: "#gtceu:circuits/ev",
            B: "gtceu:energetic_pearlic_alloy_rod",
            C: "gtceu:black_steel_plate",
            D: "laserio:logic_chip",
            E: "gtceu:obsidian_plate"
        }
    )

})
