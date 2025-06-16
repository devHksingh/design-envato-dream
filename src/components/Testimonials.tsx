
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.",
      author: "John Cena",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      quote: "The Rainbow Kids Learning center has been absolutely wonderful for our daughter. The teachers are caring, the programs are engaging, and we've seen tremendous growth in her confidence and learning abilities.",
      author: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-pink-400 to-pink-500 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-16 h-16 bg-orange-400 opacity-80 rounded-lg transform rotate-12"></div>
      <div className="absolute bottom-20 right-20 w-12 h-12 bg-yellow-400 opacity-80 rounded-lg transform -rotate-12"></div>
      
      {/* Torn paper effect */}
      <div className="absolute top-0 left-0 w-full h-8 bg-white" style={{
        clipPath: 'polygon(0 0, 100% 0, 98% 100%, 95% 80%, 92% 100%, 88% 70%, 85% 100%, 80% 60%, 75% 100%, 70% 80%, 65% 100%, 60% 70%, 55% 100%, 50% 60%, 45% 100%, 40% 80%, 35% 100%, 30% 70%, 25% 100%, 20% 80%, 15% 100%, 10% 60%, 5% 100%, 2% 80%, 0 100%)'
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="flex justify-center lg:justify-start">
            <img 
              src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
              alt="Happy parent and child" 
              className="w-80 h-96 object-cover rounded-2xl shadow-2xl"
            />
          </div>

          {/* Right - Content */}
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-8">
              Parents<br />
              Testimonials
            </h2>
            
            <div className="relative">
              <Carousel className="w-full">
                <CarouselContent>
                  {testimonials.map((testimonial, index) => (
                    <CarouselItem key={index}>
                      <div className="relative">
                        {/* Large quotation mark */}
                        <div className="text-9xl font-bold text-white opacity-30 absolute -top-8 -left-4 leading-none">
                          66
                        </div>
                        
                        <div className="relative z-10 pt-8">
                          <p className="text-white leading-relaxed mb-8 text-lg">
                            {testimonial.quote}
                          </p>
                          
                          <div className="text-white">
                            <h4 className="text-xl font-bold">{testimonial.author}</h4>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                
                {/* Navigation arrows */}
                <div className="flex space-x-4 mt-8">
                  <CarouselPrevious className="relative inset-auto translate-x-0 translate-y-0 bg-white bg-opacity-20 hover:bg-opacity-30 border-white border-opacity-30 text-white w-12 h-12" />
                  <CarouselNext className="relative inset-auto translate-x-0 translate-y-0 bg-white bg-opacity-20 hover:bg-opacity-30 border-white border-opacity-30 text-white w-12 h-12" />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
