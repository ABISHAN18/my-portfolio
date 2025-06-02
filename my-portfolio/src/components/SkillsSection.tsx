import React from 'react';
import { Progress } from '@/components/ui/progress';
import { 
  Code, Database, Globe, MessageSquare, ChartBar, Layout
} from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
  category: string;
}

const SkillsSection = () => {
  const skills: Skill[] = [
    { 
      name: 'HTML/CSS', 
      level: 85, 
      icon: <Code className="text-navy-700" />, 
      category: 'Technical' 
    },
    { 
      name: 'JavaScript', 
      level: 80, 
      icon: <Code className="text-navy-700" />, 
      category: 'Technical' 
    },
    { 
      name: 'React', 
      level: 75, 
      icon: <Layout className="text-navy-700" />, 
      category: 'Technical' 
    },
    { 
      name: 'SQL', 
      level: 70, 
      icon: <Database className="text-navy-700" />, 
      category: 'Technical' 
    },
    { 
      name: 'Python', 
      level: 70, 
      icon: <Code className="text-navy-700" />, 
      category: 'Technical' 
    },
    { 
      name: 'MongoDB', 
      level: 65, 
      icon: <Database className="text-navy-700" />, 
      category: 'Technical' 
    },
    { 
      name: 'AWS', 
      level: 60, 
      icon: <Globe className="text-navy-700" />, 
      category: 'Technical' 
    },
    { 
      name: 'Communication', 
      level: 90, 
      icon: <MessageSquare className="text-navy-700" />, 
      category: 'Soft' 
    },
    { 
      name: 'Teamwork', 
      level: 85, 
      icon: <Globe className="text-navy-700" />, 
      category: 'Soft' 
    },
    { 
      name: 'Problem Solving', 
      level: 80, 
      icon: <ChartBar className="text-navy-700" />, 
      category: 'Soft' 
    },
  ];

  const [filter, setFilter] = React.useState<'All' | 'Technical' | 'Soft'>('All');

  const filteredSkills = filter === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === filter);

  return (
    <section id="skills" className="section-padding bg-navy-50">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6 font-serif">
          My <span className="text-navy-700">Skills</span>
        </h2>

        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {(['All', 'Technical', 'Soft'] as const).map((category) => (
            <button 
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === category 
                  ? 'bg-navy-700 text-white' 
                  : 'bg-white text-navy-700 hover:bg-navy-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div 
              key={skill.name}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-navy-100 animate-fade-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="flex items-start mb-4">
                <div className="p-2 rounded-md bg-navy-50 mr-4">
                  {skill.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy-900">{skill.name}</h3>
                  <p className="text-sm text-gray-600">{skill.category}</p>
                </div>
              </div>
              
              <div className="mt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-navy-700">Proficiency</span>
                  <span className="text-sm font-medium text-navy-700">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2 bg-navy-100" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;