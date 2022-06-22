import { Link } from "react-router-dom";
import LoginPage from "./LoginPage";
import { osName } from "react-device-detect";

const MobileLanding = ({
  handleInputChange,
  loginAction,
  loading,
  inputValue,
}) => {
  return (
    <main>
      <div className="mobile-view tw-lg:hidden tw-sm:block">
        <img
          src="/assets/images/mobilelogo.svg"
          alt="logo"
          className="tw-mt-4"
        />
        <div className="mobile-view_text">
          <div className="mobile-view_text-heading">
            <br />

            <h3 className="tw-text-center tw-font-bold tw-text-white tw-mt-4">
              Socials, Movies, Get Paid, <br /> Bills Payment, Loans, ...
            </h3>
            <h6 className="tw-leading-4 tw-text-white tw-text-center tw-font-normal tw-text-xl tw-mt-4">
              All in One App
            </h6>
          </div>
          <br />
          <div className="tw-container tw-flex tw-flex-col tw-items-center tw-justify-center tw-mt-12 tw-space-y-5 tw-mx-auto">
            {osName === "iOS" ? (
              <a href="https://apps.apple.com/us/app/woozeee/id1549457766">
                <button className=" btn-download tw-space-y-2   tw-text-white tw-font-bold ">
                  Download App
                </button>
              </a>
            ) : (
              <a href="https://play.google.com/store/apps/details?id=app.woozeee.com">
                <button className=" btn-download tw-space-y-2   tw-text-white tw-font-bold ">
                  Download App
                </button>
              </a>
            )}
            <Link to="/login">
              <button className=" btn-outline tw-space-y-2   tw-text-white tw-font-bold ">
                Log In
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MobileLanding;
