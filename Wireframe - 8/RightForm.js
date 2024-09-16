import FrameComponent7 from "./FrameComponent7";
import PropTypes from "prop-types";
import "./RightForm.css";

const RightForm = ({ className = "" }) => {
  return (
    <form className={`right-form1 ${className}`}>
      <div className="right-form-inner">
        <div className="reset-your-password-parent">
          <h3 className="reset-your-password">RESET YOUR PASSWORD</h3>
          <div className="enter-a-new">
            Enter a new password below to reset your password
          </div>
        </div>
      </div>
      <div className="frame-group">
        <FrameComponent7 newPassword="New Password:" eyeOff="/eyeoff.svg" />
        <FrameComponent7
          newPassword="Confirm Password:"
          eyeOff="/eyeoff-1.svg"
          propWidth="unset"
          propTextAlign="left"
        />
        <div className="frame-wrapper">
          <div className="remember-me-checkbox-parent">
            <input className="remember-me-checkbox" type="checkbox" />
            <div className="remember-me">Remember me</div>
          </div>
        </div>
      </div>
      <div className="button-wrapper">
        <button className="button">
          <div className="button-child" />
          <div className="reset-password">Reset password</div>
        </button>
      </div>
    </form>
  );
};

RightForm.propTypes = {
  className: PropTypes.string,
};

export default RightForm;