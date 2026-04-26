const cuttingfluid = [['lubricant','gtceu:lubricant 1',10],['distilled','gtceu:distilled_water 3',15],['water','minecraft:water 4',20]]
//const hmah = Ingredient.of(/hexerei:.*mahogany.*/)
//const hwil = Ingredient.of(/hexerei:.*willow.*/)
//const hwhz = Ingredient.of(/hexerei:.*hazel.*/)

/*ServerEvents.tags('item', event => {

	//I hate it when mods don't tag things properly
	const logs = event.get('minecraft:logs').getObjectIds()

	logs.forEach(t =>{
    	if (hmah.test(t)) event.add('hexerei:mahogany_logs',t)
    	if (hwil.test(t)) event.add('hexerei:willow_logs',t)
    	if (hwhz.test(t)) event.add('hexerei:hazel_logs',t)
	})
})*/



ServerEvents.recipes(event => {

	//event.remove({type:'minecraft:crafting_shapeless',output:'hexerei:mahogany_planks'})
	//event.shapeless('2x hexerei:mahogany_planks', '#hexerei:mahogany_logs').id('hexerei:mahogany_planks')

	event.forEachRecipe({ type: 'minecraft:crafting_shapeless', input:'#minecraft:logs', output: '#minecraft:planks'}, r => {
		
		let logtype = r.originalRecipeIngredients
		let output = r.originalRecipeResult



		event.shapeless(Item.of(output.id, 2), logtype[0])//.id(r.getId())

		

		event.recipes.gtceu.shaped((Item.of(output.id, 4)),
			[
				'A',
				'B'
			],
			{
				A: '#forge:tools/saws',
				B: logtype[0]
			}
		).id(`gtceu:${output.getMod()}_${output.getItem()}_saw`)



	})
	
	//const logtype = ['fir','redwood','mahogany','jacaranda','palm','willow','dead','magic','umbran','hellbark']
	//const cuttingfluid = [['lubricant','gtceu:lubricant 1',10],['distilled','gtceu:distilled_water 3',15],['water','minecraft:water 4',20]]

	//event.remove({ output: [/biomesoplenty:.*_planks/]})


/*	logtype.forEach(logtype => {

		event.remove({type: 'minecraft:crafting_shapeless', output: `biomesoplenty:${logtype}_planks`})

		event.shapeless(
			`2x biomesoplenty:${logtype}_planks`,[`#biomesoplenty:${logtype}_logs`]
		)
		event.recipes.gtceu.shaped((`4x biomesoplenty:${logtype}_planks`),
			[
				'A',
				'B'
			],
			{
				A: '#forge:tools/saws',
				B: `#biomesoplenty:${logtype}_logs`
			}
		)

		cuttingfluid.forEach(cuttingfluid => {
			event.recipes.gtceu.cutter(`kubejs:${logtype}_cutting_with_${cuttingfluid[0]}`)
				.itemInputs(`#biomesoplenty:${logtype}_logs`)
				.inputFluids(cuttingfluid[1])
				.itemOutputs(`6x biomesoplenty:${logtype}_planks`)
				.EUt(7)
				.duration(cuttingfluid[2])
		})
	}) */
})