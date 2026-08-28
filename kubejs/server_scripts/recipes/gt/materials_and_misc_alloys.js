ServerEvents.recipes((event) => {
    /**
     * @type {Record<string, number>}
     */
    const voltageTable = {
        lv: 32,
        mv: 128,
        hv: 512,
        ev: 2048,
        iv: 8192,
        luv: 32768,
        zpm: 131072,
        uv: 524288,
        uhv: 2097152,
        uev: 8388608,
        uiv: 33554432,
        uxv: 134217728
    }

    // @ts-ignore
    const voltTier = (tier) => voltageTable[tier]

    // @ts-ignore
    const fullName = (name) => "kubejs:" + name
    // @ts-ignore
    function create_mixer_recipe(name, ingredientsItem, fluidIngredients, itemOutputs, tier, time) {
        event.recipes.gtceu.mixer(fullName(name)).itemInputs(ingredientsItem).inputFluids(fluidIngredients).itemOutputs(itemOutputs).duration(time).EUt(tier)
    }

    // @ts-ignore
    function implosion_compressor_recipe(name, ingredientsItem, fluidIngredients, itemOutputs, tier, time) {
        event.recipes.gtceu.implosion_compressor(fullName(name)).itemInputs(ingredientsItem).inputFluids(fluidIngredients).itemOutputs(itemOutputs).duration(time).EUt(tier)
    }

    create_mixer_recipe("tin_silver_alloy_mix", ["3x gtceu:silver_dust", "4x gtceu:tin_dust"], [], ["7x gtceu:tin_silver_alloy_dust"], voltTier("lv"), 900)
    create_mixer_recipe("metallic_mica_oil", ["1x gtceu:silver_dust", "3x gtceu:mica_dust"], ["gtceu:lubricant 400"], ["4x gtceu:metallic_mica_dust"], voltTier("lv"), 600)
    create_mixer_recipe("aluminium_lithium_dust_mix", ["1x gtceu:aluminium_dust", "1x gtceu:lithium_dust"], [], ["2x gtceu:aluminium_lithium_compound_dust"], voltTier("lv"), 600)
    create_mixer_recipe("metallic_mica_fishoil", ["1x gtceu:silver_dust", "3x gtceu:mica_dust"], ["gtceu:fish_oil 300"], ["4x gtceu:metallic_mica_dust"], voltTier("lv"), 600)
    create_mixer_recipe("metallic_mica_seedoil", ["1x gtceu:silver_dust", "3x gtceu:mica_dust"], ["gtceu:seed_oil 200"], ["4x gtceu:metallic_mica_dust"], voltTier("lv"), 600)
    create_mixer_recipe("metallic_mica_polymer", ["1x gtceu:silver_dust", "3x gtceu:mica_dust"], ["gtceu:component_polymer 200"], ["8x gtceu:metallic_mica_dust"], voltTier("ev"), 600)
    create_mixer_recipe("metallic_mica_hsl", ["1x gtceu:silver_dust", "3x gtceu:mica_dust"], ["voyagercore:high_stress_lubricant 100"], ["16x gtceu:metallic_mica_dust"], voltTier("luv"), 600)


    create_mixer_recipe(
        "industrial_perfected_electrum",
        ["5x gtceu:perfected_electrum_dust", "2x gtceu:calorite_carbide_dust"],
        "gtceu:yttrium 100",
        "7x gtceu:industrial_perfected_electrum_dust",
        voltTier("luv"),
        20 * 7 * 9
    )
    create_mixer_recipe("calorite_barbide_dust", ["4x gtceu:calorite_dust", "2x gtceu:graphene_dust"], [], "6x gtceu:calorite_carbide_dust", voltTier("luv"), 20 * 6 * 5)

    create_mixer_recipe("fluix_dust", ["1x minecraft:redstone", "1x gtceu:nether_quartz_dust", "1x gtceu:certus_quartz_dust"], ["minecraft:water 1000"], ["3x ae2:fluix_dust"], voltTier("ev"), 100)

    create_mixer_recipe(
        "fluxed_electrum_mix",
        ["3x gtceu:electrum_dust", "3x minecraft:redstone", "2x minecraft:glowstone_dust", "1x gtceu:chromium_dust"],
        [],
        ["5x gtceu:fluxed_electrum_dust"],
        voltTier("mv"),
        300
    )

    create_mixer_recipe(
        "fluxed_cobalt_electrum_mix",
        ["3x gtceu:fluxed_electrum_dust", "2x gtceu:cobalt_dust", "1x gtceu:ruby_dust"],
        [],
        ["6x gtceu:fluxed_cobalt_electrum_dust"],
        voltTier("hv"),
        300
    )

    create_mixer_recipe(
        "fluxed_titanium_electrum_compound",
        ["3x gtceu:fluxed_electrum_dust", "2x gtceu:titanium_dust", "4x gtceu:electrotine_dust"],
        ["gtceu:mercury 1000"],
        ["6x gtceu:fluxed_titanium_electrum_compound_dust"],
        voltTier("ev"),
        300
    )

    create_mixer_recipe("graphene", ["2x gtceu:graphite_dust", "2x gtceu:silicon_wafer", "5x gtceu:carbon_dust"], "gtceu:acetone 500", "6x gtceu:graphene_dust", voltTier("ev"), 20)

    create_mixer_recipe("trellium_base_dust", ["2x gtceu:trellium_dust", "2x gtceu:duranium_dust", "2x gtceu:sulfuria_dust"], "gtceu:radon 500", "6x gtceu:trellium_base_dust", voltTier("luv"), 20)


    create_mixer_recipe("pearlic_steel", ['2x gtceu:steel_dust', '2x gtceu:ender_pearl_dust', '2x gtceu:opal_dust'], [], '6x gtceu:pearlic_steel_dust', 120, 300)
    create_mixer_recipe("pink_steel", ['2x gtceu:vanadium_steel_dust', '2x gtceu:rose_gold_dust', '2x gtceu:red_steel_dust'], [], '6x gtceu:pink_steel_dust', 120, 300)
    create_mixer_recipe("energetic_alloy", ['2x gtceu:black_steel_dust', '2x gtceu:fluxed_electrum_dust', '2x gtceu:red_alloy_dust'], [], '6x gtceu:energetic_alloy_dust', 120, 300)
    create_mixer_recipe("energetic_pearlic_alloy", ['4x gtceu:energetic_alloy_dust', '2x gtceu:pearlic_steel_dust', '2x gtceu:pink_steel_dust', '2x gtceu:chromium_dust'], [], '10x gtceu:energetic_pearlic_alloy_dust', 480, 300)
    // create_mixer_recipe('refined_fluxed_electrum_mix',['8x gtceu:refined_fluxed_electrum', '2x gtceu:cobalt_dust', '1x gtceu:ruby_dust'], [], ['6x gtceu:fluxed_cobalt_electrum_dust'], voltTier('ev'), 300);

    // refined_fluxed_electrum

    // Smelting and blasting recipes for tin-silver alloy ingots
    event.recipes.smelting("gtceu:tin_silver_alloy_ingot", "gtceu:tin_silver_alloy_dust")
    event.recipes.blasting("gtceu:tin_silver_alloy_ingot", "gtceu:tin_silver_alloy_dust")
})
