"use client";
import { Slider } from "@/app/layout";
import Link from "next/link";
import { memo } from "react";
import Products from "../utils/trendingProducts.json";

const CategoryBasedProducts = ({ title, titleColor, bgColor }) => {
  const SampleNextArrow = memo(function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <button
        type="button"
        onClick={onClick}
        className={` ${className} slick-next slick-arrow flex-center rounded-circle border border-gray-100 hover-border-neutral-600 text-xl hover-bg-neutral-600 hover-text-white transition-1`}
      >
        <i className="ph ph-caret-right" />
      </button>
    );
  });

  const SamplePrevArrow = memo(function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <button
        type="button"
        onClick={onClick}
        className={`${className} slick-prev slick-arrow flex-center rounded-circle border border-gray-100 hover-border-neutral-600 text-xl hover-bg-neutral-600 hover-text-white transition-1`}
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
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1599,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

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
                <Slider {...settings}>
                  {Products?.map((product, index) => (
                    <div key={index}>
                      <div className="product-card h-100 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                        <Link
                          href="/product-details-two"
                          className="product-card__thumb flex-center rounded-8 bg-gray-50 position-relative"
                        >
                          <span
                            className={`product-card__badge bg-main-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0`}
                          >
                            {product?.status}
                          </span>
                          <img
                            src="assets/images/thumbs/product-two-img1.png"
                            alt=""
                            className="w-auto max-w-unset"
                          />
                        </Link>
                        <div className="product-card__content mt-16">
                          <div className="flex-align gap-6">
                            <span className="text-xs fw-medium text-gray-500">
                              {product?.rating}
                            </span>
                            <span className="text-15 fw-medium text-warning-600 d-flex">
                              <i className="ph-fill ph-star" />
                            </span>
                            <span className="text-xs fw-medium text-gray-500">
                              (17k)
                            </span>
                          </div>
                          <h6 className="title text-lg fw-semibold mt-12 mb-8">
                            <Link
                              href="/product-details-two"
                              className="link text-line-2"
                              tabIndex={0}
                            >
                              {product?.title}
                            </Link>
                          </h6>
                          <div className="flex-align gap-4">
                            <span className="text-tertiary-600 text-md d-flex">
                              <i className="ph-fill ph-storefront" />
                            </span>
                            <span className="text-gray-500 text-xs">
                              {product?.store}
                            </span>
                          </div>
                          <div className="product-card__price mb-20">
                            <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                              {product?.originalPrice}
                            </span>
                            <span className="text-heading text-md fw-semibold ">
                              {product?.currentPrice}
                              {/* <span className="text-gray-500 fw-normal">
                                /Qty
                              </span>{" "} */}
                            </span>
                          </div>
                          <Link
                            href="/cart"
                            className="product-card__cart btn bg-gray-50 text-heading hover-bg-main-600 hover-text-white py-11 px-24 rounded-8 flex-center gap-8 fw-medium"
                            tabIndex={0}
                          >
                            Add To Cart <i className="ph ph-shopping-cart" />
                          </Link>
                        </div>
                      </div>
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
