//This command will only work in a specific server that it was designed for.
module.exports = {
    name: 'devtoggle',
    description: 'things',
    guildOnly: true,
    execute(message, args) {
        if (message.guild.id != '702366433295859732') {
            return;
        }
        else if (message.member.roles.cache.get('729183216971415594')) {
            message.member.roles.remove('729183216971415594');
            message.channel.send('Dev role removed.')
        }
        else {
            message.member.roles.add('729183216971415594');
            message.channel.send('Dev role added.')
        }
    },
};