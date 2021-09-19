const Utils = require("./Utils");

module.exports = {
  YouTubeSongAnnounce(track) {
    return (embed = {
      color: 0xff0000,
      title: `[${track.requestedBy.username}] requests a Youtube song. The song has added to queue`,
      description: `[${track.title}](${track.url})`,
    });
  },
  YouTubePlaylistAnnounce(tracks) {
    return (embed = {
      color: 0xff0000,
      title: `Added ${tracks.length} tracks.`,
    });
  },
  SpotifySongAnnounce(track) {
    return (embed = {
      color: 0x1ed760,
      title: `[${track.requestedBy.username}] requests a Spotify song. The song has added to queue`,
      description: `[${track.title}](${track.url})`,
    });
  },
  SpotifyListAnnounce(tracks) {
    return (embed = {
      color: 0x1ed760,
      title: `Added ${tracks.length} tracks. [${tracks[0].requestedBy.username}]`,
    });
  },
  SoundCloudSongAnnounce(track) {
    return (embed = {
      color: 0xff6d00,
      title: `[${track.requestedBy.username}] requests a SoundCloud song. The song added to queue`,
      description: `[${track.title}](${track.url})`,
    });
  },
  CustomSearchAnnounce(track) {
    return (embed = {
      color: 0x5c5c5c,
      title: `Song added [${track.requestedBy.username}]`,
      description: `[${track.title}](${track.url})`,
    });
  },

  NowPlaying(queue, message) {
    let song = queue.tracks[0];
    let embed = {
      color: 0x51cab0,
      title: "[NOW PLAYING]",
      description: ` Song Title : [${song.title}](https://github.com/fdciabdul/tmuxdcbot)`,
      fields: [
        {
          name: "\u200b",
          value: Utils.getProgressBar(queue),
          inline: false,
        },
        {
          name: `The song requested by:`,
          value: `${song.requestedBy.username}`,
          inline: true,
        },
        {
          name: "From playlist:",
          value: song.fromPlaylist ? "Yes" : "No",
          inline: true,
        },
      ],
      image: {
        url: "https://telegra.ph/file/2a02f1b9ccc0a59c68137.jpg",
      },
    };
    message.channel.send({ embed: embed }).then((m) => {
      if (queue.lastNowPlaying) {
        queue.lastNowPlaying.delete({ reason: "Avoiding spam" });
      }
      queue.lastNowPlaying = m;
    });
  },
};
