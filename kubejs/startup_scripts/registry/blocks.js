StartupEvents.registry('block', event => {

    function casing(name)
    {
        event.create(`${name}_casing`)
        .textureAll(`kubejs:block/casing/${name}_casing`)
        .hardness(2)
        .resistance(3)
        .lightLevel(0)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock('mineable/wrench')
    }
    casing('durable_desh');
    casing('firm_ultimet');
    casing('stout_titanium_carbide');
    casing('radiation_proof_lead');
    casing('titanite');
    casing('ostrum');
    casing('atmospheric_filter');
})