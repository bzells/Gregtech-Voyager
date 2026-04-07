

// stole ts STRAIGHT from Star Technology, super useful
const DULL = GTMaterialIconSet.DULL;
const METALLIC = GTMaterialIconSet.METALLIC;
const MAGNETIC = GTMaterialIconSet.MAGNETIC;
const SHINY = GTMaterialIconSet.SHINY;
const BRIGHT = GTMaterialIconSet.BRIGHT;
const DIAMOND = GTMaterialIconSet.DIAMOND;
const EMERALD = GTMaterialIconSet.EMERALD;
const GEM_HORIZONTAL = GTMaterialIconSet.GEM_HORIZONTAL;
const GEM_VERTICAL = GTMaterialIconSet.GEM_VERTICAL;
const RUBY = GTMaterialIconSet.RUBY;
const OPAL = GTMaterialIconSet.OPAL;
const GLASS = GTMaterialIconSet.GLASS;
const NETHERSTAR = GTMaterialIconSet.NETHERSTAR;
const FINE = GTMaterialIconSet.FINE;
const SAND = GTMaterialIconSet.SAND;
const WOOD = GTMaterialIconSet.WOOD;
const ROUGH = GTMaterialIconSet.ROUGH;
const FLINT = GTMaterialIconSet.FLINT;
const LIGNITE = GTMaterialIconSet.LIGNITE;
const QUARTZ = GTMaterialIconSet.QUARTZ;
const CERTUS = GTMaterialIconSet.CERTUS;
const LAPIS = GTMaterialIconSet.LAPIS;
const FLUID = GTMaterialIconSet.FLUID;
const RADIOACTIVE = GTMaterialIconSet.RADIOACTIVE;

// Flags
// Generic flags
const no_unify = GTMaterialFlags.NO_UNIFICATION;
const electrolyze = GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING;
const centrifuge = GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING;
const no_decomp = GTMaterialFlags.DISABLE_DECOMPOSITION;
const explosive = GTMaterialFlags.EXPLOSIVE;
const flammable = GTMaterialFlags.FLAMMABLE;
const sticky = GTMaterialFlags.STICKY;
const phosphorescent = GTMaterialFlags.PHOSPHORESCENT;
// Generation Flags
// Dust Flags
const plates = GTMaterialFlags.GENERATE_PLATE;
const dense_plate = GTMaterialFlags.GENERATE_DENSE;
const rod = GTMaterialFlags.GENERATE_ROD;
const bolt_and_screw = GTMaterialFlags.GENERATE_BOLT_SCREW;
const frame = GTMaterialFlags.GENERATE_FRAME;
const gear = GTMaterialFlags.GENERATE_GEAR;
const long_rod = GTMaterialFlags.GENERATE_LONG_ROD;
const block = GTMaterialFlags.FORCE_GENERATE_BLOCK;
// Ingot Flags
const foil = GTMaterialFlags.GENERATE_FOIL;
const ring = GTMaterialFlags.GENERATE_RING;
const spring = GTMaterialFlags.GENERATE_SPRING;
const small_spring = GTMaterialFlags.GENERATE_SPRING_SMALL;
const small_gear = GTMaterialFlags.GENERATE_SMALL_GEAR;
const fine_wire = GTMaterialFlags.GENERATE_FINE_WIRE;
const rotor = GTMaterialFlags.GENERATE_ROTOR;
const round = GTMaterialFlags.GENERATE_ROUND;
const magnetic = GTMaterialFlags.IS_MAGNETIC;
// Gem Flags
const crystallizable = GTMaterialFlags.CRYSTALLIZABLE;
const lens = GTMaterialFlags.GENERATE_LENS;
// Fluid Flags
const solder_mat = GTMaterialFlags.SOLDER_MATERIAL;
const solder_mat_bad = GTMaterialFlags.SOLDER_MATERIAL_BAD;
const solder_mat_good = GTMaterialFlags.SOLDER_MATERIAL_GOOD;
// Ore Flags
const more_sifter = GTMaterialFlags.HIGH_SIFTER_OUTPUT;
// Misc
const no_block_craft = GTMaterialFlags.EXCLUDE_BLOCK_CRAFTING_RECIPES;
const no_plate_compressor_craft = GTMaterialFlags.EXCLUDE_PLATE_COMPRESSOR_RECIPE;
const no_hand_craft = GTMaterialFlags.EXCLUDE_BLOCK_CRAFTING_BY_HAND_RECIPES;
const mortar_grind = GTMaterialFlags.MORTAR_GRINDABLE;
const no_working = GTMaterialFlags.NO_WORKING;
const no_smashing = GTMaterialFlags.NO_SMASHING;
const no_smelt = GTMaterialFlags.NO_SMELTING;
const blast_furnace_double = GTMaterialFlags.BLAST_FURNACE_CALCITE_DOUBLE;
const blast_furnace_triple = GTMaterialFlags.BLAST_FURNACE_CALCITE_TRIPLE;
const no_abs_recipe = GTMaterialFlags.DISABLE_ALLOY_BLAST;
const not_alloy = GTMaterialFlags.DISABLE_ALLOY_PROPERTY;

