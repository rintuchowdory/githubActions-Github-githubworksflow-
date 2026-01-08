import React from "react";

function App() {
  return (
    <div style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)" }} className="min-h-screen text-white">
      {/* Navigation */}
      <nav style={{ background: "rgba(0, 0, 0, 0.3)" }} className="backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <div className="text-3xl font-black">🚀 CloudDeploy</div>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-7xl font-black mb-6">
            Deploy with <span style={{ color: "#ffff00" }}>POWER</span>
          </h1>
          <p className="text-3xl mb-10 font-bold">
            Fast, secure, and reliable deployment platform
          </p>
          <div className="flex gap-4 justify-center">
            <button style={{ background: "linear-gradient(135deg, #ff6b6b, #ff8e53)" }} className="text-white px-12 py-5 rounded-full font-black text-xl hover:shadow-2xl hover:scale-110 transition">
              Start Free Trial →
            </button>
            <button className="border-2 border-white text-white px-12 py-5 rounded-full font-black text-xl hover:bg-white hover:text-blue-600 transition">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-3 gap-8 text-center">
          <div style={{ background: "rgba(255, 255, 255, 0.15)" }} className="p-8 rounded-2xl backdrop-blur-md">
            <div className="text-6xl font-black">50K+</div>
            <div className="text-2xl mt-2 font-bold">Active Users</div>
          </div>
          <div style={{ background: "rgba(255, 255, 255, 0.15)" }} className="p-8 rounded-2xl backdrop-blur-md">
            <div className="text-6xl font-black">99.9%</div>
            <div className="text-2xl mt-2 font-bold">Uptime</div>
          </div>
          <div style={{ background: "rgba(255, 255, 255, 0.15)" }} className="p-8 rounded-2xl backdrop-blur-md">
            <div className="text-6xl font-black">2M+</div>
            <div className="text-2xl mt-2 font-bold">Deployments</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl font-black text-center mb-4">Powerful Features</h2>
          <p className="text-center text-2xl mb-16 font-bold">Everything you need</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div style={{ background: "linear-gradient(135deg, #ff6b6b, #ff8e53)" }} className="rounded-2xl p-8 shadow-2xl hover:scale-110 transition">
              <div className="text-6xl mb-4">⚡</div>
              <h3 className="text-2xl font-black mb-2">Lightning Fast</h3>
              <p className="text-lg">Optimized performance</p>
            </div>

            <div style={{ background: "linear-gradient(135deg, #4facfe, #00f2fe)" }} className="rounded-2xl p-8 shadow-2xl hover:scale-110 transition">
              <div className="text-6xl mb-4">🔒</div>
              <h3 className="text-2xl font-black mb-2">Secure & Safe</h3>
              <p className="text-lg">Enterprise security</p>
            </div>

            <div style={{ background: "linear-gradient(135deg, #fa709a, #fee140)" }} className="rounded-2xl p-8 shadow-2xl hover:scale-110 transition">
              <div className="text-6xl mb-4">📈</div>
              <h3 className="text-2xl font-black mb-2">Scalable</h3>
              <p className="text-lg">Grows with you</p>
            </div>

            <div style={{ background: "linear-gradient(135deg, #a8edea, #fed6e3)" }} className="rounded-2xl p-8 shadow-2xl hover:scale-110 transition text-gray-900">
              <div className="text-6xl mb-4">🎨</div>
              <h3 className="text-2xl font-black mb-2">Beautiful UI</h3>
              <p className="text-lg">Modern design</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl font-black text-center mb-16">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div style={{ background: "linear-gradient(135deg, #ff6b6b, #ff8e53)" }} className="w-32 h-32 rounded-2xl flex flex-col items-center justify-center mx-auto mb-4 shadow-xl">
                <div className="text-4xl mb-2">🔗</div>
                <div className="font-black text-3xl">1</div>
              </div>
              <h3 className="text-2xl font-black mb-2">Connect</h3>
            </div>

            <div className="text-center">
              <div style={{ background: "linear-gradient(135deg, #667eea, #764ba2)" }} className="w-32 h-32 rounded-2xl flex flex-col items-center justify-center mx-auto mb-4 shadow-xl">
                <div className="text-4xl mb-2">⚙️</div>
                <div className="font-black text-3xl">2</div>
              </div>
              <h3 className="text-2xl font-black mb-2">Configure</h3>
            </div>

            <div className="text-center">
              <div style={{ background: "linear-gradient(135deg, #f093fb, #f5576c)" }} className="w-32 h-32 rounded-2xl flex flex-col items-center justify-center mx-auto mb-4 shadow-xl">
                <div className="text-4xl mb-2">🚀</div>
                <div className="font-black text-3xl">3</div>
              </div>
              <h3 className="text-2xl font-black mb-2">Deploy</h3>
            </div>

            <div className="text-center">
              <div style={{ background: "linear-gradient(135deg, #4facfe, #00f2fe)" }} className="w-32 h-32 rounded-2xl flex flex-col items-center justify-center mx-auto mb-4 shadow-xl">
                <div className="text-4xl mb-2">📊</div>
                <div className="font-black text-3xl">4</div>
              </div>
              <h3 className="text-2xl font-black mb-2">Monitor</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl font-black text-center mb-16">What Users Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div style={{ background: "rgba(255, 255, 255, 0.15)" }} className="p-8 rounded-2xl backdrop-blur-md">
              <p className="text-xl mb-4 font-bold">"Best platform ever!"</p>
              <div>
                <div className="font-black text-lg">John Smith</div>
                <div className="text-sm">CEO</div>
              </div>
            </div>

            <div style={{ background: "rgba(255, 255, 255, 0.15)" }} className="p-8 rounded-2xl backdrop-blur-md">
              <p className="text-xl mb-4 font-bold">"Simple & powerful!"</p>
              <div>
                <div className="font-black text-lg">Sarah Johnson</div>
                <div className="text-sm">DevOps</div>
              </div>
            </div>

            <div style={{ background: "rgba(255, 255, 255, 0.15)" }} className="p-8 rounded-2xl backdrop-blur-md">
              <p className="text-xl mb-4 font-bold">"Game changer!"</p>
              <div>
                <div className="font-black text-lg">Mike Chen</div>
                <div className="text-sm">Founder</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl font-black mb-6">Ready to Deploy?</h2>
          <p className="text-2xl font-bold mb-10">Start deploying in minutes</p>
          <button style={{ background: "linear-gradient(135deg, #ffff00, #ffc107)", color: "#000" }} className="px-16 py-6 rounded-full font-black text-2xl hover:scale-110 transition shadow-2xl">
            Get Started Free →
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "rgba(0, 0, 0, 0.3)" }} className="py-12 px-4 text-center">
        <p className="font-bold text-lg">© 2024 CloudDeploy. Built with ❤️</p>
      </footer>
    </div>
  );
}

export default App;
