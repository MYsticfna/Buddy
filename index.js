//create bot
const discord = require('discord.js')
const bot = new discord.Client()

//token and prefix and more
const {token, prefix} = require('./config')

//ready
bot.on('ready', () => {
    const botinfo = `${bot.user.tag}`
    console.log(`the bot with the name of ${botinfo} is online `)
})

bot.login(token)