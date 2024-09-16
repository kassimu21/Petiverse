import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Post.css";

const Post = ({
  className = "",
  image,
  alexendraAlHimcut,
  thSeptember20241530PM,
  icons,
  icons1,
  justGotJackieFromTheVetSeems,
  image1,
  icons2,
  k,
  k1,
  prop,
  icons3,
  icons4,
  icons5,
  icons6,
  propAlignSelf,
  propDisplay,
  propMinWidth,
  propDisplay1,
  propMinWidth1,
}) => {
  const thSeptember2024Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

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
    <div className={`post3 ${className}`}>
      <div className="post-content1">
        <div className="post-header">
          <img className="image-icon10" alt="" src={image} />
          <div className="post-user">
            <div className="alexendra-al-himcut1">{alexendraAlHimcut}</div>
            <div className="th-september-2024" style={thSeptember2024Style}>
              {thSeptember20241530PM}
            </div>
          </div>
        </div>
        <div className="post-options">
          <img className="icons24" alt="" src={icons} />
          <img className="icons25" alt="" src={icons1} />
        </div>
      </div>
      <div className="post-body">
        <div className="just-got-jackie-from-the-vet-parent">
          <div className="just-got-jackie-container">
            <span>{justGotJackieFromTheVetSeems}</span>
            <span className="see-more2">see more</span>
          </div>
          <img className="image-icon11" alt="" src={image1} />
        </div>
        <div className="post-actions">
          <div className="post-engagements">
            <div className="engagement-count">
              <img className="icons26" alt="" src={icons2} />
              <div className="k">{k}</div>
            </div>
            <div className="engagement-details">
              <div className="engagement-numbers">
                <div className="k1" style={kStyle}>
                  {k1}
                </div>
                <div className="comments">comments</div>
              </div>
              <div className="engagement-numbers1">
                <div className="div" style={divStyle}>
                  {prop}
                </div>
                <a className="shares">shares</a>
              </div>
            </div>
          </div>
          <div className="engagement-divider">
            <div className="engagement-dividers" />
            <div className="engagement-buttons">
              <div className="engagement-options">
                <img className="icons27" alt="" src={icons3} />
                <div className="like">Like</div>
              </div>
              <div className="engagement-options1">
                <img className="icons28" alt="" src={icons4} />
                <div className="comment">Comment</div>
              </div>
              <div className="engagement-options2">
                <img className="icons29" alt="" src={icons5} />
                <div className="repost">Repost</div>
              </div>
              <div className="engagement-options3">
                <img className="icons30" alt="" src={icons6} />
                <div className="share">Share</div>
              </div>
            </div>
            <div className="engagement-dividers1" />
          </div>
        </div>
      </div>
    </div>
  );
};

Post.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  alexendraAlHimcut: PropTypes.string,
  thSeptember20241530PM: PropTypes.string,
  icons: PropTypes.string,
  icons1: PropTypes.string,
  justGotJackieFromTheVetSeems: PropTypes.string,
  image1: PropTypes.string,
  icons2: PropTypes.string,
  k: PropTypes.string,
  k1: PropTypes.string,
  prop: PropTypes.string,
  icons3: PropTypes.string,
  icons4: PropTypes.string,
  icons5: PropTypes.string,
  icons6: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
  propDisplay1: PropTypes.any,
  propMinWidth1: PropTypes.any,
};

export default Post;