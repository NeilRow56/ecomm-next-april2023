"use client";

import Link from "next/link";
import Logo from "./Logo";
import { HiOutlineHome } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { FaProductHunt } from "react-icons/fa";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const inactiveLink = "flex gap-1";
  const activeLink = inactiveLink + " text-yellow-500 rounded-sm";
  const pathname = usePathname();

  return (
    <aside className="text-white p-4 pr-0">
      <Link href={"/"} className="">
        <Logo />
      </Link>
      <nav className="flex flex-col gap-8 ">
        <Link
          className={pathname === "/" ? activeLink : inactiveLink}
          href={"/"}
        >
          <HiOutlineHome size={24} />
          Dashboard
        </Link>
        <Link
          className={pathname.includes("/products") ? activeLink : inactiveLink}
          href={"/products"}
        >
          <FaProductHunt size={24} />
          Products
        </Link>
        <Link
          className={pathname.includes("/orders") ? activeLink : inactiveLink}
          href={"/orders"}
        >
          <HiOutlineDocumentDuplicate size={24} />
          Orders
        </Link>
        <Link
          className={pathname.includes("/settings") ? activeLink : inactiveLink}
          href={"/settings"}
        >
          <FiSettings size={24} />
          Settings
        </Link>
      </nav>
    </aside>
  );
}
