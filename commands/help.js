module.exports = {
  name: "help",
  aliases: ["h"],
  run(message, args, client) {
    let embed = {
      color: 0x53bc8c,
      title: `「 Adiixyz Bot 」`,
      fields: [
        {
          name: "Info Bot",
          value: "Creator : Adiixyz\nVersion : 1.0.0\nPrefix : !\n\nServer : ${message.guild.name}",
          inline: false,
        },
        {
          name: "All Commands",
          value: "play, search, shuffle, skip, nowplaying, move, loop, disconnect, filters, forward, remove",
          inline: false,
        },
        {
          name: "Created",
          value: "with ❤️ By Adiixyz",
          inline: false,
        },
        {
          name: "Thanks To:",
          value: "Adiixyz\nDiscord.JS",
          inline: false,
        },
      ],
    };
    message.channel.send({ embed: embed });
  },
};
