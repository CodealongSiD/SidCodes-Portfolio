import { Mail, Github, Linkedin, Phone } from "lucide-react";
import { motion } from "framer-motion";

// lucide-react is an icon library for React using Lucide icons (open-source, clean SVGs)
// To use it, run: npm install lucide-react

const contacts = [
  {
    title: "Email",
    icon: Mail,
    value: "iamsiddharth1723@gmail.com",
    href: "mailto:iamsiddharth1723@gmail.com",
    bg: "bg-gradient-to-br from-purple-500 to-indigo-500",
  },
  {
    title: "GitHub",
    icon: Github,
    value: "github.com/CodealongSiD",
    href: "https://github.com/CodealongSiD",
    bg: "bg-gradient-to-br from-gray-800 to-gray-600",
  },
  {
    title: "LinkedIn",
    icon: Linkedin,
    value: "linkedin.com/in/siddharth1701/",
    href: "https://linkedin.com/in/siddharth1701/",
    bg: "bg-gradient-to-br from-blue-600 to-blue-800",
  },
  {
    title: "Phone",
    icon: Phone,
    value: "+91 96869 32190",
    href: "tel:+919686932190",
    bg: "bg-gradient-to-br from-green-500 to-emerald-700",
  },
];

const Contact = () => {
  return (
    <section id="Connect" className="py-16 px-4 md:px-12 lg:px-20 bg-gradient-to-b from-zinc-900 to-black text-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">Let's Connect</h2>
        <p className="text-gray-400 text-md mb-4">Feel free to reach out or explore my work</p>
        <motion.img
          src="/contact me fr.gif"
          alt="funny contact gif"
          className="mx-auto w-28 h-28 rounded-lg shadow-lg"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
        />
        <p className="text-md text-white/50 mt-2 italic">Don’t make me come find you — I get lost even with GPS. 😭</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {contacts.map((item, idx) => (
          <motion.a
            key={idx}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className={`rounded-xl p-6 text-white shadow-xl hover:scale-105 transition-transform duration-300 ${item.bg}`}
          >
            <div className="flex items-center space-x-4">
              <item.icon className="w-8 h-8" />
              <div>
                <p className="text-lg font-semibold">{item.title}</p>
                <p className="text-sm text-white/90 break-all">{item.value}</p>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Contact;