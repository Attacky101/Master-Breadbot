module.exports = {
    name: 'stickbugtrap',
    description: 'Set a 2-hour long trap that will stick bug the first person to send a message in the channel this was used.',
    guildOnly: 'true',
    execute(message, args) {
        const stickBugger = message.author
        message.author.send('The trap\'s been set. Now we just wait...')
        // Create a message collector that will end by DMing whoever ended said message collector.
        const filter = m => m.content.includes('');
        const collector = message.channel.createMessageCollector(filter, { time: 7200000, max: 1 });

        collector.on('end', collected => {
        message.channel.send(`You just got stick bugged by ${stickBugger} lol`);
        message.channel.send({files:['https://cdn.discordapp.com/attachments/676934213156601899/745078718333976616/image0.gif']})
        });
    },
};