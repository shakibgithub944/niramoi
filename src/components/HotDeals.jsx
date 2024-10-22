"use client";
/* eslint-disable react/display-name */
import React, { memo, useEffect, useState } from "react";
import { getCountdown } from "../helper/Countdown";
import Link from "next/link";
import { Slider } from "../app/layout";
import ProductCard from "./ProductCard";
import Products from "../utils/trendingProducts.json";

const HotDeals = () => {
  const [timeLeft, setTimeLeft] = useState(getCountdown());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getCountdown());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  const SampleNextArrow = memo((props) => {
    const { className, onClick } = props;
    return (
      <button
        type="button"
        onClick={onClick}
        className={` ${className} slick-next slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1`}
      >
        <i className="ph ph-caret-right" />
      </button>
    );
  });

  const SamplePrevArrow = memo((props) => {
    const { className, onClick } = props;
    return (
      <button
        type="button"
        onClick={onClick}
        className={`${className} slick-prev slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1`}
      >
        <i className="ph ph-caret-left" />
      </button>
    );
  });
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="hot-deals pt-40">
      <div className="container container-lg">
        <div className="section-heading">
          <div className="flex-between flex-wrap gap-8">
            <h5 className="mb-0">Hot Deals Todays</h5>
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
        <div className="row g-12">
          <div className="col-md-4">
            <div className="hot-deals position-relative rounded-16 bg-main-600 overflow-hidden p-28 z-1 text-center">
              <img
                src="assets/images/shape/offer-shape.png"
                alt=""
                className="position-absolute inset-block-start-0 inset-inline-start-0 z-n1 w-100 h-100 opacity-6"
              />
              <div className="hot-deals__thumb">
                <img src="assets/images/thumbs/hot-deals-img.png" alt="" />
              </div>
              <div className="">
                <h4 className="text-white mb-8">Fresh Vegetables</h4>
                <div className="countdown my-32" id="countdown4">
                  <ul className="countdown-list flex-center flex-wrap">
                    <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium colon-white">
                      <span className="days" />
                      {timeLeft.days} Days
                    </li>
                    <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium colon-white">
                      <span className="hours" />
                      {timeLeft.hours} Hours
                    </li>
                    <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium colon-white">
                      <span className="minutes" />
                      {timeLeft.minutes} Min
                    </li>
                    <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium colon-white">
                      <span className="seconds" />
                      {timeLeft.seconds} Sec
                    </li>
                  </ul>
                </div>
                <Link
                  href="/shop"
                  className="mt-16 btn bg-main-800 fw-medium d-inline-flex align-items-center rounded-pill gap-8"
                  tabIndex={0}
                >
                  Shop Now
                  <span className="icon text-xl d-flex">
                    <i className="ph ph-arrow-right" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="row g-8">
              <div className="deals-week-slider arrow-style-two">
                <Slider {...settings}>
                  {Products?.map((product, index) => (
                    <div key={index}>
                      <ProductCard product={product} />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotDeals;
