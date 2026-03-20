"use client";

import { motion } from "framer-motion";

export default function Button({
  children,
  onClick,
  variant = "primary",
  className = "",
  href,
  ...props
}) {
  const baseStyles =
    "relative inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-medium tracking-wide transition-all duration-300 overflow-hidden cursor-pointer";

  const variants = {
    primary:
      "bg-[#ff6b81] text-white shadow-[0_0_30px_rgba(255,107,129,0.4)] hover:shadow-[0_0_50px_rgba(255,107,129,0.6)] hover:bg-[#ff8a9d]",
    secondary:
      "bg-transparent border border-[rgba(255,107,129,0.4)] text-[#ff6b81] hover:bg-[rgba(255,107,129,0.1)]",
    ghost:
      "bg-[rgba(255,255,255,0.05)] text-[#f5f0eb] hover:bg-[rgba(255,255,255,0.1)] backdrop-blur-sm",
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.6 }}
      />
    </Component>
  );
}
