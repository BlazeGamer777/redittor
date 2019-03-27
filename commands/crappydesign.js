const Discord = require("discord.js");
const randomPuppy = require('random-puppy');

module.exports.run = async (bot, message, args) => {
  randomPuppy('crappydesign')
        .then(url => {
            const embed = new Discord.RichEmbed()
                .setTitle("Just why...")
                .setColor("RANDOM")
                .setImage(url);
            message.channel.send({
                embed
            });
        })
}

module.exports.help = {
  name: "crappydesign"
};
