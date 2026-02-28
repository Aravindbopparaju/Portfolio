import { motion } from "framer-motion";

const experiences = [
  {
    role: "MERN Stack Intern",
    org: "AICTE – Edunet Foundation – EY GDS",
    period: "Mar 2025 – Apr 2025",
    description:
      "Built a scalable full-stack e-commerce platform with authentication, admin dashboard, REST APIs, and structured backend architecture.",
  },
  {
    role: "Salesforce Developer Intern",
    org: "SmartBridge – AICTE",
    period: "May 2025 – Jul 2025",
    description:
      "Designed CRM automation workflows, validation rules, and data-driven processes to improve operational efficiency.",
  },
];

function Experience() {
  return (
    <section
      id="Experience"
      className="min-h-screen relative border-t border-zinc-900 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-10 py-44 relative">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight mb-24"
        >
          Experience
        </motion.h2>

        {/* Vertical Line */}
        <div className="absolute left-1/2 top-44 bottom-20 w-[2px] bg-zinc-800 hidden md:block"></div>

        <div className="space-y-32">

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className={`relative md:w-1/2 ${
                index % 2 === 0
                  ? "md:pr-16 md:text-right"
                  : "md:pl-16 md:ml-auto"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute top-2 md:top-4 left-1/2 -translate-x-1/2 w-4 h-4 bg-indigo-500 rounded-full hidden md:block"></div>

              {/* Card */}
              <div className="p-8 rounded-2xl bg-zinc-900/70 border border-zinc-800 backdrop-blur-md shadow-xl">
                <p className="text-sm text-zinc-500">
                  {exp.period}
                </p>

                <h3 className="mt-4 text-xl font-semibold text-white">
                  {exp.role}
                </h3>

                <p className="text-zinc-400 mt-1">
                  {exp.org}
                </p>

                <p className="mt-6 text-zinc-400 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Experience;