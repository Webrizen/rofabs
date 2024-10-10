"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Input,
  Spinner,
} from "@nextui-org/react";
import Link from "next/link";
import Logo from "@/assets/logo.png";
import { Moon, Search, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Combobox from "@/components/ui/combobox";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const data = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

const Navbar = () => {
  const { setTheme } = useTheme();
  const router = useRouter();
  const [userData, setUserData] = useState(null);

  // Fetch user data from API
  useEffect(() => {
    const fetchUserData = async () => {
      // Get user ID and token from cookies
      const userId = Cookies.get("user");
      const token = Cookies.get("token");

      if (userId) {
        try {
          // Make the GET request to the API
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/user/${userId}`,
            {
              headers: {
                "x-auth": token,
              },
            }
          );

          const result = await response.json();
          if (response.ok) {
            setUserData(result.data);
          } else {
            console.error(result.error || "Failed to fetch data");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchUserData();
  }, []);

  // Logout function
  const logout = () => {
    // Remove the token from cookies
    Cookies.remove("token");
    Cookies.remove("user");
    // Redirect to login page
    router.push("/auth");
  };

  return (
    <header className="px-3 py-2 bg-[rgba(225,225,225,0.1)] backdrop-blur-3xl z-50">
      <div className="md:container mx-auto flex justify-between items-center md:px-5">
        <Link
          href="/"
          className="h-8 w-auto whitespace-nowrap md:flex hidden gap-2 justify-start items-center p-1 rounded-md hover:bg-[rgba(225,225,225,0.05)]"
        >
          <Image
            src={Logo}
            placeholder="blur"
            alt="Logo"
            width={500}
            height={500}
            className="h-8 w-auto"
          />
          <span>Rofabs</span>
        </Link>
        <div className="w-full flex justify-end items-center gap-2">
          <form className="w-full md:w-auto md:flex-1 md:block hidden md:max-w-sm">
            <div className="relative">
              <Input
                placeholder="Search properties, tenants..."
                type="search"
                startContent={
                  <Search className="h-4 w-4 text-2xl text-default-400 pointer-events-none flex-shrink-0 mr-1" />
                }
              />
            </div>
          </form>
          <Combobox data={data} />
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <div className="w-[42px] h-[42px] flex justify-center items-center cursor-pointer hover:bg-slate-100 dark:hover:bg-[rgba(225,225,225,0.1)] backdrop-blur-3xl rounded-xl p-3">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </div>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="light" onClick={() => setTheme("light")}>
                Light
              </DropdownItem>
              <DropdownItem key="dark" onClick={() => setTheme("dark")}>
                Dark
              </DropdownItem>
              <DropdownItem key="system" onClick={() => setTheme("system")}>
                System
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown placement="bottom-end" backdrop="blur">
            <DropdownTrigger>
              <div className="p-1 flex flex-col items-start gap-2 w-min whitespace-nowrap cursor-pointer hover:bg-slate-100 dark:hover:bg-[rgba(225,225,225,0.1)] hover:backdrop-blur-3xl rounded-xl overflow-hidden">
              {userData ? (
                <div className="flex items-center gap-2 relative">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={userData?.profile_pic || "https://github.com/shadcn.png"} />
                    <AvatarFallback>N/A</AvatarFallback>
                  </Avatar>
                  {userData?.isActive ? <div className="absolute bottom-0 right-045 h-3 w-3 rounded-full border-2 border-background bg-green-500" /> : <div className="absolute bottom-0 right-045 h-3 w-3 rounded-full border-2 border-background bg-slate-500" />}
                  
                  <div className="grid gap-0.5 leading-none">
                    <div className="text-sm font-semibold">{userData?.fname} {userData?.lname}</div>
                    <div className="text-xs text-muted-foreground">Admin</div>
                  </div>
                </div>
              ) : (
                <Spinner />
              )}
              </div>
            </DropdownTrigger>
            <DropdownMenu aria-label="User Menu">
              <DropdownItem
                key="profile"
                description="View your profile"
                href="/profile"
              >
                Profile
              </DropdownItem>
              <DropdownItem
                key="settings"
                description="Adjust your preferences"
                showDivider
                href="/settings"
              >
                Settings
              </DropdownItem>
              <DropdownItem
                key="logout"
                onClick={logout}
                description="Sign out of your account"
                className="text-danger"
                color="danger"
              >
                Logout
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
