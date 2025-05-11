"use client";

import { motion } from "framer-motion";
import WidthWrapper from "@/components/width-wrapper";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const ContactPage = () => {
  // const [success, setSuccess] = useState(false);
  // const [error, setError] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const text = "Say Hello 😊";

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <motion.div
      className="h-[80vh] xl:h-[85vh] mb-10"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <WidthWrapper className="h-full flex flex-col lg:flex-row text-4xl xl:text-6xl">
        {/* TEXT CONTAINER */}
        <div className="h-1/5 lg:h-full lg:w-1/3 mb-4 lg:mb-0 items-center justify-center">
          {text.split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.15,
              }}
            >
              {letter}
            </motion.span>
          ))}{" "}
        </div>
        {/* FORM CONTAINER */}
        <form
          action=""
          className="h-4/5 lg:h-full lg:w-2/3 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-16 lg:p-24"
        >
          <div className="gap-4 flex flex-col">
            <label htmlFor="text" className="font-medium text-2xl">
              Dear Georgee Flash,
            </label>
            <textarea
              name="text"
              id="text"
              rows={4}
              placeholder="Enter Message..."
              className="bg-transparent border-b-2 border-black outline-none resize-none"
            />
          </div>
          <div className="gap-4 flex flex-col">
            <label htmlFor="email" className="font-medium text-2xl">
              My mail address is:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="mymail@domain.com"
              className="bg-transparent border-b-2 border-black outline-none"
            />
          </div>
          <Button>Send</Button>
          {/* {success && (
            <span className="text-green-600 font-semibold">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Something went wrong!
            </span>
          )} */}
        </form>
      </WidthWrapper>
    </motion.div>
  );
};

export default ContactPage;
