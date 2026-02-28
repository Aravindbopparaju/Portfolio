import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin } from "lucide-react";

/* ===========================
   Magnetic Button Hook
=========================== */
function useMagnetic() {
  const ref = useRef(null);

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    ref.current.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  };

  const reset = () => {
    ref.current.style.transform = "translate(0px,0px)";
  };

  return { ref, handleMove, reset };
}

/* ===========================
   Hero Component
=========================== */
function Hero() {
  const sectionRef = useRef(null);

  /* Scroll Parallax */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);

  const resumeMagnet = useMagnetic();
  const workMagnet = useMagnetic();

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Ambient Background */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_30%_30%,rgba(99,102,241,0.18),transparent_40%),
              radial-gradient(circle_at_70%_60%,rgba(168,85,247,0.15),transparent_40%)]
          bg-[length:200%_200%]
        "
      />

      {/* Background Name */}
      <motion.div
        style={{ y }}
        className="
          absolute left-10 top-1/2 -translate-y-1/2
          text-[8rem] md:text-[12rem]
          font-extrabold text-white/5
          select-none pointer-events-none
        "
      >
        ARAVIND
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-10 w-full">
        <div className="grid md:grid-cols-2 items-center gap-20">

          {/* LEFT — PROFILE */}
          <div className="flex justify-center md:justify-start relative">
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full"></div>

              <img
                src="/profile.jpg"
                alt="Bopparaju Aravind"
                className="
                  relative w-80 h-80 md:w-96 md:h-96
                  object-cover rounded-full
                  border border-zinc-800 shadow-2xl
                "
              />
            </div>
          </div>

          {/* RIGHT — TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-[3.5rem] md:text-[5rem] lg:text-[6rem] font-extrabold leading-[0.95] tracking-tight">
              <span className="text-transparent stroke-text">
                Bopparaju
              </span>
              <br />
              <span className="text-white">Aravind</span>
            </h1>

            <p className="mt-8 text-lg text-zinc-400 max-w-md leading-relaxed">
              Software Engineer building scalable web applications and
              data-driven systems through full-stack engineering,
              automation, and analytics.
            </p>

            {/* ================= ACTION BUTTONS ================= */}
            <div className="mt-12 flex flex-wrap gap-6">

              {/* Resume */}
              <motion.a
                ref={resumeMagnet.ref}
                onMouseMove={resumeMagnet.handleMove}
                onMouseLeave={resumeMagnet.reset}
                href="/resume.pdf"
                download
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 200, damping: 12 }}
                className="
                  relative px-8 py-3 rounded-xl
                  bg-gradient-to-r from-indigo-500 to-purple-600
                  text-white font-medium
                  shadow-lg shadow-indigo-500/20
                  hover:shadow-indigo-500/40
                  transition-all duration-300
                "
              >
                Download Resume
              </motion.a>

              {/* Work */}
              <motion.a
                ref={workMagnet.ref}
                onMouseMove={workMagnet.handleMove}
                onMouseLeave={workMagnet.reset}
                href="#Projects"
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 200, damping: 12 }}
                className="
                  px-8 py-3 rounded-xl
                  border border-zinc-700
                  text-zinc-300
                  backdrop-blur-md
                  hover:border-indigo-500
                  hover:text-white
                  hover:bg-zinc-900/60
                  transition-all duration-300
                "
              >
                View Work
              </motion.a>

            </div>

            {/* ================= SOCIAL LINKS ================= */}
            <div className="mt-8 flex items-center gap-5">

              <a
                href="https://github.com/Aravindbopparaju"
                target="_blank"
                rel="noreferrer"
                className="
                  p-3 rounded-xl
                  bg-zinc-900/70
                  border border-zinc-800
                  hover:border-indigo-500
                  hover:-translate-y-[2px]
                  transition-all duration-300
                "
              >
                <Github size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/aravind-bopparaju-0b8633343/"
                target="_blank"
                rel="noreferrer"
                className="
                  p-3 rounded-xl
                  bg-zinc-900/70
                  border border-zinc-800
                  hover:border-indigo-500
                  hover:-translate-y-[2px]
                  transition-all duration-300
                "
              >
                <Linkedin size={20} />
              </a>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Hero;