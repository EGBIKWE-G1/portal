import React from "react";

const Footer = () => {
  return (
    <footer className="container tw-flex tw-items-center tw-mt-4 tw-pb-8">
      <div className="tw-flex tw-items-center tw-justify-center tw-space-x-20 tw-w-1/2 ">
        <div className="tw-flex tw-flex-col tw-items-center tw-justify-start ">
          <ul className="tw-space-y-2 tw-text-sm tw-text-gray-500">
            <li>About</li>
            <li>Help & FAQs</li>
            <li>Supports</li>
          </ul>
        </div>
        <div className="tw-flex tw-flex-col tw-items-center tw-justify-start">
          <ul className="tw-space-y-2 tw-text-sm tw-text-gray-500">
            <li>Logistics Partner</li>
            <li>Affiliate Partner</li>
            <li>Sell on woozeee</li>
          </ul>
        </div>
        <div className="tw-flex tw-flex-col tw-items-center tw-justify-start">
          <ul className="tw-space-y-2 tw-text-sm tw-text-gray-500">
            {/* <li>Socials</li>
            <li>Movies</li>
            <li>Payments</li> */}
          </ul>
        </div>
      </div>
      <div className="tw-flex tw-items-center tw-justify-center tw-w-1/2  tw-space-x-20">
        <div className="tw-flex tw-flex-col tw-items-center tw-justify-start ">
          <ul className="tw-space-y-2 tw-text-sm tw-text-gray-500 ">
            {/* <li>Money Matters</li>
            <li>Bill Pay</li>
            <li>Give Back</li> */}
          </ul>
        </div>
        <div className="tw-flex tw-flex-col tw-items-center tw-justify-start">
          <ul className="tw-space-y-2 tw-text-sm tw-text-gray-500">
            {/* <li>On The Go</li>
            <li>Ask a Doc</li>
            <li>Ask a Lawyer</li> */}
          </ul>
        </div>
        <div className="tw-flex tw-flex-col tw-items-center tw-justify-start">
          <ul className="tw-space-y-2 tw-text-sm tw-text-gray-500">
            {/* <li>Dispatch</li> */}
            {/* <li>Logistics Partner</li>
            <li>Affiliate Partner</li> */}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
