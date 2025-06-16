
const Announcements = () => {
  return (
    <section className="py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Announcement Content */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold">📢</span>
              </div>
              <h2 className="text-3xl font-bold text-purple-800">Announcement</h2>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-6 mb-6">
              <p className="text-gray-700 leading-relaxed">
                We are excited to announce that registrations for the new academic year 2020-2021 are now open! 
                Join our vibrant learning community where children discover, explore, and grow through innovative 
                educational programs designed to nurture young minds.
              </p>
            </div>

            <div className="flex space-x-4">
              <div className="w-4 h-4 bg-pink-400 rounded-full"></div>
              <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
            </div>
            
            <button className="mt-6 bg-purple-600 text-white px-6 py-3 rounded-full font-bold hover:bg-purple-700 transition-colors">
              Read More
            </button>
          </div>

          {/* Right - Illustration */}
          <div className="flex justify-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                alt="Child with laptop" 
                className="w-80 h-80 object-cover rounded-2xl shadow-lg"
              />
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-pink-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Announcements;
