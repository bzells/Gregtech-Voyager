JEIEvents.hideItems(event => {

    let adastratiers = ['steel','desh','etrium','calorite','ostrum', 'iron']


    for(let i = 0; i < adastratiers.length; i++)
    {
        event.hide('ad_astra:'+adastratiers[i]+'_plate')
        event.hide('ad_astra:'+adastratiers[i]+'_ingot')
        event.hide('ad_astra:'+adastratiers[i]+'_nugget')
        event.hide('ad_astra:'+adastratiers[i]+'_block')
    }  
    
  event.hide('tconstruct:steel_plate')
  event.hide('tconstruct:steel_block')

})