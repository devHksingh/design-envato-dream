
const FeaturedCourses = () => {
  const courses = [
    {
      title: "Arts Activity Program",
      age: "3-5 years",
      color: "bg-pink-400",
      icon: "🎨"
    },
    {
      title: "Elementary Program", 
      age: "6-8 years",
      color: "bg-purple-400",
      icon: "📚"
    },
    {
      title: "Maths (3-5)",
      age: "3-5 years", 
      color: "bg-blue-400",
      icon: "🔢"
    },
    {
      title: "Kids Academic Program",
      age: "4-6 years",
      color: "bg-green-400", 
      icon: "🎓"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-purple-600 via-purple-700 to-blue-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-12 h-12 bg-yellow-400 rounded-full opacity-20"></div>
      <div className="absolute bottom-20 right-20 w-16 h-16 bg-pink-400 rounded-full opacity-20"></div>
      <div className="absolute top-1/2 left-20 w-8 h-8 bg-green-400 rounded-full opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Child Image */}
          <div className="relative flex justify-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Happy child jumping" 
                className="w-96 h-96 object-cover rounded-full shadow-2xl"
              />
              {/* Circular progress indicator */}
              <div className="absolute -left-8 top-1/2 transform -translate-y-1/2">
                <div className="w-24 h-24 border-8 border-green-400 border-t-transparent rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Right - Courses */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-8">Featured Courses</h2>
            
            <div className="grid grid-cols-2 gap-6">
              {courses.map((course, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                  <div className={`${course.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl`}>
                    {course.icon}
                  </div>
                  <h3 className="font-bold text-purple-800 mb-2 text-sm leading-tight">{course.title}</h3>
                  <p className="text-gray-600 text-xs">{course.age}</p>
                </div>
              ))}
            </div>

            <button className="mt-8 bg-yellow-400 text-purple-800 px-8 py-3 rounded-full font-bold hover:bg-yellow-500 transition-colors">
              View All
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
