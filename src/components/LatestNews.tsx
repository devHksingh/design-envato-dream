
const LatestNews = () => {
  const newsItems = [
    {
      title: "New Art Program Launch",
      date: "March 15, 2021",
      excerpt: "We're excited to introduce our new creative arts program...",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Summer Camp Registration",
      date: "March 10, 2021", 
      excerpt: "Registration is now open for our amazing summer camp...",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-purple-800 mb-4">Latest News</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest happenings and announcements from our learning center.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {newsItems.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-purple-600 text-sm font-semibold mb-2">{item.date}</div>
                <h3 className="text-xl font-bold text-purple-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <button className="text-purple-600 font-semibold hover:text-purple-700 transition-colors">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-purple-600 text-white px-8 py-3 rounded-full font-bold hover:bg-purple-700 transition-colors">
            View All News
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
