"use client";

import { motion } from "framer-motion";
import Button from "../Button";

export default function FinalApology() {
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

        {/* CTA Buttons */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <Button>
            Can we start again? 💕
          </Button>

          <div className="flex gap-3 justify-center mt-4">
            <Button
              variant="ghost"
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 WhatsApp
            </Button>
            <Button
              variant="ghost"
              href="tel:"
            >
              📞 Call me
            </Button>
          </div>
        </motion.div>

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
