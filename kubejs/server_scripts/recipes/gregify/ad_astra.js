ServerEvents.recipes(event => {
    event.custom({type: "ad_astra:nasa_workbench",
        ingredients: [
        {
        item: "ad_astra:rocket_nose_cone"
        },
        {
        item: "kubejs:rocket_hull_plate"
        },
        {
        item: "kubejs:rocket_hull_plate"
        },
        {
        item: "kubejs:rocket_hull_plate"
        },
        {
        item: "kubejs:rocket_hull_plate"
        },
        {
        item: "kubejs:rocket_hull_plate"
        },
        {
        item: "kubejs:rocket_hull_plate"
        },
        {
        item: "ad_astra:rocket_fin"
        },
        {
        item: "gtceu:hv_super_tank"
        },
        {
        item: "gtceu:hv_super_tank"
        },
        {
        item: "ad_astra:rocket_fin"
        },
        {
        item: "ad_astra:rocket_fin"
        },
        {
        item: "ad_astra:steel_engine"
        },
        {
        item: "ad_astra:rocket_fin"
        }
    ],
    result: {
        count: 1,
        id: "ad_astra:tier_1_rocket"
    }})

    event.recipes.gtceu.assembler('kubejs:rocket_fin')
        .itemInputs(
            '2x kubejs:rocket_hull_plate',
            '32x gtceu:double_aluminium_plate',
            '32x gtceu:aluminium_lithium_compound_foil'
        )
        .itemOutputs('ad_astra:rocket_fin')
        .inputFluids("gtceu:polytetrafluoroethylene 1000")
        .duration(20*60)
        .EUt(496);

    event.recipes.gtceu.assembler('kubejs:rocket_nose')
        .itemInputs(
            '3x kubejs:rocket_hull_plate',
            '2x gtceu:hv_sensor',
            '2x gtceu:hv_field_generator',
            '16x #gtceu:circuits/ev',
            '24x gtceu:aluminium_lithium_compound_foil'
        )
        .itemOutputs('ad_astra:rocket_nose_cone')
        .inputFluids("gtceu:polytetrafluoroethylene 1000")
        .duration(20*60*5)
        .EUt(496);

    event.recipes.gtceu.assembler('kubejs:rocket_steel_engine')
        .itemInputs(
            '3x kubejs:rocket_hull_plate',
            '32x gtceu:steel_frame',
            '24x gtceu:aluminium_lithium_compound_foil',
            '4x gtceu:stainless_steel_fluid_cell',
            'gtceu:hv_gas_turbine'
        )
        .itemOutputs('ad_astra:steel_engine')
        .inputFluids("gtceu:polytetrafluoroethylene 1000")
        .duration(20*60*3)
        .EUt(496);

    event.recipes.gtceu.assembler('kubejs:space_helmet')
        .itemInputs(
            '16x gtceu:carbon_fiber_plate',
            '8x gtceu:borosilicate_glass_ingot',
            '8x gtceu:aluminium_lithium_compound_foil',
            '1x #gtceu:circuits/ev',
            '1x gtceu:hv_sensor',
            '32x gtceu:polyvinyl_chloride_foil',
            'gtceu:hazmat_headpiece'
        )
        .itemOutputs('ad_astra:space_helmet')
        .circuit(28)
        .inputFluids("gtceu:polytetrafluoroethylene 1000")
        .duration(20*60*1)
        .EUt(496);

    event.recipes.gtceu.assembler('kubejs:space_suit')
        .itemInputs(
            '32x gtceu:carbon_fiber_plate',
            '24x gtceu:aluminium_lithium_compound_foil',
            '64x gtceu:polyvinyl_chloride_foil',
            'gtceu:hazmat_chestpiece'
        )
        .itemOutputs('ad_astra:space_suit')
        .circuit(29)
        .inputFluids("gtceu:polytetrafluoroethylene 1000")
        .duration(20*60*1)
        .EUt(496);


    event.recipes.gtceu.assembler('kubejs:space_pants')
        .itemInputs(
            '24x gtceu:carbon_fiber_plate',
            '16x gtceu:aluminium_lithium_compound_foil',
            '48x gtceu:polyvinyl_chloride_foil',
            'gtceu:hazmat_leggings'
        )
        .itemOutputs('ad_astra:space_pants')
        .circuit(30)
        .inputFluids("#forge:polyethylene 1000")
        .duration(20*60*1)
        .EUt(496);

    event.recipes.gtceu.assembler('kubejs:space_boots')
        .itemInputs(
            '16x gtceu:carbon_fiber_plate',
            'gtceu:hazmat_boots',
            '16x gtceu:polyvinyl_chloride_foil'
        )
        .itemOutputs('ad_astra:space_boots')
        .circuit(30)
        .inputFluids("#forge:polyethylene 1000")
        .duration(20*60*1)
        .EUt(496);

    event.recipes.gtceu.assembler('kubejs:nasa_workbench')
        .itemInputs(
            '4x gtceu:hv_robot_arm',
            '4x gtceu:hv_sensor',
            '4x gtceu:hv_field_generator',
            '8x #gtceu:circuits/ev',
            '8x gtceu:steel_frame',
            '64x gtceu:fine_fluxed_cobalt_electrum_wire',
            '16x gtceu:double_black_steel_plate',
            'gtceu:data_stick'
        )
        .itemOutputs('ad_astra:nasa_workbench')
        .circuit(12)
        .inputFluids("#forge:polytetrafluoroethylene 2000")
        .duration(20*60)
        .EUt(496);

    event.recipes.gtceu.assembler('kubejs:launchpad')
        .itemInputs(
            '32x gtceu:double_stainless_steel_plate',
            '64x gtceu:double_black_steel_plate',
            '64x gtceu:steel_frame'
        )
        .itemOutputs('ad_astra:launch_pad')
        .circuit(12)
        .inputFluids("gtceu:soldering_alloy 16000")
        .duration(20*60*5)
        .EUt(496);

    event.recipes.gtceu.assembler('kubejs:rocket_hull')
    .itemInputs(
        '24x gtceu:double_stainless_steel_plate',
        '32x gtceu:aluminium_lithium_compound_foil',
        '32x gtceu:carbon_fiber_mesh',
        '24x gtceu:steel_bolt'
    )
    // .notConsumable('kubejs:lv_technician_helper')
    .itemOutputs('kubejs:rocket_hull_plate')
    .inputFluids('gtceu:soldering_alloy 1000')
    .duration(20 * 90)
    .EUt(496);

    event.recipes.gtceu.assembler('kubejs:rover')
    .itemInputs(
        '4x kubejs:rocket_hull_plate',
        '32x gtceu:aluminium_lithium_compound_foil',
        '32x gtceu:carbon_fiber_mesh',
        '1x gtceu:stainless_steel_frame',
        '4x ad_astra:wheel',
        'gtceu:hv_combustion'
    )

    .itemOutputs('ad_astra:tier_1_rover')
    .inputFluids('gtceu:polytetrafluoroethylene 8000')
    .duration(20 * 60 * 5)
    // .circuit(3)
    .EUt(496);

    event.recipes.gtceu.assembler('kubejs:wheel')
    .itemInputs(
        '32x gtceu:aluminium_lithium_compound_foil',
        '32x gtceu:carbon_fiber_mesh',
        '1x gtceu:steel_frame',
        '8x gtceu:steel_screw'
    )
    // .notConsumable('kubejs:lv_technician_helper')
    .itemOutputs('ad_astra:wheel')
    .inputFluids('gtceu:polytetrafluoroethylene 8000')
    .duration(20 * 180)
    .EUt(496);
});