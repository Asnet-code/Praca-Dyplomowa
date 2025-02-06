"use client";

import Link from "next/link";
import AdminNavItem from "./AdminNavItem";
import {
  MdDashboard,
  MdDns,
  MdFormatListBulleted,
  MdLibraryAdd,
} from "react-icons/md";

import { usePathname } from "next/navigation";
import Container from "../Container";
import { FaComputer } from "react-icons/fa6";
import { AiOutlineLaptop } from "react-icons/ai";

const AdminNav = () => {
  const pathname = usePathname();

  return (
    <div className="w-full shadow-sm top-20 border-b-[1px] pt-4 bg-white sticky">
      <Container>
        <div className="flex flex-row items-center justify-between md:justify-center gap-8 md:gap-12 overflow-x-auto flex-nowrap">
          <Link href="/admin">
            <AdminNavItem
              label="Strona Główna"
              icon={MdDashboard}
              selected={pathname === "/admin"}
            />
          </Link>
          <Link href="/admin/add-computer">
            <AdminNavItem
              label="Dodaj Komputer"
              icon={FaComputer}
              selected={pathname === "/admin/add-computer"}
            />
          </Link>
          <Link href="/admin/add-laptop">
            <AdminNavItem
              label="Dodaj Laptop"
              icon={AiOutlineLaptop}
              selected={pathname === "/admin/add-laptop"}
            />
          </Link>
          <Link href="/admin/add-products">
            <AdminNavItem
              label="Dodaj Produkt"
              icon={MdLibraryAdd}
              selected={pathname === "/admin/add-products"}
            />
          </Link>
          <Link href="/admin/manage-products">
            <AdminNavItem
              label="Zarządzaj Sklepem"
              icon={MdDns}
              selected={pathname === "/admin/manage-products"}
            />
          </Link>
          <Link href="/admin/manage-orders">
            <AdminNavItem
              label="Zarządzaj Zamówieniami"
              icon={MdDns}
              selected={pathname === "/admin/manage-orders"}
            />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default AdminNav;
