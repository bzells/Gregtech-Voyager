StartupEvents.registry('item', event => {
  // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
  // If you want a custom item model, you can create one in Blockbench and put it in kubejs/assets/kubejs/models/item/test_item.json


    const tiers = ['ulv', 'lv','mv','hv','ev','iv','luv','zpm','uv','uhv','uev','uiv','max'];

    function register_universal_circuit(energy_tier)
    {
        event.create(energy_tier + '_universal_circuit').texture('kubejs:item/' + energy_tier + '_universal_circuit').displayName(energy_tier.toUpperCase() + ' Universal Circuit')
    }

    function register_loot_bag(energy_tier)
    {
        event.create(energy_tier + '_loot_bag').texture('kubejs:item/' + energy_tier + '_loot_bag').tooltip('Right click to open me! Will contain ' + energy_tier + ' level rewards').displayName(energy_tier.toUpperCase() + ' Loot Bag')
    }
    
    tiers.forEach(tier => register_loot_bag(tier));
    tiers.forEach(tier => register_universal_circuit(tier));

    const helpers = ['brick', 'track_runner', 'farmer']

    function register_helper_item(name)
    {
        event.create(name + '_helper').texture('kubejs:item/helpers/' + name + '_helper').maxStackSize(1).rarity('uncommon').tag('kubejs:helpers');
    }

    function register_tiered_helper_item(tier, name)
    {

        const formattedName = name
            .toLowerCase()
            .replace(/\b\w/g, char => char.toUpperCase());
            event.create(tier + '_' + name + '_helper').texture('kubejs:item/helpers/' + tier + '_' + name + '_helper').maxStackSize(1).rarity('uncommon').displayName(tier.toUpperCase() + " " + formattedName + ' Helper')
            .tag('forge:technician_helpers')
            .tag('forge:helpers')
    }

    tiers.forEach(tier => register_tiered_helper_item(tier, 'technician'));
    tiers.forEach(tier => register_tiered_helper_item(tier, 'ebf'));

    helpers.forEach(name => register_helper_item(name));

    function register_computation_array(tier)
    {
        event.create(tier + '_helper_computation_array').texture('kubejs:item/' + tier + '_helper_computation_array').displayName(tier.toUpperCase() + ' Helper Computation Array');
    }

    function register_universal_coin(tier)
    {
        event.create(tier + '_universal_coin').texture('kubejs:item/' + tier + '_universal_coin').displayName(tier.toUpperCase() + ' Universal Coin');
    }

    function register_tech_coin(tier)
    {
        event.create(tier + '_tech_coin').texture('kubejs:item/' + tier + '_tech_coin').displayName(tier.toUpperCase() + ' Tech Coin');
    }
    function register_explorer_coin(tier)
    {
        event.create('explorer_coin_' + tier).texture('kubejs:item/'+'explorer_coin_' + tier).displayName('Explorer Coin ' + tier);
    }


    const levels = ['1', '2', '3']

    levels.forEach(tier => register_explorer_coin(tier));

    function register_magic_coin(tier)
    {
        event.create(tier + '_magic_coin').texture('kubejs:item/' + tier + '_magic_coin').displayName(tier.toUpperCase() + ' Magic Coin');
    }

    function register_bag(level, name)
    {
        event.create(name + '_bag_' + level).texture('kubejs:item/' + name + '_bag_' + level).displayName(name.toUpperCase() + ' Bag ' + level);
    }

    register_bag(1, 'ars')
    register_bag(2, 'ars')
    register_bag(3, 'ars')


    tiers.forEach(tier => register_magic_coin(tier));
    tiers.forEach(tier => register_universal_coin(tier));
    tiers.forEach(tier => register_tech_coin(tier));
    tiers.forEach(tier => register_computation_array(tier));

    event.create('rocket_hull_plate').texture('kubejs:item/rocket_hull_plate').maxStackSize(16).displayName('Rocket Hull Plate');

})