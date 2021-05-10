module.exports = async (message, bot, db) => {
    const message_id = message.message_id
    const chatId = message.chat.id
    const name = message.from.first_name
    const text = message.text

    let user = await db.findUser(chatId)

    if(!user) {
        await db.createUser(chatId)
        await bot.sendMessage(chatId, `Salom mehmon, xush kelibsiz, ismingizni kiriting!`)
    } else if (user.step == 1) {
        try {
            await db.setName(chatId, text.trim())
            await db.setStep(chatId, 2)
            await bot.sendMessage(chatId, `Barakalla ${text}, endi yoshingizni kiriting`)

        } catch (e) {
            bot.sendMessage(chatId, `Qandaydir xato qildingiz`)
        }
    } else if (user.step == 2) {
        try {
            await db.setAge(chatId, Number(text))
            await db.setStep(chatId, 3)
            await bot.sendMessage(chatId, `Tanishganimdan xursandman. Siz ro'yxatdan o'tdingiz`)
        } catch (e) {
            bot.sendMessage(chatId, `Siz avval ro'yxatdan o'tgansiz!`)
        }
    }
}