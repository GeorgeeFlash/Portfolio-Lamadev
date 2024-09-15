"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { buttonVariants } from "@/components/ui/button";
import WidthWrapper from "@/components/width-wrapper";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <motion.div
      className="h-full overflow-x-hidden"
      initial={{ y: "-200%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <WidthWrapper className="h-screen flex flex-col lg:flex-row text-xl">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full z-10 lg:mr-4 lg:w-1/2 relative">
          <Image
            src={"/profile1.jpg"}
            alt="profile"
            fill
            className="object-contain"
          />
        </div>

        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          {/* TODO: Change this. */}
          <h1 className="text-4xl md:6xl font-bold">
            Crafting Digital Experiences, Designing Tomorrow.
          </h1>

          {/* DESC */}
          {/* TODO: Change this. */}
          <p className="md:text-2xl">
            Welcome to my digital canvas, where innocation and creativity
            converge. With a keen eye for easthetics and a mastery of code, my
            porfolio showcases a diverse collection of projects that reflect my
            commitment to excellence.
          </p>

          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <Link href={"/portfolio"} className={cn("", buttonVariants())}>
              View My Work
            </Link>
            <Link
              href={"/contact"}
              className={cn(
                "ring-1 ring-black",
                buttonVariants({ variant: "ghost" })
              )}
            >
              Contact Me
            </Link>
          </div>
        </div>
      </WidthWrapper>
    </motion.div>
  );
}
