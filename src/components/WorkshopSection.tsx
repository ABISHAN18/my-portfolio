import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Calendar, Search, X } from 'lucide-react';
import { format, parseISO } from 'date-fns';

// Workshop type definition
interface Workshop {
  id: string;
  title: string;
  date: string;
  organizer: string;
  topics: string[];
  takeaways: string;
  photoUrl: string;
}

const initialWorkshops: Workshop[] = [
  {
    id: '1',
    title: 'Network & Organizational perspectives',
    date: '2023-01-01',
    organizer: 'Ms Vishaliny',
    topics: [],
    takeaways: 'Ms. Suba Francis delivered an engaging and thought-provoking session focused on self-awareness, character development, and the art of networking.She emphasized the importance of soft skills and professional etiquette in building a successful career.',
    photoUrl: '/workshops/workshop1.jpg'
  },
  {
    id: '2',
    title: 'Industry expectations, Skills & Attitudes required for various job roles',
    date: '2023-02-01',
    organizer: 'Organization B',
    topics: [],
    takeaways: 'Key points and takeaways from the session.',
    photoUrl: '/workshops/workshop2.jpg'
  },
  {
    id: '3',
    title: 'UI/UX Engineering',
    date: '2023-03-01',
    organizer: 'Organization C',
    topics: [],
    takeaways: 'Important lessons learned during the workshop.',
    photoUrl: '/workshops/workshop3.jpg'
  },
  {
    id: '4',
    title: 'Industry Attitude & Industry Expectations',
    date: '2023-03-01',
    organizer: 'Organization C',
    topics: [],
    takeaways: 'Important lessons learned during the workshop.',
    photoUrl: '/workshops/workshop4.jpg'
  },
  {
    id: '5',
    title: 'Business Law / Company Law',
    date: '2023-03-01',
    organizer: 'Organization C',
    topics: [],
    takeaways: 'Important lessons learned during the workshop.',
    photoUrl: '/workshops/workshop5.jpg'
  },
  {
    id: '6',
    title: 'Skills required to select a carrier path',
    date: '2023-03-01',
    organizer: 'Organization C',
    topics: [],
    takeaways: 'Important lessons learned during the workshop.',
    photoUrl: '/workshops/workshop6.jpg'
  },
  {
    id: '7',
    title: 'job roles in Non-IT fields',
    date: '2023-03-01',
    organizer: 'Organization C',
    topics: [],
    takeaways: 'Important lessons learned during the workshop.',
    photoUrl: '/workshops/workshop7.jpg'
  },
  {
    id: '8',
    title: 'Manage stress and Balancing work and life',
    date: '2023-03-01',
    organizer: 'Organization C',
    topics: [],
    takeaways: 'Important lessons learned during the workshop.',
    photoUrl: '/workshops/workshop8.jpg'
  },
];

const WorkshopSection = () => {
  const [workshops] = useState<Workshop[]>(initialWorkshops);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterId, setFilterId] = useState<string>('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Filter workshops based on search term and ID
  const filteredWorkshops = workshops.filter(workshop => {
    const matchesSearchTerm = 
      workshop.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      workshop.organizer.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesId = 
      filterId === '' || 
      workshop.id === filterId;
    
    return matchesSearchTerm && matchesId;
  });

  // Open modal with selected image
  const openImageModal = (photoUrl: string) => {
    setSelectedImage(photoUrl);
  };

  // Close modal
  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="workshops" className="section-padding bg-white">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6 font-serif">
          Guest Lecture <span className="text-navy-700">Workshops</span>
        </h2>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          <div className="w-full md:w-auto flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input 
              placeholder="Search workshops..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex flex-wrap gap-3 w-full md:w-auto">
            <select
              value={filterId}
              onChange={(e) => setFilterId(e.target.value)}
              className="px-3 py-2 bg-white border border-gray-300 rounded-md text-sm"
            >
              <option value="">All Workshops</option>
              {workshops.map(workshop => (
                <option key={workshop.id} value={workshop.id}>
                  Workshop {workshop.id}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        {filteredWorkshops.length === 0 ? (
          <div className="text-center py-10 bg-navy-50 rounded-lg border border-navy-100">
            <p className="text-navy-700">No workshops found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWorkshops.map((workshop) => (
              <Card key={workshop.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="bg-navy-50 border-b border-navy-100 pb-3">
                  <img 
                    src={workshop.photoUrl} 
                    alt={workshop.title} 
                    className="w-full h-40 object-cover rounded-t-md cursor-pointer"
                    onClick={() => openImageModal(workshop.photoUrl)}
                  />
                  <CardTitle className="text-navy-800 mt-3">{workshop.title}</CardTitle>
                  <div className="flex items-center text-sm text-gray-600 mt-1">
                    <Calendar size={14} className="mr-1" />
                    {format(parseISO(workshop.date), 'MMMM d, yyyy')}
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="mb-3">
                    <h4 className="text-sm font-medium text-gray-700">Organizer:</h4>
                    <p className="text-navy-700">{workshop.organizer}</p>
                  </div>
                  <div className="mb-3">
                    <h4 className="text-sm font-medium text-gray-700">Topics:</h4>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {workshop.topics.map(topic => (
                        <span 
                          key={workshop.id} 
                          className="px-2 py-1 bg-navy-100 text-navy-700 rounded-md text-xs font-medium"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="bg-gray-50 border-t">
                  <div>
                    <h4 className="text-sm font-medium text-gray-700">Key Takeaways:</h4>
                    <p className="text-sm text-gray-600 mt-1">{workshop.takeaways}</p>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}

        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="relative max-w-4xl w-full">
              <button
                onClick={closeImageModal}
                className="absolute top-4 right-4 text-white hover:text-gray-300"
              >
                <X size={24} />
              </button>
              <img
                src={selectedImage}
                alt="Enlarged workshop"
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default WorkshopSection;