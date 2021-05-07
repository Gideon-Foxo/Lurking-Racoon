const Discord = require("discord.js");
const client = new Discord.Client();
const version  = ('2.6');
// Here are all of the const for the config.JSON file.
const config = require("./config.json");
const prefix = config.prefix
const agreeCMD = config.agreeCMD
const grey = config.grey
const botAdmin = config.botAdmin



client.on("ready", () => {
  console.log(`Lurking racoon is online! Version: ${version} prefix: ${prefix}`);
  client.user.setStatus("online"); 
  client.user.setActivity(`lurking in the chats | ${prefix}help | version: ${version }`, { type: "Playing"});
});
 //This is where the bot logs into discord.
client.login(config.token);


//this is the start of the command chain.
client.on("message", (message) => {
  if (message.author.bot) return;
  //This is the ping command.
  if (message.content.startsWith(prefix + "ping")) {
    try { 
      message.channel.send('Loading... <a:Loading2:616371772421439550>').then(sentMessage => sentMessage.edit(`Pong! 🏓 Version: **${version }** \nPing: **${Math.round(client.ping)}**ms | API: **${sentMessage.createdTimestamp - message.createdTimestamp}**ms`));
    } catch (err){
      console.log((err))
      console.log(`ERROR! COMMAND: ${prefix}ping REASON:unknown. Please restart.`);
    }
  }//This is the help command.
  if (message.content.startsWith(prefix + "help")) {
    const helpCMD = new Discord.RichEmbed()
    .setColor(grey)
    .setTitle('My commands')
    .setDescription(`**${prefix}help**\n> Shows you this message.\n**${prefix}about**\n> About this bot.\n**${prefix}poll**\n> Makes a new poll.\n**${prefix}ping**\n> Shows you how fast I respond.\n**${prefix}contributers**\n> Lists all the contributers that made this bot possable.\n**${prefix}invite**\n> Gives an inivte for Fluffy's house.\n**${prefix}download**\n> Gives you a link to down the sickers from our website.\n**${prefix}rule 5**\n> Tells you what rule 5 is.\n**${prefix}website**\n> Gives you a link to Fluffy Houses website.\n**${prefix}servers**\n> Lists all of the server invites.\n**${prefix}dance**\n> <a:YiffDance:634618091099127808>`)
    .setThumbnail('https://cdn.discordapp.com/attachments/588010500093247498/636731056392765440/21.png')
    .setTimestamp()
    .setFooter(`Ping! ${Math.round(client.ping)}`)
    message.channel.send(helpCMD); 
  }//This is the about command
  if (message.content.startsWith(prefix + "about")) {
    message.channel.send(`I am Lurking Raccoon made by Gideon Grey#4325 to lurke the chats in Flyff's house. I was originally made to tell people what not to do but quickly became more then that. You can see all of my usable commands by running the command **${prefix}help.** To see a list of contributers run the command **${prefix}contributers**.`)
  }//This is the website command.
  if (message.content.startsWith(prefix + 'website')) {
  const website = new Discord.RichEmbed()
  .setColor(grey)
  .setTitle('Website')
  .setDescription('[Click here](🦊) to view our website.')
  .setTimestamp()
  .setFooter(`Ping! ${Math.round(client.ping)}`)
message.channel.send(website)
  }
  //this is the ??contributers command.
 if (message.content.startsWith(prefix + 'contributers')) {
   message.channel.send('Here is a list of the contributers for Lurking Racoon.\n**Gideon Grey#4325** Main dev and bot owner.\n**jac.k#9409** Main bot helper.\n**MetsWing#8252** System host.\n**DarkBlackVoid#0001** Other bot helper.\n**Develon#0250** Other bot helper.\n**CalmSault#7601** Github helper.');
  }
  if (message.content.includes('Awoo')) {
    message.channel.send('Awoooooo <:Awoo:593446061171802112>');
  }
  if (message.content.includes(prefix + 'servers')) {
    message.channel.send("Main server: https://discord.gg/🦊\nThe full Fluffy pack: https://discord.gg/🦊\nThe full Racoon pack: https://discord.gg/🦊");
  }
  if (message.content.includes(prefix + 'version')) {
  message.channel.send(verson);
  }
    if (message.content.includes('Lurker')) {
      message.channel.send('I am not lurking the chat :eyes:');
    }// This is the invite. 
 if (message.content.startsWith(prefix + 'invite')) {
   message.channel.send("Here is a perment invite for Fluffy's house: https://discord.gg/🦊 ");
 }//this is the eyes command
   if (message.content === '👁') {
     message.channel.send(':eyes:');
   }// this is the 0w0 command.
  if (message.content.startsWith('0w0')) {
    message.channel.send(Math.random() >=  0.5 ? "◕w◕" : "ʕ •ᴥ•ʔ");
  } //This is the rule 5 command.
    if(message.content.startsWith(prefix + 'rule 5')) {
      message.channel.send('**5 Nothing Not Safe For Work (NSFW)** \nThis is a Safe For Work (SFW) server, nothing NSFW is allowed here. Do not be suggest or lewd here. Do not try to run NSFW bot commands.')
    }//This is the !rank command.
  if (message.content.startsWith('!rank')) {
    message.channel.send(`<@${message.author.id}> To check your rank run the command ` + '`arank`.');
  }//This is the boop command.
  if (message.content.startsWith('boop')) {
    const boop1 = new Discord.RichEmbed()
    .setColor(grey)
    .setImage('https://cdn.discordapp.com/attachments/588002445695778861/628257780331053056/image0.gif')
    const boop2 = new Discord.RichEmbed()
    .setColor(grey)
    .setImage("https://cdn.discordapp.com/attachments/588002445695778861/634620386390179870/image0.gif")

    message.channel.send(Math.random() >=  0.5 ? boop1 : boop2);
  }//This is the XD command.
    if(message.content.startsWith('XD')) {
      message.channel.send('<a:XD:598132137702588416>');
    }//this is the yiffdance command 
    if (message.content.startsWith(prefix + 'dance')) {
      message.channel.send('<a:HappyDance:634618091099127808>');
    }//This is the UwU command
    if(message.content.startsWith('UwU')){ 
      message.channel.send(Math.random() >=  0.5 ? "(´・ω・｀)" : "(◕‿◕✿)");
    }// This is the download command
  if (message.content.startsWith(prefix + 'download')) {
    const download = new Discord.RichEmbed()
    .setColor(grey)
  .setTitle('Download')
  .setDescription('[Click here](🦊) to dowload the Fluffy stickers and [click here](🦊) to download the Racoon stickers.')
  .setTimestamp()
  .setFooter(`Ping! ${Math.round(client.ping)}`)
  message.channel.send(download)
  }
  if (message.content.includes('<@&593122907857748002>')) {
   message.channel.send(`<@${message.author.id}> <:Stop:617034972708077579> Please don't try pinging <@&593122907857748002>. Violation of <#628020735197184021> 6.`);
  }// If you have the role admin STOP.
  if (!message.guild) return;
  if(message.member.roles.has('588024107979898901')) return;
  if(message.content.includes('<@&598932499212795915>')) {
    message.channel.send(`<@${message.author.id}> <:Stop:617034972708077579> Please don't to ping that role. Violation of <#628020735197184021> 6.`)
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
  if (['ARRAY-OF-NSFW-CMDS'].find(banned => message.content.toLowerCase().startsWith(banned))) {
    message.channel.send(`<@${message.author.id}> <:Stop:617034972708077579> Please don't try to run not safe for work (NSFW) bot commands. Violation of <#628020735197184021> 5.`);
    message.delete()
  }
  if (["ARRAY-OF-BAD-WORDS"].find(banned => message.content.toLowerCase().includes(banned))) {
    message.channel.send(`<@${message.author.id}> <:Stop:617034972708077579> Please do not say that word. Violation of <#628020735197184021> 1.`);
    message.delete()
  }})


  //poll command 
client.on("message", (message) => {
  if (message.author.bot) return;
  if (message.content.startsWith(prefix + "poll")) {
		message.react('617059864396431624')
			.then(() => message.react('617059897523306496'))
			.then(() => message.react('🤷'))
			.catch(() => console.error('One of the emojis failed to react.'));
	}
})


// //This is the n word filter.
// client.on("message", (message) => {
//   if (message.author.bot) return;
//   if (!message.guild) return;
//   if (["ARRAY-OF-N-WORDS"'].find(banned => message.content.toLowerCase().split(/\s+/g).indexOf(banned.toLowerCase()) !== -1)) {
//     try {
//       message.author.send("You have been banned from Fluffy's House for using discriminatory terminology. Violation rule of 1. ")
//   } 
//   catch {
//     console.log('testing')
//   }
//     message.member.ban({
//       reason: 'Lurking Raccoon#1622: [AUTOMOD FILTER] Use of discriminatory terminology. Violation rule of 1.',
//     }).then(() => {
//       message.channel.send(`<@${message.author.id}> was banned for for using discriminative terminology, violation of <#628020735197184021> 1.`)
//       message.delete()
//       }).catch(err => {
//         message.channel.send(`<@&588442019400253450> **ERROR, I COULD NOT BAN <@${message.author.id}> FOR** Use of discriminatory terminology. Violation <#628020735197184021> of 1. **PLEASE BAN THIS USER!**`);
//         // Log the error
//         console.error(err);
// })}
// })

//This is the join message log.
client.on('guildMemberAdd', member => {
  if (member.guild.id !== "587991236149772298") return;
  member.guild.channels.get('588013012045266993').send("<:JoinedServer:617119020864372738> **" + member.user.tag + " ** `" + member.user.id + "` has joined Fluffy's House."); 
});


//This is the leave message log.
client.on('guildMemberRemove', member => {
  if (member.guild.id !== "587991236149772298") return;
  member.guild.channels.get('588013012045266993').send("<:LeftServer:617119037314301982> **" + member.user.tag + " ** `" + member.user.id + "` has left Fluffy's House."); 
});


client.on("message", async (message) => { 
  if (!message.guild) return;
  if (message.author.bot) return;
  if (message.content.startsWith(prefix + "die")) {
  if (botAdmin.indexOf(message.author.id) === -1) {
    message.channel.send('You can not run this command.')
  } else { (botAdmin.indexOf(message.author.id) !== -1); 
        console.log(`${message.author.tag} has restarted this bot (exit).`)
        await message.channel.send('Ok, restarting <a:Restarting:617036706692071470>')
        process.exit()
      }}
  }
)

// client.on("message", (message) => {
//   if (!message.guild) return;
//   if (message.author.bot) return;
//   if (botAdmin.indexOf(message.author.id) === -1); { 
//       if(message.content.startsWith(prefix + "stop")){
//         console.log(`${message.author.tag} has stoped the bot (destroy).`)
//         message.channel.send(`Ok 👌 stopping lurking Raccoon **${version}**.`)
//         client.destroy();
//       }
//   }}
// )


//This is the gatekeeper.
client.on("message", (message) => {
  if (!message.guild || message.author.bot) return;
  if(message.member.roles.has('588006287992815639')) return;
  if (message.content.startsWith(agreeCMD)) {
    message.member.addRole('588006287992815639', "Passed the gatekeeper")
    message.guild.channels.get('588013012045266993').send("<:PassedTheGatekeeper:617368477203955713> **" + message.author.tag + " ** `" + message.author.id + "` has passed the gatekeeper.");
   //This is the embed for the gatekeeper.
const Testing = new Discord.RichEmbed()
.setTitle("Welcome to Fluffy's House!")
.setThumbnail(message.author.displayAvatarURL)
.setColor(grey)
.setDescription("**Please** restart your discord client\n> This is ctrl + r on windows <:windows:636725890415329280> This to update your emote list to make sure you get the emotes from this server.\nYou can grab some extra roles in <#628013432930566154>.\nMore information about the server can be found in <#599605054583996423>.\n Our website can be found **[here.](<https://gideon-grey.github.io/Fluffys-house/>)**\nIf you have any questions or need to report something please DM <@576146785509179392>.\nWe hope you enjoy your stay here at Fluffy's House!")
.setFooter(message.author.id);
message.guild.channels.get('588002445695778861').send(`<@&598932499212795915> please welcome <@${message.author.id}> to Fluffy's House!`, Testing);
message.delete() 
}})

client.on("message", (message) => {
  if(message.content.startsWith(prefix + "test")) {
  if (botAdmin.indexOf(message.author.id) === -1) {
    message.channel.send('you are **not** an admin.')
  }
    else if (botAdmin.indexOf(message.author.id) !== -1) {
      message.channel.send('you are an admin.')
  }}
})
