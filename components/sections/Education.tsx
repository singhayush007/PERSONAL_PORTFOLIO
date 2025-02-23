"use client";
import { motion } from "framer-motion";
import React from "react";

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
        className=" p-6 rounded-lg shadow-lg text-white"
      >
        <h3 className="text-2xl font-semibold text-primary">
          Chandigarh Engineering College, Punjab
        </h3>
        <p className="text-lg mt-2">
          Bachelor's of Technology in <span className="font-semibold">Electronics and Communication Engineering</span>
        </p>
        <p className="text-md mt-1">
          <span className="font-semibold">CGPA:</span> 7.57
        </p>
        <p className="text-sm mt-1 text-gray-400">
          Aug 2020 - Jun 2024
        </p>
      </motion.div>
    </section>
  );
};

export default Education;



