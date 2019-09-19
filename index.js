const Discord = require("discord.js");//import discord.js library
const client = new Discord.Client();//get the discord client
const config = require("./config.json");
client.on("ready", () => {
  console.log("bot online")//log in the console that bot is online
})
client.on("message", () =. {
  let prefix = config.prefix;
  if(message.content === `${prefix}ping`){
  message.channel.send("pong");
  }//Your first command
})

client.login(config.token)//go to edit the config.json file
