"use client";
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  // SheetDescription,
  // SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Separator } from "./ui/separator";
import { navItems } from "@/constants";
import Link from "next/link";
import { cn } from "@/lib/utils";
import FileUploader from "./FileUploader";
import { Button } from "./ui/button";
import { signOutUser } from "@/lib/actions/users.actions";

function MobileNavigation({
  $id: ownerId,
  accountId,
  fullName,
  email,
}: {
  $id: string;
  accountId: string;
  fullName: string;
  avatar: string;
  email: string;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="mobile-header">
      <Image
        src="/assets/icons/logo-full-brand.svg"
        alt="logo"
        width={120}
        height={52}
        className="h-auto"
      />

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
          <Image
            src="/assets/icons/menu.svg"
            alt="menu"
            width={30}
            height={30}
            className="h-auto"
          />
        </SheetTrigger>
        <SheetContent className="shad-sheet h-screen px-3 ">
          <SheetTitle>
            <div className="header-user">
              <Image
                src="https://th.bing.com/th/id/OIP.lsaqXiF1qoA0lNGxssv4dQHaFy?rs=1&pid=ImgDetMain"
                alt="logo"
                width={44}
                height={44}
                className="header-user-avatar"
              />
              <div className="sm:hidden lg:block">
                <p className="subtitle-2 capitalize">{fullName}</p>
                <p className="caption">{email}</p>
              </div>
            </div>
            <Separator className="mb-4 bg-light-200/20" />
          </SheetTitle>
          <nav className="mobile-nav">
            <ul className="mobile-nav-list">
              {navItems.map((items, index) => (
                <Link href={items.url} key={index} className="lg:w-full">
                  <li
                    className={cn(
                      "mobile-nav-item",

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
                    <p>{items.name}</p>
                  </li>
                </Link>
              ))}
            </ul>
          </nav>
          <Separator className="my-5 bg-light-200/20" />
          <div className="flex flex-col justify-between gap-5 pb-5">
            <FileUploader ownerId={ownerId} accountId={accountId} />
            <form>
              <Button
                type="submit"
                className="mobile-sign-out-button"
                onClick={async () => {
                  await signOutUser();
                }}
              >
                <Image
                  src="/assets/icons/logout.svg"
                  alt="logo"
                  width={24}
                  height={24}
                />
                <p>Logout</p>
              </Button>
            </form>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}

export default MobileNavigation;
