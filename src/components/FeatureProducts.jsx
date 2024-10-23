"use client";
import { Slider } from "@/app/layout";
import Link from "next/link";
import Products from "../utils/featureProducts.json";
const FeatureProducts = () => {
  function SampleNextArrow(props) {
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
  }
  function SamplePrevArrow(props) {
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
  }
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          arrows: true,
        },
      },
    ],
  };
  return (
    <div className="short-product pt-40">
      <div className="container container-lg">
        <div className="row gy-4">
          <div className="col-xxl-4 col-lg-5 col-sm-6">
            <div className="p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2 ">
              <div className="p-16 bg-main-50 rounded-16 mb-32">
                <h6 className="underlined-line position-relative mb-0 pb-16 d-inline-block">
                  Featured Products
                </h6>
              </div>
              <div className="short-product-list arrow-style-two">
                <Slider {...settings}>
                  <div>
                    {Products.map((product, index) => (
                      <div key={index} className="flex-align gap-16 mb-10">
                        <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                          <Link href="/product-details" className="link">
                            <img src={product?.image} alt={product?.title} />
                          </Link>
                        </div>
                        <div className="product-card__content mt-12">
                          <h6 className="title text-lg fw-semibold mt-8 mb-8">
                            <Link
                              href="/product-details-two"
                              className="link text-line-1"
                            >
                              {product?.title}
                            </Link>
                          </h6>
                          <div className="product-card__price flex-align gap-8">
                            <span className="text-heading text-md fw-semibold d-block">
                              ${product?.currentPrice}
                            </span>
                            <span className="text-gray-400 text-md fw-semibold d-block text-decoration-line-through">
                              ${product?.originalPrice}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div>
                    {Products.map((product, index) => (
                      <div key={index} className="flex-align gap-16 mb-10">
                        <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                          <Link href="/product-details" className="link">
                            <img src={product?.image} alt={product?.title} />
                          </Link>
                        </div>
                        <div className="product-card__content mt-12">
                          <h6 className="title text-lg fw-semibold mt-8 mb-8">
                            <Link
                              href="/product-details-two"
                              className="link text-line-1"
                            >
                              {product?.title}
                            </Link>
                          </h6>
                          <div className="product-card__price flex-align gap-8">
                            <span className="text-heading text-md fw-semibold d-block">
                              ${product?.currentPrice}
                            </span>
                            <span className="text-gray-400 text-md fw-semibold d-block text-decoration-line-through">
                              ${product?.originalPrice}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Slider>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-lg-5 col-sm-6">
            <div className="p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2 ">
              <div className="p-16 bg-main-50 rounded-16 mb-32">
                <h6 className="underlined-line position-relative mb-0 pb-16 d-inline-block">
                  Top Selling Products
                </h6>
              </div>
              <div className="short-product-list arrow-style-two">
                <Slider {...settings}>
                  <div>
                    {Products.map((product, index) => (
                      <div key={index} className="flex-align gap-16 mb-10">
                        <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                          <Link href="/product-details" className="link">
                            <img src={product?.image} alt={product?.title} />
                          </Link>
                        </div>
                        <div className="product-card__content mt-12">
                          <h6 className="title text-lg fw-semibold mt-8 mb-8">
                            <Link
                              href="/product-details-two"
                              className="link text-line-1"
                            >
                              {product?.title}
                            </Link>
                          </h6>
                          <div className="product-card__price flex-align gap-8">
                            <span className="text-heading text-md fw-semibold d-block">
                              ${product?.currentPrice}
                            </span>
                            <span className="text-gray-400 text-md fw-semibold d-block text-decoration-line-through">
                              ${product?.originalPrice}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div>
                    {Products.map((product, index) => (
                      <div key={index} className="flex-align gap-16 mb-10">
                        <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                          <Link href="/product-details" className="link">
                            <img src={product?.image} alt={product?.title} />
                          </Link>
                        </div>
                        <div className="product-card__content mt-12">
                          <h6 className="title text-lg fw-semibold mt-8 mb-8">
                            <Link
                              href="/product-details-two"
                              className="link text-line-1"
                            >
                              {product?.title}
                            </Link>
                          </h6>
                          <div className="product-card__price flex-align gap-8">
                            <span className="text-heading text-md fw-semibold d-block">
                              ${product?.currentPrice}
                            </span>
                            <span className="text-gray-400 text-md fw-semibold d-block text-decoration-line-through">
                              ${product?.originalPrice}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Slider>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-lg-5 col-sm-6">
            <div className="p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2 ">
              <div className="p-16 bg-main-50 rounded-16 mb-32">
                <h6 className="underlined-line position-relative mb-0 pb-16 d-inline-block">
                  On-Sale Products
                </h6>
              </div>
              <div className="short-product-list arrow-style-two">
                <Slider {...settings}>
                  <div>
                    {Products.map((product, index) => (
                      <div key={index} className="flex-align gap-16 mb-10">
                        <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                          <Link href="/product-details" className="link">
                            <img src={product?.image} alt={product?.title} />
                          </Link>
                        </div>
                        <div className="product-card__content mt-12">
                          <h6 className="title text-lg fw-semibold mt-8 mb-8">
                            <Link
                              href="/product-details-two"
                              className="link text-line-1"
                            >
                              {product?.title}
                            </Link>
                          </h6>
                          <div className="product-card__price flex-align gap-8">
                            <span className="text-heading text-md fw-semibold d-block">
                              ${product?.currentPrice}
                            </span>
                            <span className="text-gray-400 text-md fw-semibold d-block text-decoration-line-through">
                              ${product?.originalPrice}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div>
                    {Products.map((product, index) => (
                      <div key={index} className="flex-align gap-16 mb-10">
                        <div className="w-90 h-90 rounded-12 border border-gray-100 flex-shrink-0">
                          <Link href="/product-details" className="link">
                            <img src={product?.image} alt={product?.title} />
                          </Link>
                        </div>
                        <div className="product-card__content mt-12">
                          <h6 className="title text-lg fw-semibold mt-8 mb-8">
                            <Link
                              href="/product-details-two"
                              className="link text-line-1"
                            >
                              {product?.title}
                            </Link>
                          </h6>
                          <div className="product-card__price flex-align gap-8">
                            <span className="text-heading text-md fw-semibold d-block">
                              ${product?.currentPrice}
                            </span>
                            <span className="text-gray-400 text-md fw-semibold d-block text-decoration-line-through">
                              ${product?.originalPrice}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureProducts;
