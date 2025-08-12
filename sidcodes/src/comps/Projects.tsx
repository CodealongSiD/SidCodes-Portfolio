import { useState } from "react";
import { motion } from "framer-motion";

const projectDetails = [
  {
    id: 1,
    title: "Digital Book Store",
    sub: "Dlightful Saga",
    stack: "MERN, Tailwind, Razorpay UPI",
    description:
      "Built a full-stack e-commerce site to sell my original fiction books. Features include custom login, UPI-based payments, and a user profile for tracking orders.",
    bgColor: "bg-gradient-to-b from-fuchsia-600 to-violet-600",
    github: "https://github.com/CodealongSiD/dlightfulSaga",
    liveDemo: "https://dlightful-saga.vercel.app/",
    previewVideo: "https://res.cloudinary.com/dwuzhzgdq/video/upload/v1754994956/DlightfulSaga_Prj_c4rueq.mp4",
    thumbnail: "https://res.cloudinary.com/dwuzhzgdq/image/upload/v1754997824/DlightfulSaga_Preview_h63rro.png",
  },
  {
    id: 2,
    title: "Weather App",
    sub: "Minimal Forecast UI",
    stack: "Vanilla JS, OpenWeatherMap API",
    description:
      "Created a responsive app using a weather API to display real-time temperature and conditions. Designed for quick, practical decisions like whether to carry an umbrella or a sweater.",
    bgColor: "bg-gradient-to-b from-sky-500 to-blue-600",
    github: "https://github.com/CodealongSiD/atmos",
    liveDemo: "https://atmos-gold.vercel.app/",
    previewVideo: "https://res.cloudinary.com/dwuzhzgdq/video/upload/v1754994940/Atmos_Prj_Preview_n7ycmz.mp4",
    thumbnail: "https://res.cloudinary.com/dwuzhzgdq/image/upload/v1754997826/Atoms_Header_redzgp.png",
  },
  {
    id: 3,
    title: "SaaS Landing Page",
    sub: "Deliver Performance",
    stack: "React, Context API, Tailwind",
    description:
      "A quick SaaS application with ads tracking and clean UI. Great for testing conversion rates with an intuitive interface.",
    bgColor: "bg-gradient-to-b from-yellow-400 to-orange-400",
    github: "https://github.com/CodealongSiD",
    liveDemo: "/saas",
    previewVideo: "https://res.cloudinary.com/dwuzhzgdq/video/upload/v1754997005/comingsoon_nmuowb.mp4",
    thumbnail: "https://res.cloudinary.com/dwuzhzgdq/image/upload/v1754997825/Cmingsoon_sze2zu.png",
  },
  {
    id: 4,
    title: "3D Product Page",
    sub: "Animated Product Showcase",
    stack: "Three.js, GSAP, React",
    description:
      "An immersive 3D animation landing page for a modern product experience. Built using Three.js and GSAP, offering interactive animations and scroll-based transitions.",
    bgColor: "bg-gradient-to-b from-lime-400 to-green-500",
    github: "https://github.com/CodealongSiD",
    liveDemo: "/3d-product-page",
    previewVideo: "https://res.cloudinary.com/dwuzhzgdq/video/upload/v1754997005/WorkInProgress_xyfgu0.mp4",
    thumbnail: "https://res.cloudinary.com/dwuzhzgdq/image/upload/v1754997826/wrkinprg_fjtu4v.png",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<
    null | (typeof projectDetails)[number]
  >(null);

  return (
    <section
      id="Projects"
      className="bg-gradient-to-b from-black via-zinc-900 to-black text-white py-12 px-6 lg:px-0 xl:py-16"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Static Header Section */}
        <div className="max-w-xl mb-8 mx-auto md:mx-0">
          <p className="text-sm text-gray-400">Explore Projects</p>
          <h2 className="text-3xl font-bold mb-2">\ Project Showcase</h2>
          <h3 className="text-xl text-lime-400 font-bold mb-4">
            Crafted with MERN, APIs, and Deployed
          </h3>
          <p className="text-gray-300">
            A collection of my creative and practical development work — from
            full-stack applications to animated landing pages.
          </p>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4 justify-items-center">
          {projectDetails.map((proj) => (
            <div
              key={proj.id}
              onClick={() => setSelectedProject(proj)}
              className={`w-[85%] md:w-[220px] h-[380px] flex flex-col justify-between rounded-xl text-white p-4 cursor-pointer ${proj.bgColor} shadow-2xl hover:scale-105 transition-all duration-300`}
            >
              <img
                src={proj.thumbnail}
                alt={`${proj.title} thumbnail`}
                className="h-[220px] w-full object-cover rounded-md mb-4"
              />
              <div>
                <h4 className="text-lg font-bold leading-tight mb-1">
                  {proj.title}
                </h4>
                <p className="text-sm text-gray-100">{proj.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Popup Modal */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/50"
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              transition={{ duration: 0.3 }}
              className="relative bg-zinc-900 text-white rounded-xl p-6 max-w-4xl w-full shadow-xl border border-gray-700 mt-10"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-white text-xl"
              >
                ✕
              </button>
              <div className="grid md:grid-cols-2 gap-6 items-start mt-6">
                {/* Preview Video */} {/* CHANGED */}
                <div className="h-[250px] bg-gray-900 rounded-lg flex items-center justify-center overflow-hidden">
                  <video
                    src={selectedProject.previewVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                {/* Info Section */}
                <div>
                  <h2 className="text-3xl font-bold mb-2">
                    {selectedProject.title}
                  </h2>
                  <p className="text-sm text-gray-400 mb-2">
                    <span className="font-semibold">Tech Stack:</span>{" "}
                    {selectedProject.stack}
                  </p>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {selectedProject.description}
                  </p>
                  <div className="flex space-x-4">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-md bg-lime-500 text-black font-semibold hover:bg-lime-600"
                    >
                      GitHub
                    </a>
                    <a
                      href={selectedProject.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-md border border-white hover:bg-white hover:text-black"
                    >
                      Live Demo
                    </a>
                    <a
                      href={selectedProject.previewVideo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-md border border-lime-500 text-lime-500 hover:bg-lime-500 hover:text-black"
                    >
                      Preview Video
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;