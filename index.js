const Discord = require("discord-bmaker");//import discord.js library

var bot = new Bot({
    token: "NjI3MzcwNzkzMzY5NjAwMDEx.XY7qmw.spSi7JsNzcZAGuNm8OLTZCs2_cM"
});

bot
    .on(bot.triggers.command, 'hello')
    .do(function(bot, conf, args) {
        this.reply('world');
    });
 
bot.connect();
