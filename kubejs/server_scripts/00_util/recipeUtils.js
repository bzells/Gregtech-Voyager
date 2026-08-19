function parse_item_with_ns(id)
{
    return id.split(':')[1]
}

global.recipe_lcr = function(event, name, inputItems, inputFluids, outputItems, outputFluids, duration, eut, helper) {
    event.recipes.gtceu
        .large_chemical_reactor("kubejs:lcr_" + name)
        .itemInputs(inputItems)
        .itemOutputs(outputItems)
        .inputFluids(inputFluids)
        .outputFluids(outputFluids)
        .duration(duration * 20)
        .EUt(eut)
}

global.recipe_centrifuge = function(event, name, inputItems, inputFluids, outputItems, outputFluids, duration, eut, helper) {
    if (helper) {
        event.recipes.gtceu
            .centrifuge("kubejs:centrifuge_helper_" + name)
            .itemInputs(inputItems)
            .notConsumable("kubejs:" + helper)
            .itemOutputs(outputItems)
            .inputFluids(inputFluids)
            .circuit(3)
            .outputFluids(outputFluids)
            .duration(duration * 20)
            .EUt(eut)
    } else {
        event.recipes.gtceu
            .centrifuge("kubejs:centrifuge_" + name)
            .itemInputs(inputItems)
            .itemOutputs(outputItems)
            .inputFluids(inputFluids)
            .outputFluids(outputFluids)
            .duration(duration * 20)
            .EUt(eut)
    }
}

global.recipe_electrolyzer = function(event, name, inputItems, inputFluids, outputItems, outputFluids, duration, eut) {
    event.recipes.gtceu
        .electrolyzer("kubejs:electrolyzer_" + name)
        .itemInputs(inputItems)
        .itemOutputs(outputItems)
        .inputFluids(inputFluids)
        .outputFluids(outputFluids)
        .duration(duration * 20)
        .EUt(eut)
}

global.recipe_fluid_solidifier = function(event, name, inputFluids, outputItems, duration, eut) {
    event.recipes.gtceu
        .fluid_solidifier("kubejs:fluid_solidifier_" + name)
        .itemOutputs(outputItems)
        .inputFluids(inputFluids)
        .duration(duration * 20)
        .EUt(eut)
}

global.recipe_chem_plant = function(event, name, inputItems, inputFluids, outputItems, outputFluids, duration, eut, temp, specialized) {
    if (specialized) {
        event.recipes.gtceu
            .chemical_plant("kubejs:chemical_plant_" + name + "_" + specialized)
            .itemInputs(inputItems)
            .itemOutputs(outputItems)
            .inputFluids(inputFluids)
            .outputFluids(outputFluids)
            .addData("ebf_temp", temp)
            .addData("specialized", specialized)
            .duration(duration * 20)
            .EUt(eut)
    } else {
        event.recipes.gtceu
            .chemical_plant("kubejs:chemical_plant_" + name)
            .itemInputs(inputItems)
            .itemOutputs(outputItems)
            .inputFluids(inputFluids)
            .outputFluids(outputFluids)
            .addData("ebf_temp", temp)
            .duration(duration * 20)
            .EUt(eut)
    }
}

global.recipe_mixer = function(event, name, ingredientsItem, fluidIngredients, itemOutputs, fluidOutputs, eut, time) {
    event.recipes.gtceu
        .mixer("kubejs:mixer_" + name)
        .itemInputs(ingredientsItem)
        .inputFluids(fluidIngredients)
        .itemOutputs(itemOutputs)
        .outputFluids(fluidOutputs)
        .duration(time * 20)
        .EUt(eut)
}

global.recipe_distillation = function(event, input, amt, itemOutput, fluidOutputs, eut, time) {
    event.recipes.gtceu
        .distillation_tower(`kubejs:${input}_distilling`)
        .inputFluids(`kubejs:${input} ${amt}`)
        .outputFluids(fluidOutputs)
        .itemOutputs(itemOutput)
        .duration(time * 20)
        .EUt(eut)
}

global.recipe_macerator = function(event, inputItem, outputItem, eut, time) {
    event.recipes.gtceu
        .macerator(parse_item_with_ns(outputItem) + "_macerator")
        .itemInputs(inputItem)
        .itemOutputs(outputItem)
        .duration(time * 20)
        .EUt(eut)
}

global.recipe_radiation_chamber = function(event, name, inputItems, inputFluids, pt, outputItems, outputFluids, eut, duration) {
    event.recipes.gtceu
        .radiation_chamber("kubejs:" + name)
        .itemInputs(inputItems)
        .perTick(true)
        .inputFluids(`gtceu:${inputFluids} ${pt}`)
        .perTick(false)
        .itemOutputs(outputItems)
        .outputFluids(outputFluids)
        .duration(duration * 20)
        .EUt(eut)
}

global.recipe_teus_laser = function(event, output, inputItems, nonconsumed, inputFluids, outputFluids, eut, duration, concentration) {
    event.recipes.gtceu
        .beam_heating(`kubejs:${parse_item_with_ns(output)}_teus_laser`)
        .itemInputs(inputItems)
        .notConsumable(nonconsumed)
        .inputFluids(inputFluids)
        .addData("beam_concentration", concentration)
        .itemOutputs(output)
        .outputFluids(outputFluids)
        .duration(duration * 20)
        .EUt(eut)
}

global.recipe_chem_bath = function(event, output, inputItems, inputFluids, eut, duration) {
    event.recipes.gtceu
        .chemical_bath(`kubejs:${parse_item_with_ns(output)}_chem_bath`)
        .itemInputs(inputItems)
        .inputFluids(inputFluids)
        .itemOutputs(output)
        .duration(duration * 20)
        .EUt(eut)
}

global.recipe_assembler = function(event, output, inputItems, inputFluids, eut, duration) {
    event.recipes.gtceu
        .assembler(`kubejs:${parse_item_with_ns(output)}_assembler`)
        .itemInputs(inputItems)
        .inputFluids(inputFluids)
        .itemOutputs(output)
        .duration(duration * 20)
        .EUt(eut)
}

global.recipe_assembler_with_id = function(event, rId, output, inputItems, inputFluids, eut, duration) {
    event.recipes.gtceu
        .assembler(`kubejs:${parse_item_with_ns(output)}_${rId}_assembler`)
        .itemInputs(inputItems)
        .inputFluids(inputFluids)
        .itemOutputs(output)
        .duration(duration * 20)
        .EUt(eut)
}

global.recipe_circuit_assembler = function(event, output, inputItems, inputFluids, eut, duration) {
    event.recipes.gtceu
        .circuit_assembler(`kubejs:${parse_item_with_ns(output)}_circuit_assembler`)
        .itemInputs(inputItems)
        .inputFluids(inputFluids)
        .itemOutputs(output)
        .duration(duration * 20)
        .EUt(eut)
}

global.recipe_circuit_assembler_with_id = function(event, rId, output, inputItems, inputFluids, eut, duration) {
    event.recipes.gtceu
        .circuit_assembler(`kubejs:${parse_item_with_ns(output)}_${rId}_circuit_assembler`)
        .itemInputs(inputItems)
        .inputFluids(inputFluids)
        .itemOutputs(output)
        .duration(duration * 20)
        .EUt(eut)
}