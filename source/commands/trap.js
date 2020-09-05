module.exports = {
    name: 'trap',
    description: 'Set a trap that will send one of various images, videos, etc. to the first person to send a message in the channel this was used.',
    guildOnly: 'true',
    execute(message, args) {
        const trapper = message.author;
        const trapChannel = message.channel;
        message.delete();
        const trapText = [`You just got stick bugged by ${trapper} lol`, `${trapper} says Alley Rat`, `${trapper} says Rat Funk`]
        const trapFile = [{files:['https://cdn.discordapp.com/attachments/702373206513942578/751554996641857566/image0.gif']}, {files:['https://www.mariowiki.com/images/b/bb/Alley_RatSMRPG.png']}, {files:['https://www.mariowiki.com/images/4/42/Rat_Funk_Sprite_-_Super_Mario_RPG.png']}]
        trapper.send('The trap\'s been set. Now we just wait...').catch(err => {
            return;
        })
        // Creates a message collector that will end by messaging in the channel where said message collecor was created.
        const filter = m => m.content.includes('');
        const collector = message.channel.createMessageCollector(filter, {max: 1});

        collector.on('end', collected => {
        const listNum = Math.floor(Math.random() * trapText.length);
        trapChannel.send(trapText[listNum]);
        trapChannel.send(trapFile[listNum])
        });
    },
};
