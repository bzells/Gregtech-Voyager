

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

GTCEuStartupEvents.materialModification(event => {

    GTMaterials.get('desh').setFormula('Ds');
    GTMaterials.get('lunite').setFormula('(Ds)2W(Si)2O4');
    GTMaterials.get('glowstone').setFormula('(Si(FeS2)5(CrAl2O3)Hg3)Au');
    GTMaterials.get('lunarium').setFormula('Lt');
    GTMaterials.get('titanite').setFormula('Tt');
    GTMaterials.get('ostrum').setFormula('Ot');
    GTMaterials.get('perfected_electrum').setFormula('*Au**Ag*');
    GTMaterials.get('calorite').setFormula('Rc');
    GTMaterials.get('calorite_carbide').setFormula('Rc4C2');
    GTMaterials.get('industrial_perfected_electrum').setFormula('(*Au**Ag*)5(C2Rc4)');
    

});


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
            .fluid()
            .components(ingredients)
            .color(color)
            .iconSet('shiny')
            .cableProperties(volts, amp, 0, true)
            .flags(foil, gear, long_rod, plates, rod, rotor, small_gear, ring, frame, fine_wire, no_decomp, no_smelt);

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
            .fluid()
            .components(ingredients)
            .color(color)
            .iconSet('metallic')
            .flags(foil, gear, long_rod, plates, rod, rotor, small_gear, ring, frame, fine_wire);

        if (ebf) {
            mat.blastTemp(blasting[0], blasting[1], blasting[2], blasting[3]);
        }

    });
}

function register_ore_metal(name, ingredients, color, flags, byproducts)
{
    GTCEuStartupEvents.registry('gtceu:material', event => {
        const mat = event.create(name)
            .dust()
            .ore()
            .components(ingredients)
            .color(color)
            .iconSet('metallic')
            .flags(flags);


    });
}

function register_ore_gem(name, ingredients, color, flags, byproducts)
{
    GTCEuStartupEvents.registry('gtceu:material', event => {
        const mat = event.create(name)
            .gem()
            .dust()
            .ore()
            .components(ingredients)
            .color(color)
            .iconSet('gem')
            .flags(flags);


    });
}

function register_nosmelt_metal(name, ingredients, ebf, color, blasting, genrotor, tier)
{
    GTCEuStartupEvents.registry('gtceu:material', event => {
        const mat = event.create(name)
            .ingot()
            .dust()
            .fluid()
            .components(ingredients)
            .color(color)
            .iconSet('metallic')
            .cableProperties(tier, 1, 4, false)
            .flags(foil, gear, long_rod, plates, rod, rotor, small_gear, ring, frame, fine_wire, no_smelt);

        if (ebf) {
            mat.blastTemp(blasting[0], blasting[1], blasting[2], blasting[3]);
        }
        if(genrotor)
        {
            // power, efficiency, damage, durability
            mat.rotorStats(genrotor[0], genrotor[1], genrotor[2], genrotor[3])
        }

    });
}

function register_nosmelt_elem_metal(name, ingredients, ebf, color, blasting, genrotor, tier)
{
    GTCEuStartupEvents.registry('gtceu:material', event => {
        const mat = event.create(name)
            .ingot()
            .dust()
            .fluid()
            .element(GTElements.get(name))
            .color(color)
            .iconSet('metallic')
            .cableProperties(tier, 1, 4, false)
            .flags(foil, gear, long_rod, plates, rod, rotor, small_gear, ring, frame, fine_wire, no_smelt);

        if (ebf) {
            mat.blastTemp(blasting[0], blasting[1], blasting[2], blasting[3]);
        }
        if(genrotor)
        {
            // power, efficiency, damage, durability
            mat.rotorStats(genrotor[0], genrotor[1], genrotor[2], genrotor[3])
        }

    });
}

