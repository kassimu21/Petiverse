import FrameComponent3 from "../components/FrameComponent3";
import Post from "../components/Post";
import "./Desktop.css";

const Desktop = () => {
  return (
    <div className="desktop-11">
      <main className="frame-parent">
        <FrameComponent3 />
        <section className="content">
          <div className="profile-and-feed">
            <div className="profile">
              <div className="profile-content">
                <div className="profile-info">
                  <div className="image-parent">
                    <img
                      className="image-icon"
                      loading="lazy"
                      alt=""
                      src="/image@2x.png"
                    />
                    <div className="profile-name">
                      <div className="tabitha-job">Tabitha Job</div>
                      <div className="view-profile">view profile</div>
                    </div>
                  </div>
                  <img className="icons" alt="" src="/icons-5.svg" />
                </div>
                <div className="menu">
                  <div className="menu-items">
                    <img className="icons1" alt="" src="/icons-6.svg" />
                    <div className="menu1">Menu</div>
                  </div>
                  <div className="menu-items1">
                    <img className="icons2" alt="" src="/icons-7.svg" />
                    <div className="notifications">Notifications</div>
                  </div>
                  <div className="menu-items2">
                    <img className="icons3" alt="" src="/icons-8.svg" />
                    <div className="messages">Messages</div>
                  </div>
                  <div className="menu-items3">
                    <img className="icons4" alt="" src="/icons-9.svg" />
                    <div className="saved">Saved</div>
                  </div>
                  <div className="menu-items4">
                    <img className="icons5" alt="" src="/icons-10.svg" />
                    <div className="favorites">Favorites</div>
                  </div>
                  <div className="menu-items5">
                    <img className="icons6" alt="" src="/icons-11.svg" />
                    <div className="friends">Friends</div>
                  </div>
                  <div className="menu-items6">
                    <img className="icons7" alt="" src="/icons-12.svg" />
                    <div className="groups">Groups</div>
                  </div>
                  <div className="menu-items7">
                    <img className="icons8" alt="" src="/icons-13.svg" />
                    <div className="videos">videos</div>
                  </div>
                  <div className="menu-items8">
                    <img className="icons9" alt="" src="/icons-14.svg" />
                    <div className="find-a-vet">Find a Vet</div>
                  </div>
                </div>
              </div>
              <div className="feed">
                <button className="new-post">
                  <div className="post">Post</div>
                </button>
                <div className="privacy-terms-and">
                  Privacy terms and policy | copyright©| All rights reserved |
                  designed by petriverse
                </div>
              </div>
            </div>
          </div>
          <div className="new-post-area-parent">
            <div className="new-post-area">
              <div className="user-post">
                <img className="image-icon1" alt="" src="/image-1@2x.png" />
                <div className="new-post-input">
                  <div className="post-input">
                    <img className="icons10" alt="" src="/icons-15.svg" />
                    <input
                      className="whats-on-your"
                      placeholder="Whats on your mind?"
                      type="text"
                    />
                  </div>
                  <button className="new-post-button">
                    <a className="post1">Post</a>
                  </button>
                </div>
              </div>
            </div>
            <div className="content-navigation">
              <div className="navigation">
                <div className="navigation-content">
                  <div className="navigation-bar">
                    <div className="navigation-items">
                      <div className="home-button">
                        <img className="icons11" alt="" src="/icons-16.svg" />
                        <a className="home">Home</a>
                      </div>
                      <div className="navigation-icons">
                        <input className="icons12" type="checkbox" />
                        <div className="videos1">Videos</div>
                      </div>
                      <div className="navigation-icons1">
                        <img className="icons13" alt="" src="/icons-18.svg" />
                        <div className="friends1">Friends</div>
                      </div>
                      <div className="navigation-icons2">
                        <img className="icons14" alt="" src="/icons-19.svg" />
                        <div className="groups1">Groups</div>
                      </div>
                    </div>
                    <div className="navigation-divider" />
                  </div>
                  <div className="feed-content-wrapper">
                    <div className="feed-content">
                      <div className="feed-posts">
                        <div className="feed-post">
                          <div className="updated">Updated</div>
                          <img className="icons15" alt="" src="/icons-20.svg" />
                        </div>
                        <div className="sort">
                          <div className="sort-by">sort by</div>
                          <img className="icons16" alt="" src="/icons-21.svg" />
                        </div>
                      </div>
                      <Post
                        image="/image-2@2x.png"
                        alexendraAlHimcut="Alexendra Al-himcut"
                        thSeptember20241530PM="20th September 2024 @15:30PM"
                        icons="/icons-22.svg"
                        icons1="/icons-23.svg"
                        justGotJackieFromTheVetSeems="Just got Jackie from the vet, seems like we’ve got a long night ahead becaus... "
                        image1="/image-3@2x.png"
                        icons2="/icons-24.svg"
                        k="50k"
                        k1="50k"
                        prop="10"
                        icons3="/icons-25.svg"
                        icons4="/icons-26.svg"
                        icons5="/icons-27.svg"
                        icons6="/icons-28.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="post2">
                  <div className="post-content">
                    <Post
                      image="/image-4@2x.png"
                      alexendraAlHimcut="Kate Verde-pat"
                      thSeptember20241530PM="15th August 2024 @8:00AM"
                      icons="/icons-29.svg"
                      icons1="/icons-30.svg"
                      justGotJackieFromTheVetSeems="@everyone  My husband on a vacation at los angeles with the...."
                      image1="/image-5@2x.png"
                      icons2="/icons-31.svg"
                      k="5M"
                      k1="5k"
                      prop="1"
                      icons3="/icons-32.svg"
                      icons4="/icons-33.svg"
                      icons5="/icons-34.svg"
                      icons6="/icons-35.svg"
                      propAlignSelf="stretch"
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
          <div className="page-footer">
            <div className="page-footer-inner">
              <div className="language-setting-parent">
                <div className="language-setting">
                  <div className="language-dropdown">
                    <a className="preferred-language">Preferred language</a>
                    <img className="icons17" alt="" src="/icons-36.svg" />
                  </div>
                  <div className="british-english">British English</div>
                </div>
                <div className="ad-container-parent">
                  <div className="ad-container">
                    <div className="advertisments">Advertisments</div>
                  </div>
                  <div className="ad-list">
                    <div className="ad-one">
                      <div className="ad-one-content">
                        <div className="puppy-pets-store">
                          Puppy Pets store now opening @ zundi fisher zone 20
                          3rd December 2024
                        </div>
                        <img
                          className="image-icon2"
                          alt=""
                          src="/image-6@2x.png"
                        />
                      </div>
                      <div className="see-more">{`See more >>`}</div>
                    </div>
                    <div className="ad-two">
                      <div className="ad-two-content">
                        <div className="ad-two-details">
                          <div className="cap-stone-medical">
                            Cap stone medical center!!!!!!
                          </div>
                          <div className="bring-in-your">
                            Bring in your pets to vets for medical check up
                          </div>
                        </div>
                        <img
                          className="image-icon3"
                          alt=""
                          src="/image-7@2x.png"
                        />
                      </div>
                      <div className="see-more1">{`See more >>`}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="connection-container-wrapper">
              <div className="connection-container">
                <div className="connection-heading">
                  <div className="connections">Connections</div>
                  <img className="icons18" alt="" src="/icons-37.svg" />
                </div>
                <div className="connection-profiles">
                  <div className="profile-list">
                    <img className="image-icon4" alt="" src="/image-8@2x.png" />
                    <div className="profile-names">
                      <div className="alexendra-al-himcut">
                        Alexendra Al-himcut
                      </div>
                    </div>
                  </div>
                  <div className="profile-list1">
                    <img className="image-icon5" alt="" src="/image-9@2x.png" />
                    <div className="mc-hennery-fell-wrapper">
                      <div className="mc-hennery-fell">Mc hennery fell</div>
                    </div>
                  </div>
                  <div className="profile-list2">
                    <img
                      className="image-icon6"
                      alt=""
                      src="/image-10@2x.png"
                    />
                    <div className="diana-mackie-wrapper">
                      <a className="diana-mackie">Diana mackie</a>
                    </div>
                  </div>
                  <div className="profile-list3">
                    <img
                      className="image-icon7"
                      alt=""
                      src="/image-11@2x.png"
                    />
                    <div className="jason-optimum-wrapper">
                      <div className="jason-optimum">Jason optimum</div>
                    </div>
                  </div>
                  <div className="profile-list4">
                    <img
                      className="image-icon8"
                      alt=""
                      src="/image-12@2x.png"
                    />
                    <div className="stone-floxy-wrapper">
                      <div className="stone-floxy">Stone floxy</div>
                    </div>
                  </div>
                  <div className="profile-list5">
                    <img
                      className="image-icon9"
                      alt=""
                      src="/image-13@2x.png"
                    />
                    <div className="brenda-maculay-wrapper">
                      <div className="brenda-maculay">Brenda maculay</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Desktop;