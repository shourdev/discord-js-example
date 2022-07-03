const Discord = require('discord.js');
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });


client.on('ready', () =>{
	client.user.setStatus('Discord.js Example!')
	console.log('Connected!')

})
client.login('')
