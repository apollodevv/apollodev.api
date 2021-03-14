const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.commands = new Discord.Collection();
const commandsFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

if (command === 'ping') {
    client.commands.get('ping').execute(message, args);
}

client.on('ready', () => {
    console.log('Ready!');
})

client.login(token)
