'use client';

import { useState } from 'react';
import { FaGithub, FaLinkedin, FaYoutube, FaEnvelope, FaMapMarkerAlt, FaDiscord } from 'react-icons/fa';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      // Replace with your actual Formspree form ID
      const response = await fetch('https://formspree.io/f/xwpoqvyo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        setErrorMessage('There was an error submitting the form. Please try again later.');
      }
    } catch (error) {
      setErrorMessage('There was an error submitting the form. Please try again later.');
    }

    setIsSubmitting(false);
  };

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-primary-700 dark:text-primary-300 mb-4">Contact Me</h1>
      
      <section className="space-y-4">
        <p className="text-lg">
          Thank you for your interest in getting in touch with me. Whether you have a question about my work,
          want to discuss a potential collaboration, or just want to say hello, I'd be happy to hear from you.
        </p>
      </section>
      
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-primary-700 dark:text-primary-300">Get in Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="text-primary-600 dark:text-primary-400 mt-1">
                <FaEnvelope size={20} />
              </div>
              <div>
                <h3 className="font-medium">Email</h3>
                <a 
                  href="mailto:radovandk@gmail.com" 
                  className="text-primary-600 dark:text-primary-400 hover:underline"
                >
                  radovandk@gmail.com
                </a>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Feel free to email me directly for any inquiries.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-primary-600 dark:text-primary-400 mt-1">
                <FaLinkedin size={20} />
              </div>
              <div>
                <h3 className="font-medium">LinkedIn</h3>
                <a 
                  href="https://linkedin.com/in/radovan-draskovic" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-600 dark:text-primary-400 hover:underline"
                >
                  radovan-draskovic
                </a>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Connect with me professionally on LinkedIn.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-primary-600 dark:text-primary-400 mt-1">
                <FaGithub size={20} />
              </div>
              <div>
                <h3 className="font-medium">GitHub</h3>
                <a 
                  href="https://github.com/Drashko73" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-600 dark:text-primary-400 hover:underline"
                >
                  Drashko73
                </a>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Check out my code and projects on GitHub.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-primary-600 dark:text-primary-400 mt-1">
                <FaYoutube size={20} />
              </div>
              <div>
                <h3 className="font-medium">YouTube</h3>
                <a 
                  href="https://www.youtube.com/@Drashko73" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-600 dark:text-primary-400 hover:underline"
                >
                  @Drashko73
                </a>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Subscribe to my YouTube channel.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-primary-600 dark:text-primary-400 mt-1">
                <FaDiscord size={20} />
              </div>
              <div>
                <h3 className="font-medium">Discord Username</h3>
                <p className="text-primary-600 dark:text-primary-400">
                  drashko
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Ping me on Discord for quick chats.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-primary-600 dark:text-primary-400 mt-1">
                <FaMapMarkerAlt size={20} />
              </div>
              <div>
                <h3 className="font-medium">Location</h3>
                <p className="text-gray-800 dark:text-gray-200">
                  Kragujevac, Serbia
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Available for remote work and collaborations worldwide.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium mb-4">Send Me a Message</h3>
            {isSubmitted ? (
              <div className="p-4 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-md">
                <p>Thank you for your message! I'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700"
                    spellCheck="false"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700"
                    spellCheck="false"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700"
                    spellCheck="false"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700"
                    spellCheck="false"
                    required
                  />
                </div>
                
                {errorMessage && (
                  <div className="p-3 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-md text-sm">
                    {errorMessage}
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="button-primary w-full flex justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            )}            <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              <p>Alternatively, you can email me directly at <a href="mailto:radovandk@gmail.com" className="text-primary-600 dark:text-primary-400 hover:underline">radovandk@gmail.com</a>.</p>
            </div>
          </div>
        </div>
      </section>      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-primary-700 dark:text-primary-300">Frequently Asked Questions</h2>
        
        <div className="space-y-2">
          {/* Using centralized state management so only one FAQ can be open at a time */}
          {(() => {
            // Define FAQs array
            const faqs = [
              {
                question: "What is your availability for new projects?",
                answer: "I'm currently accepting select freelance projects and collaborations. My availability varies throughout the year, so please reach out with details about your project, and I'll let you know my current schedule."
              },
              {
                question: "Do you work remotely?",
                answer: "Yes, I work remotely with clients and teams from around the world. I'm comfortable with various collaboration tools and can adapt to your team's workflow."
              },
              {
                question: "How quickly do you respond to inquiries?",
                answer: "I typically respond to emails and messages within 24-48 hours during weekdays. For urgent matters, please mention the urgency in your message subject."
              }
            ];
            
            // Single state to track which FAQ is expanded (null means all collapsed)
            const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
            
            // Toggle function - if the same FAQ is clicked, collapse it; otherwise expand the clicked one
            const toggleFAQ = (index: number) => {
              setExpandedIndex(expandedIndex === index ? null : index);
            };
            
            return faqs.map((faq, index) => {
              const isExpanded = expandedIndex === index;
              
              return (
                <div 
                  key={index}
                  className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left p-4 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-primary-300 dark:focus:ring-primary-700"
                    aria-expanded={isExpanded}
                  >
                    <span className="font-medium">{faq.question}</span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-5 w-5 text-primary-600 dark:text-primary-400 transition-transform duration-200 ${isExpanded ? 'transform rotate-180' : ''}`} 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96' : 'max-h-0'}`}
                  >
                    <div className="p-4 pt-2 border-t border-gray-100 dark:border-gray-800">
                      <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            });
          })()}
        </div>
      </section>
    </div>
  );
}
