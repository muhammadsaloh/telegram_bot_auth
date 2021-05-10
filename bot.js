// bot.on('message', async (message) => {
//   const message_id = message.message_id
//   const chatId = message.chat.id
//   const name = message.from.first_name
//   const text = message.text

//   if(text == '/start') {
//     bot.sendMessage(chatId, `Salom, <b>${name}</b>`, {
//       parse_mode: "HTML",
//       reply_to_message_id: message_id
//     })
//   } else if (text == '/photo') {
//     bot.sendPhoto(chatId, "https://picsum.photos/300", {
//       caption: "bu Rasm"
//     })
//   } else if (text == '/media') {
//     let mediaList = []
//     mediaList.push({
//       type: "photo",
//       media: "https://picsum.photos/300?rand=1",
//       caption: "Salom world!"
//     }),
//     mediaList.push({
//       type: "photo",
//       media: "https://picsum.photos/300?rand=2"
//     }),
//     mediaList.push({
//       type: "photo",
//       media: "https://picsum.photos/300?rand=3"
//     })
//     bot.sendMediaGroup(chatId, mediaList)
//   } else if (text == "/location") {
//     bot.sendVenue(chatId, 41, 52, "Najot Talim", "Kichik xalqa yoli 72a")
//   } else if (text == '/contact') {
//     bot.sendContact(chatId, "+998977777777", "kimdir")
//   }

// }) 





// buttons inline
// bot.on('callback_query', async message => {
//     const chatId = message.from.id
//     const data = message.data 
//     const message_id = message.message.message_id

//     if(data == 'Toshkent') {
//         bot.editMessageText("Siz Toshkentni tanladingiz!", {
//             chat_id: chatId,
//             message_id: message_id
//         })
//     }
// })



//     if (text == '/start') {

//         const keyboard = {
//             inline_keyboard: [
//                 [
//                     {
//                         text: "Toshkent",
//                         callback_data: "Toshkent"
//                     },
//                     {
//                         text: "Bukhara",
//                         callback_data: "Bukhara"
//                     }
//                 ],
//                 [
//                     {
//                         text: "Saytimizga marhamat!",
//                         url: "https://google.com"
//                     }
//                 ]
//             ]
//         }

//         bot.sendMessage(chatId, `Salom, <b>${name}</b>`, {
//             parse_mode: "HTML",
//             reply_to_message_id: message_id,
//             reply_markup: keyboard
//         })


//     }