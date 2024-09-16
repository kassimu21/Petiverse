import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({
  className = "",
  icon = false,
  frameDivBackgroundColor,
  frameDivAlignSelf,
  frameDivBorder,
  button,
  icons,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      backgroundColor: frameDivBackgroundColor,
      alignSelf: frameDivAlignSelf,
      border: frameDivBorder,
    };
  }, [frameDivBackgroundColor, frameDivAlignSelf, frameDivBorder]);

  return (
    <div className={`button-parent ${className}`} style={frameDivStyle}>
      <div className="button">{button}</div>
      {icon && <img className="icons" alt="" src={icons} />}
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.bool,
  button: PropTypes.string,
  icons: PropTypes.string,

  /** Style props */
  frameDivBackgroundColor: PropTypes.any,
  frameDivAlignSelf: PropTypes.any,
  frameDivBorder: PropTypes.any,
};

export default FrameComponent2;