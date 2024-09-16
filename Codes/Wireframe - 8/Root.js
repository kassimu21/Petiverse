import { useCallback } from "react";
import FrameComponent from "./FrameComponent";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Root.css";

const Root = ({ className = "" }) => {
  const navigate = useNavigate();

  const onEnterTextClick = useCallback(() => {
    navigate("/reset-passsword");
  }, [navigate]);

  return (
    <div className={`root ${className}`}>
      <section className="main">
        <header className="main-inner">
          <FrameComponent
            frameHeaderTop="unset"
            frameHeaderPosition="unset"
            frameDivPadding="unset"
          />
        </header>
        <div className="right-form-parent">
          <div className="right-form">
            <h3 className="check-your-email">Check your email</h3>
            <div className="an-email-has">
              An email has been sent to your address with instructions to reset
              your password. Please check your inbox and follow the link
              provided to create a new password.
            </div>
            <div className="enter" onClick={onEnterTextClick}>{`Enter>>`}</div>
          </div>
          <img
            className="adopt-a-pet-amico-1"
            loading="lazy"
            alt=""
            src="/adopt-a-petamico-1@2x.png"
          />
        </div>
      </section>
    </div>
  );
};

Root.propTypes = {
  className: PropTypes.string,
};

export default Root;