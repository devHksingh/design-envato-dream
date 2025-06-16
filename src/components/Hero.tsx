
const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 relative overflow-hidden min-h-screen">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-16 h-16 bg-yellow-400 rounded-full opacity-20"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-pink-400 rounded-full opacity-20"></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-green-400 rounded-full opacity-20"></div>
        <div className="absolute bottom-60 right-10 w-8 h-8 bg-blue-400 rounded-full opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Content */}
          <div className="text-left">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Admission
            </h1>
            <div className="flex items-center mb-8">
              <span className="bg-green-400 text-white px-4 py-2 rounded-full font-bold text-lg mr-4">
                OPEN FOR
              </span>
              <span className="text-yellow-400 text-3xl font-bold">2020-2021</span>
            </div>
            <p className="text-white text-lg mb-8 opacity-90">
              Enroll your child in our amazing learning programs designed to inspire creativity and growth.
            </p>
            <button className="bg-green-400 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-500 transition-all hover:scale-105 shadow-lg">
              APPLY NOW
            </button>
          </div>

          {/* Right Content - Child Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Happy child jumping" 
                className="w-96 h-96 object-cover rounded-full shadow-2xl"
              />
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-purple-800 px-3 py-2 rounded-lg font-bold text-sm transform rotate-12">
                2020-2021
              </div>
              <div className="absolute -bottom-4 -left-4 bg-pink-400 text-white px-3 py-2 rounded-lg font-bold text-sm transform -rotate-12">
                NEW BATCH
              </div>
              <div className="absolute top-1/2 -right-8 bg-green-400 text-white px-3 py-2 rounded-lg font-bold text-sm transform rotate-45">
                JOIN US
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-20 fill-white">
          <path d="M0,60 C150,100 350,0 600,60 C850,120 1050,20 1200,60 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
