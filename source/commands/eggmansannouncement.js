module.exports = {
    name: 'eggmansannouncement',
    description: "I've come to make an announcement",
    execute(message, args) {
        message.channel.send("I've come to make an announcement: Shadow the Hedgehog can eat some flan");
    },
};