ServerEvents.recipes((event) => {
    function fish_net(ring_mat, string, output, eut)
    {
        event.recipes.gtceu.assembler("kubejs:fishing_net_" + output.split(":")[1])
        .circuit(9)
        .itemInputs(`9x gtceu:${ring_mat}_ring`, string)
        .itemOutputs(output)
        .EUt(eut)
        .duration(20 * 5)
    }

    fish_net("rubber", "9x minecraft:string", "voyagercore:fish_net", 28)
    fish_net("stainless_steel", "9x gtceu:fine_borosilicate_glass_wire", "voyagercore:fiber_fish_net", 480)
    fish_net("tungsten_steel", "9x gtceu:polybenzimidazole_tiny_fluid_pipe", "voyagercore:pbi_fish_net", 7860)
        


})
