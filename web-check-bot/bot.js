const TeleBot = require("telebot");

const bot = new TeleBot({
  token: "1609099035:AAEcGbF-fbp3lj1DRYg931LprmVe4Jiwrew",
});

const { execFile } = require('child_process');
var request;
const child = execFile('node', ['request.js'], (error, stdout, stderr) => {
  if (error) {
    console.error(error, stderr);
    return;
  }
  request = stdout;
  console.log(stdout);
});

bot.on(["/help"], (msg) => {
  console.log(msg);
  bot.sendMessage(msg.from.id, `Hi ${msg.chat.username} how are you? Do you want see the status of you web site? Write: /request`);
});

bot.on(["/request"], (msg) => {
  console.log(msg);
  bot.sendMessage(msg.from.id, `Your status request is ${request} See you ${msg.chat.username} Bye`);
});

bot.start();
