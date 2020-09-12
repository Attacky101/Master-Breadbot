const fs = require('fs')

module.exports = {
    name: 'prefix',
    description: 'Changes the server prefix.',
    args: 'true',
    usage: '<prefix>',
    category: 'utility',
    execute(message, args, prefix) {
        let prefixes = require('../prefixes.json')
        if (args.length > 1) {
            return message.channel.send('You can\'t have spaces in your prefix, d u d e')
        }
        if (args[0].length > 10) {
            return message.channel.send('Dude are you seriously trying to make your prefix that long\nLike that is just way too long')
        }
        prefixes[message.guild.id] = args[0]
        fs.writeFile('prefixes.json', JSON.stringify(prefixes), (err) => {
            if (err) return('The prefix couldn\'t be updated properly for some reason. Sorry.');
            message.channel.send(`The server prefix has been set to ${args[0]}.`)
        })
    },
};