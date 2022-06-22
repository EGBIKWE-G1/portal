import React from "react";

const MinHeader = () => {
  return (
    <>
      <div
        className="tw-py-3 tw-relative tw-hidden lg:tw-block"
        style={{ backgroundColor: "#FEFEFE" }}
      >
        <h4 className="tw-text-lg tw-font-bold tw-pl-12">
          Have Fun | Make Money | Give Back
        </h4>
      </div>
      <div className="container tw-block lg:tw-hidden">
        <div class="tw-flex tw-items-center tw-justify-center tw-my-4">
          <div class="search">
            <input
              type="text"
              className="searchTerm"
              placeholder="Search verticals, products..."
            />
            <button type="submit" class="searchButton">
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
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MinHeader;
