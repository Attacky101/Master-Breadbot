//Parts of the code taken from CunoBot.
const Discord = require('discord.js');
module.exports = {
    name: 'say',
    description: 'Can only be used by Coweh™#2517 or Cuno#3435. Makes Breadbot say something.',
    args: true,
    usage: '<text>',
    category: 'utility',
    execute(message, args) {
        if (message.author.id === '591032513254916096' || message.author.id === '287372868814372885') {
            if (message.attachments.size > 0) {
                var Attachment = (message.attachments).array();
                Attachment.forEach(function (attachment) {
                    const att = new Discord.MessageAttachment(attachment.url);
                    if (args == "") {
                       message.channel.send(att)
                    }
                    else {
                       message.channel.send(args.join(" "), att)
                    }
                  })
            }
            else {
                message.channel.send(args.join(" "))
            }
        }
        else {
            message.channel.send("Bruh you're not allowed to do that")
        }
        message.delete()
    }
};
