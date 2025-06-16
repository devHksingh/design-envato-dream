
const ContactCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-yellow-400 via-orange-400 to-orange-500 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-purple-600 opacity-10 rounded-full translate-x-24 translate-y-24"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Child Image */}
          <div className="flex justify-center lg:justify-start">
            <img 
              src="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
              alt="Child with backpack" 
              className="w-80 h-80 object-cover rounded-2xl shadow-2xl"
            />
          </div>

          {/* Right - Contact Content */}
          <div className="bg-white bg-opacity-90 rounded-3xl p-8">
            <h2 className="text-4xl font-bold text-purple-800 mb-6">Ask About Kids Acts</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Have questions about our programs? Want to know more about enrollment? 
              We're here to help you make the best choice for your child's educational journey.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <span className="text-purple-600 mr-3">📞</span>
                <span className="text-gray-700">+001 3056000</span>
              </div>
              <div className="flex items-center">
                <span className="text-purple-600 mr-3">✉️</span>
                <span className="text-gray-700">info@rainbowkids.com</span>
              </div>
            </div>
            <button className="bg-purple-600 text-white px-8 py-3 rounded-full font-bold hover:bg-purple-700 transition-colors w-full sm:w-auto">
              Contact Us Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
