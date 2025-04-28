import React, { useState } from "react";

const Input = ({onSend}) => {
  const [enteredText, setEnteredText] = useState("");

  const handleChange = (e) => setEnteredText(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    if(!enteredText) return;
    onSend(enteredText);
    setEnteredText('');
  }
  return (
    <form className="input-form" onSubmit={handleSubmit}>
      <input placeholder="Enter your message" value={enteredText} onChange={handleChange} />
      <button>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 500 500"
        >
          <g>
            <g>
              <polygon points="0,497.25 535.5,267.75 0,38.25 0,216.75 382.5,267.75 0,318.75" />
            </g>
          </g>
        </svg>
      </button>
    </form>
  );
};

export default Input;
