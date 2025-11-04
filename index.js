import TelegramBot from "node-telegram-bot-api";

const TOKEN = "8348485669:AAEz-HH91LHcFNfxzP9h0kZLD0VzV9V38_8";

const bot = new TelegramBot(TOKEN, { polling: true });

bot.on("message", function (msg) {
  const chatId = msg.chat.id;
  const text = msg.text;
  const firstName = msg.chat.first_name;
  console.log(msg);

  if (text == "/start") {
    bot.sendMessage(chatId, `Xush kelibsiz, ${firstName}` , {
      reply_markup: {
        keyboard: [
          [{ text: "boshlash 🧨"}],
          [{ text: "Menu 🍔"}, {text: "til 🌎"}],
        ],
        resize_keyboard: true,
      },
    })
  } else if (text == "/help") {
    bot.sendMessage(chatId, `Sizga qanday yordam kerak, ${firstName}?` );
  } else if (text == "/sozlamalar") {
    bot.sendMessage(chatId, ` Bu sozlamalar, ${firstName}`);
  } else if (text == "boshlash 🧨") {
    bot.sendMessage(chatId, `Boshlanyapti...`);
  } else if (text == "Menu 🍔") {
    bot.sendMessage(chatId, `Menyuuuu...`);
  } else if (text == "til 🌎") {
    bot.sendMessage(chatId, `Tilni tanlang...`);
  }
});

console.log("Bot ishga tushdi...");

