import Link from "next/link";

const Footer = () => {
  return (
    <footer className="pt-24 pb-12 border-t border-white/5 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                growth grade
              </span>
            </Link>
            <p className="text-white/40 max-w-sm leading-relaxed">
              Your dedicated growth architects. Building systems that drive
              predictable revenue for modern startups.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:bg-primary/10 hover:text-primary transition-all"
              >
                {/* <Twitter className="w-5 h-5" /> */}t
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:bg-primary/10 hover:text-primary transition-all"
              >
                {/* <Linkedin className="w-5 h-5" /> */}
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:bg-primary/10 hover:text-primary transition-all"
              >
                {/* <Github className="w-5 h-5" /> */}
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-bold mb-6 text-white">Company</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="#"
                  className="text-white/40 hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/40 hover:text-primary transition-colors"
                >
                  Success Stories
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/40 hover:text-primary transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/40 hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-white">Services</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="#"
                  className="text-white/40 hover:text-primary transition-colors"
                >
                  Fractional Partner
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/40 hover:text-primary transition-colors"
                >
                  Execution Partner
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/40 hover:text-primary transition-colors"
                >
                  Full Suite Partner
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-sm">
            © 2024 Growth Grade. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link
              href="#"
              className="text-white/20 hover:text-white transition-colors text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-white/20 hover:text-white transition-colors text-sm"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
