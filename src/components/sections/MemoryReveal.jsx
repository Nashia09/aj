"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Button from "../Button";

export default function MemoryReveal({ onContinue }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <section className="min-h-[100dvh] flex flex-col items-center justify-center px-6 py-16">
      <div className="max-w-sm w-full mx-auto text-center">
        <motion.p
          className="text-white/40 text-xs uppercase tracking-[0.3em] mb-8 font-inter"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Tap to reveal
        </motion.p>

        {/* Photo container */}
        <motion.div
          className="relative w-full aspect-square rounded-3xl overflow-hidden cursor-pointer mb-8"
          onClick={() => setRevealed(true)}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Actual image */}
          <img
            src="/assets/her.jpg"
            alt="A beautiful memory"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Blur overlay */}
          <motion.div
            className="absolute inset-0 backdrop-blur-xl bg-black/30"
            animate={{
              opacity: revealed ? 0 : 1,
            }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ pointerEvents: revealed ? "none" : "auto" }}
          />

          {/* Tap hint */}
          {!revealed && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-5 py-2.5">
                <span className="text-white/70 text-sm font-inter">Tap me 💕</span>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Caption */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={revealed ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {revealed && (
            <>
              <h2 className="text-2xl font-playfair text-[#f5f0eb] mb-3">
                This day meant everything to me…
              </h2>
              <p className="text-white/50 text-sm font-inter font-light mb-8">
                Every moment with you, Ajike, is a memory I hold close to my heart.
              </p>
              <Button onClick={onContinue} variant="secondary">
                Continue →
              </Button>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
