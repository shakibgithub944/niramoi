"use client";
import React, { useEffect, useState } from "react";
import query from "jquery";
import Link from "next/link";
import MenuOptions from "../utils/menuOptions.json";

const HeaderTwo = ({ category }) => {
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
  const [activeCategory, setActiveCategory] = useState(false);
  const handleCategoryToggle = () => {
    setActiveCategory(!activeCategory);
  };
  const [activeIndexCat, setActiveIndexCat] = useState(null);
  const handleCatClick = (index) => {
    setActiveIndexCat(activeIndexCat === index ? null : index);
  };

  return (
    <>
      <div className="overlay" />
      <div
        className={`side-overlay ${(menuActive || activeCategory) && "show"}`}
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
              className="form-control py-16 px-24 text-xl rounded-pill pe-64"
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
              <li
                onClick={() => handleMenuClick(0)}
                className={`on-hover-item nav-menu__item `}
              >
                <Link href="#" className="nav-menu__link">
                  Home
                </Link>
              </li>
              <li
                onClick={() => handleMenuClick(1)}
                className={`on-hover-item nav-menu__item has-submenu`}
              >
                <Link href="#" className="nav-menu__link">
                  Shop
                </Link>
              </li>
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
              </li>
              <li
                onClick={() => handleMenuClick(3)}
                className={`on-hover-item nav-menu__item`}
              >
                <Link href="#" className="nav-menu__link">
                  Blog
                </Link>
              </li>
              <li className="nav-menu__item">
                <Link href="/contact" className="nav-menu__link">
                  Contact Us
                </Link>
              </li>
            </ul>
            {/* Nav Menu End */}
          </div>
        </div>
      </div>
      {/* ==================== Mobile Menu End Here ==================== */}
      {/* ======================= Middle Header Two Start ========================= */}
      <header className="header-middle style-two bg-color-neutral">
        <div className="container container-lg">
          <nav className="header-inner flex-between">
            {/* Logo Start */}
            <div className="logo">
              <Link href="/" className="link">
                <img src="assets/images/logo/logo-two.png" alt="Logo" />
              </Link>
            </div>
            {/* Logo End  */}
            {/* ------------------- form Category Start ------------------*/}
            <div className="flex-align gap-16">
              <div className="select-dropdown-for-home-two d-lg-none d-block"></div>
              <form
                action="#"
                className="flex-align flex-wrap form-location-wrapper"
              >
                <div className="search-category style-two d-flex h-40 search-form d-sm-flex d-none">
                  <select
                    defaultValue={1}
                    className="js-example-basic-single border border-gray-200 border-end-0 rounded-0 border-0"
                    name="state"
                  >
                    <option value={1}>All Categories</option>
                    <option value={1}>Grocery</option>
                    <option value={1}>Breakfast &amp; Dairy</option>
                    <option value={1}>Vegetables</option>
                    <option value={1}>Milks and Dairies</option>
                    <option value={1}>Pet Foods &amp; Toy</option>
                    <option value={1}>Breads &amp; Bakery</option>
                    <option value={1}>Fresh Seafood</option>
                    <option value={1}>Fronzen Foods</option>
                    <option value={1}>Noodles &amp; Rice</option>
                    <option value={1}>Ice Cream</option>
                  </select>
                  <div className="search-form__wrapper position-relative">
                    <input
                      type="text"
                      className="search-form__input common-input py-10 ps-14 pe-16 rounded-0 border-0"
                      placeholder="Search for a product or brand"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-main-two-600 flex-center text-xl text-white flex-shrink-0 w-48 hover-bg-main-two-700 d-lg-flex d-none"
                  >
                    <i className="ph ph-magnifying-glass" />
                  </button>
                </div>
              </form>
            </div>
            {/* form Category start */}
            {/* Header Middle Right start */}
            <div className="header-right flex-align d-lg-block d-none">
              <div className="header-two-activities flex-align flex-wrap gap-32">
                <button
                  type="button"
                  className="flex-align search-icon d-lg-none d-flex gap-4 item-hover-two"
                >
                  <span className="text-2xl text-white d-flex position-relative item-hover__text">
                    <i className="ph ph-magnifying-glass" />
                  </span>
                </button>
                <Link
                  href="/account"
                  className="flex-align flex-column gap-8 item-hover-two"
                >
                  <span className="text-2xl text-white d-flex position-relative item-hover__text">
                    <i className="ph ph-user" />
                  </span>
                  <span className="text-md text-white item-hover__text d-none d-lg-flex">
                    Profile
                  </span>
                </Link>
                <Link
                  href="/cart"
                  className="flex-align flex-column gap-8 item-hover-two"
                >
                  <span className="text-2xl text-white d-flex position-relative me-6 mt-6 item-hover__text">
                    <i className="ph ph-shopping-cart-simple" />
                    <span className="w-16 h-16 flex-center rounded-circle bg-main-two-600 text-white text-xs position-absolute top-n6 end-n4">
                      2
                    </span>
                  </span>
                  <span className="text-md text-white item-hover__text d-none d-lg-flex">
                    Cart
                  </span>
                </Link>
              </div>
            </div>
            {/* Header Middle Right End  */}
          </nav>
        </div>
      </header>
      {/* ======================= Middle Header Two End ========================= */}
      {/* ==================== Header Two Start Here ==================== */}
      <header
        className={`header bg-white border-bottom border-gray-100 ${
          scroll && "fixed-header"
        }`}
      >
        <div className="container container-lg">
          <nav className="header-inner d-flex justify-content-between gap-8">
            <div className="flex-align menu-category-wrapper">
              {/* ------------Category Dropdown Start --------------*/}
              <div
                className={`category-two ${
                  category === false ? "d-block" : "d-none"
                } `}
              >
                <button
                  onClick={handleCategoryToggle}
                  type="button"
                  className="category__button flex-align gap-8 fw-medium bg-main-two-600 p-16 text-white"
                >
                  <span className="icon text-2xl d-xs-flex d-none">
                    <i className="ph ph-dots-nine" />
                  </span>
                  <span className="d-sm-flex d-none">All</span> Categories
                  <span className="arrow-icon text-xl d-flex">
                    <i className="ph ph-caret-down" />
                  </span>
                </button>
                <div
                  className={`responsive-dropdown cat common-dropdown d-lg-none d-block nav-submenu p-0 submenus-submenu-wrapper shadow-none border border-gray-100 ${
                    activeCategory && "active"
                  }`}
                >
                  <button
                    onClick={() => {
                      handleCategoryToggle();
                      setActiveIndexCat(null);
                    }}
                    type="button"
                    className="close-responsive-dropdown rounded-circle text-xl position-absolute inset-inline-end-0 inset-block-start-0 mt-4 me-8 d-lg-none d-flex"
                  >
                    <i className="ph ph-x" />{" "}
                  </button>
                  <div className="logo px-16 d-lg-none d-block">
                    <Link href="/" className="link">
                      <img src="assets/images/logo/logo.png" alt="Logo" />
                    </Link>
                  </div>
                  <ul className="scroll-sm p-0 py-8 overflow-y-auto">
                    {MenuOptions.map((menu, index) => (
                      <li
                        key={index}
                        onClick={() => handleCatClick(index)}
                        className={`has-submenus-submenu ${
                          activeIndexCat === index ? "active" : ""
                        }`}
                      >
                        <Link
                          onClick={() => setActiveIndexCat(null)}
                          href="#"
                          className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                        >
                          <span>{menu?.title}</span>
                          <span className="icon text-md d-flex ms-auto">
                            <i className="ph ph-caret-right" />
                          </span>
                        </Link>
                        <div
                          className={`submenus-submenu py-16 ${
                            activeIndexCat === index ? "open" : ""
                          }`}
                        >
                          <h6 className="text-lg px-16 submenus-submenu__title">
                            {menu?.title}
                          </h6>
                          <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                            {menu?.submenus?.map((subMenu, index) => (
                              <li key={index}>
                                <Link href={`/${subMenu?.link}`}>
                                  {subMenu?.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* Category Dropdown End  */}
              {/* Menu Start  */}
              <div className="header-menu d-lg-block d-none">
                {/* Nav Menu Start */}
                <ul className="nav-menu flex-align ">
                  <li className="on-hover-item nav-menu__item">
                    <Link href="#" className="nav-menu__link">
                      Home
                    </Link>
                  </li>
                  <li className="on-hover-item nav-menu__item">
                    <Link href="#" className="nav-menu__link">
                      Shop
                    </Link>
                  </li>
                  <li className="on-hover-item nav-menu__item has-submenu">
                    <span className="badge-notification bg-warning-600 text-white text-sm py-2 px-8 rounded-4">
                      New
                    </span>
                    <Link href="#" className="nav-menu__link">
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
                          Account
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="on-hover-item nav-menu__item">
                    <Link href="#" className="nav-menu__link">
                      Blog
                    </Link>
                  </li>
                  <li className="nav-menu__item">
                    <Link
                      href="/contact"
                      className={(navData) =>
                        navData.isActive
                          ? "nav-menu__link activePage"
                          : "nav-menu__link"
                      }
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
                {/* Nav Menu End */}
              </div>
              {/* Menu End  */}
            </div>
            {/* Header Right start */}
            <div className="header-right flex-align">
              <div className="me-8 d-lg-none d-block">
                <div className="header-two-activities flex-align flex-wrap gap-32">
                  <button
                    onClick={handleSearchToggle}
                    type="button"
                    className="flex-align search-icon d-lg-none d-flex gap-4 item-hover-two"
                  >
                    <span className="text-2xl text-white d-flex position-relative item-hover__text">
                      <i className="ph ph-magnifying-glass" />
                    </span>
                  </button>
                  <Link
                    href="/account"
                    className="flex-align flex-column gap-8 item-hover-two"
                  >
                    <span className="text-2xl text-white d-flex position-relative item-hover__text">
                      <i className="ph ph-user" />
                    </span>
                    <span className="text-md text-white item-hover__text d-none d-lg-flex">
                      Profile
                    </span>
                  </Link>
                  <Link
                    href="/cart"
                    className="flex-align flex-column gap-8 item-hover-two"
                  >
                    <span className="text-2xl text-white d-flex position-relative me-6 mt-6 item-hover__text">
                      <i className="ph ph-shopping-cart-simple" />
                      <span className="w-16 h-16 flex-center rounded-circle bg-main-two-600 text-white text-xs position-absolute top-n6 end-n4">
                        2
                      </span>
                    </span>
                    <span className="text-md text-white item-hover__text d-none d-lg-flex">
                      Cart
                    </span>
                  </Link>
                </div>
              </div>
              <button
                onClick={handleMenuToggle}
                type="button"
                className="toggle-mobileMenu d-lg-none ms-3n text-gray-800 text-4xl d-flex"
              >
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

export default HeaderTwo;
