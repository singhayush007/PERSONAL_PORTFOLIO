"use client";
import { motion } from "framer-motion";
import React from "react";
import { Button } from "@/components/ui/button";
import { Github, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
    return (
        <section className="container mx-auto px-4 pt-32 pb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Hi, I&apos;m <span className="text-primary">Ayush Singh</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                        Designing and developing intuitive digital experiences that inspire.
                    </p>
                    <div className="flex gap-4">
                        <Link href="mailto:ayushsingh24958@gmail.com">
                            <Button
                                variant="outline"
                                className="gap-2 text-white border-white hover:bg-yellow-500 hover:text-black"
                            >
                                <Mail className="w-4 h-4" />
                                Contact Me
                            </Button>
                        </Link>
                        <Link href="https://github.com/singhayush007" target="_blank">
                            <Button variant="outline" className="gap-2 border-white">
                                <Github className="w-4 h-4" />
                                Github
                            </Button>
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-center"
                >
                    <Image
                        src="/hero.svg"
                        alt="Developer Illustration"
                        width={500}
                        height={500}
                        priority
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
