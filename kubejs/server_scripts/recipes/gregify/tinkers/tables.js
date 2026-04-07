
ServerEvents.recipes(event => {
    event.remove({output: 'tconstruct:tinker_station'});
    event.remove({output: 'tconstruct:tinkers_anvil'});
    event.remove({output: 'tconstruct:scorched_anvil'});
    event.remove({output: 'tconstruct:part_builder'});
    event.remove({output: 'tconstruct:part_chest'});
    event.remove({output: 'tconstruct:pattern'});
    

    event.shaped(
                Item.of('tconstruct:pattern', 1), // arg 1: output
                [
                    'AC ',
                    'CD ', // arg 2: the shape (array of strings)
                    '   '
                ],
                {
                    A: 'minecraft:flint',
                    C: 'minecraft:stick',
                    D: '#minecraft:planks'
                }
    );

    event.shaped(
                Item.of('tconstruct:tinker_station', 1), // arg 1: output
                [
                    'AAA',
                    'CDC', // arg 2: the shape (array of strings)
                    'C C'
                ],
                {
                    A: 'tconstruct:pattern',
                    C: '#minecraft:planks',
                    D: 'minecraft:crafting_table'
                }
    );

    event.shaped(
                Item.of('tconstruct:part_builder', 1), // arg 1: output
                [
                    'AAA',
                    'C C', // arg 2: the shape (array of strings)
                    'C C'
                ],
                {
                    A: 'tconstruct:pattern',
                    C: '#minecraft:planks',
                }
    );

    event.shaped(
                Item.of('tconstruct:part_chest', 1), // arg 1: output
                [
                    'AAA',
                    'CDC', // arg 2: the shape (array of strings)
                    'CCC'
                ],
                {
                    A: 'tconstruct:pattern',
                    C: '#minecraft:planks',
                    D: '#forge:chests'
                }
    );


    const steel_anvil = {
                        "type": "forge:nbt",
                        "item": "tconstruct:tinkers_anvil",
                        "count": 1,
                        "nbt": "{texture:\"tconstruct:steel_block\"}"
                        }

    const pig_iron_anvil = {
                        "type": "forge:nbt",
                        "item": "tconstruct:tinkers_anvil",
                        "count": 1,
                        "nbt": "{texture:\"tconstruct:pig_iron_block\"}"
                        }

    const steeleaf_anvil = {
        "type": "forge:nbt",
        "item": "tconstruct:tinkers_anvil",
        "count": 1,
        "nbt": "{texture:\"twilightforest:steeleaf_block\"}"
        }

    event.shaped(
                Item.of(steel_anvil, 1), // arg 1: output
                [
                    'AAA',
                    'CDC', // arg 2: the shape (array of strings)
                    'C C'
                ],
                {
                    A:{
                        "type": "forge:nbt",
                        "item": "tconstruct:large_plate",
                        "count": 1,
                        "nbt": "{Material:\"tconstruct:steel\"}"
                    },
                    C: 'tconstruct:seared_bricks',
                    D: 'minecraft:anvil'
                }
    );

    event.shaped(
                Item.of(pig_iron_anvil, 1), // arg 1: output
                [
                    'AAA',
                    'CDC', // arg 2: the shape (array of strings)
                    'C C'
                ],
                {
                    A:{
                        "type": "forge:nbt",
                        "item": "tconstruct:large_plate",
                        "count": 1,
                        "nbt": "{Material:\"tconstruct:pig_iron\"}"
                    },
                    C: 'tconstruct:seared_bricks',
                    D: 'minecraft:anvil'
                }
    );

    event.shaped(
                Item.of(steeleaf_anvil, 1), // arg 1: output
                [
                    'AAA',
                    'CDC', // arg 2: the shape (array of strings)
                    'C C'
                ],
                {
                    A:{
                        "type": "forge:nbt",
                        "item": "tconstruct:large_plate",
                        "count": 1,
                        "nbt": "{Material:\"tconstruct:steeleaf\"}"
                    },
                    C: 'tconstruct:seared_bricks',
                    D: 'minecraft:anvil'
                }
    );
});