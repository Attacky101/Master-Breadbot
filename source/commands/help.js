const Discord = require('discord.js');
module.exports = {
    name: 'help',
    aliases: ['commands'],
    description: 'Lists every command and their purposes.',
    execute(message, args) {
        let embed = new Discord.MessageEmbed()
        embed.setDescription("\`ping\` - Gets the bot's server ping.\n\`eggmansannouncement\` - I've come to make an announcement\n\`randomnumber`\ - Gives you a random number between a given range (whole numbers only).\n\`ooheeh`\ - I TOLD THE WITCH DOCTOR I WAS IN LOVE WITH YOU\n\`booah`\ - Boo ah\n\`bread`\ - Gives you a random picture of bread.\n\`changelog`\ - Shows the last three entries in the changelog.\n\`buge`\ - Gives you a random buge.\n\`say`\ - Only usable by Coweh™#2517 or Cuno#3435. Makes Breadbot say something. Parts of the code taken from CunoBot (https://github.com/MikhailMCraft/CunoBot).\n\`kill`\ - Only usable by Coweh™#2517. Terminates the bot.")
        embed.setTitle("Commands")
        embed.setColor("FF0000")
        message.channel.send(embed)
    },
};
