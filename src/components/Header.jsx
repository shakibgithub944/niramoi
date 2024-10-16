"use client";
import React, { useEffect, useState } from "react";
import query from "jquery";
import Link from "next/link";

const Header = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset < 150) {
        setScroll(false);
      } else if (window.pageYOffset > 150) {
        setScroll(true);
      }
      return () => (window.onscroll = null);
    };
    const selectElement = query(".js-example-basic-single");
    // selectElement.select2();

    return () => {
      if (selectElement.data("select2")) {
        // selectElement.select2("destroy");
      }
    };
  }, []);
  // Mobile menu support
  const [menuActive, setMenuActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const handleMenuClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const handleMenuToggle = () => {
    setMenuActive(!menuActive);
  };

  // Search control support
  const [activeSearch, setActiveSearch] = useState(false);
  const handleSearchToggle = () => {
    setActiveSearch(!activeSearch);
  };

  // category control support
  //   const [activeCategory, setActiveCategory] = useState(false);

  return (
    <>
      <div className="overlay" />
      <div
        // className={`side-overlay ${(menuActive || activeCategory) && "show"}`}
        className={`side-overlay ${menuActive && "show"}`}
      />
      {/* ==================== Search Box Start Here ==================== */}
      <form action="#" className={`search-box ${activeSearch && "active"}`}>
        <button
          onClick={handleSearchToggle}
          type="button"
          className="search-box__close position-absolute inset-block-start-0 inset-inline-end-0 m-16 w-48 h-48 border border-gray-100 rounded-circle flex-center text-white hover-text-gray-800 hover-bg-white text-2xl transition-1"
        >
          <i className="ph ph-x" />
        </button>
        <div className="container">
          <div className="position-relative">
            <input
              type="text"
              className="form-control py-12 px-24 text-xl rounded-pill pe-64"
              placeholder="Search for a product or brand"
            />
            <button
              type="submit"
              className="w-48 h-48 bg-main-600 rounded-circle flex-center text-xl text-white position-absolute top-50 translate-middle-y inset-inline-end-0 me-8"
            >
              <i className="ph ph-magnifying-glass" />
            </button>
          </div>
        </div>
      </form>
      {/* ==================== Search Box End Here ==================== */}
      {/* ==================== Mobile Menu Start Here ==================== */}
      <div
        className={`mobile-menu scroll-sm d-lg-none d-block ${
          menuActive && "active"
        }`}
      >
        <button
          onClick={() => {
            handleMenuToggle();
            setActiveIndex(null);
          }}
          type="button"
          className="close-button"
        >
          <i className="ph ph-x" />{" "}
        </button>
        <div className="mobile-menu__inner">
          <Link href="/" className="mobile-menu__logo">
            <img src="assets/images/logo/logo.png" alt="Logo" />
          </Link>
          <div className="mobile-menu__menu">
            {/* Nav Menu Start */}
            <ul className="nav-menu flex-align nav-menu--mobile">
              {/* Home Menu */}
              <li
                onClick={() => handleMenuClick(0)}
                className={`on-hover-item nav-menu__item has-submenu ${
                  activeIndex === 0 ? "d-block" : ""
                }`}
              >
                <Link href="#" className="nav-menu__link">
                  Home
                </Link>
              </li>

              {/* Shop Menu */}
              <li
                onClick={() => handleMenuClick(1)}
                className={`on-hover-item nav-menu__item has-submenu ${
                  activeIndex === 1 ? "d-block" : ""
                }`}
              >
                <Link href="#" className="nav-menu__link">
                  Shop
                </Link>
              </li>

              {/* Pages Menu */}
              <li
                onClick={() => handleMenuClick(2)}
                className={`on-hover-item nav-menu__item has-submenu ${
                  activeIndex === 2 ? "d-block" : ""
                }`}
              >
                <span className="badge-notification bg-warning-600 text-white text-sm py-2 px-8 rounded-4">
                  New
                </span>
                <Link href="#" className="nav-menu__link">
                  Pages
                </Link>
                <ul
                  className={`on-hover-dropdown common-dropdown nav-submenu scroll-sm ${
                    activeIndex === 2 ? "open" : ""
                  }`}
                >
                  <li className="common-dropdown__item nav-submenu__item">
                    <Link
                      href="/cart"
                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                      onClick={() => setActiveIndex(null)}
                    >
                      {" "}
                      Cart
                    </Link>
                  </li>
                  <li className="common-dropdown__item nav-submenu__item">
                    <Link
                      href="/checkout"
                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                      onClick={() => setActiveIndex(null)}
                    >
                      {" "}
                      Checkout{" "}
                    </Link>
                  </li>
                  <li className="common-dropdown__item nav-submenu__item">
                    <Link
                      href="/account"
                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                      onClick={() => setActiveIndex(null)}
                    >
                      {" "}
                      Account
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Blog Menu */}
              <li
                onClick={() => handleMenuClick(3)}
                className={`on-hover-item nav-menu__item has-submenu ${
                  activeIndex === 3 ? "d-block" : ""
                }`}
              >
                <Link href="#" className="nav-menu__link">
                  Blog
                </Link>
                <ul
                  className={`on-hover-dropdown common-dropdown nav-submenu scroll-sm ${
                    activeIndex === 3 ? "open" : ""
                  }`}
                >
                  <li className="common-dropdown__item nav-submenu__item">
                    <Link
                      href="/blog"
                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                      onClick={() => setActiveIndex(null)}
                    >
                      {" "}
                      Blog
                    </Link>
                  </li>
                  <li className="common-dropdown__item nav-submenu__item">
                    <Link
                      href="/blog-details"
                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                      onClick={() => setActiveIndex(null)}
                    >
                      {" "}
                      Blog Details
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Contact Us Menu */}
              <li className="nav-menu__item">
                <Link
                  href="/contact"
                  className="nav-menu__link"
                  onClick={() => setActiveIndex(null)}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
            {/* Nav Menu End */}
          </div>
        </div>
      </div>
      {/* ==================== Mobile Menu End Here ==================== */}
      {/* ======================= Middle Header Start ========================= */}
      <header className="header-middle bg-color-one border-bottom border-gray-100">
        <div className="container container-lg">
          <nav className="header-inner flex-between">
            {/* Logo Start */}
            <div className="logo">
              <Link href="/" className="link">
                <img src="assets/images/logo/logo.png" alt="Logo" />
              </Link>
            </div>
            {/* Logo End  */}
            {/* form location Start */}
            <form
              action="#"
              className="flex-align flex-wrap form-location-wrapper"
            >
              <div className="search-category d-flex h-48 select-border-end-0 radius-end-0 search-form d-sm-flex d-none">
                <div className="search-form__wrapper position-relative">
                  <input
                    type="text"
                    className="search-form__input common-input py-13 ps-16 pe-18 rounded-pill pe-44"
                    placeholder="Search for a product or brand"
                  />
                  <button
                    type="submit"
                    className="w-32 h-32 bg-main-600 rounded-circle flex-center text-xl text-white position-absolute top-50 translate-middle-y inset-inline-end-0 me-8"
                  >
                    <i className="ph ph-magnifying-glass" />
                  </button>
                </div>
              </div>
            </form>
            <Link
              href="/"
              className="border border-main-600 rounded text-main-600 p-5 h-25 hover-bg-main-800 flex-align gap-8 text-lg  d-md-none"
            >
              <div className="d-flex text-32">
                {/* <i className="ph ph-phone-call" /> */}
              </div>
              Upload Prescription
            </Link>
            {/* form location start */}
            {/* Header Middle Right start */}
            <div className="header-right flex-align d-lg-block d-none">
              <div className="flex-align flex-wrap gap-12">
                <button
                  type="button"
                  className="search-icon flex-align d-lg-none d-flex gap-4 item-hover"
                >
                  <span className="text-2xl text-gray-700 d-flex position-relative item-hover__text">
                    <i className="ph ph-magnifying-glass" />
                  </span>
                </button>
                <Link href="/cart" className="flex-align gap-4 item-hover">
                  <span className=" text-gray-700 d-flex position-relative me-6 mt-6 item-hover__text">
                    $ 00.00
                  </span>
                </Link>
                <Link href="/cart" className="flex-align gap-4 item-hover">
                  <span className="text-2xl text-gray-700 d-flex position-relative me-6 mt-6 item-hover__text">
                    <i className="ph ph-heart" />
                  </span>
                </Link>
                <Link href="/cart" className="flex-align gap-4 item-hover">
                  <span className="text-2xl text-gray-700 d-flex position-relative me-6 mt-6 item-hover__text">
                    <i className="ph ph-shopping-cart-simple" />
                    <span className="w-16 h-16 flex-center rounded-circle bg-main-600 text-white text-xs position-absolute top-n6 end-n4">
                      2
                    </span>
                  </span>
                </Link>
                <Link href="/cart" className="flex-align gap-4 item-hover">
                  <span className="text-2xl text-gray-700 d-flex position-relative me-6 mt-6 item-hover__text">
                    <i className="ph ph-user" />
                  </span>
                </Link>
              </div>
            </div>
            {/* Header Middle Right End  */}
          </nav>
        </div>
      </header>
      {/* ======================= Middle Header End ========================= */}
      {/* ==================== Header Start Here ==================== */}
      <header
        className={`header bg-white border-bottom border-gray-100 ${
          scroll && "fixed-header"
        }`}
      >
        <div className="container container-lg">
          <nav className="header-inner d-flex justify-content-between gap-8">
            <div className="flex-align menu-category-wrapper">
              {/* Category Dropdown Start */}

              {/* Category Dropdown End  */}
              {/* Menu Start  */}
              <div className="header-menu d-lg-block d-none">
                {/* Nav Menu Start */}
                <ul className="nav-menu flex-align ">
                  <li className="">
                    <Link href="/" className="text-secondary fw-medium">
                      Home
                    </Link>
                  </li>

                  <li className="">
                    <Link href="/" className="text-secondary fw-medium">
                      Health
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/" className="text-secondary fw-medium">
                      Diagnostics
                    </Link>
                  </li>
                  <li className="on-hover-item nav-menu__item has-submenu">
                    <span className="badge-notification bg-warning-600 text-white text-sm py-2 px-8 rounded-4">
                      New
                    </span>
                    <Link
                      href="/shop"
                      className="nav-menu__link text-secondary fw-medium"
                    >
                      Pages
                    </Link>
                    <ul className="on-hover-dropdown common-dropdown nav-submenu scroll-sm">
                      <li className="common-dropdown__item nav-submenu__item">
                        <Link
                          href="/cart"
                          className={(navData) =>
                            navData.isActive
                              ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
                              : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                          }
                        >
                          {" "}
                          Cart
                        </Link>
                      </li>
                      <li className="common-dropdown__item nav-submenu__item">
                        <Link
                          href="/checkout"
                          className={(navData) =>
                            navData.isActive
                              ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
                              : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                          }
                        >
                          {" "}
                          Checkout{" "}
                        </Link>
                      </li>
                      <li className="common-dropdown__item nav-submenu__item">
                        <Link
                          href="/account"
                          className={(navData) =>
                            navData.isActive
                              ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
                              : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                          }
                        >
                          {" "}
                          Account
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="">
                    <Link href="/" className="text-secondary fw-medium">
                      Medicine
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/" className="text-secondary fw-medium">
                      Wellness
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/" className="text-secondary fw-medium">
                      Health Care
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/" className="text-secondary fw-medium">
                      Products
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/" className="text-secondary fw-medium">
                      Men
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/" className="text-secondary fw-medium">
                      Woman
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/" className="text-secondary fw-medium">
                      Other
                    </Link>
                  </li>
                </ul>
                {/* Nav Menu End */}
              </div>
              {/* Menu End  */}
            </div>
            {/* Header Right start */}
            <div className="header-right flex-align">
              <Link
                href="/"
                className="fw-medium bg-main-600 rounded text-white p-12 h-100 hover-bg-main-800 flex-align gap-8 text-lg d-lg-flex d-none"
              >
                <div className="d-flex text-32">
                  {/* <i className="ph ph-phone-call" /> */}
                </div>
                Upload Prescription
              </Link>
              <div className="me-16 d-lg-none d-block">
                <div className="flex-align flex-wrap gap-12">
                  <button
                    onClick={handleSearchToggle}
                    type="button"
                    className="search-icon flex-align d-lg-none d-flex gap-4 item-hover"
                  >
                    <span className="text-2xl text-gray-700 d-flex position-relative item-hover__text">
                      <i className="ph ph-magnifying-glass" />
                    </span>
                  </button>
                  <Link href="/cart" className="flex-align gap-4 item-hover">
                    <span className="text-gray-700 d-flex position-relative me-6 mt-6 item-hover__text">
                      $00.00
                    </span>
                  </Link>
                  <Link href="/cart" className="flex-align gap-4 item-hover">
                    <span className="text-2xl text-gray-700 d-flex position-relative me-6 mt-6 item-hover__text">
                      <i className="ph ph-heart" />
                    </span>
                  </Link>
                  <Link href="/cart" className="flex-align gap-4 item-hover">
                    <span className="text-2xl text-gray-700 d-flex position-relative me-6 mt-6 item-hover__text">
                      <i className="ph ph-shopping-cart-simple" />
                      <span className="w-16 h-16 flex-center rounded-circle bg-main-600 text-white text-xs position-absolute top-n6 end-n4">
                        2
                      </span>
                    </span>
                  </Link>
                  <Link href="/cart" className="flex-align gap-4 item-hover">
                    <span className="text-2xl text-gray-700 d-flex position-relative me-6 mt-6 item-hover__text">
                      <i className="ph ph-user" />
                    </span>
                  </Link>
                </div>
              </div>
              <button
                onClick={handleMenuToggle}
                type="button"
                className="toggle-mobileMenu d-lg-none ms-3n text-gray-800 text-4xl d-flex"
              >
                {" "}
                <i className="ph ph-list" />{" "}
              </button>
            </div>
            {/* Header Right End  */}
          </nav>
        </div>
      </header>
      {/* ==================== Header End Here ==================== */}
    </>
  );
};

export default Header;
