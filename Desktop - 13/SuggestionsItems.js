import { useMemo } from "react";
import PropTypes from "prop-types";
import "./SuggestionsItems.css";

const SuggestionsItems = ({
  className = "",
  image,
  faithGerry,
  icons,
  icons1,
  propWidth,
  propFlex,
  propPadding,
  propAlignSelf,
  propHeight,
  propWidth1,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const frameDiv1Style = useMemo(() => {
    return {
      flex: propFlex,
      padding: propPadding,
    };
  }, [propFlex, propPadding]);

  const faithGerryStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const iconsStyle = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth1,
    };
  }, [propHeight, propWidth1]);

  return (
    <div className={`suggestions-items ${className}`}>
      <div className="image-parent" style={frameDivStyle}>
        <img className="image-icon" alt="" src={image} />
        <div className="faith-gerry-wrapper" style={frameDiv1Style}>
          <div className="faith-gerry" style={faithGerryStyle}>
            {faithGerry}
          </div>
        </div>
      </div>
      <div className="suggestion-user-action-icons-l">
        <img className="icons4" alt="" src={icons} style={iconsStyle} />
        <img className="icons5" alt="" src={icons1} />
      </div>
    </div>
  );
};

SuggestionsItems.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  faithGerry: PropTypes.string,
  icons: PropTypes.string,
  icons1: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propFlex: PropTypes.any,
  propPadding: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propHeight: PropTypes.any,
  propWidth1: PropTypes.any,
};

export default SuggestionsItems;