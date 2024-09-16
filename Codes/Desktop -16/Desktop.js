import FrameComponent3 from "../components/FrameComponent3";
import UserContentNotification from "../components/UserContentNotification";
import FrameComponent6 from "../components/FrameComponent6";
import "./Desktop.css";

const Desktop = () => {
  return (
    <div className="desktop-16">
      <main className="frame-parent">
        <FrameComponent3
          icons="/icons.svg"
          icons1="/icons-1.svg"
          icons2="/icons-2.svg"
          icons3="/icons-3.svg"
          icons4="/icons-4.svg"
          notificationsColor="#a02525"
        />
        <section className="bottom-bar">
          <div className="bottom-content">
            <div className="notification-settings">
              <div className="settings-labels">
                <h2 className="manage-all-your">
                  Manage all your Notifications
                </h2>
                <h3 className="view-settings">view settings</h3>
              </div>
            </div>
          </div>
          <div className="notifications-content">
            <div className="notification-list">
              <div className="notification-items">
                <div className="notification-item-container">
                  <div className="notification-item">
                    <div className="item-content">
                      <div className="notification-header">
                        <a className="notifications">Notifications</a>
                        <img className="icons" alt="" src="/icons-5.svg" />
                      </div>
                    </div>
                    <div className="divider" />
                  </div>
                  <div className="recent-notifications">
                    <div className="recent-items">
                      <div className="recent-item">
                        <img className="icons1" alt="" src="/icons-6.svg" />
                        <input
                          className="notifications1"
                          placeholder="Notifications"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="notification-details">
                      <div className="detail-container">
                        <div className="details">
                          <div className="notification-content">
                            <div className="recent-activity">
                              <div className="recent-header">
                                <a className="recents">Recents</a>
                                <img
                                  className="icons2"
                                  alt=""
                                  src="/icons-7.svg"
                                />
                              </div>
                            </div>
                            <div className="user-actions-notification">
                              <UserContentNotification
                                image="/image@2x.png"
                                alexendraAlHimcut="Alexendra Al-himcut"
                                commentedOn=" commented on "
                                kamilsSandra="Kamil’s sandra "
                                postingExcitingCongratulation=" posting:  Exciting, congratulations"
                                minutesAgo="20 minutes ago"
                                icons="/icons-8.svg"
                                icons1="/icons-9.svg"
                              />
                              <UserContentNotification
                                image="/image-1@2x.png"
                                alexendraAlHimcut="Fedrick Laman"
                                commentedOn=" commented on "
                                kamilsSandra="crowdy pose "
                                postingExcitingCongratulation=" posting:  Intrested, sending a DM now"
                                minutesAgo="10 minutes ago"
                                icons="/icons-10.svg"
                                icons1="/icons-11.svg"
                              />
                              <div className="user-image-notification">
                                <div className="user-content-notification">
                                  <img
                                    className="image-icon"
                                    alt=""
                                    src="/image-2@2x.png"
                                  />
                                  <div className="mosh-hamdi-invited-you-to-foll-parent">
                                    <div className="mosh-hamdi-invited-container">
                                      <span className="mosh-hamdi">
                                        Mosh hamdi
                                      </span>
                                      <span>
                                        {" "}
                                        invited you to follow his page on The
                                        gent..
                                      </span>
                                    </div>
                                    <div className="minutes-ago">
                                      45minutes ago
                                    </div>
                                  </div>
                                </div>
                                <div className="action-icons">
                                  <img
                                    className="icons3"
                                    alt=""
                                    src="/icons-12.svg"
                                  />
                                  <img
                                    className="icons4"
                                    alt=""
                                    src="/icons-13.svg"
                                  />
                                </div>
                              </div>
                              <div className="user-image-notification1">
                                <div className="user-content-notification1">
                                  <img
                                    className="image-icon1"
                                    alt=""
                                    src="/image-3@2x.png"
                                  />
                                  <div className="oates-makinde-has-was-live-parent">
                                    <div className="oates-makinde-has-container">
                                      <span>{`Oates Makinde has `}</span>
                                      <span className="was-live">Was LIVE</span>
                                    </div>
                                    <div className="hour-ago">1 hour ago</div>
                                  </div>
                                </div>
                                <div className="action-icons1">
                                  <img
                                    className="icons5"
                                    alt=""
                                    src="/icons-14.svg"
                                  />
                                  <img
                                    className="icons6"
                                    alt=""
                                    src="/icons-15.svg"
                                  />
                                </div>
                              </div>
                              <UserContentNotification
                                image="/image-4@2x.png"
                                alexendraAlHimcut="Pretty donland "
                                commentedOn="commented on "
                                kamilsSandra="Kamil’s sandra "
                                postingExcitingCongratulation=" posting:  Exciting, congratulations"
                                minutesAgo="2 hours ago"
                                icons="/icons-16.svg"
                                icons1="/icons-17.svg"
                              />
                            </div>
                            <div className="user-actions-notification1">
                              <UserContentNotification
                                image="/image-5@2x.png"
                                alexendraAlHimcut="Alexendra Al-himcut"
                                commentedOn=" commented on "
                                kamilsSandra="Kamil’s sandra "
                                postingExcitingCongratulation=" posting:  Exciting, congratulations"
                                minutesAgo="2hrs 20mins ago"
                                icons="/icons-18.svg"
                                icons1="/icons-19.svg"
                              />
                              <UserContentNotification
                                image="/image-6@2x.png"
                                alexendraAlHimcut="Al-himcut Ali pranda"
                                commentedOn=" commented on "
                                kamilsSandra="Kamil’s sandra "
                                postingExcitingCongratulation=" posting:  Exciting, congratulations"
                                minutesAgo="3 hours ago"
                                icons="/icons-20.svg"
                                icons1="/icons-21.svg"
                              />
                              <FrameComponent6
                                image="/image-7@2x.png"
                                congratulateShaitimaOnHisBirthd="Congratulate Shaitima on his birthday today!!!"
                                hoursAgo="4 hours ago"
                                icons="/icons-22.svg"
                                icons1="/icons-23.svg"
                              />
                              <FrameComponent6
                                image="/image-8@2x.png"
                                congratulateShaitimaOnHisBirthd="Bin-ladin Attempted to Log in your account"
                                hoursAgo="4hrs 30mins ago"
                                icons="/icons-24.svg"
                                icons1="/icons-25.svg"
                              />
                              <FrameComponent6
                                image="/image-9@2x.png"
                                congratulateShaitimaOnHisBirthd="Jathropha was missing through out last weel..."
                                hoursAgo="5 hours ago"
                                icons="/icons-26.svg"
                                icons1="/icons-27.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="language-and-ads">
            <div className="language-and-content">
              <div className="language">
                <div className="language-options">
                  <div className="language-setting">
                    <a className="preferred-language">Preferred language</a>
                    <img className="icons7" alt="" src="/icons-28.svg" />
                  </div>
                  <div className="british-english">British English</div>
                </div>
                <div className="advertisement">
                  <div className="ad-content">
                    <a className="advertisments">Advertisments</a>
                  </div>
                  <div className="pet-ads-parent">
                    <div className="pet-ads">
                      <div className="medical-ad">
                        <div className="medical-ad-content">
                          <div className="cap-stone-medical">
                            Cap stone medical center!!!!!!
                          </div>
                          <div className="bring-in-your">
                            Bring in your pets to vets for medical check up
                          </div>
                        </div>
                        <img
                          className="image-icon2"
                          alt=""
                          src="/image-10@2x.png"
                        />
                      </div>
                      <div className="see-more">{`See more >>`}</div>
                    </div>
                    <div className="store-ad">
                      <div className="store-ad-content">
                        <div className="puppy-pets-store">
                          Puppy Pets store now opening @ zundi fisher zone 20
                          3rd December 2024
                        </div>
                        <img
                          className="image-icon3"
                          alt=""
                          src="/image-11@2x.png"
                        />
                      </div>
                      <div className="see-more1">{`See more >>`}</div>
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