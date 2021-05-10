const TelegramBot = require('node-telegram-bot-api');

const Token = '1796873425:AAHJDY5XMeBORSjQ_R_KQXFoWycQqOLpAGg';

const bot = new TelegramBot(Token, {
    polling: true
});

const Database = require('./base');
const TextController = require('./TextController');
const db = new Database(`mongodb://localhost/bot`)

bot.on('message', async (message) => {
    TextController(message, bot, db)

})


