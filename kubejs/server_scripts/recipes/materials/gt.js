
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
};

const voltTier = (tier) => voltageTable[tier];

const fullName = (name) => 'kubejs:' + name;


ServerEvents.recipes(event => {

    function create_mixer_recipe(name, ingredientsItem, fluidIngredients, itemOutputs, tier, time)
    {
        event.recipes.gtceu.mixer(fullName(name))
            .itemInputs(ingredientsItem)
            .inputFluids(fluidIngredients)
            .itemOutputs(itemOutputs)
            .duration(time)
            .EUt(tier);
    }
    

    create_mixer_recipe('tin_silver_alloy_mix',['3x gtceu:silver_dust', '4x gtceu:tin_dust'], [], ['7x gtceu:tin_silver_alloy_dust'], voltTier('lv'), 900);
    create_mixer_recipe('metallic_mica_oil',['1x gtceu:silver_dust', '3x gtceu:mica_dust'], ['gtceu:oil_heavy 400'], ['4x gtceu:metallic_mica_dust'], voltTier('lv'), 600);
    create_mixer_recipe('aluminium_lithium_dust_mix',['1x gtceu:aluminium_dust', '1x gtceu:lithium_dust'], [], ['2x gtceu:aluminium_lithium_compound_dust'], voltTier('lv'), 600);
    create_mixer_recipe('metallic_mica_fishoil',['1x gtceu:silver_dust', '3x gtceu:mica_dust'], ['gtceu:fish_oil 800'], ['4x gtceu:metallic_mica_dust'], voltTier('lv'), 600);
    create_mixer_recipe('metallic_mica_seedoil',['1x gtceu:silver_dust', '3x gtceu:mica_dust'], ['gtceu:seed_oil 200'], ['4x gtceu:metallic_mica_dust'], voltTier('lv'), 600);

    create_mixer_recipe('fluix_dust',['1x minecraft:redstone', '1x gtceu:nether_quartz_dust', '1x gtceu:certus_quartz_dust'], ['minecraft:water 1000'], ['3x ae2:fluix_dust'], voltTier('ev'), 600);

    create_mixer_recipe('fluxed_electrum_mix',['3x gtceu:electrum_dust', '3x minecraft:redstone', '2x minecraft:glowstone_dust', '1x gtceu:chromium_dust'], [], ['5x gtceu:fluxed_electrum_dust'], voltTier('mv'), 300);

    create_mixer_recipe('fluxed_cobalt_electrum_mix',['3x gtceu:fluxed_electrum_dust', '2x gtceu:cobalt_dust', '1x gtceu:ruby_dust'], [], ['6x gtceu:fluxed_cobalt_electrum_dust'], voltTier('hv'), 300);

    create_mixer_recipe('fluxed_titanium_electrum_compound',['3x gtceu:fluxed_electrum_dust', '2x gtceu:titanium_dust', '4x gtceu:electrotine_dust'], ['gtceu:mercury 1000'], ['6x gtceu:fluxed_titanium_electrum_compound_dust'], voltTier('ev'), 300);

    // create_mixer_recipe('refined_fluxed_electrum_mix',['8x gtceu:refined_fluxed_electrum', '2x gtceu:cobalt_dust', '1x gtceu:ruby_dust'], [], ['6x gtceu:fluxed_cobalt_electrum_dust'], voltTier('ev'), 300);

    // refined_fluxed_electrum


});