import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Code, Database, Cloud, TrendingUp, Users, Award, CheckCircle, ArrowRight, MessageCircle, Briefcase, Globe, Shield } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';
import emailjs from '@emailjs/browser';


export default function JochrisonWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedSystem, setSelectedSystem] = useState<any>(null);
  const [legalModal, setLegalModal] = useState({ isOpen: false, type: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [demoModal, setDemoModal] = useState({ isOpen: false, videoUrl: '', title: '' });
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  
  // 1. Immediately show the "Thank You" state to the user (Better UX)
  setIsSubmitted(true);

  // 2. Send the actual email in the background
  emailjs.sendForm(
    'service_xe2wk2a', 
    'template_1p0bt0g', 
    e.currentTarget, 
    'HFgYhIowdW71TLJw4'
  )
  .then(() => {
    console.log('Success! Message sent to Jochrison Capital.');
  })
  .catch((error) => {
    console.error('Email failed to send:', error);
    // Optional: alert("Message failed, please try again.");
    // setIsSubmitted(false); 
  });
};

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
    "AWS", "Azure", "Docker", "Kubernetes", "TensorFlow", "Power BI", "C++", "PHP"
  ];

  return (
    <div className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white min-h-screen">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 z-[60] origin-left"
        style={{ scaleX: useScroll().scrollXProgress }}
      />
{/* Header + Ticker Wrapper */}
<div className="fixed top-0 w-full z-[100]">
  
  {/* 1. News Ticker (Stays at the very top) */}
  <div className="w-full bg-cyan-950/80 backdrop-blur-md border-b border-cyan-500/20 py-1.5 overflow-hidden">
    <motion.div 
      animate={{ x: [0, -1000] }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      className="flex whitespace-nowrap gap-10"
    >
      {[
        "🚀 PROJECT SUCCESS: Enterprise ERP deployed",
        "💎 CAPITAL: Jochrison investments reach $2M",
        "🌐 NETWORK: New infrastructure nodes active",
        "📈 GROWTH: 40% increase in efficiency",
      ].map((text, i) => (
        <span key={i} className="text-[9px] font-black uppercase tracking-[0.2em] text-cyan-400 flex items-center gap-2">
          <div className="w-1 h-1 bg-cyan-400 rounded-full" /> {text}
        </span>
      ))}
    </motion.div>
  </div>

  {/* 2. Main Navigation Bar */}
  <header className="w-full bg-slate-950/95 backdrop-blur-lg border-b border-white/5 shadow-2xl">
    <div className="max-w-7xl mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img 
            src="https://res.cloudinary.com/da8vqqciq/image/upload/v1768804258/logo.jpg" 
            alt="Logo" 
            className="w-12 h-12 rounded-full border border-cyan-500/30 object-cover"
          />
          <div>
            <div className="text-xl font-bold text-white tracking-tight">JOCHRISON</div>
            <div className="text-[10px] text-cyan-400 font-black tracking-widest uppercase">Capital Limited</div>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {['Home', 'About', 'Services', 'Systems', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-slate-300 hover:text-cyan-400 font-bold text-xs uppercase tracking-widest transition-colors">
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors relative z-[110]"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={28} className="text-cyan-400" /> : <Menu size={28} />}
        </button>
      </div>
    </div>

    {/* 3. Mobile Menu Dropdown (Logic inside Header) */}
    {mobileMenuOpen && (
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="md:hidden bg-slate-950 border-t border-cyan-500/20 px-6 py-8 shadow-3xl flex flex-col gap-6"
      >
        {['Home', 'About', 'Services', 'Systems', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setMobileMenuOpen(false)}
            className="text-2xl font-black text-white hover:text-cyan-400 transition-colors flex justify-between items-center group"
          >
            {item}
            <ChevronRight className="opacity-0 group-hover:opacity-100 text-cyan-400 transition-all" />
          </a>
        ))}
        <div className="pt-6 border-t border-white/5">
          <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-2">Direct Contact</p>
          <a href="tel:+254726096183" className="text-cyan-400 font-bold">+254 726 096183</a>
        </div>
      </motion.div>
    )}
  </header>
</div>

      {/* Partners / Client Logo Bar */}
      <div className="w-full bg-slate-1000/50 border-b border-cyan-500/10 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-slate-100 text-xl font-bold uppercase tracking-[0.3em] mb-10">
            Strategic Partners & Clients
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-100 grayscale hover:grayscale-0 transition-all duration-700">
            {/* Logos represented by stylized text - replace with <img> tags later if you have them */}
            <div className="flex flex-col items-center">
              <span className="text-2xl font-black tracking-tighter text-slate-300">KeNHA</span>
              <div className="h-1 w-full bg-cyan-500/30 mt-1"></div>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-black tracking-tighter text-slate-300">HACO</span>
              <div className="h-1 w-full bg-blue-500/30 mt-1"></div>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-black tracking-tighter text-slate-300">E-SACCO</span>
              <div className="h-1 w-full bg-purple-500/30 mt-1"></div>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-black tracking-tighter text-slate-300">TAI PLUS</span>
              <div className="h-1 w-full bg-cyan-500/30 mt-1"></div>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-black tracking-tighter text-slate-300">TRA</span>
              <div className="h-1 w-full bg-blue-500/30 mt-1"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Wrapper with Blueprint Grid */}
      <section id="home" className="min-h-screen flex flex-col relative overflow-hidden bg-[#030b29] font-['Inter']">
        
        {/* 1. NEWS TICKER (Above Header) */}
        {/* <div className="w-full bg-cyan-600/10 border-b border-cyan-500/20 py-2 relative z-[60] overflow-hidden">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap gap-10"
          >
            {[
              "🚀 PROJECT SUCCESS: Enterprise ERP deployed for logistics partner",
              "💎 CAPITAL: Jochrison investments reach $2M in local tech startups",
              "🌐 NETWORK: New infrastructure nodes active in Nairobi & Mombasa",
              "📈 GROWTH: 40% increase in system efficiency for fintech clients",
            ].map((text, i) => (
              <span key={i} className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400 flex items-center gap-2">
                <div className="w-1 h-1 bg-cyan-400 rounded-full" /> {text}
              </span>
            ))}
          </motion.div>
        </div> */}

        {/* 2. BLUEPRINT GRID & BACKGROUND GLOWS */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTSA0MCAwIEwgMCAwIDAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSg2LCAyMDIsIDI1NSwgMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] opacity-100"></div>
          <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]" />
        </div>

        {/* 3. THE OVAL BORDER FRAME */}
        <div className="absolute inset-10 border border-white/5 rounded-[100px] pointer-events-none z-10 hidden lg:block" />

        <div className="max-w-7xl mx-auto px-6 relative z-20 flex-1 flex items-center pt-20 pb-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-[10px] font-black mb-8 tracking-[0.2em] uppercase">
                <Briefcase size={12} /> Tech • Capital • Growth
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-[900] leading-[0.9] mb-8 tracking-[-0.05em] text-white">
                LET'S BUILD <br />
                YOUR NEXT <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">
                  BIG IDEA.
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-lg font-medium">
                Jochrison Capital empowers innovation through enterprise-grade software 
                development and strategic capital investment.
              </p>

            {/* Hero Buttons Container */}
            <div className="flex flex-wrap gap-4 relative z-30">
              {/* START YOUR PROJECT -> Scrolls to #contact */}
              <motion.a
                href="#contact"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "#22d3ee", // Cyan-400
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-slate-950 font-black rounded-xl transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)] cursor-pointer"
              >
                Start Your Project <ArrowRight size={20} />
              </motion.a>

              {/* VIEW WORK -> Scrolls to #systems */}
              <motion.a
                href="#systems"
                whileHover={{ 
                  scale: 1.05,
                  borderColor: "rgba(255,255,255,0.5)",
                  backgroundColor: "rgba(255,255,255,0.05)"
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-xl transition-all flex items-center gap-2 cursor-pointer"
              >
                View Work <Database size={18} className="text-cyan-400" />
              </motion.a>
            </div>
            </motion.div>

            {/* Right: Bento Grid with Fixed Icons & Images */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="grid grid-cols-12 grid-rows-6 gap-4 h-[500px] md:h-[600px]"
            >
              {/* Main Image */}
              <div className="col-span-8 row-span-4 rounded-3xl overflow-hidden border border-white/10 relative group">
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="Main Tech"
                />
                <div className="absolute top-4 left-4 p-2 bg-slate-950/50 backdrop-blur-md rounded-lg text-cyan-400">
                  <Code size={20} />
                </div>
              </div>

              {/* Team Image */}
              <div className="col-span-4 row-span-3 rounded-3xl overflow-hidden border border-white/10 group">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                  alt="Collaboration"
                />
              </div>

              {/* FIXED Data Image (Reliable Link) */}
              <div className="col-span-4 row-span-3 rounded-3xl overflow-hidden border border-white/10 bg-slate-900 group">
                <img 
                  src="https://images.unsplash.com/photo-1543286386-713bdd548da4?w=400&q=80" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                  alt="Growth Chart"
                />
              </div>

              {/* Active Stats Card */}
              <div className="col-span-8 row-span-2 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-6 flex flex-col justify-center relative overflow-hidden">
                <TrendingUp className="absolute right-[-10px] top-[-10px] w-24 h-24 text-slate-950/10 rotate-12" />
                <div className="text-slate-950/70 font-black uppercase tracking-widest text-[10px] mb-1">Live Performance</div>
                <div className="text-3xl font-black text-slate-950 tracking-tighter">SCALING ACTIVE</div>
                <div className="mt-4 flex gap-1.5">
                  {[1,2,3,4,5,6,7,8].map(i => (
                    <div key={i} className="h-1.5 flex-1 bg-slate-950/20 rounded-full overflow-hidden">
                      <motion.div 
                        animate={{ opacity: [0.2, 1, 0.2] }}
                        transition={{ duration: 1, repeat: Infinity, delay: i*0.1 }}
                        className="h-full w-full bg-slate-950"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* Animated Scroll Down Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 hidden md:flex"
        >
          <div className="w-5 h-8 border-2 border-white rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white rounded-full" />
          </div>
          <span className="text-[8px] uppercase font-bold tracking-widest text-white">Scroll</span>
        </motion.div>
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

      {/* Capital / Financing Section */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-cyan-400 font-bold tracking-widest mb-4 uppercase text-sm">Financing Growth</div>
              <h2 className="text-4xl font-black mb-6">Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Capital?</span></h2>
              <p className="text-slate-300 text-lg mb-8">
                The name Jochrison Capital represents our dual focus: Technical Excellence and Strategic Investment. 
                We provide the technical equity and financial infrastructure needed for businesses to dominate their markets.
              </p>
              <div className="space-y-4">
                {[
                  { title: "Technical Equity", desc: "We co-found products by providing top-tier engineering for a stake in the future.", icon: <Shield className="w-5 h-5" /> },
                  { title: "Financial Engineering", desc: "Building the digital pipelines for revenue collection and financial management.", icon: <TrendingUp className="w-5 h-5" /> },
                  { title: "Strategic Scaling", desc: "Bridging the gap between a local MVP and a global enterprise-grade system.", icon: <Globe className="w-5 h-5" /> }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-5 bg-slate-900/80 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all">
                    <div className="text-cyan-400 shrink-0">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-white">{item.title}</h4>
                      <p className="text-sm text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Improved Image Area */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 blur-3xl opacity-20 group-hover:opacity-30 transition-opacity rounded-full"></div>
              <div className="relative z-10 rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1611974714151-e3d4f53d5f36?w=800&q=80" 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" 
                  alt="Capital and Growth" 
                  onError={(e) => {
                    // Fallback if the link breaks
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                {/* Floating 'Growth' Badge */}
                <div className="absolute bottom-6 left-6 p-4 bg-slate-900/90 backdrop-blur-md rounded-xl border border-white/10 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <TrendingUp className="text-green-400 w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Average Client Growth</div>
                    <div className="text-lg font-bold text-white">+240%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    {/* Implementation Process */}
    <section className="py-20 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4">Our <span className="text-cyan-400">Process</span></h2>
          <p className="text-slate-400">From concept to deployment, we ensure excellence at every step.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { step: "01", title: "Analyze", desc: "Detailed requirements gathering." },
            { step: "02", title: "Design", desc: "UI/UX and System Architecture." },
            { step: "03", title: "Build", desc: "High-performance coding." },
            { step: "04", title: "Deploy", desc: "Testing and go-live support." }
          ].map((item, i) => (
            <div key={i} className="relative p-6 border border-cyan-500/10 rounded-xl bg-slate-950/50">
              <span className="text-5xl font-black text-cyan-500/10 absolute top-2 right-4">{item.step}</span>
              <h3 className="text-xl font-bold text-cyan-400 mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

        {/* How We Work Section */}
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Blueprint</span> for Success
            </h2>
            <p className="text-slate-400 text-lg">
              We don't just write code. We engineer solutions through a disciplined, 
              transparent process designed to minimize risk and maximize impact.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            { step: "01", title: "Discovery", desc: "We deep-dive into your business logic to identify pain points and opportunities." },
            { step: "02", title: "Architecture", desc: "Designing scalable system schemas and user-centric interface wireframes." },
            { step: "03", title: "Development", desc: "Agile sprints with regular check-ins to ensure the project stays on track." },
            { step: "04", title: "Optimization", desc: "Rigorous testing, deployment, and continuous performance monitoring." }
          ].map((item, i) => (
            <div key={i} className="group relative p-8 bg-slate-900/30 border border-cyan-500/10 rounded-3xl hover:border-cyan-500/40 transition-all">
              <div className="text-6xl font-black text-cyan-500/5 absolute top-4 right-6 group-hover:text-cyan-500/10 transition-colors">
                {item.step}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {item.desc}
              </p>
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

<section id="pipeline" className="py-24 bg-[#030b29] relative border-t border-white/5">
  {/* Subtle Background Glow for the section */}
  <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-500/5 blur-[120px] pointer-events-none"></div>

  <div className="max-w-7xl mx-auto px-6 relative z-10">
    <div className="mb-16">
      <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase italic tracking-tighter">
        Development <span className="text-cyan-400">Pipeline</span>
      </h2>
      <p className="text-slate-400 max-w-2xl font-medium">
        Transparency in engineering. Track our latest milestones, from high-security biometric systems to national infrastructure portals.
      </p>
    </div>

    {/* Grid Container */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      {/* 1. COMPLETED SYSTEM: KeNHA */}
      <div className="bg-slate-900/40 backdrop-blur-md border border-white/5 p-8 rounded-3xl hover:border-cyan-500/30 transition-all duration-500 group relative flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-6">
            <span className="px-3 py-1 bg-green-500/10 text-green-400 text-[10px] font-black uppercase tracking-[0.2em] border border-green-500/20 rounded-full">
              ● Live Deployment
            </span>
            <div className="p-2 bg-cyan-500/10 rounded-xl text-cyan-400 group-hover:rotate-12 transition-transform">
              <Globe size={20} />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">KeNHA Compliance</h3>
          <p className="text-slate-400 mb-8 text-sm leading-relaxed">
            Advanced analytics dashboard for national highway weight compliance and real-time reporting.
          </p>
        </div>
        
        <button 
          onClick={() => setDemoModal({ isOpen: true, title: 'KeNHA Dashboard Demo', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' })}
          className="flex items-center gap-2 text-cyan-400 font-bold hover:gap-4 transition-all text-xs uppercase tracking-[0.15em]"
        >
          Watch Demo <ArrowRight size={16} />
        </button>
      </div>

      {/* 2. PENDING SYSTEM: J-Secure Pay */}
      <div className="bg-slate-900/40 backdrop-blur-md border border-white/5 p-8 rounded-3xl hover:border-orange-500/30 transition-all duration-500 group flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-6">
            <span className="px-3 py-1 bg-orange-500/10 text-orange-400 text-[10px] font-black uppercase tracking-[0.2em] border border-orange-500/20 rounded-full">
              🕒 Engineering (Q2 2026)
            </span>
            <Shield size={20} className="text-slate-600 group-hover:text-orange-400 transition-colors" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">J-Secure Pay</h3>
          <p className="text-slate-400 mb-6 text-sm leading-relaxed">
            Next-gen biometric authentication protocol for secure county-level revenue collection.
          </p>
          
          {/* Progress Bar */}
          <div className="space-y-2 mb-4">
             <div className="flex justify-between text-[10px] font-bold uppercase text-slate-500 tracking-widest">
               <span>Security Audit</span>
               <span>85%</span>
             </div>
             <div className="w-full bg-slate-800/50 h-1.5 rounded-full overflow-hidden border border-white/5">
               <motion.div 
                 initial={{ width: 0 }} 
                 whileInView={{ width: '85%' }} 
                 className="bg-gradient-to-r from-orange-600 to-orange-400 h-full shadow-[0_0_15px_rgba(249,115,22,0.4)]" 
               />
             </div>
          </div>
        </div>
      </div>

      {/* 3. PENDING SYSTEM: J-Invest Portal */}
      <div className="bg-slate-900/40 backdrop-blur-md border border-white/5 p-8 rounded-3xl hover:border-blue-500/30 transition-all duration-500 group flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-6">
            <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] border border-blue-500/20 rounded-full">
              🛠 Beta Testing
            </span>
            <Briefcase size={20} className="text-slate-600 group-hover:text-blue-400 transition-colors" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">J-Invest Portal</h3>
          <p className="text-slate-400 mb-6 text-sm leading-relaxed">
            Internal capital management system for tracking tech startup equity and real-time ROI.
          </p>
          
          {/* Progress Bar */}
          <div className="space-y-2 mb-4">
             <div className="flex justify-between text-[10px] font-bold uppercase text-slate-500 tracking-widest">
               <span>Deployment</span>
               <span>92%</span>
             </div>
             <div className="w-full bg-slate-800/50 h-1.5 rounded-full overflow-hidden border border-white/5">
               <motion.div 
                 initial={{ width: 0 }} 
                 whileInView={{ width: '92%' }} 
                 className="bg-gradient-to-r from-blue-600 to-cyan-400 h-full shadow-[0_0_15px_rgba(34,211,238,0.4)]" 
               />
             </div>
          </div>
        </div>
        
        <button 
          onClick={() => setDemoModal({ isOpen: true, title: 'Portal Preview', videoUrl: 'https://www.youtube.com/embed/your_video_id' })}
          className="text-xs font-black text-blue-400 uppercase tracking-[0.2em] hover:text-white transition-colors"
        >
          Request Access →
        </button>
      </div>

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

      {/* Project Journey Section */}
      <section className="py-24 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">From Idea to <span className="text-cyan-400">IPO</span></h2>
            <p className="text-slate-400">The lifecycle of a Jochrison Capital partnership.</p>
          </div>
          
          <div className="relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-cyan-500/0 -translate-y-1/2" />
            
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { title: "Incubation", desc: "We provide the seed technology and core architecture to get your idea off the ground.", icon: <Cloud /> },
                { title: "Acceleration", desc: "Scaling systems to handle millions of transactions and global user bases.", icon: <TrendingUp /> },
                { title: "Exit Strategy", desc: "Preparing the technical stack for acquisition or public offering.", icon: <Globe /> }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -10 }}
                  className="relative z-10 p-8 bg-slate-900 border border-white/5 rounded-3xl text-center shadow-2xl"
                >
                  <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-cyan-400">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Common <span className="text-cyan-400">Questions</span></h2>
            <p className="text-slate-400">Everything you need to know about partnering with us.</p>
          </div>

          <div className="space-y-4">
            {[
              { 
                q: "How long does a typical enterprise system take to build?", 
                a: "Most custom systems take between 3 to 6 months. We use an agile methodology, meaning you'll see a working version of your product every 2 weeks for feedback." 
              },
              { 
                q: "Do you offer post-deployment support and maintenance?", 
                a: "Absolutely. We provide 24/7 technical support and continuous security updates for all systems we deploy, ensuring zero downtime for your operations." 
              },
              { 
                q: "Can you integrate with our existing legacy hardware?", 
                a: "Yes. Our specialty is building bridges between modern cloud software and existing infrastructure, such as weighbridge sensors or manufacturing hardware." 
              },
              { 
                q: "Is Jochrison Capital open to technical equity partnerships?", 
                a: "Yes. For high-growth startups, we occasionally provide 'Capital in Code,' trading development expertise for a stake in the venture's future." 
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-900/40 border border-white/5 rounded-2xl p-6 hover:border-cyan-500/30 transition-all cursor-pointer group"
              >
                <h4 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors flex justify-between items-center">
                  {item.q}
                  <ChevronRight className="text-cyan-500 group-hover:rotate-90 transition-transform" />
                </h4>
                <p className="mt-4 text-slate-400 text-sm leading-relaxed">
                  {item.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Leadership <span className="text-cyan-400">& Innovation</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Amos", role: "Chief Technology Officer", specialty: "Full-Stack Architect" },
              { name: "Executive Team", role: "Product Strategy", specialty: "Operations" },
              { name: "Engineering", role: "DevOps & AI", specialty: "Security" }
            ].map((member, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -10 }}
                className="p-8 bg-slate-900/40 border border-cyan-500/10 rounded-2xl text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl font-black text-slate-950">
                  {member.name[0]}
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-cyan-400 text-sm mb-4">{member.role}</p>
                <p className="text-slate-500 text-xs uppercase tracking-tighter">{member.specialty}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section
      <section id="team" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Experts</span> Behind Jochrison
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              A diverse team of engineers, data scientists, and creative thinkers dedicated to solving your complex problems.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { 
                name: "Amos C.", 
                role: "Chief Technology Officer", 
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
                specialty: "System Architecture"
              },
              { 
                name: "Sarah M.", 
                role: "Lead Data Scientist", 
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
                specialty: "AI & Analytics" 
              },
              { 
                name: "David K.", 
                role: "Senior Software Engineer", 
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
                specialty: "Fullstack Dev"
              },
              { 
                name: "Jane W.", 
                role: "Product Strategist", 
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
                specialty: "Digital Strategy"
              }
            ].map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-slate-900/50 border border-cyan-500/10 rounded-2xl overflow-hidden hover:border-cyan-500/40 transition-all duration-500"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                  />
                </div>
                <div className="p-6">
                  <div className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-1">{member.specialty}</div>
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-slate-400 text-sm">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="py-24 relative overflow-hidden bg-[#020617]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,...')] opacity-30"></div>
  
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-slate-900/50 border border-cyan-500/20 rounded-3xl overflow-hidden shadow-2xl">
              <div className="grid md:grid-cols-2">
                {/* Left Side: Info */}
                <div className="p-12 bg-gradient-to-br from-blue-600 to-cyan-600">
                  <h2 className="text-3xl font-black mb-6 text-slate-950">Let's start a conversation</h2>
                  <p className="text-slate-900/80 mb-8 font-medium">
                    Ready to digitize your operations? Fill out the form and our 
                    tech lead will get back to you within 24 hours.
                  </p>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 text-slate-950">
                      <div className="w-10 h-10 bg-slate-950/10 rounded-full flex items-center justify-center"><MessageCircle size={20}/></div>
                      <span className="font-bold">info@jochrisoncapital.com</span>
                    </div>
                    {/* Add more info items here */}
                  </div>
                </div>

                {/* Right Side: Form */}
<div className="p-12">
  {!isSubmitted ? (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-4">
        <input name="name" type="text" required placeholder="Full Name" className="bg-slate-950 border border-slate-800 p-4 rounded-xl focus:border-cyan-500 outline-none transition-all text-white w-full" />
        <input name="email" type="email" required placeholder="Email Address" className="bg-slate-950 border border-slate-800 p-4 rounded-xl focus:border-cyan-500 outline-none transition-all text-white w-full" />
      </div>
      <select name="service" className="w-full bg-slate-950 border border-slate-800 p-4 rounded-xl focus:border-cyan-500 outline-none transition-all text-slate-400">
        <option value="software">Software Development</option>
        <option value="data">Data Science/AI</option>
        <option value="capital">Capital Investment</option>
      </select>
      <textarea name="message" required placeholder="Tell us about your project" rows={4} className="w-full bg-slate-950 border border-slate-800 p-4 rounded-xl focus:border-cyan-500 outline-none transition-all text-white"></textarea>
      
      <button 
        type="submit" 
        className="w-full py-4 bg-cyan-500 text-slate-950 font-black rounded-xl hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20"
      >
        Send Message
      </button>
    </form>
  ) : (
    <motion.div 
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="text-center py-10"
    >
      <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
        <CheckCircle className="text-cyan-400" size={32} />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">Inquiry Dispatched</h3>
      <p className="text-slate-400 text-sm mb-6">We've received your data. Expect a response shortly.</p>
      <button 
        onClick={() => setIsSubmitted(false)}
        className="text-cyan-400 font-bold hover:underline"
      >
        Reset Form
      </button>
    </motion.div>
  )}
</div>
              </div>
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
                <img 
                  src="https://res.cloudinary.com/da8vqqciq/image/upload/v1768804258/logo.jpg" 
                  alt="Jochrison Logo" 
                  className="w-12 h-12 rounded-full border border-cyan-500/30 object-cover"
                />
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

          <div className="flex gap-6 mt-8 md:mt-0">
            <button 
              onClick={() => setLegalModal({ isOpen: true, type: 'privacy' })}
              className="text-slate-500 hover:text-cyan-400 text-xs transition-colors"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => setLegalModal({ isOpen: true, type: 'terms' })}
              className="text-slate-500 hover:text-cyan-400 text-xs transition-colors"
            >
              Terms of Service
            </button>
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
            <p>&copy; 2025 Jochrison Capital Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/254726096183?text=Hi%20Jochrison%20Capital%20Limited%2C%20I%20saw%20your%20website%20and%20would%20like%20to%20discuss%20a%20project."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 z-40 group"
      >
        <MessageCircle size={32} className="text-white" />
        <span className="absolute right-full mr-3 bg-slate-900 text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Chat with us!
        </span>
      </a>

      {/* Legal Modal Component */}
      {legalModal.isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 backdrop-blur-xl bg-slate-950/80">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-slate-900 border border-white/10 w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-3xl p-8 shadow-2xl relative"
          >
            <button 
              onClick={() => setLegalModal({ isOpen: false, type: '' })}
              className="absolute top-6 right-6 text-slate-400 hover:text-white"
            >
              <X size={24} />
            </button>

            {legalModal.type === 'privacy' ? (
              <div className="prose prose-invert">
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">Privacy Policy</h2>
                <p className="text-slate-400 text-sm mb-4">Last Updated: January 2026</p>
                <p className="text-slate-300 mb-4">At Jochrison Capital, we prioritize the security of your technical data. We collect information provided via our contact forms solely for project discovery and strategic partnership evaluation.</p>
                <ul className="text-slate-300 space-y-2 text-sm mb-4">
                  <li>• We do not sell or share your project blueprints with third parties.</li>
                  <li>• Data is encrypted and stored on secure cloud infrastructure.</li>
                  <li>• You may request data deletion at any time via contact@jochrison.com.</li>
                </ul>
              </div>
            ) : (
              <div className="prose prose-invert">
                <h2 className="text-2xl font-bold text-blue-400 mb-4">Terms of Service</h2>
                <p className="text-slate-400 text-sm mb-4">Last Updated: January 2026</p>
                <h4 className="text-white font-bold mt-4">1. Partnership Nature</h4>
                <p className="text-slate-300 text-sm">Jochrison Capital provides technical engineering and strategic financing. Engagement starts only after a signed Master Service Agreement (MSA).</p>
                <h4 className="text-white font-bold mt-4">2. Intellectual Property</h4>
                <p className="text-slate-300 text-sm">All code developed remains the property of Jochrison Capital until full milestone payment or equity transfer as defined in the specific project contract.</p>
                <h4 className="text-white font-bold mt-4">3. Limitation of Liability</h4>
                <p className="text-slate-300 text-sm">We are not liable for market fluctuations affecting the 'Capital' side of our partnership investments.</p>
              </div>
            )}
          </motion.div>
        </div>
      )}
{/* Demo Video Modal */}
{demoModal.isOpen && (
  <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 backdrop-blur-2xl bg-slate-950/90">
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-slate-900 border border-white/10 w-full max-w-4xl aspect-video rounded-3xl overflow-hidden shadow-2xl relative"
    >
      <button 
        onClick={() => setDemoModal({ ...demoModal, isOpen: false })}
        className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-red-500 text-white rounded-full flex items-center justify-center transition-colors"
      >
        <X size={20} />
      </button>
      
      <div className="w-full h-full">
        {/* Replace with your actual project video or an iframe */}
        <iframe 
          className="w-full h-full"
          src={demoModal.videoUrl}
          title={demoModal.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </motion.div>
  </div>
)}
    </div>
  );
}

