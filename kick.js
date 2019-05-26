const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    let member = message.mentions.members.user.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.kickable)
      return message.reply("I cannot kick this user!");
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";

    await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);
};



exports.conf = {
    enabled: false,
    guildOnly: false,
    aliases: [],
    permLevel: 6
  };

  exports.help = {
    name: 'kick',
    description: 'Duh, it will make an egg. Kicks the specified user. (staff only)',
    usage: 'kick [user]'
  };
