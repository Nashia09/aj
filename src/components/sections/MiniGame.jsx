"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import GameOption from "../GameOption";
import Button from "../Button";

const options = [
  { id: 0, text: "To win an argument 🙄", isCorrect: false },
  { id: 1, text: "To be right 😤", isCorrect: false },
  { id: 2, text: "To have you back ❤️", isCorrect: true },
];

export default function MiniGame({ onContinue }) {
  const [selectedId, setSelectedId] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleSelect = useCallback(
    (optionId, correct) => {
      setSelectedId(optionId);
      if (correct) {
        setIsCorrect(true);
        // Fire confetti
        import("canvas-confetti").then((confetti) => {
          const fire = confetti.default;
          fire({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
            colors: ["#ff6b81", "#ff8a9d", "#ffc2cd", "#ffffff", "#ffd1dc"],
          });
          setTimeout(() => {
            fire({
              particleCount: 50,
              angle: 60,
              spread: 55,
              origin: { x: 0 },
              colors: ["#ff6b81", "#ff8a9d", "#ffc2cd"],
            });
            fire({
              particleCount: 50,
              angle: 120,
              spread: 55,
              origin: { x: 1 },
              colors: ["#ff6b81", "#ff8a9d", "#ffc2cd"],
            });
          }, 250);
        });
      } else {
        // Wrong answer — shake and then allow re-selection after a short delay
        setTimeout(() => {
          setSelectedId(null);
        }, 800);
      }
    },
    []
  );

  return (
    <section className="min-h-[100dvh] flex flex-col items-center justify-center px-6 py-16">
      <div className="max-w-sm w-full mx-auto text-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200 }}
          className="w-16 h-16 rounded-full bg-[rgba(255,107,129,0.12)] border border-[#ff6b81]/20 flex items-center justify-center mx-auto mb-8"
        >
          <span className="text-2xl">🎮</span>
        </motion.div>

        <motion.h2
          className="text-2xl font-playfair text-[#f5f0eb] mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          A little game for you
        </motion.h2>

        <motion.p
          className="text-white/50 text-sm font-inter font-light mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          What do I want more than anything right now?
        </motion.p>

        {/* Options */}
        <div className="space-y-3 mb-8">
          {options.map((option, i) => (
            <motion.div
              key={option.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + i * 0.15 }}
            >
              <GameOption
                text={option.text}
                isCorrect={option.isCorrect}
                onSelect={(correct) => handleSelect(option.id, correct)}
                selected={selectedId === option.id}
                disabled={isCorrect}
              />
            </motion.div>
          ))}
        </div>

        {/* Result — correct */}
        {isCorrect && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="text-center"
          >
            <p className="text-[#ff6b81] text-lg font-playfair mb-2">
              You know me so well 💕
            </p>
            <p className="text-white/40 text-sm font-inter font-light mb-8">
              All I want is you, Damilola.
            </p>
            <Button onClick={onContinue}>Keep going →</Button>
          </motion.div>
        )}

        {/* Result — wrong (shows briefly before reset) */}
        {selectedId !== null && !isCorrect && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <p className="text-white/40 text-sm font-inter mb-4">
              Hmm, not quite… try again 💗
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
