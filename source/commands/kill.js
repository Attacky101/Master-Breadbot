module.exports = {
    name: 'kill',
    description: 'Can only be used by Coweh™#2517. Terminates the bot.',
    execute(message, args) {
      if (message.author.id === '591032513254916096') {
        console.log('The bot has disconnected.')
        message.channel.send('Terminating...').then(() => {
        bot.destroy()
        process.exit(0)
        })
      }
      else {
        message.channel.send("Who the heck do you think you are, trying to *kill* me? You can't just do that!")
        message.channel.send("You know what? *Takes out a gun*")
        message.channel.send("*Shoots you*")
      }
    },
};