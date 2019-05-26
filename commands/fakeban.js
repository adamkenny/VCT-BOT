const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

let user;
if (message.mentions.users.size) {
    user = message.mentions.users.first();
}
else if (args.id) {
    user = await client.fetchUser(args.id);
}
if (!user) {
    return client.emit('commandUsage', message, this.help);
}

await message.channel.send({
    embed: {
        //color: #FF0000,
        description: `**${message.author.tag}** has banned **${user.tag}** from this server.`,
    }
});
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 4
};

exports.help = {
    name: 'ban1',
    description: 'Bans a user from the server*. Oh, not really though, just to mess with them.',
    usage: 'ban1 [user]'
};
