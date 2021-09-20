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
      .setTitle(`New Life Roleplay`)
      /* .setThumbnail(
        `https://cdn.discordapp.com/icons/806572632844533771/cc18d51c17dda8a9bf52e48b9c52a999.png?size=4096`
      )*/
      .setDescription(`**PARA VERIFICARTE PULSA EL BOTON**`)
      .setColor("YELLOW")
      .setImage(
        "https://media.discordapp.net/attachments/739190746682490991/739197824524091524/BARRA.gif"
      );
    msg.channel.send({ embeds: [embedBienvenidas], components: [row] });
  },
};
//https://cdn.discordapp.com/icons/806572632844533771/cc18d51c17dda8a9bf52e48b9c52a999.png?size=4096
