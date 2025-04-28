const ChatBotApi = {
  GetChatbotResponse: async (message) => {
    return new Promise(function (resolve, reject) {
      return setTimeout(() => {
        if (message === "hi" || message === "hello")
          resolve("Welcome to chat bot");
        else resolve(`echo: ${message}`);
      }, 2000);
    });
  },
};

export { ChatBotApi };
