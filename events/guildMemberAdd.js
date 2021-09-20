const config = require("../config");
const {
  Client,
  MessageEmbed,
  displayAvatarURL,
  Presence,
  User,
} = require("discord.js");
module.exports = async (client, member) => {
  let channel = client.channels.cache.get("840056466778226788");
  if (!Channel) return;
  member.guild.channels.resolve(channel).send(embedBienvenidas);
};
