import Link from "next/link";
import React from "react";

const BottomTab = () => {
  return (
    <nav className="d-md-none fixed-bottom bg-white border-top">
      <div
        className="d-flex justify-content-around align-items-center"
        style={{ height: "60px" }}
      >
        <div className="text-center">
          <i className="ph ph-house" />
          <div className="small">
            <Link href="/" className="text-dark">
              Home
            </Link>{" "}
          </div>
        </div>
        <div className="text-center">
          <i className="ph ph-package" />
          <div className="small">
            <Link href="/shop" className="text-dark">
              Product
            </Link>
          </div>
        </div>
        <div className="text-center">
          <i className="ph ph-list" />
          <div className="small">
            <Link href="/shop" className="text-dark">
              Category
            </Link>
          </div>
        </div>
        <div className="text-center">
          <i className="ph ph-shopping-cart-simple" />
          <div className="small">
            <Link href="/shop" className="text-dark">
              Cart
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default BottomTab;
