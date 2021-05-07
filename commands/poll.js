const config = require("../config.json");
const version = config.version
const Discord = require('discord.js');
const client = new Discord.Client(); 
const grey = config.grey

module.exports = {
    name: 'poll',
    description: 'This command makes a new poll.',
    args: true,
    execute: async (message, client, args,) => {
        const embed = new Discord.RichEmbed()
        .setColor(grey)
        .setAuthor(`${message.author.tag}`, `${message.author.avatarURL}`)
        .setDescription(`${args.join(" ")}`)
        .setTimestamp()
        .setFooter(`Ping! ${Math.round(client.ping)}ms`)


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