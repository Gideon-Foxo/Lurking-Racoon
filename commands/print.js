const Discord = require('discord.js');
const config = require("../config.json");
const grey = config.grey
const memberLogs = config.memberLogs
const print = console.log

module.exports = {

    name: 'print',
    aliases: ['log'],
    description: 'This cmd prints something to the console',
    args: true,
    async execute(message, client, args) {
await print(args.join(" "))
await message.react('617059864396431624')
     }
    }