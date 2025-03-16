'use client';

import Image from 'next/image';
import { Dancing_Script, Raleway } from 'next/font/google';
import hero_bg from '@/public/hero_bg.jpg';
import { motion } from 'framer-motion';

const d_script = Dancing_Script({
  weight: ['400'],
  subsets: ['latin'],
});
const raleway = Raleway({
  weight: ['400'],
  subsets: ['latin'],
});

const Hero = () => {
  return (
    <div className="relative w-full h-[93vh]">
      <Image
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        src={hero_bg}
        alt="hero_bg"
        width={1700}
        height={1700}
      />
      <div className="w-full h-full flex flex-col justify-center items-center z-10">
        <motion.div
          className=""
          initial={{ x: -300, opacity: 0 }} // Start off-screen (left) and invisible
          animate={{ x: 0, opacity: 1 }} // Slide in to position and fade in
          transition={{ duration: 2, ease: 'easeOut' }} // Smooth animation
        >
          <span
            className={`${d_script.className} antialiased text-6xl text-red-500`}
          >
            Cafe
          </span>
        </motion.div>
        <motion.div
          className=""
          initial={{ x: 300, opacity: 0 }} // Start off-screen (left) and invisible
          animate={{ x: 0, opacity: 1 }} // Slide in to position and fade in
          transition={{ duration: 2, ease: 'easeOut' }} // Smooth animation
        >
          <span
            className={`${raleway.className} antialiased text-white text-[200px]`}
          >
            Kafa
          </span>
        </motion.div>
        <motion.div
          className=""
          initial={{ x: -300, opacity: 0 }} // Start off-screen (left) and invisible
          animate={{ x: 0, opacity: 1 }} // Slide in to position and fade in
          transition={{ duration: 2, ease: 'easeOut' }} // Smooth animation
        >
          <p
            className={`${raleway.className} antialiased text-4xl border-b-2 border-t-2 border-white text-white p-2`}
          >
            725 Washington St, NY
          </p>
        </motion.div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-85 -z-10"></div>
    </div>
  );
};

export default Hero;
