module.exports = {
    name: 'purge',
    description: 'Deletes a given amount of messages.',
    args: true,
    usage: '<number>',
    execute(message, args) {
        if (message.member.hasPermission('MANAGE_MESSAGES')) {
            const purgeAmount = parseInt(args[0]) + 1;
            if (isNaN(purgeAmount)) {
                return message.channel.send('Bruh that isn\'t even a valid number');
            }
            else if (purgeAmount < 1 || purgeAmount > 100) {
                return message.channel.send('Boi, you have to input a number between 1 and 99.');
            }
            else {
                message.channel.bulkDelete(purgeAmount, true).catch(err => {
                    console.error(err);
                    message.channel.send('There was an error trying to purge messages. The messages may be too old.');
                });
            }
        }
        else {
            message.channel.send('Dude are you actually trying to purge messages\nLike do you not realize you don\'t even have the manage messages permission')
        }
    },
};