import { useMemo } from "react";
import PropTypes from "prop-types";
import "./HomeFeedContent.css";

const HomeFeedContent = ({
  className = "",
  image,
  icons,
  propMinWidth,
  propHeight,
  propMinHeight,
  propAlignSelf,
}) => {
  const statusInputContentStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
      height: propHeight,
    };
  }, [propMinWidth, propHeight]);

  const frameDiv2Style = useMemo(() => {
    return {
      minHeight: propMinHeight,
      alignSelf: propAlignSelf,
    };
  }, [propMinHeight, propAlignSelf]);

  return (
    <div className={`home-feed-content ${className}`}>
      <div className="image-group">
        <img className="image-icon2" alt="" src={image} />
        <div className="status-input-content" style={statusInputContentStyle}>
          <div className="icons-group" style={frameDiv2Style}>
            <img className="icons21" alt="" src={icons} />
            <input
              className="whats-on-your"
              placeholder="Whats on your mind?"
              type="text"
            />
          </div>
          <button className="post-wrapper">
            <a className="post1">Post</a>
          </button>
        </div>
      </div>
    </div>
  );
};

HomeFeedContent.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  icons: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
  propHeight: PropTypes.any,
  propMinHeight: PropTypes.any,
  propAlignSelf: PropTypes.any,
};

export default HomeFeedContent;