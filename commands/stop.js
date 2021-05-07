const Discord = require('discord.js');
const config = require("../config.json");
const grey = config.grey
const memberLogs = config.memberLogs
const print = console.log
const botAdmin = config.botAdmin
module.exports = {

    name: 'stop',
    aliases: ['shutdown'],
    description: 'This command shutsdown the bot [bot admin only]',
    async execute(message, client, args) {
        if (!message.guild) return;
        if (message.author.bot) return;
        else {
        if (botAdmin.indexOf(message.author.id) === -1) {
          message.channel.send('You can not run this command.')
        } else { (botAdmin.indexOf(message.author.id) !== -1); 
              console.log(`${message.author.tag} has restarted this bot (exit).`)
              await message.channel.send(`Ok 👌 stopping lurking Raccoon **${config.version}**.`)
              client.destroy();
            }}




     }
    }