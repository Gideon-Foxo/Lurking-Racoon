const Discord = require('discord.js');
const config = require("../config.json");
const grey = config.grey
const red = config.red
const print = console.log

module.exports = {

    name: 'kick',
    aliases: ['k', 'boot', 'yeet', 'begonethot', 'scrap', 'waste', 'shoo', 'out'],
    description: `This command kicks a user.\n**Usage:** \`${config.prefix}yeet  @Gideon  💙🧡#4325 YEET!!\``,
    async execute(message, client, args){
        //checks if there is a user to ban (args[0]) or if a user does not have the mod role return an error
        if (!args.length) return message.react('617059897523306496').then(message.channel.send(`<@${message.author.id}> you need to provide someone to kick.`))
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.react('617059897523306496').then(message.channel.send(`<@${message.author.id}> you can not run this command.`))  
         // this removes the <@!> from a mention and brakes it down to just the ID as well as setting the kick reason
        let bUser = (args[0].replace(/^<@!?/, "").replace(/>$/, ""))
        let bReason = `${message.author.tag}: ${args.slice(1).join(" ") || '[no reason was provided]'}`
        const DMreason = args.slice(1).join(" ") || '[no reason was provided]'
    
        if (message.author.id ===  bUser) return message.react('657767505267261440').then(message.channel.send('You can not kick your self 👀')) 
        if(client.user.id === bUser) return message.react('657767505267261440').then(message.channel.send('Sorry, you can not kick me 👀')) 

     if(!message.guild.members.get(bUser)) return message.react('657767505267261440').then(message.channel.send('This user is not in the server, I can not kick them out of a server they are not in.'));

     else {
        await message.react('617059864396431624')
        try {
            try {
                const user = client.users.get(bUser);
                const embed = new Discord.RichEmbed()
                    .setTitle('👢 You have been kicked')
                    .setDescription(`You have been kicked from ${message.guild.name} for: **${DMreason}**`)
                    .setColor(config.yellow)
                    .setTimestamp()
                    .setFooter(`Ping! ${Math.round(client.ping)}`)
                await user.send(embed)
            } catch (error) {
                print(error)
                message.channel.send('<:error:658018643329679370> I was not able to send this user a DM.')
            }
    
            const member = message.guild.member(bUser);
    
            const embed = new Discord.RichEmbed()
                .setColor(config.green)
                .setTitle('👢 Member has been successfully kicked ')
                .setDescription(`<@${bUser}> has been kicked for: **${DMreason}**`)
                .setFooter(bUser)
                .setTimestamp()
    
            await member.kick(bReason)
            await message.channel.send(embed)
    
        } catch (error) {
            print(error)
            const embed = new Discord.RichEmbed()
                .setColor(config.red)
                .setTitle('An error has occured')
                .setDescription(`\`\`\`js\n${error}\`\`\``)
                .setTimestamp()
                .setFooter(`Ping! ${Math.round(client.ping)}`)
            message.channel.send(`<@${message.author.id}>`, embed);
        }
    }
    }
    }