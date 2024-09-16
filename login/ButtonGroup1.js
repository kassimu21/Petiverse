import PropTypes from "prop-types";
import "./ButtonGroup1.css";

const ButtonGroup1 = ({ className = "" }) => {
  return (
    <div className={`button-group1 ${className}`}>
      <div className="button3">
        <img className="star-icon2" alt="" src="/star.svg" />
        <div className="button4">Button</div>
        <img className="x-icon2" alt="" src="/x.svg" />
      </div>
      <div className="button5">
        <img className="star-icon3" alt="" src="/star.svg" />
        <div className="login1">Login</div>
        <img className="x-icon3" alt="" src="/x.svg" />
      </div>
    </div>
  );
};

ButtonGroup1.propTypes = {
  className: PropTypes.string,
};

export default ButtonGroup1;