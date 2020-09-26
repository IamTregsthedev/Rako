const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client()

const prefix = "@";

client.on("message", function(message) {

if (message.author.bot) return;
if (!message.content.startsWith(prefix)) return;

const commandBody = messafe.content.slice(prefrix.length);
const args = commandBody.spilt('');
const command = args.shift().toLowerCase();

                               
  if (command === "ping") {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
  }

 else (command === "about") {
    message.reply(`This Bot is for Rag3 clan to mange it's server, Profiles and Make the Server a Better Place`)
    message.reply(`This Bot was built by @Arav Narula#1673!`)
  }


client.login(config.BOT_TOKEN);

