const { randFromArray } = require("../functions");

// Note: this command is far from finished, which is why it doesn't have a lot of bread types.
const baketype = ['Baked', 'Toasted', 'Uncooked', 'Cooked']
const breadtype = ['aish merahrah', 'ajdov kruh', 'anpan', 'appam', 'arboud', 'arepa', 'baba', 'bagel', 'baguette', 'bakarkhani', 'balep korkun', 'bammy', 'banana', 'bannock', 'bara brith', 'barbari']
module.exports = {
    name: 'breadtype',
    description: 'Gives you a random type of bread that may or may not exist.',
    category: 'fun',
    execute(message, args) {
        message.channel.send(randFromArray(baketype) + ' ' + randFromArray(breadtype) + ' bread')
    },
};
