ServerEvents.recipes(event => {
 
    event.recipes.gtceu
        .assembler('kubejs:atmospheric_collector')   
        .itemInputs('16x gtceu:steel_ingot')
        .itemOutputs('gtceu:atmospheric_collector')
        .duration(2400)                               
        .EUt(1980) 

    function atm_collect(circuit, ns, itemOutput, cntI, fluidOutput, cntF, time, eut, dimension)
    {
        event.recipes.gtceu.atmospheric_collector("kubejs:atmospheric_collector_" + itemOutput + '_circuit_' + circuit)
                .itemOutputs(`${cntI}x ${ns}:${itemOutput}`)
                .outputFluids(`${fluidOutput} ${cntF}`)
                .duration(20 * time)
                .circuit(circuit)
                .EUt(eut)
                .dimension(dimension)
    }

    atm_collect(1, 'gtceu', 'martian_sand_dust', 256, 'gtceu:martian_air', 50000, 50, 32768, 'ad_astra:mars')
    atm_collect(2, 'gtceu', 'martian_sand_dust', 1, 'gtceu:liquid_martian_air', 50000, 200, 32768, 'ad_astra:mars')

    atm_collect(1, 'gtceu', 'ice_dust', 256, 'gtceu:air', 200000, 4, 32768, 'minecraft:overworld')
    atm_collect(2, 'gtceu', 'ice_dust', 1, 'gtceu:liquid_air', 200000, 16, 32768, 'minecraft:overworld')

    atm_collect(1, 'gtceu', 'endstone_dust', 256, 'gtceu:ender_air', 100000, 100, 32768 * 4, 'minecraft:the_end')
    atm_collect(2, 'gtceu', 'endstone_dust', 1, 'gtceu:liquid_ender_air', 100000, 400, 32768 * 4, 'minecraft:the_end')

    atm_collect(1, 'gtceu', 'netherrack_dust', 256, 'gtceu:nether_air', 200000, 10, 32768 * 2, 'minecraft:the_nether')
    atm_collect(2, 'gtceu', 'netherrack_dust', 1, 'gtceu:liquid_nether_air', 200000, 40, 32768 * 2, 'minecraft:the_nether')
})