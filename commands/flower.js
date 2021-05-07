const Discord = require('discord.js');
const config = require("../config.json");
const grey = config.grey
const memberLogs = config.memberLogs
const print = console.log

module.exports = {

    name: 'flower',
    aliases: ['spinningflower'],
    description: '<a:spinningflower:675140414570889217>',
    execute(message) {
        message.channel.send('<a:spinningflower:675140414570889217>')

     }
    }