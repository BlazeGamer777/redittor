const Discord = require("discord.js");
const randomPuppy = require('random-puppy');

module.exports.run = async (bot, message, args) => {
  randomPuppy('deepfriedmemes')
        .then(url => {
            const embed = new Discord.RichEmbed()
                .setTitle("Fried memes taste better then raw memes.")
                .setColor("RANDOM")
                .setImage(url);
            message.channel.send({
                embed
            });
        })
}

module.exports.help = {
  name: "deepfriedmemes"
};
