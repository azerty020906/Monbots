const Discord = require(discord.js);

var bot = new Discord.client();

bot.on("ready",function() {
    bot.user.setGame("Dev du server,!help");
    console.log("le bot est bien lancé");
});

bot.login("NDIyMDc4ODc4MTMyMjA3NjE2.DYWjHg.mc1DZvBZbTqCrCqFKTrgvNMPQv4");
