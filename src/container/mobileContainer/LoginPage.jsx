import { useState, useContext } from "react";
import { withStyles } from "@material-ui/core/styles";
import { black, grey } from "@material-ui/core/colors";
import { Link, useHistory, useLocation } from "react-router-dom";
import Switch from "@material-ui/core/Switch";
import { Grid, TextField, makeStyles } from "@material-ui/core";
import dayjs from "dayjs";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { login } from "../../utils/ApiRequests";
import { useToasts } from "react-toast-notifications";
import {
  getApiErrorMessage,
  setTokenToStorage,
  setExpiryTimeToStorage,
} from "../../utils/ApiUtils";
import { ThemeContext } from "../../context/ThemeContext";
import { osName } from "react-device-detect";
import MiniLoader from "../../component/MiniLoader";

const LoginPage = () => {
  const [inputValue, setInputValue] = useState({});
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({});
  const { darkMode } = useContext(ThemeContext);
  const { addToast } = useToasts();
  const history = useHistory();
  const date = dayjs().add(7, "days");

  const [values, setValues] = useState({
    showPassword: false,
  });
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChangeToggle = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const [state, setState] = useState({
    checkedA: true,
  });
  const PurpleSwitch = withStyles({
    switchBase: {
      color: grey[300],
      "&$checked": {
        color: grey[500],
      },
      "&$checked + $track": {
        backgroundColor: grey[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

  const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiFormControl-root  ": {
        width: "100%",
      },
    },
  }));
  const classes = useStyles();

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

    if (inputValue?.password.length < 2) {
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
    <main>
      <div className="tw-w-full tw-overflow-visible">
        <div className="loginpage_logo tw-flex tw-justify-center tw-mt-6">
          <img src="/assets/images/mobilelogowhite.svg" alt="logo" />
        </div>

        <div className="wrapper">
          <h3
            className="tw-text-center tw-py-8 tw-text-3xl tw-font-medium "
            style={{ color: "#212B27" }}
          >
            Login
          </h3>
          <form
            className={classes.root}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onSubmit={loginAction}
          >
            <Grid item sm={12} className="tw-space-y-6">
              <TextField
                variant="outlined"
                label="Email address"
                name="email"
                value={inputValue.email}
                onChange={handleInputChange}
                autoComplete="off"
                type="email"
                required
              />

              <FormControl variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  required
                  id="outlined-adornment-password"
                  type={values.showPassword ? "text" : "password"}
                  value={inputValue.password}
                  name="password"
                  onChange={handleInputChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  labelWidth={70}
                />
              </FormControl>

              {loading ? (
                <button
                  type="submit"
                  className=" btn-login tw-space-y-2 tw-w-full  tw-text-white tw-font-bold tw-px-auto"
                >
                  <MiniLoader />
                </button>
              ) : (
                <button
                  type="submit"
                  className=" btn-login tw-space-y-2 tw-w-full  tw-text-white tw-font-bold"
                >
                  Login
                </button>
              )}
            </Grid>
          </form>
          <h3 className="tw-font-bold tw-text-2xl tw-text-center tw-mt-6">
            Socials, Movies, Get Paid, <br /> Bills Payment, Loans, ...
          </h3>
          <h6 className="tw-mt-3 tw-text-center tw-text-xl tw-font-normal">
            All in One App
          </h6>
          <br />
          <div className="tw-mt-12">
            {osName === "iOS" ? (
              <a href="https://apps.apple.com/us/app/woozeee/id1549457766">
                <button className=" btn-downloadblue tw-w-full  tw-text-white tw-font-bold ">
                  Download App
                </button>
              </a>
            ) : (
              <a href="https://play.google.com/store/apps/details?id=app.woozeee.com">
                <button className=" btn-downloadblue tw-w-full  tw-text-white tw-font-bold ">
                  Download App
                </button>
              </a>
            )}
            <p className="tw-text-center tw-mt-2">to get started</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
