const Discord = require('discord.js');
module.exports = {
    name: 'avatar',
    aliases: ['icon'],
    description: 'Displays the avatar of a mentioned user. The user\'s avatar will be displayed if no users are mentioned.',
    //left as false as arguments are optional.
    args: false,
    category: 'fun',
    execute(message, args) {
        let embed = new Discord.MessageEmbed()
        if (!message.mentions.users.size) {
            embed.setTitle(`${message.author.tag}'s avatar`)
            embed.setImage(message.author.displayAvatarURL({format: 'png', dynamic: true, size:2048}))
            message.channel.send(embed)
        }
        else {
            const mentionedUser = message.mentions.users.first();
            embed.setTitle(`${mentionedUser.username}'s avatar:`)
            embed.setImage(mentionedUser.displayAvatarURL({format: 'png', dynamic: true, size:2048}))
            message.channel.send(embed)
        }
    },
};