import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import ProjectCard from '@/components/ProjectCard';
import SkillCard from '@/components/SkillCard';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  const skills = [
    {
      category: 'Frontend Development',
      skills: [
        { name: 'React', level: 5 },
        { name: 'TypeScript', level: 4 },
        { name: 'Next.js', level: 4 },
        { name: 'Tailwind CSS', level: 4 },
      ],
    },
    {
      category: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 4 },
        { name: 'Python', level: 4 },
        { name: 'SQL', level: 3 },
        { name: 'MongoDB', level: 3 },
      ],
    },
    {
      category: 'Tools & Others',
      skills: [
        { name: 'Git', level: 4 },
        { name: 'Docker', level: 3 },
        { name: 'AWS', level: 3 },
        { name: 'Linux', level: 4 },
      ],
    },
  ];

  const projects = [
    {
      title: 'Project 1',
      description: 'A brief description of your first project.',
      imageUrl: '/project1.jpg',
      technologies: ['React', 'TypeScript', 'Node.js'],
      projectUrl: '#',
      githubUrl: 'https://github.com/yourusername/project1',
    },
    {
      title: 'Project 2',
      description: 'A brief description of your second project.',
      imageUrl: '/project2.jpg',
      technologies: ['Next.js', 'Tailwind CSS', 'MongoDB'],
      projectUrl: '#',
      githubUrl: 'https://github.com/yourusername/project2',
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-gray-900">
        {/* Hero Section */}
        <section id="hero" className="h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm" />
          </div>
          <div className="container mx-auto px-4 z-10 text-center">
            <div className="mb-8">
              <Image
                src="/your-photo.jpg"
                alt="Your Name"
                width={150}
                height={150}
                className="rounded-full mx-auto border-4 border-white shadow-lg"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Your Name
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              Full Stack Developer | Designer | Creator
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                href="#contact"
                className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
              >
                Contact Me
              </Link>
              <Link
                href="#projects"
                className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                View Projects
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              About Me
            </h2>
            <div className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 space-y-4">
              <p>
                Hello! I'm [Your Name], a passionate Full Stack Developer based in [Your Location].
                I love creating beautiful and functional web applications that solve real-world problems.
              </p>
              <p>
                With [X] years of experience in web development, I specialize in building
                responsive and user-friendly applications using modern technologies.
              </p>
              <p>
                When I'm not coding, you can find me [Your Interests/Hobbies].
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {skills.map((skillGroup) => (
                <SkillCard
                  key={skillGroup.category}
                  category={skillGroup.category}
                  skills={skillGroup.skills}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              Contact Me
            </h2>
            <ContactForm />
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 text-center text-gray-600 dark:text-gray-400">
          <div className="container mx-auto px-4">
            <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </>
  );
}
