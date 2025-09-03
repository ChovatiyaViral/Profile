import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, ExternalLink } from 'lucide-react';
import { socialLinks, contactInfo } from '../data/social';

const Contact = () => {

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: contactInfo.phone,
      href: `tel:${contactInfo.phone}`,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: contactInfo.location,
      href: '#',
    },
  ];

  return (
    <section id="contact" className="section-padding bg-white dark:bg-dark-900">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a chat about technology and development.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  Contact Information
                </h3>
                
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={method.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-dark-800 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors duration-200"
                  >
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center">
                      <method.icon size={20} className="text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        {method.label}
                      </p>
                      <a
                        href={method.href}
                        className="text-gray-900 dark:text-white font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                      >
                        {method.value}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  Connect with me
                </h3>
                
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-dark-800 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-700 transition-all duration-200 group"
                    >
                      <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center group-hover:bg-primary-200 dark:group-hover:bg-primary-800/30 transition-colors duration-200">
                        {social.name === 'LinkedIn' ? (
                          <Linkedin size={18} className="text-primary-600 dark:text-primary-400" />
                        ) : (
                          <ExternalLink size={18} className="text-primary-600 dark:text-primary-400" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                          {social.name}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {social.name === 'LinkedIn' ? 'Connect professionally' : 'Get in touch'}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="md:col-span-2">
              <div className="bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-xl p-6 border border-primary-100 dark:border-primary-800">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Let's work together
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  I'm currently available for freelance work, full-time positions, and exciting project collaborations. 
                  Whether you have a specific project in mind or just want to explore possibilities, 
                  I'd love to hear from you.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
