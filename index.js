const Discord = require('discord.js');
const config = require('./config.json');

const client = new Discord.Client();


client.on('ready', () => {
    console.log(client.user.tag +" is now online");
    client.user.setActivity("🍉");
});

client.on('message', (message) => {
    message.react("🍉");
});



client.login(config.token);