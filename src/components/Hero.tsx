"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, stagger, useAnimate } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";

const PhotographyStudioHero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [scope, animate] = useAnimate();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);

  useEffect(() => {
    const animateElements = async () => {
      await animate(
        "h1 span",
        { opacity: 1, y: 0 },
        { duration: 0.8, delay: stagger(0.1) }
      );
      await animate(
        "h2",
        { opacity: 1, y: 0 },
        { duration: 0.6, delay: 0.2 }
      );
      await animate(
        "button",
        { opacity: 1, scale: 1 },
        { duration: 0.5, type: "spring" }
      );
      await animate(
        ".floating-shape",
        { opacity: 1, y: 0 },
        { duration: 0.7, delay: stagger(0.15) }
      );
    };

    animateElements();
  }, [animate]);

  // Split headline into words for staggered animation
  const headline = "סטודיו לצילום מוביל בישראל";
  const headlineWords = headline.split(" ");

  return (
    <div
      id="photography-studio-hero"
      ref={heroRef}
      className="relative w-full h-screen overflow-hidden"
      dir="rtl"
    >
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ y, opacity }}
      >
        <Image
          src="https://images.unsplash.com/photo-1520549233664-03f65c1d1327?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="סטודיו צילום מקצועי"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </motion.div>

      {/* Floating Shapes */}
      <motion.div
        className="floating-shape absolute top-[20%] right-[15%] w-16 h-16 rounded-full bg-[#45B7D1] bg-opacity-30 blur-sm"
        initial={{ opacity: 0, y: 50 }}
      />
      <motion.div
        className="floating-shape absolute bottom-[30%] right-[25%] w-24 h-24 rounded-full bg-[#4ECDC4] bg-opacity-20 blur-sm"
        initial={{ opacity: 0, y: 50 }}
      />
      <motion.div
        className="floating-shape absolute top-[40%] left-[20%] w-20 h-20 rounded-full bg-[#45B7D1] bg-opacity-25 blur-sm"
        initial={{ opacity: 0, y: 50 }}
      />

      {/* Content Container */}
      <div
        ref={scope}
        className="relative z-10 flex flex-col items-end justify-center h-full max-w-7xl mx-auto px-6 md:px-12 text-right"
      >
        {/* Headline with staggered animation */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          {headlineWords.map((word, index) => (
            <span
              key={index}
              className="inline-block mr-2"
              initial={{ opacity: 0, y: 20 }}
            >
              {word}
            </span>
          ))}
        </h1>

        {/* Subheadline */}
        <motion.h2
          className="text-xl md:text-2xl lg:text-3xl text-white mb-8 font-light"
          initial={{ opacity: 0, y: 20 }}
        >
          חווית לקוח מושלמת בכל ביקור
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-white text-lg max-w-xl mb-10 opacity-90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          אנחנו סטודיו לצילום מוביל בתחום הטכנולוגיה עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          className="flex items-center bg-[#4ECDC4] hover:bg-[#3dbdb5] text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] focus:ring-opacity-50"
          initial={{ opacity: 0, scale: 0.9 }}
          whileHover={{
            boxShadow: "0 0 15px rgba(78, 205, 196, 0.5)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          קבע תור עכשיו
          <FaArrowLeft className="mr-2 ml-1" aria-hidden="true" />
        </motion.button>
      </div>

      {/* Accessibility skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:right-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded"
      >
        דלג לתוכן העיקרי
      </a>
    </div>
  );
};

export default PhotographyStudioHero;