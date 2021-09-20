const {
  Client,
  MessageEmbed,
  MessageActionRow,
  MessageButton,
  Presence,
  User,
} = require("discord.js");

module.exports = {
  name: "ticket",
  aliases: [],
  description: "ticket",
  category: "admin",
  usage: "ticket",
  botPermissions: ["SEND_MESSAGES", "VIEW_CHANNEL", "BAN_MEMBERS"],
  userPermissions: ["BAN_MEMBERS"],
  cooldown: 5,
  run: async (client, msg, args) => {
    if (!msg.member.permissions.has("ADMINISTRATOR"))
      return msg.channel.send("No tienes los permisos necesarios");

    if (!msg.mentions.channels.first())
      return msg.channel.send("Coloca el canal que quieres para los tickets");
    let row = new MessageActionRow().addComponents(
      new MessageButton()
        .setCustomId("anti")
        .setLabel("AntiRol")
        .setStyle("DANGER"),
      new MessageButton()
        .setCustomId("shop")
        .setLabel("Tienda")
        .setStyle("SUCCESS"),
      new MessageButton()
        .setCustomId("sugets")
        .setLabel("Sugerencia")
        .setStyle("SECONDARY"),
      new MessageButton()
        .setCustomId("ayu")
        .setLabel("Ayuda")
        .setStyle("SECONDARY")
    );
    msg.mentions.channels.first().send({
      embeds: [
        {
          description:
            "Seleciona el tipo de reporte que quieres para abrir un ticket",
          color: "RED",
        },
      ],
      components: [row],
    });
  },
};
