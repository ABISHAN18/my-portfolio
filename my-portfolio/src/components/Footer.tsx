import React from 'react';
import { cn } from '@/lib/utils';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={cn("bg-navy-900 text-white py-8", className)}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Social Links Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/abishan-rajendran-493726342" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-400 hover:text-gold-300 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com/ABISHAN18"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-400 hover:text-gold-300 transition-colors"
                aria-label="GitHub Profile"
              >
                <FaGithub size={24} />
              </a>
            </div>
          </div>

          {/* Navigation Links Section */}
          <div className="flex flex-col items-center md:items-center">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-center md:text-left">
              <li>
                <a href="#home" className="text-navy-300 hover:text-gold-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="text-navy-300 hover:text-gold-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#about" className="text-navy-300 hover:text-gold-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-navy-300 hover:text-gold-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <p className="text-navy-300 text-sm">Email: abishaan18@gmail.com</p>
            <p className="text-navy-300 text-sm mt-1">Phone: +94(74)2721630 </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-navy-700 flex flex-col items-center">
          <p className="text-sm">
            © {2025} Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;