
ServerEvents.recipes(event => {

    const { tconstruct } = event.recipes;
    event.remove({output: 'tconstruct:seared_fuel_gauge'});

    event.shaped(
                Item.of('tconstruct:seared_fuel_gauge', 1), // arg 1: output
                [
                    ' A ',
                    'ACA', // arg 2: the shape (array of strings)
                    ' A '
                ],
                {
                    A: 'tconstruct:seared_brick',
                    C: 'gtceu:bronze_drum',
                }
    );

    event.shaped(
                Item.of('tconstruct:seared_ingot_gauge', 1), // arg 1: output
                [
                    'AAA',
                    'ACA', // arg 2: the shape (array of strings)
                    'AAA'
                ],
                {
                    A: 'tconstruct:seared_brick',
                    C: 'gtceu:bronze_drum',
                }
    );

    // melting

    // alloy


    /*

        inputs: [{fluid, amount}, {fluid, amount}, ...]
        result: [fluid, amount]
        temp: temp

    */
    function tconstruct_alloy(result, inputs, temp) {
        event.custom({
            type: 'tconstruct:alloy',
            inputs: inputs.map(input => ({
                fluid: input.fluid,
                amount: input.amount
            })),
            result: {
                fluid: result.fluid,
                amount: result.amount
            },
            temperature: temp
            });
    }
    
    tconstruct.casting_table(Item.of("gtceu:firebrick"), Fluid.of("kubejs:molten_fireclay", 125)).cooling_time(80);
    tconstruct.casting_basin(Item.of("gtceu:steel_block"), Fluid.of("tconstruct:molten_steel", 90*9)).cooling_time(100);

    // alloys

    tconstruct_alloy(
        { fluid: 'kubejs:molten_fireclay', amount: 250 },
        [
            { fluid: 'tconstruct:molten_clay', amount: 200 },
            { fluid: 'tconstruct:molten_glass', amount: 50 }
        ],
        100
    );

    event.remove({id: 'tconstruct:smeltery/alloys/molten_rose_gold'})

});
