const Discord = require('discord.js');
const config = require("../config.json");
const grey = config.grey
const memberLogs = config.memberLogs
const print = console.log

module.exports = {

    name: 'servers',
    description: 'This lists all of the servers related to Fluffy\s House.',
    execute(message, client, args) {
        message.channel.send("Main server: https://discord.gg/XSJhRjK\nThe full Fluffy pack: https://discord.gg/fJP7etG\nThe full Racoon pack: https://discord.gg/SYkAheP");

     }
    }