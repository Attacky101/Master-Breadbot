const Discord = require('discord.js');
const { prefix } = require('../config.json')
module.exports = {
    name: 'help',
    aliases: ['commands'],
    description: 'The command you\'re in right now.',
    // left as false as args are optional.
    args: false,
    usage: '[command]',
    category: 'utility',
    execute(message, args) {
        const { commands } = message.client;
        const funCommands = commands.filter(command => command.category === 'fun')
        const utilCommands = commands.filter(command => command.category === 'utility')
        const modCommands = commands.filter(command => command.category === 'moderation')
        const data = []
        let embed = new Discord.MessageEmbed()
        embed.setColor('FF0000')
        if (!args.length) {
            embed.setTitle('Categories')
            embed.setDescription('\`Fun\`\n\`Utility\`\n\`Moderation\`')
            embed.setFooter(`Type "${prefix}help <category>" for a list of commands in that category.`)
            message.channel.send(embed)
        }
        else if (args[0] === 'Fun' || args[0] === 'fun') {
            funCommands.forEach(command => data.push('`' + command.name + '` - ' + command.description))
            embed.setTitle('Fun commands')
            embed.setDescription(data.join('\n'))
            message.channel.send(embed)
        }
        else if (args[0] === 'Utility' || args[0] == 'utility') {
            utilCommands.forEach(command => data.push('`' + command.name + '` - ' + command.description))
            embed.setTitle('Utility commands')
            embed.setDescription(data.join('\n'))
            message.channel.send(embed)
        }
        else if (args[0] === 'Moderation' || args[0] == 'moderation') {
            modCommands.forEach(command => data.push('`' + command.name + '` - ' + command.description))
            embed.setTitle('Moderation commands')
            embed.setDescription(data.join('\n'))
            message.channel.send(embed)
        }
        else {
            message.channel.send('Uh')
            setTimeout(function() {
                message.channel.send('I hate to break it to you')
            }, 2000)
            setTimeout(function() {
                message.channel.send('But uh')
            }, 4000)
            setTimeout(function() {
                message.channel.send('that isn\'t really a help category')
            }, 7000)
        }
    },
};
