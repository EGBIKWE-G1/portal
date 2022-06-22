import React, { useEffect, useState, useRef } from "react";
import { getMovies, getMoviesTopTen } from "../utils/ApiRequests";
import Skeleton from "@material-ui/lab/Skeleton";
import { Link } from "react-router-dom";

const Movies = (props) => {
  const [movie, setMovie] = useState([]);
  const [topTen, setTopTen] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getFavMovies = async () => {
      try {
        setLoading(true);
        const { data } = await getMovies();
        setMovie(data.data);

        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    getFavMovies();
  }, []);

  useEffect(() => {
    const getTopTen = async () => {
      try {
        setLoading(true);
        const { data } = await getMoviesTopTen();

        setTopTen(data.data);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    getTopTen();
  }, []);
  let tokenFrmStorage = "";
  (function () {
    tokenFrmStorage = localStorage.getItem("WOO-WEB");
  })();
  return (
    <section className="tw-space-y-1 ">
      <h4 className="tw-text-xl tw-font-bold tw-mx-4 lg:tw-mx-0">
        Trending Movies
      </h4>
      <div className="tw-flex tw-items-center tw-justify-between tw-mx-4 lg:tw-mx-0">
        <p className="tw-text-sm tw-font-normal pay-action">
          Get latest and favorite movies to watch on-demand
        </p>
        <div className="tw-flex tw-items-center" style={{ color: "#043D7D" }}>
          <a
            className="tw-text-xs pay-action"
            href={`https://movies.woozeee.com/browse?token=${tokenFrmStorage}`}
          >
            SEE ALL
          </a>
          <svg
            className=" 
            tw-w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
      <div className="movie-scroll tw-flex tw-flex-nowrap hide-scrollbar sm:tw-gap-2 md:tw-gap-2 lg:tw-gap-2 tw-ml-4 lg:tw-mx-0 tw-w-96 lg:tw-w-full">
        {movie?.map((el) => {
          return (
            <>
              {loading ? (
                <Skeleton
                  animation="wave"
                  variant="rect"
                  width={210}
                  height={118}
                  // className="tw-h-96 tw-w-52 tw-mt-2 "
                />
              ) : (
                // <div className="sc-mchild">
                // <>
                //   <div className="">
                //     <img
                //       src={m.posterURL}
                //       alt="movies"
                //       className="tw-w-80 tw-h-44"
                //     />
                //     <div className="img-text">
                //       <h4>watch</h4>
                //     </div>
                //   </div>
                // </>
                // </div>
                // <img
                //   src={m.posterURL}
                //   alt="movies"
                //   className="tw-w-80 tw-h-44"
                // />

                <a
                  // href={`https://movies.woozeee.com/movies/preview/${el._id}?token=${tokenFrmStorage}`}
                  href={`https://movies.woozeee.com/movies/preview/${el._id}?token=${tokenFrmStorage}`}
                  className=" img-area sc-trendingmchild tw-cursor-pointer"
                >
                  <>
                    <img
                      src={el.posterURL || el.posters.desktop.landscape}
                      alt="movies"
                      className="tw-w-62 tw-h-36 lg:tw-w-80 lg:tw-h-44  "
                      // style={{ position: "absolute" }}
                    />
                    {/* <div className="m-image__overlay">
                      <a
                      // href={`http://localhost:3001/movies/preview/${el._id}`}
                      >
                        <h3 className="m-images_description tw-text-white tw-text-center tw-flex tw-items-center tw-justify-center">
                          Watch
                        </h3>
                      </a>
                    </div> */}
                    <div className="img-text">
                      <h4>watch</h4>
                    </div>
                  </>
                </a>
              )}
            </>
          );
        })}
      </div>

      {/* top 10 */}
      {/* <div className="TEN"></div> */}
      <div className="tw-flex tw-items-center tw-justify-between tw-mx-4 lg:tw-mx-0">
        <p className="tw-text-sm lg:tw-txt-lg tw-font-normal tw-leading-8">
          Top 10 on woozeee today
        </p>
        <div className="tw-flex tw-items-center" style={{ color: "#043D7D" }}>
          <a
            className="tw-text-xs pay-action"
            href={`https://movies.woozeee.com/browse?token=${tokenFrmStorage}`}
          >
            SEE ALL
          </a>
          <svg
            className="tw-w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>

      <div className="movie-scroll tw-flex tw-flex-nowrap hide-scrollbar sm:tw-gap-2 md:tw-gap-2 lg:tw-gap-2 tw-ml-4 lg:tw-mx-0 lg:tw-w-full tw-w-96">
        {topTen?.map((el) => {
          return (
            <div className=" sc-mchild ">
              <>
                <img
                  src={el.posters?.desktop?.portrait}
                  alt=""
                  className="top-ten_container image__img tw-w-44 tw-h-60"
                />
                <div className="m-image__overlay">
                  <a
                    href={`https://movies.woozeee.com/movies/preview/${el._id}?token=${tokenFrmStorage}`}
                  >
                    <h3 className="m-images_description tw-text-white tw-text-center tw-flex tw-items-center tw-justify-center">
                      Watch
                    </h3>
                  </a>
                </div>
              </>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Movies;
