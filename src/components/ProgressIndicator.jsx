"use client";

import { motion } from "framer-motion";

export default function ProgressIndicator({ totalSteps, currentStep }) {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2">
      {Array.from({ length: totalSteps }, (_, i) => (
        <motion.div
          key={i}
          className="relative"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: i * 0.1, type: "spring", stiffness: 300 }}
        >
          <div
            className={`rounded-full transition-all duration-500 ${
              i === currentStep
                ? "w-8 h-2 bg-[#ff6b81] shadow-[0_0_12px_rgba(255,107,129,0.5)]"
                : i < currentStep
                ? "w-2 h-2 bg-[#ff6b81]/60"
                : "w-2 h-2 bg-white/15"
            }`}
          />
        </motion.div>
      ))}
    </div>
  );
}
