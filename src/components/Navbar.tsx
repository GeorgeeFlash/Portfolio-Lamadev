"use client";

import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";

import NavLink from "./navLink";
import WidthWrapper from "@/components/width-wrapper";
import { cn } from "@/lib/utils";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
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
    <WidthWrapper className="h-full z-20 flex items-center justify-between text-xl bg-transparent">
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
      <div className="hidden md:flex gap-4 lg:w-1/3">
        <Link href={"https://github.com/GeorgeeFlash/"}>
          <Github size={24} className="text-slate-800" />
        </Link>
        <Link href={"#"}>
          <Facebook size={24} className="text-blue-700" />
        </Link>
        <Link href={"#"}>
          <Instagram size={24} className="text-pink-600" />
        </Link>
        <Link href={"#"}>
          <Linkedin
            size={26}
            className="text-white border bg-blue-500 p-1 rounded-md"
          />
        </Link>
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
};

export default Navbar;
