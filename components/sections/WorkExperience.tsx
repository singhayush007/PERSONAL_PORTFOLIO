"use client";
import { motion } from "framer-motion";
import React from "react";

const WorkExperience = () => {
  return (
    <section className="container mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold mb-12 text-center">
        Work <span className="text-primary">Experience</span>
      </h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-6 rounded-lg shadow-lg text-white"
      >
        <h3 className="text-2xl font-semibold text-primary">
          Full Stack Developer
        </h3>
        <p className="text-lg mt-1">PearlThoughts</p>
        <p className="text-md mt-1 text-gray-400">Jun 2024 - Dec 2024</p>

        <ul className="mt-4 space-y-2 list-disc list-outside pl-5 marker:text-yellow-500">
          <li>Developed and maintained web applications using TypeScript & Next.js, enhancing performance by 20%.</li>
          <li>Designed and integrated RESTful APIs, improving data access and application functionality.</li>
          <li>Worked closely with QA teams to ensure high-quality releases, reducing bugs by 25%.</li>
          <li>Optimized application state management, reducing load times by 30%.</li>
          <li>Implemented responsive UI components with TailwindCSS, improving user experience by 35%.</li>
        </ul>
      </motion.div>
    </section>
  );
};

export default WorkExperience;

