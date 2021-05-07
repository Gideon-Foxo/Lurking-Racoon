const Discord = require('discord.js');
const config = require("../config.json");
const grey = config.grey
const memberLogs = config.memberLogs
const print = console.log
const botAdmin = config.botAdmin
module.exports = {

    name: 'die',
    aliases: ['restart'],
    description: 'This command restarts the bot [bot admin only]',
    async execute(message, client, args) {
        if (!message.guild) return;
        if (message.author.bot) return;
        else {
        if (botAdmin.indexOf(message.author.id) === -1) {
          message.channel.send('You can not run this command.')
        } else { (botAdmin.indexOf(message.author.id) !== -1); 
              console.log(`${message.author.tag} has restarted this bot (exit).`)
              await message.channel.send('Ok, restarting <a:Restarting:617036706692071470>')
              process.exit()
            }}




     }
    }