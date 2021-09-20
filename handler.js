const { Client, MessageEmbed, Presence, User } = require("discord.js");

module.exports = {
  name: "prueba",
  aliases: [],
  description: "Pruebas",
  category: "admin",
  usage: "prueba",
  botPermissions: ["SEND_MESSAGES", "VIEW_CHANNEL", "BAN_MEMBERS"],
  userPermissions: ["BAN_MEMBERS"],
  cooldown: 5,
  run: async (client, msg, args) => {
    
  },
};
