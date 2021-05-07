const config = require("../config.json");
const version = config.version
const Discord = require('discord.js');
const client = new Discord.Client(); 
const grey = config.grey

module.exports = {
    name: 'opoll',
    description: 'This command makes a new poll stripped down [staff only].',
    args: true,
    execute: async (message, client, args,) => {
        const embed = new Discord.RichEmbed()
        .setColor(grey)
        .setDescription(`${args.join(" ")}`)
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`You need to be staff to use this command. Please use **${config.prefix}poll** instead.`)
message.channel.send(embed).then(sentMessage => {
  sentMessage.react('617059864396431624').then(() => {
    sentMessage.react('617059897523306496').then(() => {
      sentMessage.react('🤷‍♀️').then(() => {
        message.delete()
      })
    })
  })
})
    }}