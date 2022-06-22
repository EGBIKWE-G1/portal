import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import UserAvatar from "react-user-avatar";
import { ReactComponent as Arrowicon } from "./images/arrow.svg";
import { ReactComponent as Card } from "./images/card.svg";
import { ReactComponent as AskDoc } from "./images/askdoc.svg";
import { ReactComponent as AskLaw } from "./images/asklaw.svg";
import { ReactComponent as ArrowwRight } from "./images/rightarrow.svg";
import { useHistory } from "react-router-dom";
import { useState, useEffect, useRef, useContext } from "react";
import { CSSTransition } from "react-transition-group";
import { formatValue, logout } from "../../utils/ApiUtils";
import { capitalize } from "../../utils/ApiConstants";
import { getCurrentlyLogged, walletBalance } from "../../utils/ApiRequests";
import useOutsideClick from "../../hooks/useOutsideClick";
import NavCard from "../Navbar/NavCard";
import { AuthContext } from "../../context/UserContext";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  grow: {
    zIndex: "6 !important",
  },
}));
const Header = (props) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [showNavCard, setShowNavCard] = useState(false);
  const [user, setUser] = useState();
  const [open, setOpen] = useState(false);

  const anchorRef = useRef(null);
  const [profileNav, setProfileNav] = useState(false);
  const [click, setClick] = useState(false);
  // const handleClick = () => setClick(!click);
  const handleClick = () => {
    setShowNavCard(!showNavCard);
    setClick(!click);
  };
  const closeMobileMenu = () => setClick(false);
  const profileNavRef = useRef();
  useOutsideClick(profileNavRef, () => {
    if (profileNav) setProfileNav(false);
  });
  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        setLoading(true);
        const { data } = await getCurrentlyLogged();
        setUser(data.data);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    getCurrentUser();
  }, []);
  return (
    <>
      <header
        style={{ backgroundColor: "#043F7C" }}
        className="tw-hidden sm:tw-hidden md:tw-hidden lg:tw-block"
      >
        <div className="tw-px-12 tw-py-3">
          <div className="main-header">
            <div className="header-logo">
              <img
                src="/assets/images/headerLogo.svg"
                alt="Logo"
                className="tw-w-32"
              />
            </div>
            <div className="search">
              {/* <form className="search-form">
              <input type="text" placeholder="Search verticals, products..." />
              <input type="submit" value="&#x2315;" />
            </form> */}
              <div class="wrap">
                <div class="search">
                  <input
                    type="text"
                    className="searchTerm"
                    placeholder="Search verticals, products..."
                  />
                  <button type="submit" class="searchButton">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="tw-w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>{" "}
                  </button>
                </div>
              </div>
            </div>
            <div className="header-user_details tw-flex tw-items-center  tw-space-x-3 ">
              {props.imgUrl === null ? (
                <UserAvatar size="48" name={capitalize(props.fname)} />
              ) : (
                <div className="header-user_details-img">
                  <img
                    src={props.imgUrl}
                    // src="https://images.unsplash.com/photo-1630520525949-4989e89dbbb5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                    alt="profile"
                    className=" rounded-full"
                  />
                </div>
              )}
              <div className="header-user_details-name tw-text-white tw-text-sm">
                <p>Hello {props.fname} </p>
              </div>
              {/* {click ? (
                <DropdownMenu
                  fname={props.fname}
                  imgUrl={props.imgUrl}
                  user={user}
                  ref={profileNavRef}
                ></DropdownMenu>
              ) : (
                ""
              )} */}
              <DropItem icon={<Arrowicon style={{ width: "1rem" }} />}>
                <DropdownMenu
                  fname={props.fname}
                  imgUrl={props.imgUrl}
                  user={user}
                  ref={profileNavRef}
                  click={click}
                ></DropdownMenu>
              </DropItem>
              {/* <div className="nav-item">
              <img src="/assets/images/arrow.svg" alt="" className="tw-w-4" />
            </div> */}
            </div>
          </div>
        </div>
      </header>
      <header
        style={{ backgroundColor: "#043F7C" }}
        className="tw-block sm:tw-block md:tw-block lg:tw-hidden"
      >
        <div className="tw-px-3 tw-py-2">
          <div className="tw-flex tw-items-center tw-justify-between">
            <div className="tw-flex tw-flex-col tw-space-y-1">
              {props.imgUrl === null ? (
                <UserAvatar size="40" name={props.fname} />
              ) : (
                <div className="header-user_details-img">
                  <img
                    src={props.imgUrl}
                    // src="https://images.unsplash.com/photo-1630520525949-4989e89dbbb5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                    alt="profile"
                    className=" rounded-full tw-w-12 tw-h-12"
                  />
                </div>
              )}
              <div className="header-user_details-name tw-text-white tw-text-sm">
                <p className="tw-text-xs"> Hello {props.fname} </p>
              </div>
            </div>
            <img
              src="/assets/images/wooLogo.svg"
              alt=""
              className="tw-w-32"
              onClick={closeMobileMenu}
            />

            <img
              src={
                click
                  ? "/assets/images/menuicon.svg"
                  : "/assets/images/navdown.svg"
              }
              alt=""
              onClick={handleClick}
            />
          </div>
        </div>
      </header>
      {showNavCard && (
        <NavCard setShowNavCard={setShowNavCard} showNavCard={showNavCard} />
      )}
    </>
  );
};

function DropItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="drop-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </div>
  );
}
function DropdownMenu(props) {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const [loading, setLoading] = useState(false);
  const [wallet, setWallet] = useState();
  const { user } = useContext(AuthContext);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    const history = useHistory();
    return (
      <a
        href="#"
        className="menu-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  // logging out users
  const history = useHistory();
  const Logout = () => {
    logout();
    history.push("/");
  };
  useEffect(() => {
    const getBalance = async (cuid) => {
      try {
        setLoading(true);
        const res = await walletBalance(cuid);
        const balance = res.data[0].Balance.LedgerBalance;
        const RoundedBalance = balance / 100;
        setLoading(false);
        setWallet(RoundedBalance.toString());
        // return balance.toString();
      } catch (error) {
        console.log(error);
        return "0";
      }
    };
    getBalance(user?.accounts[1]?.cifid);
  }, []);
  const [usercredit, setUsercredit] = useState(
    props?.user?.insurrance?.credits
  );
  console.log(props, "credits");
  const handleCareCredits = () => {
    setUsercredit(props.user.insurrance.credits);
  };
  const handleRewardCredits = () => {
    setUsercredit(props.user.rewardCard.credits);
  };
  const handleWalletCredits = () => {
    // setUsercredit(props.user.walletCard.credits);
    if (wallet) {
      setUsercredit(formatValue(wallet));
    } else {
      setUsercredit(0);
    }
  };

  return (
    <div
      className={props.click ? "dropdown-active" : "dropdown"}
      style={{ zIndex: 7 }}
    >
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <div className="header-dropdown">
            <div className="tw-flex tw-items-center tw-space-x-3">
              {props.imgUrl === null ? (
                <UserAvatar size="48" name={props.fname} />
              ) : (
                <div className="header-user_details-img">
                  <img
                    src={props.imgUrl}
                    // src="https://images.unsplash.com/photo-1630520525949-4989e89dbbb5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                    alt="profile"
                    className=" rounded-full"
                  />
                </div>
              )}
              <div className="tw-flex tw-flex-col">
                <h4 className="tw-font-semibold tw-text-sm">{props.fname}</h4>
                <p className="tw-text-xs">Go to Profile</p>
              </div>
            </div>
            <div className="tw-flex tw-flex-col tw-p-3 tw-justify-between tw-text-white header-menu_balance">
              <div className="tw-flex tw-justify-between tw-items-center">
                <p className="tw-text-xs">Balance:</p>
                <img src="/assets/images/wallet.png" alt="" />
              </div>
              <p> N {formatValue(usercredit)}</p>
            </div>
          </div>

          <div className="tw-h-2 tw-my-4 divider"></div>
          <div className="tw-flex tw-space-x-3 hide-scrollbar tw-h-24">
            <img
              src="/assets/images/woozeeecardblue.png"
              alt=""
              onClick={handleCareCredits}
              className="tw-cursor-pointer"
            />
            <img
              src="/assets/images/woozeeecardred.png"
              alt=""
              onClick={handleWalletCredits}
              className="tw-cursor-pointer"
            />
            <img
              src="/assets/images/woozeecardblack.png"
              alt=""
              onClick={handleRewardCredits}
              className="tw-cursor-pointer"
            />
          </div>

          <div className="tw-overflow-y-auto tw-h-64">
            <div className="tw-flex tw-items-center tw-justify-between tw-mt-2 ">
              <div className="tw-space-x-2 tw-flex tw-items-center ">
                <img
                  src="/assets/images/billsicon.png"
                  alt="bills"
                  className="tw-w-8"
                />
                <p className="tw-text-sm tw-font-semibold">Pay a Bill</p>
              </div>
              <svg
                className="tw-w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "#C4C4C4" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
            </div>
            <div className="tw-flex tw-flex-col tw-gap-4 tw-justify-start tw-pl-2 tw-my-4">
              <div className="tw-flex tw-space-x-3 tw-items-center ">
                <img
                  src="/assets/images/mobile topup.svg"
                  alt="mobile"
                  className="tw-justify-start"
                  style={{ width: "1.25rem" }}
                />
                <p className="tw-text-xs">Pay Electricity</p>
              </div>
              <div className="tw-flex tw-space-x-3 tw-items-center">
                <img
                  src="/assets/images/electricity.svg"
                  alt="mobile"
                  className="tw-justify-start"
                  style={{ marginLeft: "-.3rem" }}
                />
                <p className="tw-text-xs">Buy Airtime</p>
              </div>
              <div className="tw-flex tw-space-x-3 tw-items-center">
                <img
                  src="/assets/images/data topup.svg"
                  alt="mobile"
                  className="tw-justify-start"
                  style={{ width: "1.25rem" }}
                />
                <p className="tw-text-xs">Pay Electricity</p>
              </div>
              <div className="tw-flex tw-space-x-3 tw-items-center">
                <img
                  src="/assets/images/cable tv.svg"
                  alt="mobile"
                  className="tw-justify-start"
                  style={{ width: "1.25rem" }}
                />
                <p className="tw-text-xs">Pay DSTV</p>
              </div>
            </div>
            {/* <DropdownItem
            // leftIcon={<CogIcon />}
            // rightIcon={<ChevronIcon />}
            goToMenu="settings"
          >
            Settings
          </DropdownItem> */}
            <DropdownItem
              leftIcon={<Card />}
              rightIcon={
                <svg
                  className="tw-w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ color: "#C4C4C4" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              }
              goToMenu="getaloan"
            >
              Get a Loan
            </DropdownItem>
            <DropdownItem
              leftIcon={<AskDoc />}
              rightIcon={
                <svg
                  className="tw-w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ color: "#C4C4C4" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              }
              goToMenu="getaloan"
            >
              Consult a Doc
            </DropdownItem>
            <DropdownItem
              leftIcon={<AskLaw />}
              rightIcon={
                <svg
                  className="tw-w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ color: "#C4C4C4" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              }
              goToMenu="getaloan"
            >
              Consult a Lawyer
            </DropdownItem>
          </div>
          <div className="tw-h-2 tw-my-4 divider"></div>
          <div
            className="tw-flex tw-justify-between tw-items center tw-cursor-pointer"
            onClick={() => Logout()}
          >
            <div className="tw-flex tw-items-center tw-space-x-2">
              <img
                src="/assets/images/logout.svg"
                alt="logout"
                className="tw-w-6"
              />
              <p className="tw-text-xs"> Logout</p>
            </div>
            <div className="tw-flex tw-items-center tw-pace-x-3">
              <p className="tw-text-xs">Darkmode</p>
            </div>
          </div>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "getaloan"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem
            goToMenu="main"
            leftIcon={
              <svg
                style={{ width: "1.2rem", color: "#C4C4C4" }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            }
          >
            <h2>Back</h2>
          </DropdownItem>
          <DropdownItem leftIcon="🦘">Fees</DropdownItem>
          <DropdownItem leftIcon="🦘">Buy a Phone</DropdownItem>
          <DropdownItem leftIcon="🦘">Fund Wallet</DropdownItem>
          <DropdownItem leftIcon="🦘">Take a trip</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}
export default Header;
