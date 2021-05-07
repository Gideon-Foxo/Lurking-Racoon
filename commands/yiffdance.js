const Discord = require('discord.js');
const config = require("../config.json");
const grey = config.grey
const memberLogs = config.memberLogs
const print = console.log

module.exports = {

    name: 'dance',
    aliases: ['yiffdance'],
    description: '<a:YiffDance:634618091099127808>',
    execute(message) {
        message.channel.send('<a:YiffDance:634618091099127808>')

     }
    }