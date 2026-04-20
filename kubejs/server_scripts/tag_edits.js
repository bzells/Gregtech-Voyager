ServerEvents.tags('block', event => {
  // Removes the flower_pots tag from potted botania flowers to stop generation in dungeons
  event.remove('minecraft:flower_pots', [/botania:potted.*/])
  event.remove('minecraft:flower_pots', [/twilightforest:potted.*/])
})
