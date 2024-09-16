import FrameComponent from "./FrameComponent";
import PropTypes from "prop-types";
import "./Root1.css";

const Root1 = ({ className = "" }) => {
  return (
    <div className={`wireframe-7 ${className}`}>
      <FrameComponent
        frameHeaderTop="0"
        frameHeaderPosition="sticky"
        frameDivPadding="0px 29px 0px 0px"
      />
      <section className="wireframe-7-inner">
        <div className="adopt-a-pet-amico-1-parent">
          <img
            className="adopt-a-pet-amico-1"
            loading="lazy"
            alt=""
            src="/adopt-a-petamico-1@2x.png"
          />
          <div className="frame-wrapper">
            <div className="frame-parent">
              <div className="forgot-your-password-parent">
                <h1 className="forgot-your-password">Forgot your Password?</h1>
                <div className="enter-the-email">
                  Enter the email connected to your account
                </div>
              </div>
              <div className="rectangle-parent">
                <div className="frame-child" />
                <input
                  className="namegmailcom"
                  placeholder="name@gmail.com"
                  type="text"
                />
              </div>
              <button className="button-parent">
                <a className="button">Login</a>
                <img className="icons" alt="" src="/icons2.svg" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

Root1.propTypes = {
  className: PropTypes.string,
};

export default Root1;