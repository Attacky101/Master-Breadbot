const fs = require('fs')
let profiles = require('../breadprofiles.json')
const Discord = require('discord.js')

module.exports = {
    name: 'breadprofile',
    aliases: ['breadcard', 'breadprof', 'bp'],
    description: 'Sets data for your Breadbot profile, or views it.',
    usage: '[FC | NNID | MM2ID | message | color] [data]',
    category: 'fun',
    execute(message, args, prefix) {
        let embed = new Discord.MessageEmbed
        if (!args.length) {
            if (profiles[`color${message.author.id}`]) {embed.setColor(profiles[`color${message.author.id}`])}
            if (profiles[`switchfc${message.author.id}`]) {embed.addField('Switch friend code', 'SW-' + profiles[`switchfc${message.author.id}`])}
            if (profiles[`nnid${message.author.id}`]) {embed.addField('Nintendo Network ID', profiles[`nnid${message.author.id}`])}
            if (profiles[`mm2id${message.author.id}`]) {embed.addField('Super Mario Maker 2 ID', profiles[`mm2id${message.author.id}`])}
            if (profiles[`profilemessage${message.author.id}`]) {embed.setDescription(profiles[`profilemessage${message.author.id}`])}
            embed.setThumbnail(message.author.displayAvatarURL({ format: 'png' }))
            embed.setTitle(`${message.author.tag}'s Breadbot profile`)
            embed.setFooter(`Use "${prefix}breadprofile <FC | NNID | MM2ID | message | color> <data>" to update your Breadbot profile, or ${prefix}breadprofileremove <FC | NNID | MM2ID | message | color> to remove data you have set.`)
            message.channel.send(embed)
        }
        else {
            let data = args.slice(1).join(' ')
            switch(args[0].toLowerCase()) {
                case 'fc':
                    if (args.length < 2) {
                        message.channel.send('You need to specify something to set your Switch friend code to.')
                        break;
                    }
                    if (data.length != 14) {
                        message.channel.send('Your Switch friend code must be 14 characters long, like "0000-0000-0000."')
                        break;
                    }
                    profiles[`switchfc${message.author.id}`] = data
                    fs.writeFile('breadprofiles.json', JSON.stringify(profiles), (err) => {
                        if (err) return ('I couldn\'t update your profile correctly. *e*')
                        message.channel.send('Your profile was successfully updated.')
                    })
                    break;
                case 'nnid':
                    if (args.length < 2) {
                        message.channel.send('You need to specify something to set your Nintendo Network ID to.')
                        break;
                    }
                    if (data.length < 6 || data.length > 16) {
                        message.channel.send('Your NNID must be between 6 and 16 characters long.')
                        break;
                    }
                    profiles[`nnid${message.author.id}`] = data
                    fs.writeFile('breadprofiles.json', JSON.stringify(profiles), (err) => {
                        if (err) return ('I couldn\'t update your profile correctly. *e*')
                        message.channel.send('Your profile was successfully updated.')
                    })
                    break;
                case 'mm2id':
                    if (args.length < 2) {
                        message.channel.send('You need to specify something to set your Mario Maker 2 Maker ID to.')
                        break;
                    }
                    if (data.length != 11) {
                        message.channel.send('Your Mario Maker 2 Maker ID must be 11 characters long, like "000-000-000".')
                        break;
                    }
                    profiles[`mm2id${message.author.id}`] = data
                    fs.writeFile('breadprofiles.json', JSON.stringify(profiles), (err) => {
                        if (err) return ('I couldn\'t update your profile correctly. *e*')
                        message.channel.send('Your profile was successfully updated.')
                    })
                    break;
                case 'message':
                    if (args.length < 2) {
                        message.channel.send('You need to specify something to set your profile message to.')
                        break;
                    }
                    if (data.length > 400) {
                        message.channel.send('Bruh, your message is way too long. If you want to use it, make it less than 400 characters.')
                        break;
                    }
                    profiles[`profilemessage${message.author.id}`] = data
                    fs.writeFile('breadprofiles.json', JSON.stringify(profiles), (err) => {
                        if (err) return ('I couldn\'t update your profile correctly. *e*')
                        message.channel.send('Your profile was successfully updated.')
                    })
                    break;
                case 'color':
                    if (args.length < 2) {
                        message.channel.send('You need to specify a hex code to set your profile color to.')
                        break;
                    }
                    let hexCheck = new RegExp(/^#[0-9A-F]{6}$/i)
                    data = data.toUpperCase()
                    if (hexCheck.test(data) !== true) {
                        message.channel.send('That isn\'t a valid hex code. Hex codes must be formatted like "#AAFFFF".')
                        break;
                    }
                    profiles[`color${message.author.id}`] = data
                    fs.writeFile('breadprofiles.json', JSON.stringify(profiles), (err) => {
                        if (err) return ('I couldn\'t update your profile correctly. *e*')
                        message.channel.send('Your profile was successfully updated.')
                    })
                    break;
                default:
                    if (message.mentions.users.size) {
                        const mentionedUser = message.mentions.users.first();
                        if (profiles[`color${mentionedUser.id}`]) {embed.setColor(profiles[`color${mentionedUser.id}`])}
                        if (profiles[`switchfc${mentionedUser.id}`]) {embed.addField('Switch friend code', 'SW-' + profiles[`switchfc${mentionedUser.id}`])}
                        if (profiles[`nnid${mentionedUser.id}`]) {embed.addField('Nintendo Network ID', profiles[`nnid${mentionedUser.id}`])}
                        if (profiles[`mm2id${mentionedUser.id}`]) {embed.addField('Super Mario Maker 2 ID', profiles[`mm2id${mentionedUser.id}`])}
                        if (profiles[`profilemessage${mentionedUser.id}`]) {embed.setDescription(profiles[`profilemessage${mentionedUser.id}`])}
                        embed.setThumbnail(mentionedUser.displayAvatarURL({ format: 'png' }))
                        embed.setTitle(`${mentionedUser.tag}'s Breadbot profile`)
                        embed.setFooter(`Use "${prefix}breadprofile <FC | NNID | MM2ID | message | color> <data>" to update your Breadbot profile, or ${prefix}breadprofileremove <FC | NNID | MM2ID | message | color> to remove data you have set.`)
                        message.channel.send(embed)
                    }
                    else {message.channel.send(`Dude, that isn't something you can have on your profile, or a valid mention. If you wanna change your profile, pick from one of these:\n\`FC\`, \`NNID\`, \`MM2ID\`, \`message\`, or \`color\`, or use \`${prefix}breadprofileremove\` to remove data you have set. Or if you wanna look at someone else's profile, use ${prefix}breadprofile <mention>.`)}
            }
        }
    },
};
