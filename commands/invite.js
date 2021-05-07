const Discord = require('discord.js');
const config = require("../config.json");
const grey = config.grey
const memberLogs = config.memberLogs
const print = console.log

module.exports = {

    name: 'invite',
    aliases: ['in'],
    description: 'This is cmd sends an invite for the server.',
    execute(message) {
message.channel.send('Here is a perment invite for Fluffy\'s house: https://discord.gg/XSJhRjK')
     }
    }