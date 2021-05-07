const Discord = require('discord.js');
const config = require("../config.json");
const grey = config.grey
const memberLogs = config.memberLogs
const print = console.log

module.exports = {

    name: 'contributors',
    aliases: ['contrib'],
    description: 'Lists all the contributes that made this bot possible.',
    execute(message, client) {

const embed = new Discord.RichEmbed()
.setTitle('Contributors that made this bot possible ')
.setColor(grey)
.setDescription('**Gideon#4325**: Main bot developer and bot owner.\n**MetsWing#8252**: Systems hosting\n**Develon#0250**: Main bot helper.\n**eeeeeehhhhh#3706**: Main bot helper.\n**jac.k#9409**: Side bot helper.')
.setTimestamp()
.setFooter(`Ping! ${Math.round(client.ping)}ms`)

message.channel.send(embed)

     }
    }