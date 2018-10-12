const Discord = require("discord.js");
const randomPuppy = require('random-puppy');

module.exports.run = async (bot, message, args) => {
  randomPuppy('greentext')
        .then(url => {
            const embed = new Discord.RichEmbed()
                .setTitle(">Here's one")
                .setColor("RANDOM")
                .setImage(url);
            message.channel.send({
                embed
            });
        })
}

module.exports.help = {
  name: "greentext"
};
