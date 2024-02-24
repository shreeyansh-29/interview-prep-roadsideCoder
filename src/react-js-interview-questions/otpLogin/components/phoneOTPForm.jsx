import {useState} from "react";
import OtpInput from "./otpInput";

const PhoneOTPForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOTPField, setShowOTPField] = useState(false);

  const handleChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const regex = /[^0-9]g/;

    if (phoneNumber.length !== 10 || regex.test(phoneNumber)) {
      alert("Invalid phone number");
      return;
    }

    setShowOTPField(true);
  };

  const onOtpSubmit = (otp) => {
    console.log("Login Successfully", otp);
  };

  return (
    <div>
      {!showOTPField ? (
        <form onSubmit={handleSubmit}>
          <input
            value={phoneNumber}
            onChange={handleChange}
            type="text"
            placeholder="Enter phone number"
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Enter otp sent to {phoneNumber}</p>
          <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
        </div>
      )}
    </div>
  );
};

export default PhoneOTPForm;
