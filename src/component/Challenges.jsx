import React, { useEffect, useState } from "react";
import { getChallenges } from "../utils/ApiRequests";
import Feeds from "./Feeds";
import Skeleton from "@material-ui/lab/Skeleton";
import Post from "./Post";

const Challenges = () => {
  const [challenge, setChallenge] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getTopChalleges = async () => {
      try {
        setLoading(true);
        const { data } = await getChallenges();

        setChallenge(data.data);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    getTopChalleges();
  }, []);

  let allChallenges = [];

  const challengeList = challenge?.map((el) => {
    const [challenges] = el.subs
      ?.filter((el) => el.challenges.length > 0)
      ?.map((el) => el.challenges);
    return challenges;
  });

  const cleanChallengeList = challengeList?.filter((el) => el !== undefined);
  let mergedList = [].concat.apply([], cleanChallengeList);

  return (
    <>
      <div className="tw-space-y-1 tw-mx-4 lg:tw-mx-0">
        <h3 className="tw-text-xl tw-font-bold tw-mt-4">
          Trending Challenges
          {/* Trending Challenges (coming-soon) */}
        </h3>
        <h5 className="tw-text-sm ">Check out amazing posts and stories</h5>
      </div>
      <div className=" challenge-scroll tw-flex tw-flex-nowrap hide-scrollbar sm:tw-gap-1 md:tw-gap-1 lg:tw-gap-1 tw-mt-2 tw-mx-4 lg:tw-mx-0">
        {mergedList?.map((el) => {
          return (
            <>
              <div className="hide-scrollbar sc-child">
                {!el.imageURL ? (
                  <Skeleton
                    animation="wave"
                    variant="rect"
                    width={210}
                    height={318}
                    className="tw-mt-6 "
                  />
                ) : (
                  <img
                    src={el.imageURL}
                    alt="img"
                    className=" tw-object-cover tw-h-80 lg:tw-h-96 tw-w-52 lg:tw-w-52 "
                  />
                )}
                <div
                  className="tw-flex tw-items-center tw-justify-start tw-px-3 tw-space-x-2 challenges-hashtags"
                  style={{ transform: "translateY(-49px)" }}
                >
                  {loading ? (
                    <Skeleton
                      animation="wave"
                      variant="circle"
                      width={40}
                      height={40}
                    />
                  ) : (
                    <div className="tw-rounded-full tw-object-cover tw-h-12  tw-w-12">
                      <img
                        src={el.sponsorImageURL}
                        alt="profile"
                        className="tw-h-10 tw-rounded-full tw-w-10"
                      />
                    </div>
                  )}

                  {loading ? (
                    <Skeleton variant="text" width="80%" />
                  ) : (
                    <div className="tw-flex tw-flex-col tw-cursor-pointer">
                      <p className="tw-text-white tw-text-xs">
                        {el.sponsorName}
                      </p>

                      <p className="tw-text-white tw-text-xs hashname">
                        {el.hashtagName}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div style={{ marginTop: "-3rem" }} className="tw-mx-4 lg:tw-mx-0 ">
        <Post />
      </div>
    </>
  );
};

export default Challenges;
