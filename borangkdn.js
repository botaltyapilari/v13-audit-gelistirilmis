const { Client, Collection, Intents } = require("discord.js");
const { MessageEmbed } = require('discord.js')
const client = global.client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_PRESENCES,
  ]
});
const dotenv = require("dotenv");
dotenv.config();
const { readdir } = require("fs");
require("moment-duration-format");
const config = require("./config");
const commands = client.commands = new Collection();
const aliases = client.aliases = new Collection();
client.cooldown = new Map();
client.commandblocked = [];

require("./src/helpers/function")(client);

readdir("./src/commands/", (err, files) => {
  if (err) console.error(err)
  files.forEach(f => {
    readdir("./src/commands/" + f, (err2, files2) => {
      if (err2) console.log(err2)
      files2.forEach(file => {
        let prop = require(`./src/commands/${f}/` + file);
        console.log(`[BORANGKDN-COMMAND] ${prop.name} yüklendi!`);
        commands.set(prop.name, prop);
        prop.aliases.forEach(alias => {
          aliases.set(alias, prop.name);
        });
      });
    });
  });
});

readdir("./src/events", (err, files) => {
  if (err) return console.error(err);
  files.filter((file) => file.endsWith(".js")).forEach((file) => {
    let prop = require(`./src/events/${file}`);
    if (!prop.conf) return;
    client.on(prop.conf.name, prop);
    console.log(`[BORANGKDN-EVENT] ${prop.conf.name} yüklendi!`);
  });
});

client.login(process.env.token)
  .then(() => console.log(`Bot ${client.user.username} olarak giriş yaptı!`))
  .catch((err) => console.log(`Bot Giriş yapamadı sebep: ${err}`));

  client.on("interactionCreate",async (interaction, message) => {

    if(interaction.isButton()) {

    if(interaction.customId === "cekilis") {
        let member = interaction.member
        if(member.roles.cache.has(config.buttons.çekiliş)) {
          await member.roles.remove(config.buttons.çekiliş);
          await interaction.reply({ content: `<@&${config.buttons.çekiliş}> rolünü üzerinizden başarıyla aldım!`, ephemeral: true });
        } else {
          await member.roles.add(config.buttons.çekiliş);
          await interaction.reply({ content: `<@&${config.buttons.çekiliş}> rolünü üzerinize başarıyla ekledim!`, ephemeral: true });
        };
      };

      if(interaction.customId === "etkinlik") {
        let member = interaction.member
        if(member.roles.cache.has(config.buttons.etkinlik)) {
          await member.roles.remove(config.buttons.etkinlik);
          await interaction.reply({ content: `<@&${config.buttons.etkinlik}> rolünü üzerinizden başarıyla aldım!`, ephemeral: true });
        } else {
          await member.roles.add(config.buttons.etkinlik);
          await interaction.reply({ content: `<@&${config.buttons.etkinlik}> rolünü üzerinize başarıyla ekledim!`, ephemeral: true });
        };
      };

//---lovers rolleri---///

    if(interaction.customId === "lovers") {
        let member = interaction.member
        if(member.roles.cache.has(config.buttons.lovers)) {
          await member.roles.remove(config.buttons.lovers);
          await interaction.reply({ content: `<@&${config.buttons.lovers}> rolü başarıyla üzerinizden aldım.`, ephemeral: true });
        } else {
          await member.roles.add(config.buttons.lovers);
          await interaction.reply({ content: `<@&${config.buttons.lovers}> rolünü üzerinize başarıyla ekledim.`, ephemeral: true });
        };
      };
      
      
      if(interaction.customId === "alone") {
        let member = interaction.member
        if(member.roles.cache.has(config.buttons.alone)) {
          await member.roles.remove(config.buttons.alone);
          await interaction.reply({ content: `<@&${config.buttons.alone}> rolü başarıyla üzerinizden aldım.`, ephemeral: true });
        } else {
          await member.roles.add(config.buttons.alone);
          await interaction.reply({ content: `<@&${config.buttons.alone}> rolünü üzerinize başarıyla ekledim.`, ephemeral: true });
        };
      };

}})

//----------------------------------------------------- TAG-LOG ---------------------------------------------\\

