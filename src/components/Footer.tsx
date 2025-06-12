import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Linkedin, Github, Mail, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="bg-black border-t border-gray-800 pt-16 pb-8 text-gray-300"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-4">NULLBOTS</h3>
            <p className="text-gray-400 max-w-xs">
              A team of anonymous students with a passion for delivering exceptional digital solutions.
            </p>
            <div className="flex space-x-4 pt-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, color: '#1DA1F2' }}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, color: '#E4405F' }}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, color: '#0A66C2' }}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, color: '#6e5494' }}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </motion.a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Services', 'Portfolio', 'Team', 'Contact'].map((item) => (
                <motion.li key={item} whileHover={{ x: 5 }}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center"
                  >
                    <ArrowRight size={14} className="mr-2" />
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                'Web Development',
                'UI/UX Designing',
                'Game Development',
                'App Development',
                'IOT Solutions',
                'AI & ML Solutions',
                '3D Modelling',
              ].map((service) => (
                <motion.li key={service} whileHover={{ x: 5 }}>
                  <Link
                    to="/services"
                    className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center"
                  >
                    <ArrowRight size={14} className="mr-2" />
                    {service}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">Subscribe</h4>
            <p className="text-gray-400">Subscribe to get the latest updates.</p>
            <form className="mt-4 flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-900 border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white"
                required
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-cyan-500 hover:bg-cyan-600 text-black font-medium rounded-md px-4 py-2 transition-colors"
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} NULLBOTS. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="text-gray-500 hover:text-gray-400 text-sm">
              Privacy Policy
            </Link>
            <Link to="#" className="text-gray-500 hover:text-gray-400 text-sm">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;