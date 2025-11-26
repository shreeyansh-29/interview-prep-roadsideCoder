import React from "react";
import "./styles.css";

const Message = ({
  children,
  messageType,
}: {
  children: string;
  messageType: "self" | "response";
}) => {
  return (
    <div className={`message-container ${messageType}`}>
      <p className="message">{children}</p>
    </div>
  );
};

const ChatInput = ({ onEnter }: { onEnter: (messageLine: string) => void }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  return (
    <form
      className="message-input"
      onSubmit={(e) => {
        e.preventDefault();
        
        const formData = new FormData(e.currentTarget);
        const messageLine = formData.get("message-input");

        if (messageLine && inputRef.current) {
          onEnter(messageLine as string);
          inputRef.current.value = "";
        }
      }}
    >
      <input
        ref={inputRef}
        type="text"
        name="message-input"
        placeholder="Enter your message..."
      />
    </form>
  );
};

const ChatBot = ({
  onInput,
  messages,
}: {
  onInput: (value: string) => void;
  messages: { content: string; type: "self" | "response" }[];
}) => {
  const messageAreaRef = React.useRef<HTMLDivElement>(null);
  const bottomAreaRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    bottomAreaRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chatbot-container">
      <div ref={messageAreaRef} className="message-area">
        {messages.map(({ content, type }) => {
          return <Message messageType={type}>{content}</Message>;
        })}
        <div ref={bottomAreaRef} />
      </div>
      <ChatInput onEnter={onInput} />
    </div>
  );
};

export default function ChatBotUI2() {
  const [messages, setMessages] = React.useState<
    {
      content: string;
      type: "self" | "response";
    }[]
  >([]);

  return (
    <div className="App">
      <ChatBot
        messages={messages}
        onInput={(value) => {
          setMessages((prev) => [
            ...prev,
            { content: String(value), type: "self" },
          ]);

          fetch("https://dummyjson.com/quotes/random/1")
            .then((res) => res.json())
            .then((data) => {
              setMessages((prev) => [
                ...prev,
                { content: data[0].quote, type: "response" },
              ]);
            });
        }}
      />
    </div>
  );
}
