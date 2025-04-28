import React, { useEffect, useState } from "react";
import "./styles.css";
import Header from "./components/Header";
import Messages from "./components/Messages";
import Input from "./components/Input";
import BotMessage from "./components/BotMessage";
import { ChatBotApi } from "./ChatBotApi";
import UserMessage from "./components/UserMessage";

const ChatBotUI = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    async function loadWelcomeMessage() {
      setMessages([
        <BotMessage
          key="0"
          fetchMessage={async () => ChatBotApi.GetChatbotResponse("hi")}
        />,
      ]);
    }
    loadWelcomeMessage();
  }, []);

  const send = (text) => {
    const newMessage = messages.concat(
      <UserMessage key={messages.length + 1} text={text} />,
      <BotMessage
        key={messages.length + 2}
        fetchMessage={async () => ChatBotApi.GetChatbotResponse(text)}
      />
    );
    setMessages(newMessage);
  };

  return (
    <div className="chat-bot">
      <Header />
      <Messages messages={messages} />
      <Input onSend={send} />
    </div>
  );
};

export default ChatBotUI;
