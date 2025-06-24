'use client'
import Image from "next/image";
import React, { useState, useEffect } from 'react';
import Github from 'lucide-react/dist/esm/icons/github';
import Linkedin from 'lucide-react/dist/esm/icons/linkedin';
import Mail from 'lucide-react/dist/esm/icons/mail';
import ExternalLink from 'lucide-react/dist/esm/icons/external-link';
import Code from 'lucide-react/dist/esm/icons/code';
import Database from 'lucide-react/dist/esm/icons/database';
import Globe from 'lucide-react/dist/esm/icons/globe';
import Smartphone from 'lucide-react/dist/esm/icons/smartphone';
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right';
import Download from 'lucide-react/dist/esm/icons/download';
import MapPin from 'lucide-react/dist/esm/icons/map-pin';
import Calendar from 'lucide-react/dist/esm/icons/calendar';
import User from 'lucide-react/dist/esm/icons/user';
import Briefcase from 'lucide-react/dist/esm/icons/briefcase';
import GraduationCap from 'lucide-react/dist/esm/icons/graduation-cap';
import Award from 'lucide-react/dist/esm/icons/award';
import ChevronDown from 'lucide-react/dist/esm/icons/chevron-down';
import Link from "next/link";


export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects = [
    {
      title: "School Bazzar Application",
      description: "Full-stack Flutter application with admin dashboard",
      tech: ["Flutter", "Firebase Firestore", "Google Play Store"],
      image: "🛒",
      github: "#",
      live: "#",
      category: "Full Stack"
    },
    {
      title: "Swag Redeem Application",
      description: "Redeeming swag and recording participant attendance at each workshop session to earn points.",
      tech: ["Flutter", "Firebase Firestore", "Firebase Cloud Storage"],
      image: "🎟",
      github: "#",
      live: "#",
      category: "Full Stack"
    },
    {
      title: "SETON",
      description: "An Android application for managing tasks to connect project managers and their team members.",
      tech: ["Kotlin", "Jetpack Compose", "Node.js", "MySQL", "Google Cloud Platform"],
      image: "📁",
      github: "#",
      live: "#",
      category: "FrontEnd"
    },
    {
      title: "Quotation App",
      description: "A multiplatform application for managing and creating quotation.",
      tech: ["Flutter", "Firebase Firestore", "Firebase Hosting"],
      image: "📃",
      github: "#",
      live: "#",
      category: "Full Stack"
    },
    {
      title: "Presence Application",
      description: "An easy-to-use Android application for employee attendance tracking.",
      tech: ["Flutter", "Firebase Firestore"],
      image: "🕘",
      github: "#",
      live: "#",
      category: "Full Stack"
    },
    {
      title: "FitNow",
      description: "A multiplatform application for managing workout schedules, featuring an AI personal assistant to guide exercise movements.",
      tech: ["Flutter", "Firebase Firestore", "Firebase Cloud Storage", "BLoC", "Gemini API"],
      image: "🏋️‍♂️",
      github: "#",
      live: "#",
      category: "Full Stack"
    }
  ];

  const skills = [
    { name: "JavaScript", level: 80, category: "Frontend" },
    { name: "React/Next.js", level: 87, category: "Frontend" },
    { name: "Node.js/Express", level: 90, category: "Backend" },
    { name: "Python", level: 89, category: "Backend" },
    { name: "MySQL/Firestore", level: 89, category: "Database" },
    { name: "AWS/Docker", level: 80, category: "DevOps" },
    { name: "Flutter", level: 95, category: "Frontend" },
    { name: "Firebase", level: 88, category: "Backend" }
  ];

  const experiences = [
    {
      title: "Junior Laboratory Assistant",
      company: "ISTTS",
      period: "Sep 2023 - Dec 2023",
      description: "Gave a brief tutorial for students in the Engineering Faculty before they do their 45-minute time limit lab work assignments"
    },
    {
      title: "Lecturer Assistant",
      company: "Research and Innovation Center Lab ISTTS",
      period: "Feb 2024 - now",
      description: "Creating an AI App for Sport Analysis using Flutter, Firebase, and Gemini API"
    },
    {
      title: "Mobile Application Developer",
      company: "PT Izzati Hasanah",
      period: "Jun 2024 - now",
      description: "Developed mobile application for quotation and employee presence using Flutter and Firebase"
    }
  ]

  const education = [
    {
      degree: "Bachelor of Computer Science",
      school: "Institut Sains dan Teknologi Terpadu Surabaya",
      period: "2021 - 2025",
      gpa: "3.74/4.0",
      achievements: ["Cum Laude"]
    }
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/CV - Calvin Harsono.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{
            left: mousePosition.x - 200,
            top: mousePosition.y - 200,
            transition: 'all 0.3s ease-out'
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl animate-bounce" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/5 rounded-full blur-2xl animate-pulse" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Calvin Harsono
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'experience', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-all duration-300 hover:text-purple-400 ${
                    activeSection === item ? 'text-purple-400 border-b-2 border-purple-400' : 'text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
        <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="mb-8">
            <div className="w-40 h-40 mx-auto mb-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-6xl animate-pulse">
              👨‍💻
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
              Calvin Harsono
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-6 animate-fadeIn">
              Full Stack Developer & AI Enthusiast
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
              Recent Computer Science graduate passionate about creating innovative solutions
              and building scalable applications.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
            >
              View My Work <ArrowRight className="w-5 h-5" />
            </button>
            <button onClick={handleDownload} className="border border-purple-500 px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-purple-500/10 transform hover:scale-105 transition-all duration-300">
              <Download className="w-5 h-5"/> Download My Resume
            </button>
          </div>

          <div className="flex justify-center space-x-6">
            <Link href = "https://github.com/KelpinHarr" className="text-gray-400 hover:text-purple-400 transform hover:scale-125 transition-all duration-300">
              <Github className="w-8 h-8"/>
            </Link>
            <Link href="https://linkedin.com/in/calvin-harsono" className="text-gray-400 hover:text-blue-400 transform hover:scale-125 transition-all duration-300">
              <Linkedin className="w-8 h-8" />
            </Link>
            <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=calvinharsono07@gmail.com&su=Hi, I would like to connect with you" className="text-gray-400 hover:text-green-400 transform hover:scale-125 transition-all duration-300">
              <Mail className="w-8 h-8" />
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
                <User className="w-12 h-12 text-purple-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Personal Info</h3>
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-purple-400" />
                    <span>Surabaya, Indonesia</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-purple-400" />
                    <span>22 Years Old</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <GraduationCap className="w-5 h-5 text-purple-400" />
                    <span>B.S. Computer Science (2025)</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                I'm a passionate software developer with a strong foundation in full-stack development 
                and emerging technologies especially using Flutter. Throughout my academic journey, I've built numerous projects 
                ranging from web applications to AI-powered solutions.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                I'm particularly interested in working with innovative companies that value 
                creativity, technical excellence, and collaborative problem-solving. My goal is to 
                contribute to meaningful projects while continuing to grow as a developer.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold">5+</div>
                  <div className="text-sm text-gray-400">Projects Completed</div>
                </div>
                <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold">3.74</div>
                  <div className="text-sm text-gray-400">GPA</div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center mb-12">Technical Skills</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(
                skills.reduce((acc, skill) => {
                  if (!acc[skill.category]) acc[skill.category] = [];
                  acc[skill.category].push(skill.name);
                  return acc;
                }, {})
              ).map(([category, skillList]) => (
                <div key={category} className="bg-slate-800/30 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    <h4 className="text-xl font-semibold text-purple-400">{category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skillName) => (
                      <span key={skillName} className="bg-slate-700 px-3 py-1 rounded-full text-sm hover:bg-slate-600 transition-colors">
                        {skillName}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
                <div className="text-6xl mb-4 text-center">{project.image}</div>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs bg-purple-600/20 text-purple-300 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs bg-slate-700/50 text-gray-300 px-2 py-1 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
                {/* <div className="flex gap-3">
                  <a href={project.github} className="flex items-center gap-2 text-sm text-gray-400 hover:text-purple-400 transition-colors">
                    <Github className="w-4 h-4" /> Code
                  </a>
                  <a href={project.live} className="flex items-center gap-2 text-sm text-gray-400 hover:text-purple-400 transition-colors">
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience & Education
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Experience */}
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Briefcase className="w-8 h-8 text-purple-400" />
                Work Experience
              </h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="bg-slate-800/30 rounded-xl p-6 border-l-4 border-purple-500 hover:bg-slate-800/50 transition-all duration-300">
                    <h4 className="text-xl font-bold text-purple-400 mb-2">{exp.title}</h4>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-lg font-semibold">{exp.company}</span>
                      <span className="text-sm text-gray-400">{exp.period}</span>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <GraduationCap className="w-8 h-8 text-purple-400" />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="bg-slate-800/30 rounded-xl p-6 border-l-4 border-pink-500 hover:bg-slate-800/50 transition-all duration-300">
                    <h4 className="text-xl font-bold text-pink-400 mb-2">{edu.degree}</h4>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-lg font-semibold">{edu.school}</span>
                      <span className="text-sm text-gray-400">{edu.period}</span>
                    </div>
                    <div className="mb-3">
                      <span className="text-purple-400 font-semibold">GPA: {edu.gpa}</span>
                    </div>
                    <div className="space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <Award className="w-4 h-4 text-yellow-400" />
                          <span className="text-gray-300">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm actively seeking opportunities with innovative companies. 
            Let's discuss how I can contribute to your team's success.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-slate-800/50 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
              <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-400">calvinharsono07@gmail.com</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
              <Linkedin className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">LinkedIn</h3>
              <p className="text-gray-400">linkedin.com/in/calvin-harsono</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
              <Github className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">GitHub</h3>
              <p className="text-gray-400">github.com/KelpinHarr</p>
            </div>
          </div>
          
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-12 py-4 rounded-full text-xl font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
            Get In Touch
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Calvin Harsono. Built with Next.js and Tailwind CSS. 
            <span className="text-purple-400"> Ready to make an impact! </span>
          </p>
        </div>
      </footer>
    </div>
  );
}