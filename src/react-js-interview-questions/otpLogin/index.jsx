import PhoneOTPForm from "./components/phoneOTPForm";
import "./styles.css"

const OtpLogin = () => {
  return (
    <div className="App">
      <h1>Login with phone</h1>
      <PhoneOTPForm />
    </div>
  );
};

export default OtpLogin;
