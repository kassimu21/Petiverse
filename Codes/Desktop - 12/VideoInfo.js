import { useMemo } from "react";
import PropTypes from "prop-types";
import "./VideoInfo.css";

const VideoInfo = ({
  className = "",
  icons,
  k,
  k1,
  prop,
  icons1,
  icons2,
  icons3,
  icons4,
  propDisplay,
  propMinWidth,
  propDisplay1,
  propMinWidth1,
}) => {
  const kStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  const divStyle = useMemo(() => {
    return {
      display: propDisplay1,
      minWidth: propMinWidth1,
    };
  }, [propDisplay1, propMinWidth1]);

  return (
    <div className={`video-info ${className}`}>
      <div className="video-stats">
        <div className="views">
          <img className="icons21" alt="" src={icons} />
          <div className="k">{k}</div>
        </div>
        <div className="engagement">
          <div className="engagement-count">
            <div className="k1" style={kStyle}>
              {k1}
            </div>
            <div className="comments">comments</div>
          </div>
          <div className="engagement-count1">
            <div className="div" style={divStyle}>
              {prop}
            </div>
            <div className="shares">shares</div>
          </div>
        </div>
      </div>
      <div className="actions-divider">
        <div className="actions-divider-child" />
        <div className="video-actions">
          <div className="action-items">
            <img className="icons22" alt="" src={icons1} />
            <div className="like">Like</div>
          </div>
          <div className="action-items1">
            <img className="icons23" alt="" src={icons2} />
            <div className="comment">Comment</div>
          </div>
          <div className="action-items2">
            <img className="icons24" alt="" src={icons3} />
            <div className="repost">Repost</div>
          </div>
          <div className="action-items3">
            <img className="icons25" alt="" src={icons4} />
            <div className="share">Share</div>
          </div>
        </div>
        <div className="actions-divider-item" />
      </div>
    </div>
  );
};

VideoInfo.propTypes = {
  className: PropTypes.string,
  icons: PropTypes.string,
  k: PropTypes.string,
  k1: PropTypes.string,
  prop: PropTypes.string,
  icons1: PropTypes.string,
  icons2: PropTypes.string,
  icons3: PropTypes.string,
  icons4: PropTypes.string,

  /** Style props */
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
  propDisplay1: PropTypes.any,
  propMinWidth1: PropTypes.any,
};

export default VideoInfo;