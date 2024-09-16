import { useCallback } from "react";
import FrameComponent from "../components/FrameComponent";
import InputField1 from "../components/InputField1";
import ButtonGroup1 from "../components/ButtonGroup1";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const onButtonGroupClick = useCallback(() => {
    navigate("/create-account");
  }, [navigate]);

  return (
    <div className="login">
      <FrameComponent
        frameHeaderTop="0"
        frameHeaderPosition="sticky"
        frameDivPadding="unset"
      />
      <main className="login-form-container-wrapper">
        <section className="login-form-container">
          <h2 className="login-to-continue">Login to Continue</h2>
          <div className="credentials">
            <div className="email-field">
              <div className="email-input-container">
                <div className="email-input-wrapper">
                  <div className="connect-with-fellow">
                    Connect with fellow pet lovers, share your furry friend's
                    moments
                  </div>
                </div>
                <div className="password-input-container">
                  <div className="form-contact">
                    <div className="input-field">
                      <div className="email-address">Email Address:</div>
                      <div className="description">Description</div>
                      <div className="input">
                        <input
                          className="namegmailcom"
                          placeholder="name@gmail.com"
                          type="text"
                        />
                      </div>
                      <div className="error">Error</div>
                    </div>
                    <InputField1
                      confirmPassword="Password"
                      inputFieldWidth="unset"
                      inputFieldAlignSelf="stretch"
                    />
                    <div className="remember-forgot-password">
                      <div className="checkbox-field">
                        <div className="checkbox-and-label">
                          <input className="checkbox" type="checkbox" />
                          <div className="remember-me">remember me</div>
                        </div>
                      </div>
                      <div className="forgot-password">forgot password?</div>
                    </div>
                    <ButtonGroup1 />
                    <button
                      className="button-group"
                      onClick={onButtonGroupClick}
                    >
                      <div className="button">
                        <img className="star-icon" alt="" src="/star.svg" />
                        <div className="button1">Button</div>
                        <img className="x-icon" alt="" src="/x.svg" />
                      </div>
                      <div className="button2">
                        <img className="star-icon1" alt="" src="/star.svg" />
                        <div className="create-account">Create Account</div>
                        <img className="x-icon1" alt="" src="/x.svg" />
                      </div>
                    </button>
                  </div>
                  <div className="separator">
                    <div className="or">
                      <div className="or-child" />
                      <div className="or1">OR</div>
                      <div className="or-item" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="social-login">
                <div className="social-buttons">
                  <button className="google">
                    <div className="google-child" />
                    <img
                      className="image-1-icon"
                      alt=""
                      src="/image-1@2x.png"
                    />
                    <div className="provider-login">
                      <div className="log-in-with">log in with google</div>
                    </div>
                  </button>
                  <button className="facebook">
                    <div className="facebook-child" />
                    <img
                      className="image-1-icon1"
                      alt=""
                      src="/image-1-1@2x.png"
                    />
                    <div className="log-in-with-facebook-wrapper">
                      <div className="log-in-with1">log in with facebook</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Login;