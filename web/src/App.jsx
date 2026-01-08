import React, { useState } from "react";

function App() {
  const [activeTab, setActiveTab] = useState("about");

  const projects = [
    {
      name: "CloudDeploy",
      desc: "Fast, secure deployment platform",
      demo: "http://localhost:8080",
      icon: "🚀",
    },
    {
      name: "GitHub Actions Demo",
      desc: "CI/CD pipeline automation",
      demo: "#",
      icon: "⚙️",
    },
    {
      name: "Docker Integration",
      desc: "Container orchestration",
      demo: "#",
      icon: "🐳",
    },
    {
      name: "Nginx Config",
      desc: "Web server optimization",
      demo: "#",
      icon: "⚡",
    },
  ];

  const socials = [
    {
      icon: "💼",
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/rintu-chowdory/",
      color: "from-blue-600 to-blue-700",
    },
    {
      icon: "🐙",
      name: "GitHub",
      url: "https://github.com/rintuchowdory",
      color: "from-gray-800 to-gray-900",
    },
    {
      icon: "🐳",
      name: "Docker Hub",
      url: "https://app.docker.com/accounts/rintuuu",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: "🔗",
      name: "Xing",
      url: "https://www.xing.com/profile/Rintu_Chowdory/",
      color: "from-green-600 to-green-700",
    },
    {
      icon: "📧",
      name: "Email",
      url: "mailto:Rintuchowdory@outlook.de",
      color: "from-red-500 to-red-600",
    },
  ];

  return (
    <div style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)" }} className="min-h-screen text-white">
      {/* Animated Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse" style={{animation: "float 8s ease-in-out infinite"}}></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{animation: "float 10s ease-in-out infinite reverse"}}></div>
      </div>

      {/* Navigation */}
      <nav style={{ background: "rgba(0, 0, 0, 0.4)" }} className="fixed top-0 w-full backdrop-blur-md z-50 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center">
          <div className="text-3xl font-black animate-bounce">🚀 Rintu Chowdory</div>
          <button onClick={() => setActiveTab("about")} className={`px-6 py-2 rounded-full font-bold transition ${activeTab === "about" ? "bg-white text-blue-600" : "bg-white/20"}`}>
            Portfolio
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-7xl font-black mb-6 animate-fade-in" style={{animationDelay: "0.1s"}}>
            Full Stack <span style={{ color: "#ffff00" }}>Developer</span>
          </h1>
          <p className="text-3xl mb-10 font-bold animate-fade-in" style={{animationDelay: "0.2s"}}>
            Passionate about DevOps, Docker & Cloud Solutions
          </p>
          <div className="flex gap-4 justify-center flex-wrap animate-fade-in" style={{animationDelay: "0.3s"}}>
            {socials.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ background: `linear-gradient(135deg, ${social.color.split(" ")[1]}, ${social.color.split(" ")[3]})` }}
                className="text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-110 transform transition hover:shadow-2xl"
              >
                {social.icon} {social.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl font-black text-center mb-4 animate-fade-in" style={{animationDelay: "0.4s"}}>Featured Projects</h2>
          <p className="text-center text-2xl mb-16 font-bold animate-fade-in" style={{animationDelay: "0.5s"}}>Showcase of my work</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group animate-fade-in"
                style={{animationDelay: `${0.6 + idx * 0.1}s`}}
              >
                <div style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))" }} className="rounded-2xl p-8 backdrop-blur-md border border-white/20 hover:border-white/50 h-full transform hover:scale-105 transition cursor-pointer group-hover:shadow-2xl">
                  <div className="text-6xl mb-4">{project.icon}</div>
                  <h3 className="text-2xl font-black mb-2">{project.name}</h3>
                  <p className="text-lg mb-6">{project.desc}</p>
                  <a href={project.demo} className="inline-block bg-white text-blue-600 px-6 py-2 rounded-full font-bold hover:bg-yellow-300 transition">
                    View Demo →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl font-black text-center mb-16 animate-fade-in" style={{animationDelay: "1s"}}>My Journey</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "5+", label: "Years Experience", delay: "1.1s" },
              { number: "50+", label: "Projects", delay: "1.2s" },
              { number: "100+", label: "Happy Clients", delay: "1.3s" },
              { number: "24/7", label: "Support", delay: "1.4s" },
            ].map((stat, idx) => (
              <div key={idx} className="animate-fade-in" style={{animationDelay: stat.delay}}>
                <div style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05))" }} className="rounded-2xl p-8 backdrop-blur-md border border-white/20 text-center">
                  <div className="text-6xl font-black mb-4">{stat.number}</div>
                  <div className="text-2xl font-bold">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl font-black text-center mb-16 animate-fade-in" style={{animationDelay: "1.5s"}}>Technologies</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["React", "Docker", "Nginx", "GitHub Actions", "Node.js", "Vite", "Tailwind CSS", "Linux"].map((tech, idx) => (
              <div key={idx} className="animate-fade-in" style={{animationDelay: `${1.6 + idx * 0.05}s`}}>
                <div style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))" }} className="rounded-2xl p-6 backdrop-blur-md border border-white/20 text-center font-bold text-xl hover:scale-110 transition cursor-pointer">
                  {tech}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in" style={{animationDelay: "2s"}}>
          <h2 className="text-6xl font-black mb-6">Let's Connect!</h2>
          <p className="text-2xl font-bold mb-10">Have a project in mind? Let's work together!</p>
          
          <a href="mailto:Rintuchowdory@outlook.de" className="inline-block bg-white text-blue-600 px-16 py-6 rounded-full font-black text-2xl hover:scale-110 transform transition shadow-2xl">
            📧 Send Me an Email
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "rgba(0, 0, 0, 0.4)" }} className="py-12 px-4 text-center border-t border-white/20">
        <p className="font-bold text-lg animate-fade-in" style={{animationDelay: "2.1s"}}>© 2024 Rintu Chowdory. All rights reserved. 🚀</p>
      </footer>

      <style>{`
        @keyframes fade-in {
          from { 
            opacity: 0; 
            transform: translateY(30px);
          }
          to { 
            opacity: 1; 
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(20px); }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-bounce {
          animation: bounce 2s infinite;
        }

        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </div>
  );
}

export default App;
