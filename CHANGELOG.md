# Changelog

## Latest

## Additions
- Raw Platinum Dust
	- Can be EBF’d at HV for 3 Platinum Nuggets
	- Can be used to make PGS
- New Loch Ness Fishing Port
- New Forest Regrowth Chamber
- New Mixer Helper Recipe Module
- New Homestead Flower Garden Multiblock

## Balance Changes
- Cube Multis can now have 4 input busses
- Chemist helper specialization module no longer needs NBZ, or HOG
- Platinum is no longer gotten from nickel ore, instead it gives “Raw Platinum Dust”
- Platinum dust now requires an HV EBF (Kanthal)
- Mana Infused Cookies now last twice as long
- Source Berry Cookies last half as long
- EV Basic modules take tungsten steel instead of niobium titanium
- Plat line byproduct yield is much greater now with refactor
- Mica ore veins now have a weight of 20 (was 2 before)
- Titanex HTc no longer needs Titanite coils

## Questbook


## Recipe Balance Changes
- Skip recipes added to some AE2 storage components to avoid large nested crafts
- SMD Assembler recipes are now just as fast as normal assembly recipes
- AE2 Recipes have been “unremoved” (Note: changed recipes are the same. Missing recipes are now base)

## Bugfixes/Missing Recipes
- AE2 Pattern Access Terminal now has a recipe
- Flat interfaces/pattern providers are now revertable
- Fixed conflicting brick and flower pot assembler recipe
- Fixed netherite bypass/duping bug with TConstruct
- Removed Chisel Block -> Ingot recipes
- Fixed source gem dupe
- Fix Specialized Helper Tooltip
- Cube Multis no longer break without 2 recipe inputs
- Steam multis are now attached to the correct recipe maps
- Helper computation array fluid recipe inputs are now in increments of 144
- Annealed copper/fluxed electrum recipes fixed
- Fixed bug where air couldn’t be collected because of circuit issues
- GitHub Issues

## Misc
- Refactored Plat Line (Again)


## 0.4.3a.pb-patch-3

## Additions
- New Moon Sand/Rock processing line
- New Jungle Wood processing line
- New Cube Mixer
- Hungry Helper can now generate parallel power with parallels
- Added Energetic Casing
- Added 5 new cookie types
- Added “Chemist” helper specialization
- Added Helperade (Blue Raspberry)
- IF Addons are now craftable
- More hungry helper modules are craftable

## Balance Changes
- Palladium ore removed from Mars
- Platinum ore moved to Tier 3 Planets
- Twilight forest ores updated
- Nerfed energetic pearlic iron tool rod damage multiplier ( 2.0 -> 1.25)
- Martian Air is now attainable through gas collecting
- Helpers now gain more XP for parallels
 - XP = (((recipeTime^1.8 * recipeTier^1.2) / 3200) + recipeTier) * (1 + pars / 3)
- Helpers can now OC by one tier

## Questbook
- New Inventory Pets QB Chapter
- Started adding custom lines to Processing Lines Chapter (Since they were not visible before)

## Recipe Balance Changes
- Some helper modules are now cheaper
- Metallic Mica can now use Lubricant instead of Heavy Oil
- Platinum casing now takes 1 HV circuit instead of 2 EV Circuits
- Plat-line Helper recipes changed to end products
- AE2 Patterns are now in an EV assembler
- Flat pattern provider is now craftable
- Certain casings are now breakable
- Some Inventory pets are no longer made using Ars
- Enderman pet is now craftable
- Martian sand recipes buffed
- Added new more efficient recipe for metallic mica
- (Temporary) Desh-line is now significantly cheaper (for the sake of playtesting)

## Bugfixes
- Steam Compressor now works
- All ore veins are shown with the raw ore, not block
- Hungry helper modules now show output boost
- Specialization helpers now show “Specialization slots” when formed instead of “Recipe slots”
- GitHub Issues

## Misc
- Refactored Platline
- GT Fertilizer now works in the IF plant fertilizer

## Mods
- Swapped ChestTracker with FindMe
- Updated Voyager Core
- Updated Gregeric Tinkering
