import { useMemo } from "react";
import PropTypes from "prop-types";
import "./ProfileContent.css";

const ProfileContent = ({
  className = "",
  image,
  icons,
  icons2,
  icons3,
  icons4,
  icons5,
  icons6,
  icons7,
  icons8,
  icons9,
  propTextDecoration,
  propTextDecoration1,
}) => {
  const friendsStyle = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
    };
  }, [propTextDecoration]);

  const groupsStyle = useMemo(() => {
    return {
      textDecoration: propTextDecoration1,
    };
  }, [propTextDecoration1]);

  return (
    <div className={`profile-content ${className}`}>
      <div className="profile-image-content-parent">
        <div className="profile-image-content">
          <div className="profile-image-and-details">
            <div className="profile-image-and-details-cont">
              <img className="image-icon1" loading="lazy" alt="" src={image} />
              <div className="name-and-profile">
                <div className="tabitha-job">Tabitha Job</div>
                <div className="view-profile">view profile</div>
              </div>
            </div>
            <img className="icons11" alt="" src={icons} />
          </div>
          <div className="profile-navigation">
            <div className="profile-navigation-items">
              <img className="icons12" alt="" />
              <div className="menu1">Menu</div>
            </div>
            <div className="profile-navigation-items1">
              <img className="icons13" alt="" src={icons2} />
              <div className="notifications1">Notifications</div>
            </div>
            <div className="profile-navigation-items2">
              <img className="icons14" alt="" src={icons3} />
              <div className="messages1">Messages</div>
            </div>
            <div className="profile-navigation-items3">
              <img className="icons15" alt="" src={icons4} />
              <div className="saved">Saved</div>
            </div>
            <div className="profile-navigation-items4">
              <img className="icons16" alt="" src={icons5} />
              <div className="favorites">Favorites</div>
            </div>
            <div className="profile-navigation-items5">
              <img className="icons17" alt="" src={icons6} />
              <a className="friends1" style={friendsStyle}>
                Friends
              </a>
            </div>
            <div className="profile-navigation-items6">
              <img className="icons18" alt="" src={icons7} />
              <a className="groups1" style={groupsStyle}>
                Groups
              </a>
            </div>
            <div className="profile-navigation-items7">
              <img className="icons19" alt="" src={icons8} />
              <div className="videos1">videos</div>
            </div>
            <div className="profile-navigation-items8">
              <img className="icons20" alt="" src={icons9} />
              <div className="find-a-vet">Find a Vet</div>
            </div>
          </div>
        </div>
        <div className="post-input-parent">
          <button className="post-input">
            <div className="post">Post</div>
          </button>
          <div className="privacy-terms-and">
            Privacy terms and policy | copyright©| All rights reserved |
            designed by petriverse
          </div>
        </div>
      </div>
    </div>
  );
};

ProfileContent.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  icons: PropTypes.string,
  icons2: PropTypes.string,
  icons3: PropTypes.string,
  icons4: PropTypes.string,
  icons5: PropTypes.string,
  icons6: PropTypes.string,
  icons7: PropTypes.string,
  icons8: PropTypes.string,
  icons9: PropTypes.string,

  /** Style props */
  propTextDecoration: PropTypes.any,
  propTextDecoration1: PropTypes.any,
};

export default ProfileContent;