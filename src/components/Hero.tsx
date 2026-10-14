"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Download, Sparkles } from "lucide-react";
import Image from "next/image";

// Rotating typewriter subtitles
const SUBTITLES = [
  "Software Engineer",
  "Full Stack Developer",
  "Go Backend Engineer",
  "AI / ML Researcher",
  "Kaggle Silver Medalist"
];

// Stats metrics
const STATS = [
  { label: "Research Internships", value: 3, suffix: "" },
  { label: "Flagship Projects", value: 3, suffix: "+" },
  { label: "Kaggle Medal", value: 1, suffix: "🥈" },
  { label: "Tech Skills", value: 30, suffix: "+" },
];

const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const TelegramIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M21.9 3.2 18.7 21c-.24 1.25-.92 1.56-1.87.97l-5.16-3.8-2.49 2.4c-.28.28-.51.51-1.04.51l.37-5.25 9.56-8.64c.42-.37-.09-.58-.65-.21L5.6 13.98.53 12.39c-1.1-.34-1.12-1.1.23-1.63L20.57 3.1c.92-.34 1.72.21 1.33.1z"/>
  </svg>
);

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.075-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12.004 2C6.478 2 2 6.477 2 12c0 1.762.458 3.417 1.257 4.877L2 22l5.273-1.382A9.96 9.96 0 0 0 12.004 22C17.523 22 22 17.523 22 12S17.523 2 12.004 2zm0 18c-1.575 0-3.102-.425-4.441-1.231l-.318-.189-3.129.82.835-3.052-.207-.33A7.963 7.963 0 0 1 4.004 12c0-4.411 3.589-8 8-8s7.996 3.589 7.996 8-3.585 8-7.996 8z"/>
  </svg>
);

const DiscordIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.54 4.41A16.37 16.37 0 0 0 15.5 3.16a.06.06 0 0 0-.07.03c-.17.3-.36.7-.5 1.02a15.07 15.07 0 0 0-5.86 0c-.14-.33-.34-.72-.51-1.02a.07.07 0 0 0-.07-.03 16.4 16.4 0 0 0-4.04 1.25.06.06 0 0 0-.03.02C1.85 8.28 1.15 12.07 1.5 15.82a.08.08 0 0 0 .03.05 16.5 16.5 0 0 0 4.97 2.5.08.08 0 0 0 .08-.03c.38-.52.72-1.07 1.01-1.65a.08.08 0 0 0-.04-.11 10.7 10.7 0 0 1-1.55-.74.08.08 0 0 1-.01-.13c.1-.08.21-.16.31-.24a.07.07 0 0 1 .07-.01c3.25 1.48 6.77 1.48 9.98 0a.07.07 0 0 1 .08.01c.1.08.21.16.31.24a.08.08 0 0 1-.01.13c-.49.29-1.01.54-1.55.74a.08.08 0 0 0-.04.11c.3.58.63 1.13 1.01 1.65a.08.08 0 0 0 .08.03 16.5 16.5 0 0 0 4.98-2.5.08.08 0 0 0 .03-.05c.42-4.35-.71-8.1-2.99-11.39a.06.06 0 0 0-.03-.02zM8.02 13.68c-.98 0-1.79-.9-1.79-2.01s.79-2.02 1.79-2.02 1.8.91 1.79 2.02c0 1.11-.79 2.01-1.79 2.01zm7.96 0c-.98 0-1.79-.9-1.79-2.01s.79-2.02 1.79-2.02 1.8.91 1.79 2.02c0 1.11-.79 2.01-1.79 2.01z"/>
  </svg>
);

const LeetCodeIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414 0-1.954l-2.36-2.333c-.54-.54-1.41-.54-1.95 0l-2.38 2.38c-.54.54-1.41.54-1.95 0l-.39-.39c-.54-.54-.54-1.41 0-1.95l2.39-2.38c.54-.54.54-1.41 0-1.95l-2.38-2.38c-.54-.54-.54-1.41 0-1.95l.39-.39c.54-.54 1.41-.54 1.95 0l6.77 6.77c.54.54 1.41.54 1.95 0l2.38-2.38c.54-.54.54-1.41 0-1.95l-6.77-6.77c-.27-.27-.64-.44-1.03-.44z"/>
  </svg>
);

const KaggleIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.336z"/>
  </svg>
);

const MailIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M22 6l-10 7L2 6" />
  </svg>
);

