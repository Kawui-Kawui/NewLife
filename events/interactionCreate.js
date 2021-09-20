const config = require("../nosubir/config");
const {
  Client,
  MessageEmbed,
  displayAvatarURL,
  MessageActionRow,
  MessageButton,
  Presence,
  User,
} = require("discord.js");
module.exports = async (client, inter) => {
  //console.log(inter.member.roles.cache);
  async function channelCreateTicket(razon, color, razon2) {
    try {
      let support;
      if (razon === "shop") {
        support = inter.guild.roles.cache.find(
          (e) => e.name === "📡┊Co-Fundador"
        );
      } else {
        support = inter.guild.roles.cache.find(
          (e) => e.name === "🛡️┊Staff Ping"
        );
      }

      let everyone = inter.guild.roles.cache.find((m) => m.name == "@everyone");
      let user = inter.user.username
        .replace(/[^a-zA-z0-9 ]/g, "")
        .trim()
        .toLowerCase();
      if (
        inter.guild.channels.cache.find(
          (e) => e.name.replace(/-/g, "") === `ticketde` + user
        )
      )
        return inter.user.send(
          "Ya has creado un ticket si otro tipo cierra el ticket y abre otro"
        );
      let locatet = inter.guild.channels.cache.find(
        (c) => c.name === "Tickets" && c.type === "GUILD_CATEGORY"
      );
      console.log(locatet);
      if (!locatet)
        return await inter.guild.channels.create("Tickets", {
          type: "GUILD_CATEGORY",
        });
      let row = new MessageActionRow().addComponents(
        new MessageButton()
          .setCustomId("close")
          .setLabel("Cerrar ticket")
          .setStyle("DANGER")
      );
      return inter.guild.channels
        .create(`Ticket de ${user}`, {
          type: "GUILD_TEXT",
          permissionOverwrites: [
            { id: everyone.id, deny: ["VIEW_CHANNEL", "SEND_MESSAGES"] },
            { id: support.id, allow: ["VIEW_CHANNEL", , "SEND_MESSAGES"] },
            { id: inter.user.id, allow: ["VIEW_CHANNEL", , "SEND_MESSAGES"] },
          ],
          parent: locatet.id,
        })
        .then((e) => {
          e.send({
            content: `<@!${inter.user.id}>`,
            embeds: [
              {
                author: [{ name: user }, { iconURL: inter.user.avatarURL() }],
                color: color,
                description: `${user} abrio el ticket por la razon de ${razon2}`,
              },
            ],
            components: [row],
          });
        });
    } catch (error) {
      console.log(error);
    }
  }
  async function channelCloseTicket() {
    inter.channel.send(
      `Ticket cerrandose en 5 segundos, Por ${inter.user.tag}`
    );
    setTimeout(() => {
      inter.channel.delete("Ticket cerrado");
    }, 5000);
  }
  async function verifyUser() {
    let user = inter.member;
    //830295519535562823
    let notVerf = user.roles.cache.find((e) => e.id === "830295519535562823");
    let addRol = inter.guild.roles.cache.find(
      (e) => e.id === "806579912529805363"
    );
    if (!notVerf) return;
    user.roles.remove(notVerf);
    user.roles.add(addRol);
    user.send("Te has verificado!!");
  }
  switch (inter.customId) {
    case "anti":
      channelCreateTicket(inter.customId, "RED", "**AntiRol**");
      break;
    case "shop":
      channelCreateTicket(inter.customId, "GREEN", "**Ayuda en la tienda**");
      break;
    case "sugets":
      channelCreateTicket(inter.customId, "BLUE", "una **Suggerencia**");
      break;
    case "ayu":
      channelCreateTicket(inter.customId, "YELLOW", "**ayuda**");
      break;
    case "close":
      channelCloseTicket();
      break;
    case "verf":
      verifyUser();
      break;

    default:
      break;
  }

  if (inter.customId === "anti") {
  }
  if (inter.customId === "shop") {
  }
  if (inter.customId === "sugets") {
  }
  if (inter.customId === "ayu") {
  }
  if (inter.customId === "close") {
  }
};
