import { useContext, useState } from "react";
import { Grid } from "@material-ui/core";
import { Link, useHistory, useLocation } from "react-router-dom";
import Footer from "../../component/Footer";
import { LeftContainer } from "../../container/leftcontainer/LeftContainer";
import MobileLanding from "../../container/mobileContainer/MobileLanding";
import { RightContainer } from "../../container/rightcontainer/RightContainer";
import { ThemeContext } from "../../context/ThemeContext";
import dayjs from "dayjs";
import { useToasts } from "react-toast-notifications";
import {
  getApiErrorMessage,
  setTokenToStorage,
  setExpiryTimeToStorage,
} from "../../utils/ApiUtils";
import { login } from "../../utils/ApiRequests";
import { userDataContext } from "../../context/UserContext";
import LandingHeader from "../../component/LandingHeader";
import LandingLayout from "../../Layout/LandingLayout";

const Home = () => {
  const [inputValue, setInputValue] = useState({});
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState("");
  const { darkMode } = useContext(ThemeContext);
  const { addToast } = useToasts();
  const history = useHistory();
  const date = dayjs().add(7, "days");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  // auth

  const emailValidator = (val) => {
    return /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(val);
  };

  const loginAction = (e) => {
    e.preventDefault();
    setLoading(true);
    const isValid = emailValidator(inputValue.email)
    if (inputValue?.email.length < 3) {
      addToast('email too short', { appearance: "error" });
      return false;
    }

    if (!isValid) {
      addToast('invalid email', { appearance: "error" });
      return false;
    }

    if (inputValue?.password.length < 3) {
      addToast('invalid password', { appearance: "error" });
      return false;
    }
    login({
      email: inputValue?.email,
      password: inputValue?.password,
    })
      .then((res) => {
        if (res.data.error) {
          setLoading(false);
          addToast(res.data.message, {
            appearance: "error",
          });
        } else {
          setLoading(false);
          setTokenToStorage(res.data.token);
          setExpiryTimeToStorage(date);
          setUserData(res.data.user);
          localStorage.setItem("user", JSON.stringify(res.data.user));
          addToast(res.data.message, { appearance: "success" });
          // Location.replace("/home");
          window.location.href = "/home";
        }
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  return (
    <>
      <LandingLayout>
        <>
          <div className="head-section">
            <LandingHeader />
          </div>
          <div className="body-section ">
            <div className="left  tw-flex tw-items-center tw-justify-center">
              <LeftContainer />
            </div>
            <div className="right tw-flex tw-items-center tw-justify-center">
              <RightContainer
                handleInputChange={handleInputChange}
                loginAction={loginAction}
                loading={loading}
                inputValue={inputValue}
              />
            </div>
          </div>
          <div className="footer-section">
            <Footer />
          </div>
        </>
      </LandingLayout>
      <MobileLanding
        handleInputChange={handleInputChange}
        loginAction={loginAction}
        loading={loading}
        inputValue={inputValue}
        setLoading={setLoading}
      />
    </>
  );
};

export default Home;
