const Discord = require("discord.js");
const client = new Discord.Client({ intents: 4095 });
const config = require("./nosubir/config");
const fs = require("fs");
const cooldown = new Set();
const prefix = "n!";

const ascii = require("ascii-table");
const table = new ascii("Commands");
table.setHeading("Command", "Load Status");
//New Collection
client.commands = new Discord.Collection();
//Reading Folders and files
let i = 0;
fs.readdirSync("./commands/").forEach((folder) => {
  const commands = fs
    .readdirSync(`./commands/${folder}/`)
    .filter((file) => file.endsWith(".js"));
  for (const file of commands) {
    const cmd = require(`./commands/${folder}/${file}`);
    if (cmd.name) {
      client.commands.set(cmd.name, cmd);
      table.addRow(`${++i} - ${file}`, "✔️");
    } else {
      table.addRow(`${++i} - ${file}`, "❌");
      continue;
    }
  }
});

console.log(table.toString());

const events = fs
  .readdirSync("./events")
  .filter((file) => file.endsWith(".js"));
for (const file of events) {
  console.log(`[discord.js event] ${file}`);
  const event = require(`./events/${file}`);
  client.on(file.split(".")[0], event.bind(null, client));
}

function presence() {
  client.user.setPresence({
    status: "dnd",
    activities: [
      {
        name: "Bot NewLife | n!help",
        type: "WATCHING",
      },
    ],
  });
}

client.on("ready", () => {
  console.log(`Toy vivo`);
  presence();
});

client.on("messageCreate", async (message) => {
  if (message.channel.type === "dm") return;
  if (message.guild.unavailable) return;
  if (message.author.bot) return;

  const p = "n!";
  if (!message.content.startsWith(p)) return;
  let args = message.content.slice(p.length).trim().split(" ");
  let command = args.shift().toLowerCase();

  const file =
    client.commands.get(command) ||
    client.commands.find((c) => c.aliases.includes(command));

  if (!file) return;
  var id = message.author.id + file.name + file.aliases.join("");
  const time = file.cooldown;

  if (cooldown.has(id))
    return message.channel.send(
      `${message.author}, Espera **${time}** segundos para usar de nuevo ese comando`
    );

  cooldown.add(id);
  if (file) file.run(client, message, args, p);
  setTimeout(() => {
    cooldown.delete(id);
  }, time + "000");
});

client.login(config.token);
