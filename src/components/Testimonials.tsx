
const Testimonials = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-pink-400 to-pink-500 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-16 h-16 bg-white opacity-20 rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-12 h-12 bg-yellow-400 opacity-30 rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">Parents Testimonials</h2>
            <div className="bg-white bg-opacity-20 rounded-2xl p-6 mb-6">
              <p className="text-white leading-relaxed mb-4">
                "The Rainbow Kids Learning center has been absolutely wonderful for our daughter. 
                The teachers are caring, the programs are engaging, and we've seen tremendous growth 
                in her confidence and learning abilities."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-white rounded-full mr-3"></div>
                <div>
                  <p className="text-white font-bold">Sarah Johnson</p>
                  <p className="text-white opacity-80 text-sm">Parent</p>
                </div>
              </div>
            </div>
            <div className="flex space-x-3">
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <div className="w-3 h-3 bg-white opacity-50 rounded-full"></div>
            </div>
          </div>

          {/* Right - Image */}
          <div className="flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
              alt="Happy parent and child" 
              className="w-80 h-80 object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
