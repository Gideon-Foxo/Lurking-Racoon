const Discord = require('discord.js');
const config = require("../config.json");
const grey = config.grey
const memberLogs = config.memberLogs
const print = console.log 
const member = config.member
const tester = config.tester


module.exports = {

    name: 'agree',
    description: 'This is the gatekeeper command (how you enter the server).',
    async execute (message) {

        if(message.member.roles.has(member)) {
            message.channel.send(`<@${message.author.id}> You have already agreed.`)
            message.delete()
            message.delete()
        } else {
        const embed1 = new Discord.RichEmbed()
        .setTitle("Welcome to Fluffy's House!")
        .setThumbnail(message.author.displayAvatarURL)
        .setColor(config.grey)
        .setDescription("**Please** restart your discord client\n> This is ctrl + r on windows <:windows:636725890415329280> This to update your emote list to make sure you get the emotes from this server.\nYou can grab some extra roles in <#628013432930566154>.\nMore information about the server can be found in <#599605054583996423>.\n Our website can be found **[here.](<https://gideon-grey.github.io/Fluffys-house/>)**\nIf you have any questions or need to report something please DM <@576146785509179392>.\nWe hope you enjoy your stay here at Fluffy's House!")
        .setFooter(message.author.id);

        const embed2 = new Discord.RichEmbed()
.setColor(grey)
.setTitle(`<:PassedTheGatekeeper:617368477203955713> ${message.author.tag} has passed the gatekeeper`)
.setFooter(message.author.id)

 await message.guild.roles.find(role => role.id == config.welcomePing).setMentionable(true, 'User passed the gatekeeper.')
 await (message.member.addRole(member, "Passed the gatekeeper"))
 await (message.guild.channels.get('588002445695778861').send(`<@&598932499212795915> please welcome <@${message.author.id}> to ${message.guild.name}!`, embed1))
 await (message.guild.channels.get(memberLogs).send(embed2))
 await (message.guild.roles.find(role => role.id == config.welcomePing).setMentionable(false, 'User passed the gatekeeper.'))
await message.delete()
    }}
    }