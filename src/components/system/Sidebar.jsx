"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ChevronRight, ChevronUp } from "lucide-react";

const MenuItem = ({ item, pathname, level = 0, closeSidebar }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Open the submenu if the current path is inside it
    if (item.submenu && item.submenu.some(subItem => pathname.startsWith(subItem.href))) {
      setIsOpen(true);
    }
  }, [pathname, item.submenu]);

  const toggleSubmenu = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const isActive = pathname === item.href || (item.submenu && item.submenu.some(subItem => pathname.startsWith(subItem.href)));

  return (
    <li
      className={cn(
        isActive
          ? "before:bg-[#00aeef]"
          : "hover:bg-slate-100 dark:hover:bg-[rgba(225,225,225,0.1)]",
        "relative before:absolute before:-left-4 before:w-1.5 before:h-4/5 before:rounded-r-md before:top-1/2 before:-translate-y-1/2",
        level > 0 && "ml-4"
      )}
    >
      <Link
        href={item.submenu ? "#" : item.href}
        className={cn(
          isActive
            ? "text-[#00aeef] bg-gray-50 dark:bg-gray-900/80"
            : "hover:bg-slate-100 dark:hover:bg-[rgba(225,225,225,0.1)] hover:backdrop-blur-3xl",
          "justify-between flex items-center px-4 py-2.5 gap-x-3 rounded-md"
        )}
        onClick={item.submenu ? toggleSubmenu : closeSidebar}
      >
        <div className="flex items-center gap-x-3">
          {item.icon}
          <span>{item.title}</span>
        </div>
        {item.submenu && (
          isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />
        )}
      </Link>
      {item.submenu && isOpen && (
        <ul className="mt-2 space-y-1">
          {item.submenu.map((subItem) => (
            <MenuItem
              key={subItem.href}
              item={subItem}
              pathname={pathname}
              level={level + 1}
              closeSidebar={closeSidebar}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

export default function Sidebar({ className, items, ...props }) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call once to set initial state

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-2 left-4 z-50 p-2.5 rounded-md bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5m-16.5 6h16.5m-16.5 6h16.5"
          />
        </svg>
      </button>
      <aside
        className={cn(
          "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1 h-[85vh] py-3 overflow-y-auto overflow-x-hidden transition-all lg:translate-x-0 bg-white dark:bg-transparent rounded-xl flex-col justify-between px-4 lg:transition-none ease-linear md:sticky fixed top-[60px] mt-2 z-40 w-full",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full",
          className
        )}
        {...props}
      >
        <nav className="flex-1 pt-6">
          <ul className="text-gray-700 dark:text-gray-300 space-y-3">
            {items.map((item) => (
              <MenuItem
                key={item.href}
                item={item}
                pathname={pathname}
                closeSidebar={closeSidebar}
              />
            ))}
          </ul>
        </nav>
      </aside>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={closeSidebar}
        ></div>
      )}
    </>
  );
}