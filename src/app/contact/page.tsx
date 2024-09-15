"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import WidthWrapper from "@/components/width-wrapper";
import { Button } from "@/components/ui/button";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Say Hello";

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <WidthWrapper className="h-full flex flex-col lg:flex-row text-6xl">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 items-center justify-center">
          <div className="">
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}{" "}
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form
          action=""
          className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24"
        >
          <span className="">Dear Georgee Flash,</span>
          <textarea
            name=""
            id=""
            rows={6}
            className="bg-transparent border-b-2 border-b-black outline-none resize-none"
          />
          <span className="">My mail address is:</span>
          <input
            type="text"
            className="bg-transparent border-b-2 border-b-black outline-none"
          />
          <span className="">Regards</span>
          <Button>Send</Button>
          {success && (
            <span className="text-green-600 font-semibold">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Something went wrong!
            </span>
          )}
        </form>
      </WidthWrapper>
    </motion.div>
  );
};

export default ContactPage;
