import { Code, Rocket, Zap } from "lucide-react";

const Bento = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-2 gap-4 p-6 max-w-screen-xl mx-auto">
      {/* React Expertise */}
      <div className="bg-gradient-to-b from-lime-300 to-lime-500 rounded-tl-[2rem] rounded-br-[2rem] p-6 md:col-span-2 md:row-span-1 text-black transition-transform duration-300 hover:scale-105 hover:shadow-lg">
        <div className="flex items-center gap-2 mb-2">
          <Code className="w-6 h-6" />
          <h2 className="text-xl font-bold">React at the Core</h2>
        </div>
        <p className="text-sm leading-relaxed">
          I craft responsive UIs using React + Tailwind that adapt beautifully—
          whether it’s a foldable phone or your fridge screen.
          <br />
          Fast, accessible, clean.
        </p>
      </div>

      {/* Arrow Card */}
      <div className="bg-gray-200 flex items-center justify-center rounded-xl md:col-span-1 md:row-span-1 overflow-hidden hover:scale-105 transition-transform">
        <img
          src="/darrow.gif"
          alt="Down Arrow GIF"
          className="w-full h-full object-contain rounded-xl"
        />
      </div>

      {/* Debug & Deploy */}
      <div className="bg-gradient-to-t from-zinc-800 to-black text-white rounded-tr-[2rem] rounded-bl-[2rem] p-6 md:col-span-3 md:row-span-1 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        <div className="flex items-center gap-2 mb-2">
          <Rocket className="w-6 h-6 text-lime-400" />
          <h2 className="text-xl font-bold">What I Bring to the Table</h2>
        </div>
        <p className="text-sm leading-relaxed mb-4">
          I write clean code, squash bugs early, and push to production with
          confidence.
          <br />
          Here’s a peek at my background, skills, and track record.
        </p>
        <a
          href="https://drive.google.com/file/d/1HL0XaRn2mYELTDzswXf4kuxktOA1yLUA/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="border border-white px-4 py-2 rounded-full text-sm hover:bg-white hover:text-black transition">
            View Resume
          </button>
        </a>
      </div>

      {/* Dev GIF */}
      <div className="md:col-span-2 md:row-span-1 overflow-hidden rounded-xl hover:scale-105 transition-transform">
        <img
          src="/dev.gif"
          alt="Development GIF"
          className="rounded-xl w-full h-full object-cover"
        />
      </div>

      {/* From Idea to App */}
      <div className="bg-gradient-to-b from-zinc-800 to-black text-white p-6 rounded-xl md:col-span-3 md:row-span-1 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        <div className="flex items-center gap-2 mb-2">
          <Zap className="w-6 h-6 text-yellow-400" />
          <h2 className="text-2xl font-bold">Build Something Together</h2>
        </div>
        <p className="text-sm leading-relaxed mb-4">
          Got an idea that needs a dev?
          <br />
          I’ll bring it to life — clean UI, fast backend, deployed and ready.
          <br />
          Let’s chat.
        </p>
      </div>

      {/* Icon Card */}
      <div className="bg-gradient-to-b from-lime-300 to-lime-500 rounded-br-[2rem] rounded-tl-[2rem] flex items-center justify-center md:col-span-1 md:row-span-1 hover:scale-105 transition-transform">
        <Code className="w-10 h-10 text-black" />
      </div>
    </section>
  );
};

export default Bento;
