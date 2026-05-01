ServerEvents.recipes(event => {

    event.remove({ output: 'ars_nouveau:source_gem' })
    event.remove({ output: 'ars_nouveau:imbuement_chamber' })
    event.remove({ output: 'ars_nouveau:sourcestone' })
    event.remove({ output: 'ars_nouveau:source_jar' })
    event.remove({ output: 'ars_nouveau:arcane_pedestal' })
    event.remove({ output: 'ars_nouveau:arcane_core' })
    event.remove({ output: 'ars_nouveau:enchanting_apparatus' })
    event.remove({ output: 'ars_nouveau:arcanist_hood' })
    event.remove({ output: 'ars_nouveau:arcanist_robes' })
    event.remove({ output: 'ars_nouveau:arcanist_leggings' })
    event.remove({ output: 'ars_nouveau:arcanist_boots' }) // tdl upgrades

    event.remove({ output: 'ars_nouveau:battlemage_hood' })
    event.remove({ output: 'ars_nouveau:battlemage_robes' })
    event.remove({ output: 'ars_nouveau:battlemage_leggings' })
    event.remove({ output: 'ars_nouveau:battlemage_boots' }) // tdl upgrades

    event.remove({ output: 'ars_nouveau:sorcerer_hood' })
    event.remove({ output: 'ars_nouveau:sorcerer_robes' })
    event.remove({ output: 'ars_nouveau:sorcerer_leggings' })
    event.remove({ output: 'ars_nouveau:sorcerer_boots' }) // tdl upgrades

    event.remove({ id: 'ars_nouveau:novice_spell_book' }) // tdl upgrades
    event.remove({ id: 'ars_nouveau:scribes_table' })

    event.replaceInput( {input: 'ars_nouveau:source_gem'},'ars_nouveau:source_gem','#forge:gems/source') //stops recipes from breaking, can be changed back if needed

    event.recipes.gtceu.extractor('kubejs:magebloom_oil')
        .itemInputs(
            '1x ars_nouveau:magebloom',
        )
        .outputFluids('kubejs:magebloom_oil 50')
        // .inputFluids("gtceu:glue 250")
        .duration(100)
        .EUt(120);

    event.recipes.gtceu.extractor('kubejs:archwood_to_mana_residue')
        .itemInputs(
            '1x #forge:logs/archwood',
        )
        .outputFluids('kubejs:mana_residue 10')
        // .inputFluids("gtceu:glue 250")
        .duration(100)
        .EUt(120);


    event.recipes.gtceu.extractor('kubejs:magebloom_oil_berry')
        .itemInputs(
            '1x ars_nouveau:sourceberry_bush',
        )
        .outputFluids('kubejs:mana_residue 2')
        // .inputFluids("gtceu:glue 250")
        .duration(40)
        .EUt(120);

    event.recipes.gtceu.chemical_bath('kubejs:source_magebloom')
        .itemInputs(
            '1x gtceu:lazurite_gem',
        )
        .itemOutputs('gtceu:source_gem')
        .inputFluids('kubejs:magebloom_oil 100')
        .outputFluids('kubejs:mana_residue 20')
        .duration(200)
        .EUt(120);

    event.recipes.gtceu.chemical_bath('kubejs:source_magebloom_amethyst')
        .itemInputs(
            '2x minecraft:amethyst_shard',
        )
        .itemOutputs('gtceu:source_gem')
        .inputFluids('kubejs:magebloom_oil 50')
        .outputFluids('kubejs:mana_residue 20')
        .duration(100)
        .EUt(120);


    event.recipes.gtceu.chemical_bath('kubejs:magebloom_seed')
        .itemInputs(
            '1x minecraft:wheat_seeds',
        )
        .itemOutputs('ars_nouveau:magebloom_crop')
        .inputFluids('kubejs:mana_residue 500')
        .duration(2400)
        .EUt(120);

    event.recipes.gtceu.chemical_bath('kubejs:sourcestone')
        .itemInputs(
            '1x minecraft:stone',
        )
        .itemOutputs('1x ars_nouveau:sourcestone')
        .inputFluids('kubejs:mana_residue 20')
        .duration(20)
        .EUt(120);
        
    event.recipes.ars_nouveau.imbuement(
        'gtceu:lazurite_gem', // input item
        'gtceu:source_gem', // output
        500, // source cost
        []
    )
    event.recipes.ars_nouveau.imbuement(
        'minecraft:amethyst_shard', // input item
        'gtceu:source_gem', // output
        250, // source cost
        []
    )

    event.recipes.ars_nouveau.imbuement(
        'gtceu:steel_ingot', // input item
        'gtceu:source_steel_ingot', // output
        1000, // source cost
        []
    )

    event.recipes.gtceu.assembler('kubejs:imbuement_chamber_assembler')
    .itemInputs(
        '4x gtceu:rose_gold_rod',
        '4x gtceu:rose_gold_screw',
        '1x gtceu:source_lens',
        '4x ars_nouveau:archwood_planks'
    )
    // .notConsumable('kubejs:lv_technician_helper')
    .itemOutputs('1x ars_nouveau:imbuement_chamber')
    .duration(200)
    .EUt(496);

    event.recipes.gtceu.assembler('kubejs:source_jar')
        .itemInputs(
            '4x gtceu:rose_gold_plate',
            '1x gtceu:rose_gold_ring',
            '1x gtceu:source_gem',
            '4x ars_nouveau:archwood_planks',
            '4x gtceu:glass_plate'
        )
        // .notConsumable('kubejs:lv_technician_helper')
        .itemOutputs('1x ars_nouveau:source_jar')
        .duration(100)
        .EUt(120);

    event.recipes.gtceu.assembler('kubejs:arcane_pedestal')
        .itemInputs(
            '4x gtceu:long_rose_gold_rod',
            '1x gtceu:source_gem',
            '4x ars_nouveau:sourcestone',
            '4x gtceu:gold_screw'
        )
        // .notConsumable('kubejs:lv_technician_helper')
        .itemOutputs('ars_nouveau:arcane_pedestal')
        .duration(100)
        .EUt(120);

    event.recipes.gtceu.assembler('kubejs:arcane_core')
        .itemInputs(
            '4x gtceu:rose_gold_gear',
            '1x gtceu:source_lens',
            '16x ars_nouveau:sourcestone',
            '1x gtceu:source_steel_frame'
        )
        // .notConsumable('kubejs:lv_technician_helper')
        .itemOutputs('ars_nouveau:arcane_core')
        .duration(2400)
        .EUt(120);

    event.recipes.gtceu.assembler('kubejs:enchanting_apparatus')
        .itemInputs(
            '2x gtceu:rose_gold_gear',
            '1x gtceu:exquisite_source_gem',
            '2x ars_nouveau:sourcestone',
            '2x gtceu:source_steel_plate'
        )
        // .notConsumable('kubejs:lv_technician_helper')
        .itemOutputs('ars_nouveau:enchanting_apparatus')
        .duration(2400)
        .EUt(120);

    event.recipes.gtceu.assembler('kubejs:scribe_table')
        .itemInputs(
            '2x gtceu:treated_wood_frame',
            '8x gtceu:stainless_steel_screw',
            '2x minecraft:ink_sac',
            '2x gtceu:source_steel_plate',
            '4x gtceu:long_stainless_steel_rod',
            '1x minecraft:feather'
        )
        // .notConsumable('kubejs:lv_technician_helper')
        .itemOutputs('ars_nouveau:scribes_table')
        .duration(300)
        .EUt(120);



    event.recipes.ars_nouveau.enchanting_apparatus(
        ['ars_nouveau:magebloom_fiber', 'ars_nouveau:magebloom_fiber', 'ars_nouveau:magebloom_fiber', 'ars_nouveau:magebloom_fiber',
            'gtceu:rose_gold_ring', 'gtceu:rose_gold_ring', 'gtceu:rose_gold_ring', 'gtceu:rose_gold_ring'
        ], // input items
        'kubejs:source_steel_helmet', // reagent
        'ars_nouveau:arcanist_hood', // output
        1000, // source cost
        true // keep nbt of reagent, think like a smithing recipe
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ['ars_nouveau:magebloom_fiber', 'ars_nouveau:magebloom_fiber', 'ars_nouveau:magebloom_fiber', 'ars_nouveau:magebloom_fiber',
            'gtceu:rose_gold_plate', 'gtceu:rose_gold_plate', 'gtceu:rose_gold_plate', 'gtceu:rose_gold_plate'
        ], // input items
        'kubejs:source_steel_chestplate', // reagent
        'ars_nouveau:arcanist_robes', // output
        1000, // source cost
        true // keep nbt of reagent, think like a smithing recipe
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ['ars_nouveau:magebloom_fiber', 'ars_nouveau:magebloom_fiber', 'ars_nouveau:magebloom_fiber', 'ars_nouveau:magebloom_fiber',
            'gtceu:rose_gold_rod', 'gtceu:rose_gold_rod', 'gtceu:rose_gold_rod', 'gtceu:rose_gold_rod'
        ], // input items
        'kubejs:source_steel_leggings', // reagent
        'ars_nouveau:arcanist_leggings', // output
        1000, // source cost
        true // keep nbt of reagent, think like a smithing recipe
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ['ars_nouveau:magebloom_fiber', 'ars_nouveau:magebloom_fiber', 'ars_nouveau:magebloom_fiber', 'ars_nouveau:magebloom_fiber',
            'gtceu:rose_gold_bolt', 'gtceu:rose_gold_bolt', 'gtceu:rose_gold_bolt', 'gtceu:rose_gold_bolt'
        ], // input items
        'kubejs:source_steel_boots', // reagent
        'ars_nouveau:arcanist_boots', // output
        1000, // source cost
        true // keep nbt of reagent, think like a smithing recipe
    )


    // battle mage


    event.recipes.ars_nouveau.enchanting_apparatus(
        ['ars_nouveau:magebloom_fiber', 'ars_nouveau:magebloom_fiber', 'ars_nouveau:magebloom_fiber', 'ars_nouveau:magebloom_fiber',
            'gtceu:source_steel_ring', 'gtceu:source_steel_ring', 'gtceu:source_steel_ring', 'gtceu:source_steel_ring'
        ], // input items
        'kubejs:source_steel_helmet', // reagent
        'ars_nouveau:battlemage_hood', // output
        1000, // source cost
        true // keep nbt of reagent, think like a smithing recipe
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ['ars_nouveau:magebloom_fiber', 'ars_nouveau:magebloom_fiber', 'ars_nouveau:magebloom_fiber', 'ars_nouveau:magebloom_fiber',
            'gtceu:source_steel_plate', 'gtceu:source_steel_plate', 'gtceu:source_steel_plate', 'gtceu:source_steel_plate'
        ], // input items
        'kubejs:source_steel_chestplate', // reagent
        'ars_nouveau:battlemage_robes', // output
        1000, // source cost
        true // keep nbt of reagent, think like a smithing recipe
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ['ars_nouveau:magebloom_fiber', 'ars_nouveau:magebloom_fiber', 'ars_nouveau:magebloom_fiber', 'ars_nouveau:magebloom_fiber',
            'gtceu:source_steel_rod', 'gtceu:source_steel_rod', 'gtceu:source_steel_rod', 'gtceu:source_steel_rod'
        ], // input items
        'kubejs:source_steel_leggings', // reagent
        'ars_nouveau:battlemage_leggings', // output
        1000, // source cost
        true // keep nbt of reagent, think like a smithing recipe
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ['ars_nouveau:magebloom_fiber', 'ars_nouveau:magebloom_fiber', 'ars_nouveau:magebloom_fiber', 'ars_nouveau:magebloom_fiber',
            'gtceu:source_steel_bolt', 'gtceu:source_steel_bolt', 'gtceu:source_steel_bolt', 'gtceu:source_steel_bolt'
        ], // input items
        'kubejs:source_steel_boots', // reagent
        'ars_nouveau:battlemage_boots', // output
        1000, // source cost
        true // keep nbt of reagent, think like a smithing recipe
    )

    // sourcerer

        event.recipes.ars_nouveau.enchanting_apparatus(
        ['ars_nouveau:magebloom_fiber', 'ars_nouveau:magebloom_fiber', 'ars_nouveau:magebloom_fiber', 'ars_nouveau:magebloom_fiber',
            'gtceu:ruby_gem', 'gtceu:ruby_gem', 'gtceu:ruby_gem', 'gtceu:ruby_gem'
        ], // input items
        'kubejs:source_steel_helmet', // reagent
        'ars_nouveau:sorcerer_hood', // output
        1000, // source cost
        true // keep nbt of reagent, think like a smithing recipe
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ['ars_nouveau:magebloom_fiber', 'ars_nouveau:magebloom_fiber', 'ars_nouveau:magebloom_fiber', 'ars_nouveau:magebloom_fiber',
            'gtceu:ruby_plate', 'gtceu:ruby_plate', 'gtceu:ruby_plate', 'gtceu:ruby_plate'
        ], // input items
        'kubejs:source_steel_chestplate', // reagent
        'ars_nouveau:sorcerer_robes', // output
        1000, // source cost
        true // keep nbt of reagent, think like a smithing recipe
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ['ars_nouveau:magebloom_fiber', 'ars_nouveau:magebloom_fiber', 'ars_nouveau:magebloom_fiber', 'ars_nouveau:magebloom_fiber',
            'gtceu:ruby_rod', 'gtceu:ruby_rod', 'gtceu:ruby_rod', 'gtceu:ruby_rod'
        ], // input items
        'kubejs:source_steel_leggings', // reagent
        'ars_nouveau:sorcerer_leggings', // output
        1000, // source cost
        true // keep nbt of reagent, think like a smithing recipe
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ['ars_nouveau:magebloom_fiber', 'ars_nouveau:magebloom_fiber', 'ars_nouveau:magebloom_fiber', 'ars_nouveau:magebloom_fiber',
            'gtceu:ruby_gem', 'gtceu:ruby_gem', 'gtceu:ruby_gem', 'gtceu:ruby_gem'
        ], // input items
        'kubejs:source_steel_boots', // reagent
        'ars_nouveau:sorcerer_boots', // output
        1000, // source cost
        true // keep nbt of reagent, think like a smithing recipe
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ['ars_nouveau:magebloom_fiber', 'ars_nouveau:magebloom_fiber', 'gtceu:source_lens', 'gtceu:source_plate',
            'gtceu:rose_gold_rod', 'gtceu:stainless_steel_bolt', 'gtceu:stainless_steel_bolt'
        ], // input items
        'minecraft:book', // reagent
        'ars_nouveau:novice_spell_book', // output
        1000, // source cost
        true // keep nbt of reagent, think like a smithing recipe
    )

});