const config = require("../config.json");
const version = config.version
const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
    name: 'setlevel',
    //aliases: ['testing', 'aaaaaaaa'],
    description: 'sets the moderation level of the server (0-4)',
    args: true,
   async execute(message, client, args) {
        if(!message.member.roles.has(config.admin)) {
          message.channel.send('You can not use this command!')
      } else 
      try { 
        {
          await message.guild.setVerificationLevel(args);
        await (message.channel.send(`You have set the servers moderation level to **${message.guild.verificationLevel}**.`));
  } } catch (error) {
      console.error(error);
      const embed = new Discord.RichEmbed()
      .setColor(red)
      .setTitle('An error has occured')
      .setDescription(`\`\`\`js\n${error}\`\`\``)
      .setTimestamp()
      .setFooter(`Ping! ${Math.round(client.ping)}`)
      message.channel.send(`<@${message.author.id}>`, embed);
  }
}
}