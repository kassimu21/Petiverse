import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent5.css";

const FrameComponent5 = ({
  className = "",
  image,
  pEOPLEINLOVEWITHDOGS,
  propDisplay,
}) => {
  const pEOPLEINLOVEWITHStyle = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  return (
    <div className={`frame-parent5 ${className}`}>
      <div className="image-parent">
        <img className="image-icon" alt="" src={image} />
        <div className="people-inlove-with-dogs-parent">
          <div className="people-inlove-with" style={pEOPLEINLOVEWITHStyle}>
            {pEOPLEINLOVEWITHDOGS}
          </div>
          <div className="last-active-20">Last active 20 minutes ago</div>
        </div>
      </div>
      <div className="view">VIew</div>
    </div>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  pEOPLEINLOVEWITHDOGS: PropTypes.string,

  /** Style props */
  propDisplay: PropTypes.any,
};

export default FrameComponent5;