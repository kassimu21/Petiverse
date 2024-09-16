import PropTypes from "prop-types";
import "./FrameComponent6.css";

const FrameComponent6 = ({
  className = "",
  image,
  congratulateShaitimaOnHisBirthd,
  hoursAgo,
  icons,
  icons1,
}) => {
  return (
    <div className={`frame-group ${className}`}>
      <div className="image-parent">
        <img className="image-icon5" alt="" src={image} />
        <div className="congratulate-shaitima-on-his-b-parent">
          <div className="congratulate-shaitima-on">
            {congratulateShaitimaOnHisBirthd}
          </div>
          <div className="hours-ago">{hoursAgo}</div>
        </div>
      </div>
      <div className="icons-parent">
        <img className="icons10" alt="" src={icons} />
        <img className="icons11" alt="" src={icons1} />
      </div>
    </div>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  congratulateShaitimaOnHisBirthd: PropTypes.string,
  hoursAgo: PropTypes.string,
  icons: PropTypes.string,
  icons1: PropTypes.string,
};

export default FrameComponent6;