
ServerEvents.recipes(event => {
    event.remove({type: 'minecraft:crafting_shaped', output: 'gtceu:steel_plate'});
    event.remove({type: 'minecraft:crafting_shaped', output: 'gtceu:brass_dust'});
    event.remove({output: 'minecraft:bricks'});

});
