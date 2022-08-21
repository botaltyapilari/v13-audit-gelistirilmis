const config = require("../../../config.json")
const db = require('quick.db');
const Discord = require("discord.js");
const moment = require("moment");
const limit = new Map();
moment.locale("tr");
module.exports = {
    name: "iliski-secim",
    aliases: ["iliski"],

    execute: async (client, message, args, embed, author, channel, guild) => {
        if (!message.member.permissions.has("ADMINISTRATOR") && !message.member.roles.cache.has(config.BoranGkdn.OwnerRole)) return message.reply({ embeds: [embed.setDescription(`Bu komutu kullanabilmek için öncelikle gerekli yetkin olmalı!`)] }).catch((err) => console.log(err), client.tick(message)).then((e) => setTimeout(() => { e.delete(); }, 10000));
  
      let button1 = new Discord.MessageButton()
          .setStyle('SUCCESS')
          .setEmoji('<:alevlikalp:1005459212152868966>')
          .setLabel('Lovers')
          .setCustomId('lovers')
  
      let button2 = new Discord.MessageButton()
          .setStyle('SUCCESS')
          .setEmoji('<a:kirikkalp:1005459232004522076>')
          .setLabel('Alone')
          .setCustomId('alone')
  
     
  
  
      let row = new Discord.MessageActionRow()
          .addComponents(button1, button2,)
      
    
  
      message.channel.send({ content:`Sunucumuzdaki ilişki rolleri aşağıda verilmiştir, aşağıdaki butonlardan rolünüzü alabilirsiniz.
  
<@&${config.buttons.lovers}>: İlişkiniz var ise <:alevlikalp:1005459212152868966> butonuna basınız.
  
<@&${config.buttons.alone}>: İlişkiniz yok ise <a:kirikkalp:1005459232004522076> butonuna basınız.

NOT : Rolleri Üzerinizden Kaldırmak İstiyorsanız Tekrar Tıklamanız Yeterli. ||@everyone||
  
      `, components: [row]  }) ;
  
  
  
  
    }
}
