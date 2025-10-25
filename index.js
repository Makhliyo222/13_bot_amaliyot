import TelegramBot from "node-telegram-bot-api";


const token = "8348485669:AAEz-HH91LHcFNfxzP9h0kZLD0VzV9V38_8"; 


const bot = new TelegramBot(token, { polling: true });


bot.on("message", (msg) => {
  const text = msg.text;
  const chatId = msg.chat.id;

  console.log(`Yangi xabar: ${text} | Foydalanuvchi ID: ${chatId}`);

  bot.sendMessage(chatId, `--> ${text}`);
});

console.log("✅ Bot ishga tushdi...");
