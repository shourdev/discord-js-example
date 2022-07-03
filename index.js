const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () =>{
	client.user.setStatus('Discord.js Example!')
	console.log('Connected!')
})

client.login('')