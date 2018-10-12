const Discord = require("discord.js");
const randomPuppy = require('random-puppy');

module.exports.run = async (bot, message, args) => {
  if (!message.channel.nsfw) return message.channel.send("This is not an nsfw channel! Nice try! ;)");

  randomPuppy('NintendoWaifus')
        .then(url => {
            const embed = new Discord.RichEmbed()
                .setTitle("Dem waifus tho.")
                .setColor("RANDOM")
                .setImage(url);
            message.channel.send({
                embed
            });
        })
}

module.exports.help = {
  name: "nintendowaifus"
};
