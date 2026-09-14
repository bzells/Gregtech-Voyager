ServerEvents.recipes((event) => {
    /**
     *
     * @param {*} alloy
     * @param {*} amount
     * @param {*} inputItems
     * @param {*} fluidOut
     * @param {*} fluidIn
     * @param {*} duration
     * @param {*} eut
     * @param {*} temp
     * @param {*} helpertier
     * @param {*} circuit
     */
    function abs(alloy, amount, inputItems, fluidOut, fluidIn, duration, eut, temp, helpertier, circuit) {
        event.recipes.gtceu
            .alloy_blast_smelter(`kubejs:${alloy}`)
            .itemInputs(inputItems)
            .outputFluids(`${fluidOut} ${amount}`)
            .duration(duration * 20)
            .EUt(eut)
            .blastFurnaceTemp(temp)
            .circuit(circuit)

        event.recipes.gtceu
            .alloy_blast_smelter(`kubejs:${alloy}_fluid`)
            .itemInputs(inputItems)
            .inputFluids(`${fluidIn} ${Math.floor(amount / 2.88)}`)
            .outputFluids(`${fluidOut} ${amount}`)
            .duration(duration * 20 * 0.66)
            .EUt(eut)
            .blastFurnaceTemp(temp)
            .circuit(circuit + 1)

        event.recipes.gtceu
            .vacuum_freezer(`kubejs:${alloy}_vacuum_freezer`)
            .inputFluids(`gtceu:molten_${alloy} 144`)
            .notConsumable(`gtceu:ingot_casting_mold`)
            .itemOutputs(`gtceu:${alloy}_ingot`)
            .duration((duration * 20 * 0.5) / (amount / 144))
            .EUt(eut / 2)
    }

    /**
     *
     * @param {*} alloy
     * @param {*} amount
     * @param {*} inputItems
     * @param {*} fluidOut
     * @param {*} fluidIn
     * @param {*} duration
     * @param {*} eut
     * @param {*} temp
     * @param {*} helpertier
     * @param {*} circuit
     */
    function abs_strict(alloy, amount, inputItems, fluidOut, fluidIn, duration, eut, temp, helpertier, circuit) {
        event.recipes.gtceu
            .alloy_blast_smelter(`kubejs:${alloy}`)
            .itemInputs(inputItems)
            .inputFluids(`${fluidIn} ${Math.floor(amount / 2.88)}`)
            .outputFluids(`${fluidOut} ${amount}`)
            .duration(duration * 20)
            .EUt(eut)
            .blastFurnaceTemp(temp)
            .circuit(circuit + 1)

        event.recipes.gtceu
            .vacuum_freezer(`kubejs:${alloy}_vacuum_freezer`)
            .inputFluids(`gtceu:molten_${alloy} 144`)
            .notConsumable(`gtceu:ingot_casting_mold`)
            .itemOutputs(`gtceu:${alloy}_ingot`)
            .duration((duration * 20 * 0.5) / (amount / 144))
            .EUt(eut / 2)
    }
    // ????????????

    abs(
        "titanex-594-hta",
        14 * 144,
        ["5x gtceu:titanite_dust", "3x gtceu:graphene_dust", "2x gtceu:palladium_dust", "2x gtceu:ostrum_dust", "2x gtceu:tungsten_dust"],
        "gtceu:molten_titanex-594-hta",
        "gtceu:argon",
        14 * 33,
        7680,
        4000,
        "ev",
        0
    )
    abs_strict(
        "titanex-879-htb",
        17 * 144,
        ["7x gtceu:titanite_alloy_dust", "5x gtceu:iridium_dust", "5x gtceu:desh_dust", "2x gtceu:lunarium_dust", "2x gtceu:lanthanum_dust"],
        "gtceu:molten_titanex-879-htb",
        "kubejs:high_temp_binding_agent_s",
        17 * 33,
        7680,
        5000,
        "iv",
        0
    )
    abs_strict(
        "aluminex_202_a",
        28 * 144,
        ["12x gtceu:aluminium_dust", "6x gtceu:zinc_dust", "4x gtceu:cobalt_brass_dust", "3x gtceu:incoloy_ma_956_dust", "3x gtceu:indium_dust"],
        "gtceu:molten_aluminex_202_a",
        "kubejs:high_temp_binding_agent_s",
        28 * 22,
        7680 * 4,
        4900,
        "iv",
        0
    )
    abs_strict(
        "martian-composite",
        31 * 144,
        ["12x gtceu:ostrum_dust", "8x gtceu:titanex-901-htc_dust", "5x gtceu:lunarium_dust", "3x gtceu:tungsten_dust", "3x gtceu:gold_dust"],
        "gtceu:molten_martian-composite",
        "kubejs:high_temp_binding_agent_s",
        45 * 31,
        7680,
        5000,
        "ev",
        1
    )
    abs_strict('titanex-901-htc', 18 * 144, ['8x gtceu:hsss_dust', '4x gtceu:titanex-594-hta_dust', '3x gtceu:stellite_100_dust', '3x gtceu:titanex-879-htb_dust'], 
        'gtceu:molten_titanex-901-htc', 'kubejs:high_temp_binding_agent_s', 18 * 50, 7680, 5100, 'ev', 1)
    

})
