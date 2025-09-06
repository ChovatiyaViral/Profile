import { motion } from 'framer-motion';
import { User, Award, Briefcase, MapPin } from 'lucide-react';
import { contactInfo } from '../data/social';

const About = () => {
  
  const stats = [
    {
      icon: Briefcase,
      label: 'Years of Experience',
      value: '5+',
    },
    {
      icon: Award,
      label: 'Projects Completed',
      value: '20+',
    },
    {
      icon: User,
      label: 'Happy Clients',
      value: '15+',
    },
    {
      icon: MapPin,
      label: 'Locations',
      value: '4+',
    },
  ];

  return (
    <section id="about" className="section-padding bg-white dark:bg-dark-900">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Frontend-focused Software Engineer with nearly 5 years of experience in engineering 
            performant and responsive UIs for cross-domain web applications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Professional Summary
                </h3>
                <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                  <p>
                    I specialize in leveraging modern frameworks to ensure pixel-perfect precision, 
                    accessibility compliance, and multi-device consistency across high-traffic platforms.
                  </p>
                  <p>
                    My expertise includes driving full-stack integration workflows with REST APIs, 
                    Shopify APIs, and custom CMS solutions to enable real-time collaboration, 
                    seamless content rendering, and user authentication.
                  </p>
                  <p>
                    I architect modular, scalable, and maintainable component libraries—reducing 
                    technical debt and accelerating feature delivery cycles for B2B SaaS and 
                    domain-specific solutions.
                  </p>
                </div>
              </div>

              {/* Key Achievements */}
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Key Achievements
                </h4>
                <ul className="space-y-3">
                  {[
                    'Led end-to-end frontend development for greenfield projects like Meeko World and Duncan Taylor Dashboard',
                    'Implemented real-time and dynamic user engagement features including live classrooms and interactive dashboards',
                    'Delivered enterprise-grade dashboards for logistics, hospitality, and liquor sales industries',
                    'Balanced brand aesthetics with system performance while adhering to modern frontend architecture standards'
                  ].map((achievement, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3"
                    >
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div className="pt-6 border-t border-gray-200 dark:border-dark-700">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Get In Touch
                </h4>
                <div className="space-y-2 text-gray-600 dark:text-gray-300">
                  <p className="flex items-center space-x-2">
                    <MapPin size={16} className="text-primary-500" />
                    <span>{contactInfo.location}</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <Briefcase size={16} className="text-primary-500" />
                    <span>Open to new opportunities</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Stats & Photo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-gray-50 dark:bg-dark-800 rounded-xl"
                >
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <stat.icon size={24} className="text-primary-600 dark:text-primary-400" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Professional Photo */}
            <div className="text-center">
              <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-primary-200 dark:border-primary-800 shadow-lg">
                <img 
                  src="/images/profestional_img.jpg" 
                  alt="Viral Chovatiya - Professional Photo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
