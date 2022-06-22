import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const AllSponsors = ({ slides }) => {
  const { darkMode } = useContext(ThemeContext);

  var settings = {
    dots: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 3,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 2,
    //       infinite: true,
    //       //   dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 2,
    //       initialSlide: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };
  const renderSlides = () =>
    slides.map((slide, index) => {
      return (
        <>
          <img
            src={slide.img}
            alt=""
            // style={{
            //   width: "100% !important",
            //   height: "100  !important",
            //   objectFit: "cover  !important",
            //   height:"8rem !important"
            // }}
            // className="tw-w-full tw-h-40"
          />
        </>
      );
    });
  return (
    <>
      <section className="sponsor-img_main">
        <Slider {...settings}>{renderSlides()}</Slider>
      </section>
    </>
  );
};
