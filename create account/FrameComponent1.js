import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <button className={`create-an-account-wrapper ${className}`}>
      <div className="create-an-account1">Create an Account</div>
    </button>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;