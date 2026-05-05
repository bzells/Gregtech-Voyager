ItemEvents.tooltip(event => {
  
  event.add('gtceu:large_helper_factory', 'Has Perfect OC\nCan perform ALL helper assembler recipes\nCan only have one energy hatch')

  event.add('kubejs:basic_chemist_helper', '§7Lab coat for optimal aura farming\n§r§4Recipes using this helper are on circuit 3\n(even if JEI doesn\'t say so)')

  function cubeTooltip(name)
  {
    event.add(`gtceu:cube_${name}`, '§7Has perfect overclock and batching\n§r§4Can only have one energy hatch\nMUST have a normal maintenance hatch')
  }

  function rectangleTooltip(name)
  {
    event.add(`gtceu:power_rectangle_${name}`, '§r§4Can only have one dynamo hatch')
  }

  function addHelperTooltip(helper, text)
  {
    event.add(`kubejs:${helper}_helper`, `§4${text}`)
  }

  event.add(`gtceu:power_rectangle_helper_calorie_converter`, '§6\n§6Can run helper calorie conversion recipes')
  rectangleTooltip('helper_calorie_converter')

  addHelperTooltip('hungry', 'Can consume a LOT of calories\n')

  cubeTooltip('macerator');
  cubeTooltip('electrolyzer')
  cubeTooltip('oven');
  cubeTooltip('centrifuge')

})