require('dotenv').config();

const { Client, Intents } = require('discord.js');
const client = new Client({intents: [Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILDS]});
const {presence} = require('./config/presence');
const { messageCreate } = require('./messages/messageCreate');



client.on('ready', () => presence(client));

client.on('messageCreate',messageCreate)




client.login(process.env.DCTOKEN);