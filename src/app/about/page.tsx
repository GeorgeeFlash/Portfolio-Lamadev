"use client";

import React, { useRef } from "react";
import { motion, useInView, useScroll } from "framer-motion";
import WidthWrapper from "@/components/width-wrapper";
import { Icons } from "@/components/Icons";
import { ArrowDown } from "lucide-react";
import Brain from "@/components/brain";
import { experienceList, skillsList } from "@/lib/data";

interface ExperienceListProps {
  title: string;
  description: string;
  dateRange: string;
  company: string;
}

interface SkillListItemProps {
  skill: string;
}

type ExperienceListItemProps = ExperienceListProps & { index: number };

function ExperienceListItem({
  title,
  description,
  dateRange,
  company,
  index,
}: ExperienceListItemProps) {
  console.log("Index:", index);
  return (
    <div className="flex justify-between h-48">
      {index % 2 != 0 && (
        <div className="w-2/3 flex justify-start">
          <div className="w-1/2"></div>
          <div className="w-1/2 flex justify-center">
            <div className="w-1 h-full bg-gray-600 rounded relative">
              <div className="absolute -left-2 w-5 h-5 rounded-full ring-4 ring-red-400 bg-white" />
            </div>
          </div>
        </div>
      )}
      <div className="w-1/3">
        <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
          {title}
        </div>
        <div className="p-3 text-sm italic">{description}</div>
        <div className="p-3 text-red-400 text-sm font-semibold">
          {dateRange}
        </div>
        <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
          {company}
        </div>
      </div>
      {index % 2 == 0 && (
        <div className="w-2/3 flex justify-start">
          <div className="w-1/2 flex justify-center">
            <div className="w-1 h-full bg-gray-600 rounded relative">
              <div className="absolute -left-2 w-5 h-5 rounded-full ring-4 ring-red-400 bg-white" />
            </div>
          </div>
          <div className="w-1/2"></div>
        </div>
      )}
    </div>
  );
}

function SkillListItem({ skill }: SkillListItemProps) {
  return (
    <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
      {skill}
    </div>
  );
}

const AboutPage = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef<HTMLDivElement | null>(null);
  const isSkillRefInView = useInView(skillRef, { once: true });

  const experienceRef = useRef<HTMLDivElement | null>(null);
  const isExperienceRefInView = useInView(experienceRef, { once: true });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full relative pb-6 lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <WidthWrapper className="flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 !lg:pr-0 xl:1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-10 justify-center">
            {/* BIOGRAPHY TITLE */}
            <h1 className="heading">BIOGRAPHY</h1>

            {/* BIOGRAPHY TEXT */}
            {/* TODO: rewrite this - yourself. Make it shorter.*/}
            <div className="flex flex-col space-y-6">
              <p className="text-2xl">
                As a perfectionist, I strive for high-quality results that make
                a real impact. Whether I&apos;m problem-solving, organizing team
                efforts, or brainstorming fresh ideas, I approach every
                challenge with energy and motivation. My goal is to create
                innovative solutions that positively transform the lives of
                others.
              </p>
            </div>

            {/* BIOGRAPHY QUOTE */}
            <span className="italic text-muted-foreground text-sm">
              Building cool stuff just makes sense 
            </span>

            {/* BIOGRAPHY SIGNATURE */}
            <div className="self-end">
              {
                <Icons.handwriting className="h-[4rem] w-[4rem] -mt-6 text-slate-800" />
              }
            </div>

            {/* SCROLL ICON */}
            <motion.div
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="cursor-pointer border border-slate-900 w-7 h-10 flex items-center justify-center rounded-t-full rounded-b-full p-1"
            >
              <ArrowDown className="" />
            </motion.div>
          </div>

          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILLS TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="heading"
            >
              SKILLS
            </motion.h1>

            {/* SKILLS LIST */}
            <motion.div
              initial={{ x: "-300px", opacity: 0 }}
              animate={isSkillRefInView ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="flex gap-4 flex-wrap"
            >
              {skillsList.map((skillItem, index) => (
                <SkillListItem key={index} skill={skillItem.skill} />
              ))}
            </motion.div>

            {/* SCROLL ICON */}
            <motion.div
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="cursor-pointer border border-slate-900 w-7 h-10 flex items-center justify-center rounded-t-full rounded-b-full p-1"
            >
              <ArrowDown className="" />
            </motion.div>
          </div>

          {/* EXPERIENCE CONTAINER */}
          <div className="flex flex-col justify-center" ref={experienceRef}>
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="heading mb-12"
            >
              EXPERIENCE
            </motion.h1>

            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className=""
            >
              {/* EXPERIENCE LIST ITEM */}
              {experienceList.map((experience, index) => (
                <ExperienceListItem
                  key={index}
                  index={index}
                  title={experience.title}
                  description={experience.description}
                  dateRange={experience.dataRange}
                  company={experience.company}
                />
              ))}
            </motion.div>
          </div>
        </WidthWrapper>

        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 xl:1/2 sticky top-0 z-40">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
