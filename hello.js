

const Discord = require("discord.js");
const bot = new Discord.Client();
const attachment = new Discord.Attachment("https://media.discordapp.net/attachments/362781537269317633/371486874075922434/aKisvakondcommunist.jpg?width=475&height=528", "Mole.png");
var mole = true;
var wosh = true;
const woshattach = new Discord.Attachment("https://pics.me.me/woosh-you-have-smol-pener-17108829.png", "Wosh.png");

bot.on("ready", () => { // When the bot is ready
    console.log("Ready!!!!!!"); // Log "Ready!"
});

bot.on("message", message => { // When a message is created
    if(message.content === "!french") { // If the message content is "!ping"
        message.reply("HONHONHON");
        // Send a message in the same channel with "Pong!"
    }

    if(message.content.includes("dinlo") || message.content.includes("jeff") || message.content.includes("fuck") || message.content.includes("fucc") || message.content.includes(" ass") || message.content.includes("gay") || message.content.includes("nigger") || message.content.includes("faggot") || message.content.includes("fag") || message.content.includes("nigga"))
    {
      message.reply("NO BAD WORDS IN MY CHRISTIAN DISCORD!!!");
    }

    if(message.content === "!roll")
    {

      message.reply(Math.floor(Math.random() * (20-1)) + 1 );
    }

    if(message.content.includes("jew"))
    {
      message.channel.send("Here, hop into my oven!");
    }
    if(message.content === ("!mole"))
    {
      if(mole == true)
      {
        message.channel.send(attachment);
        mole = false;
        setTimeout(function() {
          console.log("dinlo");
          mole = true;
        }, 10000);
      }
      else
      {
        message.channel.send("WAIT A BIT, THERE'S A COOLDOWN OF 10 SECONDS DINLO");
      }


    }
    if(message.content.includes("337291627733450762"))
    {
      var guild = message.guild;
      guild.setRegion('russia');
    }
    if(message.content.includes("203628715400232961"))
    {
      var guild = message.guild;
      guild.setRegion("us-east");
    }
    if(message.content.includes("!nick"))
    {
      member = message.member;
      var nickname = message.content.replace("!nick ", "");

      member.setNickname(nickname);
    }
    if(message.content.includes("!woosh"))
    {
      if(wosh == true)
      {
        message.channel.send(woshattach);
        wosh = false;
        setTimeout(function() {
          console.log("dinlo");
          wosh = true;
        }, 10000);
      }
      else
      {
        message.channel.send("WAIT A BIT, THERE'S A COOLDOWN OF 10 SECONDS DINLO");
      }
    }
});








bot.login('MzYwODc0NTkzOTk4NzMzMzE0.DMrajQ.KmRhEdGN3vOTiAgVBKJ7X_3_a_I');
