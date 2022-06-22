import React from "react";
import Ads from "../../component/Ads";
import { Cards } from "../../component/Cards";
import Challenges from "../../component/Challenges";
import { ClicknShop } from "../../component/ClicknShop";
import Movies from "../../component/Movies";
import PayBills from "../../component/PayBills";

const Content = () => {
  return (
    <div className="content tw-overflow-y-auto tw-overflow-x-hidden">
      <div
        className="challenges tw-overflow-y-auto"
        style={{ height: "37rem" }}
      >
        <Challenges />
      </div>
      <div className="ads">
        <Ads />
      </div>
      <div className="movies tw-mt-4">
        <Movies />
      </div>
      <div className="clicknshop">
        <ClicknShop />
      </div>
      <div className="cards">
        <Cards />
      </div>
      <div className="paybills">
        <PayBills />
      </div>
    </div>
  );
};

export default Content;
