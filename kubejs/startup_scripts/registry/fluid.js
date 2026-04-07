StartupEvents.registry('fluid', event => {
//   // Basic "thick" (looks like lava) fluid with red tint
//   event.create('thick_fluid')
//     .thickTexture(0xFF0000)
//     .bucketColor(0xFF0000)
//     .displayName('Thick Fluid')
                 
  // Basic "thin" (looks like water) fluid with cyan tint, has no bucket and is not placeable
  event.create('magebloom_oil')
    .thinTexture(0x9e6eba)
    .bucketColor(0x9e6eba)
    .displayName('Magebloom Oil')
    .noBlock() 

  event.create('mana_residue')
    .thinTexture(0x441e6e)
    .bucketColor(0x441e6e)
    .displayName('Mana Residue')
    .noBlock() 

  event.create('liquid_intelligence')
    .thinTexture(0x47b4c9)
    .bucketColor(0x47b4c9)
    .displayName('Liquid Intelligence')
    .noBlock() 

  event.create('molten_fireclay')
    .thickTexture(0x75281a)
    .bucketColor(0x75281a)
    .displayName('Molten Fireclay')
    .noBlock() 
    
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