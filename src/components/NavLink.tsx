"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ link }: { link: { title: string; url: string } }) => {
  const pathname = usePathname();

  return (
    <Link
      href={link.url}
      className={cn("rounded font-semibold p-1", {
        "bg-black text-white": link.url === pathname,
      })}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;
