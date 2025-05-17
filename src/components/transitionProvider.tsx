"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";

const TransitionProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <main key={pathname} className="h-full">
        <motion.div
          className="h-screen w-screen  bg-black fixed rounded-b-[100px] z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
        <motion.div
          className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default w-fit h-fit z-50"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {pathname !== "/" ? pathname : "/home"}
        </motion.div>
        <motion.div
          className="h-screen w-screen  bg-black fixed bottom-0 rounded-t-[100px] z-40"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.4 } }}
        />

        {children}
      </main>
    </AnimatePresence>
  );
};

export default TransitionProvider;