// super conductor


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

const voltTier2A = (tier) => voltageTable[tier] * 2;

const voltTierHalf = (tier) => voltageTable[tier] / 2;

function register_superconductor(name, ingredients, ebf, color, volts, amp, blasting) {
    GTCEuStartupEvents.registry('gtceu:material', event => {

        const mat = event.create(name)
            .ingot()
            .dust()
            .components(ingredients)
            .color(color)
            .iconSet('shiny')
            .cableProperties(volts, amp, 0, true)
            .flags(foil, gear, long_rod, plates, rod, rotor, small_gear, ring, frame, fine_wire, no_decomp);

        if (ebf) {
            mat.blastTemp(blasting[0], blasting[1], blasting[2], blasting[3]);
        }

    });
}

function register_metal(name, ingredients, ebf, color, blasting)
{
    GTCEuStartupEvents.registry('gtceu:material', event => {
        const mat = event.create(name)
            .ingot()
            .dust()
            .components(ingredients)
            .color(color)
            .iconSet('metallic')
            .flags(foil, gear, long_rod, plates, rod, rotor, small_gear, ring, frame, fine_wire);

        if (ebf) {
            mat.blastTemp(blasting[0], blasting[1], blasting[2], blasting[3]);
        }

    });
}

function register_gem(name, color, ingredients) 
{
        GTCEuStartupEvents.registry('gtceu:material', event => {
        const mat = event.create(name)
            .gem()
            .dust()
            .ore(2, 3)
            .components(ingredients)
            .color(color)
            .iconSet('shiny')
            .flags(foil, long_rod, plates, rod, ring, frame, lens)
    });
}

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('aluminium_lithium_compound')
        .ingot()
        .dust()
        .components(['aluminium', 'lithium'])
        .color('0x697a82')
        .iconSet('metal')
        .flags(foil);

});

register_gem("source", '0xd745ff', [])

register_metal('metallic_mica', ['3x mica', '1x silver'], false, '0xaba376', [0, null, voltTier('lv'), 0]);

register_metal('source_steel', [], false, '0xd745ff', [0, null, voltTier('lv'), 0])
register_metal('shadow_steel', [], true, '0x10021f', [3600, 'mid', voltTier('ev'), 1800])

register_superconductor('tin_silver_alloy',['3x silver ', '4x tin'], false, '0xbfcdd6', 32, 1, [0, null, voltTier('lv'), 0]);
register_superconductor('fluxed_electrum',[], true, '0xfcad03', 128, 1, [0, null, voltTier('lv'), 0]);
register_superconductor('fluxed_cobalt_electrum', [], true, '0x006387', 512, 1, [0, null, voltTier('lv'), 0]);
// register_superconductor('refined_fluxed_electrum', true, '0xff9d00', 2048, 4, [3600, 'mid', voltTier('ev'), 600]);
// register_superconductor('desh_infused_refined_electrum', true, '0xcf1fc0', 8192, 8, [4500, 'mid', voltTier('iv'), 1]);
// register_superconductor('desh_rhodium_infused_refined_electrum', true, '0xf57040', 32768, 8, [7200, 'high', voltTier('luv'), 1]);
// register_superconductor('perfected_electrum', true, '0xfffef7', 131072, 64, [9001, 'high', voltTier('zpm'), 1]);
// register_superconductor('trilectrum', true, '0xe3527d', 524288, 64, [10080, 'higher', voltTier('uv'), 1]);
// register_superconductor('hyperdense_neutronic_superelectrum', true, '0xffffff', 2097152, 256, [11880, 'higher', voltTier('uhv'), 1]);
// register_superconductor('sculk_corrupted_hyperdense_neutronic_superelectrum', true, '0x1a595e', 8388608, 512, [11880, 'highest', voltTier('uev'), 1]);
// register_superconductor('atomically_perfected_metallic_royal_honey', true, '0xff6a00', 33554432, 4096, [11880, 'highest', voltTier('uiv'), 1]);
// register_superconductor('exposed_metallic_dark_royal_honey', true, '0xff6a00', 134217728, 8192, [11880, 'highest', voltTier('uxv'), 1]);


