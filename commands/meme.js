const Discord = require("discord.js");
const randomPuppy = require('random-puppy');

module.exports.run = async (bot, message, args) => {
  randomPuppy('memes')
        .then(url => {
            const embed = new Discord.RichEmbed()
                .setTitle("The gud stuff.")
                .setColor("RANDOM")
                .setImage(url);
            message.channel.send({
                embed
            });
        })
}

module.exports.help = {
  name: "memes"
};
