module.exports = async (message, bot, db) => {
    const message_id = message.message_id
    const chatId = message.chat.id
    const name = message.from.first_name
    const text = message.text

    let user = await db.findUser(chatId)

    if(!user) {
        await db.createUser(chatId)
        await bot.sendMessage(chatId, `So'zni kiriting!`)
    } else {
        const keyboard = {
            inline_keyboard: [
                [
                    {
                        text: "UZ",
                        callback_data: "uz"
                    },
                    {
                        text: "RU",
                        callback_data: "ru"
                    }
                ],
                [
                    {
                        text: "EN",
                        callback_data: "en"
                    },
                    {
                        text: "AR",
                        callback_data: "ar"
                    }
                ]
            ]
        }

        await db.setText(chatId, text)

        await bot.sendMessage(chatId, text, {
            reply_markup: keyboard
        })
    }
}