ServerEvents.recipes((event) => {

    event.remove({ output: "framedblocks:framed_cube" })

    event.remove({output: "hangglider:glider_wing"})
    event.remove({output: "vinery:straw_hat"})
    event.remove({output:"hangglider:glider_framework"})
    event.remove({mod: "comforts"})
    event.remove({output: "#minecraft:wool_carpets", mod: "minecraft", type: "crafting_shaped"})
    event.remove({output:"farmersdelight:flint_knife", type: "crafting_shaped"})

    event.recipes.gtceu.shaped(
        Item.of("hangglider:glider_wing"),
        [
            " FC",
            "SCL",
            "CLL"
        ],
        {
            C: "gtceu:treated_wood_rod",
            L: "minecraft:leather",
            S: "#forge:tools/saws",
            F: "#forge:tools/files"
        }
    ).id("kjs:glider_wing");

    event.recipes.gtceu.shaped(
        Item.of("hangglider:glider_framework"),
        [
            "BAB",
            "ACA",
            "AAA"
        ],
        {
            A: "gtceu:iron_rod",
            B: "gtceu:iron_screw",
            C: "#forge:tools/screwdrivers"
        }
    ).id("kjs:glider_framework");

    event.recipes.gtceu.shaped(
        Item.of("comforts:sleeping_bag_white"),
        [
            "   ",
            "AAA",
            "BCB"
        ],
        {
            A: "#minecraft:wool_carpets",
            B: "gtceu:treated_wood_rod",
            C: "#forge:tools/screwdrivers"
        }
    ).id("kjs:sleeping_bag");


    event.recipes.gtceu.assembler("kubejs:framed_cube").itemInputs("4x gtceu:wood_screw", "4x minecraft:stick").itemOutputs("16x framedblocks:framed_cube").duration(20).EUt(2)

    // @ts-ignore
    event.shaped(
        Item.of("framedblocks:framed_cube", 2), // arg 1: output
        [
            "ACA",
            "CDC", // arg 2: the shape (array of strings)
            "ACA"
        ],
        {
            A: "gtceu:wood_screw",
            C: "minecraft:stick",
            D: "#minecraft:planks"
        }
    )


    event.remove({mod: "shrink"})

    event.shaped(
        Item.of("shrink:shrinking_device", 1), // arg 1: output
        [
            "ACA",
            "BDB", // arg 2: the shape (array of strings)
            "ACA"
        ],
        {
            A: "gtceu:pearlic_steel_plate",
            B: "gtceu:ender_eye_plate",
            C: "#gtceu:circuits/mv",
            D: "#minecraft:buttons"
        }
    )
})
