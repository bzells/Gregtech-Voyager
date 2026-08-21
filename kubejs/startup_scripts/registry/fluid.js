StartupEvents.registry("fluid", (event) => {
    //   // Basic "thick" (looks like lava) fluid with red tint
    //   event.create('thick_fluid')
    //     .thickTexture(0xFF0000)
    //     .bucketColor(0xFF0000)
    //     .displayName('Thick Fluid')

    // Basic "thin" (looks like water) fluid with cyan tint, has no bucket and is not placeable
    event.create("magebloom_oil").thinTexture(0x9e6eba).bucketColor(0x9e6eba).displayName("Magebloom Oil").noBlock()

    event.create("mana_residue").thinTexture(0x441e6e).bucketColor(0x441e6e).displayName("Mana Residue").noBlock()

    event.create("liquid_intelligence").thinTexture(0x47b4c9).bucketColor(0x47b4c9).displayName("Liquid Intelligence").noBlock()

    event.create("molten_fireclay").thickTexture(0x75281a).bucketColor(0x75281a).displayName("Molten Fireclay").noBlock()

    event.create("melted_butter").thickTexture(0xffec60).bucketColor(0xffec60).displayName("Melted Butter")

    event.create("blasting_gas").thinTexture(0xfdff9e).bucketColor(0xfdff9e).displayName("Blasting Gas").noBlock()

    event.create("dewatering_fluid").thickTexture(0x731f3c).bucketColor(0x731f3c).displayName("Dewatering Fluid").noBlock()

    event.create("dissolved_martian_mineral_solution").thickTexture(0x735057).bucketColor(0x735057).displayName("Dissolved Martian Mineral Solution").noBlock()

    event.create("high_temp_binding_agent_s").thickTexture(0xdbaa40).bucketColor(0xdbaa40).displayName("HT-BA (S)").noBlock()

    event.create("helperade_br").thinTexture(0x00ffff).bucketColor(0x00ffff).displayName("Helperade (Blue Rasberry)").noBlock()

    // Highstress lubricant
    event.create("igp_lubricant_base").thinTexture(0x90915d).bucketColor(0x90915d).displayName("IGP Lubricant Base").noBlock()

    event.create("gallium_lubricant_residue").thickTexture(0x445e63).bucketColor(0x445e63).displayName("Gallium Lubricant Residue").noBlock()

    event.create("indium_binded_phospho_lubricant_sludge").thickTexture(0x56476b).bucketColor(0x56476b).displayName("Indium Binded Phospho Lubricant Sludge").noBlock()

    event.create("acidic_phospho_lubricant").thinTexture(0x381212).bucketColor(0x381212).displayName("Acidic Phospo-Lubricant").noBlock()

    event.create("phospho_lubricant_residue").thinTexture(0x381111).bucketColor(0x381111).displayName("Phospo-Lubricant Residue").noBlock()

    event.create("phospho_indium_molybdenum_binded_lubricant").thinTexture(0x82698c).bucketColor(0x82698c).displayName("Phospho-Indium-Molybdenum Binded Lubricant").noBlock()


    event.create("jungle_wood_vinegar").thickTexture(0xaeb372).bucketColor(0xaeb372).displayName("Jungle Wood Vinegar").noBlock()
    event.create("cacao_residue").thickTexture(0x40281b).bucketColor(0x40281b).displayName("Cacao Wood Residue").noBlock()
    event.create("dirty_cacao_milk").thickTexture(0xffead4).bucketColor(0xffead4).displayName("Dirty Cacao Milk").noBlock()
    event.create("cacao_milk").thinTexture(0xffead4).bucketColor(0xffead4).displayName("Cacao Milk").noBlock()
    event.create("tempered_cacao").thickTexture(0x3b2106).bucketColor(0x3b2106).displayName("Tempered Cacao").noBlock()

    //   // Fluid with custom textures
    //   event.create('strawberry_cream')
    //     .displayName('Strawberry Cream')
    //     .stillTexture('kubejs:block/strawberry_still')
    //     .flowingTexture('kubejs:block/strawberry_flow')
    //     .bucketColor(0xFF33FF)

    //   // Fluid with a modified bucket item
    //   const tacoSauce = event
    //     .create('taco_sauce')
    //     .thickTexture(0xff0000)
    //     .bucketColor(0xff0000)
})
