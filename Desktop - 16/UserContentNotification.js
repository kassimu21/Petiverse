import PropTypes from "prop-types";
import "./UserContentNotification.css";

const UserContentNotification = ({
  className = "",
  image,
  alexendraAlHimcut,
  commentedOn,
  kamilsSandra,
  postingExcitingCongratulation,
  minutesAgo,
  icons,
  icons1,
}) => {
  return (
    <div className={`user-content-notification2 ${className}`}>
      <div className="user-image-notification2">
        <img className="image-icon4" loading="lazy" alt="" src={image} />
        <div className="alexendra-al-himcut-commented-parent">
          <div className="alexendra-al-himcut-commented-container">
            <span className="alexendra-al-himcut">{alexendraAlHimcut}</span>
            <span>{commentedOn}</span>
            <span className="kamils-sandra">{kamilsSandra}</span>
            <span className="posting-exciting">
              {postingExcitingCongratulation}
            </span>
          </div>
          <div className="minutes-ago1">{minutesAgo}</div>
        </div>
      </div>
      <div className="action-icons2">
        <img className="icons8" alt="" src={icons} />
        <img className="icons9" alt="" src={icons1} />
      </div>
    </div>
  );
};

UserContentNotification.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  alexendraAlHimcut: PropTypes.string,
  commentedOn: PropTypes.string,
  kamilsSandra: PropTypes.string,
  postingExcitingCongratulation: PropTypes.string,
  minutesAgo: PropTypes.string,
  icons: PropTypes.string,
  icons1: PropTypes.string,
};

export default UserContentNotification;