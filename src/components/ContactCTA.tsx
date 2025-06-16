
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ContactCTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    studyingClass: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-12 h-12 bg-pink-400 rounded-full opacity-80"></div>
      <div className="absolute top-20 left-32 w-16 h-16 bg-green-400 rounded-full opacity-60"></div>
      <div className="absolute top-32 left-20 w-8 h-8 bg-blue-400 rounded-full opacity-70"></div>
      <div className="absolute top-10 right-20 w-20 h-20 bg-orange-400 rounded-full opacity-50"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-yellow-400 rounded-full opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Child with Megaphone */}
          <div className="flex justify-center lg:justify-start">
            <img 
              src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
              alt="Child with megaphone" 
              className="w-96 h-96 object-cover"
            />
          </div>

          {/* Right - Contact Form in Orange Circle */}
          <div className="relative">
            <div className="bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full p-12 shadow-2xl">
              <h2 className="text-4xl font-bold text-purple-900 mb-8 text-center">Ask About Kids Acts</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-purple-900 font-semibold">Your Name</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="mt-2 bg-white border-none placeholder-gray-500"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-purple-900 font-semibold">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="mt-2 bg-white border-none placeholder-gray-500"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-purple-900 font-semibold">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="mt-2 bg-white border-none placeholder-gray-500"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <Label htmlFor="class" className="text-purple-900 font-semibold">Studying Class</Label>
                  <Select onValueChange={(value) => handleInputChange('studyingClass', value)}>
                    <SelectTrigger className="mt-2 bg-white border-none">
                      <SelectValue placeholder="Select class" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="preschool">Preschool</SelectItem>
                      <SelectItem value="kindergarten">Kindergarten</SelectItem>
                      <SelectItem value="grade1">Grade 1</SelectItem>
                      <SelectItem value="grade2">Grade 2</SelectItem>
                      <SelectItem value="grade3">Grade 3</SelectItem>
                      <SelectItem value="grade4">Grade 4</SelectItem>
                      <SelectItem value="grade5">Grade 5</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-purple-800 hover:bg-purple-900 text-white font-bold py-3 rounded-full mt-6"
                >
                  View All
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
