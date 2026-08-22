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

    TagPrefix.gem["setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])"](GTMaterialRegistry.getMaterial('source'), () => Item.getItem('ars_nouveau:source_gem'))
    TagPrefix.block["setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])"](GTMaterialRegistry.getMaterial('source'), () => Item.getItem('ars_nouveau:source_gem_block'))
    TagPrefix.block.modifyMaterialAmount(GTMaterialRegistry.getMaterial('source'),4)

    TagPrefix.block["setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])"](GTMaterialRegistry.getMaterial('dragonsteel_fire'), () => Item.getItem("iceandfire:dragonsteel_fire_block"))
    TagPrefix.ingot["setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])"](GTMaterialRegistry.getMaterial('dragonsteel_fire'), () => Item.getItem('iceandfire:dragonsteel_fire_ingot'))

    TagPrefix.ingot["setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])"](GTMaterialRegistry.getMaterial('dragonsteel_ice'), () => Item.getItem('iceandfire:dragonsteel_ice_ingot'))
    TagPrefix.block["setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])"](GTMaterialRegistry.getMaterial('dragonsteel_ice'), () => Item.getItem("iceandfire:dragonsteel_ice_block"))
})
