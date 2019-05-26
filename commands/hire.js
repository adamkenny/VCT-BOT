const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {


  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!rMember) return message.reply("Please mention a valid user of this server");

  let main_role = message.guild.roles.find(role => role.name === '--Worker--');
  let worker_role = message.guild.roles.find(role => role.name === 'Worker');
  let start_percentage = message.guild.roles.find(role => role.name === '85% voucher');

    if (rMember.roles.has(main_role.id)) return message.reply(`<@${rMember.id}> is already a worker.`);
    if (rMember.roles.has(worker_role.id)) return message.reply(`<@${rMember.id}> is already a worker.`);
    if (rMember.roles.has(start_percentage.id)) return message.reply(`<@${rMember.id}> is already a worker.`);
    await (rMember.addRole(worker_role.id));
    await (rMember.addRole(start_percentage.id));
    await (rMember.addRole(main_role.id));
    try {
      await  message.channel.send(`Gave <@${rMember.id}> the worker role.`);
    } catch(e) {
      message.channel.send("An error has occured.");
    }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 6,
};

exports.help = {
    name: 'hire',
    description: 'Adds the worker rank to a user!',
    usage: 'hire [user]'
};
