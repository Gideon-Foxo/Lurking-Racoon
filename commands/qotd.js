const Discord = require('discord.js');
const config = require("../config.json");
const grey = config.grey
const memberLogs = config.memberLogs
const print = console.log

module.exports = {

    name: 'send',
    aliases: ['qotd'],
    description: 'This command sends a question of the day message',
    args: true,
    async execute(message, client, args) {
if(!message.member.roles.has('587995660540837899')) return  message.react('617059897523306496').then(message.channel.send('You can not run this command.'));
    try {
    const embed = new Discord.RichEmbed()
    .setColor(grey)
    .setTitle('Question of the day')
    .setDescription(args.slice(0).join(" "))

    await message.react('617059864396431624')
    await message.guild.roles.find(role => role.id == config.qotd).setMentionable(true, `${message.member.tag} has sent a qotd.`)
    await (message.guild.channels.get('657329731699736606').send(`<@&${config.qotd}>`, embed))
    await message.guild.roles.find(role => role.id == config.qotd).setMentionable(false, `${message.member.tag} has sent a qotd.`)
    await message.channel.send('message has been sent!') 
    } catch (error) {
        console.error(error);
        const embed = new Discord.RichEmbed()
        .setColor(red)
        .setTitle('An error has occured')
        .setDescription(`\`\`\`js\n${error}\`\`\``)
        .setTimestamp()
        .setFooter(`Ping! ${Math.round(client.ping)}`)
        message.channel.send(`<@${message.author.id}>`, embed); 
    }



     }}