/*
    Materials are in-game items or fluids. They can be dusts, ingots, gems, fluids and all their derivatives.
    To make a new material(NOTE: to add a material that is present on the periodic table, but 
        it doesn't have any in-game items/fluids, look below for how to do it),
    write an `event.create()` call in the bellow registering function.
    Write inside the parantheses the name of the material inside '' or "".
    You can change the properties of the material by adding any combination of the following calls:
        .ingot() -> this will make the material have both an ingot and dust form.
        .dust() -> this will make the material have a dust form. Don't use this together with .dust().
        .gem() -> this will make the material have both a gem form and a dust form. Don't use thos together with .dust() or .ingot()
        .fluid() -> this will make the material have a fluid form. 
        .gas() -> this will make the material have a gas(fluid) form with gas properties. 
        .plasma() -> this will make the material have a plasma(fluid) form with plasma properties.
        .polymer() -> this will make the material have a dust form with polymer properties.
            For .ingot(), .dust() and .gem(), optionally you can put inside the parantheses any of these sets of parameters:
                1. harvest level (ex. .ingot(2) will make the material have the harvest level of iron tools)
                2. harvest level, burn time (2x. ingot(2, 2000) will make the material have the harvest level of iron tools and will burn in furnaces as fuel for 2000 ticks or 100 seconds).
        .burnTime(burn time in ticks) -> this will turn the material into a furnace fuel.
        .fluidBurnTime(burn time in ticks) -> how long the fluid of the material will burn.
        .color(color code) -> gives the material a color. The colo must be providen in the following form: 0xNNNNNN, where N are digits.
            To chose a color for your material, you can checkout https://www.w3schools.com/colors/colors_picker.asp
            After you select a color with the above tool, copy the 6 digits that follow the # under the color preview.
        .secondaryColor(color code) -> gives the material a secondary color. If this is not being called, the secondary value will default to white(0xffffff).
        .iconSet(set) -> gives the material an icon set. View line 9 to see the posible icon sets.
        .components(component1, component2, ...) -> describes the composition. The components are a list of elements of the following form: 'Kx material_name', where K is a positive integer.
            Depending on the composition, gt will autogenerate an electrolyzer or centrifuge recipe to decompose the material. You can block that by adding the disable decomposition flag.
        .flags(flag1, flag2, ...) -> flags can be used to select certain properties of the material, like generating gears, or disabling decomposition.
        .element(element) -> similar to .components(), but is used when the material represents an element. 
            See line X for a list of posible flags.
        .rotorStats(power, efficiency, damage, durability) -> this will create a turbine rotor from this material.
        blastTemp() -> this is meant to be paired together with .ingot(). Will generate a EBF recipe(and an ABS recipe) based on the parameters you give it:
            1. temperature -> dictates what coil tier it will require(check the coil tooltips for their max temperature). 
                If the temperature is below 1000, it will also generate a PBF recipe.
                If temperature is above 1750, a hot ingot will be generated, this requiring a Vacuum Freezer.
            2. (optional) gas tier -> can be null for none, 'low' for nitrogen, 'mid' for helium, 'high' for argon, 'higher' for neon or 'highest' for krypton.
            3. (optional) EU per tick -> the recipe voltage
                (USEFUL NOTE: gt has some inbuilt functions to ease chosing the voltages, you can use V('tier') for full amp, VA('tier') for full amp, but adjusted for cable loss, VH('tier) for half an amp or VHA('tier) for half an amp adjusted for cable loss).
            4. (optional) duration in ticks -> how long the recipe should take
        .ore() -> this will create an ore from the material.
            Optionally you can add any of these sets of parameters:
                1. is emissive -> true for emissive textures
                2. ore multiplier and byproduct multiplier -> how many crushed ores will be given from one raw ore and how many byproducts dusts will be given throughout the ore processing
                3. ore multiplier, byproduct multiplier, is emissive
        .washedIn()
        .separatedIn()
        .separatedInto()
        .oreSmeltInto()
        .polarizesInto()
        .arcSmeltInto()
        .maceratesInto()
        .ingotSmeltInto()
        .addOreByproducts()
        .cableProperties() -> generates wires and cables(if material is not a superconducter). The following parameter sets can be given:
            1. Voltage, amperage, loss per block
            2. Voltage, amperage, loss per block, is superconductor -> for a super conductor, set loss as 0 and is super conductor as true
            3. Voltage, amperage, loss per block, is super conductor and critical temperature
        .toolProperties()
        .fluidPipeProperties() ->
            (int maxTemp, int throughput [tiny pipe], boolean gasProof, boolean acidProof, boolean cryoProof, boolean plasmaProof)
        .itemPipeProperties() ->
            (int priority, float stacksPerSec)
        .addDefaultEnchant()
        
*/