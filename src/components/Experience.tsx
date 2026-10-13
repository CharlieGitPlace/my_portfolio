"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase, Cpu, LineChart, Shield } from "lucide-react";

interface ExperienceItem {
  id: number;
  company: string;
  role: string;
  location: string;
  duration: string;
  points: string[];
  icon: React.ReactNode;
}

const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 1,
    company: "GOODISET",
    role: "Senior Full-Stack Developer",
    location: "New YORK, USA",
    duration: "May 2023 – Apr 2025",
    points: [
      "Integrated Alin AI into BNP Paribas Cardif’s platform using OpenAI API for insurance Q&A, request classification, and WhatsApp support escalation.",
      "Developed a React and Node.js application for over 50,000 users and reduced page loading times by 35%.",
      "Participated in code reviews, testing, deployments, and technical discussions. Enhanced existing application functionality through code optimization and technical improvements",
    ],
    icon: <Cpu className="w-4 h-4 text-blue-400" />,
  },
  {
    id: 2,
    company: "Cardinal Peak",
    role: "Full-Stack Developer",
    location: "Lafayette, Colorado",
    duration: "Jul 2021 – May 2023",
    points: [
      "Developed frontend components, backend services, and database integrations.",
      "Worked on application design, feature implementation, testing, and troubleshooting.",
      "Collaborated with engineering teams to improve software quality and maintainability.",
      "Supported existing applications by fixing issues and implementing new features.",
    ],
    icon: <LineChart className="w-4 h-4 text-blue-400" />,
  },
  {
    id: 3,
    company: "Chaunceyallpro",
    role: "Junior Developer",
    location: "Houston, Texas",
    duration: "Oct 2019 – Jul 2021",
    points: [
      "Assisted with development of web, desktop, and mobile application projects.",
      "Built frontend features and supported backend development tasks.",
      "Worked with senior developers on debugging, testing, and application improvements.",
      "Helped maintain existing software systems and resolve technical issues.",
    ],
    icon: <Cpu className="w-4 h-4 text-cyan-400" />,
  },
  {
    id: 4,
    company: "LassMichDasMachen",
    role: "Full-Stack Developer",
    location: "Hechingen, Germany",
    duration: "Apr 2016 – Oct 2019",
    points: [
      "Developed a WordPress-based hotel management CMS using custom PHP/JavaScript modules for rooms, availability, rates, offers, restaurant, spa, and tourism content.",
      "Built a custom booking engine with REST APIs, API authentication, availability checks, reservations, cancellations, and booking workflow management.",
      "Integrated multiple payment gateways, multilingual content, SEO plugins, XML sitemaps, structured data, and localized SEO.",
      "Implemented HTTPS, reCAPTCHA, role-based access control, input validation, and secure payment/API workflows.",
    ],
    icon: <Cpu className="w-4 h-4 text-cyan-400" />,
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative min-h-screen py-24 flex items-center justify-center overflow-hidden border-t border-zinc-900 bg-[#07070a]"
    >
      {/* Volumetric Neon Ambient Lights */}
      <div className="absolute top-[30%] left-[-10%] w-[450px] h-[450px] bg-blue-950/5 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[450px] h-[450px] bg-indigo-950/5 rounded-full filter blur-[150px] pointer-events-none" />

      {/* Grid decors */}
      <div className="absolute inset-0 bg-dot-matrix opacity-10 pointer-events-none" />

      <div className="w-[92%] max-w-6xl mx-auto flex flex-col space-y-16 z-10">
        {/* Header */}
        <div className="flex flex-col space-y-3 text-center items-center font-sans">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center space-x-1.5 text-[9px] text-zinc-400 border border-zinc-800 bg-zinc-900/40 px-3.5 py-1 rounded-full tracking-widest font-mono uppercase"
          >
            <span>EXPERIENCE</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="aurora-text heading-underline font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight"
          >
            Career & Research
          </motion.h2>
          <p className="text-zinc-400 text-xs sm:text-sm font-sans max-w-md mx-auto leading-relaxed">
            A chronological timeline summarizing development experience and full-stack software achievements in chronological order.
          </p>
        </div>

        {/* Central Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto w-full">
          {/* Vertical central tube wire line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] -translate-x-1/2 bg-zinc-800 opacity-60" />

          {/* Running pulse light animation inside timeline vertical wire */}
          <motion.div
            className="absolute left-4 md:left-1/2 w-[1px] h-32 -translate-x-1/2 bg-gradient-to-b from-transparent via-blue-500 to-transparent"
            animate={{
              top: ["0%", "100%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 8,
              ease: "linear",
            }}
          />

          <div className="space-y-12 w-full font-sans">
            {EXPERIENCE_DATA.map((exp, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div key={exp.id} className="relative flex flex-col md:flex-row items-stretch w-full">
                  {/* central timeline node indicator dot */}
                  <div className="absolute left-4 md:left-1/2 top-6 w-8 h-8 rounded-full border border-zinc-800 -translate-x-1/2 z-10 flex items-center justify-center bg-[#0d0d12] transition-all duration-300 pointer-events-none select-none">
                    <div className="w-full h-full flex items-center justify-center text-zinc-400 bg-zinc-900/60 rounded-full">
                      <Briefcase className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Left Hand Card (Renders on even index on desktop, hidden placeholder on odd) */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 md:pr-12 ${isEven ? "md:text-right" : "md:order-2 md:pl-12 md:text-left"}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                      className="sheen card-glow p-6 rounded-2xl border border-zinc-800/80 bg-[#0d0d12]/75 backdrop-blur-md group hover:scale-[1.01] hover:border-zinc-700/80 transition-all duration-350 shadow-[0_4px_24px_rgba(0,0,0,0.4)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.6)]"
                    >
                      {/* Meta header info */}
                      <div className={`flex flex-col mb-4 ${isEven ? "md:items-end" : "md:items-start"}`}>
                        <span className="font-mono text-[9px] text-zinc-400 tracking-wider border border-zinc-800 bg-zinc-900/80 px-2.5 py-0.5 rounded-full self-start md:self-auto uppercase">
                          {exp.role}
                        </span>
                        <h3 className="font-semibold text-lg text-white mt-2 group-hover:text-blue-400 transition-colors tracking-wide">
                          {exp.company}
                        </h3>
                        
                        {/* Duration and location row */}
                        <div className={`flex flex-wrap gap-3 font-mono text-[10px] text-zinc-500 mt-1.5 ${isEven ? "md:justify-end" : "md:justify-start"}`}>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3 text-zinc-650" />
                            {exp.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-zinc-650" />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      {/* Points list */}
                      <ul className={`space-y-2.5 text-xs text-zinc-400 leading-relaxed ${isEven ? "md:text-right" : "md:text-left"}`}>
                        {exp.points.map((pt, pIdx) => (
                          <li key={pIdx} className={`flex items-start gap-2.5 ${isEven ? "md:flex-row-reverse" : "flex-row"}`}>
                            <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 flex-shrink-0 mt-1.5" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                  {/* Empty order block for layout balancing on desktop */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
