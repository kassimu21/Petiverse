import { useMemo } from "react";
import PropTypes from "prop-types";
import "./InputField1.css";

const InputField1 = ({
  className = "",
  confirmPassword,
  inputFieldWidth,
  inputFieldAlignSelf,
}) => {
  const inputFieldStyle = useMemo(() => {
    return {
      width: inputFieldWidth,
      alignSelf: inputFieldAlignSelf,
    };
  }, [inputFieldWidth, inputFieldAlignSelf]);

  return (
    <div className={`input-field3 ${className}`} style={inputFieldStyle}>
      <div className="confirm-password">{confirmPassword}</div>
      <div className="description3">Description</div>
      <div className="input3">
        <input className="password" placeholder="Password" type="text" />
        <img className="icons6" alt="" src="/icons-4.svg" />
      </div>
      <div className="error3">Error</div>
    </div>
  );
};

InputField1.propTypes = {
  className: PropTypes.string,
  confirmPassword: PropTypes.string,

  /** Style props */
  inputFieldWidth: PropTypes.any,
  inputFieldAlignSelf: PropTypes.any,
};

export default InputField1;