import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [active, setActive] = useState("About");
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "About", link: "#About" },
    { name: "Experience", link: "#Experience" },
    { name: "Projects", link: "#Projects" },
    { name: "Tech", link: "#TechStack" },
    { name: "Contact", link: "#Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      links.forEach((item) => {
        const section = document.querySelector(item.link);
        if (section) {
          if (
            scrollPosition >= section.offsetTop &&
            scrollPosition < section.offsetTop + section.offsetHeight
          ) {
            setActive(item.name);
          }
        }
      });

      if (window.scrollY > lastScroll && window.scrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: hidden ? -100 : 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="fixed top-8 inset-x-0 z-50 flex justify-center px-6"
      >
        <div className="relative w-full max-w-5xl">
          <div className="flex items-center justify-between px-8 py-4 rounded-full bg-black/60 backdrop-blur-2xl border border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.5)]">

            {/* Logo */}
            <h1 className="text-xs tracking-[0.3em] text-zinc-300 font-medium">
              BOPPARAJU ARAVIND
            </h1>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-12 text-sm font-medium">
              {links.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className={`relative transition duration-300 ${
                    active === item.name
                      ? "text-white"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden flex flex-col gap-1"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span
                className={`h-0.5 w-6 bg-white transition ${
                  menuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`h-0.5 w-6 bg-white transition ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-6 bg-white transition ${
                  menuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-28 inset-x-6 z-40 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/10 p-6 flex flex-col gap-6 text-center md:hidden"
          >
            {links.map((item, index) => (
              <a
                key={index}
                href={item.link}
                onClick={() => setMenuOpen(false)}
                className="text-zinc-300 hover:text-white text-lg transition"
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;