const Discord = require('discord.js');
const config = require("../config.json");
const grey = config.grey
const memberLogs = config.memberLogs
const print = console.log

module.exports = {

    name: 'lockserver',
    aliases: ['ls', 's'],
    description: 'This command locks down the server so no one can speak.',
    async execute(message, client, args) {
       
        if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`<@${message.author.id}>, you can not run this command.`);
        else {
            try{
                await message.react("🔒")
                await message.guild.defaultRole.setPermissions([]);
                const embed = new Discord.RichEmbed()
            .setTitle("Server successfully locked 🔒")
            .setColor(config.green)
                await message.channel.send(embed)
            
    
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