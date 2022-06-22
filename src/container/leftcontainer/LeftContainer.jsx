import { useContext } from "react";
import { AllVerticals } from "../../component/AllSponsors/AllSponsors";
import { AllVerticalsData } from "../../component/AllSponsors/SponsorsData";
import { ThemeContext } from "../../context/ThemeContext";
// import { AllVerticals } from "../../component/AllVerticals";

export const LeftContainer = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <>
      <div className="tw-flex container tw-items-center tw-justify-between tw-flex-col">
        {/* {darkMode ? (
          <img
            src="/assets/images/LogoDark.svg"
            alt="Logo"
            className="tw-w-64"
          />
        ) : (
          <img src="/assets/images/Logo.svg" alt="Logo" className=" tw-w-64" />
        )} */}

        <div className="tw-relative phone-slider">
          <img
            src="/assets/images/oval.svg"
            alt="bg"
            // className="tw-w-f"
          />
          <video
            src="/assets/video/Landing page final final.mp4"
            autoPlay
            loop
            muted
            className="tw-absolute tw-rounded-3xl tw-bg-white"
            // style={{ top: "-1rem", left: "5.8rem", width: "13vw" }}
          />
        </div>

        <br />
        <div className="landing-caption tw-flex tw-flex-col tw-items-center tw-justify-center tw-space-y-5 tw-mt-8">
          <h3 className="tw-font-bold">
            Socials, Movies, Get Paid, Bills Payment, Loans, ...
          </h3>
          <h5 className=" tw-font-medium tw-leading-4">All in One App</h5>
        </div>
      </div>
      {/* <AllVerticals slides={AllVerticalsData} /> */}
    </>
  );
};
