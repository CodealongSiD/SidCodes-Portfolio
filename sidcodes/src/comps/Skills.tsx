import {
  Code,
  Paintbrush,
  FileCode,
  Type,
  Atom,
  Layout,
  Server,
  Zap,
  Database,
  HardDrive,
  GitBranch,
  Github,
  Terminal,
  Mail,
  Settings,
  Smartphone,
} from "lucide-react";

const skillItems = [
  {
    label: "Frontend",
    skills: [
      { name: "HTML5", icon: <FileCode className="w-4 h-4 mr-1" /> },
      { name: "CSS3", icon: <Paintbrush className="w-4 h-4 mr-1" /> },
      { name: "TypeScript", icon: <Type className="w-4 h-4 mr-1" /> },
      { name: "React", icon: <Atom className="w-4 h-4 mr-1" /> },
      { name: "Tailwind CSS", icon: <Layout className="w-4 h-4 mr-1" /> },
    ],
    icon: <Code className="w-10 h-10 text-purple-500" />,
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js", icon: <Server className="w-4 h-4 mr-1" /> },
      { name: "Express.js", icon: <Zap className="w-4 h-4 mr-1" /> },
      { name: "Postman", icon: <Mail className="w-4 h-4 mr-1" /> },
      { name: "REST APIs", icon: <Server className="w-4 h-4 mr-1" /> },
    ],
    icon: <Server className="w-10 h-10 text-emerald-500" />,
  },
  {
    label: "Database",
    skills: [
      { name: "MongoDB Atlas", icon: <Database className="w-4 h-4 mr-1" /> },
      { name: "Mongoose", icon: <HardDrive className="w-4 h-4 mr-1" /> },
    ],
    icon: <Database className="w-10 h-10 text-pink-500" />,
  },
  {
    label: "Tools",
    skills: [
      { name: "Vercel", icon: <GitBranch className="w-4 h-4 mr-1" /> },
      { name: "GitHub", icon: <Github className="w-4 h-4 mr-1" /> },
      { name: "VS Code", icon: <Terminal className="w-4 h-4 mr-1" /> },
      { name: "Render", icon: <Smartphone className="w-4 h-4 mr-1" /> },
    ],
    icon: <Settings className="w-10 h-10 text-yellow-500" />,
  },
];

const Skills = () => {
  return (
    <section id="Skills" className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
        🚀 Tech Stack, Visualized
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillItems.map((category, index) => (
          <div
            key={index}
            className="relative rounded-2xl p-6 bg-gradient-to-br from-neutral-800 to-neutral-900 text-white shadow-lg hover:shadow-2xl hover:rotate-1 transition-transform group overflow-hidden"
          >
            <div className="absolute opacity-10 text-9xl -top-6 -right-6 group-hover:opacity-20">
              {category.icon}
            </div>

            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2 inline-block">
                {category.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="flex items-center bg-neutral-700 px-2 py-1 rounded text-xs tracking-wide group-hover:bg-neutral-600 transition-all"
                  >
                    {skill.icon}
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
