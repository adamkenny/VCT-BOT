const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    //!8ball <// question sdasdasd>
    if (!args[2]) return message.reply("Please ask a full question!");
    let replies = ["Yes.", "No.", "I don't know", "Ask again later", "Go away, will you?", "TT Raccoon is bae"];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.join(" ");
    if (question === 'Do you protect gotham?') return message.channel.send('Why ask? I do!')
    if (question === 'Is Ghost bae?') return message.channel.send('Doh, Mist is bae!')

    let ballembed = new Discord.RichEmbed()
        .setThumbnail(`https://i.imgur.com/pdca1VR.png`)
        .setColor("#FF9900")
        .addField("Question", question, true)
        .addField("Answer", replies[result], false)
        .setFooter(message.author.tag);

    message.channel.send(ballembed);
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: '8ball',
    description: 'Ask the bot any yes or no question',
    usage: '8ball [question]'
};
