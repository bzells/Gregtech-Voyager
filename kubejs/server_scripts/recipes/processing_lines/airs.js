ServerEvents.recipes((event) => {
    /**
     *
     * @param {*} input
     * @param {*} ns
     * @param {*} amt
     * @param {*} fluidOutputs
     * @param {*} itemOutput
     * @param {*} eut
     * @param {*} seconds
     */
    function distill(input, ns, amt, fluidOutputs, itemOutput, eut, seconds) {
        event.recipes.gtceu
            .distillation_tower(`kubejs:${input}_distilling`) // recipe ID
            .inputFluids(`${ns}:${input} ${amt}`)
            .outputFluids(fluidOutputs)
            .itemOutputs(itemOutput)
            .duration(seconds * 20) // in ticks
            .EUt(eut)
    }

    /**
     *
     * @param {*} input
     * @param {*} ns
     * @param {*} amt
     * @param {*} fluidOutputs
     * @param {*} eut
     * @param {*} seconds
     */
    function freeze(input, ns, amt, fluidOutputs, eut, seconds) {
        event.recipes.gtceu
            .vacuum_freezer(`kubejs:${input}_vacuum_freezer`) // recipe ID
            .inputFluids(`${ns}:${input} ${amt}`)
            .outputFluids(fluidOutputs)
            .duration(seconds * 20) // in ticks
            .EUt(eut)
    }
    function gas_collect(circuit, dimension, gas, eut, time)
    {
        event.recipes.gtceu
        .gas_collector(gas.split(":")[1].split(" ")[0] + "_gas_collection")
        .outputFluids(gas)
        .circuit(circuit)
        .dimension(dimension)
        .EUt(eut)
        .duration(time * 20)
    }

    gas_collect(1, "ad_astra:mars", "gtceu:martian_air 10000", 1920, 5)

    freeze("martian_air", "gtceu", 4000, "gtceu:liquid_martian_air 4000", 7680, 4)
    distill(
        "liquid_martian_air",
        "gtceu",
        50000,
        ["gtceu:carbon_dioxide 95000", "gtceu:nitrogen 12000", "gtceu:argon 10000", "gtceu:oxygen 5000", "gtceu:krypton neon 1000", "gtceu:xenon 250"],
        "64x gtceu:martian_sand_dust",
        1920,
        50
    )
})
