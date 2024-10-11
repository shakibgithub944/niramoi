"use client";
/* eslint-disable @next/next/no-img-element */
import { Slider } from "@/app/layout";
// import Link from "next/link";

const PromotionalTwo = () => {
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <button
        type="button"
        onClick={onClick}
        className={` ${className} slick-next slick-arrow position-absolute top-50 translate-middle-y flex-center rounded-circle bg-neutral-600 hover-bg-main-two-600 w-24 h-24 text-white text-sm z-1 transition-1 inset-inline-end-0`}
      >
        <i className="ph ph-caret-right" />
      </button>
    );
  }
  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <button
        type="button"
        onClick={onClick}
        className={`${className} slick-prev slick-arrow position-absolute top-50 translate-middle-y flex-center rounded-circle bg-neutral-600 hover-bg-main-two-600 w-24 h-24 text-white text-sm z-1 transition-1 inset-inline-start-0`}
      >
        <i className="ph ph-caret-left" />
      </button>
    );
  }
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
  };
  return (
    <section className="promotional-banner mx-32 mt-32">
      <div className="container container-lg">
        <div className="row gy-4 vendor-card-wrapper">
          <div className="col-xxl-2 col-lg-5 col-sm-6">
            <div className="vendor-card text-center px-16 pb-24">
              <div className="">
                <img
                  src="assets/images/thumbs/vendor-logo1.png"
                  alt=""
                  className="vendor-card__logo m-12"
                />
                <h6 className="title mt-32 text-lg">Organic Marksset</h6>
                <div className="flex-align gap-6 justify-content-center">
                  <span className="text-lg fw-medium text-warning-600 d-flex">
                    <i className="ph-fill ph-star" />
                  </span>
                  <span className="text-md fw-medium text-heading">4.8</span>
                  <span className="text-md fw-medium text-heading">(12K)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-2 col-lg-4 col-sm-6">
            <div className="vendor-card text-center px-16 pb-24">
              <div className="">
                <img
                  src="assets/images/thumbs/vendor-logo1.png"
                  alt=""
                  className="vendor-card__logo m-12"
                />
                <h6 className="title mt-32 text-lg">Best Buy</h6>
                <div className="flex-align gap-6 justify-content-center">
                  <span className="text-lg fw-medium text-warning-600 d-flex">
                    <i className="ph-fill ph-star" />
                  </span>
                  <span className="text-md fw-medium text-heading">4.8</span>
                  <span className="text-md fw-medium text-heading">(12K)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-2 col-lg-4 col-sm-6">
            <div className="vendor-card text-center px-16 pb-24">
              <div className="">
                <img
                  src="assets/images/thumbs/vendor-logo1.png"
                  alt=""
                  className="vendor-card__logo m-12"
                />
                <h6 className="title mt-32 text-lg">Organic Market</h6>
                <div className="flex-align gap-6 justify-content-center">
                  <span className="text-lg fw-medium text-warning-600 d-flex">
                    <i className="ph-fill ph-star" />
                  </span>
                  <span className="text-md fw-medium text-heading">4.8</span>
                  <span className="text-md fw-medium text-heading">(12K)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-2 col-lg-4 col-sm-6">
            <div className="vendor-card text-center px-16 pb-24">
              <div className="">
                <img
                  src="assets/images/thumbs/vendor-logo1.png"
                  alt=""
                  className="vendor-card__logo m-12"
                />
                <h6 className="title mt-32 text-lg">Best Buy</h6>
                <div className="flex-align gap-6 justify-content-center">
                  <span className="text-lg fw-medium text-warning-600 d-flex">
                    <i className="ph-fill ph-star" />
                  </span>
                  <span className="text-md fw-medium text-heading">4.8</span>
                  <span className="text-md fw-medium text-heading">(12K)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-2 col-lg-4 col-sm-6">
            <div className="vendor-card text-center px-16 pb-24">
              <div className="">
                <img
                  src="assets/images/thumbs/vendor-logo1.png"
                  alt=""
                  className="vendor-card__logo m-12"
                />
                <h6 className="title mt-32 text-lg">Best Buy</h6>
                <div className="flex-align gap-6 justify-content-center">
                  <span className="text-lg fw-medium text-warning-600 d-flex">
                    <i className="ph-fill ph-star" />
                  </span>
                  <span className="text-md fw-medium text-heading">4.8</span>
                  <span className="text-md fw-medium text-heading">(12K)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-2 col-lg-4 col-sm-6">
            <div className="vendor-card text-center px-16 pb-24">
              <div className="">
                <img
                  src="assets/images/thumbs/vendor-logo1.png"
                  alt=""
                  className="vendor-card__logo m-12"
                />
                <h6 className="title mt-32 text-lg">Organic Market</h6>
                <div className="flex-align gap-6 justify-content-center">
                  <span className="text-lg fw-medium text-warning-600 d-flex">
                    <i className="ph-fill ph-star" />
                  </span>
                  <span className="text-md fw-medium text-heading">4.8</span>
                  <span className="text-md fw-medium text-heading">(12K)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionalTwo;
