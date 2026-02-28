import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ===============================
   Premium Input Component
=================================*/
const InputField = ({ label, name, type = "text", textarea }) => {
  return (
    <div className="relative group">
      {textarea ? (
        <textarea
          name={name}
          required
          rows="5"
          placeholder=" "
          className="peer w-full bg-zinc-900/60 border border-zinc-800 rounded-xl px-5 pt-6 pb-3 text-white outline-none transition-all duration-300 focus:border-indigo-500 focus:bg-zinc-900 backdrop-blur-md"
        />
      ) : (
        <input
          type={type}
          name={name}
          required
          placeholder=" "
          className="peer w-full bg-zinc-900/60 border border-zinc-800 rounded-xl px-5 pt-6 pb-3 text-white outline-none transition-all duration-300 focus:border-indigo-500 focus:bg-zinc-900 backdrop-blur-md"
        />
      )}

      {/* Floating Label */}
      <label
        className="
        absolute left-5 top-4 text-zinc-500 text-sm transition-all
        peer-placeholder-shown:top-5
        peer-placeholder-shown:text-base
        peer-focus:top-3
        peer-focus:text-sm
        peer-focus:text-indigo-400
      "
      >
        {label}
      </label>

      {/* Glow */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-focus-within:opacity-100 transition duration-300 pointer-events-none">
        <div className="absolute inset-0 rounded-xl bg-indigo-500/10 blur-xl"></div>
      </div>
    </div>
  );
};

/* ===============================
   Contact Section
=================================*/
function Contact() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.target);

    const response = await fetch("https://formspree.io/f/mnjbgold", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setStatus("success");
      e.target.reset();

      setTimeout(() => setStatus("idle"), 4000);
    } else {
      setStatus("error");
    }
  };

  return (
    <section
      id="Contact"
      className="section border-t border-zinc-900 relative"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight">
          Let’s build something{" "}
          <span className="text-indigo-400">meaningful.</span>
        </h2>

        <p className="text-zinc-400 mt-6">
          Open to internships, collaborations and engineering opportunities.
        </p>
      </motion.div>

      {/* Form Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="
          max-w-2xl mx-auto
          bg-zinc-900/40
          backdrop-blur-xl
          border border-zinc-800
          rounded-2xl
          p-8 md:p-10
          shadow-2xl shadow-black/40
        "
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <InputField label="Your Name" name="name" />

          <InputField label="Your Email" name="email" type="email" />

          <InputField label="Your Message" name="message" textarea />

          {/* Button */}
          <button
            type="submit"
            disabled={status === "loading"}
            className="
              w-full py-4 rounded-xl font-semibold text-white
              bg-gradient-to-r from-indigo-500 to-purple-600
              hover:scale-[1.02]
              active:scale-[0.98]
              transition-all duration-300
              shadow-lg shadow-indigo-500/20
            "
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Status Messages */}
        <AnimatePresence>
          {status === "success" && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-green-400 text-center mt-6"
            >
              ✅ Message sent successfully!
            </motion.p>
          )}

          {status === "error" && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-red-400 text-center mt-6"
            >
              ❌ Something went wrong. Try again.
            </motion.p>
          )}
        </AnimatePresence>

        {/* Direct Contact */}
        <p className="text-center text-zinc-500 mt-10 text-sm">
          Prefer direct contact?
        </p>

        <p className="text-center text-indigo-400 mt-2">
          aravindbopparaju@gmail.com
        </p>
      </motion.div>
    </section>
  );
}

export default Contact;