
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const LatestNews = () => {
  const newsItems = [
    {
      title: "Make learning fun for your kids",
      date: "June 10, 2017",
      excerpt: "Appropriately engage diverse resources for next-generation systems. Professionally foster extensive paradigms vis-a-vis",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Make learning fun for your kids",
      date: "June 10, 2017", 
      excerpt: "Appropriately engage diverse resources for next-generation systems. Professionally foster extensive paradigms vis-a-vis",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Make learning fun for your kids",
      date: "June 10, 2017",
      excerpt: "Appropriately engage diverse resources for next-generation systems. Professionally foster extensive paradigms vis-a-vis",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      {/* Decorative cloud element */}
      <div className="absolute bottom-0 left-0 w-32 h-20 opacity-20">
        <svg viewBox="0 0 100 50" className="w-full h-full fill-blue-300">
          <ellipse cx="25" cy="35" rx="20" ry="12"/>
          <ellipse cx="45" cy="30" rx="25" ry="15"/>
          <ellipse cx="65" cy="35" rx="20" ry="12"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Latest News</h2>
        </div>

        <div className="relative">
          <Carousel className="w-full">
            <CarouselContent className="-ml-4">
              {newsItems.map((item, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/2">
                  <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full">
                    <div className="relative">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-white rounded-lg p-2 shadow-md">
                        <div className="flex items-center space-x-2 text-blue-600">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm font-medium">{item.date}</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{item.excerpt}</p>
                      <button className="text-purple-600 font-semibold hover:text-purple-700 transition-colors">
                        Read More
                      </button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-6 top-1/2 -translate-y-1/2 bg-pink-500 hover:bg-pink-600 border-pink-500 text-white w-12 h-12" />
            <CarouselNext className="absolute -right-6 top-1/2 -translate-y-1/2 bg-gray-400 hover:bg-gray-500 border-gray-400 text-white w-12 h-12" />
          </Carousel>
        </div>

        <div className="text-center mt-12">
          <button className="bg-purple-600 text-white px-12 py-4 rounded-full font-bold hover:bg-purple-700 transition-colors text-lg">
            View All
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
