ServerEvents.recipes((event) => {
    // event.recipes.gtceu.
    //     helper_assembly_jei("kubejs:helper_assembly_dummy")
        
    event.recipes.gtceu.large_dehumidifier("kjs:dehumidifier_water")
        .circuit(1)
        .outputFluids("minecraft:water 8000")
        .duration(20)
        .EUt(28)


    event.shaped(
        Item.of("gtceu:large_dehumidifier", 1), // arg 1: output
        [
            "ADA",
            "CBC", // arg 2: the shape (array of strings)
            "AEA"
        ],
        {
            A: "gtceu:item_filter",
            B: "gtceu:lv_gas_collector", //arg 3: the mapping object
            C: "gtceu:bronze_rotor",
            D: "#gtceu:circuits/lv",
            E: "gtceu:lv_super_tank"
        }
    )

})
