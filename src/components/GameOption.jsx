"use client";

import { motion } from "framer-motion";

export default function GameOption({ text, isCorrect, onSelect, selected, disabled }) {
  const getStyles = () => {
    if (!selected) {
      return "border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.04)] hover:border-[#ff6b81]/50 hover:bg-[rgba(255,107,129,0.08)]";
    }
    if (isCorrect) {
      return "border-[#ff6b81] bg-[rgba(255,107,129,0.15)] shadow-[0_0_30px_rgba(255,107,129,0.3)]";
    }
    return "border-red-900/50 bg-red-900/10 opacity-60";
  };

  return (
    <motion.button
      onClick={() => !disabled && onSelect(isCorrect)}
      className={`w-full text-left px-6 py-4 rounded-2xl border backdrop-blur-sm transition-all duration-300 cursor-pointer ${getStyles()}`}
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
    >
      <span className="text-[#f5f0eb] text-base font-inter font-light">{text}</span>
      {selected && isCorrect && (
        <motion.span
          className="ml-2 text-[#ff6b81]"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          ✓
        </motion.span>
      )}
    </motion.button>
  );
}
