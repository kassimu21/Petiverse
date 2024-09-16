import { useMemo } from "react";
import FormSteps from "./FormSteps";
import PropTypes from "prop-types";
import "./SuccessCreate.css";

const SuccessCreate = ({
  className = "",
  frameHeaderTop,
  frameHeaderPosition,
  frameDivPadding,
  successCreate2Position,
  formStructureGap,
}) => {
  const successCreate2Style = useMemo(() => {
    return {
      position: successCreate2Position,
    };
  }, [successCreate2Position]);

  const formStructureStyle = useMemo(() => {
    return {
      gap: formStructureGap,
    };
  }, [formStructureGap]);

  return (
    <div className={`success-create2 ${className}`} style={successCreate2Style}>
      <section className="form-structure" style={formStructureStyle}>
        <FormSteps
          frameHeaderTop="unset"
          frameHeaderPosition="unset"
          frameDivPadding="0px 29px 0px 0px"
        />
        <div className="form-inputs">
          <div className="right-form">
            <div className="success-message">
              <h2 className="account-created-succesfully">
                Account created succesfully
              </h2>
              <div className="your-account-has">
                Your account has been successfully created,You can now log in.
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
            src="/adopt-a-petamico-1@2x.png"
          />
        </div>
      </section>
    </div>
  );
};

SuccessCreate.propTypes = {
  className: PropTypes.string,
  frameHeaderTop: PropTypes.string,
  frameHeaderPosition: PropTypes.string,
  frameDivPadding: PropTypes.string,

  /** Style props */
  successCreate2Position: PropTypes.any,
  formStructureGap: PropTypes.any,
};

export default SuccessCreate;