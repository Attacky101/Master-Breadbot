// Lootsaccs are based on Lootkongs, a feature from CunoBot: https://github.com/MikhailMCraft/CunoBot/blob/master/src/commands/fun/lootkong.js

const normalEmotes = ['<:BubblyPensive:745438001152262286>', '<:steppedonalego:753990866191777923>', '<:spikebruh:753992930443919542>']
const normalText = ['**Pensive Bubbly** (Normal)', '**Stepped On a Lego** (Normal)', '**Spike Bruh** (Normal)']

const superEmotes = ['<:unamusedsun:753775759822291004>', '<:owo:753992930758492401>', '<:doubt:753992930678669402>']
const superText = ['**Unamused Sun** (Super)', '**OwO** (Super)', '**Doubt** (Super)']

const highEndEmotes = ['<:pingkirby:684920141007683601>', '<:donkeypog:751497245618208991>']
const highEndText = ['**Pinged Kirby** (High-End)', '**Donkey Pog** (High-End)']

module.exports = {
    name: 'lootsacc',
    description: 'Have you ever wanted to open an Attacky Sack? Now you can.',
    category: 'fun',
    async execute(message, args) {
        let emote1;
        let emote2;
        let text1;
        let text2;
        let textAndEmotesNum;

        let rarityNum = Math.floor(Math.random() * 10);
        if (rarityNum === 9) {
            textAndEmotesNum = Math.floor(Math.random() * highEndEmotes.length);
            emote1 = highEndEmotes[textAndEmotesNum];
            text1 = highEndText[textAndEmotesNum]
        }
        else if (rarityNum === 6 || rarityNum === 7 || rarityNum === 8) {
            textAndEmotesNum = Math.floor(Math.random() * superEmotes.length);
            emote1 = superEmotes[textAndEmotesNum]
            text1 = superText[textAndEmotesNum]
        }
        else {
            textAndEmotesNum = Math.floor(Math.random() * normalEmotes.length);
            emote1 = normalEmotes[textAndEmotesNum]
            text1 = normalText[textAndEmotesNum]
        }

        rarityNum = Math.floor(Math.random() * 10);
        if (rarityNum === 9) {
            textAndEmotesNum = Math.floor(Math.random() * highEndEmotes.length);
            emote2 = highEndEmotes[textAndEmotesNum];
            text2 = highEndText[textAndEmotesNum]
        }
        else if (rarityNum === 6 || rarityNum === 7 || rarityNum === 8) {
            textAndEmotesNum = Math.floor(Math.random() * superEmotes.length);
            emote2 = superEmotes[textAndEmotesNum]
            text2 = superText[textAndEmotesNum]
        }
        else {
            textAndEmotesNum = Math.floor(Math.random() * normalEmotes.length);
            emote2 = normalEmotes[textAndEmotesNum]
            text2 = normalText[textAndEmotesNum]
        }

        const lootsaccMessage1 = await message.channel.send('\n<:sacc1:753687125391835296><:sacc2:753687125123399681>\n<:sacc3:753687125500887100><:sacc4:753687125106622465>')
        const lootsaccMessage2 = await message.channel.send('**Opening Lootsacc...**')
        setTimeout(function(){
            lootsaccMessage1.edit(`\n<:sacc1:753687125391835296>${emote1}<:sacc2:753687125123399681>\n<:sacc3:753687125500887100>${emote2}<:sacc4:753687125106622465>`)
            lootsaccMessage2.edit(`**Lootsacc opened!**\nYou got:\n-${text1}\n-${text2}`)
        }, 2000)
    },
};
