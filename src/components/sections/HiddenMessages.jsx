"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../Button";

const messages = [
  { text: "You mean so much to me", emoji: "💗" },
  { text: "I hate seeing you hurt", emoji: "🥺" },
  { text: "I'm really sorry", emoji: "💔" },
  { text: "You're my favorite person", emoji: "🌟" },
  { text: "I'll do better, I promise", emoji: "🤞" },
  { text: "You deserve all my love", emoji: "💝" },
];

function Bubble({ message, index, onTap, isRevealed }) {
  const positions = [
    { x: "10%", y: "15%" },
    { x: "65%", y: "10%" },
    { x: "25%", y: "45%" },
    { x: "70%", y: "40%" },
    { x: "15%", y: "70%" },
    { x: "60%", y: "72%" },
  ];

  const pos = positions[index] || { x: "50%", y: "50%" };

  return (
    <motion.button
      className="absolute cursor-pointer"
      style={{ left: pos.x, top: pos.y }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 1,
        y: [0, -8, 0],
      }}
      transition={{
        scale: { delay: index * 0.2, type: "spring", stiffness: 200 },
        y: { duration: 3, repeat: Infinity, delay: index * 0.5, ease: "easeInOut" },
      }}
      whileTap={{ scale: 0.9 }}
      onClick={() => onTap(index)}
    >
      {!isRevealed ? (
        <motion.div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#ff6b81]/40 to-[#ff6b81]/10 border border-[#ff6b81]/20 flex items-center justify-center backdrop-blur-sm shadow-[0_0_20px_rgba(255,107,129,0.15)]">
          <span className="text-2xl">{message.emoji}</span>
        </motion.div>
      ) : (
        <motion.div
          className="bg-[rgba(255,107,129,0.12)] border border-[#ff6b81]/25 rounded-2xl px-4 py-3 backdrop-blur-sm max-w-[160px] shadow-[0_0_25px_rgba(255,107,129,0.15)]"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <p className="text-[#f5f0eb] text-xs font-inter font-light text-center leading-relaxed">
            {message.text}
          </p>
        </motion.div>
      )}
    </motion.button>
  );
}

export default function HiddenMessages({ onContinue }) {
  const [revealed, setRevealed] = useState(new Set());

  const handleTap = (index) => {
    setRevealed((prev) => new Set([...prev, index]));
  };

  const allRevealed = revealed.size === messages.length;

  return (
    <section className="min-h-[100dvh] flex flex-col items-center justify-center px-6 py-16 relative">
      <div className="max-w-sm w-full mx-auto text-center">
        <motion.p
          className="text-white/40 text-xs uppercase tracking-[0.3em] mb-4 font-inter"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Tap each heart
        </motion.p>

        <motion.h2
          className="text-2xl font-playfair text-[#f5f0eb] mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Hidden messages for you, Ajike…
        </motion.h2>

        {/* Bubbles container */}
        <div className="relative w-full h-[400px]">
          {messages.map((message, index) => (
            <Bubble
              key={index}
              message={message}
              index={index}
              onTap={handleTap}
              isRevealed={revealed.has(index)}
            />
          ))}
        </div>

        {/* Counter */}
        <motion.p
          className="text-white/30 text-xs font-inter mt-4 mb-6"
          animate={{ opacity: allRevealed ? 0 : 1 }}
        >
          {revealed.size} / {messages.length} revealed
        </motion.p>

        {/* Continue button */}
        <AnimatePresence>
          {allRevealed && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Button onClick={onContinue} variant="secondary">
                Continue →
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
