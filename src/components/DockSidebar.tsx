
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { 
  HomeIcon, 
  UserIcon, 
  BriefcaseIcon, 
  BookOpenIcon, 
  MailIcon, 
  Menu
} from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

interface NavItem {
  name: string;
  icon: React.ReactNode;
  sectionId: string;
}


const DockSidebar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobile, setIsMobile] = useState(false);

  // Navigation items with their icons and section IDs
  const navItems: NavItem[] = [
    { name: 'Home', icon: <HomeIcon className="w-6 h-6" />, sectionId: 'home' },
    { name: 'About Me', icon: <UserIcon className="w-6 h-6" />, sectionId: 'about' },
    { name: 'Skills', icon: <BriefcaseIcon className="w-6 h-6" />, sectionId: 'skills' },
    { name: 'Workshops', icon: <BookOpenIcon className="w-6 h-6" />, sectionId: 'workshops' },
    { name: 'Contact', icon: <MailIcon className="w-6 h-6" />, sectionId: 'contact' }
  ];

  // Handle scrolling and active section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.sectionId));
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].sectionId);
          break;
        }
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [navItems]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  // Desktop sidebar - now positioned on the right
  const DesktopDock = () => (
    <motion.div 
      className="fixed right-4 top-1/2 -translate-y-1/2 z-50 bg-navy-800/80 backdrop-blur-sm p-3 rounded-full flex flex-col items-center gap-8 border border-navy-600 shadow-lg"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <TooltipProvider delayDuration={100}>
        {navItems.map((item) => (
          <Tooltip key={item.sectionId}>
            <TooltipTrigger asChild>
              <motion.button
                onClick={() => scrollToSection(item.sectionId)}
                className={cn(
                  "flex items-center justify-center rounded-full p-2 transition-colors",
                  activeSection === item.sectionId 
                    ? "bg-gold-400 text-navy-900" 
                    : "text-white hover:bg-navy-700"
                )}
                whileHover={{ 
                  scale: 1.2,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
              >
                {item.icon}
              </motion.button>
            </TooltipTrigger>
            <TooltipContent side="left" className="bg-navy-800 text-white border-navy-600">
              {item.name}
            </TooltipContent>
          </Tooltip>
        ))}
      </TooltipProvider>
    </motion.div>
  );
  
  // Mobile menu - now toggling from the right
  const MobileDock = () => (
    <Sheet>
      <SheetTrigger asChild>
        <motion.button 
          className="fixed right-4 top-4 z-50 p-2 rounded-full bg-navy-800/80 backdrop-blur-sm border border-navy-600 text-white"
          whileHover={{ scale: 1.1 }}
        >
          <Menu />
        </motion.button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-navy-800/95 backdrop-blur-md text-white border-l border-navy-600 w-[200px] p-0">
        <div className="flex flex-col gap-2 p-4">
          <h2 className="text-xl font-bold mb-4 text-gold-400 font-serif">Navigation</h2>
          {navItems.map((item) => (
            <button
              key={item.sectionId}
              onClick={() => {
                scrollToSection(item.sectionId);
                document.querySelector('[data-state="open"]')?.setAttribute('data-state', 'closed');
              }}
              className={cn(
                "flex items-center gap-3 py-2 px-3 rounded-md transition-colors",
                activeSection === item.sectionId 
                  ? "bg-gold-400 text-navy-900" 
                  : "hover:bg-navy-700"
              )}
            >
              <span>{item.icon}</span>
              <span>{item.name}</span>
            </button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );

  return isMobile ? <MobileDock /> : <DesktopDock />;
};

export default DockSidebar;
