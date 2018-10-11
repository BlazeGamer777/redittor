const Discord = require("discord.js");
const randomPuppy = require('random-puppy');

module.exports.run = async (bot, message, args) => {
  randomPuppy('dankmemes')
        .then(url => {
            const embed = new Discord.RichEmbed()
                .setTitle("Daaaaaank")
                .setColor("RANDOM")
                .setImage(url);
            message.channel.send({
                embed
            });
        })
}

module.exports.help = {
  name: "dankmemes"
};
