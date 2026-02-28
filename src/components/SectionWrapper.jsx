import { motion } from "framer-motion";

function SectionWrapper({ children }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen"
    >
      {children}
    </motion.section>
  );
}

export default SectionWrapper;