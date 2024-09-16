import FrameComponent from "../components/FrameComponent";
import PropTypes from "prop-types";
import "./SuccessCreate.css";

const SuccessCreate = ({
  frameHeaderTop,
  frameHeaderPosition,
  frameDivPadding,
}) => {
  return (
    <div className="success-reset">
      <section className="main">
        <header className="main-inner">
          <FrameComponent
            frameHeaderTop={frameHeaderTop}
            frameHeaderPosition={frameHeaderPosition}
            frameDivPadding={frameDivPadding}
          />
        </header>
        <div className="sidebar">
          <div className="header-parent">
            <div className="header">
              <h1 className="password-reset-successful">
                Password reset successful
              </h1>
              <div className="your-password-has">
                Your password has been successfully reset,You can now log in
                with your new password
              </div>
            </div>
            <button className="button-parent">
              <div className="button">Login</div>
              <img className="icons" alt="" src="/icons.svg" />
            </button>
          </div>
          <img
            className="adopt-a-pet-amico-1"
            loading="lazy"
            alt=""
            src="/adopt-a-petamico-15@2x.png"
          />
        </div>
      </section>
    </div>
  );
};

SuccessCreate.propTypes = {
  frameHeaderTop: PropTypes.string,
  frameHeaderPosition: PropTypes.string,
  frameDivPadding: PropTypes.string,
};

export default SuccessCreate;