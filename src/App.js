import React, { useState } from 'react';
import { Mail, Phone, Github, MapPin, Calendar, User, Code, Briefcase, GraduationCap, Award, Globe } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">Jannatun Naim Mitu</h1>
            <div className="hidden md:flex space-x-8">
              {['about', 'experience', 'education', 'skills', 'project', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors ${
                    activeSection === section 
                      ? 'text-blue-600 border-b-2 border-blue-600' 
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-20 pb-16 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
        <div className="container mx-auto px-6 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-8 flex items-center justify-center backdrop-blur-sm overflow-hidden">
              <img
                src="/Mitu.jpg"
                alt="Jannatun Naim Mitu"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <h1 className="text-5xl font-bold mb-4">Jannatun Naim Mitu</h1>
            <p className="text-2xl mb-6 text-blue-100">Software Developer</p>
            <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Passionate Software Developer with experience in PHP Laravel development. 
              Currently working at STIT BD, dedicated to creating innovative software solutions 
              and continuously expanding my technical expertise.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:jannatunmitu201@gmail.com" className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg transition-all backdrop-blur-sm flex items-center gap-2">
                <Mail size={20} />
                Get In Touch
              </a>
              <a href="https://github.com/jannatun98" className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg transition-all backdrop-blur-sm flex items-center gap-2">
                <Github size={20} />
                View GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            <Briefcase className="inline-block mr-3 text-blue-600" />
            Work Experience
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {/* Current Job */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl shadow-sm border-l-4 border-blue-500">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">Software Developer</h3>
                    <p className="text-xl text-blue-600 font-semibold">STIT BD</p>
                  </div>
                  <span className="text-gray-600 font-medium mt-2 md:mt-0">Aug 2023 - Present</span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Currently working as a Software Developer, contributing to various software development projects 
                  and enhancing my skills in modern software technologies.
                </p>
              </div>

              {/* Internship */}
              <div className="bg-gray-50 p-8 rounded-xl shadow-sm border-l-4 border-gray-400">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">Jr Software Developer (Intern)</h3>
                    <p className="text-xl text-gray-600 font-semibold">Kodeeo Limited</p>
                  </div>
                  <span className="text-gray-600 font-medium mt-2 md:mt-0">Jan 2023 - Apr 2023</span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Gained practical experience in software development as an intern, working on real-world projects 
                  and learning industry best practices.
                </p>
              </div>

              {/* Bootcamp */}
              <div className="bg-green-50 p-8 rounded-xl shadow-sm border-l-4 border-green-500">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">Web Development Bootcamp</h3>
                    <p className="text-xl text-green-600 font-semibold">Kodeeo Limited</p>
                  </div>
                  <span className="text-gray-600 font-medium mt-2 md:mt-0">Sep 2022 - Dec 2022</span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Intensive training in PHP Laravel framework, gaining hands-on experience in modern web development practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            <GraduationCap className="inline-block mr-3 text-blue-600" />
            Education
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Bachelor's Degree */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-500">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Bachelor of Computer Science & Engineering</h3>
                  <p className="text-xl text-blue-600 font-semibold">International University of Business Agriculture & Technology</p>
                </div>
                <span className="text-gray-600 font-medium mt-2 md:mt-0">2018 - 2023</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">
                  CGPA: 3.27/4.00
                </span>
              </div>
            </div>

            {/* HSC */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-green-500">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Higher Secondary Certificate (H.S.C)</h3>
                  <p className="text-xl text-green-600 font-semibold">Milestone College, Dhaka</p>
                </div>
                <span className="text-gray-600 font-medium mt-2 md:mt-0">2017</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">
                  GPA: 4.08/5.00
                </span>
                <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full">Science Group</span>
              </div>
            </div>

            {/* SSC */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-purple-500">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Secondary School Certificate (S.S.C)</h3>
                  <p className="text-xl text-purple-600 font-semibold">Holy Child School and College</p>
                </div>
                <span className="text-gray-600 font-medium mt-2 md:mt-0">2015</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-semibold">
                  GPA: 4.44/5.00
                </span>
                <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full">Science Group</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            <Code className="inline-block mr-3 text-blue-600" />
            Skills & Languages
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Technical Skills */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl shadow-sm">
                <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                  <Code className="mr-3 text-blue-600" />
                  Technical Skills
                </h3>
                <div className="space-y-4">
                  {[
                    { skill: 'PHP (Laravel)', level: 85 },
                    { skill: 'HTML & CSS', level: 90 },
                    { skill: 'Bootstrap', level: 80 },
                    { skill: 'OOP PHP', level: 75 },
                    { skill: 'MySQL', level: 80 },
                    { skill: 'GitHub', level: 85 },
                    { skill: 'Microsoft Office', level: 90 }
                  ].map((item) => (
                    <div key={item.skill}>
                      <div className="flex justify-between mb-2">
                        <span className="font-semibold text-gray-700">{item.skill}</span>
                        <span className="text-gray-600">{item.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-700"
                          style={{ width: `${item.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-xl shadow-sm">
                <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                  <Globe className="mr-3 text-green-600" />
                  Languages
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                    <span className="font-semibold text-gray-700">Bengali</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">Native</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                    <span className="font-semibold text-gray-700">English</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">Excellent</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                    <span className="font-semibold text-gray-700">Hindi</span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">Excellent</span>
                  </div>
                </div>

                {/* Extracurricular */}
                <div className="mt-8">
                  <h4 className="text-lg font-bold mb-3 text-gray-800 flex items-center">
                    <Award className="mr-2 text-yellow-600" size={20} />
                    Extracurricular
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Active participant in various cultural programs at school, college, and university level, 
                    demonstrating strong communication and performance skills.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            <Mail className="inline-block mr-3" />
            Get In Touch
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-6">Let's Connect!</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                    <Mail className="text-white" size={24} />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href="mailto:jannatunmitu201@gmail.com" className="text-blue-100 hover:text-white transition-colors">
                        jannatunmitu201@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                    <Phone className="text-white" size={24} />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-blue-100">+880 1777121327</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                    <Github className="text-white" size={24} />
                    <div>
                      <p className="font-semibold">GitHub</p>
                      <a href="https://github.com/jannatun98" className="text-blue-100 hover:text-white transition-colors">
                        github.com/jannatun98
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                    <MapPin className="text-white mt-1" size={24} />
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-blue-100">Uttara, Dhaka, Bangladesh</p>
                      <p className="text-sm text-blue-200">Originally from Bogra</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Personal Info */}
              <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-6">About Me</h3>
                <div className="space-y-3 text-blue-100">
                  <div className="flex items-center gap-3">
                    <Calendar size={16} />
                    <span>Born: July 6, 1998</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <User size={16} />
                    <span>Nationality: Bangladeshi</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-4 h-4 bg-red-500 rounded-full"></span>
                    <span>Blood Group: AB+</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white/10 rounded-lg">
                  <p className="text-sm leading-relaxed">
                    I'm passionate about web development and always eager to learn new technologies. 
                    Currently focused on expanding my skills in modern web frameworks and contributing 
                    to innovative projects in the tech industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Jannatun Naim Mitu. Built with React and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;