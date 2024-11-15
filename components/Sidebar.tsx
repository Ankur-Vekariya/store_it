"use client";
import { navItems } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Sidebar({
  fullName,
  email,
}: {
  fullName: string;
  avatar: string;
  email: string;
}) {
  const pathname = usePathname();
  return (
    <aside className="sidebar">
      <Link href="/">
        <Image
          src="/assets/icons/logo-full-brand.svg"
          alt="logo"
          width={160}
          height={50}
          className="hidden h-auto lg:block"
        />
        <Image
          src="/assets/icons/logo-brand.svg"
          alt="logo"
          width={52}
          height={52}
          className="lg:hidden"
        />
      </Link>
      <nav className="sidebar-nav">
        <ul className="flex flex-1 flex-col">
          {navItems.map((items, index) => (
            <Link href={items.url} key={index} className="lg:w-full">
              <li
                className={cn(
                  "sidebar-nav-item",

                  pathname === items.url && "shad-active"
                )}
              >
                <Image
                  src={items.icon}
                  alt={items.name}
                  width={24}
                  height={24}
                  className={cn(
                    "nav-icon",
                    pathname === items.url && "nav-icon-active"
                  )}
                />
                <p className="hidden lg:block">{items.name}</p>
              </li>
            </Link>
          ))}
        </ul>
        <Image
          src="/assets/images/files-2.png"
          alt="logo"
          width={506}
          height={418}
          className="w-full"
        />
        <div className="sidebar-user-info">
          <Image
            src="https://th.bing.com/th/id/OIP.lsaqXiF1qoA0lNGxssv4dQHaFy?rs=1&pid=ImgDetMain"
            alt="logo"
            width={20}
            height={20}
            className="w-full"
          />
          <div className="hidden lg:block">
            <p className="subtitle-2 capitalize">{fullName}</p>
            <p className="caption">{email}</p>
          </div>
        </div>
      </nav>
    </aside>
  );
}

export default Sidebar;
