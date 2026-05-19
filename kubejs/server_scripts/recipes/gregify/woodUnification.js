const cuttingfluid = [['lubricant','gtceu:lubricant','1',10],['distilled','gtceu:distilled_water','3',15],['water','minecraft:water','4',20]]
const vanillaWood = ['oak','birch','dark_oak','jungle','mangrove','spruce','acacia','cherry']


ServerEvents.tags('item', event => {

	//I hate it when mods don't tag things properly
	event.add('minecraft:oak_logs',['vinery:apple_log','vinery:apple_wood'])
	event.add('vinery:dark_cherry_logs',['vinery:dark_cherry_log','vinery:dark_cherry_wood','vinery:stripped_dark_cherry_log','vinery:stripped_dark_cherry_wood'])
	event.add('minecraft:wooden_trapdoors',[/forestry:.*_trapdoor/]) //I have no idea why forestry did this
	
})



ServerEvents.recipes(event => {

	const sawShaped = (output,input,mod,itemName)=>{
		let pref = ''
		if (mod != 'minecraft') pref = mod+'_'
		event.recipes.gtceu.shaped((Item.of(output, 4)),
			[
				'A',
				'B'
			],
			{
				A: '#forge:tools/saws',
				B: input
			}
		).id(`gtceu:shaped/${pref+itemName}_saw`)
	}

	const cuttingMachine = (output,input,custom,mod) => {
		cuttingfluid.forEach(cuttingfluid => {
			event.recipes.gtceu.cutter(`gtceu:cutter/${mod}_${custom}_${cuttingfluid[0]}`)
				.itemInputs(input)
				.inputFluids(cuttingfluid[1]+' '+cuttingfluid[2])
				.itemOutputs(Item.of(output, 6))
				.itemOutputs(Item.of('gtceu:wood_dust',2))
				.EUt(7)
				.duration(cuttingfluid[3]*20)
			})
	}

	function doorRecipe(input) {
		let mod = input.replace(/:.*/,'')
		let pref = ''
		let wood = input.replace('_planks','')
		let planks = [wood+'_planks',wood+'_fireproof_planks']

		if (mod != 'minecraft') pref = mod+'_'
		if (mod == 'botania') return
		if (mod == 'minecraft') planks = [wood+'_planks',wood.replace('minecraft','forestry')+'_fireproof_planks']

		event.remove({output:`${wood}_door`,type:'minecraft:crafting_shaped'})

		event.recipes.gtceu.shaped((Item.of(`${wood+'_door'}`, 1)),
			[
				'ABC',
				'ADE',
				'AAF'
			],
			{
				A: planks,
				B: wood+'_trapdoor',
				C: '#forge:tools/screwdrivers',
				D: 'gtceu:iron_ring',
				E: 'gtceu:iron_screw',
				F: '#forge:tools/saws'
			}
		).id(`gtceu:shaped/${pref+input.replace(/.*:/,'').replace('_planks','_door')}`)		
	}

	function trapdoorRecipe(input) {
		let mod = input.replace(/:.*/,'')
		let pref = ''
		let wood = input.replace('_planks','')
		let planks = [wood+'_planks',wood+'_fireproof_planks']

		if (mod != 'minecraft') pref = mod+'_'
		if (mod == 'botania') return
		if (mod == 'minecraft') planks = [wood+'_planks',wood.replace('minecraft','forestry')+'_fireproof_planks']

		event.remove({output:`${wood}_trapdoor`,type:'minecraft:crafting_shaped'}) //Easiest code of my life: Only spent 3 Hours on this one line

		event.recipes.gtceu.shaped((Item.of(`${wood+'_trapdoor'}`, 1)),
			[
				'BAD',
				'ACA',
				'DAB'
			],
			{
				A: planks,
				D: '#forge:rods/wooden',
				C: '#forge:tools/screwdrivers',
				B: 'gtceu:iron_bolt',
			}
		).id(`gtceu:shaped/${pref+input.replace(/.*:/,'').replace('_planks','_trapdoor')}_iron`)

		event.recipes.gtceu.shaped((Item.of(`${wood+'_trapdoor'}`, 2)),
			[
				'BAD',
				'ACA',
				'DAB'
			],
			{
				A: planks,
				D: '#forge:rods/wooden',
				C: '#forge:tools/screwdrivers',
				B: 'gtceu:steel_bolt',
			}
		).id(`gtceu:shaped/${pref+input.replace(/.*:/,'').replace('_planks','_trapdoor')}_steel`)

		event.recipes.gtceu.assembler(`gtceu:${pref+input.replace(/.*:/,'').replace('_planks','_trapdoor')}_iron`)
			.circuit(3)
			.itemInputs(
				Ingredient.of([planks[0],planks[1]],2)
			)
			.inputFluids(Fluid.of('gtceu:iron',16))
			.itemOutputs(Item.of(`${wood}_trapdoor`))
			.duration(10*20)
			.EUt(4)

		event.recipes.gtceu.assembler(`gtceu:${pref+input.replace(/.*:/,'').replace('_planks','_trapdoor')}_steel`)
			.circuit(3)
			.itemInputs(
				Ingredient.of([planks[0],planks[1]],2)
			)
			.inputFluids(Fluid.of('gtceu:steel',16))
			.itemOutputs(Item.of(`${wood}_trapdoor`,2))
			.duration(10*20)
			.EUt(4)
	}

	function slabRecipe(input) {
		let mod = input.replace(/:.*/, '')
		let pref = ''
		let wood = input.replace('_planks', '')
		let planks = [wood + '_planks', wood + '_fireproof_planks']

		if (mod != 'minecraft') pref = mod+'_'
		if (mod == 'minecraft') planks = [wood + '_planks', wood.replace('minecraft', 'forestry') + '_fireproof_planks']
		if (mod == 'tconstruct') wood = input
		
		event.remove({type: "minecraft:crafting_shaped",output:`${wood}_slab`})

		event.recipes.gtceu.shaped((Item.of(wood+'_slab', 2)),
			[
				'AB'
			],
			{
				A: '#forge:tools/saws',
				B: planks
			}
		).id(`gtceu:shaped/${pref + wood.replace(/.*:/,'')+'_slab'}_saw`)

		cuttingfluid.forEach(cuttingfluid => {
			if (cuttingfluid[0] != 'lubricant') {
				event.recipes.gtceu.cutter(`gtceu:${pref+wood.replace(/.*:/,'')+'_slab'}_${cuttingfluid[0]}`)
					.itemInputs(Ingredient.of([planks[0], planks[1]],1))
					.inputFluids(cuttingfluid[1] + ' ' + cuttingfluid[2])
					.itemOutputs(Item.of(wood+'_slab', 2))
					.EUt(7)
					.duration(cuttingfluid[3] * 20)
			} else {
				event.recipes.gtceu.cutter(`gtceu:${pref + wood.replace(/.*:/,'')+'_slab'}`)
					.itemInputs(Ingredient.of([planks[0],planks[1]], 1))
					.inputFluids(cuttingfluid[1] + ' ' + cuttingfluid[2])
					.itemOutputs(Item.of(wood+ '_slab', 2))
					.EUt(7)
					.duration(cuttingfluid[3] * 20)
			}
		})

	}

	event.remove({type:'minecraft:crafting_shapeless',output:'minecraft:oak_planks',mod:'vinery'}) //Nuclear Option, This wouldn't work correctly the other ways I tried
	event.remove({type:'minecraft:crafting_shapeless',output:'vinery:dark_cherry_planks'})

	event.shapeless('2x vinery:dark_cherry_planks', '#vinery:dark_cherry_logs').id('vinery:dark_cherry_planks')
	sawShaped('vinery:dark_cherry_planks','#vinery:dark_cherry_logs','vinery','dark_cherry_planks')
	cuttingMachine('vinery:dark_cherry_planks','#vinery:dark_cherry_logs','dark_cherry_planks','vinery')

	event.forEachRecipe({type: 'minecraft:crafting_shapeless', input:'#minecraft:logs', output: '#minecraft:planks'}, r => {
		
		let logtype = r.originalRecipeIngredients
		let outputIS = r.originalRecipeResult
		let output = outputIS.id
		let mod = outputIS.getMod()
		let itemName = outputIS.getItem()

		event.shapeless(Item.of(outputIS.id, 2), logtype[0]).id(r.getId())
		sawShaped(output,logtype[0],mod,itemName)
		if (mod != 'minecraft') cuttingMachine(output,logtype[0],itemName,mod)
		if (`${output}` == `${output}`.replace('_fireproof','')) {doorRecipe(`${output}`); trapdoorRecipe(`${output}`); slabRecipe(`${output}`)}


	})
})

ForestryEvents