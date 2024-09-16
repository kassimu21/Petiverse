import PropTypes from "prop-types";
import "./ButtonGroup.css";

const ButtonGroup = ({ className = "" }) => {
  return (
    <div className={`button-group1 ${className}`}>
      <div className="button2">
        <img className="star-icon" alt="" src="/star.svg" />
        <div className="button3">Button</div>
        <img className="x-icon" alt="" src="/x.svg" />
      </div>
      <div className="button4">
        <img className="star-icon1" alt="" src="/star.svg" />
        <div className="create-account1">{`Login `}</div>
        <img className="x-icon1" alt="" src="/x.svg" />
      </div>
    </div>
  );
};

ButtonGroup.propTypes = {
  className: PropTypes.string,
};

export default ButtonGroup;