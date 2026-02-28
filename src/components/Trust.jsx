import { motion } from "framer-motion";

const pillars = [
  {
    title: "Engineering Mindset",
    desc: "Focus on scalable architecture, clean code practices, and long-term maintainability rather than quick solutions.",
  },
  {
    title: "System Thinking",
    desc: "Design applications as connected systems — APIs, databases, automation flows, and user experience working together.",
  },
  {
    title: "Data-Driven Approach",
    desc: "Integrating analytics and machine learning concepts to build insight-driven applications and smarter workflows.",
  },
  {
    title: "Continuous Learning",
    desc: "Actively expanding into data analytics and modern engineering tools while strengthening full-stack foundations.",
  },
];

function Trust() {
  return (
    <section className="section border-t border-zinc-900">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-extrabold tracking-tight mb-24"
      >
        How I Work
      </motion.h2>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-10">
        {pillars.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="
              p-10 rounded-2xl
              bg-zinc-900/70
              border border-zinc-800
              backdrop-blur-xl
              hover:border-indigo-500/40
              transition
            "
          >
            <h3 className="text-xl font-semibold text-white">
              {item.title}
            </h3>

            <p className="mt-4 text-zinc-400 leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Trust;