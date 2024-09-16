import FrameComponent from "./FrameComponent";
import FrameComponent2 from "./FrameComponent2";
import PropTypes from "prop-types";
import "./SuccessCreate1.css";

const SuccessCreate1 = ({ className = "" }) => {
  return (
    <div className={`success-create ${className}`}>
      <FrameComponent
        frameHeaderTop="0"
        frameHeaderPosition="sticky"
        frameDivPadding="0px 29px 0px 0px"
      />
      <section className="success-create-inner">
        <div className="adopt-a-pet-amico-1-parent">
          <img
            className="adopt-a-pet-amico-1"
            loading="lazy"
            alt=""
            src="/adopt-a-petamico-1@2x.png"
          />
          <div className="frame-wrapper">
            <div className="frame-parent">
              <div className="almost-done-parent">
                <h1 className="almost-done">Almost Done!</h1>
                <h3 className="input-the-4">
                  Input the 4 digit number that has been sent to your email.
                </h3>
              </div>
              <div className="rectangle-parent">
                <div className="frame-child" />
                <input
                  className="digit-number"
                  placeholder="4-digit Number"
                  type="text"
                />
              </div>
              <FrameComponent2
                icon={false}
                button="Proceed"
                icons="/icons2.svg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

SuccessCreate1.propTypes = {
  className: PropTypes.string,
};

export default SuccessCreate1;