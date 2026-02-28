import { motion } from "framer-motion";

const projects = [
  /* ================= ENGINEERING PROJECTS ================= */
  {
    category: "Engineering Systems",
    title: "HandsMen Threads",
    tagline: "Salesforce CRM Automation System",
    role: "Salesforce Developer",
    tech: ["Salesforce", "Flow Builder", "Automation", "Email Templates"],
    highlights: [
      "Designed loyalty program automation flows",
      "Implemented stock alert and scheduled flows",
      "Built dynamic email automation system",
      "Structured scalable CRM workflow architecture",
    ],
    impact: [
      "Automated customer engagement workflows",
      "Reduced manual business operations",
      "Designed scalable CRM automation system",
    ],
    github:
      "https://github.com/Aravindbopparaju/HandsMenThreadsProject",
  },

  {
    category: "Engineering Systems",
    title: "MERN E-Commerce Platform",
    tagline: "Full-Stack Scalable Web Application",
    role: "Full-Stack Developer",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    highlights: [
      "Built modular REST API architecture",
      "Implemented role-based authentication",
      "Designed optimized MongoDB schema",
      "Developed admin dashboard",
    ],
    impact: [
      "Production-ready architecture design",
      "Secure authentication system",
      "Scalable backend structure",
    ],
    github:
      "https://github.com/Aravindbopparaju/ecommerce",
  },

  /* ================= DATA & ANALYTICS PROJECT ================= */
  {
    category: "Data & Analytics",
    title: "Customer Review Sentiment Analyzer",
    tagline: "End-to-End NLP Sentiment Classification System",
    role: "Machine Learning Developer",
    tech: [
      "Python",
      "Scikit-learn",
      "TF-IDF",
      "Logistic Regression",
      "Streamlit",
      "NLP",
    ],
    highlights: [
      "Performed NLP preprocessing and text cleaning pipeline",
      "Implemented TF-IDF vectorization with unigrams & bigrams",
      "Trained Logistic Regression sentiment classifier",
      "Built interactive Streamlit prediction interface",
    ],
    impact: [
      "Achieved ~86% sentiment classification accuracy",
      "Handled Positive, Neutral, and Negative prediction classes",
      "Delivered deployable end-to-end ML workflow",
    ],
    github:
      "https://github.com/Aravindbopparaju/customer-review-sentiment-analyzer",
  },
];

function Projects() {
  return (
    <section id="Projects" className="section border-t border-zinc-900">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-extrabold tracking-tight mb-28"
      >
        Selected Work
      </motion.h2>

      {/* Render Categories */}
      {["Engineering Systems", "Data & Analytics"].map((category) => (
        <div key={category} className="mb-32">

          {/* Category Heading */}
          <h3 className="text-2xl text-zinc-400 mb-16 tracking-wide">
            {category}
          </h3>

          <div className="space-y-24">
            {projects
              .filter((project) => project.category === category)
              .map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  className="relative group"
                >
                  {/* Hover Glow */}
                  <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 blur-2xl transition duration-500"></div>

                  <div className="relative p-10 md:p-16 rounded-3xl bg-zinc-900/70 border border-zinc-800 backdrop-blur-xl shadow-xl">

                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:justify-between gap-6">
                      <div>
                        <h4 className="text-3xl md:text-4xl font-semibold text-white">
                          {project.title}
                        </h4>

                        <p className="mt-3 text-zinc-400 text-lg">
                          {project.tagline}
                        </p>
                      </div>

                      <span className="px-4 py-2 text-xs uppercase tracking-widest bg-zinc-800 border border-zinc-700 rounded-full text-zinc-300">
                        {project.role}
                      </span>
                    </div>

                    {/* Tech Stack */}
                    <div className="mt-10 flex flex-wrap gap-3">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 text-sm rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Content Grid */}
                    <div className="grid md:grid-cols-2 gap-12 mt-14">

                      {/* Highlights */}
                      <div>
                        <h5 className="text-white font-medium mb-4">
                          System Highlights
                        </h5>
                        <ul className="space-y-3 text-zinc-400">
                          {project.highlights.map((item, i) => (
                            <li key={i}>• {item}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Impact */}
                      <div>
                        <h5 className="text-white font-medium mb-4">
                          Impact & Results
                        </h5>

                        <div className="space-y-4">
                          {project.impact.map((item, i) => (
                            <div
                              key={i}
                              className="p-4 rounded-xl bg-zinc-800/60 border border-zinc-700"
                            >
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>

                    {/* View Code Button */}
                    <div className="mt-14">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition text-sm font-medium"
                      >
                        View Code
                      </a>
                    </div>

                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Projects;