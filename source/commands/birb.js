const { randFromArray } = require("../functions");

const birb = [{files:["https://cdn.discordapp.com/attachments/748010784138854410/752575739806875648/image0.png"]}, {files:["https://cdn.discordapp.com/attachments/748010784138854410/752575741966942377/image1.png"]}, {files:["https://cdn.discordapp.com/attachments/748010784138854410/752575742386372658/image2.jpg"]}, {files:["https://cdn.discordapp.com/attachments/748010784138854410/752575742562533527/image3.png"]}, {files:["https://cdn.discordapp.com/attachments/748010784138854410/752575932656648244/image0.png"]}, {files:["https://cdn.discordapp.com/attachments/748010784138854410/752576060041986088/image0.png"]}, {files:["https://cdn.discordapp.com/attachments/748010784138854410/752576185845809234/image0.jpg"]}, {files:["https://cdn.pixabay.com/photo/2017/03/13/10/25/hummingbird-2139279_960_720.jpg"]}, {files:["https://cdn.pixabay.com/photo/2017/05/08/13/15/spring-bird-2295436_960_720.jpg"]}, {files:["https://cdn.pixabay.com/photo/2018/08/12/16/59/ara-3601194_960_720.jpg"]}, {files:["https://cdn.pixabay.com/photo/2020/08/10/14/17/hummingbird-5477966_960_720.jpg"]}, {files:["https://cdn.pixabay.com/photo/2011/09/27/18/52/sparrow-9950_960_720.jpg"]}, {files:["https://cdn.pixabay.com/photo/2014/11/28/01/01/jay-548381_960_720.jpg"]}, {files:["https://cdn.pixabay.com/photo/2014/11/28/01/01/jay-548381_960_720.jpg"]}, {files:["https://cdn.pixabay.com/photo/2016/12/13/22/25/kingfisher-1905255_960_720.jpg"]}, {files:["https://cdn.pixabay.com/photo/2016/11/14/15/29/hummingbird-1823829_960_720.jpg"]}, {files:["https://cdn.pixabay.com/photo/2015/08/09/13/30/alcedo-atthis-881594_960_720.jpg"]}, {files:["https://cdn.pixabay.com/photo/2017/03/13/10/25/hummingbird-2139278_960_720.jpg"]}, {files:["https://cdn.pixabay.com/photo/2018/02/16/22/08/bird-3158784_960_720.jpg"]}]
module.exports = {
    name: 'birb',
    aliases: ['bird'],
    description: 'gives you a random birb picture.',
    category: 'fun',
    execute(message, args) {
        message.react('🐦')
        message.channel.send(`bird up\n`, randFromArray(birb))
    },
};