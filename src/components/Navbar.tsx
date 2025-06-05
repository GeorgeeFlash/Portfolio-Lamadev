"use client";

import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  LucideIcon,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";

import NavLink from "./NavLink";
import WidthWrapper from "@/components/width-wrapper";
import { cn } from "@/lib/utils";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const socials = [
  {
    social: Github,
    link: "https://github.com/GeorgeeFlash/",
    className: "text-stone-950",
  },
  {
    social: Linkedin,
    link: "https://linkedin.com/GeorgeeFlash/",
    className: "text-white border bg-blue-500 p-1 rounded-md",
  },
  {
    social: Facebook,
    link: "https://facebook.com/GeorgeeFlash/",
    className: "text-blue-700",
  },
  {
    social: Instagram,
    link: "https://github.com/GeorgeeFlash/",
    className: "text-pink-600",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255, 255, 255)",
    },
  };

  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255, 255, 255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <WidthWrapper className="h-full w-full z-20 flex items-center justify-between text-xl">
      {/* LINKS */}
      <div className="hidden md:flex gap-4 lg:w-1/3">
        {links.map((link) => (
          <NavLink key={link.title} link={link} />
        ))}
      </div>
      {/* LOGO */}
      <div className="md:hidden lg:flex lg:w-1/3 lg:justify-center">
        <Link
          href={"/"}
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1">Georgee</span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
            Flash
          </span>
        </Link>
      </div>

      {/* SOCIALS */}
      <div className="hidden md:flex items-center justify-center gap-x-6 lg:w-1/3">
        {socials.map((social, index) => (
          <SocialItem
            key={index}
            social={social.social}
            link={social.link}
            className={social.className}
          />
        ))}
      </div>

      {/* RESPONSIVE MENU */}
      <div className={cn("md:hidden", { "z-50": open })}>
        {/* MENU BUTTON */}
        <button
          className={cn(
            "w-10 h-8 z-30 flex outline-none flex-col justify-between relative",
            { "fixed top-7 right-5 ": open }
          )}
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>

        {/* MENU LIST */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="fixed top-0 left-0 w-screen h-full overflow-hidden bg-black text-white font-semibold flex flex-col items-center justify-center gap-8 text-4xl"
          >
            {links.map((link) => (
              <motion.div
                variants={listItemVariants}
                key={link.title}
                className=""
              >
                <Link href={link.url} className="bg-red-20">
                  {link.title}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </WidthWrapper>
  );

  function SocialItem({
    social: SocialIcon,
    link,
    className,
  }: {
    social: LucideIcon;
    link: string;
    className: string;
  }) {
    return (
      <Link href={link}>
        <SocialIcon size={24} className={cn("h-8 w-8", className)} />
      </Link>
    );
  }
};

export default Navbar;
