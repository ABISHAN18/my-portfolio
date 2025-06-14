import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Github, Linkedin, Mail } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Debug all environment variables
    console.log('All environment variables:', import.meta.env);

    // Debug specific environment variables
    const serviceId = "service_b5lro0c";
    const templateId = "template_0ns3f6c";
    const publicKey = "GiCCYHtkwS5pUsYpA";

    console.log('Service ID:', serviceId);
    console.log('Template ID:', templateId);
    console.log('Public Key:', publicKey);

    // Validate environment variables
    if (!serviceId || !templateId || !publicKey) {
      toast({
        title: 'Error',
        description: 'Email service configuration is missing. Please contact the administrator.',
        variant: 'destructive',
      });
      setIsSubmitting(false);
      return;
    }

    // EmailJS send email using the environment variables
    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        publicKey
      )
      .then(
        () => {
          toast({
            title: 'Message sent!',
            description: 'Thank you for your message. I’ll get back to you soon.',
          });
          // Reset form
          setFormData({
            name: '',
            email: '',
            message: '',
          });
          setIsSubmitting(false);
        },
        (error) => {
          toast({
            title: 'Error',
            description: 'Failed to send message. Please try again later.',
            variant: 'destructive',
          });
          console.error('EmailJS error:', error);
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contact" className="section-padding bg-navy-50">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6 font-serif">
          Get in <span className="text-navy-700">Touch</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div>
            <h3 className="text-xl font-bold text-navy-800 mb-4">Contact Information</h3>
            <p className="text-gray-700 mb-6">
              Feel free to reach out to me with any questions or opportunities. 
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-navy-100 flex items-center justify-center mr-4">
                  <Mail className="text-navy-700" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-navy-900">Email</h4>
                  <a href="mailto:abishaan18@gmail.com" className="text-navy-600 hover:text-navy-800 transition-colors">
                    abishaan18@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-navy-100 flex items-center justify-center mr-4">
                  <Linkedin className="text-navy-700" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-navy-900">LinkedIn</h4>
                  <a 
                    href="https://www.linkedin.com/in/abishan-rajendran-493726342" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-navy-600 hover:text-navy-800 transition-colors"
                  >
                    linkedin.com/in/AbishanRajendran
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-navy-100 flex items-center justify-center mr-4">
                  <Github className="text-navy-700" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-navy-900">GitHub</h4>
                  <a 
                    href="https://github.com/ABISHAN18"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-navy-600 hover:text-navy-800 transition-colors"
                  >
                    github.com/ABISHAN18
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-navy-800 mb-4">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-[150px]"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-navy-700 hover:bg-navy-800"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;