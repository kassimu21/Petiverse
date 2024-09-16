import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent4.css";

const FrameComponent4 = ({
  className = "",
  icons,
  image,
  image1,
  icons1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  propTextDecoration,
  propTextDecoration1,
}) => {
  const britishEnglishStyle = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
    };
  }, [propTextDecoration]);

  const dianaMackieStyle = useMemo(() => {
    return {
      textDecoration: propTextDecoration1,
    };
  }, [propTextDecoration1]);

  return (
    <div className={`settings-content-parent ${className}`}>
      <div className="settings-content">
        <div className="language-settings">
          <div className="language-option">
            <div className="language-select">
              <a className="preferred-language">Preferred language</a>
              <img className="icons22" alt="" src={icons} />
            </div>
            <a className="british-english" style={britishEnglishStyle}>
              British English
            </a>
          </div>
          <div className="advertisement-settings">
            <div className="advertisments-wrapper">
              <div className="advertisments">Advertisments</div>
            </div>
            <div className="ad-content">
              <div className="ad-feed">
                <div className="ad-item">
                  <div className="puppy-pets-store">
                    Puppy Pets store now opening @ zundi fisher zone 20 3rd
                    December 2024
                  </div>
                  <img className="image-icon3" alt="" src={image} />
                </div>
                <div className="see-more">{`See more >>`}</div>
              </div>
              <div className="ad-feed1">
                <div className="ad-item1">
                  <div className="ad-details">
                    <div className="cap-stone-medical">
                      Cap stone medical center!!!!!!
                    </div>
                    <div className="bring-in-your">
                      Bring in your pets to vets for medical check up
                    </div>
                  </div>
                  <img className="image-icon4" alt="" src={image1} />
                </div>
                <div className="see-more1">{`See more >>`}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="connection-content-wrapper">
        <div className="connection-content">
          <div className="connection-header">
            <div className="connections">Connections</div>
            <img className="icons23" alt="" src={icons1} />
          </div>
          <div className="user-connections">
            <div className="connection-list">
              <img className="image-icon5" alt="" src={image2} />
              <div className="profile-names">
                <div className="alexendra-al-himcut">Alexendra Al-himcut</div>
              </div>
            </div>
            <div className="connection-list1">
              <img className="image-icon6" alt="" src={image3} />
              <div className="mc-hennery-fell-wrapper">
                <div className="mc-hennery-fell">Mc hennery fell</div>
              </div>
            </div>
            <div className="connection-list2">
              <img className="image-icon7" alt="" src={image4} />
              <div className="diana-mackie-wrapper">
                <div className="diana-mackie" style={dianaMackieStyle}>
                  Diana mackie
                </div>
              </div>
            </div>
            <div className="connection-list3">
              <img className="image-icon8" alt="" src={image5} />
              <div className="jason-optimum-wrapper">
                <div className="jason-optimum">Jason optimum</div>
              </div>
            </div>
            <div className="connection-list4">
              <img className="image-icon9" alt="" src={image6} />
              <div className="stone-floxy-wrapper">
                <div className="stone-floxy">Stone floxy</div>
              </div>
            </div>
            <div className="connection-list5">
              <img className="image-icon10" alt="" src={image7} />
              <div className="brenda-maculay-wrapper">
                <div className="brenda-maculay">Brenda maculay</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
  icons: PropTypes.string,
  image: PropTypes.string,
  image1: PropTypes.string,
  icons1: PropTypes.string,
  image2: PropTypes.string,
  image3: PropTypes.string,
  image4: PropTypes.string,
  image5: PropTypes.string,
  image6: PropTypes.string,
  image7: PropTypes.string,

  /** Style props */
  propTextDecoration: PropTypes.any,
  propTextDecoration1: PropTypes.any,
};

export default FrameComponent4;