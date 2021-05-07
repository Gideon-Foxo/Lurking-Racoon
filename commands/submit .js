const config = require("../config.json");
const version = config.version
const Discord = require('discord.js');
const client = new Discord.Client();
const grey = config.grey

module.exports = {
    name: 'submit',
    description: 'This command submits a suggestion for qqod or for an serve event.',
    args: true,
    execute: async (message, client, args,) => {
        const embed = new Discord.RichEmbed()
        .setColor(grey)
        .setAuthor(`${message.author.tag}`, `${message.author.avatarURL}`)
        .setDescription(`${args.join(" ")}`)
        .setTimestamp()
        .setFooter(`${message.author.id}`)

        message.guild.channels.get('655182790337232946').send(embed).then(message.channel.send('Submission sent successfully <a:Yes:617059864396431624>'))
    }}