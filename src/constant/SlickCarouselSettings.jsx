"use client";
import { memo } from "react";

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

export const Settings = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 5,
  slidesToScroll: 5,
  initialSlide: 0,
  // autoplay: true,
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
        slidesToShow: 4,
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
