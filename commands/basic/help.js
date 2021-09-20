const {
  Client,
  MessageEmbed,
  displayAvatarURL,
  Presence,
  User,
} = require("discord.js");

module.exports = {
  name: "help",
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
    if (args[0] === "basic") {
    } else {
      let HelpGeneral = new MessageEmbed()
        .setAuthor(
          client.user.tag,
          client.user.displayAvatarURL({ dynamic: true })
        )
        .addField(
          "Invitacion",
          "\n[Invite me](https://discord.depic.xyz)\n [Support Server](https://invit.depic.xyz)"
        )
        .setColor("GREEN")
        .addField("Uso de categorias", `${p}help **(categoria)**`)
        .addField(
          "Categorias",
          "```config || staff || music || fun || utility || nsfwreal || nsfwanime || perfil```"
        )
        .addField(
          "Mas Ayuda?",
          `Usa **${p}help (comando)** Para saber la informacion del comando!`
        )
        .setImage(
          "https://cdn.discordapp.com/attachments/763804175510929469/813806894266974218/DePic_2.png"
        );
      msg.channel.send(HelpGeneral);
    }
  },
};
