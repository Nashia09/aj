"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Heart({ id, onComplete }) {
  const size = Math.random() * 16 + 8;
  const startX = Math.random() * 100;
  const duration = Math.random() * 6 + 8;
  const delay = Math.random() * 4;
  const drift = (Math.random() - 0.5) * 60;

  return (
    <motion.div
      className="absolute bottom-0 pointer-events-none select-none"
      style={{
        left: `${startX}%`,
        fontSize: `${size}px`,
      }}
      initial={{ y: 20, opacity: 0 }}
      animate={{
        y: "-110vh",
        x: [0, drift, -drift / 2, drift / 3],
        opacity: [0, 0.6, 0.5, 0.3, 0],
      }}
      transition={{
        duration,
        delay,
        ease: "linear",
        repeat: Infinity,
        repeatDelay: Math.random() * 3,
      }}
    >
      <span className="text-[#ff6b81]/40">♥</span>
    </motion.div>
  );
}

export default function FloatingHearts() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const heartList = Array.from({ length: 12 }, (_, i) => ({ id: i }));
    setHearts(heartList);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <AnimatePresence>
        {hearts.map((heart) => (
          <Heart key={heart.id} id={heart.id} />
        ))}
      </AnimatePresence>
    </div>
  );
}
