import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineHome } from "react-icons/ai";
import React, { useState } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { Menu, MenuItem } from "@material-ui/core";
// import { useDispatch } from "react-redux";
import NavCard from "./NavCard";

// end

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    // '&:focus': {
    //   backgroundColor: theme.palette.primary.main,
    //   '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
    //     color: theme.palette.common.white,
    //   },
    // },
  },
}))(MenuItem);

export const AppNavbar = ({ LogOut }) => {
  // const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);
  const [loanmodalShow, setLoanModalShow] = useState(false);
  const [fixedmodalShow, setFixedModalShow] = useState(false);
  const [mutualmodalShow, setMutualModalShow] = useState(false);

  const [showNavCard, setShowNavCard] = useState(false);
  // const showNavCardREf = useRef();

  const [anchorEl, setAnchorEl] = useState(null);

  // const userName = axios.Auth.currentUserDetails();
  // let userName = "";

  const userName = JSON.parse(window.localStorage.getItem("userData"));
  const userImage = JSON.parse(window.localStorage.getItem("userData"));

  const handleClick = () => {
    setShowNavCard(!showNavCard);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const togglehamburger = () => {
    var x = document.getElementById("mobile-menu");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  };

  const [click, setClick] = useState(false);
  const handleHamburgerClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar-collapse navbar nav-web navbar-mobile">
        <div className="d-flex align-items-center">
          <a href="https://www.woozeee.com/home">
            <div style={{ margin: "auto 0" }}>
              <img
                src="https://www.woozeee.com/assets/images/headerLogo.svg"
                width="150"
                //   height="auto"
                alt=""
              />
            </div>
          </a>
          <Link to="/">
            <AiOutlineHome
              style={{ fontSize: "1.5rem", marginLeft: "1rem", color: "white" }}
            />
          </Link>
        </div>
        {/* <ul className={click ? 'navv-menu active list-unstyled align-items-center justify-content-between py-2 my-n5' : 'nav-menu list-unstyled d-flex justify-content-between align-items-center mb-0'}>
          <li className=" nav-item modal-link" id="money-matter">
            <Link to="/" >
              <AiOutlineHome style={{ fontSize: "1.5rem" }} />
            </Link>
          </li>
          <li
            className="nav-item modal-link"
            id="savings"
            onClick={() => { setModalShow(true); closeMobileMenu() }}>

            <a href="/#savings">Savings</a>
          </li>
          <li
            className="nav-item modal-link"
            id="loan"
            onClick={() => { setLoanModalShow(true); closeMobileMenu() }}
          >
            <a href="/#loan"> Loan</a>
          </li>
          <li
            className="nav-item modal-link"
            id="fixed-deposit"
            onClick={() => {
              setFixedModalShow(true); closeMobileMenu()
            }}
          >
            <a href="/#fixed-deposit">Fixed Deposit</a>
          </li>
          <li className="modal-link" id="insurance">
            <Link to="/insurancetype">Insurance</Link>
          </li>

          <li
            className="modal-link"
            id="mutual-funds"
            onClick={() => {
              setMutualModalShow(true); closeMobileMenu()
            }}
          >
            <a href="#mutual-funds">Mutual Funds</a>
          </li>
          <li className="modal-link" id="equity-trading">
            <a href="#equity-trading">Equity Trading</a>
          </li>
          <li className="modal-link" id="wallet">
            <a href="#wallet">Wallet</a>
          </li>
        </ul> */}
        <div className="navbar-details">
          {/* <div className="notification">
            <IoMdNotificationsOutline style={{ fontSize: "2rem" }} />
          </div> */}

          <div className="profile img-fluid">
            {userImage ? (
              <Image src={userName?.userImageURL} alt="" roundedCircle />
            ) : (
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/woozeee-d7f6c.appspot.com/o/Money-Matters%2Fuser-icon.png?alt=media&token=061530a3-0cbb-41f8-a604-05023de7e919"
                width="40"
                height="40"
                alt=""
                roundedCircle
              />
            )}
          </div>
          <div className="user d-flex flex-wrap">
            <h6 className="mb-0 text-white">
              Hi, <span>{userName?.userFirstName}</span>
            </h6>
          </div>
          {/* start */}
          <div className="divider" style={{ background: "#c4c4c43d" }}></div>
          {/* <div> */}

          <div onClick={handleClick}>
            <img
              className="m-1"
              src="/asset/img/arrowd.svg"
              alt=""
              width="17px"
            />
          </div>
          {/* <div className="hamburger" onClick={handleHamburgerClick}>
            {click ? (
              <img
                className="m-1 rotate"
                src={"/assets/image/HamburgerReverse.png"}
                width="34px"
              />
            ) : (
              <img className="m-1" src={"/assets/image/hamburger.svg"} />
            )} */}
          {/* </div> */}
          {/* <img
            src={
              click
                ? "/assets/images/menuicon.svg"
                : "/assets/images/navdown.svg"
            }
            alt=""
            onClick={handleClick}
          /> */}
          {/* end */}
        </div>

        {showNavCard && (
          <NavCard setShowNavCard={setShowNavCard} showNavCard={showNavCard} />
        )}
      </nav>
      {/* <SavingsModal show={modalShow} onHide={() => setModalShow(false)} />
      <LoanModal show={loanmodalShow} onHide={() => setLoanModalShow(false)} />
      <FixedModal
        show={fixedmodalShow}
        onHide={() => setFixedModalShow(false)}
      />
      <MutualModal
        show={mutualmodalShow}
        onHide={() => setMutualModalShow(false)}
      /> */}
    </>
  );
};
