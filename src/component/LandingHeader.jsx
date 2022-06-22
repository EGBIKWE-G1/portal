import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { withStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const LandingHeader = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

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
  return (
    <header>
      <div className="tw-flex tw-items-center  tw-pt-6">
        <div className="tw-w-1/2 tw-flex tw-justify-center tw-items-center">
          {darkMode ? (
            <img
              src="/assets/images/LogoDark.svg"
              alt="Logo"
              style={{ width: "16rem" }}
            />
          ) : (
            <img
              src="/assets/images/Logo.svg"
              alt="Logo"
              style={{ width: "16rem" }}
            />
          )}
        </div>

        <div className="tw-w-1/2 tw-flex tw-items-center tw-justify-end tw-pr-6 ">
          <FormControlLabel
            control={
              <PurpleSwitch
                checked={state.checkedA}
                onChange={handleChangeToggle}
                name="checkedA"
                onClick={handleTheme}
              />
            }
          />
        </div>
      </div>
    </header>
  );
};

export default LandingHeader;
