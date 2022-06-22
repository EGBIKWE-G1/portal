import { useContext, useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { Grid, TextField, makeStyles } from "@material-ui/core";
import { ThemeContext } from "../../context/ThemeContext";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import MiniLoader from "../../component/MiniLoader";
import { getCurrentlyLogged } from "../../utils/ApiRequests";
import { checkLogin } from "../../utils/ApiUtils";
import { Link } from "react-router-dom";

export const RightContainer = ({
  handleInputChange,
  loginAction,
  loading,
  setLoading,
  inputValue,
}) => {
  const [currentUser, setCurrentUser] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [values, setValues] = useState({
    showPassword: false,
  });

  const handleChangeToggle = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const handleTheme = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", !darkMode);
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
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiFormControl-root  ": {
        width: "100%",
      },
    },
  }));
  const classes = useStyles();
  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        setIsLoading(true);
        const { data } = await getCurrentlyLogged();
        setCurrentUser(data.data);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    getCurrentUser();
  }, []);
  console.log(currentUser, "currentUser");
  // const currentUser = JSON.parse(localStorage.getItem("userData"));
  return (
    <>
      <div className={darkMode ? " right-dark" : " right-wrapper "}>
        {!checkLogin() ? (
          <>
            <div
              className={
                darkMode
                  ? "inputcard-dark tw-max-w-xs tw-mx-auto"
                  : "inputcard tw-max-w-xs tw-mx-auto tw-my-auto"
              }
            >
              <h3 className="tw-text-center tw-pb-4 tw-text-xl tw-font-medium ">
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
                <Grid container>
                  <Grid item sm={12} className="tw-space-y-4">
                    <TextField
                      variant="outlined"
                      label="Email address"
                      name="email"
                      value={inputValue.email}
                      onChange={handleInputChange}
                      autoComplete="off"
                      required
                      type="email"
                    />

                    <FormControl variant="outlined">
                      <InputLabel htmlFor="outlined-adornment-password">
                        Password
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-password"
                        type={values.showPassword ? "text" : "password"}
                        value={inputValue.password}
                        name="password"
                        required
                        onChange={handleInputChange}
                        // onChange={handleChange("password")}
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
                </Grid>
              </form>
            </div>

            <h5 className="tw-font-semibold tw-text-center tw-mt-4 tw-text-base">
              Don’t have an account? Sign up now!
            </h5>
          </>
        ) : (
          <div className="tw-max-w-xs tw-mx-auto tw-text-center tw-font-bold tw-space-y-8 tw-mb-28">
            <h1 className="tw-text-center tw-text-3xl tw-font-semibold">
              Hi,{currentUser?.userFirstName}
            </h1>
            <div>
              <img
                src="/assets/images/right-drawn-arrow.png"
                alt=""
                className="tw-w-10 tw-ml-8 tw-mb-3"
              />

              <h4>
                Click{" "}
                <Link to="/home" style={{ color: "#ff5757" }}>
                  here{" "}
                </Link>
                to go to your Dashboard
              </h4>
            </div>
          </div>
        )}
        <h4 className="tw-text-xl tw-font-bold tw-text-center tw-my-3">
          Download for free
        </h4>
        <div className="tw-flex tw-items-center tw-justify-center tw-space-x-4 tw-mx-auto">
          <a
            href="https://play.google.com/store/apps/details?id=app.woozeee.com"
            style={{ width: "9rem" }}
          >
            <img src="/assets/images/googlestore.svg" alt="" />
          </a>
          <a
            href="https://apps.apple.com/us/app/woozeee/id1549457766"
            style={{ width: "9rem" }}
          >
            <img
              src="/assets/images/appstore.svg"
              alt="appstore"
            // className="xl:tw-w-5/6 lg:tw-w-4/6 "
            />
          </a>
        </div>
        <br />
      </div>
    </>
  );
};
