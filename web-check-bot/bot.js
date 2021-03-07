const TeleBot = require("telebot");

const bot = new TeleBot({
  token: "",
});

const { execFile } = require('child_process');
var request;
var url = 'https://www.helloworld-it.com/';
const child = execFile('node', ['request.js'], (error, stdout, stderr) => {
  if (error) {
    console.error(error, stderr);
    return;
  }
  request = stdout;
  console.log(stdout);
});

bot.on(["/help", "/start"], (msg) => {
  console.log(msg);
  bot.sendMessage(msg.from.id, `Hi ${msg.chat.username} how are you? Do you want see the status of you web site? Write: /status`);
});

bot.on(["/status"], (msg) => {
  console.log(msg);
  bot.sendMessage(msg.from.id, `Your web site ${url} get ${request} status. Bye ${msg.chat.username}!!!`);
});

bot.start();
