"use client";

import React from "react";
import Image from "next/image";
import {
  SheetTrigger,
  SheetContent,
  SheetClose,
  Sheet,
} from "./ui/sheet";
import { usePathname } from "next/navigation";
import { sidebarLinks } from "@/constants";
import Link from "next/link";
const NavContent = () => {
  const pathname = usePathname();
  return (
    <section className="flex h-full flex-col gap-6 pt-16">
      {sidebarLinks.map((item) => {
        const isActive =
          (pathname.includes(item.route) &&
            item.route.length > 1) ||
          pathname === item.route;
        return (
          <SheetClose asChild key={item.route}>
            <Link
              href={item.route}
              key={item.label}
              className={`${
                isActive
                  ? "primary-gradient rounded-lg text-light-900"
                  : "text-dark300_light900 "
              } flex items-center justify-start gap-4 bg-transparent p-4`}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={20}
                height={20}
                className={`${
                  isActive ? "" : "invert-colors"
                }`}
              />
              <p
                className={`${
                  isActive ? "base-bold" : "base-medium"
                }`}
              >
                {item.label}
              </p>
            </Link>
          </SheetClose>
        );
      })}
    </section>
  );
};

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/assets/icons/hamburger.svg"
          width={36}
          height={36}
          alt="hamburger menu"
          className=" sm:hidden"
        />
      </SheetTrigger>
      <SheetContent
        side="right"
        className="bg-slate-900 text-slate-50 border-none"
      >
        <Link href="/" className="flex items-center gap-1">
          <p className=" h1 font-extrabold  text-2xl ">
            Nihat{" "}
            <span className="text-primary-500">.</span>
          </p>
        </Link>
        <div>
          <SheetClose asChild>
            <NavContent />
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
