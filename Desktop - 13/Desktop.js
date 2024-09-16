import FrameComponent3 from "../components/FrameComponent3";
import ProfileContent from "../components/ProfileContent";
import HomeFeedContent from "../components/HomeFeedContent";
import SuggestionsItems from "../components/SuggestionsItems";
import FrameComponent4 from "../components/FrameComponent4";
import "./Desktop.css";

const Desktop = () => {
  return (
    <div className="desktop-13">
      <main className="frame-parent">
        <FrameComponent3
          icons="/icons.svg"
          icons1="/icons-1.svg"
          icons2="/icons-2.svg"
          icons3="/icons-3.svg"
          icons4="/icons-4.svg"
        />
        <section className="frame-group">
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
            propTextDecoration="unset"
            propTextDecoration1="unset"
          />
          <div className="frame-container">
            <HomeFeedContent
              image="/image-1@2x.png"
              icons="/icons-15.svg"
              propMinWidth="unset"
              propHeight="50px"
              propMinHeight="unset"
              propAlignSelf="stretch"
            />
            <div className="frame-wrapper">
              <div className="frame-div">
                <div className="frame-wrapper1">
                  <div className="frame-parent1">
                    <div className="navigation-items-parent">
                      <div className="navigation-items">
                        <img className="icons" alt="" src="/icons-16.svg" />
                        <a className="home">Home</a>
                      </div>
                      <div className="navigation-items1">
                        <input className="icons1" type="checkbox" />
                        <div className="videos">Videos</div>
                      </div>
                      <div className="icons-parent">
                        <img className="icons2" alt="" src="/icons-18.svg" />
                        <div className="friends">Friends</div>
                      </div>
                      <div className="navigation-items2">
                        <img className="icons3" alt="" src="/icons-19.svg" />
                        <div className="groups">Groups</div>
                      </div>
                    </div>
                    <div className="frame-child" />
                  </div>
                </div>
                <div className="frame-parent2">
                  <div className="frame-parent3">
                    <div className="frame-wrapper2">
                      <div className="followers-following-container-wrapper">
                        <div className="followers-following-container">
                          <button className="followers-following-items">
                            <div className="followers">Followers</div>
                          </button>
                          <div className="followers-following-items1">
                            <div className="following">Following</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-wrapper3">
                      <div className="suggestions-items-parent">
                        <SuggestionsItems
                          image="/image-2@2x.png"
                          faithGerry="Faith Gerry"
                          icons="/icons-20.svg"
                          icons1="/icons-21.svg"
                        />
                        <SuggestionsItems
                          image="/image-3@2x.png"
                          faithGerry="Millabel Tomson"
                          icons="/icons-22.svg"
                          icons1="/icons-23.svg"
                          propWidth="unset"
                          propFlex="unset"
                          propPadding="unset"
                          propAlignSelf="unset"
                          propHeight="24px"
                          propWidth1="24px"
                        />
                        <SuggestionsItems
                          image="/image-4@2x.png"
                          faithGerry="Patrick Albert"
                          icons="/icons-24.svg"
                          icons1="/icons-25.svg"
                          propWidth="247px"
                          propFlex="1"
                          propPadding="unset"
                          propAlignSelf="stretch"
                          propHeight="24px"
                          propWidth1="24px"
                        />
                        <SuggestionsItems
                          image="/image-5@2x.png"
                          faithGerry="Fedrick Ayuba"
                          icons="/icons-26.svg"
                          icons1="/icons-27.svg"
                          propWidth="247px"
                          propFlex="1"
                          propPadding="unset"
                          propAlignSelf="stretch"
                          propHeight="24px"
                          propWidth1="24px"
                        />
                        <SuggestionsItems
                          image="/image-6@2x.png"
                          faithGerry="Jude Christopher"
                          icons="/icons-28.svg"
                          icons1="/icons-29.svg"
                          propWidth="unset"
                          propFlex="unset"
                          propPadding="0px 0px 0px 0px"
                          propAlignSelf="unset"
                          propHeight="24px"
                          propWidth1="24px"
                        />
                        <SuggestionsItems
                          image="/image-7@2x.png"
                          faithGerry="Malachi Tania"
                          icons="/icons-30.svg"
                          icons1="/icons-31.svg"
                          propWidth="247px"
                          propFlex="1"
                          propPadding="unset"
                          propAlignSelf="stretch"
                          propHeight="24px"
                          propWidth1="24px"
                        />
                        <SuggestionsItems
                          image="/image-8@2x.png"
                          faithGerry="Godwin Harry"
                          icons="/icons-32.svg"
                          icons1="/icons-33.svg"
                          propWidth="247px"
                          propFlex="1"
                          propPadding="unset"
                          propAlignSelf="stretch"
                          propHeight="24px"
                          propWidth1="24px"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="frame-parent4">
                    <div className="available-people-to-connect-wrapper">
                      <h3 className="available-people-to">
                        Available people to connect
                      </h3>
                    </div>
                    <div className="available-connections-users-co-wrapper">
                      <div className="available-connections-users-co">
                        <SuggestionsItems
                          image="/image-9@2x.png"
                          faithGerry="Malachi Tania"
                          icons="/icons-34.svg"
                          icons1="/icons-35.svg"
                          propWidth="247px"
                          propFlex="1"
                          propPadding="unset"
                          propAlignSelf="stretch"
                          propHeight="30px"
                          propWidth1="30px"
                        />
                        <SuggestionsItems
                          image="/image-10@2x.png"
                          faithGerry="Fedrick Ayuba"
                          icons="/icons-36.svg"
                          icons1="/icons-37.svg"
                          propWidth="247px"
                          propFlex="1"
                          propPadding="unset"
                          propAlignSelf="stretch"
                          propHeight="30px"
                          propWidth1="30px"
                        />
                        <SuggestionsItems
                          image="/image-11@2x.png"
                          faithGerry="Godwin Harry"
                          icons="/icons-38.svg"
                          icons1="/icons-39.svg"
                          propWidth="247px"
                          propFlex="1"
                          propPadding="unset"
                          propAlignSelf="stretch"
                          propHeight="30px"
                          propWidth1="30px"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FrameComponent4
            icons="/icons-40.svg"
            image="/image-12@2x.png"
            image1="/image-13@2x.png"
            icons1="/icons-41.svg"
            image2="/image-14@2x.png"
            image3="/image-15@2x.png"
            image4="/image-16@2x.png"
            image5="/image-17@2x.png"
            image6="/image-18@2x.png"
            image7="/image-19@2x.png"
            propTextDecoration="unset"
            propTextDecoration1="none"
          />
        </section>
      </main>
    </div>
  );
};

export default Desktop;