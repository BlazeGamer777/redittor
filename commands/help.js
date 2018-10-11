const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let helpaEmbed = new Discord.RichEmbed()
  .setTitle("Animals:")
  .setColor(`#ff4500`)
  .setDescription(`r/aww - Adorable things! <3
r/puppy - Classic puppers.`);
  
  let helpmEmbed = new Discord.RichEmbed()
  .setTitle("Memes:")
  .setColor(`#ff4500`)
  .setDescription(`r/memes - The classic brand.
r/dankmemes - The dankest there is.
r/deepfriedmemes - Fried memes. Thats all.
r/wholesomememes - Need some wholesome memes?`);

  let helpmiscEmbed = new Discord.RichEmbed()
  .setTitle("Misc:")
  .setColor(`#ff4500`)
  .setDescription("Want to submit a subreddit? Join our support server! https://discord.gg/nmbWSgM");

  message.channel.send(helpaEmbed);
  message.channel.send(helpmEmbed);
  message.channel.send(helpmiscEmbed);
}

module.exports.help = {
  name: "help"
};
