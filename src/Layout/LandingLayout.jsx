import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const LandingLayout = ({ children }) => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div
      className={
        darkMode
          ? "home_dark tw-sm:hidden tw-lg:block"
          : "home-container tw-sm:hidden tw-lg:block"
      }
    >
      {children}
    </div>
  );
};

export default LandingLayout;
