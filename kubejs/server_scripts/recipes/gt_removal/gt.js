ServerEvents.recipes(event => {


event.remove({ output: 'gtceu:diode' })
event.remove({type: 'minecraft:crafting_shaped',output: 'gtceu:lv_energy_input_hatch'})
event.remove({type: 'minecraft:crafting_shaped',output: 'gtceu:mv_energy_input_hatch'})
event.remove({type: 'minecraft:crafting_shaped',output: 'gtceu:mv_energy_output_hatch'})
event.remove({type: 'minecraft:crafting_shaped',output: 'gtceu:hv_energy_input_hatch'})
event.remove({type: 'minecraft:crafting_shaped',output: 'gtceu:hv_energy_output_hatch'})
event.remove({output: 'gtceu:phenolic_circuit_board'})
event.remove({output: 'gtceu:cupronickel_coil_block'})
event.remove({output: 'gtceu:kanthal_coil_block'})
event.remove({output: 'gtceu:nichrome_coil_block'})
event.remove({output: 'gtceu:transistor'})
event.remove({type: 'gtceu:assembler',output: 'gtceu:diode'})
event.remove({output: 'gtceu:micro_processor_computer'})
event.remove({type: 'minecraft:crafting_shaped' ,output: 'gtceu:phenolic_printed_circuit_board'})
event.remove({type: 'gtceu:rock_breaker' ,output: 'minecraft:obsidian'})

function removeTieredComponents(tier)
{

    const pre = 'gtceu:' + tier

    event.remove({type: 'minecraft:crafting_shaped' ,output: [`${pre}_electric_motor`, `${pre}_electric_pump`,`${pre}_conveyor_module`,`${pre}_electric_piston`,`${pre}_robot_arm`,`${pre}_sensor`, `${pre}_emitter`, ]})
}

  const tiers = ['mv','hv','ev','iv','luv','zpm','uv','uhv','uev','uiv','max'];

// tiers.forEach(tier => removeTieredComponents(tier));


// event.remove({type: 'minecraft:crafting_shaped' ,output: ['gtceu:mv_electric_motor', 'gtceu:mv_electric_pump', 'gtceu:mv_conveyor_module', 'gtceu_mv_electric_piston', 'gtceu:mv_robot_arm']})

event.replaceInput(
  { input: 'gtceu:annealed_copper_bolt' }, // Arg 1: the filter
  'gtceu:annealed_copper_bolt',            // Arg 2: the item to replace
  'gtceu:fluxed_electrum_bolt'         // Arg 3: the item to replace it with
  // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
)
})
