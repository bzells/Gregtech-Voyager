ServerEvents.recipes((event) => {
    // @ts-ignore


    // @ts-ignore


    // @ts-ignore
    function advanced_calorie_conversion(cookie, output, time, eut, outF, helperLevel)
    {
        if (!outF)
        {
            outF = []
        }
        event.recipes.gtceu.advanced_calorie_conversion("kubejs:grandmas_" + cookie + "_" + "calorie_conversions")
                .itemInputs("kubejs:grandmas_" + cookie)
                .addData("paramount", "hungry")
                .addData("paramount_level", helperLevel)
                .itemOutputs(output)
                .perTick(true)
                .outputFluids(outF)
                .perTick(false)
                .duration(20 * time)
                .EUt(-eut)
    }

    // @ts-ignore
    event.shaped(
        Item.of("voyagercore:hyper_helper_calorie_converter", 1), // arg 1: output
        [
            "ADA",
            "CBC", // arg 2: the shape (array of strings)
            "ADA"
        ],
        {
            A: "gtceu:double_titanex-879-htb_plate",
            B: "voyagercore:helper_calorie_converter", //arg 3: the mapping object
            C: "kubejs:heat_sheild",
            D: "#gtceu:circuits/luv"
        }
    )

    event.shaped(
        Item.of("voyagercore:helper_calorie_converter", 1), // arg 1: output
        [
            "ADA",
            "CBC", // arg 2: the shape (array of strings)
            "ADA"
        ],
        {
            A: "gtceu:double_lead_plate",
            B: "gtceu:large_helper_wheel", //arg 3: the mapping object
            C: "gtceu:ev_conveyor_module",
            D: "#gtceu:circuits/iv"
        }
    )

    // @ts-ignore
    event.shaped(
        Item.of("voyagercore:radiant_titanite_vent_casing", 2), // arg 1: output
        [
            "ACA",
            "BDB", // arg 2: the shape (array of strings)
            "ACA"
        ],
        {
            A: "gtceu:titanex-879-htb_plate",
            B: "gtceu:tungsten_steel_rotor", //arg 3: the mapping object
            C: "gtceu:double_titanex-594-hta_plate",
            D: "gtceu:long_titanex-594-hta_rod"
        }
    )

    // calorie_conversion("uranium_cookies", "hungry", "gtceu:thorium_dust", 15, 8192, "gtceu:steam 500")
    // calorie_conversion("uranium_cookies", "lcptr", "gtceu:thorium_dust", 60, 4096, "gtceu:steam 100")

    // calorie_conversion("cookie", "hungry", "gtceu:carbon_dust", 3.75, 2048)
    // calorie_conversion("cookie", "lcptr", "gtceu:carbon_dust", 15, 1024)

    advanced_calorie_conversion('uranium_cookies', 'gtceu:thorium_dust', 25, 16384 * 1.5, 'gtceu:steam 500', 5)

    advanced_calorie_conversion('crystal_cookies', 'gtceu:tiny_uraninite_dust', 25, 16384 * 2, 'gtceu:steam 1000', 8)

    advanced_calorie_conversion('cookie', 'gtceu:carbon_dust', 2, 8192, 'gtceu:steam 500', 1)

    advanced_calorie_conversion('mana_infused_cookies', 'botania:fertilizer', 8, 12000, 'gtceu:steam 500', 3)
    advanced_calorie_conversion('uncanny_cookies', 'gtceu:small_ender_pearl_dust', 128, 4096, 'gtceu:steam 250', 3)
    advanced_calorie_conversion('source_berry_cookies', 'gtceu:tiny_source_dust', 24, 8192, 'gtceu:steam 1000', 2)

    advanced_calorie_conversion('double_chocolate_cookies', 'gtceu:carbon_dust', 1, 8192 + 2048, 'gtceu:steam 1000', 1)

    advanced_calorie_conversion('honey_cookies', 'minecraft:honeycomb', 16, 8192, 'gtceu:steam 500', 1)


    // calorie_conversion('cookie', 'hungry_hungry', 'gtceu:graphite_dust', 3, 4096)
})
