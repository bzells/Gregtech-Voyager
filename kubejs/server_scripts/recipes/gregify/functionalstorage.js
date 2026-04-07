
ServerEvents.recipes(event => {
    event.remove({output: '#functionalstorage:drawer'})

    const woodtypes = ['oak', 'spruce', 'birch', 'acacia', 'jungle', 'dark_oak', 'crimson', 'warped', 'mangrove', 'cherry']

    function createDrawerRecipes(type)
    {
        event.shaped(
                Item.of('functionalstorage:' + type + '_1', 1), // arg 1: output
                [
                    'DCD',
                    'CAC', // arg 2: the shape (array of strings)
                    'DCD'
                ],
                {
                    A: 'minecraft:chest',
                    C: 'minecraft:' + type + '_planks',
                    D: 'gtceu:wrought_iron_screw'
                }
        );
        event.shaped(
                Item.of('functionalstorage:' + type + '_2', 2), // arg 1: output
                [
                    'DCD',
                    'ACA', // arg 2: the shape (array of strings)
                    'DCD'
                ],
                {
                    A: 'minecraft:chest',
                    C: 'minecraft:' + type + '_planks',
                    D: 'gtceu:wrought_iron_screw'
                }
        );
        event.shaped(
                Item.of('functionalstorage:' + type + '_4', 4), // arg 1: output
                [
                    'ACA',
                    'CDC', // arg 2: the shape (array of strings)
                    'ACA'
                ],
                {
                    A: 'minecraft:chest',
                    C: 'minecraft:' + type + '_planks',
                    D: 'gtceu:wrought_iron_screw'
                }
        );
    }

    // treated and rubber
    event.shaped(
                Item.of('functionalstorage:rubber_1', 1), // arg 1: output
                [
                    'DCD',
                    'CAC', // arg 2: the shape (array of strings)
                    'DCD'
                ],
                {
                    A: 'minecraft:chest',
                    C: 'gtceu:rubber_planks',
                    D: 'gtceu:wrought_iron_screw'
                }
        );
        event.shaped(
                Item.of('functionalstorage:rubber_2', 2), // arg 1: output
                [
                    'DCD',
                    'ACA', // arg 2: the shape (array of strings)
                    'DCD'
                ],
                {
                    A: 'minecraft:chest',
                    C: 'gtceu:rubber_planks',
                    D: 'gtceu:wrought_iron_screw'
                }
        );
        event.shaped(
                Item.of('functionalstorage:rubber_4', 4), // arg 1: output
                [
                    'ACA',
                    'CDC', // arg 2: the shape (array of strings)
                    'ACA'
                ],
                {
                    A: 'minecraft:chest',
                    C: 'gtceu:rubber_planks',
                    D: 'gtceu:wrought_iron_screw'
                }
        );
    event.shaped(
                Item.of('functionalstorage:treated_1', 1), // arg 1: output
                [
                    'DCD',
                    'CAC', // arg 2: the shape (array of strings)
                    'DCD'
                ],
                {
                    A: 'minecraft:chest',
                    C: 'gtceu:treated_wood_planks',
                    D: 'gtceu:wrought_iron_screw'
                }
        );
        event.shaped(
                Item.of('functionalstorage:treated_2', 2), // arg 1: output
                [
                    'DCD',
                    'ACA', // arg 2: the shape (array of strings)
                    'DCD'
                ],
                {
                    A: 'minecraft:chest',
                    C: 'gtceu:treated_wood_planks',
                    D: 'gtceu:wrought_iron_screw'
                }
        );
        event.shaped(
                Item.of('functionalstorage:treated_4', 4), // arg 1: output
                [
                    'ACA',
                    'CDC', // arg 2: the shape (array of strings)
                    'ACA'
                ],
                {
                    A: 'minecraft:chest',
                    C: 'gtceu:treated_wood_planks',
                    D: 'gtceu:wrought_iron_screw'
                }
        );

    //framed
    event.shaped(
        Item.of('functionalstorage:framed_1', 1), // arg 1: output
        [
            ' C ',
            'CAC', // arg 2: the shape (array of strings)
            ' C '
        ],
        {
            A: '#functionalstorage:drawer',
            C: 'gtceu:iron_plate',
        }
    );

    event.shaped(
        Item.of('functionalstorage:framed_2', 2), // arg 1: output
        [
            'AC ',
            'C C', // arg 2: the shape (array of strings)
            ' CA'
        ],
        {
            A: '#functionalstorage:drawer',
            C: 'gtceu:iron_plate',
        }
    );
    event.shaped(
        Item.of('functionalstorage:framed_4', 4), // arg 1: output
        [
            'ACA',
            'C C', // arg 2: the shape (array of strings)
            'ACA'
        ],
        {
            A: '#functionalstorage:drawer',
            C: 'gtceu:iron_plate',
        }
    );


    woodtypes.forEach(types => createDrawerRecipes(types));
});