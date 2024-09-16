import FrameComponent3 from "../components/FrameComponent3";
import ProfileContent from "../components/ProfileContent";
import HomeFeedContent from "../components/HomeFeedContent";
import VideoInfo from "../components/VideoInfo";
import FrameComponent4 from "../components/FrameComponent4";
import "./Desktop.css";

const Desktop = () => {
  return (
    <div className="desktop-12">
      <main className="frame-parent">
        <FrameComponent3
          icons="/icons.svg"
          icons1="/icons-1.svg"
          icons2="/icons-2.svg"
          icons3="/icons-3.svg"
          icons4="/icons-4.svg"
        />
        <section className="profile-content-parent">
          <ProfileContent
            image="/image@2x.png"
            icons="/icons-5.svg"
            icons2="/icons-7.svg"
            icons3="/icons-8.svg"
            icons4="/icons-9.svg"
            icons5="/icons-10.svg"
            icons6="/icons-11.svg"
            icons7="/icons-12.svg"
            icons8="/icons-13.svg"
            icons9="/icons-14.svg"
          />
          <div className="home-feed">
            <HomeFeedContent image="/image-1@2x.png" icons="/icons-15.svg" />
            <div className="feed-navigation-content-wrapper">
              <div className="feed-navigation-content">
                <div className="navigation-items">
                  <div className="navigation-container">
                    <div className="primary-navigation">
                      <div className="primary-navigation-items">
                        <img className="icons" alt="" src="/icons-16.svg" />
                        <a className="home">Home</a>
                      </div>
                      <div className="video-navigation">
                        <img className="icons1" alt="" src="/icons-17.svg" />
                        <div className="videos">Videos</div>
                      </div>
                      <div className="primary-navigation-items1">
                        <img className="icons2" alt="" src="/icons-18.svg" />
                        <div className="friends">Friends</div>
                      </div>
                      <div className="primary-navigation-items2">
                        <img className="icons3" alt="" src="/icons-19.svg" />
                        <div className="groups">Groups</div>
                      </div>
                    </div>
                    <div className="navigation-divider" />
                  </div>
                  <div className="live-feed-content-wrapper">
                    <div className="live-feed-content">
                      <div className="live-feed-items">
                        <div className="live-video-item">
                          <div className="live-videos">Live Videos</div>
                          <img className="icons4" alt="" src="/icons-20.svg" />
                        </div>
                        <div className="sort">
                          <a className="sort-by">sort by</a>
                          <img className="icons5" alt="" src="/icons-21.svg" />
                        </div>
                      </div>
                      <div className="live-user">
                        <div className="live-user-content">
                          <div className="live-user-item">
                            <img
                              className="image-icon"
                              alt=""
                              src="/image-2@2x.png"
                            />
                            <div className="live-user-name-and-status">
                              <div className="diana-mackie">Diana Mackie</div>
                              <div className="is-live">IS LIVE</div>
                            </div>
                          </div>
                          <div className="live-video-icons">
                            <img
                              className="icons6"
                              alt=""
                              src="/icons-22.svg"
                            />
                            <img
                              className="icons7"
                              alt=""
                              src="/icons-23.svg"
                            />
                          </div>
                        </div>
                        <div className="first-live-video">
                          <div className="first-live-video-content">
                            <img
                              className="image-icon1"
                              alt=""
                              src="/image-3@2x.png"
                            />
                            <img
                              className="play-icon"
                              loading="lazy"
                              alt=""
                              src="/polygon-1.svg"
                            />
                          </div>
                          <VideoInfo
                            icons="/icons-24.svg"
                            k="50k"
                            k1="50k"
                            prop="10"
                            icons1="/icons-25.svg"
                            icons2="/icons-26.svg"
                            icons3="/icons-27.svg"
                            icons4="/icons-28.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="past-live-feed">
                  <div className="past-live-content">
                    <div className="past-live-item">
                      <div className="past-live-item-container">
                        <div className="past-live-broadcast">
                          <img
                            className="image-icon2"
                            alt=""
                            src="/image-4@2x.png"
                          />
                          <div className="past-live-user">
                            <div className="jason-optimum">Jason Optimum</div>
                            <div className="was-live-2hrs-container">
                              <span className="was-live">{`WAS LIVE  `}</span>
                              <span className="hrs-ago">2hrs ago</span>
                            </div>
                          </div>
                        </div>
                        <div className="live-badge">
                          <img className="icons8" alt="" src="/icons-29.svg" />
                          <img className="icons9" alt="" src="/icons-30.svg" />
                        </div>
                      </div>
                      <div className="live-content">
                        <div className="live-thumbnail">
                          <img
                            className="image-icon3"
                            alt=""
                            src="/image-5@2x.png"
                          />
                          <div className="stream-overlay">
                            <div className="overlay-elements" />
                            <div className="overlay-elements1" />
                          </div>
                        </div>
                        <VideoInfo
                          icons="/icons-31.svg"
                          k="5M"
                          k1="5k"
                          prop="1"
                          icons1="/icons-32.svg"
                          icons2="/icons-33.svg"
                          icons3="/icons-34.svg"
                          icons4="/icons-35.svg"
                          propDisplay="unset"
                          propMinWidth="unset"
                          propDisplay1="inline-block"
                          propMinWidth1="12px"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FrameComponent4
            icons="/icons-36.svg"
            image="/image-6@2x.png"
            image1="/image-7@2x.png"
            icons1="/icons-37.svg"
            image2="/image-8@2x.png"
            image3="/image-9@2x.png"
            image4="/image-10@2x.png"
            image5="/image-11@2x.png"
            image6="/image-12@2x.png"
            image7="/image-13@2x.png"
          />
        </section>
      </main>
    </div>
  );
};

export default Desktop;