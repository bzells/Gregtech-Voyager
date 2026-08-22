ServerEvents.recipes((event) => {
    // @ts-ignore
    const nano_suit = ['helmet', 'chestplate', 'leggings', 'boots']

    const carbon_amount =
    {
        'helmet': 5,
        'chestplate': 8,
        'leggings': 7,
        'boots': 4
    }

    nano_suit.forEach(part => {
        event.remove({output: `gtceu:nanomuscle_${part}`})

        if(part == 'helmet')
        {
            global.recipe_assembler_with_circuit_num(event, `gtceu:nanomuscle_${part}`, 
            [`minecraft:netherite_${part}`, `${carbon_amount[part]}x gtceu:carbon_fiber_plate`, '64x gtceu:fine_energetic_alloy_wire', 'gtceu:energy_crystal', 'gtceu:nightvision_goggles'],
             `gtceu:fluxed_cobalt_electrum ${carbon_amount[part] * 144}`,
             480, 10, 1)
        }
        else
        {
            global.recipe_assembler_with_circuit_num(event, `gtceu:nanomuscle_${part}`, 
            [`minecraft:netherite_${part}`, `${carbon_amount[part]}x gtceu:carbon_fiber_plate`, '64x gtceu:fine_energetic_alloy_wire', 'gtceu:energy_crystal'],
             `gtceu:fluxed_cobalt_electrum ${carbon_amount[part] * 144}`,
             480, 10, 1)
        }

        
    })
})
