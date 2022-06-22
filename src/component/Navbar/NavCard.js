import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { OnLogout } from "../../../store/modules/auth";
import ClickOutHandler from "react-onclickout";
import { formatValue } from "../../utils/ApiUtils";
import { Verticals, Cards } from "./verticals";
const NavCard = ({ showNavCard, setShowNavCard }) => {
  // const dispatch = useDispatch();

  const user = JSON.parse(window.localStorage.getItem("userData"));

  const [showCard, setShowCard] = useState(true);
  const [card, setCard] = useState({
    id: 0,
    name: "Care Balance",
    amount: 2000,
    className: "care-balance",
  });

  let Cardtitles = [
    {
      id: 0,
      name: "Reward Balance",
      amount: 2000,
      className: "care-balance",
    },
    {
      id: 1,
      name: "Care Balance",
      amount: 5000,
    },
    {
      id: 2,
      name: "Wallet Balance",
      amount: 0.0,
      className: "woozee-care",
    },
  ];
  const handleCardSelection = (_id) => {
    let result = Cardtitles.find(({ id }) => id === _id);
    setCard(result);
  };

  const handleLogOut = () => {
    // dispatch(OnLogout());
    console.log("hurray");
  };

  const handleDisplayCard = () => {
    setShowCard(!showCard);
  };

  return (
    <ClickOutHandler onClickOut={() => setShowNavCard(false)}>
      {showNavCard && (
        <div className="Navcard-container">
          <div className="Navcard-details">
            <div className="Navcard-details__profile">
              {user ? (
                <img src={user?.userImageURL} width="50" height="50" alt="" />
              ) : (
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/woozeee-d7f6c.appspot.com/o/Money-Matters%2Fuser-icon.png?alt=media&token=061530a3-0cbb-41f8-a604-05023de7e919"
                  width="40"
                  height="40"
                  alt=""
                  roundedCircle
                />
              )}
              <div className="Navcard-details__profile-name fw-bold">
                <div>{user?.userFirstName}</div>
              </div>
            </div>
            <div
              className={`Navcard-details__balance ${
                card.className ? card.className : " "
              }`}
            >
              <div className="Navcard-details__balance-title">
                <div>{card.name}:</div>
                <img
                  src="https://movies.woozeee.com/assets/images/wallets.svg"
                  alt="w"
                />
              </div>
              <div className="Navcard-details__balance-amount">
                <div>N {formatValue(card.amount)}</div>
              </div>
            </div>
          </div>
          <hr style={{ border: "3px solid gray" }} />
          <div className="Navcard-cards">
            <div
              className="Navcard-cards__collapsible finger"
              onClick={handleDisplayCard}
            >
              <p>All cards</p>
              <hr className="mt-1" style={{ border: "1px solid gray" }} />
              <img
                src="https://movies.woozeee.com/assets/images/arrowUp.svg"
                alt="^"
                className={`mb-4 ${showCard ? "open-card" : " "}`}
              />
            </div>
            <div className="Navcard-cards__allCards sc navcard">
              {showCard &&
                Cards?.map((card, _id) => {
                  return (
                    <div
                      key={_id}
                      className="sc"
                      onClick={() => handleCardSelection(_id)}
                      id={_id}
                    >
                      {
                        <img
                          src={card.img}
                          alt="M"
                          width="126px"
                          height="60px"
                          className="sc"
                        />
                      }
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="Navcard-verticals navcard">
            {Verticals?.map((vertical) => {
              return (
                <a href={vertical.url}>
                  <div className="Navcard-verticals__card mb-0 mt-0 finger">
                    {
                      <img
                        src={vertical.img}
                        alt="M"
                        width="30px"
                        height="30px"
                      />
                    }
                    <p className="text-black mt-3">{vertical.name}</p>
                  </div>
                </a>
              );
            })}
          </div>
          <hr style={{ border: "3px solid gray" }} />
          <div className="Navcard-section" onClick={() => handleLogOut()}>
            <div className="Navcard-section__logout finger">
              <img
                src="https://movies.woozeee.com/assets/images/logout.svg"
                alt="Logouticon"
              />
              <p className="mt-3 text-danger fw-bold">Logout</p>
            </div>
            {/* <div className="Navcard-section__logout">
                        <img src="" alt="D" />
                        <p>darkmode</p>
                    </div> */}
          </div>
        </div>
      )}
    </ClickOutHandler>
  );
};
export default NavCard;
