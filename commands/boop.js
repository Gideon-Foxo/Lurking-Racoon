const Discord = require('discord.js');
const config = require("../config.json");
const grey = config.grey
const memberLogs = config.memberLogs
const print = console.log

module.exports = {

    name: 'boop',
    aliases: ['boops'],
    description: 'This command boops someone else',
    args: true,
    execute(message, client, args) {
        var possiblegifs = [ "https://media.tenor.com/images/7daa05171e41b86ce216ead73085cea8/tenor.gif", "https://media.tenor.com/images/4139a6b73f1b60c748e1afabf067dc7e/tenor.gif", "https://media.tenor.com/images/cf0dd3a9748b9a7a8f4dd116c12b9d56/tenor.gif", "https://media.tenor.com/images/6ed5c4a69b77b37171fce5b092be124d/tenor.gif", "https://cdn.discordapp.com/attachments/588002445695778861/634620386390179870/image0.gif", "https://media.tenor.com/images/f8fda53465d3e5017e58ed8d6c11277f/tenor.gif", "https://media.tenor.com/images/aa41ce7ea8f138eb8e0be635cd4664d9/tenor.gif", "https://media.tenor.com/images/c81d7dd5bd4689e7e0c15285843fc1ab/tenor.gif", "https://media.tenor.com/images/3f364e971453b18a1ae2b5cc8d2d0613/tenor.gif"  ]

        var rando = Math.floor(Math.random() * possiblegifs.length)
        const boop = new Discord.RichEmbed()
            .setColor(grey)
            .setImage(possiblegifs[rando])
    if (args[0] === "@everyone") return message.channel.send("Do not try to do this!"); 
    if (args[0] === "@here") return message.channel.send("Do not try to do this!");
        message.channel.send(`${message.author.tag} has booped ${args.join(" ")}!`, boop);
    }
}