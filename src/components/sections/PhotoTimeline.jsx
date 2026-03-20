"use client";

import { motion } from "framer-motion";
import Card from "../Card";
import Button from "../Button";

const memories = [
  {
    imageSrc: "/assets/her1.jpg",
    caption:
      "The first time I saw your smile, I knew my world would never be the same.",
  },
  {
    imageSrc: "/assets/her.jpg",
    caption:
      "Every laugh we shared became a melody I never want to stop hearing.",
  },
  {
    caption:
      "You taught me that love isn't perfect — it's patient, it's forgiving.",
  },
  {
    imageSrc: "/assets/her1.jpg",
    caption:
      "Your deep, piercing eyes got me hooked",
  },
  {
    imageSrc: "/assets/her.jpg",
    caption:
      "With you, even the ordinary becomes magical. You are my magic, Ajike.",
  },
];

export default function PhotoTimeline({ onContinue }) {
  return (
    <section className="min-h-[100dvh] flex flex-col items-center px-6 py-16">
      <div className="max-w-sm w-full mx-auto">
        <motion.p
          className="text-white/40 text-xs uppercase tracking-[0.3em] mb-4 text-center font-inter"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          The Queen
        </motion.p>

        <motion.h2
          className="text-2xl font-playfair text-[#f5f0eb] mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Your royal majesty…you mean so much to me...
        </motion.h2>

        {/* Timeline line */}
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[#ff6b81]/40 via-[#ff6b81]/20 to-transparent" />

          <div className="space-y-6 pl-10">
            {memories.map((memory, index) => (
              <Card
                key={index}
                imageSrc={memory.imageSrc}
                caption={memory.caption}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Continue */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Button onClick={onContinue} variant="secondary">
            One more thing… →
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
