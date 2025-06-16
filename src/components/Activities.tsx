
const Activities = () => {
  const activities = [
    {
      title: "Outdoor Games",
      description: "Physical activities for healthy development",
      icon: "⚽"
    },
    {
      title: "Interactive Toys", 
      description: "Educational toys for creative learning",
      icon: "🧸"
    },
    {
      title: "Smart Activities",
      description: "Technology-enhanced learning experiences", 
      icon: "💡"
    },
    {
      title: "Music Classes",
      description: "Musical education for artistic growth",
      icon: "🎵"
    }
  ];

  return (
    <section className="py-16 bg-white relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-200 to-purple-200 rounded-full opacity-20 -translate-y-32 translate-x-32"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-purple-800 mb-4">We Provide the</h2>
          <h3 className="text-3xl font-bold text-purple-800 mb-6">Math Kids Activities</h3>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Our comprehensive program includes various engaging activities designed to make learning fun and effective. 
            We focus on holistic development through play-based learning methodologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {activities.map((activity, index) => (
            <div key={index} className="text-center bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{activity.icon}</div>
              <h4 className="font-bold text-purple-800 mb-2">{activity.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{activity.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-purple-600 text-white px-8 py-3 rounded-full font-bold hover:bg-purple-700 transition-colors">
            Explore More
          </button>
        </div>

        {/* Bottom section with child image */}
        <div className="mt-16 text-center relative">
          <div className="bg-gradient-to-r from-green-400 to-blue-400 rounded-2xl p-8 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4">
                Make your children life special by registering them in our academy
              </h3>
              <div className="flex justify-center space-x-4 mb-6">
                <span className="text-white">📞 +001 3056000</span>
                <span className="text-white">✉️ info@kids.com</span>
              </div>
              <button className="bg-purple-600 text-white px-8 py-3 rounded-full font-bold hover:bg-purple-700 transition-colors">
                Apply Now
              </button>
            </div>
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