client.on("userUpdate", async function(oldUser, newUser) { 
  const guildID = "1004149614519267388"
  const roleID = "1005227820655595580"
  const tag1 = "jose"
  const tag2 = "Jose"
  const tag3 = "*"
  const tag4 = "¹¹⁰⁰"
  const tag5 = "JOSE"
  const etiket = "1100"
  const chat = "1005227894739574814"
  const taglog = "1005417185646235678"
  
  const guild = client.guilds.cache.get(guildID)
  const role = guild.roles.cache.find(roleInfo => roleInfo.id === roleID)
  const member = guild.members.cache.get(newUser.id)
  const embed = new MessageEmbed().setAuthor(member.displayName, member.user.avatarURL({ dynamic: true }))
  
  if (newUser.username !== oldUser.username) {
  if (oldUser.username.includes(tag1) && !newUser.username.includes(tag1)) { member.roles.remove(roleID)
  client.channels.cache.get(taglog).send({ embeds: [embed.setDescription(`${newUser} Tagımızı Çıkardığı İçin Rol Alındı`)]})} else if (!oldUser.username.includes(tag1) && newUser.username.includes(tag1)) {
  member.roles.add(roleID)
  client.channels.cache.get(chat).send({ content: `${newUser} Tagımızı Alarak Ailemize Katıldı`})
  client.channels.cache.get(taglog).send({ embeds: [embed.setDescription(`${newUser} Tagımızı Aldığı İçin Rol Verildi`)]})}}
  
  if (newUser.username !== oldUser.username) {
  if (oldUser.username.includes(tag2) && !newUser.username.includes(tag2)) { member.roles.remove(roleID)
  client.channels.cache.get(taglog).send({ embeds: [embed.setDescription(`${newUser} Tagımızı Çıkardığı İçin Rol Alındı`)]})} else if (!oldUser.username.includes(tag2) &&   newUser.username.includes(tag2)) {
  member.roles.add(roleID)
  client.channels.cache.get(chat).send({ content: `${newUser} Tagımızı Alarak Ailemize Katıldı`})
  client.channels.cache.get(taglog).send({ embeds: [embed.setDescription(`${newUser} Tagımızı Aldığı İçin Rol Verildi`)]})}}

  if (newUser.username !== oldUser.username) {
  if (oldUser.username.includes(tag3) && !newUser.username.includes(tag3)) { member.roles.remove(roleID)
  client.channels.cache.get(taglog).send({ embeds: [embed.setDescription(`${newUser} Tagımızı Çıkardığı İçin Rol Alındı`)]})} else if (!oldUser.username.includes(tag3) &&   newUser.username.includes(tag3)) {
  member.roles.add(roleID)
  client.channels.cache.get(chat).send({ content: `${newUser} Tagımızı Alarak Ailemize Katıldı`})
  client.channels.cache.get(taglog).send({ embeds: [embed.setDescription(`${newUser} Tagımızı Aldığı İçin Rol Verildi`)]})}}

  if (newUser.username !== oldUser.username) {
  if (oldUser.username.includes(tag4) && !newUser.username.includes(tag4)) { member.roles.remove(roleID)
  client.channels.cache.get(taglog).send({ embeds: [embed.setDescription(`${newUser} Tagımızı Çıkardığı İçin Rol Alındı`)]})} else if (!oldUser.username.includes(tag4) &&   newUser.username.includes(tag4)) {
  member.roles.add(roleID)
  client.channels.cache.get(chat).send({ content: `${newUser} Tagımızı Alarak Ailemize Katıldı`})
  client.channels.cache.get(taglog).send({ embeds: [embed.setDescription(`${newUser} Tagımızı Aldığı İçin Rol Verildi`)]})}}

  if (newUser.username !== oldUser.username) {
  if (oldUser.username.includes(tag5) && !newUser.username.includes(tag5)) { member.roles.remove(roleID)
  client.channels.cache.get(taglog).send({ embeds: [embed.setDescription(`${newUser} Tagımızı Çıkardığı İçin Rol Alındı`)]})} else if (!oldUser.username.includes(tag5) &&   newUser.username.includes(tag5)) {
  member.roles.add(roleID)
  client.channels.cache.get(chat).send({ content: `${newUser} Tagımızı Alarak Ailemize Katıldı`})
  client.channels.cache.get(taglog).send({ embeds: [embed.setDescription(`${newUser} Tagımızı Aldığı İçin Rol Verildi`)]})}}

  if (newUser.discriminator !== oldUser.discriminator) {
  if (oldUser.discriminator == (etiket) && newUser.discriminator !== (etiket)) { member.roles.remove(roleID)
  client.channels.cache.get(taglog).send({ embeds: [embed.setDescription(`${newUser}  Etiketimizi Çıkardığı İçin Rol Alındı`)]})} else if (oldUser.discriminator !== (etiket) && newUser.discriminator == (etiket)) {
  member.roles.add(roleID)
  client.channels.cache.get(taglog).send({ embeds: [embed.setDescription(`${newUser} Etiketimizi Aldığı İçin Rol Verildi`)]})
  client.channels.cache.get(chat).send({ content: `${newUser} Tagımızı Alarak Ailemize Katıldı`})}}})







  