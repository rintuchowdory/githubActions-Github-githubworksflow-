import React from "react";

function App() {
  return (
    <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 min-h-screen flex items-center justify-center p-6">
      
      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-4xl w-full animate-fade-in">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 animate-fade-in">
            🚀 Welcome to My Project
          </h1>
          <p className="text-gray-600 text-lg md:text-xl">
            Built with Docker, GitHub Actions & Nginx
          </p>
        </div>

        {/* Deployment Badge */}
        <div className="text-center mb-6">
          <img
            src="https://github.com/rintuchowdory/githubActions-Github-githubworksflow-/actions/workflows/ci.yml/badge.svg"
            alt="CI Status"
            className="mx-auto"
          />
        </div>

        {/* Highlight Box */}
        <div className="bg-gradient-to-r from-blue-500 to-teal-400 rounded-2xl p-6 md:p-8 text-white mb-8 shadow-lg animate-fade-in delay-100">
          <p className="text-xl md:text-2xl font-bold mb-2">✨ Automatically Deployed</p>
          <p className="text-base md:text-lg">CI/CD pipeline ready and running!</p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
          {[
            { icon: "🎨", title: "Modern Design", desc: "Beautiful UI with Tailwind CSS", gradient: "from-yellow-400 to-orange-500" },
            { icon: "📱", title: "Fully Responsive", desc: "Works perfectly on all devices", gradient: "from-green-400 to-blue-500" },
            { icon: "⚡", title: "Lightning Fast", desc: "Optimized performance", gradient: "from-pink-400 to-purple-500" },
          ].map((card, idx) => (
            <div
              key={idx}
              className={`bg-gradient-to-br ${card.gradient} rounded-xl p-6 text-center transform hover:-translate-y-2 transition duration-300 shadow-lg cursor-pointer animate-fade-in delay-${idx * 100}`}
            >
              <div className="text-4xl mb-3">{card.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
              <p className="text-white opacity-90">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8 text-center">
          {[
            { value: "100%", label: "Automated", bg: "bg-purple-50", color: "text-purple-600" },
            { value: "24/7", label: "Available", bg: "bg-pink-50", color: "text-pink-600" },
            { value: "Fast", label: "Deployment", bg: "bg-blue-50", color: "text-blue-600" },
          ].map((stat, idx) => (
            <div key={idx} className={`${stat.bg} rounded-lg p-4 animate-fade-in delay-${idx * 150}`}>
              <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="text-center space-x-4">
          <a
            href="#"
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 px-8 rounded-full hover:shadow-2xl transform hover:scale-110 transition duration-300 animate-fade-in delay-300"
          >
            Get Started 🎯
          </a>
          <a
            href="https://github.com/rintuuu"
            className="inline-block bg-gray-800 text-white font-bold py-3 px-8 rounded-full hover:shadow-2xl transform hover:scale-110 transition duration-300 animate-fade-in delay-400"
          >
            View GitHub 🔗
          </a>
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 0.8s ease-out forwards;
          }
          .delay-100 { animation-delay: 0.1s; }
          .delay-200 { animation-delay: 0.2s; }
          .delay-300 { animation-delay: 0.3s; }
          .delay-400 { animation-delay: 0.4s; }
          .delay-500 { animation-delay: 0.5s; }
        `}
      </style>
    </div>
  );
}

export default App;

