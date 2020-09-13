const fs = require('fs')
let profiles = require('../breadprofiles.json')

module.exports = {
    name: 'breadprofileremove',
    aliases: ['breadcardremove', 'breadprofremove', 'bpremove'],
    description: 'Removes data from your Breadbot profile.',
    args: true,
    usage: '<FC | NNID | MM2ID | message | color>',
    category: '<category>',
    execute(message, args) {
        switch(args[0].toLowerCase()) {
            case 'fc':
                delete profiles[`switchfc${message.author.id}`]
                fs.writeFile('breadprofiles.json', JSON.stringify(profiles), (err) => {
                    if (err) return ('I couldn\'t update your profile correctly. *e*')
                    message.channel.send('Your profile was successfully updated.')
                })
                break;
            case 'nnid':
                delete profiles[`nnid${message.author.id}`]
                fs.writeFile('breadprofiles.json', JSON.stringify(profiles), (err) => {
                    if (err) return ('I couldn\'t update your profile correctly. *e*')
                    message.channel.send('Your profile was successfully updated.')
                })
                break;
            case 'mm2id':
                delete profiles[`mm2id${message.author.id}`]
                fs.writeFile('breadprofiles.json', JSON.stringify(profiles), (err) => {
                    if (err) return ('I couldn\'t update your profile correctly. *e*')
                    message.channel.send('Your profile was successfully updated.')
                })
                break;
            case 'message':
                delete profiles[`profilemessage${message.author.id}`]
                fs.writeFile('breadprofiles.json', JSON.stringify(profiles), (err) => {
                    if (err) return ('I couldn\'t update your profile correctly. *e*')
                    message.channel.send('Your profile was successfully updated.')
                })
                break;
            case 'color':
                delete profiles[`color${message.author.id}`]
                fs.writeFile('breadprofiles.json', JSON.stringify(profiles), (err) => {
                    if (err) return ('I couldn\'t update your profile correctly. *e*')
                    message.channel.send('Your profile was successfully updated.')
                })
                break;
            default:
                message.channel.send('Bruh, that isn\'t even something you can remove.')
        }
    },
};
