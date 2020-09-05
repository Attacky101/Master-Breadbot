module.exports = {
    name: 'trap',
    description: 'Set a trap that will send one of various images, videos, etc. to the first person to send a message in the channel this was used.',
    guildOnly: 'true',
    execute(message, args) {
        const trapper = message.author;
        const trapChannel = message.channel;
        message.delete();
        const trapText = [`you just got stick bugged by ${trapper} lol`, `${trapper} says Alley Rat`, `${trapper} says Rat Funk`, `${trapper} would like to inform you that this is jeff`, `${trapper} says octolot`, `you've been buged by ${trapper}`, `${trapper} ran out of buges so have an egub`]
        const trapFile = [{files:['https://cdn.discordapp.com/attachments/702373206513942578/751554996641857566/image0.gif']}, {files:['https://www.mariowiki.com/images/b/bb/Alley_RatSMRPG.png']}, {files:['https://www.mariowiki.com/images/4/42/Rat_Funk_Sprite_-_Super_Mario_RPG.png']}, {files:['https://cdn.discordapp.com/attachments/676934213156601899/751921869518667816/jeff.png']}, {files:['https://cdn.discordapp.com/attachments/697562331730935822/751923038177591346/Octolot_SMRPG.png']}, {files:['https://cdn.discordapp.com/attachments/697562331730935822/751923511282630656/buge.png']}, {files:['https://cdn.discordapp.com/attachments/697562331730935822/751923632904732783/buge2.png']}]
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
