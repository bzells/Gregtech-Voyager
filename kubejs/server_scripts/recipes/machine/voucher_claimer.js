ServerEvents.recipes(event => {


    /*  
        @params
        itemOutputs needs to be an array of 3 objects
    */
    function create_voucher_recipe(name, ingredientsItem, itemOutputs, tier, time)
    {
        event.recipes.gtceu.voucher_claimer(fullName(name))
            .itemInputs(ingredientsItem)
            .chancedOutput(itemOutputs, 9000)
            .duration(time)
            .EUt(tier);
    }




});