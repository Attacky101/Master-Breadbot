// c o n s t a n t .
const fs = require('fs');
const Discord = require('discord.js');
const { defprefix, token } = require('./config.json')
const prefixes = require('./prefixes.json')
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    bot.commands.set(command.name, command);
}

bot.on('ready', () => {
    console.log('The bot is online.')
    bot.user.setPresence({activity: {name: "the Hotel Mario cutscenes (oh yeah and also for b!help I guess) | Owned by Coweh™#2517", type: "WATCHING"}, status: "online"})
    fs.readFile('reports.txt', (err, data) => {
        if (err) return message.channel.send('There was an error fetching reports.')
        console.log(`Current reports: ${data}`)
    })
})

bot.on('message', async (message) => {
    let prefix = prefixes[message.guild.id]
    if (!prefix) {prefix = defprefix}
    if (message.author.bot || !message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();
    
    //commands amazing

	const command = bot.commands.get(commandName)
		|| bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;
    
    if (command.guildOnly && message.channel.type === 'dm') {
        return message.reply('That command can\'t be used in DMs.');
    }    

    if (command.args && !args.length) {
		let reply = `Bruh, you didn't give me any arguments.`;
		if (command.usage) {
            reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
        }
        return message.channel.send(reply);
    }
    try {
        command.execute(message, args, prefix);
    } catch (error) {
        console.error(error);
        message.channel.send('Uh for some reason there was an error trying to execute that command');
    }

});
global.bot = bot
bot.login(token);
