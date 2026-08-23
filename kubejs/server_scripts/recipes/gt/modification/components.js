ServerEvents.recipes((event) => {
    /**
     *
     * @param {*} output
     * @param {*} ns
     * @param {*} itemInputs
     * @param {*} fluidInputs
     * @param {*} seconds
     * @param {*} eut
     * @param {*} [circuit]
     */
    function assembler(output, ns, itemInputs, fluidInputs, seconds, eut, circuit) {
        if (circuit) {
            event.recipes.gtceu
                .assembler(`kubejs:${output}`)
                .itemInputs(itemInputs)
                // .notConsumable('kubejs:lv_technician_helper')
                .itemOutputs(`${ns}:${output}`)
                .inputFluids(`${fluidInputs}`)
                .circuit(circuit)
                .duration(seconds * 20)
                .EUt(eut)
        } else {
            event.recipes.gtceu
                .assembler(`kubejs:${output}`)
                .itemInputs(itemInputs)
                // .notConsumable('kubejs:lv_technician_helper')
                .itemOutputs(`${ns}:${output}`)
                .inputFluids(`${fluidInputs}`)
                .duration(seconds * 20)
                .EUt(eut)
        }
    }
    /**
     *
     * @param {*} output
     * @param {*} ns
     * @param {*} itemInputs
     * @param {*} fluidInputs
     * @param {*} seconds
     * @param {*} eut
     * @param {*} [circuit]
     */
    function assembler2(output, ns, itemInputs, fluidInputs, seconds, eut, circuit) {
        if (circuit) {
            event.recipes.gtceu
                .assembler(`kubejs:${output}2`)
                .itemInputs(itemInputs)
                // .notConsumable('kubejs:lv_technician_helper')
                .itemOutputs(`${ns}:${output}`)
                .inputFluids(`${fluidInputs}`)
                .circuit(circuit)
                .duration(seconds * 20)
                .EUt(eut)
        } else {
            event.recipes.gtceu
                .assembler(`kubejs:${output}2`)
                .itemInputs(itemInputs)
                // .notConsumable('kubejs:lv_technician_helper')
                .itemOutputs(`${ns}:${output}`)
                .inputFluids(`${fluidInputs}`)
                .duration(seconds * 20)
                .EUt(eut)
        }
    }

    const tier_mapping = {
        iv: {
            main_mat: "tungsten_steel",
            wire_mat_1: "graphene",
            cable_mat: "tungsten",
            magnet_mat: "neodymium",
            fluid: "component_polymer",
            rubber1: "silicone_rubber",
            rubber2: "styrene_butadiene_rubber",
            second_mat: "iridium",
            supercon: "samarium_iron_arsenic_oxide",
            precious: "quantum_star",
            tierVoltage: "iv"
        }
    }

    /**
     *
     * @param {*} tier
     */
    function motor(tier) {
        // @ts-ignore
        const { main_mat, wire_mat_1, cable_mat, magnet_mat, fluid } = tier_mapping[tier]

        assembler(
            `${tier}_electric_motor`,
            "gtceu",
            [`2x gtceu:${cable_mat}_double_cable`, `2x gtceu:${main_mat}_rod`, `gtceu:magnetic_${magnet_mat}_rod`, `4x gtceu:${wire_mat_1}_quadruple_wire`],
            `gtceu:${fluid} 500`,
            5,
            480
        )
    }

    /**
     * @param {string} tier
     */
    function pump(tier) {
        // @ts-ignore
        const { main_mat, cable_mat, fluid, rubber1, rubber2, tierVoltage } = tier_mapping[tier]

        assembler(
            `${tier}_electric_pump`,
            "gtceu",
            [
                `1x gtceu:${cable_mat}_single_cable`,
                `1x gtceu:${main_mat}_normal_fluid_pipe`,
                `1x gtceu:${main_mat}_screw`,
                `1x gtceu:${main_mat}_rotor`,
                `gtceu:${rubber1}_ring`,
                `gtceu:${tierVoltage}_electric_motor`
            ],
            `gtceu:${fluid} 750`,
            5,
            480
        )
        assembler2(
            `${tier}_electric_pump`,
            "gtceu",
            [
                `1x gtceu:${cable_mat}_single_cable`,
                `1x gtceu:${main_mat}_normal_fluid_pipe`,
                `1x gtceu:${main_mat}_screw`,
                `1x gtceu:${main_mat}_rotor`,
                `gtceu:${rubber2}_ring`,
                `gtceu:${tierVoltage}_electric_motor`
            ],
            `gtceu:${fluid} 750`,
            5,
            480
        )
    }

    // @ts-ignore
    function conveyor(tier) {
        // @ts-ignore
        const { cable_mat, rubber1, rubber2, tierVoltage } = tier_mapping[tier]

        assembler(`${tier}_conveyor_module`, "gtceu", [`1x gtceu:${cable_mat}_single_cable`, `2x gtceu:${tierVoltage}_electric_motor`], `gtceu:${rubber1} 864`, 5, 480, 1)
        assembler2(`${tier}_conveyor_module`, "gtceu", [`1x gtceu:${cable_mat}_single_cable`, `2x gtceu:${tierVoltage}_electric_motor`], `gtceu:${rubber2} 432`, 5, 480, 1)
    }

    // @ts-ignore
    function piston(tier) {
        // @ts-ignore
        const { main_mat, cable_mat, fluid, tierVoltage } = tier_mapping[tier]

        assembler(
            `${tier}_electric_piston`,
            "gtceu",
            [`2x gtceu:${cable_mat}_single_cable`, `2x gtceu:${main_mat}_rod`, `3x gtceu:${main_mat}_plate`, `gtceu:small_${main_mat}_gear`, `gtceu:${tierVoltage}_electric_motor`],
            `gtceu:${fluid} 750`,
            5,
            480
        )
    }

    // @ts-ignore
    function robot_arm(tier) {
        // @ts-ignore
        const { main_mat, cable_mat, fluid, tierVoltage } = tier_mapping[tier]

        assembler(
            `${tier}_robot_arm`,
            "gtceu",
            [`3x gtceu:${cable_mat}_single_cable`, `2x gtceu:${main_mat}_rod`, `2x gtceu:${tierVoltage}_electric_motor`, `gtceu:${tierVoltage}_electric_piston`, `#gtceu:circuits/${tierVoltage}`],
            `gtceu:${fluid} 1000`,
            5,
            480
        )
    }

    // @ts-ignore
    function field_generator(tier) {
        // @ts-ignore
        const { main_mat, fluid, tierVoltage, precious, supercon } = tier_mapping[tier]

        assembler(
            `${tier}_field_generator`,
            "gtceu",
            [`1x gtceu:${precious}`, `2x gtceu:double_${main_mat}_plate`, `2x #gtceu:circuits/${tierVoltage}`, `4x gtceu:${supercon}_quadruple_wire`],
            `gtceu:${fluid} 1250`,
            5,
            480
        )
    }

    // @ts-ignore
    function emitter(tier) {
        // @ts-ignore
        const { cable_mat, fluid, tierVoltage, precious, second_mat } = tier_mapping[tier]

        assembler(
            `${tier}_emitter`,
            "gtceu",
            [`4x gtceu:${second_mat}_rod`, `2x gtceu:${cable_mat}_single_cable`, `2x #gtceu:circuits/${tierVoltage}`, `gtceu:${precious}`],
            `gtceu:${fluid} 750`,
            5,
            480,
            1
        )
    }

    // @ts-ignore
    function sensor(tier) {
        // @ts-ignore
        const { main_mat, fluid, tierVoltage, precious, second_mat } = tier_mapping[tier]

        assembler(`${tier}_sensor`, "gtceu", [`gtceu:${second_mat}_rod`, `4x gtceu:${main_mat}_plate`, `#gtceu:circuits/${tierVoltage}`, `gtceu:${precious}`], `gtceu:${fluid} 750`, 5, 480)
    }

    // @ts-ignore
    function removeTieredComponents(tier) {
        const pre = "gtceu:" + tier

        event.remove({
            output: [
                `${pre}_electric_motor`,
                `${pre}_electric_pump`,
                `${pre}_conveyor_module`,
                `${pre}_electric_piston`,
                `${pre}_robot_arm`,
                `${pre}_sensor`,
                `${pre}_emitter`,
                `${pre}_field_generator`
            ]
        })
    }

    removeTieredComponents("iv")

    motor("iv")
    pump("iv")
    conveyor("iv")
    piston("iv")
    robot_arm("iv")
    field_generator("iv")
    emitter("iv")
    sensor("iv")

    // @ts-ignore

    const components = ["electric_motor", "electric_pump", "conveyor_module", "electric_piston", "robot_arm"]

    components.forEach((component) => event.replaceInput({ output: `gtceu:luv_${component}` }, Fluid.of("gtceu:lubricant"), Fluid.of("voyagercore:high_stress_lubricant")))

    event.replaceInput({output: "gtceu:ev_electric_motor"},
        "gtceu:kanthal_double_wire", "gtceu:kanthal_quadruple_wire"
    )
    // tiers.forEach(tier => removeTieredComponents(tier));
})
