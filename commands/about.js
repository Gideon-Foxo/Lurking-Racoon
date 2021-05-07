const Discord = require('discord.js');
const config = require("../config.json");
const grey = config.grey
const memberLogs = config.memberLogs
const print = console.log
const prefix  = config.prefix 
const version = config.version

module.exports = {

    name: 'about',
    aliases: ['info'],
    description: 'This cmd is about the bot.',
    execute(message, client) {

        const embed = new Discord.RichEmbed()
        .setColor(grey)
        .setTitle('About Lurking Raccoon')
        .setDescription(`I am Lurking Raccoon made by Gideon 💙🧡#4325 to lurk the chats in Fluffy's House. I was originally made to tell people what not to do but quickly became more then that. You can see all of my usable commands by running the command **${prefix}help**. Currently I am version **${version}**.  To see a list of contributors run the command **${prefix}contributors**.`)
        .setFooter(`Ping! ${Math.round(client.ping)}ms`)
        .setTimestamp()

        message.channel.send(embed)
     }
    }