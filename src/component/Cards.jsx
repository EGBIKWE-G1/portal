import React from "react";

export const Cards = () => {
  return (
    <section className="tw-py-10">
      <div className="tw-text-center tw-mb-20">
        <h3 className="tw-font-bold tw-text-2xl">
          Introducing Our woozeee Cards
        </h3>
      </div>

      <div className="tw-flex tw-flex-col lg:tw-flex-row tw-justify-between tw-items-center tw-gap-y-8">
        <img
          src="/assets/images/care.jpeg"
          alt=""
          className="tw-w-48 tw-h-28"
        />
        <div className="care-img tw-transform tw-scale-125 lg:tw-scale-x-125" >
          <img
            src="/assets/images/wallet.jpeg"
            alt=""
            className="tw-w-48 tw-h-28"
          />
        </div>

        <img
          src="/assets/images/rewards.jpeg"
          alt=""
          className="tw-w-48 tw-h-28"
        />
      </div>
    </section>
  );
};
