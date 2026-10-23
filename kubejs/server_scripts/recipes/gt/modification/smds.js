ServerEvents.recipes((event) => {
    // @ts-ignore
    event.shaped(
        Item.of("voyagercore:smd_assembler", 1), // arg 1: output
        [
            "ADA",
            "CBC", // arg 2: the shape (array of strings)
            "ADA"
        ],
        {
            A: "gtceu:double_blue_steel_plate",
            B: "gtceu:hv_assembler", //arg 3: the mapping object
            C: "gtceu:nichrome_double_wire",
            D: "#gtceu:circuits/ev"
        }
    )

    event.recipes.gtceu
        .assembler("kubejs:smd_transistor1")
        .itemInputs("1x gtceu:gallium_foil", "1x gtceu:kyanite_dust", "8x gtceu:fine_annealed_copper_wire")
        .itemOutputs("12x gtceu:smd_transistor")
        .inputFluids("#forge:polyethylene 144")
        .duration(160)
        .EUt(480)

    event.recipes.gtceu
        .assembler("kubejs:smd_resistor1")
        .itemInputs("1x gtceu:carbon_dust", "2x gtceu:kyanite_dust", "4x gtceu:fine_gold_wire")
        .itemOutputs("12x gtceu:smd_resistor")
        .inputFluids("#forge:polyethylene 144")
        .duration(160)
        .EUt(480)

    event.recipes.gtceu
        .assembler("kubejs:smd_capacitor1")
        .itemInputs("1x gtceu:aluminium_foil", "2x gtceu:silicone_rubber_foil", "1x gtceu:kyanite_dust")
        .itemOutputs("12x gtceu:smd_capacitor")
        .inputFluids("#forge:polyethylene 144")
        .duration(160)
        .EUt(480)

    event.recipes.gtceu
        .assembler("kubejs:smd_diode1")
        .itemInputs("1x gtceu:gallium_arsenide_dust", "8x gtceu:fine_platinum_wire", "1x gtceu:kyanite_dust")
        .itemOutputs("12x gtceu:smd_diode")
        .inputFluids("#forge:polyethylene 288")
        .duration(160)
        .EUt(480)

    event.recipes.gtceu
        .assembler("kubejs:smd_inductor1")
        .itemInputs("1x gtceu:nickel_zinc_ferrite_ring", "2x gtceu:fine_cupronickel_wire", "1x gtceu:kyanite_dust")
        .itemOutputs("16x gtceu:smd_inductor")
        .inputFluids("#forge:polyethylene 144")
        .duration(160)
        .EUt(480)

    /**
     *
     * @param {*} output
     * @param {*} outputCount
     * @param {*} inputItems
     */
    function smd(output, outputCount, inputItems)
    {
        event.recipes.gtceu.smd_assembly(`kubejs:smd_assembler_smd_${output}`)
        .itemInputs(
            inputItems
        )
        .addData("specialized", "smd_assembly")
        .itemOutputs(`${outputCount}x gtceu:smd_${output}`)
        .inputFluids("#forge:polyethylene 216")
        .duration(20 * 8)
        .EUt(480);
    }

    function advanced_smd(output, outputCount, inputItems)
    {
        event.recipes.gtceu.smd_assembly(`kubejs:smd_assembler_advanced_smd_${output}`)
        .itemInputs(
            inputItems
        )
        .addData("specialized", "smd_assembly")
        .itemOutputs(`${outputCount}x gtceu:advanced_smd_${output}`)
        .inputFluids("#forge:polybenzimidazole 144")
        .duration(20 * 8)
        .EUt(7860);
    }

    smd("transistor", 32, ["2x gtceu:gallium_foil", "1x gtceu:kyanite_dust", "2x gtceu:fine_tantalum_wire"])
    smd("resistor", 32, ["1x gtceu:carbon_dust", "2x gtceu:kyanite_dust", "1x gtceu:fine_tantalum_wire"])
    smd("capacitor", 32, ["1x gtceu:tantalum_foil", "2x gtceu:silicone_rubber_foil", "1x gtceu:kyanite_dust"])
    smd("inductor", 32, ["2x gtceu:nickel_zinc_ferrite_ring", "2x gtceu:fine_tantalum_wire", "1x gtceu:kyanite_dust"])
    smd("diode", 32, ["1x gtceu:gallium_arsenide_dust", "16x gtceu:fine_platinum_wire", "1x gtceu:kyanite_dust"])

    advanced_smd("transistor", 24, ["gtceu:vanadium_gallium_foil", "6x gtceu:fine_hssg_wire"])
    advanced_smd("resistor", 24, ["gtceu:graphene_plate", "3x gtceu:fine_platinum_wire"])
    advanced_smd("capacitor", 32, ["2x gtceu:polybenzimidazole_foil", "gtceu:hsss_foil"])
    advanced_smd("diode", 64, ["gtceu:indium_gallium_phosphide_dust", "8x gtceu:fine_niobium_titanium_wire"])
    advanced_smd("inductor", 24, ["gtceu:hsse_ring", "4x gtceu:fine_palladium_wire"])
})
