const fs = require('fs')

module.exports = {
    name: 'report',
    description: 'Reports a problem with the bot.',
    args: true,
    usage: '<report>',
    category: 'utility',
    execute(message, args) {
        const data = args.join(' ')
        if (data.length > 300) {
            return message.channel.send(`Do you really need to make your report that long? Make it less than 300 characters, because the ${data.length} characters you have is just excessive.`)
        }
        const date = new Date
        fs.appendFile('reports.txt', `Report from ${message.author.tag} at ${date}:\n${data}\n`, (err) => {
            if (err) return ('Oh funk, there was an error trying to report that')
            message.channel.send('Okay cool, the report has been added.')
            console.log('Someone has made a report.')
        })
    },
};