import { useState, useEffect } from "react";
import { featuredCategories, GetDayDealProducts } from "../utils/ApiRequests";
import { chunk, formatValue } from "../utils/ApiUtils";

export const ClicknShop = () => {
  const [loading, setLoading] = useState(false);
  const [deals, setDeals] = useState();
  const [featured, setFeatured] = useState();

  useEffect(() => {
    const getDeals = async () => {
      try {
        setLoading(true);
        const { data } = await GetDayDealProducts();
        setDeals(data.data);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    getDeals();
  }, []);

  useEffect(() => {
    const getfeaturedCategories = async () => {
      try {
        setLoading(true);
        const { data } = await featuredCategories();
        console.log(data.data, "featuredCategories");
        setFeatured(data.data);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    getfeaturedCategories();
  }, []);
  let tokenFrmStorage = "";
  (function () {
    tokenFrmStorage = localStorage.getItem("WOO-WEB");
  })();
  return (
    <section>
      <div className="tw-space-y-1">
        <h4 className="tw-text-xl tw-font-bold tw-mt-4 tw-mx-4 lg:tw-mx-0">
          Click n Shop
        </h4>
        <div className="tw-flex tw-items-center tw-justify-between tw-mx-4 lg:tw-mx-0">
          <p className="tw-text-sm tw-font-normal pay-action">
            Items at super high discount, buy and get cashback!
          </p>
          <div className="tw-flex tw-items-center" style={{ color: "#043D7D" }}>
            <a
              className="tw-text-xs pay-action"
              href={`https://shop.woozeee.com?token=${tokenFrmStorage}`}
            >
              {" "}
              SEE ALL{" "}
            </a>

            <svg
              className="tw-w-4"
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
        <div className="shopping-container tw-bg-white tw-pb-6 tw-w-96 lg:tw-w-full">
          <div className="shopping-container_header tw-text-white tw-p-2 tw-text-xs tw-font-bold">
            <h4>Deals of The Day | Limited Stock Available</h4>
          </div>
          <div className="deals-click movie-scroll tw-mt-4 tw-flex tw-flex-nowrap hide-scrollbar tw-mx-auto tw-g:justify-center tw-box-border sm:tw-gap-2 md:tw-gap-3 lg:tw-gap-4 tw-container tw-max-w-full md:tw-max-w-lg lg:tw-max-w-2xl">
            {deals?.map((el) => {
              return (
                <>
                  <a
                    href={`https://shop.woozeee.com/product/${el._id}?token=${tokenFrmStorage}`}
                    className="sc-mchild tw-flex tw-flex-col tw-items-center tw-justify-between tw-cursor-pointer"
                  >
                    <img src={el.gallery[0]} alt="" />
                    <div className="tw-max-h-16">
                      <p className="tw-text-sm tw-text-left truncate">
                        {el.name}
                      </p>
                      <p className="">&#8358; {formatValue(el.price)}</p>
                    </div>
                  </a>
                </>
              );
            })}
          </div>
        </div>
      </div>
      <div className="tw-bg-white tw-p-4 tw-mt-12">
        <div className="tw-flex tw-items-center tw-justify-between">
          <p className="tw-text-sm tw-font-normal tw-leading-8">
            Featured Categories
          </p>
          <div className="tw-flex tw-items-center" style={{ color: "#043D7D" }}>
            <a
              className="tw-text-xs pay-action"
              href={`https://shop.woozeee.com?token=${tokenFrmStorage}`}
            >
              {" "}
              SEE ALL{" "}
            </a>
            <svg
              className="tw-w-4"
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
        <div className="tw-grid lg:tw-grid-cols-3  tw-grid-cols-2 tw-gap-4 tw-container ">
          {featured &&
            chunk(featured.slice(0, 6), 3)?.map((items) => {
              console.log(items, "itemsfeatured");
              return items.map((el) => {
                return (
                  <a
                    href={`https://shop.woozeee.com/category/${el._id}?token=${tokenFrmStorage}`}
                    className="tw-flex tw-flex-col tw-items-center tw-justify-between"
                  >
                    <img
                      src={el.imgUrl}
                      alt=""
                      className="tw-h-28 tw-object-cover lg:tw-h-32"
                    />
                    <p
                      className="tw-font-medium tw-text-sm"
                      style={{
                        color: " rgba(0, 0, 0, 0.7)",
                        letterSpacing: "2%",
                      }}
                    >
                      {el.name}
                    </p>
                  </a>
                );
              });
            })}
        </div>
      </div>
    </section>
  );
};
