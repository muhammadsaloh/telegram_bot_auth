const translate = require('@vitalets/google-translate-api')

module.exports = async (message, bot, db) => {
    const data = message.data
    const chatId = message.from.id
    const text = message.message.text

    let user = await db.findUser(chatId)
    
    let translatedWord = await translate(text, { to: data })

    await bot.editMessageText(translatedWord.text, {
        chat_id: chatId,
        message_id: message.message.message_id
    })
}