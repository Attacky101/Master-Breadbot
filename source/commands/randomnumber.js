module.exports = {
    name: 'randomnumber',
    aliases: ['randomnum', 'rn', 'rnum'],
    description: 'Gives you a random number between 1 and 100.',
    execute(message, args) {
        message.channel.send(`Here's a completely random number between 1 and 100:\n${Math.floor(Math.random() * 101)}`)
    },
};