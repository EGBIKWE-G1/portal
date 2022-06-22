import React, { useEffect, useState } from "react";
import Header from "../../component/Header/Header";
// import Header from "../../component/Header";
import MinHeader from "../../component/MinHeader";
import Navigation from "../../component/Navigation";
import Stories from "../../component/Stories";
import Verticals from "../../component/Verticals";
import Content from "../../container/content/Content";

const HomePage = () => {
  const data = localStorage.getItem("user");

  const [userData, setUserData] = useState([]);
  let user = [];
  user.push(userData);
  useEffect(() => {
    setUserData(JSON.parse(data));
  }, []);

  return (
    <div className="tw-sm:container">
      <div className="main-home tw-overflow-x-hidden">
        <div className="header">
          <Header user={user} fname={user[0].fName} imgUrl={user[0].imgUrl} />
        </div>
        <div className="min-header">
          <MinHeader />
        </div>
        <div
          className="Navigation tw-block lg:tw-hidden"
          style={{ marginTop: "-1rem" }}
        >
          <Navigation />
        </div>
        <div className="categories">
          <Verticals />
        </div>
        <div className="body tw-mx-0 lg:tw-mx-2">
          <Content />
        </div>
        <div className="stories">
          <Stories />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
