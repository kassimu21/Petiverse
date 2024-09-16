import FrameComponent3 from "../components/FrameComponent3";
import ProfileContent from "../components/ProfileContent";
import HomeFeedContent from "../components/HomeFeedContent";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import "./Desktop.css";

const Desktop = () => {
  return (
    <div className="desktop-15">
      <main className="frame-parent">
        <FrameComponent3
          icons="/icons.svg"
          icons1="/icons-1.svg"
          icons2="/icons-2.svg"
          icons3="/icons-3.svg"
          icons4="/icons-4.svg"
        />
        <section className="left-sidebar">
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
            propTextDecoration="none"
            propTextDecoration1="none"
          />
          <div className="center-feed">
            <HomeFeedContent
              image="/image-1@2x.png"
              icons="/icons-15.svg"
              propMinWidth="414px"
              propHeight="unset"
              propMinHeight="50px"
              propAlignSelf="unset"
            />
            <div className="bottom-nav">
              <div className="nav-items">
                <div className="nav-content">
                  <div className="navigation">
                    <div className="home-video-friend-icons-parent">
                      <div className="home-video-friend-icons">
                        <img className="icons" alt="" src="/icons-16.svg" />
                        <a className="home">Home</a>
                      </div>
                      <div className="home-video-friend-icons1">
                        <input className="icons1" type="checkbox" />
                        <div className="videos">Videos</div>
                      </div>
                      <div className="home-video-friend-icons2">
                        <img className="icons2" alt="" src="/icons-18.svg" />
                        <div className="friends">Friends</div>
                      </div>
                      <div className="icons-parent">
                        <img className="icons3" alt="" src="/icons-19.svg" />
                        <div className="groups">Groups</div>
                      </div>
                    </div>
                    <div className="nav-divider" />
                  </div>
                  <div className="frame-group">
                    <div className="frame-container">
                      <div className="icons-group">
                        <img className="icons4" alt="" src="/icons-20.svg" />
                        <input
                          className="search-for-group"
                          placeholder="Search for Group"
                          type="text"
                        />
                      </div>
                      <button className="icons-container">
                        <img className="icons5" alt="" src="/icons-21.svg" />
                        <div className="create-groups">Create Groups</div>
                      </button>
                    </div>
                    <div className="frame-div">
                      <div className="frame-wrapper">
                        <div className="frame-wrapper1">
                          <div className="frame-parent1">
                            <div className="manage-label-wrapper">
                              <div className="manage-label">
                                <div className="groups-you-manage">
                                  Groups you manage
                                </div>
                                <img
                                  className="icons6"
                                  alt=""
                                  src="/icons-22.svg"
                                />
                              </div>
                            </div>
                            <div className="frame-parent2">
                              <FrameComponent5
                                image="/image-2@2x.png"
                                pEOPLEINLOVEWITHDOGS="PEOPLE INLOVE WITH DOGS"
                              />
                              <FrameComponent5
                                image="/image-3@2x.png"
                                pEOPLEINLOVEWITHDOGS="SUMMER PETS VACATION"
                                propDisplay="unset"
                              />
                              <FrameComponent5
                                image="/image-4@2x.png"
                                pEOPLEINLOVEWITHDOGS="WE ALL ARE ONE"
                                propDisplay="unset"
                              />
                              <FrameComponent5
                                image="/image-5@2x.png"
                                pEOPLEINLOVEWITHDOGS="TOP GUN’S FOR PET LOVERS"
                                propDisplay="inline-block"
                              />
                              <FrameComponent5
                                image="/image-6@2x.png"
                                pEOPLEINLOVEWITHDOGS="PRETTY LITTLE PIZZLES"
                                propDisplay="unset"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="frame-parent3">
                        <div className="frame-wrapper2">
                          <div className="groups-you-follow-parent">
                            <div className="groups-you-follow">
                              Groups you Follow
                            </div>
                            <img
                              className="icons7"
                              alt=""
                              src="/icons-23.svg"
                            />
                          </div>
                        </div>
                        <div className="frame-parent4">
                          <FrameComponent5
                            image="/image-7@2x.png"
                            pEOPLEINLOVEWITHDOGS="PRETTY LITTLE PIZZLES"
                            propDisplay="unset"
                          />
                          <FrameComponent5
                            image="/image-8@2x.png"
                            pEOPLEINLOVEWITHDOGS="WE ALL ARE ONE"
                            propDisplay="unset"
                          />
                          <FrameComponent5
                            image="/image-9@2x.png"
                            pEOPLEINLOVEWITHDOGS="TOP GUN’S FOR PET LOVERS"
                            propDisplay="inline-block"
                          />
                          <FrameComponent5
                            image="/image-10@2x.png"
                            pEOPLEINLOVEWITHDOGS="SUMMER PETS VACATION"
                            propDisplay="unset"
                          />
                          <FrameComponent5
                            image="/image-11@2x.png"
                            pEOPLEINLOVEWITHDOGS="PEOPLE INLOVE WITH DOGS"
                            propDisplay="inline-block"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FrameComponent4
            icons="/icons-24.svg"
            image="/image-12@2x.png"
            image1="/image-13@2x.png"
            icons1="/icons-25.svg"
            image2="/image-14@2x.png"
            image3="/image-15@2x.png"
            image4="/image-16@2x.png"
            image5="/image-17@2x.png"
            image6="/image-18@2x.png"
            image7="/image-19@2x.png"
            propTextDecoration="none"
            propTextDecoration1="unset"
          />
        </section>
      </main>
    </div>
  );
};

export default Desktop;