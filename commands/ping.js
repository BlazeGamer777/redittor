const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  return message.channel.send("Bongerino!");
}

module.exports.help = {
  name: "ping"
};
