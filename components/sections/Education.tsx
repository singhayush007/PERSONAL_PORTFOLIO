"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

const Education = () => {
  return (
    <section className="container mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold mb-12 text-center">
        Education <span className="text-primary">Background</span>
      </h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row items-center md:items-start gap-6 p-6 rounded-lg shadow-lg text-white"
      >
        {/* College Logo */}
        <div className="w-32 h-20 md:w-40 md:h-24 flex-shrink-0 bg-white flex items-center justify-center overflow-hidden mt-4 md:mt-6">
  <Image
    src="/CollegeLogo.png"
    alt="Chandigarh Engineering College Logo"
    width={160}
    height={96}
    className="w-full h-full object-contain"
  />
</div>




        {/* College Info */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-semibold text-primary">
            Chandigarh Engineering College, Punjab
          </h3>
          <p className="text-lg mt-2">
            Bachelor&apos;s of Technology in{" "}
            <span className="font-semibold">
              Electronics and Communication Engineering
            </span>
          </p>
          <p className="text-md mt-1">
            <span className="font-semibold">CGPA:</span> 7.57
          </p>
          <p className="text-sm mt-1 text-gray-400">Aug 2020 - Jun 2024</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;



