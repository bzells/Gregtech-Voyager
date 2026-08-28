ServerEvents.recipes((event) => {
    event.remove({ input: "tconstruct:debris_nugget"})
    event.remove({ output: "tconstruct:debris_nugget"})
    event.remove({ mod: "javd"})

    event.remove({output: "forestry:gear_bronze"})
})
