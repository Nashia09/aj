"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FloatingHearts from "@/components/FloatingHearts";
import ProgressIndicator from "@/components/ProgressIndicator";
import HeroSection from "@/components/sections/HeroSection";
import MemoryReveal from "@/components/sections/MemoryReveal";
import HiddenMessages from "@/components/sections/HiddenMessages";
import MiniGame from "@/components/sections/MiniGame";
import PhotoTimeline from "@/components/sections/PhotoTimeline";
import FinalApology from "@/components/sections/FinalApology";

const TOTAL_STEPS = 6;

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);
  const [unlockedStep, setUnlockedStep] = useState(0);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [musicInitialized, setMusicInitialized] = useState(false);
  const audioRef = useRef(null);
  const sectionRefs = useRef([]);

  const scrollToSection = useCallback((index) => {
    setTimeout(() => {
      sectionRefs.current[index]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  }, []);

  const advanceTo = useCallback(
    (step) => {
      setUnlockedStep((prev) => Math.max(prev, step));
      setCurrentStep(step);
      scrollToSection(step);
    },
    [scrollToSection]
  );

  // Try to autoplay music on first user interaction
  const tryAutoplayMusic = useCallback(() => {
    if (musicInitialized || !audioRef.current) return;
    setMusicInitialized(true);
    audioRef.current.volume = 0.4;
    audioRef.current.play().then(() => {
      setMusicPlaying(true);
    }).catch(() => {
      // Autoplay blocked — that's fine, user can tap the button
    });
  }, [musicInitialized]);

  const handleStart = useCallback(() => {
    tryAutoplayMusic();
    advanceTo(1);
  }, [advanceTo, tryAutoplayMusic]);

  const goNext = useCallback(() => {
    advanceTo(currentStep + 1);
  }, [currentStep, advanceTo]);

  const toggleMusic = useCallback(() => {
    if (!audioRef.current) return;
    if (musicPlaying) {
      audioRef.current.pause();
      setMusicPlaying(false);
    } else {
      audioRef.current.volume = 0.4;
      audioRef.current.play().then(() => {
        setMusicPlaying(true);
      }).catch(() => {});
    }
  }, [musicPlaying]);

  // Track scroll position to update progress indicator
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      for (let i = Math.min(unlockedStep, sectionRefs.current.length - 1); i >= 0; i--) {
        const section = sectionRefs.current[i];
        if (section && section.offsetTop <= scrollY + windowHeight / 2) {
          setCurrentStep(i);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [unlockedStep]);

  const sectionVariants = {
    hidden: { opacity: 0, height: 0, overflow: "hidden" },
    visible: { 
      opacity: 1, 
      height: "auto", 
      overflow: "visible",
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    },
  };

  return (
    <main className="relative">
      {/* Floating hearts background */}
      <FloatingHearts />

      {/* Progress indicator */}
      <AnimatePresence>
        {unlockedStep >= 1 && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <ProgressIndicator totalSteps={TOTAL_STEPS} currentStep={currentStep} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Music toggle */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.1)] backdrop-blur-md flex items-center justify-center cursor-pointer transition-all hover:bg-[rgba(255,255,255,0.1)] pulse-ring"
        onClick={toggleMusic}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        title={musicPlaying ? "Pause music" : "Play music"}
      >
        <span className="text-lg">{musicPlaying ? "🎵" : "🔇"}</span>
      </motion.button>

      {/* Audio element */}
      <audio ref={audioRef} loop preload="auto">
        <source src="/assets/audio/SYEMCA-Ft-Chike-Love-Egbugomo-(TrendyBeatz.com).mp3" type="audio/mpeg" />
      </audio>

      {/* === Sections — only shown when unlocked === */}
      <div ref={(el) => (sectionRefs.current[0] = el)}>
        <HeroSection onStart={handleStart} />
      </div>

      <motion.div
        ref={(el) => (sectionRefs.current[1] = el)}
        variants={sectionVariants}
        initial="hidden"
        animate={unlockedStep >= 1 ? "visible" : "hidden"}
      >
        <MemoryReveal onContinue={goNext} />
      </motion.div>

      <motion.div
        ref={(el) => (sectionRefs.current[2] = el)}
        variants={sectionVariants}
        initial="hidden"
        animate={unlockedStep >= 2 ? "visible" : "hidden"}
      >
        <HiddenMessages onContinue={goNext} />
      </motion.div>

      <motion.div
        ref={(el) => (sectionRefs.current[3] = el)}
        variants={sectionVariants}
        initial="hidden"
        animate={unlockedStep >= 3 ? "visible" : "hidden"}
      >
        <MiniGame onContinue={goNext} />
      </motion.div>

      <motion.div
        ref={(el) => (sectionRefs.current[4] = el)}
        variants={sectionVariants}
        initial="hidden"
        animate={unlockedStep >= 4 ? "visible" : "hidden"}
      >
        <PhotoTimeline onContinue={goNext} />
      </motion.div>

      <motion.div
        ref={(el) => (sectionRefs.current[5] = el)}
        variants={sectionVariants}
        initial="hidden"
        animate={unlockedStep >= 5 ? "visible" : "hidden"}
      >
        <FinalApology />
      </motion.div>
    </main>
  );
}
