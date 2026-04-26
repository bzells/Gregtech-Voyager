ServerEvents.tags('block', event => {
  // Removes the flower_pots tag from potted botania flowers to stop generation in dungeons
  event.remove('minecraft:flower_pots', [/botania:potted.*/])
  event.remove('minecraft:flower_pots', [/twilightforest:potted.*/])

  event.remove('forge:storage_blocks/certus_quartz', 'ae2:quartz_block')
})

ServerEvents.tags('item', event => {
  event.remove('forge:plates/steel', 'ad_astra:steel_plate')
  event.remove('forge:ingots/bronze', 'forestry:ingot_bronze')
  event.remove('forge:ingots/bronze', 'tconstruct:bronze_ingot')

  event.remove('forge:dusts/certus_quartz', 'ae2:certus_quartz_dust')

  event.remove('forge:ingots/steel', ['ad_astra:steel_ingot', 'tconstruct:steel_ingot'])

})

ServerEvents.tags('fluid', event => {

   event.add("ad_astra:fuel", "gtceu:rocket_fuel")
})
