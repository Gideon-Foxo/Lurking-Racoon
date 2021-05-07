const config = require("../config.json");
const version = config.version


module.exports = {
    name: 'ping',
    description: 'This tells you how fast the bot takes to respond to this command.',
    execute: (message, client) => {
        message.channel.send('Loading... <a:Loading2:616371772421439550>').then(sentMessage => sentMessage.edit(`Pong! 🏓 Version: **${version}** \nPing: **${Math.round(client.ping)}**ms | API: **${sentMessage.createdTimestamp - message.createdTimestamp}**ms`));
    },
};


