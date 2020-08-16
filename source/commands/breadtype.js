//Note: this command is far from finished, which is why it doesn't have a lot of bread types, and why it doesn't have anything in b!help.
const baketype = ['baked', 'toasted', 'uncooked', 'cooked']
const breadtype = ['aish merahrah', 'ajdov kruh', 'anpan', 'appam', 'arboud', 'arepa']
module.exports = {
    name: 'breadtype',
    description: 'Gives you a random type of bread that may or may not exist.',
    execute(message, args) {
        message.channel.send(baketype[Math.floor(Math.random() * 4)] + ' ' + breadtype[Math.floor(Math.random() * 6)] + ' bread')
    },
};