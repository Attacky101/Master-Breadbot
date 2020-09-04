module.exports = {
    name: 'stickbugtrap',
    description: 'Set a trap that will stick bug the first person to send a message in the channel this was used.',
    guildOnly: 'true',
    execute(message, args) {
        const trapChannel = message.channel
        const stickBugger = message.author
        message.delete()
        stickBugger.send('The trap\'s been set. Now we just wait...').catch(err => {
            return;
        })
        // Create a message collector that will end by DMing whoever ended said message collector.
        const filter = m => m.content.includes('');
        const collector = message.channel.createMessageCollector(filter, {max: 1});

        collector.on('end', collected => {
        trapChannel.send(`You just got stick bugged by ${stickBugger} lol`);
        trapChannel.send({files:['https://cdn.discordapp.com/attachments/676934213156601899/745078718333976616/image0.gif']})
        });
    },
};
