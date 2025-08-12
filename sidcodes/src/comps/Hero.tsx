
const Hero = () => {
  return (
    <>
      <section
        id="Hero"
        className="min-h-[90vh] flex flex-col justify-center items-center text-center px-4 py-12 max-w-6xl mx-auto"
      >
        {/* Background Blobs */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Blob 1 */}
          <div className="absolute top-[20%] right-[10%] w-40 h-40 sm:w-52 sm:h-52 bg-pink-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20" />

          {/* Blob 2 */}
          <div className="absolute bottom-[10%] left-[30%] w-40 h-40 sm:w-52 sm:h-52 bg-yellow-400 rounded-full mix-blend-multiply filter blur-2xl opacity-20" />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight tracking-tight bg-gradient-to-b from-lime-400 to-green-500 bg-clip-text text-transparent ">
          HI! I’m Sid. <br className="hidden sm:block" />I build MERN stack web apps.
        </h1>

        <p className="text-lg text-white/70 max-w-xl mb-6">
          I turn rough ideas into full-stack apps and fix bugs before most people have breakfast.
          Clean code. Clean UI. Shipped fast.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#Projects"
            className="px-6 py-2 rounded-md bg-lime-400 text-black font-semibold hover:bg-lime-300 transition"
          >
            Check Out My Work
          </a>
          <a
            href="#Connect"
            className="px-6 py-2 rounded-md border border-white text-white hover:bg-white hover:text-black transition"
          >
            Let’s Talk
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
