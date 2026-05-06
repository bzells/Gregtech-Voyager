function radio(radio, i_nbt, i_message, direction)
{
    ItemEvents.rightClicked(`kubejs:${radio}_radio`, event => {
    const player = event.player
    let text

    if (direction == 'in') {
        text = Text.red(i_message)
    } else if (direction == 'out') {
        text = Text.green(i_message)
    }

    let nbt = event.item.nbt

    if (nbt && nbt.getInt('message') == i_nbt) {
        player.tell(text)

        event.server.scheduleInTicks(20, () => {
            let item = player.getMainHandItem()
            let newNbt = item.nbt ? item.nbt : {}
            newNbt.message = i_nbt + 1
            item.setNbt(newNbt)
        })
    }
    if (i_nbt == 999) {
        player.tell(text)
        player.tell(Text.yellow('Transmission ended.'))
    }

    event.server.runCommandSilent(
        `/playsound gtceu:computation player ${player.username}`
    )
})


}
radio('celestial', 1, '*Shuffling* Hello...? Captain someone is sending a radio signal to... ᒲᔑ∷ᓭ!', 'in');
radio('celestial', 2, 'Captain?: ᒲᔑ∷ᓭ!? No martian has been there for thousands of years! Check again ʖ𝙹ʖ.', 'in');
radio('celestial', 3, 'ʖ𝙹ʖ?: Hello? Is anyone there?', 'in');
radio('celestial', 4, 'You: I didn\'t actually think anyone would respond...', 'out');
radio('celestial', 5, 'ʖ𝙹ʖ?: Captain it\'s for real!', 'in');
radio('celestial', 6, 'Captain: This is Captain !¡╎ᓵᔑ∷↸ speaking, captain of the martian starship ᒷリℸ ̣ ᒷ∷!¡∷╎ᓭᒷ - We come in peace', 'in');
radio('celestial', 7, '*you introduce yourself*', 'out');
radio('celestial', 8, 'Captain: Am I right to believe you visited Mars? Why? It\'s barren and the atmosphere is all but gone.', 'in');
radio('celestial', 9, '*you talk about space exploration, and ostrum*', 'out');
radio('celestial', 10, 'Captain: Ostrum? I guess now that I think about it Earth doesn\'t have that element... makes sense.', 'in');
radio('celestial', 11, 'ʖ𝙹ʖ: Captain! Did he say he was from Earth? This is what we needed!!', 'in');
radio('celestial', 12, 'Captain: Wait a minute Bob you\'re right!', 'in');
radio('celestial', 13, 'Bob: [you], you have something we need. You see, our engineers have all but used up all of our lunarium supply. Something found on your moon.', 'in');
radio('celestial', 14, 'Bob: Lunarium is an extremely rare element outside of the Sol system, but it turns out we need it in order to continue travelling.', 'in');
radio('celestial', 15, 'You: Are you proposing a trade deal?', 'out');
radio('celestial', 16, 'Captain: That\'s exactly what Bob is proposing. You give us lunarium, and we will give you all the ostrum you need!', 'in');
radio('celestial', 17, 'Captain: You see, we used ostrum in almost all of our old ships, which now sit in a galactic junkyard.', 'in');
radio('celestial', 18, 'Captain: You would have to break down the junk we give you, but there are many precious metals found within the old ship hulls.', 'in');
radio('celestial', 19, 'You: I\'m in.', 'out');
radio('celestial', 20, 'Captain: Perfect! Now in order for us to be able to find you, you\'re gonna need a bigger radio...', 'in');
radio('celestial', 21, 'You: I\'m sure I can make something. How far out are you guys?', 'out');
radio('celestial', 22, 'Captain: Currently, we are only a few star systems away from you. Some lunarium should extend your signal far enough that we can reach it.\nOh, and be ready for big shipments. You will need a post box.', 'in');
radio('celestial', 23, 'Captain: Note this however, the ᒷリℸ ̣ ᒷ∷!¡∷╎ᓭᒷ will be too far away to hear this radio once we depart our current station, but shipments should still come. In future, you will need a better radio...', 'in');
radio('celestial', 999, 'Captain: Note this however, the ᒷリℸ ̣ ᒷ∷!¡∷╎ᓭᒷ will be too far away to hear this radio once we depart our current station, but shipments should still come. In future, you will need a better radio...\nSo that we know it\'s you, send us this radio in your postbox.', 'in');