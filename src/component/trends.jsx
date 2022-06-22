import { useState, useEffect } from "react";
import { getChallenges } from "../utils/ApiRequests";
const trend = [
  {
    trend: " #bourivitacomedy",
  },
  {
    trend: "#7UPflick",
  },
  {
    trend: " #remimaertinsscary",
  },
  {
    trend: "#ubacelebritymimic",
  },
  // {
  //   trend: "#dnaformychild",
  // },
  // {
  //   trend: "#independenceshit",
  // },
];
export const Trends = () => {
  const [trends, setTrends] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getTopTrends = async () => {
      try {
        setLoading(true);
        const { data } = await getChallenges();

        setTrends(data.data);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    getTopTrends();
  }, []);

  let allChallenges = [];

  const challengeList = trends?.map((el) => {
    const [challenges] = el.subs
      ?.filter((el) => el.challenges.length > 0)
      ?.map((el) => el.challenges);
    return challenges;
  });

  const cleanChallengeList = challengeList?.filter((el) => el !== undefined);
  let mergedList = [].concat.apply([], cleanChallengeList);

  return (
    <article className="tw-p-4" style={{ marginTop: "-1rem" }}>
      <h4
        className="tw-text-xs tw-font-semibold tw-mb-4 "
        style={{ color: "#043F7C" }}
      >
        #Top trends for you
      </h4>
      <ol type="1">
        {(mergedList.splice(0, 5) || []).map((el) => {
          return (
            <li className="tw-mb-3 tw-font-medium tw-text-xs">
              {el.hashtagName}
            </li>
          );
        })}
      </ol>

      <div className="tw-flex tw-justify-start tw-items-center tw-my-6">
        <h4
          className="tw-text-xs tw-font-semibold"
          style={{ color: "#043F7C" }}
        >
          Check out more now
        </h4>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="tw-w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </article>
  );
};
