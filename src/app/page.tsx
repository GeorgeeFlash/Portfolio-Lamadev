"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";

import { buttonVariants } from "@/components/ui/button";
import WidthWrapper from "@/components/width-wrapper";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useRef } from "react";

export default function Home() {
  // const [letterIndex, setLetterIndex] = useState(0)

  const textRef = useRef<HTMLDivElement | null>(null);
  const isTextRefInView = useInView(textRef, {
    margin: "-100px",
  });

  const textContainerVariants = {
    hide: {
      x: "-300px",
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        when: "beforeCildren",
        staggerChildren: 1,
      },
    },
  };

  const textVariants = {
    start: { opacity: 0 },
    process: { opacity: 1 },
  };

  const akaAndNameVariants = {
    before: {
      x: -10,
      opacity: 0,
    },
    after: {
      x: 0,
      opacity: 1,
    },
  };

  const akaVariants = {
    before: { scale: 3, rotate: 45 },
    after: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        delay: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="h-screen overflow-hidden"
      initial={{ y: "-200%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <WidthWrapper className="h-full flex flex-col items-center justify-center lg:flex-row gap-10 text-xl">
        {/* IMAGE CONTAINER */}
        <div className="h-1/3 sm:h-1/2 lg:h-[38rem] xl:h-[40rem] z-10 w-[15rem] sm:w-[20rem] lg:w-2/5 relative">
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
        <div
          ref={textRef}
          className="h-2/3 sm:h-1/2 lg:h-full lg:w-3/5 flex flex-col gap-4 lg:gap-8 lg:items-center lg:justify-center overflow-hidden"
        >
          {/* TITLE */}
          <motion.h1
            variants={textContainerVariants}
            initial={"hide"}
            animate={isTextRefInView ? "show" : {}}
            className="text-2xl md:text-4xl xl:text-7xl font-bold tracking-wide leading-snug lg:leading-normal xl:leading-normal gap-y-4"
          >
            {"I'm George Ndzishepngong".split("").map((letter, index) => {
              return (
                <motion.span
                  key={index}
                  variants={textVariants}
                  initial={"start"}
                  animate={"process"}
                  transition={{ duration: 2, repeat: 1, delay: index * 0.09 }}
                >
                  {letter}
                </motion.span>
              );
            })}
            <motion.span
              variants={akaAndNameVariants}
              initial="before"
              animate="after"
              className="flex items-center gap-4"
            >
              <motion.span
                variants={akaVariants}
                initial={"before"}
                animate={"after"}
                className="block text-sm md:text-2xl underline underline-offset-3 decoration-2 decoration-stone-950"
              >
                AKA
              </motion.span>{" "}
              <motion.span
                initial={{ opacity: 0.7 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, when: "beforeChildren" }}
                className=""
              >
                {"Georgee Flash ⚡".split("").map((letter, index) => {
                  return (
                    <motion.span
                      key={index}
                      variants={textVariants}
                      initial={"start"}
                      animate={"process"}
                      transition={{
                        duration: 2,
                        repeat: 1,
                        delay: index * 0.09,
                      }}
                    >
                      {letter}
                    </motion.span>
                  );
                })}
              </motion.span>
            </motion.span>
          </motion.h1>

          {/* DESC */}
          <motion.p
            initial={{ x: "-300px", opacity: 0 }}
            animate={isTextRefInView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-lg xl:text-xl"
          >
            Welcome to my digital canvas, where innovation and creativity
            converge. With a keen eye for easthetics and a mastery of code, my
            porfolio showcases a diverse collection of projects that reflect my
            commitment to excellence.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ x: "-300px", opacity: 0 }}
            animate={isTextRefInView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="w-full flex gap-4"
          >
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
          </motion.div>
        </div>
      </WidthWrapper>
    </motion.div>
  );
}
