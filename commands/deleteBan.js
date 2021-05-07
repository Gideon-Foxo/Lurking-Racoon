const Discord = require('discord.js');
const config = require("../config.json");
const grey = config.grey
const red = config.red
const print = console.log

module.exports = {

    name: 'deleteban',
    aliases: ['db', 'delban', 'purgeban', 'pb'],
    description: `This command bans a user from the server. This deletes all messages sent by the user in the last 7 days.\n**Usage:** \`${config.prefix}db  @Gideon  💙🧡#4325 Being a bad foxo\``,
    async execute(message, client, args){
        //checks if there is a user to ban (args[0]) or if a user does not have the mod role return an error
        if (!args.length) return message.react('617059897523306496').then(message.channel.send(`<@${message.author.id}> you need to provide someone to ban.`))
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.react('617059897523306496').then(message.channel.send(`<@${message.author.id}> you can not run this command.`))  
         // this removes the <@!> from a mention and brakes it down to just the ID as well as setting the ban reason
        let bUser = (args[0].replace(/^<@!?/, "").replace(/>$/, ""))
        let bReason = `${message.author.tag}: ${args.slice(1).join(" ") || '[no reason was provided]'}`
        const DMreason = args.slice(1).join(" ") || '[no reason was provided]'
    
        if (message.author.id ===  bUser) return message.react('657767505267261440').then(message.channel.send('You can not ban your self 👀')) 
        if(client.user.id === bUser) return message.react('657767505267261440').then(message.channel.send('Sorry, you can not ban me 👀')) 

    const bans = await message.guild.fetchBans();
    const ban = bans.find(b => b.id === bUser);
    const emebd = new Discord.RichEmbed()
    .setColor(red)
    .setTitle('User has already been banned')
    .setDescription(`<@${bUser}> has already been banned from ${message.guild.name}.`)
    .setTimestamp()
    .setFooter(`Ping! ${Math.round(client.ping)}`)
    if (ban) { message.channel.send(emebd)
        
    } else {
        message.react('617059864396431624')
    try {
        try { 
            const user = client.users.get(bUser);
            const embed = new Discord.RichEmbed()
            .setTitle('🔨 You have been banned')
            .setDescription(`You have been banned from ${message.guild.name} for: **${DMreason}**`)
            .setColor(red)
            .setTimestamp()
            .setFooter(`Ping! ${Math.round(client.ping)}`)
           await user.send(embed)
        }
        catch (error) {
            print(error)
            message.channel.send('<:error:658018643329679370> I was not able to send this user a DM.')
        }
        
           await message.guild.ban(bUser, {days: 7, reason: bReason})
           const embed = new Discord.RichEmbed()
           .setColor(config.green)
           .setTitle('🔨 Member has been successfully banned ')
           .setDescription(`<@${bUser}> has been banned for: **${DMreason}**`)
           .setFooter(bUser)
           .setTimestamp()
           await (message.channel.send(embed))
           .catch(console.error);
        }
        catch (error) {
            print(error)
        const embed = new Discord.RichEmbed()
        .setColor(config.red)
        .setTitle('An error has occured')
        .setDescription(`\`\`\`js\n${error}\`\`\``)
        .setTimestamp()
        .setFooter(`Ping! ${Math.round(client.ping)}`)
        message.channel.send(`<@${message.author.id}>`, embed);
        }
        print(bUser)
 
    }
}
}