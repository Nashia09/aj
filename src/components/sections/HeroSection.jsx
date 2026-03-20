"use client";

import { motion } from "framer-motion";
import Button from "../Button";

export default function HeroSection({ onStart }) {
  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0a10] via-[#0d0d0d] to-[#0d0d0d]" />
      
      {/* Soft radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#ff6b81]/8 blur-[120px]" />

      <div className="relative z-10 text-center max-w-md mx-auto">
        {/* Small heart icon */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          className="mb-8"
        >
          <span className="text-4xl">💌</span>
        </motion.div>

        {/* Main text */}
        <motion.p
          className="text-white/50 text-xs uppercase tracking-[0.3em] mb-6 font-inter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          A letter for Ajike
        </motion.p>

        <motion.h1
          className="text-3xl md:text-4xl font-playfair leading-snug mb-4 text-[#f5f0eb]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Hey… I know I messed up.
        </motion.h1>

        <motion.p
          className="text-lg text-white/60 font-light font-inter leading-relaxed mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          But can you give me a minute to make you smile?
        </motion.p>

        {/* Start button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          <Button onClick={onStart}>
            Start ✨
          </Button>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-white/20 text-sm font-inter"
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
}
