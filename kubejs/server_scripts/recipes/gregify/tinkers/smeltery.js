ServerEvents.recipes((event) => {
    event.remove({ output: "tconstruct:seared_fuel_gauge" })
    event.remove({ output: "tconstruct:seared_ingot_gauge"})

    // @ts-ignore
    event.shaped(
        Item.of("tconstruct:seared_fuel_gauge", 1), // arg 1: output
        [
            " A ",
            "ACA", // arg 2: the shape (array of strings)
            " A "
        ],
        {
            A: "tconstruct:seared_brick",
            C: "gtceu:bronze_drum"
        }
    )

    // @ts-ignore
    event.shaped(
        Item.of("tconstruct:seared_ingot_gauge", 1), // arg 1: output
        [
            "AAA",
            "ACA", // arg 2: the shape (array of strings)
            "AAA"
        ],
        {
            A: "tconstruct:seared_brick",
            C: "gtceu:bronze_drum"
        }
    )

    // melting

    // alloy

    /*

        inputs: [{fluid, amount}, {fluid, amount}, ...]
        result: [fluid, amount]
        temp: temp

    */
    /**
     *
     * @param {*} result
     * @param {*} inputs
     * @param {*} temp
     */
    function tconstruct_alloy(result, inputs, temp) {
        event.custom({
            type: "tconstruct:alloy",
            inputs: inputs.map((/** @type {{ fluid: any; amount: any; }} */ input) => ({
                fluid: input.fluid,
                amount: input.amount
            })),
            result: {
                fluid: result.fluid,
                amount: result.amount
            },
            temperature: temp
        })
    }

    function tconstruct_melting(result, input, temp) {
    event.custom({
        type: "tconstruct:material_melting",
        input: input,
        result: {
            fluid: result.fluid,
            amount: result.amount
        },
        temperature: temp
    })
    }

    function tconstruct_melting_item(input, fluid, amount, temp, time) {
    event.custom({
        type: "tconstruct:melting",
        ingredient: {
            item: input
        },
        result: {
            fluid: fluid,
            amount: amount
        },
        temperature: temp,
        time: time
    })
    }

    /**
     *
     * @param {*} result
     * @param {*} fluid
     * @param {*} cooling_time
     * @param {*} cast
     */
    function casting_table(result, fluid, cooling_time, cast) {
        if (cast) {
            event
                .custom({
                    type: "tconstruct:casting_table",
                    cast: {
                        tag: cast
                    },
                    cooling_time: cooling_time,
                    fluid: {
                        amount: fluid.amount,
                        fluid: fluid.fluid
                    },
                    result: {
                        item: result
                    }
                })
                .id(`kjs:casting_table/${cast.replace("tconstruct:casts/", "")}/${result.replace(/.*:/, "")}`)
        } else {
            event
                .custom({
                    type: "tconstruct:casting_table",
                    cooling_time: cooling_time,
                    fluid: {
                        fluid: fluid.fluid,
                        amount: fluid.amount
                    },
                    result: result
                })
                .id(`kjs:casting_table/${result.replace(/.*:/, "")}_no_cast`)
        }
    }

    /**
     *
     * @param {*} result
     * @param {*} fluid
     * @param {*} cooling_time
     * @param {*} optitem
     */
    // @ts-ignore
    function _casting_basin(result, fluid, cooling_time, optitem) {
        if (optitem) {
            event
                .custom({
                    type: "tconstruct:casting_basin",
                    cast: {
                        item: optitem
                    },
                    cast_consumed: true,
                    cooling_time: cooling_time,
                    fluid: {
                        fluid: fluid.fluid,
                        amount: fluid.amount
                    },
                    result: {
                        item: result
                    }
                })
                .id(`kjs:casting_basing/${result.replace(/.*:/, "")}`)
        } else {
            event
                .custom({
                    type: "tconstruct:casting_basin",
                    fluid: {
                        fluid: fluid.fluid,
                        amount: fluid.amount
                    },
                    cooling_time: cooling_time,
                    result: {
                        item: result
                    }
                })
                .id(`kjs:casting_basing/${result.replace(/.*:/, "")}`)
        }
    }

    /**
     *
     * @param {*} fluid
     * @param {*} output
     * @param {*} temp
     */
    function tconstruct_casting(fluid, output, temp) {
        event.custom({
            type: "tconstruct:material_fluid",
            fluid: {
                fluid: fluid.fluid,
                amount: fluid.amount
            },
            temperature: temp,
            output: output
        })
    }

    casting_table("gtceu:firebrick", { fluid: "kubejs:molten_fireclay", amount: 125 }, 80, "tconstruct:casts/multi_use/ingot")
    casting_table("gtceu:firebrick", { fluid: "kubejs:molten_fireclay", amount: 125 }, 80, "tconstruct:casts/single_use/ingot")
    // @ts-expect-error arghhhhh
    event.remove({ type: "tconstruct:casting_basin", id: /tconstruct:smeltery\/casting\/metal\/.*\/block/ })

    tconstruct_melting(
    {
        fluid: "gtceu:carbon",
        amount: 144
    },
        "gm_construct:carbon",
        1000
    )
    tconstruct_melting_item(
    "gtceu:carbon_ingot",
    "gtceu:carbon",
    144,
    800,  20
    )
    tconstruct_casting(
        {
            fluid: "gtceu:carbon",
            amount: 144
        },
        "gm_construct:carbon",
        1000
    )

    // alloys

    tconstruct_alloy(
        { fluid: "kubejs:molten_fireclay", amount: 250 },
        [
            { fluid: "tconstruct:molten_clay", amount: 200 },
            { fluid: "tconstruct:molten_glass", amount: 50 }
        ],
        100
    )

    event.remove({ id: "tconstruct:smeltery/alloys/molten_rose_gold" })
})
