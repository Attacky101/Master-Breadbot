// c o n s t a n t .
  const fs = require('fs');
const Discord = require('discord.js');
let embed = new Discord.MessageEmbed()
const { prefix, token } = require('./config.json')
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    bot.commands.set(command.name, command);
}

bot.on('message', async (message) => {
    bot.user.setPresence({activity: {name: "the buges take over", type: "WATCHING"}, status: "online"})
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();
    
    //commands amazing

	const command = bot.commands.get(commandName)
		|| bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;
    
    if (command.args && !args.length) {
		let reply = `Bruh, you didn't give me any arguments.`;
		if (command.usage) {
            reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
        }
        return message.channel.send(reply);
    }
    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        // message.reply('there was an error trying to execute that command.');
        message.channel.send(e.stack)
    }

});
global.bot = bot
bot.login(token);