function Footer() {
  return (
    <footer className="border-t border-zinc-900 mt-24">
      <div className="max-w-7xl mx-auto px-10 py-10">

        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          {/* Name */}
          <h3 className="text-sm tracking-widest text-zinc-400">
            BOPPARAJU ARAVIND
          </h3>

          {/* Email */}
          <a
            href="mailto:yourmail@gmail.com"
            className="text-zinc-500 hover:text-white transition"
          >
            aravindbopparaju@gmail.com
          </a>

        </div>

        {/* Bottom */}
        <div className="mt-8 text-center text-xs text-zinc-600">
          © {new Date().getFullYear()} Bopparaju Aravind. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;