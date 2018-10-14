const Discord = require("discord.js");
const randomPuppy = require('random-puppy');

module.exports.run = async (bot, message, args) => {
  randomPuppy('catmemes')
        .then(url => {
            const embed = new Discord.RichEmbed()
                .setTitle("Meow :3")
                .setColor("RANDOM")
                .setImage(url);
            message.channel.send({
                embed
            });
        })
}

module.exports.help = {
  name: "catmemes"
};
