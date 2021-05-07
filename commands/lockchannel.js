const Discord = require('discord.js');
const config = require("../config.json");
const grey = config.grey
const memberLogs = config.memberLogs
const print = console.log

module.exports = {

    name: 'lockchannel',
    aliases: ['lc', 'lock', "c", "lockdown"],
    description: 'This command locks a channel so members can not speak.',
    async execute(message, client, args) {

        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`<@${message.author.id}>, you can not run this command.`);
        else {
            try{

            
            await message.react("🔒")
            await message.channel.overwritePermissions(message.channel.guild.defaultRole, { SEND_MESSAGES: false });
            const embed = new Discord.RichEmbed()
            .setTitle("Channel successfully locked 🔒")
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