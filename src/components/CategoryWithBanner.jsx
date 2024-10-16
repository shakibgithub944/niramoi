"use client";
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { getCountdown } from "../helper/Countdown";
import Link from "next/link";
import Products from "../utils/trendingProducts.json";
import { Settings } from "../constant/SlickCarouselSettings";
import ProductCard from "./ProductCard";
import { Slider } from "@/app/layout";

const CategoryWithBanner = ({ title, titleColor, bgColor }) => {
  const [timeLeft, setTimeLeft] = useState(getCountdown());
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getCountdown());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="top-selling-products pt-80">
      <div className="container container-lg">
        <div
          className="border border-gray-100 p-24 rounded-16"
          style={{ backgroundColor: bgColor }}
        >
          <div className="section-heading mb-24">
            <div className="flex-between flex-wrap gap-8">
              <h5 className="mb-0" style={{ color: titleColor }}>
                {title}
              </h5>{" "}
              <div className="flex-align gap-16">
                <Link
                  href="/shop"
                  className="text-sm fw-medium text-gray-700 hover-text-main-600 hover-text-decoration-underline"
                >
                  View All Deals
                </Link>
              </div>
            </div>
          </div>
          <div className="flex-center mb-24 flex-wrap gap-16 bg-color-one rounded-8 py-48 px-24 position-relative z-1">
            <img
              src="assets/images/bg/details-offer-bg.png"
              alt=""
              className="position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 z-n1"
            />
            <div className="flex-align gap-16">
              <span className="text-white text-sm">Special Offer:</span>
            </div>
            <div className="countdown" id="countdown11">
              <ul className="countdown-list flex-align flex-wrap">
                <li className="countdown-list__item text-heading flex-align gap-4 text-xs fw-medium w-28 h-28 rounded-4 border border-main-600 p-0 flex-center">
                  {timeLeft?.days}
                  <span className="days" />
                </li>
                <li className="countdown-list__item text-heading flex-align gap-4 text-xs fw-medium w-28 h-28 rounded-4 border border-main-600 p-0 flex-center">
                  {timeLeft?.hours}
                  <span className="hours" />
                </li>
                <li className="countdown-list__item text-heading flex-align gap-4 text-xs fw-medium w-28 h-28 rounded-4 border border-main-600 p-0 flex-center">
                  {timeLeft?.minutes}
                  <span className="minutes" />
                </li>
                <li className="countdown-list__item text-heading flex-align gap-4 text-xs fw-medium w-28 h-28 rounded-4 border border-main-600 p-0 flex-center">
                  {timeLeft?.seconds}
                  <span className="seconds" />
                </li>
              </ul>
            </div>
            <span className="text-white text-xs">
              Remains untill the end of the offer
            </span>
          </div>
          <div className="row g-8">
            <div className="deals-week-slider arrow-style-two">
              <Slider {...Settings}>
                {Products?.map((product, index) => (
                  <div key={index}>
                    <ProductCard />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryWithBanner;
