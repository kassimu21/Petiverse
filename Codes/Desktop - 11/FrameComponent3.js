import PropTypes from "prop-types";
import "./FrameComponent3.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <header className={`petiverse-parent ${className}`}>
      <a className="petiverse">
        <span>Pet</span>
        <span className="iverse">iverse</span>
      </a>
      <div className="top-right">
        <div className="user-actions">
          <div className="user-actions-icons">
            <img className="icons19" loading="lazy" alt="" src="/icons.svg" />
            <a className="menu2">Menu</a>
          </div>
          <div className="user-actions-icons1">
            <img className="icons20" alt="" src="/icons-1.svg" />
            <a className="notifications1">Notifications</a>
          </div>
          <div className="user-actions-icons2">
            <img className="icons21" alt="" src="/icons-2.svg" />
            <a className="messages1">Messages</a>
          </div>
          <div className="user-actions-icons3">
            <img className="icons22" alt="" src="/icons-3.svg" />
            <a className="profile1">Profile</a>
          </div>
        </div>
        <div className="search">
          <div className="search-bar">
            <img className="icons23" alt="" src="/icons-4.svg" />
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
};

export default FrameComponent3;