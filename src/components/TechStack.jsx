import { motion } from "framer-motion";

const skills = [
  {
    label: "Engineering",
    big: "BUILD",
    items: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "Node.js",
      "Express",
      "MongoDB",
      "REST API Architecture",
      "JWT Authentication",
    ],
  },

  {
    label: "Data & AI",
    big: "ANALYZE",
    items: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "NLP Processing",
      "TF-IDF Vectorization",
      "Logistic Regression",
      "Data Visualization",
      "Model Evaluation",
    ],
  },

  {
    label: "Platform & Tools",
    big: "SHIP",
    items: [
      "Salesforce Automation",
      "Flow Builder",
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
      "Streamlit",
      "API Testing",
    ],
  },
];

function TechStack() {
  return (
    <section
      id="Tech"
      className="section border-t border-zinc-900 relative overflow-hidden"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-extrabold mb-32 tracking-tight"
      >
        Capabilities
      </motion.h2>

      <div className="space-y-40">

        {skills.map((group, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative grid md:grid-cols-2 gap-16 items-center group"
          >
            {/* BIG BACKGROUND WORD */}
            <motion.h3
              whileHover={{ scale: 1.03 }}
              className="
                text-[4rem]
                md:text-[7rem]
                lg:text-[8rem]
                font-extrabold
                text-white/5
                tracking-tight
                select-none
                leading-none
              "
            >
              {group.big}
            </motion.h3>

            {/* SKILL LIST */}
            <div>
              <p className="uppercase text-sm tracking-[0.25em] text-zinc-500 mb-10">
                {group.label}
              </p>

              <div className="grid sm:grid-cols-2 gap-y-6 gap-x-10">
                {group.items.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="
                      text-lg
                      md:text-xl
                      text-zinc-300
                      hover:text-white
                      transition
                      cursor-default
                      relative
                      before:content-['']
                      before:absolute
                      before:left-[-14px]
                      before:top-1/2
                      before:-translate-y-1/2
                      before:w-2
                      before:h-2
                      before:rounded-full
                      before:bg-indigo-500
                      before:opacity-60
                    "
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}

export default TechStack;