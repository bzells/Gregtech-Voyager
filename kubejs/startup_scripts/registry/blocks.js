StartupEvents.registry("block", (event) => {
    /**
     * @param {string} name
     */
    function casing(name) {
        event.create(`${name}_casing`).textureAll(`kubejs:block/casing/${name}_casing`).hardness(2).resistance(3).lightLevel(0).soundType("metal").requiresTool(true).tagBlock("forge:mineable/wrench").tagBlock('minecraft:mineable/pickaxe')
    }
    casing("durable_desh")
    casing("firm_ultimet")
    casing("stout_titanium_carbide")
    // casing("radiation_proof_lead")
    // casing("titanite")
    // casing("ostrum")
    casing("atmospheric_filter")
    // casing('condensation_resistant_tungsten')
    casing("heat_resistant_refined_fluxed_electrum")
    // casing('radiation_conducting_titanex')
    // casing('platinum')
    // casing('space_faring')
    // casing('radiant_titanex')
    // casing('radiant_titanex_vent')
    // casing('frost_conducting')
    // casing('foundry')

    /**
     * @param {string} name
     */
    function metalblock(name) {
        event.create(name).textureAll(`kubejs:block/${name}`).hardness(2).resistance(3).lightLevel(0).soundType("metal").requiresTool(true).tagBlock("mineable/wrench")
    }

    /**
     * @param {string} name
     */
    function glassblock(name) {
        event.create(name).textureAll(`kubejs:block/${name}`).hardness(2).resistance(3).lightLevel(0).soundType("glass").requiresTool(true).renderType("translucent").tagBlock("mineable/wrench")
    }

    // metalblock("teus_beam_block")
    metalblock("ruined_beam_block")
    // metalblock('cooling_lamp')

    // metalblock("hungry_helper_housing")

    // glassblock("shock_proof_glass")
})
