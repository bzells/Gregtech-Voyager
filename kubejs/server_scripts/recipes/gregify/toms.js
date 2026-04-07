
ServerEvents.recipes(event => {
    event.recipes.gtceu
        .assembler('kubejs:toms_terminal')   // recipe ID
        .itemInputs('gtceu:aluminium_frame', 'gtceu:aluminium_crate', '6x gtceu:treated_wood_plate', '2x gtceu:iron_gear')
        .inputFluids("gtceu:lubricant 100")
        .itemOutputs('toms_storage:ts.storage_terminal')
        .duration(2400)                                 // in ticks
        .EUt(120)      
        
    event.recipes.gtceu
        .assembler('kubejs:toms_inv_connector')   // recipe ID
        .itemInputs('gtceu:sterling_silver_normal_item_pipe', '2x gtceu:treated_wood_frame', '1x gtceu:stainless_steel_gear')
        .inputFluids("gtceu:polyethylene 1000")
        .itemOutputs('2x toms_storage:ts.inventory_connector')
        .duration(600)                                 // in ticks
        .EUt(120)  

    event.recipes.gtceu
        .assembler('kubejs:toms_inv_trim')   // recipe ID
        .itemInputs('gtceu:sterling_silver_small_item_pipe', '2x gtceu:treated_wood_frame', '1x gtceu:small_stainless_steel_gear')
        .itemOutputs('2x toms_storage:ts.trim')
        .circuit(1)
        .duration(300)                                 // in ticks
        .EUt(120)  
        
    event.recipes.gtceu
        .assembler('kubejs:crafting_terminal')   // recipe ID
        .itemInputs('8x #gtceu:circuits/hv', '1x gtceu:stainless_steel_frame', '2x gtceu:stainless_steel_gear', 'toms_storage:ts.storage_terminal',
            '2x gtceu:double_silicon_plate', 'minecraft:crafting_table', 'minecraft:ender_eye'
        )
        .circuit(32)
        .inputFluids("gtceu:lubricant 100")
        .itemOutputs('2x toms_storage:ts.crafting_terminal')
        .duration(2400)                                 // in ticks
        .EUt(120)  
});