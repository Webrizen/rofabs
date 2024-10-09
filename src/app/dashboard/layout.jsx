import React from "react";
import Sidebar from "@/components/system/Sidebar";
import Navbar from "@/components/system/Navbar";
import { ThemeProvider } from "@/components/providers/theme-provider";
import {
  CalendarIcon,
  ChartArea,
  ChartBar,
  Clipboard,
  FunctionSquare,
  HomeIcon,
  LayoutDashboard,
  Settings,
  SquarePlay,
  UserCircleIcon,
  UsersIcon,
  WrenchIcon,
} from "lucide-react";
import {
  IconAdjustments,
  IconChartBubbleFilled,
  IconExclamationCircle,
  IconUsersGroup,
} from "@tabler/icons-react";

const menuStructure = [
  {
    title: "Front Desk",
    icon: <LayoutDashboard className="h-5 w-5" />,
    submenu: [
      {
        title: "Bookings",
        icon: <CalendarIcon className="h-5 w-5" />,
        href: "/dashboard/bookings",
      },
      {
        title: "Inventory",
        icon: <Clipboard className="h-5 w-5" />,
        href: "/dashboard/inventory",
      },
      {
        title: "Properties",
        icon: <HomeIcon className="h-5 w-5" />,
        href: "/dashboard/properties",
      },
      {
        title: "Room Types",
        icon: <SquarePlay className="h-5 w-5" />,
        href: "/dashboard/room-types",
      },
    ],
  },
  {
    title: "User and Resources",
    icon: <UsersIcon className="h-5 w-5" />,
    submenu: [
      {
        title: "Users",
        icon: <IconUsersGroup className="h-5 w-5" />,
        submenu: [
          { title: "User Accounts", href: "/users/accounts" },
          { title: "User Roles", href: "/users/roles" },
        ],
      },
      {
        title: "Material Management",
        icon: <IconChartBubbleFilled className="h-5 w-5" />,
        submenu: [
          { title: "Material Inventory", href: "/materials/inventory" },
          { title: "Purchase Orders", href: "/materials/purchase-orders" },
          { title: "Supplier Management", href: "/materials/suppliers" },
        ],
      },
      {
        title: "Employee Management",
        icon: <UserCircleIcon className="h-5 w-5" />,
        submenu: [
          { title: "Employee Directory", href: "/employees/directory" },
          { title: "Time & Attendance", href: "/employees/time-attendance" },
          { title: "Payroll", href: "/employees/payroll" },
        ],
      },
    ],
  },
  {
    title: "Banquet Management",
    icon: <FunctionSquare className="h-5 w-5" />,
    submenu: [
      { title: "Event Planning", href: "/banquet/event-planning" },
      { title: "Catering", href: "/banquet/catering" },
      { title: "Banquet Hall Bookings", href: "/banquet/hall-bookings" },
    ],
  },
  {
    title: "Maintenance and Support",
    icon: <WrenchIcon className="h-5 w-5" />,
    submenu: [
      {
        title: "Maintenance",
        icon: <WrenchIcon className="h-5 w-5" />,
        submenu: [
          { title: "Work Orders", href: "/maintenance/work-orders" },
          { title: "Preventive Maintenance", href: "/maintenance/preventive" },
          { title: "Vendor Management", href: "/maintenance/vendors" },
        ],
      },
      {
        title: "Damages",
        icon: <IconExclamationCircle className="h-5 w-5" />,
        submenu: [
          { title: "Damage Reports", href: "/damages/reports" },
          { title: "Claims Processing", href: "/damages/claims" },
        ],
      },
      {
        title: "Complaints",
        icon: <ChartArea className="h-5 w-5" />,
        submenu: [
          { title: "Complaint Management", href: "/complaints/manage" },
          { title: "Resolution Tracking", href: "/complaints/tracking" },
        ],
      },
    ],
  },
  {
    title: "Settings and Administration",
    icon: <Settings className="h-5 w-5" />,
    submenu: [
      {
        title: "Settings",
        icon: <IconAdjustments className="h-5 w-5" />,
        submenu: [
          { title: "General Settings", href: "/settings/general" },
          { title: "User Preferences", href: "/settings/preferences" },
          { title: "Security Settings", href: "/settings/security" },
          { title: "Integrations", href: "/settings/integrations" },
        ],
      },
      {
        title: "Reports",
        icon: <ChartBar className="h-5 w-5" />,
        submenu: [
          { title: "Custom Reports", href: "/reports/custom" },
          { title: "Scheduled Reports", href: "/reports/scheduled" },
          { title: "Analytics", href: "/reports/analytics" },
        ],
      },
    ],
  },
];

export default function DashboardLayout({ children }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Navbar />
      <section className="w-full md:mt-0 h-[91vh]">
        <div className="container mx-auto md:grid md:grid-cols-[.3fr_1fr] flex flex-col gap-2 h-full">
          <Sidebar
            items={menuStructure}
            className="border-b-3 rounded-br-2xl"
          />
          <div className="w-full md:p-5 p-1 h-full overflow-y-auto scrollbar-hide">
            {children}
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
}
