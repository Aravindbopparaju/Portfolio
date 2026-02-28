import { motion } from "framer-motion";
import { lazy, Suspense } from "react";

import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import PageWrapper from "./components/PageWrapper";
import Trust from "./components/Trust";

// Lazy loaded sections
const Projects = lazy(() => import("./components/Projects"));
const TechStack = lazy(() => import("./components/TechStack"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  return (
    <>
      {/* Scroll Progress */}
      <ScrollProgress />

      {/* Page Fade In */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Navbar />
        <Hero />
        <About />
        <Experience />

        {/* Lazy Loaded Sections */}
        <Suspense
          fallback={
            <div className="text-center py-40 text-zinc-500">
              Loading...
            </div>
          }
        >
          <Projects />
          <Trust />
          <TechStack />
          <Contact />
        </Suspense>

        <Footer />
        <PageWrapper />
      </motion.div>
    </>
  );
}

export default App;