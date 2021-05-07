const Discord = require('discord.js');
const config = require("../config.json");
const grey = config.grey
const memberLogs = config.memberLogs
const print = console.log

module.exports = {

    name: 'website',
    description: 'This is gives you a link to the server website.',
    execute(message, client) {
       
   const embed = new Discord.RichEmbed()
  .setColor(grey)
  .setTitle('Website')
  .setDescription('[Click here](https://gideon-grey.github.io/Fluffys-house/) to view our website.')
  .setTimestamp()
  .setFooter(`Ping! ${Math.round(client.ping)}`)

  message.channel.send(embed)

     }
    }