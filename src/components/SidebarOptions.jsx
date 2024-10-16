"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import MenuOptions from "../utils/menuOptions.json";
import Link from "next/link";

const SidebarOptions = () => {
  const [activeMenus, setActiveMenus] = useState({});

  const toggleMenu = (level, index) => {
    setActiveMenus((prev) => ({
      ...prev,
      [level]: prev[level] === index ? null : index,
    }));
  };

  // Custom link component to replace Next.js Link
  const CustomLink = ({ href, children }) => (
    <Link href={href} className="text-dark">
      {children}
    </Link>
  );

  return (
    <div className="transition-all">
      <div className="p-3 mt-5">
        <ul className="list-none">
          {MenuOptions.map((menu, index) => (
            <li key={index} className="mb-2 my-6 py-8 px-2">
              <span
                onClick={() => toggleMenu("main", index)}
                className="d-flex justify-content-between align-items-center"
              >
                <span className="text-gray-800">{menu.title}</span>
                {activeMenus.main === index ? (
                  <ChevronDown size={20} />
                ) : (
                  <ChevronRight size={20} />
                )}
              </span>
              {activeMenus.main === index && (
                <ul className="pl-3 mt-2">
                  {menu.submenus.map((submenu, subIndex) => (
                    <li key={subIndex} className="py-1 my-5">
                      {submenu.submenus ? (
                        <>
                          <span
                            onClick={() => toggleMenu("sub", subIndex)}
                            className="d-flex justify-content-between align-items-center"
                          >
                            <span className="text-gray-600">
                              {submenu.title}
                            </span>
                            {activeMenus.sub === subIndex ? (
                              <ChevronDown size={16} />
                            ) : (
                              <ChevronRight size={16} />
                            )}
                          </span>
                          {activeMenus.sub === subIndex && (
                            <ul className="pl-3 mt-2">
                              {submenu.submenus.map(
                                (subSubmenu, subSubIndex) => (
                                  <li key={subSubIndex} className="py-1 my-3">
                                    <CustomLink
                                      href={subSubmenu.link || "/shop"}
                                    >
                                      <span className="text-gray-600 text-sm">
                                        {subSubmenu.title}
                                      </span>
                                    </CustomLink>
                                  </li>
                                )
                              )}
                            </ul>
                          )}
                        </>
                      ) : (
                        <CustomLink href={submenu.link || "/shop"}>
                          <span className="text-gray-600">{submenu.title}</span>
                        </CustomLink>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SidebarOptions;
