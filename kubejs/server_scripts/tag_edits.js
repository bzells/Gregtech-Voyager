ServerEvents.tags("block", (event) => {
    // Removes the flower_pots tag from potted botania flowers to stop generation in dungeons
    event.remove("minecraft:flower_pots", [/botania:potted.*/])
    event.remove("minecraft:flower_pots", [/twilightforest:potted.*/])

    event.remove("forge:storage_blocks/certus_quartz", "ae2:quartz_block")

})

ServerEvents.tags("item", (event) => {

    function remove_ad_astra_plates(mat)
    {
        event.remove(`forge:plates/${mat}`, `ad_astra:${mat}_plate`)
        event.remove(`forge:ingots/${mat}`, `ad_astra:${mat}_ingot`)
    }
    function remove_ad_astra_rods(mat)
    {
        event.remove(`forge:rods/${mat}`, `ad_astra:${mat}_rod`)
    }
    function add_space_suit_tag(part)
    {
        event.add("ad_astra:space_suit_items", `${part}`)
    }
    function add_netherite_space_suit_tag(part)
    {
        event.add("ad_astra:netherite_space_suit_items", `${part}`)
    }
    function add_iaf_ingot_tag(element)
    {
        event.add(`forge:ingots/dragonsteel_${element}`,`iceandfire:dragonsteel_${element}_ingot`)
        event.remove(`forge:ingots/dragonsteel_${element}`, `gtceu:dragonsteel_${element}_ingot`)
    }
    const iafelements = ['fire', 'ice', 'lightning']

    iafelements.forEach(elem => add_iaf_ingot_tag(elem))

    const nanomuscle_suit = ["gtceu:nanomuscle_helmet", "gtceu:nanomuscle_chestplate", "gtceu:advanced_nanomuscle_chestplate", "gtceu:nanomuscle_leggings", "gtceu:nanomuscle_boots",]
    const quark_suit = ["gtceu:quarktech_helmet", "gtceu:quarktech_chestplate", "gtceu:advanced_quarktech_chestplate", "gtceu:quarktech_leggings", "gtceu:quarktech_boots",]

    nanomuscle_suit.forEach(part => add_space_suit_tag(part))

    quark_suit.forEach(part => 
        {
            add_space_suit_tag(part)
            add_netherite_space_suit_tag(part)
        }
    )

    const ad_astra_mat_list = ['iron', 'steel', 'desh', 'ostrum', 'calorite']

    ad_astra_mat_list.forEach(mat =>
        {
            remove_ad_astra_plates(mat)
            remove_ad_astra_rods(mat)
        }
    )


    event.remove("forge:plates/iron", "ad_astra:iron_plate")
    event.remove("forge:plates/steel", "ad_astra:steel_plate")
    event.remove("forge:ingots/bronze", "forestry:ingot_bronze")
    event.remove("forge:ingots/bronze", "tconstruct:bronze_ingot")

    event.remove("forge:dusts/certus_quartz", "ae2:certus_quartz_dust")

    event.remove("forge:ingots/steel", ["ad_astra:steel_ingot", "tconstruct:steel_ingot"])
    
    const gtknives = event.get("gtceu:tools/crafting_knives").getObjectIds()
    
    // gtknives.forEach(knife =>{
        event.add("farmersdelight:straw_harvesters", event.get("gtceu:tools/crafting_knives").getObjectIds())
        event.add("farmersdelight:tools/knives", event.get("gtceu:tools/crafting_knives").getObjectIds())
    // })
    /**
     * @param {string} tier
     */
    function circuit(tier) {
        event.add(`gtceu:circuits/${tier}`, `kubejs:${tier}_universal_circuit`)
    }

    const tiers = ["ulv", "lv", "mv", "hv", "ev", "iv", "luv", "zpm", "uv", "uhv", "uev", "uiv", "max"]

    tiers.forEach((tier) => circuit(tier))

    event.add(`forge:fertilizer`,`gtceu:fertilizer`)

})

ServerEvents.tags("fluid", (event) => {
    event.add("ad_astra:fuel", "gtceu:rocket_fuel")

    event.add("forestry:seed_oil", "gtcey:seed_oil")

})
