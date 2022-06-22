import React from "react";

const PayBills = () => {
  return (
    <div className="tw-space-y-1 tw-mb-10">
      <h4 className="tw-text-lg md:tw-text-lg lg:tw-text-xl tw-font-bold tw-mt-4 tw-mx-4 lg:tw-mx-0">
        Pay all your bills
      </h4>
      <div className="tw-flex tw-items-center tw-justify-between tw-mx-4 lg:tw-mx-0 tw-gap-x-3 lg:tw-gap-x-0">
        <p className="tw-text-xs lg:tw-text-sm tw-font-normal pay-action">
          Your woozeee wallet can do more for you
        </p>
        <div className="tw-flex tw-items-center bg-action">
          <p className="tw-text-xs pay-action">PAY A BILL</p>
          <svg
            className=" tw-w-2 lg:tw-w-4"
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
      <div className="pay-bills_action tw-h-80">
        <div className="container">
          <div className="tw-flex tw-flex-col lg:tw-flex-row tw-items-center tw-justify-between tw-gap-y-5 tw-pt-8 tw-pb-6">
            <div className="pay-bills_action-img tw-flex tw-flex-col tw-items-center">
              <div className="tw-flex tw-flex-col tw-items-center tw-justify-between tw-gap-y-3">
                <img
                  src="/assets/images/billpay1.svg"
                  alt="billpay"
                  className="tw-h-56 tw-cursor-pointer "
                />
                <p className="tw-text-center tw-text-xs tw-text-blue-800 lg:tw-text-white">
                  It takes a few seconds to pay for your utility bills here
                </p>
              </div>
              <div className="pay-bills_action-img__arrow">
                <svg
                  className="tw-w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </div>
            <div className="pay-bills_action-img tw-flex tw-flex-col tw-items-center">
              <div className="tw-flex tw-flex-col tw-items-center tw-justify-between tw-gap-y-3">
                <img
                  src="/assets/images/billpay3.svg"
                  alt="billpay"
                  className="tw-h-56 tw-cursor-pointer"
                />
                <p className="tw-text-center tw-text-xs tw-text-blue-800 lg:tw-text-white">
                  Transfer to and receive funds from your wallet
                </p>
              </div>

              <div className="pay-bills_action-img__arrow">
                <svg
                  className="tw-w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </div>
            <div className="pay-bills_action-img tw-flex tw-flex-col tw-items-center">
              <div className="tw-flex tw-flex-col tw-items-center tw-justify-between tw-gap-y-3">
                <img
                  src="/assets/images/billpay3.svg"
                  alt="billpay"
                  className="tw-h-56 tw-cursor-pointer"
                />
                <p className="tw-text-center tw-text-xs tw-text-blue-800 lg:tw-text-white">
                  Transfer to and receive funds from people at with convenience
                </p>
              </div>
              <div className="pay-bills_action-img__arrow">
                <svg
                  className="tw-w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <img
        src="/assets/images/paybills.svg"
        alt="bills"
        className="tw-w-full"
      /> */}
    </div>
  );
};

export default PayBills;
