import FrameComponent from "../components/FrameComponent";
import InputField1 from "../components/InputField1";
import FrameComponent1 from "../components/FrameComponent1";
import ButtonGroup from "../components/ButtonGroup";
import "./CreateAccount.css";

const CreateAccount = () => {
  return (
    <div className="create-account1">
      <main className="frame-parent">
        <FrameComponent />
        <div className="sign-up-content-parent">
          <div className="sign-up-content">
            <b className="create-an-account">CREATE AN ACCOUNT</b>
            <div className="connect-with-fellow1">
              Connect with fellow pet lovers, share your furry friend's moments
            </div>
          </div>
          <div className="form-container">
            <form className="form-contact1">
              <div className="name-fields">
                <div className="input-field1">
                  <div className="first-name">First Name</div>
                  <div className="description1">Description</div>
                  <div className="input1">
                    <input className="frank" placeholder="Frank" type="text" />
                  </div>
                  <div className="error1">Error</div>
                </div>
                <div className="input-field2">
                  <div className="last-name">Last Name</div>
                  <div className="description2">Description</div>
                  <div className="input2">
                    <input
                      className="fisher"
                      placeholder="Fisher"
                      type="text"
                    />
                  </div>
                  <div className="error2">Error</div>
                </div>
              </div>
              <div className="input-field3">
                <div className="email-address1">Email Address:</div>
                <div className="description3">Description</div>
                <div className="input3">
                  <input
                    className="namegmailcom1"
                    placeholder="name@gmail.com"
                    type="text"
                  />
                </div>
                <div className="error3">Error</div>
              </div>
              <div className="phone-number-container">
                <div className="phone-number">Phone Number:</div>
                <div className="frame-group">
                  <div className="frame-wrapper">
                    <div className="number-input-field-wrapper">
                      <div className="number-input-field">
                        <img
                          className="image-13-icon"
                          alt=""
                          src="/image-13@2x.png"
                        />
                        <img
                          className="input-icon"
                          alt=""
                          src="/input-icon.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mobile-input-container">
                    <div className="mobile-number-fields">
                      <div className="div">+234</div>
                      <div className="mobile-number">Mobile Number</div>
                    </div>
                  </div>
                </div>
              </div>
              <InputField1 confirmPassword="Confirm Password" />
              <InputField1
                confirmPassword="Password"
                inputFieldWidth="566px"
                inputFieldAlignSelf="unset"
              />
              <div className="checkbox-container">
                <div className="checkbox-field1">
                  <div className="checkbox-and-label1">
                    <input className="checkbox1" type="checkbox" />
                    <div className="remember-me1">remember me</div>
                  </div>
                </div>
              </div>
              <FrameComponent1 />
              <ButtonGroup />
            </form>
            <div className="by-creating-an-container">
              By creating an account you agree to our 
              <a
                className="privacy-policy"
                href="https://www.ezyride.co/"
                target="_blank"
              >
                <span className="privacy-policy1">Privacy Policy</span>
              </a>
               and 
              <a
                className="terms-of-use"
                href="https://www.ezyride.co/"
                target="_blank"
              >
                <span className="terms-of-use1">Terms of use</span>
              </a>
              .
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CreateAccount;