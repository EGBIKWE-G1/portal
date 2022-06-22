import React, { useState, useEffect } from "react";
import { followUser, getAllUsers, unfollowUser } from "../utils/ApiRequests";

export const Suggestions = () => {
  const [loading, setLoading] = useState(false);
  const [suggestedUser, setSuggestedUser] = useState([]);

  useEffect(() => {
    const getEntry = async () => {
      try {
        setLoading(true);
        const { data } = await getAllUsers();

        setSuggestedUser(data.users);
        // setStories(data.data);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    getEntry();
  }, []);
  console.log(suggestedUser, "suggestedUser");

  return (
    <article>
      <div
        className="suggestions-title tw-container tw-p-4"
        style={{ marginTop: "-3rem" }}
      >
        <h4 className="tw-font-bold tw-text-lg">Who to follow </h4>
        <div
          className="tw-h-max-10 tw-overflow-scroll"
          style={{ height: "12rem" }}
        >
          {(suggestedUser.slice(0, 20) || []).map((su) => {
            const entryData = {
              entryId: su._id,
              isFollow: false,
            };
            console.log(entryData.entryId);
            return (
              <div className="tw-flex tw-flex-col tw-justify-between tw-mt-5">
                <div className="tw-flex tw-items-center tw-justify-between">
                  <UserFollow
                    imgUrl={su.imgUrl}
                    fName={su.fName}
                    displayName={su.displayName}
                    data={entryData}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="tw-flex tw-justify-start tw-mt-8">
          <h4
            className="tw-text-xs tw-font-semibold"
            style={{ color: "#043F7C" }}
          >
            Go to your social feeds to see more
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
      </div>
    </article>
  );
};

const UserFollow = (props) => {
  const [userFollow, setUserFollow] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  useEffect(() => {
    setData(props.data);
  }, []);
  // console.log(data, "userfollowing");
  const handleFollow = async (key = "isFollow") => {
    try {
      setLoading(true);
      const _data = {
        userId: data.entryId,
        [key]: true,
      };
      console.log(_data);
      const action = data[key] ? unfollowUser : followUser;
      console.log(data, "res-follow");
      const res = await action(_data);
      setLoading(false);
      setData((prevState) => {
        return {
          ...prevState,
          followersCount: res.data.meta.followersCount,
          [key]: !data[key],
        };
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className="tw-flex tw-items-center tw-space-x-4">
        {props.imgUrl === null ? (
          <img
            // src="https://images.unsplash.com/photo-1631215583473-4710df684df1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
            src="/assets/images/useravatar.svg"
            alt="profile-img"
            className="tw-w-10 tw-h-10"
          />
        ) : (
          <img
            // src="https://images.unsplash.com/photo-1631215583473-4710df684df1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
            src={props.imgUrl}
            onerror="this.src='/assets/images/useravatar.svg'"
            alt=""
            className="tw-w-10 tw-h-10"
          />
        )}

        <div className="tw-flex tw-flex-col tw-justify-between tw-items-start">
          <h4
            className="tw-text-xs tw-font-medium"
            style={{ color: " #494949" }}
          >
            {props.fName}
          </h4>
          <h5
            className="tw-font-normal tw-text-xs"
            style={{ color: "#979797" }}
          >
            {props.displayName}
          </h5>
        </div>
      </div>
      <img
        src={
          data.isFollow
            ? "/assets/images/unfollow.png "
            : "/assets/images/follow.png"
        }
        alt=""
        className="tw-w-6 tw-h-6"
        onClick={() => handleFollow("isFollow")}
      />
    </>
  );
};
