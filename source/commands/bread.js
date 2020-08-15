const bread = [{files:["https://cdn.discordapp.com/attachments/715626295555260478/739255277827784754/bread-399286_1920.jpg"]}, {files:["https://cdn.discordapp.com/attachments/715626295555260478/739255289433292921/bread-1761197_1920.jpg"]}, {files:["https://media.discordapp.net/attachments/715626295555260478/739255278867972156/bread-1281053_1280.jpg"]}, {files:["https://media.discordapp.net/attachments/715626295555260478/739693195050352640/bread-3467243_1920.jpg"]}, {files:["https://media.discordapp.net/attachments/715626295555260478/739693196258312232/baked-goods-4183225_1920.jpg"]}, {files:["https://media.discordapp.net/attachments/715626295555260478/739869994590142604/baked-goods-1867459_1920.jpg"]}, {files:["https://media.discordapp.net/attachments/715626295555260478/739869995080876214/bread-1245948_1920.jpg"]}, {files:["https://media.discordapp.net/attachments/715626295555260478/739869997064650852/bread-1284438_1920.jpg"]}, {files:["https://media.discordapp.net/attachments/715626295555260478/739869999161933825/pretzels-1491789_1920.jpg"]}]
module.exports = {
    name: 'bread',
    description: 'Gives you a random bread picture.',
    execute(message, args) {
        message.channel.send(`Alright, here's some bread:\n`, bread[Math.floor(Math.random() * 9)])
    }
}