import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <div>
      <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
        <Link
          href="/product-details-two"
          className="product-card__thumb flex-center rounded-16 bg-white position-relative"
        >
          <span
            className={`product-card__badge px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0 ${
              product?.status === "Sold"
                ? "bg-neutral-600"
                : product?.status === "Available"
                ? "bg-main-600"
                : "bg-warning-600"
            }`}
          >
            {product?.status}
          </span>
          <img
            src={product?.image}
            alt={product?.title}
            style={{ width: "100%", height: "70%" }}
          />
        </Link>
        <div className="product-card__content mt-8">
          <h5 className="title text-lg fw-semibold mt-12 mb-8">
            <Link href="/product-details-two" className="link text-line-2">
              {product?.title}
            </Link>
          </h5>
          <div className="product-card__price my-10">
            <span className="text-heading text-md fw-semibold">
              {product?.currentPrice}
              <span className="text-gray-500 fw-normal text-sm">
                {product?.quantityInfo}
              </span>
            </span>
            <p className="text-gray-400 text-sm fw-semibold text-decoration-line-through">
              {product?.originalPrice}
            </p>
          </div>
          <Link
            href="/cart"
            className="product-card__cart btn bg-gray-50 text-heading hover-bg-main-600 hover-text-white py-11 px-24 rounded-8 flex-center gap-8 fw-medium"
          >
            Add To Cart <i className="ph ph-shopping-cart" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
