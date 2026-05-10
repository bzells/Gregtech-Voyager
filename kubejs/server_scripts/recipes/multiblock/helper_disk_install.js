ServerEvents.recipes(event => {
 

    function disk_installation(inputs, output, cnt, time, eut)
    {
        event.recipes.gtceu.helper_software_installation_unit("kubejs:helper_software_installation_unit_" + output)
                .itemInputs(inputs)
                .itemOutputs(cnt +'x kubejs:' + output)
                .duration(20 * time)
                .EUt(eut)
    }

    disk_installation(['3x #gtceu:circuits/iv', '2x #gtceu:circuits/ev', '2x gtceu:tungsten_steel_plate', '2x gtceu:data_orb', '4x gtceu:tungsten_steel_bolt', '16x gtceu:fine_titanite_alloy_wire'],
        'iv_helper_computation_array', 2, 60, 7680
    )

    
})