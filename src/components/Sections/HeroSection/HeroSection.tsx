"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const technologies = [
    "TailwindCSS",
    "ReactJS",
    "NextJS",
    "Firebase",
    "Supabase",
  ];
  const [currentTechIndex, setCurrentTechIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(150);

  useEffect(() => {
    const tick = () => {
      const currentTech = technologies[currentTechIndex];

      if (isDeleting) {
        setText(text.substring(0, text.length - 1));
      } else {
        setText(currentTech.substring(0, text.length + 1));
      }

      if (!isDeleting && text === currentTech) {
        // Complete word, pause before deleting
        setDelta(2000);
        setIsDeleting(true);
      } else if (isDeleting && text === "") {
        // Word deleted, move to next word
        setIsDeleting(false);
        setCurrentTechIndex((prev) => (prev + 1) % technologies.length);
        setDelta(150);
      } else {
        // Typing or deleting in progress
        setDelta(isDeleting ? 80 : 150);
      }
    };

    const timer = setTimeout(tick, delta);
    return () => clearTimeout(timer);
  }, [text, currentTechIndex, isDeleting, delta, technologies]);

  // For social icons animation
  const socialVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const socialItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      className="relative w-full py-7 md:py-16 "
      aria-label="Hero Section"
    >
      <div className="">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left column: Text content */}
          <div className="w-full md:w-1/2 flex flex-col space-y-6">
            <motion.p
              className="text-primary font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Hello there, I&apos;m
            </motion.p>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Zaid Khan
            </motion.h1>

            <motion.h2
              className="text-xl md:text-2xl text-muted-foreground font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Web Developer | <span className="text-primary">{text}</span>
              <span className="animate-blink">|</span>
            </motion.h2>

            <motion.p
              className="text-base md:text-lg text-muted-foreground max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              I&apos;m a passionate web developer specializing in{" "}
              <span className="text-primary font-medium">
                React.js, Next.js, Supabase, Firebase, and Tailwind CSS
              </span>
              . I love building interactive, scalable, and user-friendly web
              applications.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="projects">View Projects</Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="contact">Contact Me</Link>
              </Button>
            </motion.div>

            {/* Social Media Links */}
            <motion.div
              className="flex gap-4 pt-8"
              variants={socialVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.a
                href="https://github.com/zaidkhan-web"
                target="_blank"
                rel="noopener noreferrer"
                variants={socialItemVariants}
                className="p-3 bg-card hover:bg-primary/10 rounded-full transition-colors duration-300 shadow-sm border border-border flex items-center justify-center w-12 h-12"
                aria-label="GitHub Profile"
              >
                <Image
                  src={"github.svg"}
                  alt={"GitHub"}
                  width={30}
                  height={30}
                  className="object-contain"
                />
              </motion.a>

              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                variants={socialItemVariants}
                className="p-3 bg-card hover:bg-primary/10 rounded-full transition-colors duration-300 shadow-sm border border-border flex items-center justify-center w-12 h-12"
                aria-label="LinkedIn Profile"
              >
                <Image
                  src={"linkedin.svg"}
                  alt={"LinkedIn"}
                  width={30}
                  height={30}
                  className="object-contain"
                />
              </motion.a>

              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                variants={socialItemVariants}
                className="p-3 bg-card hover:bg-primary/10 rounded-full transition-colors duration-300 shadow-sm border border-border flex items-center justify-center w-12 h-12"
                aria-label="Facebook Profile"
              >
                <Image
                  src={"facebook.svg"}
                  alt={"Facebook"}
                  width={30}
                  height={30}
                  className="object-contain"
                />
              </motion.a>

              <motion.a
                href="https://wa.me/923409094754"
                target="_blank"
                rel="noopener noreferrer"
                variants={socialItemVariants}
                className="p-3 bg-card hover:bg-primary/10 rounded-full transition-colors duration-300 shadow-sm border border-border flex items-center justify-center w-12 h-12"
                aria-label="WhatsApp Profile"
              >
                <Image
                  src={"whatsapp.svg"}
                  alt={"WhatsApp"}
                  width={30}
                  height={30}
                  className="object-contain"
                />
              </motion.a>
            </motion.div>
          </div>

          {/* Right column: Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <motion.div
              className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {/* Placeholder for 3D illustration or personal image */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-xl opacity-70 dark:opacity-30 animate-pulse" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-border bg-card/50 backdrop-blur-sm shadow-xl">
                <Image
                  src="/zaid.png"
                  alt="Zaid Khan - Web Developer"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
