import Link from "next/link";
import MenuOptions from "../utils/menuOptions.json";

const SidebarOptions = () => {
  return (
    <div className="w-265 d-lg-block d-none flex-shrink-0">
      <div className="responsive-dropdown style-two common-dropdown nav-submenu p-0 submenus-submenu-wrapper shadow-none border border-gray-100 position-relative border-top-0">
        <button
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
        <ul className="responsive-dropdown__list scroll-sm p-0 py-8 overflow-y-auto ">
          {MenuOptions.map((menu, index) => (
            <li key={index} className="has-submenus-submenu">
              <Link
                href="#"
                className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
              >
                <span>{menu?.title}</span>
                <span className="icon text-md d-flex ms-auto">
                  <i className="ph ph-caret-right" />
                </span>
              </Link>
              <div className="submenus-submenu py-16">
                <h6 className="text-lg px-16 submenus-submenu__title">
                  {menu?.title}
                </h6>
                <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                  {menu?.submenus?.map((subMenu, index) => (
                    <li key={index}>
                      <Link href={`/${subMenu?.link}`}>{subMenu?.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SidebarOptions;
