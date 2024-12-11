import React from 'react';
import { motion } from 'framer-motion';
import bg from '../image/1.jpg'
import prof from '../image/profile.jpg'

const Home = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-500 to-lightblue-500 text-white py-20">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}></div>
        <div className="relative container mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-extrabold mb-4"
          >
            Passion for Code, Drive for Impact
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="text-lg md:text-xl mb-8"
          >
            I'm a passionate software developer, data science enthusiast, and lifelong learner. Let's build something amazing together!
          </motion.p>
          <motion.a
            href="#about"
            className="bg-black text-white px-8 py-3 rounded-full shadow-md transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}  // Optional: Add tap effect
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Learn More
          </motion.a>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold text-blue-600 mb-6"
          >
            About Me
          </motion.h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <motion.img
              src={prof}
              alt="Profile"
              className="rounded-full w-40 h-40 object-cover"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            />
            <div className="max-w-xl">
              <p className="text-gray-700 text-lg">
                Hi, I'm Dheeraj Kumar, a software developer with a passion for building innovative projects. I specialize in web development, machine learning, and creating solutions that make a difference. When I'm not coding, you can find me exploring new technologies and cooking delicious meals!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Expertise Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold text-blue-600 mb-6"
          >
            Skills & Expertise
          </motion.h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Skill 1 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <i className="fab fa-react text-4xl text-blue-500 mb-4"></i>
              <h3 className="text-xl font-semibold text-blue-600">React</h3>
            </motion.div>
            {/* Skill 2 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <i className="fab fa-python text-4xl text-yellow-500 mb-4"></i>
              <h3 className="text-xl font-semibold text-blue-600">Python</h3>
            </motion.div>
            {/* Skill 3 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <i className="fab fa-js-square text-4xl text-yellow-500 mb-4"></i>
              <h3 className="text-xl font-semibold text-blue-600">JavaScript</h3>
            </motion.div>
            {/* Skill 4 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <i className="fas fa-database text-4xl text-green-500 mb-4"></i>
              <h3 className="text-xl font-semibold text-blue-600">SQL</h3>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-lightblue-500">
        <div className="container mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold text-black mb-6"
          >
            Upcoming Projects..
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Project 1 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src="https://via.placeholder.com/500"
                alt="Project 1"
                className="w-full h-64 object-cover mb-4 rounded"
              />
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Recipe Sharing Platform</h3>
              <p className="text-gray-600">A platform to share and explore amazing recipes from around the world.</p>
            </motion.div>
            {/* Project 2 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src="https://via.placeholder.com/500"
                alt="Project 3"
                className="w-full h-64 object-cover mb-4 rounded"
              />
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Fitness Tracker</h3>
              <p className="text-gray-600">Track your workouts, nutrition, and progress with interactive graphs.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-lightblue-500 to-blue-500 text-black text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl font-semibold mb-4"
        >
          Ready to Work Together?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-lg mb-8"
        >
          Let's turn your ideas into reality. Reach out and let's create something amazing together!
        </motion.p>
        <motion.a
          href="#contact"
          className="bg-blue-200 text-gray-900 px-8 py-3 rounded-full shadow-md transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }} // Optional: Add tap effect
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Contact Me
        </motion.a>
      </section>
    </div>
  );
};

export default Home;
