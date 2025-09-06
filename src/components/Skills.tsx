import { motion } from 'framer-motion';
import { Code, Globe, Palette, Server, Database, Wrench, Zap, ShoppingCart, Calendar, Wifi, FileCode, Box, Package } from 'lucide-react';
import { skills } from '../data/skills';

const Skills = () => {
  // Icon mapping for skills
  const iconMap: { [key: string]: React.ComponentType<any> } = {
    Code,
    Globe,
    Palette,
    Server,
    Database,
    Tool: Wrench,
    Zap,
    ShoppingCart,
    Calendar,
    Wifi,
    FileCode,
    Box,
    Cube: Package,
  };

  const categories = [
    { id: 'frontend', name: 'Frontend Technologies', color: 'primary' },
    { id: 'backend', name: 'Backend & State Management', color: 'emerald' },
    { id: 'tools', name: 'Tools & APIs', color: 'blue' },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'expert':
        return 'bg-green-500';
      case 'advanced':
        return 'bg-blue-500';
      case 'intermediate':
        return 'bg-yellow-500';
      case 'beginner':
        return 'bg-gray-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getLevelText = (level: string) => {
    switch (level) {
      case 'expert':
        return 'Expert';
      case 'advanced':
        return 'Advanced';
      case 'intermediate':
        return 'Intermediate';
      case 'beginner':
        return 'Beginner';
      default:
        return 'Beginner';
    }
  };

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            A comprehensive set of technologies and tools I use to build modern, 
            scalable web applications with focus on performance and user experience.
          </p>
        </motion.div>

        <div className="space-y-12">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
                {category.name}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {skills
                  .filter(skill => skill.category === category.id)
                  .map((skill, skillIndex) => {
                    const IconComponent = iconMap[skill.icon];
                    return (
                      <motion.div
                        key={skill.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5, scale: 1.05 }}
                        className="group"
                      >
                        <div className="card p-6 text-center hover:shadow-xl transition-all duration-300">
                          <div className="w-16 h-16 bg-gray-100 dark:bg-dark-700 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/20 transition-colors duration-200">
                            {IconComponent && (
                              <IconComponent 
                                size={28} 
                                className="text-gray-600 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200" 
                              />
                            )}
                          </div>
                          
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                            {skill.name}
                          </h4>
                          
                          <div className="flex items-center justify-center space-x-2">
                            <div className={`w-2 h-2 rounded-full ${getLevelColor(skill.level)}`} />
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                              {getLevelText(skill.level)}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white dark:bg-dark-900 rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Core Competencies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-gray-600 dark:text-gray-300">
              {[
                'User Experience Design',
                'Agile Development Methodologies',
                'Cross-Platform Development',
                'Performance Optimization Techniques',
                'Responsive Web Design',
                'API Development and Integration',
                'E-commerce Solutions',
                'Content Management Systems',
                'Real-time Data Processing',
                'Scalable Application Architecture'
              ].map((competency, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-2"
                >
                  <div className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                  <span>{competency}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
