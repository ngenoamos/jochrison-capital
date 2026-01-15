import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Code, Database, Cloud, TrendingUp, Users, Award, CheckCircle, ArrowRight, MessageCircle } from 'lucide-react';

export default function JochrisonWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedSystem, setSelectedSystem] = useState<any>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const systems = [
    {
      id: 1,
      name: "Weighbridge System",
      client: "KeNHA",
      description: "Advanced weighbridge management system for Kenya National Highways Authority, handling vehicle weight compliance and reporting.",
      features: ["Real-time weight monitoring", "Automated reporting", "Compliance tracking", "Data analytics dashboard"],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80"
    },
    {
      id: 2,
      name: "Transport Agency Management System",
      client: "Tai Plus",
      description: "Comprehensive transport management solution for fleet operations, route optimization, and driver management.",
      features: ["Fleet tracking", "Route optimization", "Driver management", "Maintenance scheduling"],
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80"
    },
    {
      id: 3,
      name: "Sacco System",
      client: "E-Sacco",
      description: "Complete financial management system for savings and credit cooperatives with member portals and mobile banking.",
      features: ["Member management", "Loan processing", "Mobile banking", "Financial reporting"],
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80"
    },
    {
      id: 4,
      name: "Customer Service Management",
      client: "Haco Industries",
      description: "Enterprise-grade customer service platform with ticketing, CRM, and analytics for improved customer satisfaction.",
      features: ["Ticket management", "CRM integration", "Performance analytics", "Multi-channel support"],
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80"
    },
    {
      id: 5,
      name: "Electronic Voting System",
      client: "TRA",
      description: "Secure, transparent electronic voting platform with real-time results and comprehensive audit trails.",
      features: ["Secure authentication", "Real-time results", "Audit trails", "Mobile voting"],
      image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=800&q=80"
    },
    {
      id: 6,
      name: "UGPay Revenue Collection",
      client: "Uasin Gishu County",
      description: "Digital revenue collection system for county government with mobile payments and real-time reporting.",
      features: ["Mobile payments", "Revenue tracking", "Automated receipts", "Analytics dashboard"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80"
    }
  ];

  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: "SOFTWARE DEVELOPMENT",
      description: "Custom enterprise systems, web and mobile applications tailored to your specific business needs. We build scalable, secure solutions that grow with your organization.",
      highlights: ["Web Applications", "Mobile Apps", "Enterprise Systems", "API Development"]
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "DATA SCIENCE & AI",
      description: "Advanced analytics, machine learning models, and intelligent dashboard solutions for data-driven decision making and predictive insights.",
      highlights: ["Predictive Analytics", "AI Models", "Business Intelligence", "Data Visualization"]
    },
    {
      icon: <Cloud className="w-12 h-12" />,
      title: "DIGITAL SOLUTIONS",
      description: "Business process automation, cloud integration, and digital transformation services to streamline operations and boost efficiency.",
      highlights: ["Process Automation", "Cloud Migration", "System Integration", "Digital Strategy"]
    }
  ];

  const stats = [
    { number: "30+", label: "Technology Experts" },
    { number: "50+", label: "Projects Delivered" },
    { number: "15+", label: "Industries Served" },
    { number: "99%", label: "Client Satisfaction" }
  ];

  const technologies = [
    "React", "Node.js", "Python", "Django", "PostgreSQL", "MongoDB",
    "AWS", "Azure", "Docker", "Kubernetes", "TensorFlow", "Power BI"
  ];

  return (
    <div className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white min-h-screen">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/95 backdrop-blur-lg shadow-lg shadow-blue-500/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/50">
                <span className="text-2xl font-black text-slate-950">J</span>
              </div>
              <div>
                <div className="text-2xl font-bold tracking-tight">JOCHRISON</div>
                <div className="text-xs tracking-widest text-cyan-400">Capital Limited</div>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-8">
              {['Home', 'About', 'Services', 'Systems', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-slate-300 hover:text-cyan-400 transition-colors font-medium relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-950/98 backdrop-blur-lg border-t border-cyan-500/20">
            <nav className="flex flex-col py-4 px-6 gap-4">
              {['Home', 'About', 'Services', 'Systems', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-slate-300 hover:text-cyan-400 transition-colors py-2"
                  onClick={() => {
                    setMobileMenuOpen(false);
                  }}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDYsIDIwMiwgMjU1LCAwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold mb-6">
                🚀 Your Technology Partner
              </div>
              <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
                Let's build<br />
                your next<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                  BIG IDEA
                </span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                The technology partner that empowers creativity, insight and innovation. 
                We transform your vision into powerful digital solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2"
                >
                  Start Your Project <ArrowRight size={20} />
                </a>
                <a
                  href="#systems"
                  className="px-8 py-4 border-2 border-cyan-500 rounded-full font-bold text-lg hover:bg-cyan-500/10 transition-all duration-300 flex items-center gap-2"
                >
                  View Our Work <ChevronRight size={20} />
                </a>
              </div>
            </div>

            <div className="relative hidden md:block">
              <div className="relative w-full h-[500px]">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
                  alt="Technology"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl shadow-cyan-500/20"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-2 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="text-slate-400 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Do</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              We deliver cutting-edge technology solutions that drive business growth and digital transformation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-2"
              >
                <div className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">{service.title}</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">{service.description}</p>
                <div className="space-y-2">
                  {service.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-slate-400">
                      <CheckCircle size={16} className="text-cyan-400" />
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Systems Section */}
      <section id="systems" className="py-20 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Systems We Have <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Made</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Proven solutions deployed across government, finance, and enterprise sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {systems.map((system) => (
              <div
                key={system.id}
                className="group bg-slate-900/70 backdrop-blur-sm border border-cyan-500/20 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 cursor-pointer"
                onClick={() => setSelectedSystem(system)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={system.image}
                    alt={system.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                  <div className="absolute top-4 right-4 px-3 py-1 bg-cyan-500 text-slate-950 text-xs font-bold rounded-full">
                    {system.client}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-cyan-400 group-hover:text-cyan-300">
                    {system.name}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {system.description}
                  </p>
                  <button className="text-cyan-400 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                    View Details <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Detail Modal */}
      {selectedSystem && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedSystem(null)}
        >
          <div
            className="bg-slate-900 border border-cyan-500/30 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64">
              <img
                src={selectedSystem.image}
                alt={selectedSystem.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
              <button
                onClick={() => setSelectedSystem(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-slate-950/80 backdrop-blur rounded-full flex items-center justify-center hover:bg-slate-800 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-3xl font-bold text-cyan-400">{selectedSystem.name}</h3>
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm font-bold rounded-full">
                  {selectedSystem.client}
                </span>
              </div>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                {selectedSystem.description}
              </p>
              <h4 className="text-xl font-bold mb-4 text-white">Key Features</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {selectedSystem.features.map((feature: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-slate-950/50 rounded-lg">
                    <CheckCircle size={20} className="text-cyan-400 mt-1 flex-shrink-0" />
                    <span className="text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Technologies Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Technology Stack</span>
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-slate-900/50 border border-cyan-500/20 rounded-full hover:border-cyan-500/50 hover:bg-slate-900 transition-all duration-300 font-semibold"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Jochrison Capital</span>
              </h2>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                We are a technology partner dedicated to building innovative solutions that drive business 
                growth and transformation. With expertise across multiple industries, we deliver custom 
                software, data science, and digital solutions that create real impact.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { icon: <Award />, text: "Award-winning solutions across East Africa" },
                  { icon: <Users />, text: "30+ experienced technology experts" },
                  { icon: <TrendingUp />, text: "Driving digital transformation since 2015" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="text-cyan-400">{item.icon}</div>
                    <span className="text-slate-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl shadow-cyan-500/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Amazing</span>
            </h2>
            <p className="text-xl text-slate-400">Get in touch with our team today</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-8 bg-slate-900/50 border border-cyan-500/20 rounded-2xl hover:border-cyan-500/50 transition-all">
              <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="text-cyan-400" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-cyan-400">Email</h3>
              <a href="mailto:info@jochrisoncapital.com" className="text-slate-300 hover:text-cyan-400 transition-colors">
                info@jochrisoncapital.com
              </a>
            </div>

            <div className="text-center p-8 bg-slate-900/50 border border-cyan-500/20 rounded-2xl hover:border-cyan-500/50 transition-all">
              <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="text-cyan-400" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-cyan-400">Phone</h3>
              <div className="text-slate-300">
                <div>0725 463 120</div>
                <div>0715 410 907</div>
              </div>
            </div>

            <div className="text-center p-8 bg-slate-900/50 border border-cyan-500/20 rounded-2xl hover:border-cyan-500/50 transition-all">
              <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="text-cyan-400" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-cyan-400">Location</h3>
              <div className="text-slate-300">Nairobi, Kenya</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-cyan-500/20 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
                  <span className="text-xl font-black text-slate-950">J</span>
                </div>
                <div>
                  <div className="text-xl font-bold">JOCHRISON</div>
                  <div className="text-xs text-cyan-400">Capital Limited</div>
                </div>
              </div>
              <p className="text-slate-400 mb-4">
                The technology partner that empowers creativity, insight and innovation.
              </p>
              <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                SMART SOFTWARE • MEANINGFUL INSIGHTS • REAL IMPACT
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-cyan-400">Quick Links</h4>
              <div className="space-y-2">
                {['Home', 'About', 'Services', 'Systems', 'Contact'].map((link) => (
                  <div key={link}>
                    <a href={`#${link.toLowerCase()}`} className="text-slate-400 hover:text-cyan-400 transition-colors">
                      {link}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-cyan-400">Services</h4>
              <div className="space-y-2 text-slate-400">
                <div>Software Development</div>
                <div>Data Science & AI</div>
                <div>Digital Solutions</div>
                <div>Technology Consulting</div>
              </div>
            </div>
          </div>

          <div className="border-t border-cyan-500/20 pt-8 text-center text-slate-400">
            <p>&copy; 2023 Jochrison Capital Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/254725463120?text=Hi%20Jochrison%20Capital%20Limited%2C%20I%20saw%20your%20website%20and%20would%20like%20to%20discuss%20a%20project."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 z-40 group"
      >
        <MessageCircle size={32} className="text-white" />
        <span className="absolute right-full mr-3 bg-slate-900 text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Chat with us!
        </span>
      </a>
    </div>
  );
}
