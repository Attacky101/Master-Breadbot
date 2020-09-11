module.exports = {
    name: 'ping',
    description: "Gets the bot's server ping.",
    category: 'utility',
    execute(message, args) {
        var d = new Date()
        message.channel.send("**p o n g**").then((m) => {
        var n = new Date()
        m.edit(`**p o n g** (${n - d} ms)`)
        }
        )},
}
