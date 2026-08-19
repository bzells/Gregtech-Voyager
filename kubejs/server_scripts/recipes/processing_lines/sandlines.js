import { recipe_centrifuge, recipe_macerator } from "../../00_util/recipeUtils"

ServerEvents.recipes((event) => {
    /**
     *
     * @param {*} circuit
     * @param {*} ns
     * @param {*} itemOutput
     * @param {*} cntI
     * @param {*} fluidOutput
     * @param {*} cntF
     * @param {*} time
     * @param {*} eut
     * @param {*} dimension
     */
    function atm_collect(circuit, ns, itemOutput, cntI, fluidOutput, cntF, time, eut, dimension) {
        event.recipes.gtceu
            .atmospheric_collector("kubejs:atmospheric_collector_" + itemOutput + "_circuit_" + circuit)
            .itemOutputs(`${cntI}x ${ns}:${itemOutput}`)
            .outputFluids(`${fluidOutput} ${cntF}`)
            .duration(20 * time)
            .circuit(circuit)
            .EUt(eut)
            .dimension(dimension)
    }

    // mars sand

    // venus sand

    global.recipe_macerator(event, "gtceu:venus_sand_dust", "ad_astra:venus_sand", 100, 32)
    atm_collect(9, "gtceu", "venus_sand_dust", 256, "gtceu:venus_air", 50000, 50, 2000, "ad_astra:venus")
    atm_collect(10, "gtceu", "venus_sand_dust", 64, "gtceu:liquid_venus_air", 50000, 75, 2000, "ad_astra:venus")
    global.recipe_centrifuge(
        event,
        "venus_sand",
        "15x gtceu:venus_sand_dust",
        [],
        ["3x gtceu:basalt_dust", "2x gtceu:titanium_dust", "gtceu:calorite_dust", "6x gtceu:inert_sulfur_dust"],
        "gtceu:sulfuric_acid 250",
        60,
        1024
    )
})
