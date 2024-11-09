module.exports = {
 name: 'messageCreate',
 execute: async(message) => {
  let client = message.client;
  if (message.author.bot || message.channel.type === 'dm') return;
}};
