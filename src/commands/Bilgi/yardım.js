const moment = require("moment");
require("moment-duration-format");
const config = require("../../../config.json")

module.exports = {
    name: "yardım",
    aliases: ["y", "help"],

    execute: async (client, message, args, embed, author, channel, guild) => {
        message.reply({ embeds: [embed.setDescription(`
\`${config.bot.prefix}avatar [@Etiket/ID]
${config.bot.prefix}ban-sorgu [@Etiket/ID]
${config.bot.prefix}ceza-bilgi (#Ceza/ID)
${config.bot.prefix}cihaz-bilgi (#Ceza/ID)
${config.bot.prefix}isimler [@Etiket/ID]
${config.bot.prefix}kullanıcı-bilgi [@Etiket/ID]
${config.bot.prefix}nerede [@Etiket/ID]
${config.bot.prefix}rol-log [@Etiket/ID]
${config.bot.prefix}rol ver/al [@Rol/Rol ID] [@Kullanıcı/ID]
${config.bot.prefix}rol-sorgu [@Rol/Rol ID]
${config.bot.prefix}çek [@Etiket/ID]
${config.bot.prefix}profil [@Etiket/ID]
${config.bot.prefix}say
${config.bot.prefix}sesli
${config.bot.prefix}sicil [@Etiket/ID]
${config.bot.prefix}snipe
${config.bot.prefix}sunucu-bilgi
${config.bot.prefix}yetkili-bilgi
${config.bot.prefix}warns [@Etiket/ID]
${config.bot.prefix}afk (sebep)
${config.bot.prefix}booster (isim)
${config.bot.prefix}çek [@Etiket/ID]
${config.bot.prefix}kayıtsız-etiketle
${config.bot.prefix}ping
${config.bot.prefix}sil (sayı)
${config.bot.prefix}isim [@Etiket/ID] (isim-yaş)
${config.bot.prefix}ban [@Etiket/ID] (sebep)
${config.bot.prefix}chat-mute [@Etiket/ID] (sebep)
${config.bot.prefix}voice-mute [@Etiket/ID] (sebep)
${config.bot.prefix}jail [@Etiket/ID] (sebep)
${config.bot.prefix}reklam [@Etiket/ID] 
${config.bot.prefix}warn [@Etiket/ID] (sebep)
${config.bot.prefix}unban [@Etiket/ID]
${config.bot.prefix}unjail [@Etiket/ID]
${config.bot.prefix}unmute [@Etiket/ID]
${config.bot.prefix}unvmute [@Etiket/ID]
${config.bot.prefix}cezapuan-sıfırla [@Etiket/ID]
${config.bot.prefix}sicil-sıfırla [@Etiket/ID]
${config.bot.prefix}müzisyen [@Etiket/ID]
${config.bot.prefix}rol (ver/al) [@@Etiket/ID] [@Rol/ID]
${config.bot.prefix}sponsor [@Etiket/ID]
${config.bot.prefix}vip [@Etiket/ID]
${config.bot.prefix}yetki-çek [@Etiket/ID]
${config.bot.prefix}yetkili-yap [@Etiket/ID]
${config.bot.prefix}eval (kod)
${config.bot.prefix}kilit (kapat/aç)
${config.bot.prefix}rolsüz (ver)
${config.bot.prefix}tag-tara
${config.bot.prefix}yetkili-say\`
`)] }).catch((err) => console.log(err), client.ytick(message)).then((e) => setTimeout(() => { e.delete(); }, 20000));

    }
}