// Animated number ticker — eases from 0 up to the target once triggered
function CountUp({ value, suffix, start }: { value: number; suffix: string; start: boolean }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const duration = 1400;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      setDisplay(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, value]);

  return (
    <>
      {display}
      {suffix}
    </>
  );
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [subIdx, setSubIdx] = useState(0);
  const [subText, setSubText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  const [statsLoaded, setStatsLoaded] = useState(false);
  const [resumeSynthesizing, setResumeSynthesizing] = useState(false);
  const [synthesisProgress, setSynthesisProgress] = useState(0);

  // Interactive 3D tilt for the holographic profile frame (spring-smoothed)
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const springTiltX = useSpring(tiltX, { stiffness: 150, damping: 15, mass: 0.4 });
  const springTiltY = useSpring(tiltY, { stiffness: 150, damping: 15, mass: 0.4 });

  const handleFrameTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    // Max ~10deg tilt, inverted on X for a natural "look toward cursor" feel
    tiltX.set(-py * 12);
    tiltY.set(px * 12);
  };

  const resetFrameTilt = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  // 1. Matrix Code Rain Canvas (Cyan & Purple theme)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@%&+-/*";
    const fontSize = 14;
    const columns = width / fontSize;
    const rainDrops = Array.from({ length: columns }, () => 1);

    const draw = () => {
      // Create a fading translucent black overlay to trail the characters
      ctx.fillStyle = "rgba(3, 3, 8, 0.08)";
      ctx.fillRect(0, 0, width, height);

      // Randomize drops coloring between cyber cyan and purple
      rainDrops.forEach((y, x) => {
        const text = alphabet[Math.floor(Math.random() * alphabet.length)];
        ctx.fillStyle = Math.random() > 0.5 ? "#00f0ff" : "#b923ff";
        ctx.font = `${fontSize}px monospace`;
        ctx.fillText(text, x * fontSize, y * fontSize);

        if (y * fontSize > height && Math.random() > 0.975) {
          rainDrops[x] = 0;
        }
        rainDrops[x]++;
      });
    };

    const interval = setInterval(draw, 33);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // 2. Typewriter Effect
  useEffect(() => {
    const handleType = () => {
      const fullText = SUBTITLES[subIdx];
      if (!isDeleting) {
        setSubText(fullText.substring(0, subText.length + 1));
        setTypingSpeed(100);
        if (subText === fullText) {
          // Pause at full word before deleting
          setTypingSpeed(2000);
          setIsDeleting(true);
        }
      } else {
        setSubText(fullText.substring(0, subText.length - 1));
        setTypingSpeed(50);
        if (subText === "") {
          setIsDeleting(false);
          setSubIdx((prev) => (prev + 1) % SUBTITLES.length);
        }
      }
    };

    const typingTimeout = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(typingTimeout);
  }, [subText, isDeleting, subIdx, typingSpeed]);

  // Trigger stats animation delay
  useEffect(() => {
    const timer = setTimeout(() => setStatsLoaded(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  // 3. Resume Synthesizer System
  const triggerResumeSynthesis = () => {
    if (resumeSynthesizing) return;
    setResumeSynthesizing(true);
    setSynthesisProgress(0);

    const progressTimer = setInterval(() => {
      setSynthesisProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          setTimeout(() => {
            setResumeSynthesizing(false);
            // Download the actual resume PDF
            const link = document.createElement("a");
            link.href = "/Charlie_Smith_Resume.pdf";
            link.download = "Charlie_Smith_Resume.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }, 600);
          return 100;
        }
        return prev + 10;
      });
    }, 150);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden select-none"
    >
      {/* 1. Interactive Matrix Rain Background Layer */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-20 pointer-events-none" />

      {/* Cyber Grid Lines Overlay */}
      <div className="absolute inset-0 bg-cyber-grid-pattern bg-[size:40px_40px] opacity-[0.05] z-0 pointer-events-none" />

      {/* Volumetric Neon Ambient Lights */}
      <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] bg-cyber-cyan/5 rounded-full filter blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] bg-cyber-purple/5 rounded-full filter blur-[120px] pointer-events-none animate-pulse-slow" style={{ animationDelay: "2s" }} />

      <div className="w-[92%] max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 z-10 items-center">
        {/* Left Hand: Hero Information Console */}
        <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
          {/* Cyber Title Header Badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="self-start flex items-center space-x-1.5 text-[9px] text-zinc-400 bg-zinc-900/40 border border-zinc-800 px-3.5 py-1 rounded-full tracking-widest font-mono uppercase"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
            <span>COMMAND_ROOT // SYSTEM: ACTIVE</span>
          </motion.div>

          {/* Name Header */}
          <div className="flex flex-col space-y-2">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="aurora-text font-sans font-extrabold text-4xl sm:text-7xl text-white tracking-tight uppercase drop-shadow-[0_2px_20px_rgba(0,240,255,0.15)]"
            >
              Charlie
              <br />
              Smith
            </motion.h1>

            {/* Typewriter text subtitle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-mono text-base sm:text-2xl text-cyber-emerald/90 flex items-center tracking-widest min-h-[40px]"
            >
              <span>{"// "}</span>
              <span className="ml-2 font-bold">{subText}</span>
              <span className="ml-1 w-2.5 h-6 bg-cyber-emerald animate-pulse inline-block" />
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-white/70 max-w-xl text-sm sm:text-base leading-relaxed"
          >
            Full-stack developer with 10+ years of experience designing, developing, and optimizing production web applications and AI-powered solutions. Specialized in JavaScript/TypeScript, React, and modern web frameworks, with extensive experience integrating OpenAI capabilities and building custom solutions on WordPress, Shopify, and diverse web platforms.
          </motion.p>

          {/* CTAs and Resume synthesis button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-3 rounded-xl bg-white text-zinc-950 font-sans font-semibold text-xs tracking-wider transition-all duration-300 hover:bg-zinc-200 hover:-translate-y-0.5 active:scale-[0.98] shadow-[0_4px_12px_rgba(255,255,255,0.15)] hover:shadow-[0_10px_28px_rgba(255,255,255,0.28)]"
            >
              VIEW PROJECTS
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-3 rounded-xl bg-transparent border border-zinc-800 hover:border-cyber-cyan/50 text-zinc-300 hover:text-white font-sans font-semibold text-xs tracking-wider transition-all duration-300 hover:bg-zinc-900 hover:-translate-y-0.5 active:scale-[0.98] hover:shadow-[0_10px_28px_-8px_rgba(0,240,255,0.4)]"
            >
              GET IN TOUCH
            </a>
            <button
              onClick={triggerResumeSynthesis}
              disabled={resumeSynthesizing}
              className="px-6 py-3 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-cyber-purple/50 text-zinc-300 hover:text-white font-sans font-semibold text-xs tracking-wider transition-all duration-300 hover:bg-zinc-800 hover:-translate-y-0.5 active:scale-[0.98] hover:shadow-[0_10px_28px_-8px_rgba(185,35,255,0.4)] flex items-center space-x-2 group"
            >
              <Download className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              <span>{resumeSynthesizing ? `SYNTHESIZING... ${synthesisProgress}%` : "DOWNLOAD RESUME"}</span>
            </button>
          </motion.div>

          {/* Social icons glow row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex items-center space-x-4 pt-4"
          >
            {[
              { icon: <GithubIcon className="w-4 h-4" />, url: "https://github.com/CharlieGitPlace", label: "Github" },
              { icon: <LinkedinIcon className="w-4 h-4" />, url: "https://www.linkedin.com/in/charliesmithdev/", label: "LinkedIn" },
              { icon: <TelegramIcon className="w-4 h-4" />, url: "https://www.telegram.com/@tele_viscra", label: "Telegram" },
              { icon: <WhatsAppIcon className="w-4 h-4" />, url: "https://whatsapp.com/charliesmith", label: "WhatsApp" },
              { icon: <DiscordIcon className="w-4 h-4" />, url: "https://discord.com/@viscra0101", label: "Discord" },
              { icon: <MailIcon className="w-4 h-4" />, url: "mailto:viscra0101@gmail.com", label: "Email" },
            ].map((soc, idx) => (
              <a
                key={idx}
                href={soc.url}
                target="_blank"
                rel="noreferrer"
                className="icon-pop group/soc relative w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-cyber-cyan hover:bg-zinc-900"
                aria-label={soc.label}
              >
                {soc.icon}
                {/* Hover tooltip label */}
                <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-zinc-800 bg-[#0d0d12]/95 px-2.5 py-1 font-mono text-[8px] uppercase tracking-widest text-zinc-300 opacity-0 translate-y-1 transition-all duration-200 group-hover/soc:opacity-100 group-hover/soc:translate-y-0 shadow-[0_4px_16px_rgba(0,0,0,0.5)]">
                  {soc.label}
                </span>
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right Hand: Interactive Hologram Profile Frame */}
        <div className="float-slow lg:col-span-5 flex justify-center items-center relative select-none">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onMouseMove={handleFrameTilt}
            onMouseLeave={resetFrameTilt}
            style={{
              rotateX: springTiltX,
              rotateY: springTiltY,
              transformPerspective: 900,
            }}
            className="conic-ring relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] rounded-3xl border border-zinc-800 bg-[#0d0d12]/75 backdrop-blur-md shadow-2xl group [transform-style:preserve-3d]"
          >
            {/* Profile Avatar Image */}
            <div className="absolute inset-0 p-4 z-10">
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-zinc-850 bg-zinc-950">
                <Image
                  src="/charlie_photo.png"
                  alt="Charlie Smith Avatar Hologram"
                  fill
                  priority
                  className="object-cover opacity-90 group-hover:scale-102 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-cyber-grid-pattern bg-[size:15px_15px] opacity-[0.02] z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent pointer-events-none z-10" />
              </div>
            </div>

            {/* Hologram targeting widgets decor */}
            <div className="absolute top-6 left-6 z-20 font-mono text-[8px] text-zinc-500 tracking-wider">
              <span>TARGET_SYSTEM: ON</span>
              <br />
              <span>LOCK: 99.4%</span>
            </div>
            <div className="absolute bottom-6 right-6 z-20 font-mono text-[8px] text-zinc-500 tracking-wider text-right">
              <span>SYS_SYNC: OK</span>
              <br />
              <span>FACIAL_ID: ARUN_T</span>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
