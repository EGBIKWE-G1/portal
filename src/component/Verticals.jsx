import React from "react";
import { Link } from "react-router-dom";
import { osName } from "react-device-detect";

let tokenFrmStorage = "";
(function () {
  tokenFrmStorage = localStorage.getItem("WOO-WEB");
})();

const isProductionEnv = process.env.NODE_ENV === "production";

const vertical = [
  {
    img: "/assets/images/moviesicon.svg",
    title: "Movies",
    url: `${isProductionEnv
        ? "https://movies.woozeee.com/browse"
        : "http://localhost:3001/browse"
      }?token=${tokenFrmStorage}`,
  },
  {
    img: "/assets/images/socialsicon.svg",
    title: "Social",
    url: `${isProductionEnv ? "https://socials.woozeee.com" : "http://localhost:3001"
      }?token=${tokenFrmStorage}`,
  },
  {
    img: "/assets/images/fa-solid_money-check-icon.svg",
    title: "Money Matters",
    url: `${isProductionEnv
        ? "https://moneymatters.woozeee.com"
        : "http://localhost:3001"
      }?token=${tokenFrmStorage}`,
  },
  {
    img: "/assets/images/billicon.svg",
    title: "Bill pay",
    url: `${isProductionEnv ? "https://billpay.woozeee.com" : "http://localhost:3001"
      }?token=${tokenFrmStorage}`,
  },
  {
    img: "/assets/images/onthegoicon.svg",
    title: "On The Go",
    url: `${isProductionEnv ? "https://onthego.woozeee.com" : "http://localhost:3001"
      }?token=${tokenFrmStorage}`,
  },
  {
    img: "/assets/images/bagicon.svg",
    title: "Click & Shop",
    url: `${isProductionEnv ? "https://shop.woozeee.com" : "http://localhost:3001"
      }?token=${tokenFrmStorage}`,
  },
  {
    img: "/assets/images/dispatchicon.svg",
    title: "Dispatch",
    url: "",
  },
  {
    img: "/assets/images/askadocicon.svg",
    title: "Ask a Doc",
    url: "",
  },
  {
    // img: "/assets/images/askalawyericon.svg",
    img: "/assets/images/shop.png",
    title: "Sellers",
    url: `${isProductionEnv ? "https://merchant.woozeee.com" : "http://localhost:3001"
      }?token=${tokenFrmStorage}`,
  },
  {
    img: "/assets/images/othersicon.svg",
    title: "others",
    url: "",
  },
];
const Verticals = () => {
  return (
    <>
      <div className=" tw-hidden xl:tw-block lg:tw-container md:tw-px-3 tw-space-y-5">
        <h6
          className="tw-font-bold tw-text-lg tw-mt-4"
          style={{ color: "#282828" }}
        >
          Go to
        </h6>
        <div className="tw-flex tw-flex-wrap tw-gap-3">
          {vertical.map((v) => {
            return (
              <div className="vertical-card tw-h-12 ">
                <a
                  href={v.url}
                  className="tw-flex tw-items-center tw-justify-between tw-pt-1"
                >
                  <img src={v.img} alt="icon" className="tw-w-5" />
                  <p className="tw-text-right tw-text-xs">{v.title}</p>
                </a>
              </div>
            );
          })}
        </div>

        <img src="/assets/images/newcashback.svg" alt="" />
        {osName === "iOS" ? (
          <a href="https://apps.apple.com/us/app/woozeee/id1549457766">
            <img
              src="/assets/images/Group 2595.png"
              alt=""
              className="tw-h-36 tw-w-full tw-rounded tw-mt-3 "
            />
          </a>
        ) : (
          <a href="https://play.google.com/store/apps/details?id=app.woozeee.com">
            <img
              src="/assets/images/Group 2595.png"
              alt=""
              className="tw-h-36 tw-w-full tw-rounded tw-mt-3"
            />
          </a>
        )}
      </div>
      <div className="tw-block lg:tw-hidden tw-my-4 tw-mx-4">
        <div className="tw-grid tw-grid-rows-2 tw-grid-flow-col tw-gap-y-4 tw-p-4 tw-bg-white ">
          {vertical.map((el) => (
            <a
              href={el.url}
              className="tw-flex tw-flex-col tw-items-center tw-justify-between tw-w-full"
            >
              <img src={el.img} alt="" className="tw-w-5" />
              <p className="tw-text-center" style={{ fontSize: "11px" }}>
                {el.title}
              </p>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Verticals;
