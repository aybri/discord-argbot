const Discord = require('discord.js');

module.exports = {
	name: 'embed',
	description: 'A command to test embeds.',
	execute(message, args) {
		const exampleEmbed = new Discord.MessageEmbed()
			.setColor('#1b4d3e')
			.setTitle('Test Embed')
			.setURL('https://discord.js.org/')
			.setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL({ format: "png", dynamic: true })}`)
			.setDescription('Some description here')
			.setThumbnail('https://i.imgur.com/wSTFkRM.png')
			.addFields(
				{ name: 'Regular field title', value: 'Some value here' },
				{ name: '\u200B', value: '\u200B' },
				{ name: 'Inline field title', value: 'Some value here', inline: true },
				{ name: 'Inline field title', value: 'Some value here', inline: true },
			)
			.addField('Inline field title', 'Some value here', true)
			.setImage('https://i.imgur.com/wSTFkRM.png')
			.setTimestamp()
			.setFooter('ARGBot by Impulse', 'https://i.imgur.com/T5AOTum.png');

		message.channel.send(exampleEmbed);
	},
};