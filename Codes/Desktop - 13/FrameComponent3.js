import PropTypes from "prop-types";
import "./FrameComponent3.css";

const FrameComponent3 = ({
  className = "",
  icons,
  icons1,
  icons2,
  icons3,
  icons4,
}) => {
  return (
    <header className={`petiverse-parent ${className}`}>
      <a className="petiverse">
        <span>Pet</span>
        <span className="iverse">iverse</span>
      </a>
      <div className="top-right">
        <div className="user-actions">
          <div className="user-actions-icons">
            <img className="icons6" loading="lazy" alt="" src={icons} />
            <a className="menu">Menu</a>
          </div>
          <div className="user-actions-icons1">
            <img className="icons7" alt="" src={icons1} />
            <a className="notifications">Notifications</a>
          </div>
          <div className="user-actions-icons2">
            <img className="icons8" alt="" src={icons2} />
            <a className="messages">Messages</a>
          </div>
          <div className="user-actions-icons3">
            <img className="icons9" alt="" src={icons3} />
            <a className="profile">Profile</a>
          </div>
        </div>
        <div className="search">
          <div className="search-bar">
            <img className="icons10" alt="" src={icons4} />
            <input
              className="search-petiverse"
              placeholder="Search Petiverse"
              type="text"
            />
          </div>
          <div className="logout-button">
            <a className="log-out">Log out</a>
          </div>
        </div>
      </div>
    </header>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
  icons: PropTypes.string,
  icons1: PropTypes.string,
  icons2: PropTypes.string,
  icons3: PropTypes.string,
  icons4: PropTypes.string,
};

export default FrameComponent3;