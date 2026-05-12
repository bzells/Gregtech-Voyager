ServerEvents.recipes(event => {

    function distill(input, ns, amt, fluidOutputs, itemOutput, eut, seconds)
    {
        event.recipes.gtceu
        .distillation_tower(`kubejs:${input}_distilling`)   // recipe ID
        .inputFluids(`${ns}:${input} ${amt}`)
        .outputFluids(fluidOutputs)
        .itemOutputs(itemOutput)
        .duration(seconds * 20)                                 // in ticks
        .EUt(eut)
    }

    function freeze(input, ns, amt, fluidOutputs, eut, seconds)
    {
        event.recipes.gtceu
        .vacuum_freezer(`kubejs:${input}_vacuum_freezer`)   // recipe ID
        .inputFluids(`${ns}:${input} ${amt}`)
        .outputFluids(fluidOutputs)
        .duration(seconds * 20)                                 // in ticks
        .EUt(eut)
    }

    freeze('martian_air', 'gtceu', 4000, 'gtceu:liquid_martian_air 4000', 7680, 4)
    distill('liquid_martian_air', 'gtceu', 50000, ['gtceu:carbon_dioxide 95000', 'gtceu:nitrogen 30000', 'gtceu:argon 10000', 'gtceu:oxygen 5000', 'gtceu:krypton neon 1000', 'gtceu:xenon 250'], '32x gtceu:martian_sand_dust', 7680, 50)




});
