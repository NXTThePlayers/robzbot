const { Client , Intents, Collection, MessageEmbed, MessageButton } = require('discord.js')




// client  =  le bot 
const client = new Client({
    partials: ["CHANNEL", "USERS", "GUILD_MEMBERS","MESSAGE"],
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.DIRECT_MESSAGES]

})


require("dotenv").config() // aller chercher le token 

client.on("ready", () => {
    console.log("je suis pret");
})



client.on("messageCreate", (message) => {
    if (message.content == "bonjour") {
        if(message.author.bot)  return; 


      message.reply({
        content:  "bonjour"
      })
        
    }
})


client.on("messageCreate" ,  (messagestock) => {

    if (messagestock.content == "ntm"){

        messagestock.delete()
    }
})



client.login(process.env.TOKEN) // se connecter au token avec le nom de token suivants 

