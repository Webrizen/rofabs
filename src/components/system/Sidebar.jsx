"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ChevronRight, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const MenuItem = ({ item, pathname, level = 0, closeSidebar }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathnames = usePathname();

  useEffect(() => {
    if (
      item.submenu &&
      item.submenu.some((subItem) => pathname.startsWith(subItem.href))
    ) {
      setIsOpen(true);
    }
  }, [pathname, item.submenu]);

  const toggleSubmenu = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const isActive =
    pathname === item.href ||
    (item.submenu &&
      item.submenu.some((subItem) => pathname.startsWith(subItem.href))) ||
    (item.title === "Core Operations" && pathname.startsWith("/dashboard"));

  return (
    <motion.li
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className={cn(
        isActive
          ? "before:bg-[#00aeef]"
          : "hover:bg-slate-100 dark:hover:bg-[rgba(225,225,225,0.1)]",
        "relative before:absolute before:-left-4 before:w-1.5 before:h-4/5 before:rounded-r-md before:top-1/2 before:-translate-y-1/2",
        level > 0 && "ml-4",
        pathnames === item.href
          ? "before:bg-[#00aeef]"
          : "hover:bg-slate-100 dark:hover:bg-[rgba(225,225,225,0.1)]",
        "relative before:absolute before:-left-4 before:w-1.5 before:h-4/5 before:rounded-r-md before:top-1/2 before:-translate-y-1/2 "
      )}
    >
      <Link
        href={item.submenu ? "#" : item.href}
        className={cn(
          isActive
            ? "text-[#00aeef] bg-gray-50 dark:bg-gray-900/80"
            : "hover:bg-slate-100 dark:hover:bg-[rgba(225,225,225,0.1)] hover:backdrop-blur-3xl",
          "justify-between flex items-center px-4 py-2.5 gap-x-3 rounded-md transition-all duration-200 ease-in-out"
        )}
        onClick={item.submenu ? toggleSubmenu : closeSidebar}
      >
        <div className="flex items-center gap-x-3">
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.2 }}
          >
            {item.icon}
          </motion.div>
          <span>{item.title}</span>
        </div>
        {item.submenu && (
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </motion.div>
        )}
      </Link>
      <AnimatePresence>
        {item.submenu && isOpen && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="mt-2 space-y-1 overflow-hidden"
          >
            {item.submenu.map((subItem) => (
              <MenuItem
                key={subItem.href}
                item={subItem}
                pathname={pathname}
                level={level + 1}
                closeSidebar={closeSidebar}
              />
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.li>
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

    window.addEventListener("resize", handleResize);
    handleResize(); // Call once to set initial state

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <motion.button
        onClick={toggleSidebar}
        className="lg:hidden fixed -top-[70px] left-4 z-50 p-2.5 rounded-md bg-gray-100 dark:bg-transparent dark:hover:bg-[rgba(225,225,225,0.1)] backdrop-blur-3xl  text-gray-800 dark:text-gray-200"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 9h16.5m-16.5 6.75h16.5"
          />
        </svg>
      </motion.button>
      <motion.aside
        initial={{ x: "-100%" }}
        animate={{ x: isSidebarOpen ? 0 : "-100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={cn(
          "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1 h-full py-3 overflow-y-auto overflow-x-hidden lg:translate-x-0 bg-white dark:bg-transparent rounded-xl flex-col justify-between px-4 lg:transition-none ease-linear md:sticky fixed md:top-[50px] mt-0 w-full z-50",
          className
        )}
        {...props}
      >
        <nav className="flex-1 pt-6">
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
            className="text-gray-700 dark:text-gray-300 space-y-3"
          >
            {items.map((item) => (
              <MenuItem
                key={item.href}
                item={item}
                pathname={pathname}
                closeSidebar={closeSidebar}
              />
            ))}
          </motion.ul>
        </nav>
      </motion.aside>
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
            onClick={closeSidebar}
          />
        )}
      </AnimatePresence>
    </>
  );
}
