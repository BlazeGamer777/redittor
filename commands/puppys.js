const Discord = require("discord.js");
const randomPuppy = require('random-puppy');

module.exports.run = async (bot, message, args) => {
  randomPuppy('puppy')
        .then(url => {
            const embed = new Discord.RichEmbed()
                .setTitle("Much wow.")
                .setColor("RANDOM")
                .setImage(url);
            message.channel.send({
                embed
            });
        })
}

module.exports.help = {
  name: "puppy"
};
