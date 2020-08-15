const buge = [{files:["https://cdn.discordapp.com/attachments/715626295555260478/720453007099035669/buge.png"]}, {files:["https://cdn.discordapp.com/attachments/715626295555260478/720454694857867375/Screen_Shot_2020-06-10_at_6.46.04_PM.png"]}, {files:["https://cdn.discordapp.com/attachments/715626295555260478/720670129096228964/Screen_Shot_2020-06-11_at_9.05.13_AM.png"]}, {files:["https://cdn.discordapp.com/attachments/715626295555260478/720451870631395359/Screen_Shot_2020-06-10_at_6.37.39_PM.png"]}]
module.exports = {
    name: 'buge',
    aliases: ['lookf'],
    description: 'Gives you a random buge.',
    execute(message, args) {
        message.react('743245441667301477')
        message.channel.send(`lookf at this stupteid BUGE\n`, buge[Math.floor(Math.random() * 4)])
    },
};