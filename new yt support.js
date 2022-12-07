const { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu } = require('discord.js');

module.exports = {

  name: 'help',

  category: 'Info',

  aliases: ['h'],

  description: 'Return all commands, or one specific command',

  args: false,

  usage: '',

  userPrams: [],

  botPrams: ['EMBED_LINKS'],

  owner: false,

  execute: async (message, args, client, prefix) => {

 

    const embed = new MessageEmbed()

      .setTitle(`${client.user.username} Help`)

      .setDescription("**A Discord Music Bot With Many Awesome Features, Playlist support,Dj System, Music System, 24/7 for free ,Support Many Sources, Customizable Settings and Additional Features like Moderation and Utility.**")

    .addField("<:galaxy_Rules:1044373874906767470> Categories:", 

`<a:help:1035232223013634068>:Information

<a:vr_ga_spotify:1045284786345885696>:Music

<a:automod:1035231112462614568>:Admin Commands

<a:baja2:1026081084204650516>:Dj Commands

<a:filter:1029100380677734400>:Filters

<:vrplaylist:1040551511379410944>:Playlist

<a:mod:1026394716167733248>:Moderation

<a:ga_utility:1044995158397177996>:Utility`,true)

    .addField("_ _",`[Invite](https://discord.com/api/oauth2/authorize?client_id=1044596050859663401&permissions=2151008320&scope=bot) ● [Support Server](https://discord.gg/fz8QMYdVDq) ● [Website](coming soon)`)

      .setThumbnail(client.user.displayAvatarURL())

      .setColor("#00FFF8")

      .setFooter(`Requested by ${message.author.tag}`);

    const row = new MessageActionRow()

      .addComponents(

        new MessageSelectMenu()

          .setCustomId('helpop')

          .setMinValues(1)

          .setMaxValues(1)

          .setPlaceholder('? GALAXY Help')

          .addOptions([

              {

              label: 'Home',

              value: 'home',

              emoji: '🏠',

            },

               {

              label: 'Infomation',

              value: 'info',

              emoji: '1035232223013634068',

            },

            {

              label: 'Music',

              value: 'music',

              emoji: '1045284786345885696',

            },

               {

              label: 'Dj Commands',

              value: 'dj',

              emoji: '1026081084204650516',

            },

            {

              label: 'Filters',

              value: 'filter',

              emoji: '1029100380677734400',

            },

            {

              label: 'Admin Commands',

              value: 'settings',

              emoji: '1035231112462614568',

            },

            {

              label: 'Playlist',

              value: 'playlist',

              emoji: '1040551511379410944',

            },

             {

              label: 'Moderation',

              value: 'moderation',

              emoji: '1026394716167733248',

            },

              {

              label: 'Utility',

              value: 'util',

              emoji: '1044995158397177996',

            }

          ])

      )

    const m = await message.reply({ embeds: [embed], components: [row], content:"Consider voting us on https://top.gg/bot/997502155378401301/vote, It just takes a few seconds." })

    const row2 = new MessageActionRow()

      .addComponents(

        new MessageSelectMenu()

          .setCustomId('disable_h')

          .setDisabled(true)

          .setPlaceholder(`Timeout do ${prefix}help`)

          .addOptions([

            {

              label: 'Music',

              value: 'music',

              emoji: '🎼',

            },

            {

              label: ' Filter',

              value: 'filter',

              emoji: '🎙️',

            },

            {

              label: ' Info',

              value: 'info',

              emoji: 'ℹ️',

            },

            {

              label: 'Settings',

              value: 'settings',

              emoji: '⚙️',

            },

            {

              label: 'Playlist',

              value: 'playlist',

              emoji: '🗒️',

            },

            {

              label: 'Home',

              value: 'home',

              emoji: '🏠',

            }

          ])

      )

    const collector = m.createMessageComponentCollector({

      filter: (b) => {

        if (b.user.id === message.author.id) return true;

        else {

          b.reply({

            ephemeral: true,

            content: `Only **${message.author.tag}** can use this button, if you want then you've to run the command again.`,

          });

          return false;

        }

      },

      componentType: "SELECT_MENU",

      time: 199999999,

    });

    collector.on('end', async () => {

      if (!m) return;

      return m.edit({ components: [row2] }).catch(() => { });

    });

    collector.on("collect", (interaction) => {

      if (!interaction.deferred) interaction.deferUpdate();

      const options = interaction.values[0];

      let _commands;

      if (options === 'music') {

        _commands = client.commands

          .filter((x) => x.category && x.category === 'Music')

          .map((x) => `\`${x.name}\``);

        editEmbed = new MessageEmbed()

          .setColor("#00FFF8")

          .setDescription(_commands.join(', '))

          .setTitle('Music Commands')

          .setThumbnail('https://cdn.discordapp.com/avatars/1044596050859663401/462060d6ad599ef7ebb8b55476c7ec85.png?size=1024')

          .setFooter(`Total ${_commands.length} Music commands.`);

        if (!m) return;

        return m.edit({

          embeds: [editEmbed],

          components: [row],

        });

      }

      if (options === 'filter') {

        _commands = client.commands

          .filter((x) => x.category && x.category === 'Filter')

          .map((x) => `\`${x.name}\``);

        editEmbed = new MessageEmbed()

                 .setColor("#00FFF8")

          .setDescription(_commands.join(', '))

          .setTitle('Filter Commands')

          .setThumbnail('https://cdn.discordapp.com/avatars/1044596050859663401/462060d6ad599ef7ebb8b55476c7ec85.png?size=1024')

          .setFooter(`Total ${_commands.length} Filter commands.`);

        if (!m) return;

        return m.edit({

          embeds: [editEmbed],

          components: [row],

        });

      }

      if (options === 'playlist') {

        _commands = client.commands

          .filter((x) => x.category && x.category === 'Playlist')

          .map((x) => `\`${x.name}\``);

        editEmbed = new MessageEmbed()

                 .setColor("#00FFF8")

          .setDescription(_commands.join(', '))

          .setTitle('Playlist Commands')

          .setThumbnail('https://cdn.discordapp.com/avatars/1044596050859663401/462060d6ad599ef7ebb8b55476c7ec85.png?size=1024')

          .setFooter(`Total ${_commands.length} Playlist commands.`);

        if (!m) return;

        return m.edit({

          embeds: [editEmbed],

          components: [row],

        });

      }

        

         if (options === 'moderation') {

        _commands = client.commands

          .filter((x) => x.category && x.category === 'Moderation')

          .map((x) => `\`${x.name}\``);

        editEmbed = new MessageEmbed()

          .setColor("#00FFF8")

          .setDescription(_commands.join(', '))

          .setTitle('Moderation Commands')

          .setThumbnail('https://cdn.discordapp.com/avatars/1044596050859663401/462060d6ad599ef7ebb8b55476c7ec85.png?size=1024')

          .setFooter(`Total ${_commands.length} Moderation commands.`);

        if (!m) return;

        return m.edit({

          embeds: [editEmbed],

          components: [row],

        });

      }

        

         if (options === 'util') {

        _commands = client.commands

          .filter((x) => x.category && x.category === 'Utility')

          .map((x) => `\`${x.name}\``);

        editEmbed = new MessageEmbed()

                   .setColor("#00FFF8")

          .setDescription(_commands.join(', '))

          .setTitle('Utility Commands')

          .setThumbnail('https://cdn.discordapp.com/avatars/1044596050859663401/462060d6ad599ef7ebb8b55476c7ec85.png?size=1024')

          .setFooter(`Total ${_commands.length} Utility commands.`);

        if (!m) return;

        return m.edit({

          embeds: [editEmbed],

          components: [row],

        });

      }

        

      if (options === 'settings') {

        _commands = client.commands

          .filter((x) => x.category && x.category === 'Settings')

          .map((x) => `\`${x.name}\``);

        editEmbed = new MessageEmbed()

                   .setColor("#00FFF8")

          .setDescription(_commands.join(', '))

          .setTitle('Admin Commands')

          .setThumbnail('https://cdn.discordapp.com/avatars/1044596050859663401/462060d6ad599ef7ebb8b55476c7ec85.png?size=1024')

          .setFooter(`Total ${_commands.length} Admin commands.`);

        if (!m) return;

        return m.edit({

          embeds: [editEmbed],

          components: [row],

        });

      }

        if (options === 'dj') {

        _commands = client.commands

          .filter((x) => x.category && x.category === 'Dj')

          .map((x) => `\`${x.name}\``);

        editEmbed = new MessageEmbed()

               .setColor("#00FFF8")

          .setDescription(_commands.join(', '))

          .setTitle('Dj Commands')

          .setThumbnail('https://cdn.discordapp.com/avatars/1044596050859663401/462060d6ad599ef7ebb8b55476c7ec85.png?size=1024')

          .setFooter(`Total ${_commands.length} Dj commands.`);

        if (!m) return;

        return m.edit({

          embeds: [editEmbed],

          components: [row],

        });

      }

        

      if (options === 'info') {

        _commands = client.commands

          .filter((x) => x.category && x.category === 'Info')

          .map((x) => `\`${x.name}\``);

        editEmbed = new MessageEmbed()

          .setColor("#00FFF8")

          .setDescription(_commands.join(', '))

          .setTitle('Information Commands')

          .setThumbnail('https://cdn.discordapp.com/avatars/1044596050859663401/462060d6ad599ef7ebb8b55476c7ec85.png?size=1024')

          .setFooter(`Total ${_commands.length} Information commands.`);

        if (!m) return;

        return m.edit({

          embeds: [editEmbed],

          components: [row],

        });

      }

      if (options === 'home') {

        if (!m) return;

        return m.edit({

          embeds: [embed],

          components: [row],

        });

      }

    }

    )

  },

};
