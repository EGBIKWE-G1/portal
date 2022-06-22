import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AllSponsors } from "./AllSponsors/AllSponsors";
import { SponsorsData } from "./AllSponsors/SponsorsData";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Ads = () => {
  return (
    <div className="tw-bg-white tw-p-3">
      <h5 className="sponsor-title tw-font-bold tw-text-sm tw-text-left">
        Sponsored
      </h5>
      <div className="sc-kstqJO kQKupb">
        <div className="sc-hBEYId PGVwK">
          <Carousel
            swipeable={false}
            draggable={false}
            // showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
            itemClass="carousel-item-padding-20-px"
            className="lg:tw-max-w-2xl"
          >
            {SponsorsData.map((el, i) => {
              return (
                <img
                  src={el?.img}
                  alt="sponsor-ads"
                  key={i}
                  // style={{
                  //   width: "100% !important",
                  //   // height: "100  !important",
                  //   objectFit: "cover  !important",
                  //   height: "15rem !important",
                  // }}
                  className="tw-w-full tw-h-52 tw-object-cover"
                />
              );
            })}
          </Carousel>
          {/* <AllSponsors slides={SponsorsData} /> */}
        </div>
      </div>
    </div>
  );
};

export default Ads;
