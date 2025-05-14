"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { buttonVariants } from "@/components/ui/button";
import WidthWrapper from "@/components/width-wrapper";
import Link from "next/link";
import { cn } from "@/lib/utils";

// TODO: Add your name

export default function Home() {
  return (
    <motion.div
      className="h-screen overflow-hidden"
      initial={{ y: "-200%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <WidthWrapper className="h-full flex flex-col items-center justify-center lg:flex-row lg:space-y-0 gap-10 text-xl">
        {/* IMAGE CONTAINER */}
        <div className="h-1/3 md:h-1/2 lg:h-[38rem] xl:h-[40rem] z-10 w-[15rem] sm:w-[20rem] lg:w-2/5 relative">
          <Image
            src={"/profile1.jpg"}
            alt="profile"
            fill
            priority
            sizes="(max-width: 765px) 100vw, (max-width: 1200px) 55vw, 33vw"
            className="object-contain border-4 border-black p-1 rounded-md"
          />
        </div>

        {/* TEXT CONTAINER */}
        <div className="h-2/3 md:h-1/2 lg:h-full lg:w-3/5 flex flex-col gap-4 lg:gap-8 lg:items-center lg:justify-center">
          {/* TITLE */}
          {/* TODO: Change this. */}
          <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold tracking-tight leading-tight lg:leading-snug xl:leading-normal">
            Crafting Digital Experiences, Designing Tomorrow.
          </h1>

          {/* DESC */}
          {/* TODO: Change this. */}
          <p className="text-lg md:text-2xl xl:text-3xl">
            Welcome to my digital canvas, where innocation and creativity
            converge. With a keen eye for easthetics and a mastery of code, my
            porfolio showcases a diverse collection of projects that reflect my
            commitment to excellence.
          </p>

          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <Link
              href={"/portfolio"}
              className={cn(
                "lg:h-14 lg:w-36 lg:text-lg",
                buttonVariants({ size: "lg" })
              )}
            >
              View My Work
            </Link>
            <Link
              href={"/contact"}
              className={cn(
                "ring-1 ring-black lg:h-14 lg:w-32 lg:text-lg",
                buttonVariants({ variant: "ghost", size: "lg" })
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
