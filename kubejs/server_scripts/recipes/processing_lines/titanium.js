ServerEvents.recipes((event) => {
    event.recipes.gtceu
        .chemical_bath("kubejs:crushedilmenite_ev_bath") // recipe ID
        .itemInputs("gtceu:crushed_ilmenite_ore")
        .inputFluids("gtceu:sulfuric_acid 1000")
        .itemOutputs("gtceu:ilmenite_slag_dust")
        .outputFluids("gtceu:ilmenite_slurry 1000")
        .duration(200) // in ticks
        .EUt(1980)
    // Sulfuric: H2 S O4

    event.recipes.gtceu
        .centrifuge("kubejs:ilm_slurry_cent") // recipe ID
        .inputFluids("gtceu:ilmenite_slurry 500")
        .itemOutputs("gtceu:rutile_dust", "gtceu:cobalt_oxide_dust")
        .outputFluids("gtceu:ilmenite_residue 250")
        .duration(200) // in ticks
        .EUt(480)

    event.recipes.gtceu
        .electrolyzer("kubejs:ilm_residue_electrolyze") // recipe ID
        .inputFluids("gtceu:ilmenite_residue 500")
        .itemOutputs("gtceu:ilmenite_dust", "gtceu:small_desh_dust")
        .chancedOutput("gtceu:iron_dust", 9000, 500)
        .chancedOutput("gtceu:vanadium_dust", 5000, 500)
        .outputFluids("gtceu:hydrogen_sulfide 1000")
        .duration(200) // in ticks
        .EUt(120)
})
