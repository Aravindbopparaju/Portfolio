import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function About() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      ref={ref}
      id="About"
      className="min-h-screen flex items-center relative overflow-hidden border-t border-zinc-900"
    >
      {/* Animated Gradient Background */}
      <motion.div
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-r from-indigo-900/20 via-purple-900/20 to-indigo-900/20 bg-[length:200%_200%]"
      />

      {/* Glow Shape */}
      <div className="absolute -right-40 top-0 w-[600px] h-[600px] bg-indigo-500/10 rotate-45 blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-10 w-full">
        <div className="grid md:grid-cols-2 gap-24 items-center">

          {/* LEFT SIDE */}
          <motion.div style={{ y }}>

            {/* Role Badge */}
            <span className="px-4 py-1 text-xs tracking-widest uppercase bg-zinc-900 border border-zinc-800 rounded-full text-zinc-400">
              Software Engineer · Full Stack
            </span>

            <h2 className="mt-6 text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
              Engineering systems
              <br />
              powered by data.
            </h2>

            <p className="mt-8 text-xl text-zinc-300 max-w-xl leading-relaxed">
              I design and build scalable full-stack applications while
              integrating data analytics to create intelligent,
              insight-driven systems. My work focuses on clean architecture,
              automation workflows, and performance-oriented engineering.
            </p>

            <p className="mt-6 text-zinc-400 max-w-xl leading-relaxed">
              Computer Science undergraduate graduating in 2026, with hands-on
              experience in MERN stack development, Salesforce automation,
              and growing expertise in data analytics and visualization.
            </p>

          </motion.div>

          {/* RIGHT SIDE — PROFILE CARDS */}
          <div className="relative space-y-10">

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-2xl bg-zinc-900/70 border border-zinc-800 backdrop-blur-md shadow-xl"
            >
              <p className="text-xs uppercase tracking-widest text-zinc-500">
                Education
              </p>
              <p className="mt-3 text-lg text-white">
                B.Tech in Computer Science (2026)
              </p>
            </motion.div>

            {/* Core Strength */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-2xl bg-zinc-900/70 border border-zinc-800 backdrop-blur-md shadow-xl"
            >
              <p className="text-xs uppercase tracking-widest text-zinc-500">
                Core Strengths
              </p>
              <p className="mt-3 text-lg text-white">
                Full-Stack Development · API Design · Automation Systems
              </p>
            </motion.div>

            {/* Learning Direction */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="p-8 rounded-2xl bg-zinc-900/70 border border-zinc-800 backdrop-blur-md shadow-xl"
            >
              <p className="text-xs uppercase tracking-widest text-zinc-500">
                Expanding Into
              </p>
              <p className="mt-3 text-lg text-white">
                Data Analytics · Visualization · Insight-Driven Applications
              </p>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="p-8 rounded-2xl bg-zinc-900/70 border border-zinc-800 backdrop-blur-md shadow-xl"
            >
              <p className="text-xs uppercase tracking-widest text-zinc-500">
                Location
              </p>
              <p className="mt-3 text-lg text-white">
                Telangana, India
              </p>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;