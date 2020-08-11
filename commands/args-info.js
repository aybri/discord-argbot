module.exports = {
	name: 'args-info',
	description: 'A test command, not exactly sure what this does. I got it from the official Discord.js guide.',
	args: true,
	usage: '<arguments>',
	execute(message, args) {
		if (args[0] === 'foo') {
			return message.channel.send('bar');

			message.channel.send(`First argument: ${args[0]}`);
		}
	},
};