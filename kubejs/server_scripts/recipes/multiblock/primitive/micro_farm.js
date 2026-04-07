ServerEvents.recipes(event => {
 

    event.shaped(
        Item.of('gtceu:micro_farm', 1), // arg 1: output
        [
            'DCD',
            'BAB', // arg 2: the shape (array of strings)
            'DCD'
        ],
        {
            A: 'gtceu:steel_machine_casing',
            B: 'gtceu:treated_wood_frame',  //arg 3: the mapping object
            C: '#gtceu:circuits/lv',
            D: 'gtceu:tempered_glass'
        }
    )

    event.recipes.gtceu.micro_farm("kubejs:microfarm_grass_1")
        .notConsumable("minecraft:grass")
        .circuit(1)
        .chancedOutput('minecraft:potato', 1000, 200)
        .chancedOutput('minecraft:carrot', 1000, 200)
        .chancedOutput('minecraft:melon_seeds', 500, 200)
        .chancedOutput('minecraft:pumpkin_seeds', 500, 200)
        .chancedOutput('minecraft:bamboo', 500, 200)
        .chancedOutput('minecraft:sugar_cane', 500, 200)
        .chancedOutput('minecraft:cactus', 500, 200)
        .chancedOutput('minecraft:cocoa_beans', 500, 200)
        .chancedOutput('minecraft:beetroot_seeds', 500, 200)
        .inputFluids("minecraft:water 1000")
        .duration(400)

    event.recipes.gtceu.micro_farm("kubejs:microfarm_grass_2")
        .notConsumable("minecraft:grass")
        .circuit(2)
        .chancedOutput('minecraft:torchflower_seeds', 500, 200)
        .chancedOutput('minecraft:pitcher_pod', 500, 200)
        .inputFluids("minecraft:water 1000")
        .duration(400)

    event.recipes.gtceu.micro_farm("kubejs:microfarm_grass_3")
        .notConsumable("minecraft:grass")
        .circuit(3)
        .chancedOutput('minecraft:wither_rose', 50, 200)
        .inputFluids("minecraft:water 1000")
        .duration(400)


    event.recipes.gtceu.micro_farm("kubejs:magebloom_farm")
        .itemInputs("ars_nouveau:magebloom_crop")
        // .circuit(3)
        .chancedOutput('ars_nouveau:magebloom_crop', 5000, 500)
        .chancedOutput('ars_nouveau:magebloom', 9000, 500)
        .inputFluids("minecraft:water 1000")
        .duration(400)
        .EUt(120)

    event.recipes.gtceu.micro_farm("kubejs:magebloom_farm_helper")
        .notConsumable("ars_nouveau:magebloom_crop")
        .notConsumable("kubejs:farmer_helper")
        .circuit(1)
        .chancedOutput('ars_nouveau:magebloom_crop', 5000, 500)
        .chancedOutput('ars_nouveau:magebloom', 9000, 500)
        .inputFluids("minecraft:water 1000")
        .duration(300)
        .EUt(120)

    event.recipes.gtceu.micro_farm("kubejs:cocoa")
        .itemInputs("minecraft:cocoa_beans")
        .itemOutputs('minecraft:cocoa_beans')
        // .circuit(3)
        .chancedOutput('minecraft:cocoa_beans', 5000, 500)
        .inputFluids("minecraft:water 1000")
        .duration(400)
        .EUt(8)

    event.recipes.gtceu.micro_farm("kubejs:cocoa_helper")
        .notConsumable("minecraft:cocoa_beans")
        .notConsumable("kubejs:farmer_helper")
        .itemOutputs('minecraft:cocoa_beans')
        .circuit(1)
        .chancedOutput('2x minecraft:cocoa_beans', 9000, 1000)
        .chancedOutput('4x minecraft:cocoa_beans', 8000, 500)
        .inputFluids("minecraft:water 1000")
        .duration(200)
        .EUt(2)

    event.recipes.gtceu.micro_farm("kubejs:wheat")
        .itemInputs("minecraft:wheat_seeds")
        .itemOutputs('minecraft:wheat_seeds')
        // .circuit(3)
        .chancedOutput('minecraft:wheat', 5000, 500)
        .inputFluids("minecraft:water 1000")
        .duration(400)
        .EUt(8)

    event.recipes.gtceu.micro_farm("kubejs:wheat_helper")
        .notConsumable("minecraft:wheat_seeds")
        .notConsumable("kubejs:farmer_helper")
        .itemOutputs('minecraft:wheat_seeds')
        .circuit(1)
        .chancedOutput('2x minecraft:wheat', 9000, 1000)
        .chancedOutput('4x minecraft:wheat', 8000, 500)
        .inputFluids("minecraft:water 1000")
        .duration(200)
        .EUt(2)

    event.recipes.gtceu.micro_farm("kubejs:sugar_cane")
        .itemInputs("minecraft:sugar_cane")
        .itemOutputs('minecraft:sugar_cane')
        // .circuit(3)
        .chancedOutput('minecraft:sugar_cane', 5000, 500)
        .inputFluids("minecraft:water 1000")
        .duration(400)
        .EUt(8)

    event.recipes.gtceu.micro_farm("kubejs:sugar_cane_helper")
        .notConsumable("minecraft:sugar_cane")
        .notConsumable("kubejs:farmer_helper")
        .itemOutputs('minecraft:sugar_cane')
        .circuit(1)
        .chancedOutput('2x minecraft:sugar_cane', 9000, 1000)
        .chancedOutput('4x minecraft:sugar_cane', 8000, 500)
        .inputFluids("minecraft:water 1000")
        .duration(100)
        .EUt(2)
})