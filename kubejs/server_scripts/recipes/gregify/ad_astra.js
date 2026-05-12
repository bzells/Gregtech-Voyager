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

    event.custom({type: "ad_astra:nasa_workbench",
        ingredients: [
        {
        item: "kubejs:desh_rocket_nose_cone"
        },
        {
        item: "kubejs:desh_rocket_hull_plate"
        },
        {
        item: "kubejs:desh_rocket_hull_plate"
        },
        {
        item: "kubejs:desh_rocket_hull_plate"
        },
        {
        item: "kubejs:desh_rocket_hull_plate"
        },
        {
        item: "kubejs:desh_rocket_hull_plate"
        },
        {
        item: "kubejs:desh_rocket_hull_plate"
        },
        {
        item: "kubejs:desh_rocket_fin"
        },
        {
        item: "ad_astra:desh_tank"
        },
        {
        item: "ad_astra:desh_tank"
        },
        {
        item: "kubejs:desh_rocket_fin"
        },
        {
        item: "kubejs:desh_rocket_fin"
        },
        {
        item: "ad_astra:desh_engine"
        },
        {
        item: "kubejs:desh_rocket_fin"
        }
    ],
    result: {
        count: 1,
        id: "ad_astra:tier_2_rocket"
    }})

    event.custom({type: "ad_astra:nasa_workbench",
        ingredients: [
        {
        item: "kubejs:titanite_rocket_nose_cone"
        },
        {
        item: "kubejs:titanite_rocket_hull_plate"
        },
        {
        item: "kubejs:titanite_rocket_hull_plate"
        },
        {
        item: "kubejs:titanite_rocket_hull_plate"
        },
        {
        item: "kubejs:titanite_rocket_hull_plate"
        },
        {
        item: "kubejs:titanite_rocket_hull_plate"
        },
        {
        item: "kubejs:titanite_rocket_hull_plate"
        },
        {
        item: "kubejs:titanite_rocket_fin"
        },
        {
        item: "ad_astra:ostrum_tank"
        },
        {
        item: "ad_astra:ostrum_tank"
        },
        {
        item: "kubejs:titanite_rocket_fin"
        },
        {
        item: "kubejs:titanite_rocket_fin"
        },
        {
        item: "ad_astra:ostrum_engine"
        },
        {
        item: "kubejs:titanite_rocket_fin"
        }
    ],
    result: {
        count: 1,
        id: "ad_astra:tier_3_rocket"
    }})

    function assembly_no_research(output, namespace, inputs, fluidInputs, eut, time)
    {
        event.remove({output: `${namespace}:${output}`})
        event.recipes.gtceu.assembly_line(`gtceu:${output}`)
            .itemInputs(inputs)
            .inputFluids(fluidInputs)
            .itemOutputs(`${namespace}:${output}`)
            // ["scannerResearch(java.util.function.UnaryOperator)"](
            //     researchRecipeBuilder => researchRecipeBuilder
            //         .researchStack(Item.of(toScan))
            //         .duration(dura * 2)
            //         .EUt(eut/4)
            //     )
            .duration(time * 20)
            .EUt(eut);
    }

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
            '16x #gtceu:circuits/iv',
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
            '8x #gtceu:circuits/iv',
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

    event.recipes.gtceu.assembler('kubejs:desh_rocket_hull')
    .itemInputs(
        '36x gtceu:double_desh_plate',
        '32x gtceu:lunarium_foil',
        '16x gtceu:ruthenium_foil',
        '24x gtceu:steel_bolt'
    )
    .itemOutputs('kubejs:desh_rocket_hull_plate')
    .inputFluids('gtceu:soldering_alloy 2000')
    .duration(20 * 90)
    .EUt(1980);

    event.recipes.gtceu.assembler('kubejs:titanite_rocket_hull')
    .itemInputs(
        '36x gtceu:double_titanite_alloy_plate',
        '48x gtceu:hsss_foil',
        '32x gtceu:osmium_foil',
        '24x gtceu:tungsten_steel_bolt',
        'gtceu:iv_field_generator'
    )
    // .notConsumable('kubejs:lv_technician_helper')
    .itemOutputs('kubejs:titanite_rocket_hull_plate')
    .inputFluids('gtceu:soldering_alloy 4000')
    .duration(20 * 90)
    .EUt(7680);

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

     event.recipes.gtceu.assembler('kubejs:desh_rocket_steel_engine')
    .itemInputs(
        '6x kubejs:desh_rocket_hull_plate',
        '32x gtceu:tungsten_carbide_frame',
        '24x gtceu:lunarium_foil',
        '4x gtceu:titanium_fluid_cell',
        'gtceu:large_combustion_engine'
    )
    .itemOutputs('ad_astra:desh_engine')
    .inputFluids("gtceu:styrene_butadiene_rubber 1000")
    .duration(20*60*3)
    .EUt(1980);

    event.recipes.gtceu.assembler('kubejs:desh_rocket_nose')
    .itemInputs(
        '6x kubejs:desh_rocket_hull_plate',
        'kubejs:desh_interplanetary_coordinatal_calculator',
        '16x #gtceu:circuits/luv',
        '24x gtceu:lunarium_foil'
    )
    .itemOutputs('kubejs:desh_rocket_nose_cone')
    .inputFluids("gtceu:styrene_butadiene_rubber 1000")
    .duration(20*60*5)
    .EUt(1980);

    event.recipes.gtceu.assembler('kubejs:desh_rocket_fin')
    .itemInputs(
        '4x kubejs:desh_rocket_hull_plate',
        '32x gtceu:double_iridium_plate',
        '32x gtceu:lunarium_foil'
    )
    .itemOutputs('kubejs:desh_rocket_fin')
    .inputFluids("gtceu:styrene_butadiene_rubber 1000")
    .duration(20*60*5)
    .EUt(1980);

    event.recipes.gtceu.assembler('kubejs:desh_tank')
    .itemInputs(
        '4x kubejs:desh_rocket_hull_plate',
        '32x gtceu:titanium_fluid_cell',
        '32x gtceu:lunarium_foil'
    )
    .itemOutputs('ad_astra:desh_tank')
    .inputFluids("gtceu:styrene_butadiene_rubber 1000")
    .duration(20*60*5)
    .EUt(1980);

    event.recipes.gtceu.assembler('kubejs:desh_interplanetary_coordinatal_calculator')
    .itemInputs(
        '4x gtceu:iv_sensor',
        '4x gtceu:iv_emitter',
        '4x gtceu:ev_field_generator',
        '4x #gtceu:circuits/luv',
        '2x gtceu:double_desh_plate',
        '32x gtceu:fine_refined_fluxed_electrum_wire'
    )
    .itemOutputs('kubejs:desh_interplanetary_coordinatal_calculator')
    .inputFluids("gtceu:soldering_alloy 1000")
    .duration(20*60*5)
    .EUt(1980);

    assembly_no_research('titanite_interplanetary_coordinatal_calculator', 'kubejs', 
        ['32x gtceu:double_titanite_plate', '8x gtceu:luv_sensor', '8x gtceu:luv_emitter', '4x gtceu:iv_field_generator', '4x #gtceu:circuits/zpm', '32x gtceu:titanite_alloy_double_wire'],
        ['gtceu:soldering_alloy 1200', 'gtceu:tungsten 800'], 7680, 100
    )
    assembly_no_research('titanite_rocket_fin', 'kubejs', ['8x kubejs:titanite_rocket_hull_plate', '32x gtceu:double_osmium_plate', '32x gtceu:hsss_foil', '2x #gtceu:circuits/luv'], ['gtceu:polybenzimidazole 4500'],
        7680, 300
    )
    assembly_no_research('titanite_rocket_nose_cone', 'kubejs',
        ['12x kubejs:titanite_rocket_hull_plate', 'kubejs:titanite_interplanetary_coordinatal_calculator', '16x #gtceu:circuits/zpm', '64x gtceu:hsss_foil'],
        ['gtceu:polybenzimidazole 8000', 'gtceu:tungsten 4000'], 7680, 300
    )
    assembly_no_research('ostrum_engine', 'ad_astra', ['10x kubejs:titanite_rocket_hull_plate', '32x gtceu:ruridit_frame', '48x gtceu:osmium_foil', '8x gtceu:tungsten_steel_fluid_cell', 'gtceu:extreme_combustion_engine'],
        ['gtceu:polybenzimidazole 8000', 'gtceu:tungsten 4000'], 7680, 180
    )
    assembly_no_research('ostrum_tank', 'ad_astra', ['6x kubejs:titanite_rocket_hull_plate', '32x gtceu:tungsten_steel_fluid_cell', '64x gtceu:osmium_foil', '2x #gtceu:circuits/luv'],
        ['gtceu:polybenzimidazole 8000', 'gtceu:tungsten 4000'], 7680, 300
    )
    
});