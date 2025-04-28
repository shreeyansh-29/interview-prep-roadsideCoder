import React, { useEffect, useState } from "react";

const BotMessage = ({ fetchMessage }) => {
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function loadMessage(params) {
      const msg = await fetchMessage();
      setLoading(false);
      setMessage(msg);
    }

    loadMessage();
  }, [fetchMessage]);

  return (
    <div className="message-container">
      <div className="bot-message">{loading ? "..." : message}</div>
    </div>
  );
};

export default BotMessage;
