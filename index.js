const fs = require('fs');
const Discord = require('discord.js');
const config = require("./config.json");
const cooldowns = new Discord.Collection();
const grey = config.grey
const version = config.version
const prefix = config.prefix
const token = config.token
const red = config.red
const memberLogs = config.memberLogs

const client = new Discord.Client(
  {
      fetchAllMembers: true
  }
)
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}


client.filters = new Discord.Collection();

const filterFiles = fs.readdirSync('./filters').filter(file => file.endsWith('.js'));

for (const file of filterFiles) {
	const filter = require(`./filters/${file}`);
	client.commands.set(filter.name, command);
}





client.on("ready", () => {
    console.log('I am wake.')
    client.user.setActivity(`the chat 👀 | ${prefix}help | version: ${version}`, { type: "WATCHING"})
})

client.on('message', async message => {
    //if user is a bot or a message is not sent in a server STOP
    if (message.author.bot || !message.guild) return;
    //if message start with the prefix do this stamnet
    if(message.content.startsWith(prefix)){

        const args = message.content.slice(prefix.length).split(/ +/);
        if (args[0] == prefix) return;
        const commandName = args.shift().toLowerCase();

        const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
        if (!command) return;
            if (command.args && !args.length) {
                const embed = new Discord.RichEmbed()
                .setColor(red)
                .setTitle('An error occured')
                .setDescription(`To use this command you need to provide an argument \`${prefix}command argumnet(s)\`.`)
                .setTimestamp()
            .setFooter(`Ping! ${Math.round(client.ping)}`)

                return message.react('617059897523306496').then(message.channel.send(message.author, embed));
                };

        try {
            command.execute(message, client, args);
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
    } else {
      if (message.content.includes('Lurker')) {
        message.channel.send('I am not lurking the chat :eyes:');
      } if (message.content.startsWith('0w0')) {
        message.channel.send(Math.random() >=  0.5 ? "◕w◕" : "ʕ •ᴥ•ʔ");
      } if (message.content.startsWith('!rank')) {
        message.channel.send(`<@${message.author.id}> To check your rank run the command ` + '`arank`.');
      } //This is the XD command.
        if(message.content.startsWith('XD')) {
          message.channel.send('<a:XD:598132137702588416>');
        } if (message.content.startsWith("Pls rich")) {
          message.channel.send(`<@${message.author.id}> This bot is not here nor __will it ever be__.`);
         } if (message.content.startsWith("pls rich")) {
            message.channel.send(`<@${message.author.id}> This bot is not here nor __will it ever be__.`);
        } if(message.content.startsWith('UwU')){ 
          message.channel.send(Math.random() >=  0.5 ? "(´・ω・｀)" : "(◕‿◕✿)");
        } if (message.content === ('<#599605054583996423>')) {
          message.channel.send('<a:Right:660332100850810910><#599605054583996423><a:Left:660332238017134624>')
          message.delete()
        } if (message.content.startsWith('Awoo')) {
          message.channel.send("<:Awoo:593446061171802112> Awooooo")
        } 
        if(message.content.includes('<@&593122907857748002>')) {
          message.channel.send(`<@${message.author.id}> <:Stop:617034972708077579> Please don't try pinging <@&593122907857748002>. Violation of <#628020735197184021> 6.`)
          message.delete()
        }
          if(message.content.includes('<@&607886060059361310>')) {
            message.channel.send(`<@${message.author.id}> <:Stop:617034972708077579> Please don't to ping that role. Violation of <#628020735197184021> 6.`)
            message.delete()
          }
          if (message.content.includes('<@&593127354164051982>')) {
            message.channel.send(`<@${message.author.id}> <:Stop:617034972708077579> Please don't try pinging <@&593127354164051982>. Violation of <#628020735197184021> 6.`);
            message.delete()
          }
          if (['ARRAY-OF-NSFW-COMMANDS'].find(banned => message.content.toLowerCase().startsWith(banned))) {
            message.channel.send(`<@${message.author.id}> <:Stop:617034972708077579> Please don't try to run not safe for work (NSFW) bot commands. Violation of <#628020735197184021> 5.`);
            message.delete()
          }
          if (['ARRAY-OF-BAD-WORDS'].find(banned => message.content.toLowerCase().includes(banned))) {
            message.channel.send(`<@${message.author.id}> <:Stop:617034972708077579> Please do not say that word. Violation of <#628020735197184021> 1.`);
            message.delete()
          } if (["ARRAY-OF-N-WORDS"].find(banned => message.content.toLowerCase().split(/\s+/g).indexOf(banned.toLowerCase()) !== -1)) {
            try {
                const embed = new Discord.RichEmbed()
                .setTitle('🔨 You have been banned')
                .setDescription("You have been banned from Fluffy's House for using discriminatory terminology. Violation rule of 1. ")
                .setColor(red)
                .setTimestamp()
                .setFooter(`Ping! ${Math.round(client.ping)}`)
                message.author.send(embed);
            } catch (error) {
                console.log(error);
            }
            message.member.ban({
                reason: 'Lurking Raccoon#1622: [AUTOMOD FILTER] Use of discriminatory terminology. Violation of rule 1.'
            }).then(() => {
                const embed = new Discord.RichEmbed()
                .setColor(red)
                .setTitle('🔨 Member has been successfully banned [AutoMod]')
                .setDescription(`<@${message.author.id}> was banned for for using discriminative terminology, violation of <#628020735197184021> 1.`)
                .setFooter(message.author.id)
                .setTimestamp()
                message.channel.send(embed);
                message.delete();
            }).catch(err => {
                message.channel.send(`<@&588442019400253450> **ERROR, I COULD NOT BAN <@${message.author.id}> FOR** Use of discriminatory terminology. Violation <#628020735197184021> of 1. **PLEASE BAN THIS USER!**`);
                // Log the error
                console.error(err);
            });
        }
}});




client.on('guildMemberAdd', member => {
    if (member.guild.id !== "587991236149772298") return;
    function timeConverter(UNIX_timestamp){
        var a = new Date(UNIX_timestamp);
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        if(min < 10){
          min = "0" + min
        }
        var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min;
        return time;
      }
      
    const embed = new Discord.RichEmbed()
    .setColor(grey)
    .setTitle('<:JoinedServer:617119020864372738> New member ')
    .setDescription(`<@${member.id}> \`${member.user.tag}\` has joined ${member.guild.name}. There are now **${member.guild.memberCount}** members. This account was created at \`${timeConverter(member.user.createdTimestamp)}\`.`)
    .setThumbnail(member.user.avatarURL)
    .setFooter(member.id)



member.guild.channels.get(memberLogs).send(embed)
})

client.on('guildMemberRemove', member => {
    if (member.guild.id !== "587991236149772298") return;
    const embed = new Discord.RichEmbed()
    .setColor(grey)
    .setTitle('<:LeftServer:617119037314301982> Member left')
    .setDescription(`<@${member.id}> \`${member.user.tag}\` has left ${member.guild.name}. There are now **${member.guild.memberCount}** members.`)
    .setThumbnail(member.user.avatarURL)
    .setFooter(member.id)

    member.guild.channels.get(memberLogs).send(embed)
})

const clean = text => {
    if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
  }

  client.on("message", message => {
    const args = message.content.split(" ").slice(1);
   
    if (message.content.startsWith(prefix + "eval")) {
      if(message.author.id !== '524371727812263948') return message.channel.send('You can not use this command!')
      try {
        const code = args.join(" ");
        let evaled = eval(code);
   
        if (typeof evaled !== "string")
          evaled = require("util").inspect(evaled);
   
        message.channel.send(clean(evaled), {code:"xl"});
      } catch (err) {
        message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
      }
    }
  });



  client.on("messageReactionAdd", async (reaction, user)  => {
    try {
      if (message.channel.id === config.verification) {
        if(reaction.emoji === "") {
          console.log("It worked!!!")
        }
      }
      
    } catch (errpr) {
      console.log(error)
    }


  })

client.login(token);
