const Discord = require("discord.js");
const randomPuppy = require('random-puppy');

module.exports.run = async (bot, message, args) => {
  randomPuppy('softwaregore')
        .then(url => {
            const embed = new Discord.RichEmbed()
                .setTitle("ικσετ")
                .setColor("RANDOM")
                .setImage(url);
            message.channel.send({
                embed
            });
        })
}

module.exports.help = {
  name: "softwaregore"
};
