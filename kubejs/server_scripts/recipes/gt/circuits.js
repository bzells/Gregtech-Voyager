ServerEvents.recipes(event => {

    // event.remove({ output: "gtceu:nano_processor" }) // these didn't remove anything...?
    // event.remove({ output: "gtceu:nano_processor_assembly" })
    // event.remove({ output: "gtceu:nano_processor_computer" })
    // event.remove({ output: "gtceu:nano_processor_mainframe" })
    // event.remove({ output: "gtceu:micro_processor_mainframe" })

    // event.remove({ type: "gtceu:circuit_assembler" })

    event.recipes.gtceu.circuit_assembler("kubejs:ev_t1")
        .itemInputs("gtceu:plastic_printed_circuit_board", "2x gtceu:micro_processor_assembly", "4x #gtceu:diodes", "4x gtceu:ram_chip", "16x gtceu:fine_fluxed_electrum_wire", "32x gtceu:fluxed_cobalt_electrum_bolt")
        .itemOutputs("gtceu:micro_processor_computer")
        .inputFluids("#forge:soldering_alloy 144")
        .duration(20*40) 
        .EUt(120)
        .cleanroom(CleanroomType.CLEANROOM)

    /**
         * Creates a circuit assembler recipe
         * @param {string} name - recipe name
         * @param {string} output - Output item (full item name + count)
         * @param {'low'|'mid'|'high'} component_count - Preset amount of components
         * @param {string} circuit_board - Circuit board item
         * @param {string[]} component_list - Array of 3 components (SMDs or previous circuit)
         * @param {string} chip - Chip type (ram, nand, etc)
         * @param {'low'|'mid'|'high'} chip_multiplier - Multiplier based on component count
         * @param {string} wire_material - Material for fine wire (do not use gtceu: before item name)
         * @param {boolean} is_mainframe - If true, uses mainframe recipe
         * @param {boolean} has_prev_circuit - If true, first component is a circuit
         * @param {string} frame_material - Only used if is_mainframe is true (do not use gtceu: before item name)
         * @param {number} eut - EU/t
         * @param {number} duration - Time in seconds
 */
    function circuit_assembler_recipe(name, output, component_count, circuit_board, component_list, chip, chip_multiplier, wire_material, is_mainframe, has_prev_circuit, frame_material
        , eut, duration
    )
    {
        event.remove({output: 'gtceu:' + name})

        let componentMultiplier = 1;
        let fluidMultiplier = 72;
        let chip_mult = 1;
        let wire_multiplier = 8;
        switch (component_count) {
            case 'low':
                componentMultiplier *= 8;
                break;
            case 'mid':
                componentMultiplier *= 16;
                fluidMultiplier *= 2;
                wire_multiplier *= 2;
                break;
            case 'high':
                componentMultiplier *= 32;
                fluidMultiplier *= 4;
                wire_multiplier *= 4;
                break;
            default:
                break;
        }
        switch (chip_multiplier) {
            case 'low':

                break;
            case 'mid':
                chip_mult *= 8;
                break;
            case 'high':
                chip_mult *= 32;
                break;
            default:
                break;
        }

        if(!is_mainframe && !has_prev_circuit)
        {
            event.recipes.gtceu.circuit_assembler("kubejs:" + name)
            .itemInputs(
                circuit_board,
                componentMultiplier + 'x ' + component_list[0],
                componentMultiplier + 'x ' + component_list[1],
                componentMultiplier + 'x ' + component_list[2],
                chip_mult + 'x ' + chip,
                wire_multiplier + 'x gtceu:fine_' + wire_material + '_wire'

            )
            .itemOutputs(output)
            .inputFluids("#forge:soldering_alloy " + fluidMultiplier)
            .duration(duration * 20) 
            .EUt(eut)
            .cleanroom(CleanroomType.CLEANROOM)
        }
        else if(is_mainframe)
        {
            event.recipes.gtceu.circuit_assembler("kubejs:" + name)
            .itemInputs(
                '2x gtceu:' + frame_material + '_frame',
                '2x ' + component_list[0],
                componentMultiplier + 'x ' + component_list[1],
                componentMultiplier + 'x ' + component_list[2],
                chip_mult + 'x ' + chip,
                wire_multiplier + 'x gtceu:' + wire_material + '_single_wire'

            )
            .itemOutputs(output)
            .inputFluids("#forge:soldering_alloy " + fluidMultiplier)
            .duration(duration * 20) 
            .EUt(eut)
            .cleanroom(CleanroomType.CLEANROOM)
        }
        else if(!is_mainframe && has_prev_circuit)
        {
            event.recipes.gtceu.circuit_assembler("kubejs:" + name)
            .itemInputs(
                circuit_board,
                '2x ' + component_list[0],
                componentMultiplier + 'x ' + component_list[1],
                componentMultiplier + 'x ' + component_list[2],
                chip_mult + 'x ' + chip,
                wire_multiplier + 'x gtceu:fine_' + wire_material + '_wire'

            )
            .itemOutputs(output)
            .inputFluids("#forge:soldering_alloy " + fluidMultiplier)
            .duration(duration * 20) 
            .EUt(eut)
            .cleanroom(CleanroomType.CLEANROOM)
        }
        
    }



    //
    circuit_assembler_recipe('micro_processor_mainframe','gtceu:micro_processor_mainframe', "mid", 
        '', 
        ['gtceu:micro_processor_computer', '#gtceu:inductors', '#gtceu:capacitors'],
        'gtceu:ram_chip', 'high', 'fluxed_cobalt_electrum',
        true, 
        true, 'fluxed_electrum', 
        480, 40
    )

    // epoxy board circuits
    circuit_assembler_recipe('nano_processor', '2x gtceu:nano_processor', "low", 
        'gtceu:epoxy_printed_circuit_board', 
        ['gtceu:smd_resistor', 'gtceu:smd_capacitor', 'gtceu:smd_transistor'],
        'gtceu:nano_cpu_chip', 'low', 'fluxed_cobalt_electrum', 
        false, false, '', 
        600, 10
    )

    circuit_assembler_recipe('nano_processor_assembly','2x gtceu:nano_processor_assembly', "low", 
        'gtceu:epoxy_printed_circuit_board', 
        ['gtceu:nano_processor', 'gtceu:smd_inductor', 'gtceu:smd_capacitor'],
        'gtceu:ram_chip', 'mid', 'fluxed_cobalt_electrum',
        false, 
        true, '', 
        600, 10
    )

    circuit_assembler_recipe('nano_processor_computer', 'gtceu:nano_processor_computer', "mid", 
        'gtceu:epoxy_printed_circuit_board', 
        ['gtceu:nano_processor_assembly', 'gtceu:smd_diode', 'gtceu:ram_chip'],
        'gtceu:nor_memory_chip', 'mid', 'refined_fluxed_electrum',
        false, 
        true, '', 
        600, 20
    )

    circuit_assembler_recipe('nano_processor_mainframe', 'gtceu:nano_processor_mainframe', "high", 
        '', 
        ['gtceu:nano_processor_computer', 'gtceu:smd_inductor', 'gtceu:smd_capacitor'],
        'gtceu:ram_chip', 'high', 'refined_fluxed_electrum',
        true, 
        true, 'desh', 
        1200, 40
    )

    circuit_assembler_recipe('quantum_processor', '2x gtceu:quantum_processor', 'low', 'gtceu:fiber_reinforced_printed_circuit_board',
        ['gtceu:nano_cpu_chip', 'gtceu:smd_capacitor', 'gtceu:smd_transistor'], 'gtceu:qbit_cpu_chip', 'low', 'refined_fluxed_electrum', false,
        false, '', 2400, 10
    )
    circuit_assembler_recipe('quantum_processor_assembly', '2x gtceu:quantum_processor_assembly', 'mid', 'gtceu:fiber_reinforced_printed_circuit_board',
        ['gtceu:quantum_processor','gtceu:smd_capacitor', 'gtceu:smd_inductor'], 'gtceu:ram_chip', 'mid','refined_fluxed_electrum', false, true, '',
        2400, 20
    )
    circuit_assembler_recipe('quantum_processor_computer', 'gtceu:quantum_processor_computer', 'mid', 'gtceu:fiber_reinforced_printed_circuit_board',
        ['gtceu:quantum_processor_assembly', 'gtceu:smd_diode', 'gtceu:ram_chip'], 'gtceu:nor_memory_chip', 'mid', 'titanite', false, true, '',
        2400, 30
    )
    circuit_assembler_recipe('quantum_processor_mainframe', 'gtceu:quantum_processor_mainframe', 'high', '',
        ['gtceu:quantum_processor_computer', 'gtceu:smd_capacitor', 'gtceu:smd_inductor'], 'gtceu:qbit_cpu_chip', 'high', 'titanite', true, true, 'titanite_alloy',
        7680, 60
    )

});