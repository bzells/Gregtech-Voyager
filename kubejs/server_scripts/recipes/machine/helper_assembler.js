

ServerEvents.recipes(event => {
    event.recipes.gtceu
        .helper_assembler('kubejs:brick_helper')   
        .itemInputs('kubejs:lv_helper_computation_array', 'gtceu:treated_wood_frame', '8x minecraft:brick', '2x gtceu:lv_robot_arm', '2x gtceu:lv_electric_motor', '2x gtceu:steel_rod')
        .inputFluids("gtceu:lubricant 250")
        .itemOutputs('kubejs:brick_helper')
        .duration(2400)                               
        .EUt(30)  
        
    event.recipes.gtceu
        .helper_assembler('kubejs:track_runner_helper')   
        .itemInputs('kubejs:lv_helper_computation_array', 'gtceu:tin_silver_alloy_frame', '2x gtceu:small_tin_silver_alloy_gear', '2x gtceu:lv_robot_arm', '2x gtceu:lv_electric_motor', '2x gtceu:tin_silver_alloy_rod')
        .inputFluids("gtceu:lubricant 250")
        .itemOutputs('kubejs:track_runner_helper')
        .duration(2400)                               
        .EUt(30)    
        
    event.recipes.gtceu
        .helper_assembler('kubejs:lv_technician_helper')   
        .itemInputs('2x kubejs:lv_helper_computation_array', 'gtceu:steel_frame', '8x gtceu:wrought_iron_plate', '2x gtceu:lv_robot_arm', '2x gtceu:lv_electric_motor', '2x gtceu:steel_rod')
        .inputFluids("gtceu:lubricant 250")
        .itemOutputs('kubejs:lv_technician_helper')
        .duration(2400)                               
        .EUt(30)  
        
    event.recipes.gtceu
        .helper_assembler('kubejs:farmer_helper')   
        .itemInputs('1x kubejs:lv_helper_computation_array', 'gtceu:bronze_frame', '8x gtceu:bronze_plate', '2x gtceu:lv_robot_arm', '2x gtceu:lv_electric_motor', '2x gtceu:bronze_rod')
        .inputFluids("gtceu:lubricant 250")
        .itemOutputs('kubejs:farmer_helper')
        .duration(2400)                               
        .EUt(30)  

    event.recipes.gtceu
        .helper_assembler('kubejs:lv_ebf_helper')   
        .itemInputs('2x kubejs:mv_helper_computation_array', 'gtceu:invar_frame', '8x gtceu:black_bronze_plate', '2x gtceu:mv_robot_arm', '2x gtceu:mv_electric_motor', '2x gtceu:black_bronze_rod')
        .inputFluids("gtceu:lubricant 250")
        .itemOutputs('kubejs:lv_ebf_helper')
        .duration(2400)                               
        .EUt(120)  

    event.recipes.gtceu
        .helper_assembler('kubejs:mv_ebf_helper')   
        .itemInputs('2x kubejs:hv_helper_computation_array', 'gtceu:invar_frame', '8x gtceu:mercury_barium_calcium_cuprate_double_wire', '2x gtceu:hv_robot_arm', '2x gtceu:hv_electric_motor', '2x gtceu:stainless_steel_rod')
        .inputFluids("gtceu:soldering_alloy 1000")
        .itemOutputs('kubejs:mv_ebf_helper')
        .duration(2400)                               
        .EUt(480)  
        
    event.recipes.gtceu
        .helper_assembler('kubejs:mv_technician_helper')   
        .itemInputs('1x kubejs:mv_helper_computation_array', 'gtceu:aluminium_frame', '8x gtceu:black_bronze_plate', '2x gtceu:mv_robot_arm', '2x gtceu:mv_electric_motor', '2x gtceu:aluminium_rod', '#gtceu:circuits/hv')
        .inputFluids("gtceu:lubricant 250")
        .itemOutputs('kubejs:mv_technician_helper')
        .duration(2400)                               
        .EUt(120)  
        
    event.recipes.gtceu
        .helper_assembler('kubejs:hv_technician_helper')   
        .itemInputs('1x kubejs:hv_helper_computation_array', 'gtceu:stainless_steel_frame', '8x gtceu:blue_steel_plate', '2x gtceu:hv_robot_arm', '2x gtceu:hv_electric_motor', '2x gtceu:blue_steel_rod', '#gtceu:circuits/ev')
        .inputFluids("gtceu:soldering_alloy 1000")
        .itemOutputs('kubejs:hv_technician_helper')
        .duration(2400)                               
        .EUt(480)  



    event.shaped(
        Item.of('gtceu:lv_helper_assembler', 1), // arg 1: output
        [
            'DCD',
            'BAB', // arg 2: the shape (array of strings)
            'DCD'
        ],
        {
            A: 'gtceu:lv_machine_hull',
            B: 'gtceu:lv_robot_arm',  //arg 3: the mapping object
            C: '#gtceu:circuits/lv',
            D: 'gtceu:tempered_glass'
        }
    )

    event.shaped(
        Item.of('gtceu:mv_helper_assembler', 1), // arg 1: output
        [
            'DCD',
            'BAB', // arg 2: the shape (array of strings)
            'DCD'
        ],
        {
            A: 'gtceu:mv_machine_hull',
            B: 'gtceu:mv_robot_arm',  //arg 3: the mapping object
            C: '#gtceu:circuits/mv',
            D: 'gtceu:tempered_glass'
        }
    )


});