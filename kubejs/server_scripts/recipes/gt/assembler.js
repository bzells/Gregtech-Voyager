ServerEvents.recipes((event) => {
    // comp arrays
    event.recipes.gtceu
        .assembler("kubejs:lv_helper_computation_array")
        .itemInputs("3x #gtceu:circuits/lv", "1x #gtceu:circuits/ulv", "1x gtceu:steel_plate", "4x gtceu:steel_bolt", "16x gtceu:fine_tin_silver_alloy_wire")
        .itemOutputs("1x kubejs:lv_helper_computation_array")
        .inputFluids("gtceu:tin 250")
        .duration(1200)
        .EUt(30)

    event.recipes.gtceu
        .assembler("kubejs:mv_helper_computation_array")
        .itemInputs("3x #gtceu:circuits/mv", "1x #gtceu:circuits/lv", "1x gtceu:aluminium_plate", "4x gtceu:aluminium_bolt", "16x gtceu:fine_fluxed_electrum_wire")
        .itemOutputs("1x kubejs:mv_helper_computation_array")
        .inputFluids("gtceu:tin 250")
        .duration(1200)
        .EUt(120)

    event.recipes.gtceu
        .assembler("kubejs:hv_helper_computation_array")
        .itemInputs("3x #gtceu:circuits/hv", "1x #gtceu:circuits/mv", "1x gtceu:stainless_steel_plate", "4x gtceu:stainless_steel_bolt", "16x gtceu:fine_fluxed_cobalt_electrum_wire")
        .itemOutputs("1x kubejs:hv_helper_computation_array")
        .inputFluids("gtceu:soldering_alloy 1000")
        .duration(1200)
        .EUt(480)

    event.recipes.gtceu
        .assembler("kubejs:ev_helper_computation_array")
        .itemInputs("3x #gtceu:circuits/ev", "1x #gtceu:circuits/hv", "1x gtceu:titanium_plate", "4x gtceu:titanium_bolt", "16x gtceu:fine_refined_fluxed_electrum_wire")
        .itemOutputs("1x kubejs:ev_helper_computation_array")
        .inputFluids("gtceu:soldering_alloy 1000")
        .duration(1200)
        .EUt(1980)

    // diodes


    event.recipes.gtceu
        .assembler("kubejs:diode_fcw_wafer")
        .itemInputs("4x gtceu:fine_copper_wire", "1x gtceu:silicon_wafer", "2x gtceu:metallic_mica_foil")
        .itemOutputs("2x gtceu:diode")
        .inputFluids("#forge:polyethylene 144")
        .duration(350)
        .EUt(30)

    event.recipes.gtceu
        .assembler("kubejs:diode_fcw_gala")
        .itemInputs("4x gtceu:fine_copper_wire", "1x gtceu:small_gallium_arsenide_dust", "2x gtceu:metallic_mica_foil")
        .itemOutputs("1x gtceu:diode")
        .inputFluids("#forge:glass 144")
        .duration(350)
        .EUt(30)

    event.recipes.gtceu
        .assembler("kubejs:diode_fcw_galp")
        .itemInputs("4x gtceu:fine_copper_wire", "1x gtceu:small_gallium_arsenide_dust", "2x gtceu:metallic_mica_foil")
        .itemOutputs("2x gtceu:diode")
        .inputFluids("#forge:polyethylene 144")
        .duration(350)
        .EUt(30)

    event.recipes.gtceu
        .assembler("kubejs:diode_facw_gala_g")
        .itemInputs("4x gtceu:fine_annealed_copper_wire", "1x gtceu:small_gallium_arsenide_dust", "2x gtceu:metallic_mica_foil")
        .itemOutputs("2x gtceu:diode")
        .inputFluids("#forge:glass 144")
        .duration(350)
        .EUt(30)

    event.recipes.gtceu
        .assembler("kubejs:diode_facw_gala_p")
        .itemInputs("4x gtceu:fine_annealed_copper_wire", "1x gtceu:small_gallium_arsenide_dust", "2x gtceu:metallic_mica_foil")
        .itemOutputs("4x gtceu:diode")
        .inputFluids("#forge:polyethylene 144")
        .duration(350)
        .EUt(30)

    event.recipes.gtceu
        .assembler("kubejs:diode_facw_gala_wafer")
        .itemInputs("4x gtceu:fine_annealed_copper_wire", "1x gtceu:silicon_wafer", "2x gtceu:metallic_mica_foil")
        .itemOutputs("4x gtceu:diode")
        .inputFluids("#forge:polyethylene 144")
        .duration(350)
        .EUt(30)

    // mv components

    event.recipes.gtceu
        .assembler("kubejs:transistor")
        .itemInputs("6x gtceu:fine_tin_wire", "1x gtceu:silicon_plate", "4x gtceu:metallic_mica_foil")
        .itemOutputs("4x gtceu:transistor")
        .inputFluids("#forge:polyethylene 144")
        .duration(160)
        .EUt(120)


    // smds

    event.remove({ output: "gtceu:smd_transistor" })
    event.remove({ output: "gtceu:smd_resistor" })
    event.remove({ output: "gtceu:smd_capacitor" })
    event.remove({ output: "gtceu:smd_diode" })
    event.remove({ output: "gtceu:smd_inductor" })

    // energy hatches

    // event.recipes.gtceu.assembler('kubejs:lv_energy_hatch')
    //     .itemInputs(
    //         '1x gtceu:lv_machine_hull',
    //         '1x gtceu:lv_voltage_coil',
    //         '32x gtceu:metallic_mica_foil',
    //         '2x gtceu:tin_silver_alloy_single_wire'
    //     )
    //     .itemOutputs('1x gtceu:lv_energy_input_hatch')
    //     .duration(200)
    //     .EUt(30);

    // event.recipes.gtceu.assembler('kubejs:mv_energy_hatch')
    //     .itemInputs(
    //         '1x gtceu:mv_machine_hull',
    //         '1x gtceu:mv_voltage_coil',
    //         '32x gtceu:metallic_mica_foil',
    //         '2x gtceu:fluxed_electrum_single_wire',
    //         '2x gtceu:ulpic_chip',
    //     )
    //     .itemOutputs('1x gtceu:mv_energy_input_hatch')
    //     .duration(200)
    //     .EUt(120);

    // event.recipes.gtceu.assembler('kubejs:mv_dynamo_hatch')
    //     .itemInputs(
    //         '1x gtceu:mv_machine_hull',
    //         '1x gtceu:mv_voltage_coil',
    //         '32x gtceu:metallic_mica_foil',
    //         '2x gtceu:fluxed_electrum_single_wire',
    //         '2x gtceu:ulpic_chip',
    //         '2x gtceu:copper_spring'
    //     )
    //     .itemOutputs('1x gtceu:mv_energy_output_hatch')
    //     .duration(200)
    //     .EUt(120);

    // event.recipes.gtceu.assembler('kubejs:hv_energy_hatch')
    //     .itemInputs(
    //         '1x gtceu:hv_machine_hull',
    //         '1x gtceu:hv_voltage_coil',
    //         '32x gtceu:metallic_mica_foil',
    //         '2x gtceu:fluxed_cobalt_electrum_single_wire'
    //     )
    //     .itemOutputs('1x gtceu:hv_energy_input_hatch')
    //     .inputFluids("gtceu:sodium_potassium 1000")
    //     .duration(200)
    //     .EUt(496);

    // event.recipes.gtceu.assembler('kubejs:hv_dynamo_hatch')
    //     .itemInputs(
    //         '1x gtceu:hv_machine_hull',
    //         '1x gtceu:hv_voltage_coil',
    //         '32x gtceu:metallic_mica_foil',
    //         '2x gtceu:fluxed_cobalt_electrum_single_wire',
    //         '1x gtceu:lpic_chip',
    //         '2x gtceu:copper_spring'
    //     )
    //     .itemOutputs('1x gtceu:hv_energy_output_hatch')
    //     .duration(200)
    //     .EUt(496);

    // event.recipes.gtceu.assembler('kubejs:lv_energy_hatch_helper')
    //     .itemInputs(
    //         '1x gtceu:lv_machine_hull',
    //         '1x gtceu:lv_voltage_coil',
    //         '16x gtceu:metallic_mica_foil',
    //         '1x gtceu:tin_silver_alloy_single_wire'
    //     )
    //     .circuit(32)
    //     .notConsumable('kubejs:lv_technician_helper')
    //     .itemOutputs('1x gtceu:lv_energy_input_hatch')
    //     .duration(100)
    //     .EUt(15);

    // circuits/boards

    event.remove({ output: "gtceu:phenolic_circuit_board" })

    event.recipes.gtceu
        .assembler("kubejs:phenolic_board")
        .itemInputs("1x gtceu:treated_wood_plate", "2x minecraft:paper")
        // .notConsumable('kubejs:lv_technician_helper')
        .inputFluids("gtceu:phenol 50")
        .itemOutputs("1x gtceu:phenolic_circuit_board")
        .duration(200)
        .EUt(30)

    event.recipes.gtceu
        .assembler("kubejs:phenolic_board_printed")
        .itemInputs("1x gtceu:phenolic_circuit_board", "8x gtceu:tin_silver_alloy_single_wire")
        // .notConsumable('kubejs:lv_technician_helper')
        .itemOutputs("1x gtceu:phenolic_printed_circuit_board")
        .duration(200)
        .EUt(30)

    //coils

event.recipes.gtceu.assembler('kubejs:cuprocoil')
    .itemInputs(
        '8x gtceu:cupronickel_double_wire',
        '8x gtceu:bronze_foil',
        '16x gtceu:metallic_mica_foil'
    )
    // .notConsumable('kubejs:lv_technician_helper')
    .itemOutputs('1x gtceu:cupronickel_coil_block')
    .inputFluids('#forge:tin_alloy 144')
    .duration(200)
    .EUt(30);

event.recipes.gtceu.assembler('kubejs:kanthalcoil')
    .itemInputs(
        '8x gtceu:kanthal_double_wire',
        '8x gtceu:aluminium_foil',
        '16x gtceu:metallic_mica_foil'
    )
    // .notConsumable('kubejs:lv_technician_helper')
    .itemOutputs('1x gtceu:kanthal_coil_block')
    .inputFluids('#forge:bronze 144')
    .duration(30*20)
    .EUt(120);

event.recipes.gtceu.assembler('kubejs:nichromecoil')
    .itemInputs(
        '8x gtceu:nichrome_double_wire',
        '8x gtceu:stainless_steel_foil',
        '16x gtceu:metallic_mica_foil'
    )
    // .notConsumable('kubejs:lv_technician_helper')
    .itemOutputs('1x gtceu:nichrome_coil_block')
    .inputFluids('#forge:aluminium 144')
    .duration(30*20)
    .EUt(480);

event.recipes.gtceu.assembler('kubejs:deshcoil')
    .itemInputs(
        '8x gtceu:desh_double_wire',
        '8x gtceu:tungsten_carbide_foil',
        '32x gtceu:metallic_mica_foil'
    )
    // .notConsumable('kubejs:lv_technician_helper')
    .itemOutputs('1x kubejs:desh_coil_block')
    .inputFluids('gtceu:nichrome 144')
    .duration(40*20)
    .EUt(1980);

event.recipes.gtceu.assembler('kubejs:titanite_coil')
    .itemInputs(
        '8x gtceu:titanite_double_wire',
        '16x gtceu:titanite_alloy_foil',
        '64x gtceu:metallic_mica_foil'
    )
    // .notConsumable('kubejs:lv_technician_helper')
    .itemOutputs('1x kubejs:titanite_coil_block')
    .inputFluids('gtceu:hssg 144')
    .duration(40*20)
    .EUt(7680);

    // misc

    event.recipes.gtceu
        .assembler("kubejs:bricks")
        .itemInputs("4x minecraft:brick")
        // .notConsumable('kubejs:lv_technician_helper')
        .itemOutputs("1x minecraft:bricks")
        .inputFluids("gtceu:concrete 10")
        .duration(20)
        .EUt(8)
})
