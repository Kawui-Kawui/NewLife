const {
  Client,
  MessageEmbed,
  displayAvatarURL,
  Presence,
  User,
} = require("discord.js");
module.exports = async (client, member) => {
  let channel = member.guild.channels.cache.get("889625666713186354");
  const embedBienvenidas = new MessageEmbed()
    .setAuthor(member.guild.name, member.guild.iconURL())
    .setDescription(
      `${member.user} Bienvenid@ a ${member.guild.name}, esto es un servidor de **RP de Unturned**, Puedes invitar a tu amigos y puedes ganar recompesas, y ve las reglas para no ser sancionado proxomamente, \n ve a <#830536631072850001> para ver mas canales`
    )
    .setColor("RED");
  if (!channel) return;
  member.guild.channels.resolve(channel).send({ embeds: [embedBienvenidas] });
};
