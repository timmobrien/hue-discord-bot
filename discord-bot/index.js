const { customColor } = require('../presets/customColours');
const prefix = "!"

function discordBot() {

    const { REST, Routes, Client, GatewayIntentBits, Partials } = require('discord.js');
    

    const commands = [
    {
        name: 'red',
        description: 'Makes light red',
    },
    {
        name:'normal',
        description:'normal colour lights'
    },
    {
        name: 'night',
        description:'Dim'
    },

    ];

    const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

    (async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID), { body: commands });

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
    })();



    const client = new Client({
        intents: [
          GatewayIntentBits.DirectMessages,
          GatewayIntentBits.Guilds,
          GatewayIntentBits.GuildBans,
          GatewayIntentBits.GuildMessages,
          GatewayIntentBits.MessageContent,
        ],
        partials: [Partials.Channel],
    });

    client.on('ready', ()=> {
        console.log(`Logged in as ${client.user.tag}!`)
    });

    client.on('interactionCreate', async interaction => {
        if(!interaction.isChatInputCommand()) return;

        
        if(interaction.commandName === "custom"){
            const args = interaction.content.slice(prefix.length).trim().split(' ');
            const command = args.shift().toLowerCase();
            if(!args.length) {
                return message.channel.send(`You did not provide a color`)
            }
        }

    });




    client.on('messageCreate', async message => {

        if (!message.content.startsWith(prefix) || message.author.bot) return;

	    const args = message.content.slice(prefix.length).trim().split(' ');
	    const command = args.shift().toLowerCase();
        
        if (command === `lights`) {
            if (!args.length) {
                return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
            } else if (args.length > 1) {
                return message.channel.send('Too many arguments. Type your colour with no spaces')
            } else {
                 
                const receipt = await customColor(args[0])
                console.log(receipt)
                message.channel.send(receipt)
            
            }
        }

    })

    client.login(process.env.TOKEN);
}

module.exports = {discordBot}