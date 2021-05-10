const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config()
const TOKEN = process.env.TOKEN
const URL = process.env.URL
const bot = new TelegramBot(TOKEN, {
    polling: true
});

const Database = require('./base');
const CallbackController = require('./CallbackController');
const TextController = require('./TextController');
const db = new Database(URL)

bot.on('message', async (message) => {
    TextController(message, bot, db)

})

bot.on('callback_query', async (callback_query) => {
    await CallbackController(callback_query, bot, db)
})

