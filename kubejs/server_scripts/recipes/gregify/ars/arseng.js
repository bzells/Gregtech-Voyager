ServerEvents.recipes(event =>{
	event.remove({output: 'arseng:source_cell_housing'})

	event.recipes.ars_nouveau.enchanting_apparatus(
		['gtceu:source_plate', 'gtceu:source_plate', 'gtceu:rose_gold_plate', 'gtceu:rose_gold_plate',
			'gtceu:rose_gold_plate', 'gtceu:rose_gold_plate', 'ars_nouveau:manipulation_essence', 'ars_nouveau:manipulation_essence'
		], // input items
		'ae2:item_cell_housing', // reagent
		'arseng:source_cell_housing', // output
		1000, // source cost
		true // keep nbt of reagent, think like a smithing recipe
	)

	event.remove({input: 'arseng:source_cell_housing', mod:'arseng'})


	event.recipes.gtceu.canner('kubejs:1k_source_cell')  
		.itemInputs('ae2:cell_component_1k', 'arseng:source_cell_housing')
		.itemOutputs('1x arseng:source_storage_cell_1k')
		.duration(100)
		.EUt(120)

	event.recipes.gtceu.canner('kubejs:4k_source_cell')  
		.itemInputs('ae2:cell_component_4k', 'arseng:source_cell_housing')
		.itemOutputs('1x arseng:source_storage_cell_4k')
		.duration(100)
		.EUt(120)

	event.recipes.gtceu.canner('kubejs:16k_source_cell')  
		.itemInputs('ae2:cell_component_16k', 'arseng:source_cell_housing')
		.itemOutputs('1x arseng:source_storage_cell_16k')
		.duration(100)
		.EUt(120)

	event.recipes.gtceu.canner('kubejs:64k_source_cell')  
		.itemInputs('ae2:cell_component_64k', 'arseng:source_cell_housing')
		.itemOutputs('1x arseng:source_storage_cell_64k')
		.duration(100)
		.EUt(120)

	event.recipes.gtceu.canner('kubejs:256k_source_cell')  
		.itemInputs('ae2:cell_component_256k', 'arseng:source_cell_housing')
		.itemOutputs('1x arseng:source_storage_cell_256k')
		.duration(100)
		.EUt(120)
})