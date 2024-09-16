import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent7.css";

const FrameComponent7 = ({
  className = "",
  newPassword,
  eyeOff,
  propWidth,
  propTextAlign,
}) => {
  const newPasswordStyle = useMemo(() => {
    return {
      width: propWidth,
      textAlign: propTextAlign,
    };
  }, [propWidth, propTextAlign]);

  return (
    <div className={`new-password-parent ${className}`}>
      <div className="new-password" style={newPasswordStyle}>
        {newPassword}
      </div>
      <div className="eye-off-parent">
        <img className="eye-off-icon" loading="lazy" alt="" src={eyeOff} />
        <input className="input-fields" type="text" />
      </div>
    </div>
  );
};

FrameComponent7.propTypes = {
  className: PropTypes.string,
  newPassword: PropTypes.string,
  eyeOff: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propTextAlign: PropTypes.any,
};

export default FrameComponent7;