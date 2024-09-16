import PropTypes from "prop-types";
import "./ButtonGroup.css";

const ButtonGroup = ({ className = "" }) => {
  return (
    <div className={`button-group2 ${className}`}>
      <div className="button8">
        <img className="star-icon4" alt="" src="/star1.svg" />
        <div className="button9">Button</div>
        <img className="x-icon4" alt="" src="/x1.svg" />
      </div>
      <div className="button10">
        <img className="star-icon5" alt="" src="/star2.svg" />
        <div className="create-account2">{`Login `}</div>
        <img className="x-icon5" alt="" src="/x2.svg" />
      </div>
    </div>
  );
};

ButtonGroup.propTypes = {
  className: PropTypes.string,
};

export default ButtonGroup;