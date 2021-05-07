const Discord = require('discord.js');
const config = require("../config.json");
const grey = config.grey
const red = config.red
const print = console.log

module.exports = {

    name: 'gatekeeperkick',
    aliases: ['gk', 'gatekick', 'gatekeeper'],
    description: `This command kicks a user from the sever and sends them a messages about why they where kicked.\n**Usage:** \`${config.prefix}gatekick 524371727812263948\``,
    async execute(message, client, args){
        //checks if there is a user to ban (args[0]) or if a user does not have the mod role return an error
        if (!args.length) return message.react('617059897523306496').then(message.channel.send(`<@${message.author.id}> you need to provide someone to kick.`))
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.react('617059897523306496').then(message.channel.send(`<@${message.author.id}> you can not run this command.`))  
         // this removes the <@!> from a mention and brakes it down to just the ID as well as setting the kick reason
        let bUser = (args[0].replace(/^<@!?/, "").replace(/>$/, ""))
        let bReason = `${message.author.tag}: [gatekeeper] Failed to pass.`
        const DMreason = `You have been kicked from ${message.guild.name} for failure to pass the gatekeeper in over 48 hours. You may rejoin ${message.guild.name} by clicking [here](https://discord.gg/XSJhRjK).`
    
        if (message.author.id ===  bUser) return message.react('657767505267261440').then(message.channel.send('You can not kick your self 👀')) 
        if(client.user.id === bUser) return message.react('657767505267261440').then(message.channel.send('Sorry, you can not kick me 👀')) 
        print(bUser)
     if(!message.guild.members.get(bUser)) return message.react('657767505267261440').then(message.channel.send('This user is not in the server, I can not kick them out of a server they are not in.'));

        
    else {
        message.react('617059864396431624')
    try {
        try { 
            const user = client.users.get(bUser);
            const embed = new Discord.RichEmbed()
            .setTitle('👢 You have been kicked')
            .setDescription(DMreason)
            .setColor(config.yellow)
            .setTimestamp()
            .setFooter(`Ping! ${Math.round(client.ping)}`)
           await user.send(embed)
        }
        catch (error) {
            print(error)
            message.channel.send('<:error:658018643329679370> I was not able to send this user a DM.')
        }
        
        
           const embed = new Discord.RichEmbed()
           .setColor(config.green)
           .setTitle('👢 Member has been successfully kicked ')
           .setDescription(`<@${bUser}> has been kicked for ${bReason}`)
           .setFooter(bUser)
           .setTimestamp()
           
           const member = message.guild.member(bUser);
    

           await member.kick(bReason)
           await message.channel.send(embed)
   
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
 
    }
}
}


