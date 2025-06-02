
import { Card, CardContent } from '@/components/ui/card';
import { Award, Book, Calendar, GraduationCap } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6 font-serif">
          About <span className="text-navy-700">Me</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <Card className="shadow-md hover:shadow-lg transition-shadow border-t-4 border-t-navy-700">
            <CardContent className="pt-6">
              <div className="mb-4 w-12 h-12 bg-navy-100 rounded-full flex items-center justify-center text-navy-700">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-xl font-bold text-navy-800 mb-2">Education</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="mr-2 text-navy-700">•</div>
                  <div>
                    <p className="font-medium">Bachelor of Science in Software Engineering</p>
                    <p className="text-sm text-gray-600">SLIIT CITY UNI, 2023 - Present</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 text-navy-700">•</div>
                  <div>
                    <p className="font-medium">Secondary Education</p>
                    <p className="text-sm text-gray-600">Jaffna Hindu College, 2012 - 2020</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="shadow-md hover:shadow-lg transition-shadow border-t-4 border-t-navy-700">
            <CardContent className="pt-6">
              <div className="mb-4 w-12 h-12 bg-navy-100 rounded-full flex items-center justify-center text-navy-700">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-bold text-navy-800 mb-2">Achievements</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="mr-2 text-navy-700">•</div>
                  <div>
                    <p className="font-medium">Dean's List</p>
                    <p className="text-sm text-gray-600">4 Consecutive Semesters</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 text-navy-700">•</div>
                  <div>
                    <p className="font-medium">Hackathon Winner</p>
                    <p className="text-sm text-gray-600">University Hackathon 2023</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="shadow-md hover:shadow-lg transition-shadow border-t-4 border-t-navy-700">
            <CardContent className="pt-6">
              <div className="mb-4 w-12 h-12 bg-navy-100 rounded-full flex items-center justify-center text-navy-700">
                <Book size={24} />
              </div>
              <h3 className="text-xl font-bold text-navy-800 mb-2">Interests</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="mr-2 text-navy-700">•</div>
                  <div>
                    <p className="font-medium">Artificial Intelligence</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 text-navy-700">•</div>
                  <div>
                    <p className="font-medium">Web Development</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 text-navy-700">•</div>
                  <div>
                    <p className="font-medium">Data Science</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 bg-navy-50 p-6 md:p-8 rounded-lg border border-navy-100">
          <h3 className="text-xl font-bold text-navy-800 mb-4">Personal Statement</h3>
          <p className="text-gray-700 leading-relaxed">
            I am a passionate computer science student with a strong interest in learning and professional growth. 
            My academic journey has equipped me with technical knowledge and practical skills that I continuously 
            refine through workshops, personal projects, and collaboration with peers.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            I believe in continuous learning and challenging myself to step outside my comfort zone. 
            My goal is to leverage my skills and knowledge to make meaningful contributions to the field of 
            technology while pursuing opportunities that foster both professional and personal development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
