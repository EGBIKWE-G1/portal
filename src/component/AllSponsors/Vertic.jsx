import React from "react";

const Vertic = () => {
  return (
    <>
      <video
        src="/assets/video/Landing page icons final.mp4"
        autoPlay
        loop
        muted
        // className="tw-absolute tw-rounded-3xl tw-bg-white"
        // style={{ top: "-1rem", left: "5.8rem", width: "13vw" }}
      />
      <br />
      <div className="landing-caption tw-flex tw-flex-col tw-items-center tw-justify-center tw-space-y-5 tw-mt-8">
        <h3 className="tw-font-bold">All in one app</h3>
        <h5 className=" tw-font-medium tw-leading-4">
          Get the seamlessly experiences of a basic life!
        </h5>
      </div>
    </>
  );
};

export default Vertic;
