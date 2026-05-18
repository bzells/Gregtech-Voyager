ServerEvents.recipes(event => {

    // event.remove({ output: "gtceu:nano_processor" }) // these didn't remove anything...?
    // event.remove({ output: "gtceu:nano_processor_assembly" })
    // event.remove({ output: "gtceu:nano_processor_computer" })
    // event.remove({ output: "gtceu:nano_processor_mainframe" })
    // event.remove({ output: "gtceu:micro_processor_mainframe" })

    // event.remove({ type: "gtceu:circuit_assembler" })

    const tiers = ['ulv', 'lv','mv','hv','ev','iv','luv','zpm','uv','uhv','uev','uiv','max'];

    function venus_assembly_research(output, namespace, inputs, fluidInputs, eut, time, scanItem)
    {
        event.recipes.gtceu.assembly_line(`gtceu:${output}`)
            .itemInputs(inputs)
            .inputFluids(fluidInputs)
            .itemOutputs(`${namespace}:${output}`)
            ["scannerResearch(java.util.function.UnaryOperator)"](
                researchRecipeBuilder => researchRecipeBuilder
                    .researchStack(Item.of(scanItem))
                    .duration(time * 20 * 2)
                    .EUt(eut/2)
                )
            .duration(time * 20)
            .EUt(eut);
    }

    venus_assembly_research('light_refractor', 'kubejs', ['16x gtceu:nether_star_lens', '16x gtceu:exquisite_titanichite_gem', '16x gtceu:exquisite_opal_gem', '8x gtceu:double_calorite_plate', '8x #gtceu:circuits/luv', '64x gtceu:fine_titanite_alloy_wire'],
        ['gtceu:soldering_alloy 16000', 'gtceu:polybenzimidazole 8000'], 8000 * 4, 120, 'kubejs:eroded_light_refractor'
    )
    venus_assembly_research('teus_beam_block', 'kubejs', ['4x kubejs:light_refractor', '2x gtceu:titanite_alloy_frame', '64x gtceu:double_calorite_plate', '8x gtceu:quantum_star', '2x gtceu:nether_star_lens', '16x #gtceu:circuits/luv', '64x gtceu:fine_titanite_alloy_wire'],
        ['gtceu:lunarium 16000' ,'gtceu:radon 16000', 'gtceu:polybenzimidazole 16000'], 8000 * 4, 600, 'kubejs:ruined_beam_block'
    )
    venus_assembly_research('beam_of_teus', 'gtceu', ['4x gtceu:luv_laser_engraver', '4x #gtceu:circuits/zpm', '4x #gtceu:circuits/luv', '16x gtceu:iv_field_generator', '8x gtceu:lunarium_block', '64x gtceu:fine_titanite_alloy_wire'],
        ['gtceu:titanite 16000' ,'gtceu:vanadium_gallium 4000', 'gtceu:polybenzimidazole 4000'], 8000 * 4, 120, 'kubejs:teus_beam_block'
    )


});