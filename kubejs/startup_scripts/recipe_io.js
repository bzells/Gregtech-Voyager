GTCEuStartupEvents.registry("gtceu:recipe_type", (_event) => {
    GTRecipeTypes.BLAST_RECIPES.setMaxIOSize(4, 4, 2, 2)
    GTRecipeTypes.CENTRIFUGE_RECIPES.setMaxIOSize(3, 6, 2, 2)
    GTRecipeTypes.VACUUM_RECIPES.setMaxIOSize(1, 1, 2, 2)
    GTRecipeTypes.LARGE_CHEMICAL_RECIPES.setMaxIOSize(6, 6, 4, 4)
})