function register_dust(name, ingredients, color, flags)
{
    GTCEuStartupEvents.registry('gtceu:material', event => {
        const mat = event.create(name)
            .dust()
            .components(ingredients)
            .color(color)
            .iconSet('dull')
            .flags(flags)
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

function register_fluid(name, color, ingredients, flags)
{
    GTCEuStartupEvents.registry('gtceu:material', event => {
        const mat = event.create(name)
            .fluid()
            .components(ingredients)
            .color(color)
            .flags(flags)
    });
}

function register_gas(name, color, ingredients, flags)
{
    GTCEuStartupEvents.registry('gtceu:material', event => {
        const mat = event.create(name)
            .gas()
            .components(ingredients)
            .color(color)
            .flags(flags)
    });
}

function register_plasma(name, color, ingredients, flags)
{
    GTCEuStartupEvents.registry('gtceu:material', event => {
        const mat = event.create(name)
            .plasma()
            .components(ingredients)
            .color(color)
            .flags(flags)
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



register_gem("source", '0xd745ff', [], )

register_fluid('acetylene','0xfff2f2', ['2x carbon', '2x hydrogen'], electrolyze)
register_fluid('ilmenite_slurry','0x1a1818', [], no_decomp)
register_fluid('ilmenite_residue','0x1a1616', [], no_decomp)

register_dust('calcium_carbide', ['calcium', '2x carbon'], '0xffcfff', electrolyze)
register_dust('calorite_carbide', ['4x calorite', '2x carbon'], '0x3d304d', no_decomp)

register_metal('metallic_mica', ['3x mica', '1x silver'], false, '0xaba376', [0, null, voltTier('lv'), 0]);

register_nosmelt_elem_metal('desh', [], true, '0xd44e06', [3600, 'mid', voltTier('ev'), 20*64], [300, 150, 1, 100000], voltTier('iv'));

register_dust('desh_dioxide', ['desh', '2x oxygen'], '0xff4000', electrolyze); 

register_metal('source_steel', [], false, '0xd745ff', [0, null, voltTier('lv'), 0])
register_metal('shadow_steel', [], true, '0x10021f', [3600, 'mid', voltTier('ev'), 1800])

register_metal('perfected_electrum_base', [], false, '0x5f692a', [])

register_nosmelt_metal('industrial_perfected_electrum', [], true, '0xf5ffdb', [3600, 'mid', voltTier('ev'), 20*64], [600, 600, 1, 1000000], voltTier('zpm'))

register_dust('fluxed_titanium_electrum_compound', [], '0x2c2e16', no_decomp);
register_nosmelt_elem_metal('titanite', [], true, '0x75008c', [5400, 'mid', voltTier('iv'), 20*64], [450, 450, 1, 1000000], voltTier('luv'))
register_nosmelt_elem_metal('ostrum', [], true, '0xc785a2', [5400, 'mid', voltTier('iv'), 20*64], false, voltTier('luv'))

register_superconductor('tin_silver_alloy',['3x silver ', '4x tin'], false, '0xbfcdd6', 32, 1, [0, null, voltTier('lv'), 0]);
register_superconductor('fluxed_electrum',[], true, '0xfcad03', 128, 1, [0, null, voltTier('lv'), 0]);
register_superconductor('fluxed_cobalt_electrum', [], true, '0x006387', 512, 1, [0, null, voltTier('lv'), 0]);
register_superconductor('refined_fluxed_electrum', [], true, '0xdbff66', 2048, 4, [3600, 'mid', voltTier('ev'), 20*64]);
register_superconductor('titanite_alloy',['4x titanite', '2x tungsten', '3x lunarium', '2x graphene', '3x refined_fluxed_electrum', '2x fluorine', 'electrotine'], true, '0xff1284', 8192, 8, [4500, 'mid', voltTier('iv'), 1]);
register_superconductor('perfected_electrum', [], true, '0xfffef7', 32768, 8, [7200, 'high', voltTier('luv'), 1]);


register_fluid('lunarium_growth_slurry','0x1fff1a', ['3x lunarium', '4x chlorine', '2x fluorine', '1x carbon'], no_decomp)
// platline
register_dust('dewatered_iridium_metal_residue', [], '0x094235', no_decomp);
register_dust('impure_iridium_metal', [], '0x094235', no_decomp);

register_fluid('acidic_shiny_metal_mixture','0x4f6cab', [], no_decomp)
register_fluid('impure_shiny_metal_mixture','0x152536', [], no_decomp)
register_dust('shiny_metallic_residue', [], '0x3b4724', no_decomp);

register_fluid('sulfuric_rhodium_solution','0x6c367a', [], no_decomp)
register_fluid('sulfuric_inert_metal_solution','0x2b1221', [], no_decomp)
register_fluid('acidic_ruthenium_solution','0x3a333d', [], no_decomp)
register_dust('impure_rhodium_sludge','0x3a111a', [], no_decomp)

register_dust('plat_palladium_metal_residue','0x44374a', [], no_decomp)
register_fluid('sulfuric_plat-palladium_metal_solution','0x512e52', [], no_decomp)

register_fluid('sulfuric_kerosene','0xaaa22f', [], no_decomp)
register_fluid('kerosene','0x00000f', ['12x carbon', '26x hydrogen'], electrolyze)

// moon ores
register_ore_metal('lunite', ['2x desh','1x tungsten', '2x silicon','4x oxygen'], '0x5c4e3c', [no_decomp], [])
register_ore_gem('socochalamite', ['2x amethyst', '1x rutile', '4x glowstone', '6x fluorine', '2x mercury'], '0x7764b0', [electrolyze], [])
register_ore_gem('glunite', ['1x amethyst', '5x glowstone', '1x hydrogen'], '0xffbf00', [electrolyze], [])

// mars ores
register_ore_gem('titanichite', ['2x titanite', 'fluorine'], '0xff0055', [no_decomp], [])
register_ore_metal('ostrite', ['3x oxygen', '12x chlorine', '8x ostrum'], '0xc785a2', [electrolyze]);
register_ore_metal('dalumite', ['3x oxygen', '8x desh'], '0xad7600', [electrolyze]);

register_dust('martian_sand', [], '0x732a22', no_decomp)

// desh line
register_dust('desh_group_sludge',[],'0x331305', no_decomp)
register_nosmelt_elem_metal('lunarium', [], true, '0x000d61', [4500, 'mid', voltTier('iv'), 20*64], [200, 500, 1, 100000], voltTier('iv'))


register_dust('lunar_metal_residue', ['desh', 'titanium', '3x glowstone', '2x gold'], '0x634d21', no_decomp)
register_fluid('sulfuric_lunar_metal_residue','0x634d21', [], no_decomp)

register_dust('dense_metal_mixture', ['lunarium', 'tungsten', 'water', '4x oxygen'], '0x200e42', no_decomp)
register_dust('lunarium_metal_sludge', ['lunarium', 'water'], '0x360d1c', no_decomp)
register_dust('dewatered_lunarium_metal_mixture', ['lunarium', 'desh', 'titanium', '3x glowstone', '2x gold', '2x carbon', '3x hydrogen', 'zinc', 'barium'], '0x657e9c', no_decomp)
register_dust('impure_lunarium', ['lunarium', 'desh', '1x carbon', 'calcium'], '0x7fa9b0', electrolyze)

// titanite

// misc

// venus
register_dust('venus_sand', [], '0xb38930', no_decomp)
register_nosmelt_elem_metal('calorite', [], true, '0xa10030', [3600, 'mid', voltTier('ev'), 20*64], false, voltTier('zpm'));
register_plasma('degenerate_electrum_light_matter', '0xfffef7', 'electrum', no_decomp)
register_gas('venus_air', '0xb3721d', [], [no_decomp])
register_fluid('liquid_venus_air', '0xcf892d', [], [no_decomp])

register_fluid('uranium_ethanol_solution','0x91e600', ['uranium_235', 'ethanol'], no_decomp)

register_gas('martian_air', '0x4a140e', [], [no_decomp])
register_fluid('liquid_martian_air', '0x732a22', [], [no_decomp])

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