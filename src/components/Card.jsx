"use client";

import { motion } from "framer-motion";

export default function Card({ imageSrc, caption, index = 0 }) {
  return (
    <motion.div
      className="relative rounded-2xl overflow-hidden bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] backdrop-blur-sm"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {imageSrc ? (
        <div className="relative w-full aspect-[4/3] overflow-hidden">
          <img
            src={imageSrc}
            alt={caption}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
      ) : (
        <div className="relative w-full aspect-[4/3] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b81]/20 via-[#1a1a2e]/60 to-[#0d0d0d] flex items-center justify-center">
            <div className="text-center opacity-40">
              <svg
                className="w-12 h-12 mx-auto mb-2 text-[#ff6b81]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              <p className="text-xs text-white/40 font-inter">Your photo here</p>
            </div>
          </div>
        </div>
      )}
      <div className="p-5">
        <p className="text-[#f5f0eb]/80 text-sm font-light leading-relaxed font-inter">
          {caption}
        </p>
      </div>
    </motion.div>
  );
}
