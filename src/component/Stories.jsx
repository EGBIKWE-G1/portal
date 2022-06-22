import React from "react";
import { Suggestions } from "./Suggestions";
import { Trends } from "./trends";
import UserStories from "./userStories";

const Stories = () => {
  return (
    <>
      <section className="user tw-hidden xl:tw-block">
        <div className="user-stories" style={{ width: "20rem" }}>
          <UserStories />
        </div>
        <div className="hide-scrollbar tw-overflow-y-auto tw-h-80">
          <div className="user-follows tw-mt-8">
            <Suggestions />
          </div>
          <div className="user-trends">
            <Trends />
          </div>
        </div>
      </section>
      <section className="mobile-user tw-pl-3 tw-block md:tw-block xl:tw-hidden">
        <div className="user-stories mb-us">
          <UserStories />
        </div>
      </section>
    </>
  );
};

export default Stories;
