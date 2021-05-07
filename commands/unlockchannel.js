const Discord = require('discord.js');
const config = require("../config.json");
const grey = config.grey
const memberLogs = config.memberLogs
const print = console.log

module.exports = {

    name: 'unlockchannel',
    aliases: [ 'unlock', "uc", "endlockdown"],
    description: 'This command unlocks a channel so members can speak.',
    async execute(message, client, args) {

        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`<@${message.author.id}>, you can not run this command.`);
        else {
            try {
                await message.react("🔓")
            await message.channel.overwritePermissions(message.channel.guild.defaultRole, { SEND_MESSAGES: null });
            const embed = new Discord.RichEmbed()
            .setTitle("Channel successfully unlocked 🔓")
            .setColor(config.green)
            await message.channel.send(embed);
        } catch (error) {
            print(error)
            const embed = new Discord.RichEmbed()
            .setColor(config.red)
            .setTitle('An error has occured')
            .setDescription(`\`\`\`js\n${error}\`\`\``)
            .setTimestamp()
            .setFooter(`Ping! ${Math.round(client.ping)}`)
            message.channel.send(`<@${message.author.id}>`, embed);
            }
        }

     }
    }