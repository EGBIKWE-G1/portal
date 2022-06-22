import React from "react";

const Navigation = () => {
  return (
    <div className="tw-bg-white tw-py-3 tw-px-8">
      <div className="tw-flex tw-justify-between tw-items-center">
        <div className="tw-flex tw-flex-col tw-items-center tw-space-y-1">
          <img src="/assets/images/HomeNav.svg" alt="" className="tw-w-5" />
          <p style={{ color: "#EF4358" }} className="tw-text-center tw-text-xs">
            Home
          </p>
        </div>
        <div className="tw-flex tw-flex-col tw-items-center tw-space-y-1">
          <img src="/assets/images/GotoNav.svg" alt="" className="tw-w-5"/>
          <p style={{ color: "#EF4358" }} className="tw-text-center tw-text-xs">
            Go To
          </p>
        </div>
        <div className="tw-flex tw-flex-col tw-items-center tw-space-y-1">
          <img src="/assets/images/ExploreNav.svg" alt="" className="tw-w-4"/>
          <p className="tw-text-center tw-text-xs">Explore</p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
