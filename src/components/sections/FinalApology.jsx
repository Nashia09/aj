"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import Button from "../Button";

export default function FinalApology() {
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [noSize, setNoSize] = useState(1);
  const [yesSize, setYesSize] = useState(1);
  const [noAttempts, setNoAttempts] = useState(0);

  const funnyTexts = [
    "Can we start again?",
    "Are you sure? 🥺",
    "Really? Think again…",
    "You're breaking my heart 💔",
    "Okay fine… but are you SURE?",
    "Last chance… please? 🥹",
    "I won't give up! 😤❤️",
  ];

  const handleNoHover = useCallback(() => {
    // Move the No button to a random position
    const randX = (Math.random() - 0.5) * 250;
    const randY = (Math.random() - 0.5) * 200;
    setNoPos({ x: randX, y: randY });
    setNoAttempts((prev) => prev + 1);
    // Shrink No, grow Yes
    setNoSize((prev) => Math.max(prev * 0.75, 0.3));
    setYesSize((prev) => Math.min(prev * 1.15, 2));
  }, []);

  const handleYes = useCallback(() => {
    const message = encodeURIComponent("Let's do it my love");
    const phone = "2349092313062";
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  }, []);

  const displayText = funnyTexts[Math.min(noAttempts, funnyTexts.length - 1)];

  return (
    <section className="min-h-[100dvh] flex flex-col items-center justify-center px-6 py-16 relative">
      {/* Soft glow behind text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#ff6b81]/6 blur-[100px]" />

      <div className="relative z-10 max-w-sm w-full mx-auto text-center">
        {/* Heart icon */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200 }}
          className="mb-10"
        >
          <motion.span
            className="text-5xl inline-block"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            ❤️
          </motion.span>
        </motion.div>

        {/* Main apology */}
        <motion.h2
          className="text-3xl md:text-4xl font-playfair text-[#f5f0eb] mb-6 leading-snug"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Damilola,
        </motion.h2>

        <motion.p
          className="text-white/70 text-base font-inter font-light leading-relaxed mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          I hurt you, and I&apos;m truly sorry.
          <br />
          Not just because I miss you…
          <br />
          But because you deserve better from me.
        </motion.p>

        <motion.div
          className="w-12 h-px bg-[#ff6b81]/30 mx-auto my-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9, duration: 0.6 }}
        />

        <motion.p
          className="text-white/50 text-sm font-inter font-light leading-relaxed mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          If you can, I&apos;d love another chance to show you that.
          <br />
          Because being without you, Ajike…
          <br />
          isn&apos;t something I ever want to get used to.
        </motion.p>

        {/* Dynamic question text */}
        <motion.p
          key={displayText}
          className="text-[#ff6b81] text-lg font-playfair mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {displayText}
        </motion.p>

        {/* Yes / No buttons */}
        <motion.div
          className="relative flex items-center justify-center gap-6 min-h-[120px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          {/* YES button — grows with each No attempt */}
          <motion.div
            animate={{ scale: yesSize }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Button onClick={handleYes}>
              Yes 💕
            </Button>
          </motion.div>

          {/* NO button — runs away on hover/touch */}
          <motion.div
            animate={{ x: noPos.x, y: noPos.y, scale: noSize }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <motion.button
              onMouseEnter={handleNoHover}
              onTouchStart={handleNoHover}
              onClick={handleNoHover}
              className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-white/40 text-sm font-inter cursor-pointer transition-colors hover:border-white/20"
              whileTap={{ scale: 0.9 }}
            >
              No 😢
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Funny message after attempts */}
        {noAttempts >= 3 && (
          <motion.p
            className="text-white/30 text-xs font-inter mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {noAttempts >= 5
              ? "See? Even the button knows you should say yes! 😂❤️"
              : "The No button is shy… it doesn't want you to pick it 🙈"}
          </motion.p>
        )}

        {/* Signature */}
        <motion.p
          className="text-white/20 text-xs font-inter mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 2, duration: 1 }}
        >
          Made with all the love I have left ❤️
        </motion.p>
      </div>
    </section>
  );
}
