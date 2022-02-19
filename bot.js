const {Client , Intents} = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.DIRECT_MESSAGES] } );

require('dotenv').config();

client.login(process.env.BOT_TOKEN);

client.on('ready',() => {
    console.log('ready');
    client.user.setActivity('Listening for Smirk Requests', { type: "PLAYING" });
});

client.on('messageCreate' ,(msg) => {
    console.log(msg);
    if (msg.content === '!smirk'){
        msg.channel.send(`😏`);
    }
});