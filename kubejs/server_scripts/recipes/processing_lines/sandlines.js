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

    // moon sandline


    // event, inputItem, outputItem, eut, time
    global.recipe_macerator(event,
        "ad_astra:moon_sand",
        "4x gtceu:moon_sand_dust",
        120,
        20
    )

    event.recipes.gtceu.sifter("kubejs:moon_sand_sifting")
    .itemInputs("10x gtceu:moon_sand_dust")
    .itemOutputs(
        ["4x gtceu:moon_sand_dust", "2x kubejs:helium_rich_rubble", "2x kubejs:ore_rich_rubble", "4x gtceu:soft_moon_sand_dust"]
    )
    .EUt(120)
    .duration(20 * 20)
    

    global.recipe_centrifuge(
        event,
        "moon_sand_helium",
        "1x kubejs:helium_rich_rubble",
        [],
        ["gtceu:moon_sand_dust"],
        ["gtceu:helium 1000","gtceu:helium_3 250"],
        30,
        480
    )

    global.recipe_chem_plant(
        event,
        "helium_rubble",
        ["1x kubejs:helium_rich_rubble"],
        [],
        ["1x gtceu:moon_sand_dust"],
        ["gtceu:helium 1000","gtceu:helium_3 250"],
        30,
        480,
        3600,
        "chemist"
    )

    event.recipes.gtceu.sifter("kubejs:moon_sand_ore_sifting")
    .itemInputs("1x kubejs:ore_rich_rubble")
    .itemOutputs(
        ["1x gtceu:moon_sand_dust", "1x gtceu:purified_ilmenite_ore", "1x gtceu:purified_bastnasite_ore", "1x gtceu:purified_glunite_ore"]
    )
    .EUt(1920)
    .duration(20 * 60)
    

    global.recipe_chem_plant(
        event,
        "soft_sand_proc",
        ["4x gtceu:soft_moon_sand_dust"],
        ["gtceu:glowstone 576"],
        ["3x gtceu:soft_moon_sand_dust", "2x gtceu:purified_electrotine_ore"],
        ["gtceu:helium 1000"],
        60,
        7860,
        4500,
        "chemist"
    )
})
