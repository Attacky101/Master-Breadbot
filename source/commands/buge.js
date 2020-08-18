const buge = [{files:["https://cdn.discordapp.com/attachments/715626295555260478/720453007099035669/buge.png"]}, {files:["https://cdn.discordapp.com/attachments/715626295555260478/720454694857867375/Screen_Shot_2020-06-10_at_6.46.04_PM.png"]}, {files:["https://cdn.discordapp.com/attachments/715626295555260478/720670129096228964/Screen_Shot_2020-06-11_at_9.05.13_AM.png"]}, {files:["https://cdn.discordapp.com/attachments/715626295555260478/720451870631395359/Screen_Shot_2020-06-10_at_6.37.39_PM.png"]}, {files:['https://cdn.discordapp.com/attachments/715626295555260478/745071250166251540/buge.png']}, {files:['https://media.discordapp.net/attachments/715626295555260478/745071250942197900/buge2.jpg']}, {files:['https://media.discordapp.net/attachments/715626295555260478/745071252967784468/buge3.jpg']}, {files:['https://media.discordapp.net/attachments/715626295555260478/745071256608702574/buge4.jpg']}, {files:['https://media.discordapp.net/attachments/715626295555260478/745071262287659018/buge5.jpg']}, {files:['https://media.discordapp.net/attachments/702372943396732989/744274362215170210/image1.jpg']}]
module.exports = {
    name: 'buge',
    aliases: ['lookf'],
    description: 'Gives you a random buge.',
    execute(message, args) {
        if (Math.ceil(Math.random() * 120) == 120) {
            message.channel.send({files:['https://cdn.discordapp.com/attachments/676934213156601899/745078718333976616/image0.gif']})
        }
        else {
            message.react('743245441667301477')
            message.channel.send(`lookf at this stupteid BUGE\n`, buge[Math.floor(Math.random() * 10)])
        }
    },
};
