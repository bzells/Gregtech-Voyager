ServerEvents.recipes((event) => {
    event.remove({ mod: "spatialtoolscmp" })

    const mod_id = "spatialtoolscmp"

    function ns(str)
    {
        return mod_id + ":" + str
    }

    event.shaped(
            Item.of(ns("portable_spatial_storage"), 1), // arg 1: output
            [
                "ACA",
                "BDB", // arg 2: the shape (array of strings)
                "AEA"
            ],
            {
                A: "gtceu:tungsten_plate",
                B: "#gtceu:circuits/iv",
                C: "gtceu:dense_tungsten_steel_plate",
                D: "buildinggadgets2:gadget_cut_paste",
                E: "gtceu:lapotronic_energy_orb"
            }
        )

    event.shaped(
            Item.of(ns("portable_spatial_piper"), 1), // arg 1: output
            [
                "ACA",
                "BDB", // arg 2: the shape (array of strings)
                "AEA"
            ],
            {
                A: "gtceu:desh_plate",
                B: "#gtceu:circuits/ev",
                C: "gtceu:dense_steel_plate",
                D: "buildinggadgets2:gadget_building",
                E: "gtceu:lapotron_crystal"
            }
        )

    event.shaped(
            Item.of(ns("portable_spatial_replacer"), 1), // arg 1: output
            [
                "ACA",
                "BDB", // arg 2: the shape (array of strings)
                "AEA"
            ],
            {
                A: "gtceu:titanium_plate",
                B: "#gtceu:circuits/ev",
                C: "gtceu:dense_obsidian_plate",
                D: "buildinggadgets2:gadget_exchanging",
                E: "gtceu:lapotronic_energy_orb"
            }
        )

    event.shaped(
            Item.of(ns("portable_spatial_cloner"), 1), // arg 1: output
            [
                "ACA",
                "BDB", // arg 2: the shape (array of strings)
                "AEA"
            ],
            {
                A: "gtceu:ostrum_plate",
                B: "#gtceu:circuits/luv",
                C: "gtceu:dense_tungsten_steel_plate",
                D: "buildinggadgets2:gadget_copy_paste",
                E: "gtceu:lapotronic_energy_orb"
            }
        )

    global.recipe_assembler(event, ns("portable_spatial_tool"), 
        [ns("portable_spatial_cloner"),ns("portable_spatial_replacer"), ns("portable_spatial_piper"), ns("portable_spatial_storage")],
        [], 7860, 20)


    
})
