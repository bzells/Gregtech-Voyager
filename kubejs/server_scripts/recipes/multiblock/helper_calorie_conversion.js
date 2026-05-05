ServerEvents.recipes(event => {
 

    event.shaped(
        Item.of('gtceu:power_rectangle_helper_calorie_converter', 1), // arg 1: output
        [
            'DCD',
            'BAB', // arg 2: the shape (array of strings)
            'DCD'
        ],
        {
            A: 'gtceu:hv_helper_wheel',
            B: 'gtceu:refined_fluxed_electrum_frame',  //arg 3: the mapping object
            C: '#gtceu:circuits/iv',
            D: 'kubejs:radiation_proof_lead_casing'
        }
    )

    function calorie_conversion(cookie, helper, output, time, eut)
    {
        event.recipes.gtceu.helper_calorie_conversion("kubejs:grandmas_" + cookie + "_" + helper)
                .itemInputs("kubejs:grandmas_" + cookie)
                .notConsumable("kubejs:"+ helper +"_helper")
                .itemOutputs(output)
                .inputFluids("minecraft:water 4000")
                .outputFluids('gtceu:steam 8000')
                .duration(20 * time)
                .EUt(-eut)
    }

    calorie_conversion('uranium_cookies', 'hungry', 'gtceu:thorium_dust', 15, 8192)
    calorie_conversion('uranium_cookies', 'lcptr', 'gtceu:thorium_dust', 60, 2048)

    calorie_conversion('cookie', 'hungry', 'gtceu:carbon_dust', 3.75, 2048)
    calorie_conversion('cookie', 'lcptr', 'gtceu:carbon_dust', 15, 1024)

    
})