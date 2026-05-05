
ServerEvents.recipes(event => {

    function casing_recipe(mat, output)
    {
        event.recipes.gtceu.assembler('kubejs:' + mat + '_casing')
            .itemInputs(
                '6x gtceu:' + mat + '_plate',
                '1x gtceu:' + mat + '_frame',
            )
            .circuit(6)
            .itemOutputs('2x kubejs:' + output + '_casing')
            .duration(30)
            .EUt(16);
    }

    casing_recipe('desh', 'durable_desh')
    casing_recipe('ultimet', 'firm_ultimet')
    event.recipes.gtceu.assembler('kubejs:stout_titanium_carbide_casing')
            .itemInputs(
                '6x gtceu:titanium_carbide_plate',
                '1x gtceu:titanium_frame',
            )
            .circuit(6)
            .itemOutputs('2x kubejs:stout_titanium_carbide_casing')
            .duration(30)
            .EUt(16);

        event.recipes.gtceu.assembler('kubejs:radiation_proof_lead_casing')
            .itemInputs(
                '6x gtceu:lead_plate',
                '1x gtceu:titanium_frame',
            )
            .circuit(6)
            .itemOutputs('2x kubejs:radiation_proof_lead_casing')
            .duration(30)
            .EUt(16);

    // fuck it ill put these here too

    function cube_multi(mat, output)
    {
        event.shaped(
            Item.of('gtceu:cube_' + output, 1), // arg 1: output
            [
                'ABA',
                'BCB', // arg 2: the shape (array of strings)
                'ABA'
            ],
            {
                A: 'gtceu:double_' + mat + '_plate',
                B: '#gtceu:circuits/ev',  //arg 3: the mapping object
                C: 'gtceu:ev_' + output,
            }
        )
    }

    cube_multi('desh', 'centrifuge')
    cube_multi('titanium_carbide', 'macerator')
    cube_multi('ultimet', 'electrolyzer')
    cube_multi('lead', 'oven')
});
