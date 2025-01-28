"use client";

import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { ProjectCard } from "@/components/project-card";
import { Section } from "@/components/section";
import { motion } from "framer-motion";

export default function Home() {
  useSmoothScroll();

  return (
    <div className="bg-black text-white min-h-screen">
      <header className="fixed top-0 left-0 w-full z-50 border-gray-900 h-20 overflow-hidden">
        <nav className="container mx-auto py-6 h-[200%] backdrop-blur-lg mask-image-gradient">
          <ul className="flex justify-end space-x-8">
            <li>
              <a
                href="#about"
                className="hover:text-neutral-400 transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-neutral-400 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Section id="home" className="relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-7xl font-bold mb-4">Maciej Szczęsny</h1>
            <p className="text-2xl text-neutral-400">Software Developer</p>
          </motion.div>
          <motion.div
            className="absolute -top-1/2 -right-1/4 w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-10 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </Section>

        <Section id="about">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4">About Me</h2>
              <p className="text-neutral-400 mb-4">
                I'm a passionate developer with a keen eye for design and a
                passion for challenges. While my primary focus is in web
                technologies, I have developed a strong liking for Rust and I'm
                not afraid to try new tech out.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                "JavaScript",
                "TypeScript",
                "React",
                "Node.js",
                "Next.js",
                "Rust",
              ].map((skill) => (
                <div
                  key={skill}
                  className="bg-neutral-900 p-4 rounded-lg text-center"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section id="contact" className="text-center">
          <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
          <p className="text-neutral-400 mb-8">
            Interested in collaborating or just want to say hi? Feel free to
            reach out!
          </p>
          <a
            href="mailto:mszczesny@macez.dev"
            className="inline-block bg-white text-black px-8 py-3 rounded-full hover:bg-neutral-200 transition-colors"
          >
            Say Hello
          </a>
          <div className="mt-12 flex justify-center space-x-6">
            <a
              href="https://github.com/maciejSzcz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/maciej-szcz%C4%99sny-a14b55134/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </Section>
      </main>

      <footer className="py-8">
        <div className="container mx-auto text-center text-neutral-400">
          <p>&copy; 2025 Maciej Szczęsny. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
