import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4 md:px-12 lg:px-20 text-center">
      <div className="space-y-6">
        {/* Signature Line */}
        <h2 className="text-2xl font-semibold">
        Built with eyes always on the code... or the snacks!
        </h2>

        {/* Cat Eyes GIF */}
        <img
          src="/cateye.gif"
          alt="Cat Eyes Animation"
          className="w-20 h-auto mx-auto"
        />

        {/* Back to Top Button */}
        <motion.a
          href="#Uptop"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-sm text-white shadow-md transition-all"
        >
          <ArrowUp className="w-4 h-4" /> Back to Top
        </motion.a>

        {/* Copyright */}
        <p className="text-sm text-gray-400">
          Copyright © {new Date().getFullYear()} SidCodes. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
