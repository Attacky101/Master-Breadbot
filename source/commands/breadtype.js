//Note: this command is far from finished, which is why it doesn't have a lot of bread types, and why it doesn't have anything in b!help.
const baketype = ['Baked', 'Toasted', 'Uncooked', 'Cooked']
const breadtype = ['aish merahrah', 'ajdov kruh', 'anpan', 'appam', 'arboud', 'arepa', 'baba', 'bagel', 'baguette', 'bakarkhani', 'balep korkun', 'bammy', 'banana', 'bannock', 'bara brith', 'barbari']
module.exports = {
    name: 'breadtype',
    description: 'Gives you a random type of bread that may or may not exist.',
    category: 'fun',
    execute(message, args) {
        message.channel.send(baketype[Math.floor(Math.random() * baketype.length)] + ' ' + breadtype[Math.floor(Math.random() * breadtype.length)] + ' bread')
    },
};
