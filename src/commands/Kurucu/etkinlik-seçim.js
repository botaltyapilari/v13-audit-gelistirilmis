const config = require("../../../config.json")
const db = require('quick.db');
const Discord = require("discord.js");
const moment = require("moment");
const limit = new Map();
moment.locale("tr");
module.exports = {
    name: "etkinlik-seçim",
    aliases: ["etkinlik"],

    execute: async (client, message, args, embed, author, channel, guild) => {
        if (!message.member.permissions.has("ADMINISTRATOR") && !message.member.roles.cache.has(config.BoranGkdn.OwnerRole)) return message.reply({ embeds: [embed.setDescription(`Bu komutu kullanabilmek için öncelikle gerekli yetkin olmalı!`)] }).catch((err) => console.log(err), client.tick(message)).then((e) => setTimeout(() => { e.delete(); }, 10000));
  
      let button1 = new Discord.MessageButton()
          .setStyle('SUCCESS')
          .setEmoji('<a:aden_cekilis:1005454198139256913>')
          .setLabel('Çekiliş Katılımcısı')
          .setCustomId('cekilis')
  
      let button2 = new Discord.MessageButton()
          .setStyle('SUCCESS')
          .setEmoji('<a:aden_bildirim:1005454194431504454>')
          .setLabel('Etkinlik Katılımcısı')
          .setCustomId('etkinlik')
  
     
  
  
      let row = new Discord.MessageActionRow()
          .addComponents(button1, button2)
      
    
  
      message.channel.send({ content:`Selamlar,
  
Aşağıda bulunan butonlardan **Çekiliş Katılımcısı** alarak <:jose_netflix:1005454751938388034>,<:jose_spotify:1005454766157082714>,<a:jose_nitro:1005454757076418600> **ve benzeri** çekilişlere katılıp ödül sahibi olabilirsiniz.
  
Aşağıda bulunan butonlardan **Etinkinlik Katılımcısı** alarak **konserlerimizden, etkinliklerimizden** haberdar olabilirsiniz.

Rolleri üzerinizden kaldırmak isterseniz tekrar tıklamanız yeterli olacaktır.

__**NOT:**__ **Kayıtlı , kayıtsız olarak hepiniz bu kanalı görebilmektesiniz. Bu sunucumuzda everyone/here atılmayacağından dolayı kesinlikle rollerinizi almayı unutmayın.**
  
      `, components: [row]  }) ;
  
  
  
  
    }
}

