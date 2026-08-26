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

global.recipe_thermal_centrifuge = function(event, name, inputItems, outputItems, outputFluids, duration, eut) {

        event.recipes.gtceu
            .thermal_centrifuge("kubejs:centrifuge_" + name)
            .itemInputs(inputItems)
            .itemOutputs(outputItems)
            .outputFluids(outputFluids)
            .duration(duration * 20)
            .EUt(eut)
    
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

global.recipe_pyrolyse_oven = function(event, name, inputItems, inputFluids, outputItems, outputFluids, duration, eut, circuit) {
    event.recipes.gtceu
        .pyrolyse_oven("kubejs:pyrolyze_oven" + name)
        .itemInputs(inputItems)
        .itemOutputs(outputItems)
        .inputFluids(inputFluids)
        .outputFluids(outputFluids)
        .circuit(circuit)
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

global.recipe_fluid_heater = function(event, name, inputFluids, outputFluids, duration, eut) {
    event.recipes.gtceu
        .fluid_heater("kubejs:fluid_heater_" + name)
        .inputFluids(inputFluids)
        .outputFluids(outputFluids)
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

global.recipe_distillation = function(event, name, input, itemOutput, fluidOutputs, eut, time) {
    event.recipes.gtceu
        .distillation_tower(`kubejs:${name}_distillation_tower`)
        .inputFluids(`${input}`)
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
        .chemical_bath(`kubejs:${parse_item_with_ns(output)}_chem_bath_${inputFluids.split(":")[1].split(" ")[0]}`)
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

global.recipe_assembler_with_circuit_num = function(event, output, inputItems, inputFluids, eut, duration, circuitnum) {
    event.recipes.gtceu
        .assembler(`kubejs:${parse_item_with_ns(output)}_assembler`)
        .itemInputs(inputItems)
        .inputFluids(inputFluids)
        .itemOutputs(output)
        .circuit(circuitnum)
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