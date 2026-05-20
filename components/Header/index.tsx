"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const pathUrl = usePathname();

  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 50) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
    return () => window.removeEventListener("scroll", handleStickyMenu);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 w-full z-50 transition-all duration-300 ${
        stickyMenu
          ? "bg-white/90 backdrop-blur-md shadow-sm dark:bg-black/90 dark:border-b dark:border-gray-800 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Left: Logo */}
        <div className="flex items-center w-full xl:w-1/4">
          <Link href="/" className="relative block h-[45px] w-[110px]">
            <Image
              src="/images/logo/app_logo.png"
              alt="logo"
              fill
              priority
              className="w-full object-contain dark:invert"
            />
          </Link>
        </div>

        {/* Hamburger Toggle BTN (Mobile) */}
        <div className="flex xl:hidden items-center gap-4">
          <ThemeToggler />
          <button
            aria-label="hamburger Toggler"
            onClick={() => setNavigationOpen(!navigationOpen)}
            className="text-gray-800 dark:text-white"
          >
            <span className="relative block h-5 w-6 cursor-pointer">
              <span className="absolute right-0 block h-full w-full">
                <span
                  className={`relative left-0 top-0 my-1 block h-[2px] rounded-sm transition-all duration-200 ${
                    navigationOpen ? "w-0" : "w-full"
                  } ${
                    stickyMenu || navigationOpen ? "bg-black dark:bg-white" : "bg-white"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-[2px] rounded-sm transition-all duration-200 ${
                    navigationOpen ? "w-0" : "w-full"
                  } ${
                    stickyMenu || navigationOpen ? "bg-black dark:bg-white" : "bg-white"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-[2px] rounded-sm transition-all duration-200 ${
                    navigationOpen ? "w-0" : "w-full"
                  } ${
                    stickyMenu || navigationOpen ? "bg-black dark:bg-white" : "bg-white"
                  }`}
                ></span>
              </span>
              <span className="absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-[2px] rounded-sm transition-all duration-200 ${
                    navigationOpen ? "h-full" : "h-0"
                  } ${
                    stickyMenu || navigationOpen ? "bg-black dark:bg-white" : "bg-white"
                  }`}
                ></span>
                <span
                  className={`absolute left-0 top-2 block h-[2px] w-full rounded-sm transition-all duration-200 ${
                    navigationOpen ? "h-[2px]" : "h-0"
                  } ${
                    stickyMenu || navigationOpen ? "bg-black dark:bg-white" : "bg-white"
                  }`}
                ></span>
              </span>
            </span>
          </button>
        </div>

        {/* Center: Desktop Nav */}
        <div
          className={`absolute left-0 top-[100%] w-full bg-white dark:bg-black xl:static xl:flex xl:w-auto xl:flex-1 xl:justify-center xl:bg-transparent xl:dark:bg-transparent ${
            navigationOpen ? "block shadow-lg py-6 px-4" : "hidden xl:flex"
          }`}
        >
          <nav>
            <ul className="flex flex-col xl:flex-row items-center gap-6 xl:gap-8">
              {menuData.map((menuItem, key) => (
                <li key={key} className={menuItem.submenu ? "group relative" : ""}>
                  {menuItem.submenu ? (
                    <>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === menuItem.id ? null : menuItem.id)}
                        className={`font-montserrat text-xs font-medium uppercase tracking-widest flex cursor-pointer items-center justify-between gap-2 transition-colors ${
                          pathUrl === menuItem.path ||
                          menuItem.submenu.some((item) => pathUrl === item.path)
                            ? "text-red-600"
                            : navigationOpen || stickyMenu
                            ? "text-gray-800 hover:text-red-600 dark:text-gray-200 dark:hover:text-red-600"
                            : "text-white/90 hover:text-white"
                        }`}
                      >
                        {menuItem.title}
                        <svg
                          className={`h-3 w-3 ${
                            pathUrl === menuItem.path ||
                            menuItem.submenu.some((item) => pathUrl === item.path)
                              ? "fill-red-600"
                              : navigationOpen || stickyMenu
                              ? "fill-gray-800 dark:fill-gray-200 group-hover:fill-red-600 dark:group-hover:fill-red-600"
                              : "fill-white/90 group-hover:fill-white"
                          }`}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                        </svg>
                      </button>

                      <ul
                        className={`dropdown ${activeDropdown === menuItem.id ? "flex" : ""} ${
                          stickyMenu || pathUrl !== "/" ? "text-gray-800" : "text-white"
                        } dark:text-white dark:hover:text-red-600`}
                      >
                        {menuItem.submenu.map((item, key) => (
                          <li
                            key={key}
                            className={`font-montserrat text-xs font-medium uppercase tracking-widest transition-colors ${
                              pathUrl === item.path
                                ? "text-red-600"
                                : "text-gray-800 hover:text-red-600 dark:text-gray-200 dark:hover:text-red-600"
                            }`}
                          >
                            <Link href={item.path || "#"}>{item.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      href={`${menuItem.path}`}
                      className={`font-montserrat text-xs font-medium uppercase tracking-widest transition-colors ${
                        pathUrl === menuItem.path
                          ? "text-red-600"
                          : navigationOpen || stickyMenu
                          ? "text-gray-800 hover:text-red-600 dark:text-gray-200 dark:hover:text-red-600"
                          : "text-white/90 hover:text-white"
                      }`}
                    >
                      {menuItem.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Right: Theme Toggler */}
        <div className="hidden xl:flex w-1/4 items-center justify-end">
          <ThemeToggler />
        </div>

      </div>
    </header>
  );
};

export default Header;
