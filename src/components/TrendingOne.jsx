"use client";
import Link from "next/link";
import React from "react";
import Products from "../utils/trendingProducts.json";
import { Settings } from "../constant/SlickCarouselSettings";
import ProductCard from "./ProductCard";
import { Slider } from "@/app/layout";
const TrendingOne = () => {
  return (
    <section className="top-selling-products pt-40">
      <div className="container container-lg">
        <div className="border border-gray-100 p-24 rounded-16">
          <div className="section-heading mb-24">
            <div className="flex-between flex-wrap gap-8">
              <h5 className="mb-0">Trendig Products</h5>{" "}
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
          <div className="trending-products-box rounded-16 overflow-hidden flex-between position-relative mb-24">
            <div className="d-md-block d-none ps-xxl-5 ps-md-4">
              <img
                src="assets/images/thumbs/trending-products-img1.png"
                alt=""
              />
            </div>
            <div className="trending-products-box__content px-4 d-block w-100 text-center py-32">
              <h6 className="mb-0 trending-products-box__title">
                Laptop Pro <span className="h4 mb-0 fw-semibold">20%</span> off
                All Time On Order Now $980
              </h6>
            </div>
            <div className="d-md-block d-none pe-xxl-5 me-xxl-5 pe-md-4">
              <img
                src="assets/images/thumbs/trending-products-img2.png"
                alt=""
              />
            </div>
          </div>
          <div className="row g-8">
            <div className="deals-week-slider arrow-style-two">
              <Slider {...Settings}>
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
    </section>
  );
};

export default TrendingOne;
