import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({
  className = "",
  frameHeaderTop,
  frameHeaderPosition,
  frameDivPadding,
}) => {
  const frameHeaderStyle = useMemo(() => {
    return {
      top: frameHeaderTop,
      position: frameHeaderPosition,
    };
  }, [frameHeaderTop, frameHeaderPosition]);

  const frameDivStyle = useMemo(() => {
    return {
      padding: frameDivPadding,
    };
  }, [frameDivPadding]);

  return (
    <header
      className={`petiverse-parent ${className}`}
      style={frameHeaderStyle}
    >
      <a className="petiverse">
        <span>Pet</span>
        <span className="iverse">iverse</span>
      </a>
      <div className="frame-container">
        <div className="our-services-parent">
          <div className="our-services">Our Services</div>
          <img className="icons" alt="" src="/icons1.svg" />
        </div>
        <div className="about-us-parent">
          <div className="about-us">About Us</div>
          <img className="icons1" alt="" src="/icons1.svg" />
        </div>
        <div className="faqs-parent">
          <div className="faqs">FAQ’s</div>
          <img className="icons2" alt="" src="/icons1.svg" />
        </div>
        <div className="icons-parent">
          <img className="icons3" alt="" src="/icons-31.svg" />
          <div className="english">English</div>
        </div>
      </div>
      <div className="instance-parent" style={frameDivStyle}>
        <div className="button-parent">
          <div className="button1">{`Sign in `}</div>
          <img className="icons4" alt="" src="/icons2.svg" />
        </div>
        <div className="button-group">
          <div className="button2">Sign up</div>
          <img className="icons5" alt="" src="/icons2.svg" />
        </div>
      </div>
    </header>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,

  /** Style props */
  frameHeaderTop: PropTypes.any,
  frameHeaderPosition: PropTypes.any,
  frameDivPadding: PropTypes.any,
};

export default FrameComponent;