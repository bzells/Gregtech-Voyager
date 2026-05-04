function rollDropTimes()
{
    let rolls = Math.floor(Math.random() * 4) + 1;
    if(rolls > 3)
    {
        rolls = Math.floor(Math.random() * 6) + 1;
    }
    if(rolls > 5)
    {
        rolls = Math.floor(Math.random() * 9) + 1;
    }
    if(rolls > 8)
    {
        rolls = Math.floor(Math.random() * 12) + 1;
    }

    return rolls;
}

LootJS.modifiers(event => {



    event.addLootTableModifier('minecraft:chests/simple_dungeon')
        .addWeightedLoot([
            Item.of("kubejs:lv_voucher").withChance(12),
            Item.of("kubejs:mv_voucher").withChance(1),
            Item.of("kubejs:hv_voucher").withChance(.1),
            Item.of("kubejs:ars_bag_1").withChance(10),
            Item.of("kubejs:ars_bag_2").withChance(5),
            Item.of("3x gtceu:source_steel_ingot").withChance(3),
            Item.of("3x gtceu:shadow_steel_ingot").withChance(2)
        ]);

    event
        .addLootTableModifier("kubejs:stone_bag")
        .addWeightedLoot([
            Item.of("minecraft:cauldron").withChance(3/100*100),
            Item.of("minecraft:chest").withChance(12/100*100),
            Item.of("3x minecraft:flint").withChance(12/100*100),
            Item.of("gtceu:iron_gear").withChance(3/100*100),
            Item.of("gtceu:glass_tube").withChance(8/100*100),
            Item.of("gtceu:wooden_tank_valve").withChance(1/100*100),
            Item.of("gtceu:industrial_tnt").withChance(1/100*100),
            Item.of("gtceu:rubber_sapling").withChance(5/100*100),
            Item.of("gtceu:pump_deck").withChance(2),
            Item.of("farmersdelight:rice_panicle").withChance(3),
            Item.of("farmersdelight:steak_and_potatoes").withChance(2),
            Item.of("farmersdelight:chicken_soup").withChance(1),
            Item.of("minecraft:mangrove_propagule").withChance(2),
            Item.of("minecraft:pointed_dripstone").withChance(4),
            Item.of("minecraft:campfire").withChance(1),
            Item.of("minecraft:cake").withChance(1),
            Item.of("minecraft:slime_ball").withChance(8),
            Item.of("minecraft:book").withChance(12),
            Item.of("farmersdelight:canvas").withChance(4),
            Item.of("farmersdelight:netherite_knife").withChance(1),
            Item.of("farmersdelight:basket").withChance(2),
            Item.of("farmersdelight:cutting_board").withChance(2),
            Item.of("farmersdelight:skillet").withChance(2),
            Item.of("farmersdelight:stove").withChance(2),
            Item.of("farmersdelight:cooking_pot").withChance(2),
            Item.of("farmersdelight:fried_egg").withChance(1),
            Item.of("farmersdelight:shepherds_pie").withChance(1),
            Item.of("farmersdelight:ratatouille").withChance(1),
            Item.of("naturescompass:naturescompass").withChance(.15),
            Item.of("functionalstorage:oak_1").withChance(2),
            Item.of("functionalstorage:oak_2").withChance(2),
            Item.of("functionalstorage:oak_4").withChance(2),
            Item.of("minecraft:bricks").withChance(4),
            Item.of("minecraft:diamond_axe").withChance(1),
            Item.of("minecraft:diamond_pickaxe").withChance(1),
            Item.of("2x tconstruct:seared_bricks").withChance(4),
            Item.of("gtceu:bronze_ingot").withChance(8),
        ]);

    event
        .addLootTableModifier("kubejs:ulv_loot_bag")
        .addWeightedLoot([
            Item.of("minecraft:cauldron").withChance(3/100*100),
            Item.of("minecraft:piston").withChance(1/100*100),
            Item.of("gtceu:tin_rotor").withChance(3/100*100),
            Item.of("gtceu:iron_rotor").withChance(3/100*100),
            Item.of("gtceu:bronze_rotor").withChance(3/100*100),
            Item.of("gtceu:copper_rotor").withChance(3/100*100),
            Item.of("gtceu:iron_gear").withChance(3/100*100),
            Item.of("gtceu:glass_tube").withChance(8/100*100),
            Item.of("gtceu:nand_chip").withChance(2/100*100),
            Item.of("gtceu:wooden_tank_valve").withChance(1/100*100),
            Item.of("gtceu:wooden_multiblock_tank").withChance(1/100*100),
            Item.of("gtceu:ulv_output_hatch").withChance(2/100*100),
            Item.of("gtceu:ulv_input_hatch").withChance(2/100*100),
            Item.of("gtceu:ulv_input_bus").withChance(2/100*100),
            Item.of("gtceu:ulv_output_bus").withChance(2/100*100),
            Item.of("gtceu:hp_steam_solar_boiler").withChance(2/100*100),
            Item.of("gtceu:industrial_tnt").withChance(1/100*100),
            Item.of("gtceu:rubber_sapling").withChance(5/100*100),
            Item.of("gtceu:bronze_brick_casing").withChance(2/100*100),
            Item.of("gtceu:bronze_machine_casing").withChance(2/100*100),
            Item.of("gtceu:steel_brick_casing").withChance(3),
            Item.of("gtceu:pump_deck").withChance(2),
            Item.of("gtceu:ulv_machine_casing").withChance(1),
            Item.of("farmersdelight:rice_panicle").withChance(3),
            Item.of("farmersdelight:steak_and_potatoes").withChance(2),
            Item.of("farmersdelight:chicken_soup").withChance(1),
            Item.of("minecraft:mangrove_propagule").withChance(2),
            Item.of("minecraft:pointed_dripstone").withChance(4),
            Item.of("minecraft:campfire").withChance(1),
            Item.of("minecraft:cake").withChance(1),
            Item.of("minecraft:slime_ball").withChance(8),
            Item.of("minecraft:book").withChance(12),
            Item.of("farmersdelight:canvas").withChance(4),
            Item.of("farmersdelight:netherite_knife").withChance(1),
            Item.of("farmersdelight:basket").withChance(2),
            Item.of("farmersdelight:cutting_board").withChance(2),
            Item.of("farmersdelight:skillet").withChance(2),
            Item.of("farmersdelight:stove").withChance(2),
            Item.of("farmersdelight:cooking_pot").withChance(2),
            Item.of("farmersdelight:fried_egg").withChance(1),
            Item.of("farmersdelight:shepherds_pie").withChance(1),
            Item.of("farmersdelight:ratatouille").withChance(1),
            Item.of("naturescompass:naturescompass").withChance(1),
            Item.of("functionalstorage:oak_1").withChance(2),
            Item.of("functionalstorage:oak_2").withChance(2),
            Item.of("functionalstorage:oak_4").withChance(2),
            Item.of("kubejs:ulv_universal_coin").withChance(45),
            Item.of("minecraft:bricks").withChance(4),
        ]);

    event
        .addLootTableModifier("kubejs:lv_loot_bag")
        .addWeightedLoot([
            Item.of("minecraft:cauldron").withChance(3/100*100),
            Item.of("1x gtceu:basic_electronic_circuit").withChance(5),
            Item.of("1x gtceu:lv_conveyor_module").withChance(2/100*100),
            Item.of("1x gtceu:lv_electric_pump").withChance(3/100*100),
            Item.of("2x gtceu:lv_electric_motor").withChance(3/100*100),
            Item.of("1x gtceu:lv_fluid_regulator").withChance(1/100*100),
            Item.of("1x gtceu:lv_electric_piston").withChance(3/100*100),
            Item.of("1x gtceu:lv_robot_arm").withChance(2/100*100),
            Item.of("gtceu:lv_output_hatch").withChance(1/100*100),
            Item.of("gtceu:lv_input_hatch").withChance(1/100*100),
            Item.of("gtceu:lv_input_bus").withChance(1/100*100),
            Item.of("gtceu:lv_output_bus").withChance(1/100*100),
            Item.of("gtceu:hp_steam_solar_boiler").withChance(1/100*100),
            Item.of("minecraft:slime_ball").withChance(4),
            Item.of("functionalstorage:oak_1").withChance(1),
            Item.of("functionalstorage:oak_2").withChance(1),
            Item.of("functionalstorage:oak_4").withChance(1),
            Item.of("6x kubejs:lv_universal_coin").withChance(45),
            Item.of("gtceu:lv_sodium_battery").withChance(1/100*100),
            Item.of("1x kubejs:lv_helper_computation_array").withChance(0.25/100*100),
            Item.of("gtceu:lv_item_magnet").withChance(1/100*100),
            Item.of("inventorypets:pet_siamese").withChance(1/100*100),
            Item.of("inventorypets:pet_torch").withChance(1/100*100),
            Item.of("minecraft:jukebox").withChance(6/100*100),
            Item.of("gtceu:tungsten_carbide_wire_cutter_head").withChance(0.15),
            Item.of("gtceu:tungsten_carbide_drill_head").withChance(0.15),
            Item.of("gtceu:tungsten_carbide_wrench_tip").withChance(0.15),
            Item.of("gtceu:blue_steel_mining_hammer").withChance(0.5),
            Item.of("gtceu:lv_super_chest").withChance(.3),
            Item.of("kubejs:lv_loot_bag").withChance(2),
            Item.of("gtceu:lv_miner").withChance(.15),
            Item.of("gtceu:lv_pump").withChance(.15),
            Item.of("gtceu:lv_solar_panel").withChance(.1),
            Item.of("artifacts:plastic_drinking_hat").withChance(1),
            Item.of("2x functionalstorage:copper_upgrade").withChance(3),
            Item.of("gtceu:machine_controller_cover").withChance(2),
            Item.of("gtceu:steel_fluid_cell").withChance(2),
        ]);

        event
        .addLootTableModifier("kubejs:mv_loot_bag")
        .addWeightedLoot([
            Item.of("1x gtceu:good_electronic_circuit").withChance(5),
            Item.of("1x gtceu:mv_conveyor_module").withChance(3/100*100),
            Item.of("1x gtceu:mv_electric_pump").withChance(3/100*100),
            Item.of("2x gtceu:mv_electric_motor").withChance(3/100*100),
            Item.of("1x gtceu:mv_fluid_regulator").withChance(3/100*100),
            Item.of("1x gtceu:mv_electric_piston").withChance(3/100*100),
            Item.of("1x gtceu:mv_robot_arm").withChance(2/100*100),
            Item.of("1x gtceu:mv_emitter").withChance(1/100*100),
            Item.of("1x gtceu:mv_field_generator").withChance(1/100*100),
            Item.of("1x gtceu:mv_sensor").withChance(1/100*100),
            Item.of("1x gtceu:mv_output_hatch").withChance(1/100*100),
            Item.of("1x gtceu:mv_input_hatch").withChance(1/100*100),
            Item.of("1x gtceu:mv_input_bus").withChance(1/100*100),
            Item.of("2xgtceu:mv_output_bus").withChance(1/100*100),
            Item.of("6x kubejs:mv_universal_coin").withChance(45),
            Item.of("gtceu:mv_sodium_battery").withChance(2/100*100),
            Item.of("1x kubejs:mv_helper_computation_array").withChance(.5/100*100),
            Item.of("gtceu:mv_item_magnet").withChance(2/100*100),
            Item.of("inventorypets:pet_siamese").withChance(1/100*100),
            Item.of("inventorypets:pet_torch").withChance(1/100*100),
            Item.of("minecraft:jukebox").withChance(6/100*100),
            Item.of("gtceu:tungsten_carbide_wire_cutter_head").withChance(0.15),
            Item.of("gtceu:tungsten_carbide_drill_head").withChance(0.15),
            Item.of("gtceu:tungsten_carbide_wrench_tip").withChance(0.15),
            Item.of("gtceu:blue_steel_mining_hammer").withChance(0.5),
            Item.of("gtceu:mv_super_chest").withChance(1),
            Item.of("gtceu:mv_super_tank").withChance(.5),
            Item.of("kubejs:mv_loot_bag").withChance(2),
            Item.of("gtceu:mv_miner").withChance(.15),
            Item.of("gtceu:mv_pump").withChance(.15),
            Item.of("gtceu:mv_solar_panel").withChance(.1),
            Item.of("gtceu:mv_power_unit").withChance(1),
            Item.of("gtceu:machine_controller_cover").withChance(2),
            Item.of("gtceu:ender_restone_link_cover").withChance(2),
            Item.of("gtceu:fluxed_electrum_hex_wire").withChance(3),
            Item.of("8x gtceu:transistor").withChance(.5),
            Item.of("4x gtceu:diode").withChance(3),
            Item.of("6x gtceu:resistor").withChance(16),
            Item.of("3x gtceu:aluminium_fluid_cell").withChance(2),
            Item.of("4x gtceu:polyethylene_large_fluid_pipe").withChance(2),
            Item.of("1x artifacts:plastic_drinking_hat").withChance(1),
            Item.of("2x functionalstorage:copper_upgrade").withChance(3),
            Item.of({type: "minecraft:item_nbt", item: "minecraft:enchanted_book", nbt: {StoredEnchantments: [{ id: "minecraft:fortune", lvl: 1}]}}).withChance(1),
            Item.of({type: "minecraft:item_nbt", item: "minecraft:enchanted_book", nbt: {StoredEnchantments: [{ id: "apotheosis:life_mending", lvl: 1}]}}).withChance(1),
            Item.of("bhc:red_heart").withChance(1),
            Item.of("2x toms_storage:ts.inventory_connector").withChance(.1),
            Item.of("2x minecraft:ender_pearl").withChance(8),
            Item.of("1x kubejs:track_runner_helper").withChance(.25),
        ]);

        event
        .addLootTableModifier("kubejs:hv_loot_bag")
        .addWeightedLoot([
            Item.of("1x gtceu:micro_processor_assembly").withChance(1),
            Item.of("1x gtceu:hv_conveyor_module").withChance(2/100*100),
            Item.of("1x gtceu:hv_electric_pump").withChance(2/100*100),
            Item.of("2x gtceu:hv_electric_motor").withChance(2/100*100),
            Item.of("1x gtceu:hv_fluid_regulator").withChance(2/100*100),
            Item.of("1x gtceu:hv_electric_piston").withChance(2/100*100),
            Item.of("1x gtceu:hv_robot_arm").withChance(2/100*100),
            Item.of("1x gtceu:hv_emitter").withChance(1/100*100),
            Item.of("1x gtceu:hv_sensor").withChance(1/100*100),
            Item.of("1x gtceu:hv_output_hatch").withChance(1/100*100),
            Item.of("1x gtceu:hv_input_hatch").withChance(1/100*100),
            Item.of("1x gtceu:hv_input_bus").withChance(1/100*100),
            Item.of("gtceu:hv_output_bus").withChance(1/100*100),
            Item.of("8x kubejs:hv_universal_coin").withChance(75),
            Item.of("gtceu:hv_sodium_battery").withChance(1/100*100),
            Item.of("1x kubejs:hv_helper_computation_array").withChance(.5/100*100),
            Item.of("gtceu:hv_item_magnet").withChance(1/100*100),
            Item.of("4x gtceu:black_steel_ingot").withChance(3/100*100),
            Item.of({type: "minecraft:item_nbt", item: "minecraft:enchanted_book", nbt: {StoredEnchantments: [{ id: "minecraft:fortune", lvl: 2}]}}).withChance(.25),
            Item.of({type: "minecraft:item_nbt", item: "minecraft:enchanted_book", nbt: {StoredEnchantments: [{ id: "apotheosis:life_mending", lvl: 1}]}}).withChance(.25),
            Item.of({type: "minecraft:item_nbt", item: "minecraft:enchanted_book", nbt: {StoredEnchantments: [{ id: "minecraft:looting", lvl: 1}]}}).withChance(.25),
            Item.of("2x gtceu:stainless_steel_large_fluid_pipe").withChance(3/100*100),
            Item.of("1x gtceu:stainless_steel_huge_fluid_pipe").withChance(3/100*100),
            Item.of("4x gtceu:stainless_steel_normal_fluid_pipe").withChance(3/100*100),
            Item.of("gtceu:titanium_mining_hammer").withChance(0.15),
            Item.of("gtceu:hv_super_chest").withChance(.75),
            Item.of("gtceu:lv_super_tank").withChance(3),
            Item.of("kubejs:hv_loot_bag").withChance(2),
            Item.of("gtceu:hv_miner").withChance(.15),
            Item.of("gtceu:hv_pump").withChance(.25),
            Item.of("gtceu:hv_solar_panel").withChance(.15),
            Item.of("gtceu:hv_power_unit").withChance(1),
            Item.of("gtceu:machine_controller_cover").withChance(2),
            Item.of("gtceu:ender_restone_link_cover").withChance(2),
            Item.of("gtceu:fluxed_cobalt_electrum_hex_wire").withChance(3),
            Item.of("3x gtceu:stainless_steel_fluid_cell").withChance(8),
            Item.of("1x artifacts:plastic_drinking_hat").withChance(1),
            Item.of("2x functionalstorage:copper_upgrade").withChance(3),
            Item.of("bhc:red_heart").withChance(1),
            Item.of("2x toms_storage:ts.inventory_connector").withChance(1),
            Item.of("2x minecraft:ender_eye").withChance(.5),
            Item.of("1x kubejs:heart_of_gold").withChance(.15),
        ]);

    event
        .addLootTableModifier("kubejs:ev_loot_bag")
        .addWeightedLoot([
            Item.of("1x gtceu:nano_processor_assembly").withChance(4),
            Item.of("1x gtceu:ev_conveyor_module").withChance(2/100*100),
            Item.of("1x gtceu:ev_electric_pump").withChance(2/100*100),
            Item.of("2x gtceu:ev_electric_motor").withChance(4/100*100),
            Item.of("1x gtceu:ev_fluid_regulator").withChance(2/100*100),
            Item.of("1x gtceu:ev_electric_piston").withChance(4/100*100),
            Item.of("1x gtceu:ev_robot_arm").withChance(2/100*100),
            Item.of("1x gtceu:hv_emitter").withChance(1/100*100),
            Item.of("1x gtceu:ev_sensor").withChance(1/100*100),
            Item.of("1x gtceu:ev_output_hatch").withChance(1/100*100),
            Item.of("1x gtceu:ev_input_hatch").withChance(1/100*100),
            Item.of("1x gtceu:ev_input_bus").withChance(1/100*100),
            Item.of("gtceu:ev_output_bus").withChance(1/100*100),
            Item.of("8x kubejs:ev_universal_coin").withChance(75),
            Item.of("gtceu:ev_vanadium_battery").withChance(1/100*100),
            Item.of("1x kubejs:ev_helper_computation_array").withChance(.5/100*100),
            Item.of("4x gtceu:titanium_carbide_ingot").withChance(3/100*100),
            Item.of({type: "minecraft:item_nbt", item: "minecraft:enchanted_book", nbt: {StoredEnchantments: [{ id: "minecraft:fortune", lvl: 5}]}}).withChance(.25),
            Item.of({type: "minecraft:item_nbt", item: "minecraft:enchanted_book", nbt: {StoredEnchantments: [{ id: "apotheosis:life_mending", lvl: 3}]}}).withChance(.25),
            Item.of({type: "minecraft:item_nbt", item: "minecraft:enchanted_book", nbt: {StoredEnchantments: [{ id: "minecraft:looting", lvl: 5}]}}).withChance(.25),
            Item.of("gtceu:ev_super_chest").withChance(.75),
            Item.of("gtceu:mv_super_tank").withChance(3),
            Item.of("kubejs:ev_loot_bag").withChance(2),
            Item.of("gtceu:hv_solar_panel").withChance(.15),
            Item.of("gtceu:ev_power_unit").withChance(1),
            Item.of("gtceu:machine_controller_cover").withChance(2),
            Item.of("gtceu:ender_restone_link_cover").withChance(2),
            Item.of("gtceu:refined_fluxed_electrum_hex_wire").withChance(3),
            Item.of("3x gtceu:titanium_fluid_cell").withChance(8),
            Item.of("bhc:red_heart").withChance(1),
            Item.of("2x minecraft:nether_star").withChance(.5),
        ]);

});

