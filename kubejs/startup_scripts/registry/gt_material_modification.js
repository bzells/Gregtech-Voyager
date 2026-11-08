//priority: 99

GTCEuStartupEvents.materialModification((_event) => {
    GTMaterials.get("desh").setFormula("Ds")
    GTMaterials.get("lunite").setFormula("(Ds)2W(Si)2O4")
    GTMaterials.get("glowstone").setFormula("(Si(FeS2)5(CrAl2O3)Hg3)Au")
    GTMaterials.get("lunarium").setFormula("Lt")
    GTMaterials.get("titanite").setFormula("Tt")
    GTMaterials.get("ostrum").setFormula("Ot")
    GTMaterials.get("perfected_electrum").setFormula("*Au**Ag*")
    GTMaterials.get("calorite").setFormula("Rc")
    GTMaterials.get("calorite_carbide").setFormula("Rc4C2")
    GTMaterials.get("industrial_perfected_electrum").setFormula("(*Au**Ag*)5(C2Rc4)")
    GTMaterials.get("sulfuria").setFormula("*S*")

    function set(material, item, flags){
        flags.forEach(flag => {
            TagPrefix[flag]["setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])"](material, () => Item.getItem(`${item}_${flag}`))
        });
    }

    const Source = GTMaterials.get('source')
    //set(Source, 'ars:nouveau:source_gem', ['gem', 'block']) // as the item ID of gem block doesn't follow the convention we have top separate it
    TagPrefix.gem["setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])"](Source, () => Item.getItem('ars_nouveau:source_gem'))
    TagPrefix.block["setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])"](Source, () => Item.getItem('ars_nouveau:source_gem_block'))
    TagPrefix.block.modifyMaterialAmount(Source,4)

    set(GTMaterialRegistry.getMaterial('dragonsteel_fire')     , 'iceandfire:dragonsteel_fire'     , ['ingot', 'block'])
    set(GTMaterialRegistry.getMaterial('dragonsteel_ice')      , 'iceandfire:dragonsteel_ice'      , ['ingot', 'block'])
    set(GTMaterialRegistry.getMaterial('dragonsteel_lightning'), 'iceandfire:dragonsteel_lightning', ['ingot', 'block'])


    set(GTMaterialRegistry.getMaterial('calorite'), 'ad_astra:calorite', ['ingot', 'block', 'plate', 'nugget'])
    set(GTMaterialRegistry.getMaterial('ostrum')  , 'ad_astra:ostrum'  , ['ingot', 'block', 'plate', 'nugget'])
    set(GTMaterialRegistry.getMaterial('desh')    , 'ad_astra:desh'    , ['ingot', 'block', 'plate', 'nugget'])
})
