ItemEvents.tooltip(event => {
  
  event.add('gtceu:large_helper_factory', 'Has Perfect OC\nCan perform ALL helper assembler recipes\nCan only have one energy hatch')

  event.add('kubejs:basic_chemist_helper', '§7Lab coat for optimal aura farming\n§r§4Recipes using this helper are on circuit 3\n(even if JEI doesn\'t say so)')

  function cubeTooltip(name)
  {
    event.add(`gtceu:cube_${name}`, '§7Has perfect overclock and batching\n§r§4Can only have one energy hatch&r\n§4MUST have a normal maintenance hatch')
  }

  function rectangleTooltip(name)
  {
    event.add(`gtceu:power_rectangle_${name}`, '§r§4Can only have one dynamo hatch')
  }

  function addHelperTooltip(helper, text)
  {
    event.add(`kubejs:${helper}_helper`, `§4${text}&r`)
  }

  event.add(`gtceu:power_rectangle_helper_calorie_converter`, '\n§6Can run helper calorie conversion recipes')

  event.add(`gtceu:titanite_blast_furnace`, '§6Has perfect overclock (regardless of coil temperature)§r\n§6Can use 4x parallel hatches§r\n§4Can only use ONE IV energy hatch§r\nNOTE: In future this multiblock will be changed to use GT Coil mechanics.')
  event.add(`gtceu:atmospheric_collector`, '§6Collects gas and dust from the surrounding atmosphere and freezes it§r\n§6Can use parallel hatches§r')
  
  rectangleTooltip('helper_calorie_converter')

  addHelperTooltip('hungry', 'Can consume a LOT of calories')

  cubeTooltip('macerator');
  cubeTooltip('electrolyzer')
  cubeTooltip('oven');
  cubeTooltip('centrifuge')

})