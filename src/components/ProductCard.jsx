import Link from "next/link";
import React from "react";

const ProductCard = () => {
  return (
    <div>
      <div className="product-card h-100 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
        <Link
          href="/product-details-two"
          className="product-card__thumb flex-center rounded-8 bg-gray-50 position-relative"
        >
          <span className="product-card__badge bg-main-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0">
            Sold
          </span>
          <img
            src="assets/images/thumbs/product-two-img1.png"
            alt=""
            className="w-auto max-w-unset"
          />
        </Link>
        <div className="product-card__content mt-8">
          <h5 className="title text-lg fw-semibold mt-12 mb-8">
            <Link
              href="/product-details-two"
              className="link text-line-2"
              tabIndex={0}
            >
              Taylor Farms Broccoli Florets Vegetables
            </Link>
          </h5>
          <div className="product-card__price my-20">
            <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
              $28.99
            </span>
            <span className="text-heading text-md fw-semibold ">
              $14.99 <span className="text-gray-500 fw-normal">/Qty</span>{" "}
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
  );
};

export default ProductCard;
