
const WhyChooseUs = () => {
  const features = [
    {
      title: "Expert Solutions",
      description: "Professional guidance for every learning journey",
      color: "bg-pink-400",
      icon: "🎯"
    },
    {
      title: "Extra Activities", 
      description: "Beyond classroom learning experiences",
      color: "bg-green-400",
      icon: "🎨"
    },
    {
      title: "Complete Training",
      description: "Comprehensive skill development programs",
      color: "bg-yellow-400", 
      icon: "📚"
    },
    {
      title: "Individual Plan",
      description: "Personalized learning paths for each child",
      color: "bg-blue-400",
      icon: "👤"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 relative">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-16 h-16 bg-purple-200 rounded-full opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                alt="Children learning" 
                className="w-full h-48 object-cover rounded-2xl shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                alt="Happy child" 
                className="w-full h-48 object-cover rounded-2xl shadow-lg mt-8"
              />
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
              <img 
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                alt="Child celebrating" 
                className="w-32 h-32 object-cover rounded-full shadow-lg border-4 border-white"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="text-4xl font-bold text-purple-800 mb-8">Why Choose us</h2>
            
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className={`${feature.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 text-2xl`}>
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-purple-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>

            <button className="mt-8 bg-purple-600 text-white px-8 py-3 rounded-full font-bold hover:bg-purple-700 transition-colors">
              More Info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
