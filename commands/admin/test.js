const {
  Client,
  MessageEmbed,
  MessageActionRow,
  MessageButton,
  displayAvatarURL,
  Presence,
  User,
} = require("discord.js");

module.exports = {
  name: "test",
  aliases: [],
  description: "el comando de help",
  category: "basic",
  usage: "help",
  cooldown: 4,
  onlyGuild: true,
  Nsfw: false,
  onlyDev: false,
  repiar: false,
  run: async (client, msg, args, p, json) => {
    let row = new MessageActionRow().addComponents(
      new MessageButton()
        .setLabel("VERFICATE")
        .setStyle("SUCCESS")
        .setCustomId("verf")
        .setEmoji(`✅`)
    );
    const embedBienvenidas = new MessageEmbed()
      .setAuthor(msg.guild.name, msg.guild.iconURL())
      .setDescription(
        `<@!332223388833677322> Bienvenid@ a ${msg.guild.name}, esto es un servidor de **RP de Unturned**, Puedes invitar a tu amigos y puedes ganar recompesas, y ve las reglas para no ser sancionado proxomamente, \n ve a <#830536631072850001> para ver mas canales`
      )
      .setColor("RED");
    msg.channel.send({ embeds: [embedBienvenidas] });
  },
};
//https://cdn.discordapp.com/icons/806572632844533771/cc18d51c17dda8a9bf52e48b9c52a999.png?size=4096
