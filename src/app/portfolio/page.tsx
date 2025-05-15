"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "React Commerce",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, labore quasi totam voluptatum itaque doloremque quas beatae, nesciunt nisi adipisci perspiciatis culpa officia unde consectetur dignissimos odio rem vel quis.",
    img: "/assets/portfolio/blue.jpg",
    link: "#",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Next.js Blog",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, labore quasi totam voluptatum itaque doloremque quas beatae, nesciunt nisi adipisci perspiciatis culpa officia unde consectetur dignissimos odio rem vel quis.",
    img: "/assets/portfolio/mixed.jpg",
    link: "#",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Vanilla Book App",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, labore quasi totam voluptatum itaque doloremque quas beatae, nesciunt nisi adipisci perspiciatis culpa officia unde consectetur dignissimos odio rem vel quis.",
    img: "/assets/portfolio/picks.jpg",
    link: "#",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Spotify Music App",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, labore quasi totam voluptatum itaque doloremque quas beatae, nesciunt nisi adipisci perspiciatis culpa officia unde consectetur dignissimos odio rem vel quis.",
    img: "/assets/portfolio/purple.jpg",
    link: "#",
  },
];

const PortfolioPage = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full overflow-clip"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center bg-black/50">
          <motion.div style={{ x }} className="flex">
            <div
              className={cn(
                "h-screen w-screen flex items-center justify-center bg-gradient-to-r ",
                "from-purple-300 to-red-300"
              )}
            />
            {items.map((item) => (
              <div
                className={cn(
                  "h-screen w-screen px-2 lg:my-6 xl:my-10 md:px-4 lg:px-0 flex flex-col gap-8 text-white items-center justify-center bg-gradient-to-r ",
                  item.color
                )}
                key={item.id}
              >
                <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                  {item.title}
                </h1>
                <div className="relative w-full h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    sizes="(max-width: 765px) 100vw, (max-width: 1200px) 55vw, 33vw"
                  />
                </div>
                <p className="w-full md:w-96 lg:w-[500px] xl:w-[600px] text-sm lg:text-lg px- justify-start">
                  {item.desc}
                </p>
                <Link
                  href={item.link}
                  className={cn(
                    "flex items-start w-fit",
                    buttonVariants({ variant: "secondary" })
                  )}
                >
                  See Demo
                  <ArrowRight className="ml-1" />
                </Link>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-full overflow-cli h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:h-[450px] md:w-[450px]"
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60, 60 0 0, 1 120, 0 a 60, 60 0 0, 1 -120, 0"
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath">
                Creative Dev 🎨 UI/UX Designer 🎨 FullStack Dev 🎨
              </textPath>
            </text>
          </motion.svg>
          <Link
            href={"/contact"}
            className="w-16 h-16 md:w-28 md:h-29 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
