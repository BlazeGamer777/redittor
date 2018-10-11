const Discord = require("discord.js");
const randomPuppy = require('random-puppy');

module.exports.run = async (bot, message, args) => {
  randomPuppy('wholesomememes')
        .then(url => {
            const embed = new Discord.RichEmbed()
                .setTitle("The most wholesome memes out there.")
                .setColor("RANDOM")
                .setImage(url);
            message.channel.send({
                embed
            });
        })
}

module.exports.help = {
  name: "wholesomememes"
};
