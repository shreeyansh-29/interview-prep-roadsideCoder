import React, { useEffect, useRef } from "react";

const Messages = ({ messages }) => {
  const el = useRef(null);

  useEffect(() => {
    el.current.scrollIntoView({ block: "end", behavior: "smooth" });
  });

  return (
    <div className="messages">
      {messages}
      <div ref={el} id="el" />
    </div>
  );
};

export default Messages;
