/* eslint-disable react/prop-types */
import {useEffect, useRef, useState} from "react";

const OtpInput = ({length = 4, onOtpSubmit = () => {}}) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (e, idx) => {
    const {value} = e.target;
    if (isNaN(value)) return;

    let newOtp = [...otp];

    newOtp[idx] = value.substring(value.length - 1);
    setOtp(newOtp);

    let combinedOtp = newOtp.join("");
    if (combinedOtp.length === length) onOtpSubmit(combinedOtp);

    if (value && idx < length - 1 && inputRefs.current[idx + 1]) {
      inputRefs.current[idx + 1].focus();
    }
  };

  const handleClick = (idx) => {
    inputRefs.current[idx].setSelectionRange(1, 1);

    if (idx > 0 && !otp[idx - 1]) {
      inputRefs.current[otp.indexOf("")].focus();
    }
  };

  const handleKeyDown = (e, idx) => {
    if (
      e.key === "Backspace" &&
      !otp[idx] &&
      idx > 0 &&
      inputRefs.current[idx - 1]
    ) {
      inputRefs.current[idx - 1].focus();
    }
  };

  return (
    <div>
      {otp.map((value, index) => (
        <input
          type="text"
          className="otpInput"
          value={value}
          key={index}
          ref={(input) => (inputRefs.current[index] = input)}
          onChange={(e) => handleChange(e, index)}
          onClick={() => handleClick(index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
        />
      ))}
    </div>
  );
};

export default OtpInput;
