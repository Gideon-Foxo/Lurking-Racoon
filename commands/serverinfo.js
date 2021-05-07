const config = require("../config.json");
const version = config.version
const Discord = require('discord.js');
const client = new Discord.Client();


module.exports = { 
name: 'severinfo',
aliases: ['server', 'si', "serverinfo"],
description: 'this command shows you information about the server.',
execute: (message, client) => {
    const embed = new Discord.RichEmbed()
    .setColor(config.grey)
    .setTitle(`About ${message.guild.name}`)
    .setDescription(`Verification Level: **${message.guild.verificationLevel}**\nServer owner: ${message.guild.owner}\nMember count: <:Bot:654899933455056900> **${message.guild.members.filter(m => m.user.bot).size}**  <:Humans:655457571108552704> **${message.guild.memberCount- message.guild.members.filter(m => m.user.bot).size}**  Total **${message.guild.memberCount}**\nServer region: **${message.guild.region}**\nServer created at:  **${message.guild.createdAt}**\nChannels: <:Channel:274789152074104833> **${message.guild.channels.size}** <:VoiceChannel:274789152342671360> **${message.guild.channels.filter(v => v.type === "voice").size}**\nRoles: **${message.guild.roles.size}**`)
    .setThumbnail('https://cdn.discordapp.com/icons/587991236149772298/beb6753260eec8476de80dd875c1d82f.png')
    .setTimestamp()
    .setFooter(`Ping! ${Math.round(client.ping)}ms`)
    
    message.channel.send(embed)
 },
}