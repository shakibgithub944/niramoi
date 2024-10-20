"use client";
import { Slider } from "@/app/layout";
import Link from "next/link";
import Products from "../utils/trendingProducts.json";
import { Settings } from "../constant/SlickCarouselSettings";
import ProductCard from "./ProductCard";

const CategoryBasedProducts = ({ title, titleColor, bgColor }) => {
  return (
    <>
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
                </h5>
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
    </>
  );
};

export default CategoryBasedProducts;
