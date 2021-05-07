const Discord = require('discord.js');
const config = require("../config.json");
const grey = config.grey
const memberLogs = config.memberLogs
const print = console.log

module.exports = {

    name: 'download',
    description: 'This is gives you a link to download the Fluffy and Racoon stickers.',
    execute(message, client) {
const embed = new Discord.RichEmbed()
.setColor(grey)
.setTitle('Download')
.setDescription('[Click here](https://gideon-grey.github.io/Fluffys-house-stickers/) to dowload the Fluffy stickers and [click here](https://gideon-grey.github.io/Fluffys-house-racoon-stickers/) to download the Racoon stickers.')
.setTimestamp()
.setFooter(`Ping! ${Math.round(client.ping)}`)

message.channel.send(embed)
     }
    }