ItemEvents.rightClicked('kubejs:stone_bag', event => {
    const player = event.player;

    for (let i = 0; i < rollDropTimes(); i++) {
        event.server.runCommandSilent(
            `/execute at ${player.username} run loot spawn ~ ~ ~ loot kubejs:stone_bag` //LOL!!! (if you know how to do this in kjs make a pull req pls)
        );

    }
        event.server.runCommandSilent(
            `/playsound minecraft:item.bundle.drop_contents player ${player.username}`
        );
    event.item.shrink(1);

});

ItemEvents.rightClicked('kubejs:ulv_loot_bag', event => {
    const player = event.player;

    for (let i = 0; i < rollDropTimes(); i++) {
        event.server.runCommandSilent(
            `/execute at ${player.username} run loot spawn ~ ~ ~ loot kubejs:ulv_loot_bag` //LOL!!!
        );

    }
        event.server.runCommandSilent(
            `/playsound minecraft:item.bundle.drop_contents player ${player.username}`
        );
    event.item.shrink(1);

});

ItemEvents.rightClicked('kubejs:lv_loot_bag', event => {
    const player = event.player;

    let rolls = Math.floor(Math.random() * 3) + 1;

    for (let i = 0; i < rollDropTimes(); i++) {
        event.server.runCommandSilent(
            `/execute at ${player.username} run loot spawn ~ ~ ~ loot kubejs:lv_loot_bag`
        );

    }        event.server.runCommandSilent(
            `/playsound minecraft:item.bundle.drop_contents player ${player.username}`
        );

    event.item.shrink(1);

});

ItemEvents.rightClicked('kubejs:mv_loot_bag', event => {
    const player = event.player;


    for (let i = 0; i < rollDropTimes(); i++) {
        event.server.runCommandSilent(
            `/execute at ${player.username} run loot spawn ~ ~ ~ loot kubejs:mv_loot_bag`
        );

    }
        event.server.runCommandSilent(
            `/playsound minecraft:item.bundle.drop_contents player ${player.username}`
        );
    event.item.shrink(1);

});

ItemEvents.rightClicked('kubejs:hv_loot_bag', event => {
    const player = event.player;

    for (let i = 0; i < rollDropTimes(); i++) {
        event.server.runCommandSilent(
            `/execute at ${player.username} run loot spawn ~ ~ ~ loot kubejs:hv_loot_bag`
        );
    }
        event.server.runCommandSilent(
            `/playsound minecraft:item.bundle.drop_contents player ${player.username}`
        );

    event.item.shrink(1);
});