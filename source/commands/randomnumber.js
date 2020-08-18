const {prefix} = require('../config.json')
module.exports = {
    name: 'randomnumber',
    aliases: ['randomnum', 'rn', 'rnum'],
    description: 'Gives you a random number between a given range (whole numbers only).',
    args: true,
    usage: '<first number in range> <second number in range>',
    execute(message, args) {
        if (args.length !== 2) {
            message.channel.send(`Hurb, you didn't give me the right amount of arguments.\nThe proper usage would be: \`${prefix}randomnumber ${this.usage}\``);
        }
        else {
            const num1 = Number(args[0])
            const num2 = Number(args[1])
            if (Number.isInteger(num1) == false || Number.isInteger(num2) == false) {
                message.channel.send('One or more arguments are not a whole number. (Decimals and numbers in word form like "one" will not work.)')
            }
            else if (num1 >= num2) {
                message.channel.send('The first number in the range cannot be greater than the second.')
            }
            else {
                const num3 = Math.floor(Math.random() * (num2 - num1 + 1) + num1)
                message.channel.send(`Here's a random number between ` + num1 + ` and ` + num2 + `:\n${num3}`)
        }
        }
    },
};
