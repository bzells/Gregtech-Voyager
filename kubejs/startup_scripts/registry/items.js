//priority: 1000

StartupEvents.registry('item', event => {
  // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
  // If you want a custom item model, you can create one in Blockbench and put it in kubejs/assets/kubejs/models/item/test_item.json


    const tiers = ['ulv', 'lv','mv','hv','ev','iv','luv','zpm','uv','uhv','uev','uiv','max'];

    const allTiers = ['stone', 'ulv', 'lv','mv','hv','ev','iv','luv','zpm','uv','uhv','uev','uiv','max'];

    function register_universal_circuit(energy_tier)
    {
        event.create(energy_tier + '_universal_circuit').texture('kubejs:item/' + energy_tier + '_universal_circuit').displayName(energy_tier.toUpperCase() + ' Universal Circuit')
    }

    function register_loot_bag(energy_tier)
    {
        event.create(energy_tier + '_loot_bag').texture('kubejs:item/' + energy_tier + '_loot_bag').tooltip('Right click to open me! Will contain ' + energy_tier + ' level rewards').displayName(energy_tier.toUpperCase() + ' Loot Bag')
    }
    
    tiers.forEach(tier => register_loot_bag(tier));
    //tiers.forEach(tier => register_universal_circuit(tier));

    const helpers = ['brick', 'track_runner', 'farmer', 'grandma', 'radiation_resistant_grandma', 'hungry', 'hungry_hungry', 'embassy', 'basic_chemist', 'advanced_chemist']

    function register_helper_item(name)
    {
        event.create(name + '_helper').texture('kubejs:item/helpers/' + name + '_helper').maxStackSize(4).rarity('uncommon').tag('kubejs:helpers');
    }

    function register_tiered_helper_item(tier, name)
    {

        const formattedName = name
            .toLowerCase()
            .replace(/\b\w/g, char => char.toUpperCase());
            event.create(tier + '_' + name + '_helper').texture('kubejs:item/helpers/' + tier + '_' + name + '_helper').maxStackSize(4).rarity('uncommon').displayName(tier.toUpperCase() + " " + formattedName + ' Helper')
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
        event.create(name + '_bag_' + level).texture('kubejs:item/' + name + '_bag_' + level).displayName(name.toUpperCase() + ' Bag ' + level).tooltip("Not yet implemented");
    }

    function register_voucher(tier)
    {
        event.create(tier + '_voucher').texture('kubejs:item/' + tier + '_voucher').displayName(tier.toUpperCase() + ' Voucher').tooltip("Can be claimed for loot rewards");
    }


	//const tiers = [ulv, lv, mv, hv, ev, iv, luv, zpm, uv, uhv, uev, uiv, max] //PROBABLY NOT NEEDED

	const tierData = { //This is so dumb that this works, pulled from the GTMaterial stack, check if the material has a .color in the ElementMaterials.java, PrimaryMaterials.java, or SecondaryMaterials on the GTCEU github
		ulv: { colorPrimary: '#bcbcbc', colorSecondary: '#521c0b', colorExtra: '#AA0000' },	//Wrought Iron
		lv: { colorPrimary: '#ffc370', colorSecondary: '#806752', colorExtra: '#fd9e3f' },	//Bronze, can add secondary ingot coloring for steel, as long as it's still in the lv object
		mv: { colorPrimary: '#8cb4c9', colorSecondary: '#0756ac9c', colorExtra: '#8ec9e9' },	//Aluminium
		hv: { colorPrimary: '#ededfd', colorSecondary: '#19191d', colorExtra: '#d0d31b' },	//Stainless
		ev: { colorPrimary: '#ed8eea', colorSecondary: '#ff64bc', colorExtra: '#ed8eea' },	//Titanium
		iv: { colorPrimary: '#687ece', colorSecondary: '#03192f', colorExtra: '#5040e6' },	//Tungsten Steel
		luv: { colorPrimary: '#d1d1d1', colorSecondary: '#000000', colorExtra: '#48d660' },	//Rhodium Plated Palladium
		zpm: { colorPrimary: '#323232', colorSecondary: '#301131', colorExtra: '' },	//Naquahda Alloy
		uv: { colorPrimary: '#578062', colorSecondary: '#308030F0', colorExtra: '' },	//Darmstadium at Home, I'm not making a radioactive texture set overlay as part of the functions
		uhv: { colorPrimary: '#FFFFFF', colorSecondary: '#000000', colorExtra: '' },	//Neutronium
		uev: { colorPrimary: '', colorSecondary: '', colorExtra: '' },	//NYI
		uiv: { colorPrimary: '', colorSecondary: '', colorExtra: '' },	//NYI
		max: { colorPrimary: '', colorSecondary: '', colorExtra: '' }	//NYI
	}

	//IMPORTANT: Secondary textures need some transparency to blend with the primary. See item/helper_computation_array/* for examples




	/**
	* @param {String}tier Is voltage tier
	* @param {String}colorPrimary Is the primary color of the tier ingot
	* @param {String}colorSecondary Is the secondary/edge color of the tier ingot
	**/
	function helperComputationCreation(tier, colorPrimary, colorSecondary) {
		if (colorPrimary.match(/#[A-Fa-f0-9]{6,8}/) && colorSecondary.match(/#[A-Fa-f0-9]{6,8}/)) {
			event.create(`${tier}_helper_computation_array`)
				.textureJson({ layer0: 'kubejs:item/helper_computation_array/base', layer1: 'kubejs:item/helper_computation_array/color_primary', layer2: 'kubejs:item/helper_computation_array/color_secondary'})
				.color(1, colorPrimary)
				.color(2, colorSecondary)
				.displayName(tier.toUpperCase()+' Helper Computation Array')
		} else {
			colorPrimary = '#FFFFFF'
			colorSecondary = '#505050'
			event.create(`${tier}_helper_computation_array`)
				.textureJson({ layer0: 'kubejs:item/helper_computation_array/base', layer1: 'kubejs:item/helper_computation_array/color_primary', layer2: 'kubejs:item/helper_computation_array/color_secondary'})
				.color(1, colorPrimary)
				.color(2, colorSecondary)
				.displayName(tier.toUpperCase() + ' Helper Computation Array')

		}
	}

	function voucherCreation(tier, colorPrimary, colorSecondary) {
		if (colorPrimary.match(/#[A-Fa-f0-9]{6,8}/) && colorSecondary.match(/#[A-Fa-f0-9]{6,8}/)) {
			event.create(`${tier}_voucher`)
				.textureJson({ layer0: 'kubejs:item/voucher/color_primary', layer1: 'kubejs:item/voucher/color_secondary' })
				.color(0, colorPrimary)
				.color(1, colorSecondary)
				.displayName(tier.toUpperCase() + ' Voucher')
				.tooltip("Can be claimed for loot rewards")
		} else {
			event.create(`${tier}_voucher`)
				.textureJson({ layer0: 'kubejs:item/voucher/color_primary', layer1: 'kubejs:item/voucher/color_secondary' })
				.color((itemstack, tintIndex) => itemstack.nbt && itemstack.nbt[`color` + tintIndex] && !(itemstack.nbt.rainbow) ? itemstack.nbt[`color` + tintIndex] : -1) // This saves so much time closing/reopening lol
				.displayName(tier.toUpperCase() + ' Voucher')
				.tooltip("Can be claimed for loot rewards")
		}
	}

	function universalCircuitCreation(tier, colorExtra) {
		if (colorExtra.match(/#[A-Fa-f0-9]{6,8}/)) {
			event.create(`${tier}_universal_circuit`)
				.textureJson({ layer0: 'kubejs:item/universal_circuit/circuit_base', layer1: 'kubejs:item/universal_circuit/circuit_overlay' })
				.color(1, colorExtra)
				.displayName(tier.toUpperCase() + ' Universal Circuit')
		} else {
			event.create(`${tier}_universal_circuit`)
				.textureJson({ layer0: 'kubejs:item/universal_circuit/circuit_base', layer1: 'kubejs:item/universal_circuit/circuit_overlay' })
				.color((itemstack, tintIndex) => itemstack.nbt && itemstack.nbt[`color` + tintIndex] && !(itemstack.nbt.rainbow) ? itemstack.nbt[`color` + tintIndex] : -1) //Testin
				.displayName(tier.toUpperCase() + ' Universal Circuit')
				
				
		}
	}


//Test Circuit
//	universalCircuitCreation('test',tierData.lv.colorExtra)






	//Add the restructured function in a copy of this

	for (let key in tierData) { helperComputationCreation(key, tierData[key].colorPrimary, tierData[key].colorSecondary) }
	for (let key in tierData) { voucherCreation(key, tierData[key].colorPrimary, tierData[key].colorSecondary) }
	for (let key in tierData) { universalCircuitCreation(key, tierData[key].colorExtra) }

	

    

    register_bag(1, 'ars')
    register_bag(2, 'ars')
    register_bag(3, 'ars')

    event.create('stone_bag').texture('kubejs:item/stone_bag').displayName('Stone Bag');


    tiers.forEach(tier => register_magic_coin(tier));
    tiers.forEach(tier => register_universal_coin(tier));
    tiers.forEach(tier => register_tech_coin(tier));
    //tiers.forEach(tier => register_computation_array(tier));
    //tiers.forEach(tier => register_voucher(tier));

    event.create('rocket_hull_plate').texture('kubejs:item/rocket_hull_plate').maxStackSize(16).displayName('Rocket Hull Plate');
    event.create('desh_rocket_hull_plate').texture('kubejs:item/desh_rocket_hull_plate').maxStackSize(16).displayName('Desh Rocket Hull Plate');
    event.create('desh_rocket_fin').texture('kubejs:item/desh_rocket_fin').maxStackSize(16).displayName('Desh Rocket Fin');
    event.create('desh_rocket_nose_cone').texture('kubejs:item/desh_rocket_nose_cone').maxStackSize(16).displayName('Desh Rocket Nose Cone');
    event.create('desh_interplanetary_coordinatal_calculator').texture('kubejs:item/desh_interplanetary_coordinatal_calculator').maxStackSize(16).displayName('Desh Interplanetary Coordinatal Calculator');

    event.create('titanite_rocket_hull_plate').texture('kubejs:item/titanite_rocket_hull_plate').maxStackSize(16).displayName('Titanite Rocket Hull Plate');
    event.create('titanite_rocket_fin').texture('kubejs:item/titanite_rocket_fin').maxStackSize(16).displayName('Titanite Rocket Fin');
    event.create('titanite_rocket_nose_cone').texture('kubejs:item/titanite_rocket_nose_cone').maxStackSize(16).displayName('Titanite Rocket Nose Cone');
    event.create('titanite_interplanetary_coordinatal_calculator').texture('kubejs:item/titanite_interplanetary_coordinatal_calculator').maxStackSize(16).displayName('Titanite Interplanetary Coordinatal Calculator');


    event.create('martian_scrap').texture('kubejs:item/martian_scrap').displayName('Martian Scrap').tooltip('§4Remnants of martian ships\n§r§8Contains materials that can not yet be synthesized without 0G');
    event.create('shredded_martian_scrap').texture('kubejs:item/shredded_martian_scrap').displayName('Shredded Martian Scrap').tooltip('§4Remnants of martian ships\n§r§8Contains materials that can not yet be synthesized without 0G');
    
    event.create('martian_contract').texture('kubejs:item/martian_contract').displayName('Martian Trade Contract').tooltip('§4Place inside of a celestial post box to recieve shipments\n§r');
    event.create('martian_shipment_t1').texture('kubejs:item/martian_shipment_t1').displayName('Martian Shipment').tooltip('§7Tier 1 Shipment\n§4Contains scrap from martian junkyards\n§r');
    event.create('martian_shipment_t2').texture('kubejs:item/martian_shipment_t2').displayName('Martian Shipment').tooltip('§bTier 2 Shipment\n§4Contains unsythesized martian compounds\n§r');
    event.create('martian_shipment_t3').texture('kubejs:item/martian_shipment_t3').displayName('Martian Shipment').tooltip('§cTier 3 Shipment\n§4Contains precious martian artifacts\n§r');
    event.create('celestial_radio').texture('kubejs:item/celestial_radio').displayName('Celestial Radio').tooltip('§cIs anyone out there?\nRight click to send a radio signal');

    event.create('compressed_grout').texture('kubejs:item/compressed_grout').displayName('Compressed Grout');


    // cookies

    event.create('grandmas_baking_sheet').texture('kubejs:item/grandmas_baking_sheet').maxStackSize(1).displayName('Grandma\'s Super Durable Baking Sheet');
    event.create('grandmas_tungsten_baking_sheet').texture('kubejs:item/grandmas_tungsten_baking_sheet').maxStackSize(1).displayName('Grandma\'s Super Durable Radiation Proof Baking Sheet');
    event.create('baking_chocolate').texture('kubejs:item/baking_chocolate').displayName('Baking Chocolate');
    event.create('baking_flour').texture('kubejs:item/baking_flour').displayName('Baking Flour');
    event.create('cacao_powder').texture('kubejs:item/cacao_powder').displayName('Cacao Powder');
    event.create('butter').texture('kubejs:item/butter').displayName('Butter');
    event.create('roasted_cacao_beans').texture('kubejs:item/roasted_cacao_beans').displayName('Roasted Cacao Beans');
    event.create('cookie_dough').texture('kubejs:item/cookie_dough').displayName('Cookie Dough');

    event.create('ev_stomach_unit').texture('kubejs:item/ev_stomach_unit').displayName('EV Stomach Unit');
    event.create('iv_stomach_unit').texture('kubejs:item/iv_stomach_unit').displayName('IV Stomach Unit');

    event.create('uranium_cookie_dough').texture('kubejs:item/uranium_cookie_dough').displayName('§aUltra-Calorie Dense Uranium Cookie Dough');

    event.create('heart_of_gold').texture('kubejs:item/heart_of_gold').displayName('Heart of Gold');

    event.create('grandmas_uranium_cookies').texture('kubejs:item/grandmas_uranium_cookies').displayName('§aGrandma\'s Ultra-Calorie Dense Uranium Cookies')
    .tooltip(
        "§2Contains millions of calories. Optimal for bulking."
      )
    .food(food => {
    food
      .hunger(8)
      .saturation(6) // This value does not directly translate to saturation points gained
      // The real value can be assumed to be:
      // min(hunger * saturation * 2 + saturation, foodAmountAfterEating)
      .effect('minecraft:speed', 600, 0, 1)
      .alwaysEdible() // Like golden apples
      .fastToEat() // Like dried kelp
      
      .eaten(ctx => {
        ctx.player.tell(Text.gold('Grandma thanks you for eating her cookies! She invites you over for more.'))
      });
    });
    

    event.create('lcptr_helper').texture('kubejs:item/helpers/lcptr_helper').maxStackSize(1).displayName('Large Cookie-Powered Track Runner Helper').tooltip(
        "Has the digestive capacity to consume millions of calories in a short amount of time"
    );

    event.create('grandmas_cookie').texture('kubejs:item/grandmas_cookies').displayName('Grandma\'s cookies').food(food => {
    food
      .hunger(6)
      .saturation(6) // This value does not directly translate to saturation points gained
      // The real value can be assumed to be:
      // min(hunger * saturation * 2 + saturation, foodAmountAfterEating)
      .effect('minecraft:speed', 600, 0, 1)
      .alwaysEdible() // Like golden apples
      .fastToEat() // Like dried kelp
      .eaten(ctx => {
        ctx.player.tell(Text.gold('Grandma thanks you for eating her cookies! She invites you over for more.'))
      });
    });

    //

    event.create('crystalline_titanium_electrum').texture('kubejs:item/crystalline_titanium_electrum').displayName('Crystalline Titanium Electrum').tooltip('§4Pure Capacitance');
//refined_fluxed_electrum_crystal
    event.create('refined_fluxed_electrum_crystal').texture('kubejs:item/refined_fluxed_electrum_crystal').displayName('Refined Fluxed Electrum Crystal').tooltip('§eRefined Capacitance');
    event.create('titanichite_bud').texture('kubejs:item/titanichite_bud').displayName('Titanichite Bud').tooltip('§eGlimmering Capacitance');

    // perfect electrum
    event.create('atomic_lattice').texture('kubejs:item/atomic_lattice').displayName('Atomic Lattice').tooltip('§eActs as a mold for atoms to fill');

    // misc
    event.create('explosive_heart').texture('kubejs:item/explosive_heart').displayName('Explosive Heart').tooltip('§8Rare Creeper Drop');
    event.create('heart_of_destruction').texture('kubejs:item/heart_of_destruction').displayName('Heart of Destruction');

    // venus
    event.create('venus_capsule').texture('kubejs:item/venus_capsule').displayName('§6Sandy Capsule').tooltip('§8What is inside?');

    function ancient_tech(name, dn)
    {
        event.create(`eroded_${name}`).texture(`kubejs:item/eroded_${name}`).displayName(`§6Eroded §r${dn}`).tooltip('§8Ancient secrets yet to be discovered');
        event.create(`${name}`).texture(`kubejs:item/${name}`).displayName(`${dn}`).tooltip('§8Ancient secrets revealed');
    }

    ancient_tech('light_refractor', 'Light Refractor');
    ancient_tech('atomic_magnet', 'Atomic Magnet');
    ancient_tech('dial_device', 'Dial Device');
    ancient_tech('bio_filter', 'Bio Filter');

})