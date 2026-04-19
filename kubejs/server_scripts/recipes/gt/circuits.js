ServerEvents.recipes(event => {
    event.recipes.gtceu.circuit_assembler("kubejs:ev_t1")
        .itemInputs("gtceu:plastic_printed_circuit_board", "2x gtceu:micro_processor_assembly", "4x #gtceu:diodes", "4x gtceu:ram_chip", "16x gtceu:fine_fluxed_electrum_wire", "32x gtceu:fluxed_cobalt_electrum_bolt")
        .itemOutputs("gtceu:micro_processor_computer")
        .inputFluids("#forge:soldering_alloy 144")
        .duration(20*40) 
        .EUt(120)
        .cleanroom(CleanroomType.CLEANROOM)

});