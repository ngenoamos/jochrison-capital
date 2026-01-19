import { useState, useEffect } from 'react';
import { 
  Menu, X, ChevronRight, Code, Database, Cloud, TrendingUp, 
  Users, Award, CheckCircle, ArrowRight, MessageCircle, 
  Briefcase, Globe, Shield, Activity, Check 
} from 'lucide-react';
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
    setIsSubmitted(true);
    
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
      name: "Advanced Weighbridge Management System",
      client: "Kenya National Highways Authority (KeNHA)",
      description: "A comprehensive digital weighbridge solution designed to enhance compliance monitoring, streamline vehicle weight enforcement, and generate real-time analytical reports for infrastructure planning. The system integrates IoT sensors, automated ticketing, and cloud-based data storage to provide a seamless experience for both enforcement officers and transport operators.",
      detailedDescription: "The KeNHA Weighbridge System represents a paradigm shift in how vehicle weight compliance is monitored across national highways. Our solution incorporates advanced machine learning algorithms that predict potential overload patterns, AI-powered camera integration for automatic license plate recognition, and blockchain-secured data storage ensuring tamper-proof record keeping. The system handles over 15,000 daily transactions across 47 weighbridge stations nationwide, reducing manual errors by 94% and increasing compliance rates by 67%.",
      features: [
        "Real-time weight monitoring with IoT sensors",
        "Automated compliance reporting and analytics",
        "Mobile enforcement application for field officers",
        "Integration with National Transport and Safety Authority database",
        "Predictive analytics for overload pattern detection",
        "Multi-lingual support for diverse operator base"
      ],
      achievements: ["Reduced manual errors by 94%", "Increased compliance by 67%", "15,000+ daily transactions", "47 stations nationwide"],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80"
    },
    {
      id: 2,
      name: "Enterprise Transport Agency Management Platform",
      client: "Tai Plus Transport Limited",
      description: "An integrated transport management ecosystem designed to optimize fleet operations, enhance route planning, streamline driver management, and maximize operational efficiency through data-driven insights.",
      detailedDescription: "Tai Plus's transport management system revolutionized their 300+ vehicle fleet operations by implementing GPS-enabled real-time tracking, predictive maintenance scheduling using AI algorithms, fuel consumption optimization analytics, and driver performance monitoring. The platform reduced operational costs by 42%, increased vehicle utilization by 58%, and improved on-time delivery rates to 96.7%. Our solution includes a comprehensive dashboard with KPI tracking, automated dispatch systems, and mobile applications for drivers and customers.",
      features: [
        "GPS-enabled real-time fleet tracking",
        "AI-powered predictive maintenance",
        "Fuel consumption optimization analytics",
        "Driver performance and safety monitoring",
        "Automated dispatch and route optimization",
        "Customer portal with live tracking"
      ],
      achievements: ["42% cost reduction", "58% utilization increase", "96.7% on-time delivery", "300+ vehicles managed"],
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80"
    },
    {
      id: 3,
      name: "Digital Sacco Management Platform",
      client: "E-Sacco Cooperative Society",
      description: "A comprehensive financial management system for savings and credit cooperatives featuring member portals, mobile banking integration, loan processing automation, and real-time financial reporting.",
      detailedDescription: "Our Sacco Management Platform transformed E-Sacco's operations by digitizing their entire financial ecosystem. The system serves over 50,000 members with secure online banking, automated loan application processing with credit scoring algorithms, dividend calculation automation, and regulatory compliance reporting. Key innovations include biometric authentication for withdrawals, USSD banking for feature phones, and AI-powered fraud detection systems that reduced fraudulent transactions by 89%.",
      features: [
        "Biometric authentication for transactions",
        "USSD banking for feature phone users",
        "Automated loan processing with credit scoring",
        "Real-time financial reporting dashboard",
        "Dividend calculation and distribution automation",
        "Mobile banking application with BillPay"
      ],
      achievements: ["50,000+ members served", "89% fraud reduction", "24/7 banking access", "95% member satisfaction"],
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80"
    },
    {
      id: 4,
      name: "Enterprise Customer Service Excellence Platform",
      client: "Haco Industries Limited",
      description: "An enterprise-grade customer service management system integrating multi-channel ticketing, CRM automation, performance analytics, and AI-powered chatbots for enhanced customer satisfaction.",
      detailedDescription: "Haco Industries' customer service transformation involved implementing an omnichannel platform that consolidated communication from email, social media, phone, and live chat into a unified interface. The system features AI-powered sentiment analysis, automated ticket routing based on complexity and agent expertise, knowledge base integration, and real-time performance dashboards. Results include 73% faster resolution times, 45% reduction in call volumes through chatbot implementation, and customer satisfaction scores increasing from 78% to 94%.",
      features: [
        "Omnichannel communication consolidation",
        "AI-powered sentiment analysis",
        "Automated ticket routing and escalation",
        "Knowledge base with machine learning",
        "Real-time performance analytics dashboard",
        "Integrated CRM with sales data"
      ],
      achievements: ["73% faster resolution", "45% call reduction", "94% customer satisfaction", "Omnichannel integration"],
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80"
    },
    {
      id: 5,
      name: "Secure Electronic Voting System",
      client: "Trade Representative Association (TRA)",
      description: "A transparent, secure electronic voting platform with comprehensive audit trails, real-time results visualization, and multi-factor authentication ensuring electoral integrity.",
      detailedDescription: "The TRA Electronic Voting System represents the pinnacle of secure digital democracy. Our solution incorporates blockchain technology for immutable vote recording, biometric voter verification, real-time results streaming with data visualization, and comprehensive audit trails. The system successfully handled 500,000+ votes in the 2024 elections with zero reported incidents of fraud or system failure. Advanced features include offline voting capability, voter anonymity preservation through cryptographic techniques, and post-election analytics for democratic insights.",
      features: [
        "Blockchain-secured vote recording",
        "Biometric voter verification",
        "Real-time results visualization",
        "Offline voting capability",
        "Comprehensive audit trail system",
        "Post-election analytics dashboard"
      ],
      achievements: ["500,000+ votes handled", "Zero fraud incidents", "Real-time results", "Blockchain security"],
      image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=800&q=80"
    },
    {
      id: 6,
      name: "Digital Revenue Collection Platform",
      client: "Uasin Gishu County Government",
      description: "A comprehensive digital revenue collection system enabling mobile payments, automated receipting, real-time revenue tracking, and analytics for county government operations.",
      detailedDescription: "UGPay transformed Uasin Gishu County's revenue collection by digitizing 97% of government transactions. The platform integrates mobile money (M-Pesa, Airtel Money), bank payments, and card transactions into a unified system with automated reconciliation. Features include real-time revenue dashboards for county officials, automated penalty calculations, property tax assessment tools, and citizen portals for service access. The system increased revenue collection by 320% in the first year, reduced leakage by 89%, and cut processing times from days to minutes.",
      features: [
        "Multi-channel payment integration",
        "Automated revenue reconciliation",
        "Real-time county revenue dashboard",
        "Property tax assessment and collection",
        "Citizen portal for service access",
        "Automated penalty and interest calculation"
      ],
      achievements: ["320% revenue increase", "89% leakage reduction", "97% digitization", "Minute processing times"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80"
    }
  ];

  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: "ENTERPRISE SOFTWARE DEVELOPMENT",
      description: "We architect, design, and develop robust, scalable enterprise software solutions tailored to your unique business requirements. Our full-stack development team specializes in creating mission-critical applications that drive operational efficiency, enhance customer experiences, and deliver measurable ROI. From initial concept to deployment and ongoing optimization, we employ agile methodologies to ensure timely delivery of high-quality software that integrates seamlessly with your existing infrastructure.",
      detailedDescription: "Our software development process begins with comprehensive requirement analysis and system architecture design. We specialize in developing web applications, mobile applications, desktop software, and cloud-native solutions. Our expertise spans across multiple industries including finance, healthcare, logistics, government, and manufacturing. We implement best practices in coding standards, security protocols, and performance optimization to ensure your software not only meets but exceeds expectations.",
      highlights: [
        "Custom Web & Mobile Applications",
        "Enterprise Resource Planning Systems",
        "API Development & Integration",
        "Legacy System Modernization",
        "Cloud Migration & Deployment",
        "Performance Optimization"
      ],
      technologies: ["React", "Angular", "Vue.js", "Node.js", ".NET Core", "Spring Boot"]
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "DATA SCIENCE & ARTIFICIAL INTELLIGENCE",
      description: "Harness the power of data with our advanced analytics and AI solutions. We transform raw data into actionable insights through predictive modeling, machine learning algorithms, and intelligent dashboard visualizations. Our data science team helps organizations make data-driven decisions, optimize operations, predict market trends, and enhance customer personalization through sophisticated analytical frameworks.",
      detailedDescription: "Our data science practice encompasses the entire data lifecycle - from data collection and cleaning to model development and deployment. We specialize in building machine learning models for predictive analytics, natural language processing, computer vision, and recommendation systems. Our business intelligence solutions provide executive dashboards with real-time KPIs, automated reporting, and interactive data visualizations that empower decision-makers at every organizational level.",
      highlights: [
        "Predictive Analytics & Forecasting",
        "Machine Learning Model Development",
        "Business Intelligence Dashboards",
        "Big Data Processing & Analytics",
        "Natural Language Processing",
        "Computer Vision Solutions"
      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "Power BI", "Tableau"]
    },
    {
      icon: <Cloud className="w-12 h-12" />,
      title: "DIGITAL TRANSFORMATION SOLUTIONS",
      description: "Accelerate your digital journey with our comprehensive digital transformation services. We help organizations reimagine business processes, implement automation, migrate to cloud infrastructure, and integrate disparate systems into cohesive digital ecosystems. Our solutions bridge the gap between legacy operations and modern digital capabilities, enabling organizations to compete effectively in the digital age.",
      detailedDescription: "Digital transformation is more than just technology - it's about rethinking business models and processes. We work closely with organizations to develop digital strategies, implement process automation, migrate to cloud platforms, and create digital experiences for customers and employees. Our approach combines technology implementation with change management to ensure successful adoption and maximum return on investment.",
      highlights: [
        "Business Process Automation",
        "Cloud Migration & Optimization",
        "System Integration Services",
        "Digital Strategy Consulting",
        "IoT Implementation",
        "Cybersecurity Solutions"
      ],
      technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Microservices"]
    }
  ];

  const stats = [
    { number: "30+", label: "Certified Technology Experts", description: "Our team comprises industry-certified professionals across multiple technology domains" },
    { number: "50+", label: "Enterprise Projects Delivered", description: "Successful implementations across government, finance, healthcare, and logistics sectors" },
    { number: "15+", label: "Industries Served", description: "Deep domain expertise across diverse industry verticals and business models" },
    { number: "99%", label: "Client Satisfaction Rate", description: "Consistently high satisfaction scores and long-term client partnerships" },
    { number: "24/7", label: "Technical Support", description: "Round-the-clock monitoring, support, and maintenance services" },
    { number: "10M+", label: "Daily Transactions Processed", description: "Our systems handle millions of transactions with 99.99% uptime" }
  ];

  const technologies = [
    "React/Next.js", "Node.js", "Python/Django", "PostgreSQL", "MongoDB", "Redis",
    "AWS", "Azure", "Docker", "Kubernetes", "TensorFlow", "PyTorch", "Power BI", "Tableau",
    "GraphQL", "Microservices", "Blockchain", "IoT", "CI/CD", "Git"
  ];

  const values = [
    {
      icon: <Shield />,
      title: "Integrity & Transparency",
      description: "We maintain the highest ethical standards in all our engagements, ensuring transparent communication and honest recommendations."
    },
    {
      icon: <Activity />,
      title: "Innovation Excellence",
      description: "Continuous research and adoption of cutting-edge technologies to deliver solutions that provide competitive advantages."
    },
    {
      icon: <Users />,
      title: "Client Partnership",
      description: "We view every project as a long-term partnership, investing in understanding our clients' businesses deeply."
    },
    {
      icon: <Scale />,
      title: "Quality Assurance",
      description: "Rigorous testing protocols and quality checks ensure our solutions perform reliably under all conditions."
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white min-h-screen w-full">
      {/* Fixed Header with Scroll Progress */}
      <div className="fixed top-0 w-full z-[100]">
        {/* News Ticker */}
        <div className="w-full bg-cyan-950/90 backdrop-blur-md border-b border-cyan-500/20 py-1.5 overflow-hidden">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap gap-10"
          >
            {[
              "🚀 DEPLOYMENT SUCCESS: Enterprise ERP system successfully deployed for national logistics partner",
              "💎 CAPITAL GROWTH: Jochrison investment portfolio reaches $2M in local tech startups",
              "🌐 NETWORK EXPANSION: New infrastructure nodes activated across Nairobi, Mombasa, and Kisumu regions",
              "📈 PERFORMANCE METRICS: 40% increase in operational efficiency reported by financial sector clients",
              "🏆 INDUSTRY RECOGNITION: Awarded 'Most Innovative Tech Solution 2024' by Digital Transformation Council"
            ].map((text, i) => (
              <span key={i} className="text-[9px] font-black uppercase tracking-[0.2em] text-cyan-400 flex items-center gap-2">
                <div className="w-1 h-1 bg-cyan-400 rounded-full" /> {text}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Main Navigation */}
        <header className={`w-full bg-slate-950/95 backdrop-blur-lg border-b ${scrolled ? 'border-white/10 shadow-xl' : 'border-white/5'} transition-all`}>
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center gap-4">
                <img 
                  src="https://res.cloudinary.com/da8vqqciq/image/upload/v1768804258/logo.jpg" 
                  alt="Jochrison Capital Logo" 
                  className="w-12 h-12 rounded-full border border-cyan-500/30 object-cover"
                />
                <div>
                  <div className="text-xl font-bold text-white tracking-tight">JOCHRISON CAPITAL LIMITED</div>
                  <div className="text-[10px] text-cyan-400 font-black tracking-widest uppercase">Technology & Investment Partners</div>
                </div>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex gap-10">
                {['Home', 'Services', 'Systems', 'About', 'Process', 'Contact'].map((item) => (
                  <a 
                    key={item} 
                    href={`#${item.toLowerCase()}`} 
                    className="text-slate-300 hover:text-cyan-400 font-bold text-xs uppercase tracking-widest transition-colors relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
                  </a>
                ))}
                <a href="#contact" className="px-6 py-2 bg-cyan-500 text-slate-950 font-bold rounded-full hover:bg-cyan-400 transition-colors text-xs">
                  START PROJECT
                </a>
              </nav>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
              >
                {mobileMenuOpen ? <X size={28} className="text-cyan-400" /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:hidden bg-slate-950 border-t border-cyan-500/20 px-6 py-8"
            >
              {['Home', 'Services', 'Systems', 'About', 'Process', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-4 text-lg font-bold text-white hover:text-cyan-400 transition-colors border-b border-white/5"
                >
                  {item}
                </a>
              ))}
            </motion.div>
          )}
        </header>
      </div>

      {/* Main Content */}
      <div className="pt-32">
        {/* Hero Section */}
        <section id="home" className="relative overflow-hidden min-h-[90vh] flex items-center">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTSA0MCAwIEwgMCAwIDAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSg2LCAyMDIsIDI1NSwgMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] opacity-100"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
          
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-8">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  <span className="text-cyan-400 text-sm font-bold uppercase tracking-widest">Enterprise Technology Partners</span>
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6">
                  Building Africa's Digital<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">
                    Infrastructure
                  </span>
                </h1>
                
                <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                  Jochrison Capital Limited combines deep technical expertise with strategic investment to deliver enterprise-grade solutions that transform businesses and drive sustainable growth. We architect the digital foundations upon which tomorrow's leading organizations are built.
                </p>
                
                <p className="text-slate-400 mb-10 text-lg">
                  With over a decade of experience across government, finance, logistics, and enterprise sectors, we've established ourselves as trusted partners in digital transformation, delivering measurable results and tangible business value.
                </p>

                <div className="flex flex-wrap gap-4 relative z-30">
                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white text-slate-950 font-bold rounded-xl hover:bg-cyan-50 transition-all flex items-center gap-3"
                  >
                    Start Your Digital Transformation <ArrowRight size={20} />
                  </motion.a>
                  
                  <motion.a
                    href="#systems"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 border border-cyan-500/50 text-cyan-400 font-bold rounded-xl hover:bg-cyan-500/10 transition-all"
                  >
                    View Our Portfolio
                  </motion.a>
                </div>
              </div>

              <div className="grid grid-cols-12 grid-rows-6 gap-4 h-[500px]">
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
              </div>
            </div>
          </div>
        </section>

        {/* Trusted Partners */}
        <div className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-center text-slate-400 uppercase tracking-widest mb-12">Trusted by Industry Leaders</p>
            <div className="flex flex-wrap justify-center items-center gap-12">
              {['KeNHA', 'HACO', 'E-SACCO', 'TAI PLUS', 'TRA', 'MINISTRY OF ICT'].map((client) => (
                <div key={client} className="text-2xl font-bold text-slate-300 opacity-80 hover:opacity-100 transition-opacity">
                  {client}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-slate-900/30 rounded-2xl border border-white/5">
                  <div className="text-4xl font-black text-cyan-400 mb-2">{stat.number}</div>
                  <div className="font-semibold mb-2">{stat.label}</div>
                  <div className="text-sm text-slate-400">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Services */}
        <section id="services" className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black mb-4">Our Core <span className="text-cyan-400">Capabilities</span></h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                We deliver comprehensive technology solutions that address the complete digital transformation lifecycle
              </p>
            </div>

            <div className="space-y-12">
              {services.map((service, index) => (
                <div key={index} className="grid lg:grid-cols-3 gap-8 items-start">
                  <div className="lg:col-span-1">
                    <div className="text-cyan-400 mb-6">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-cyan-400 mb-4">{service.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.technologies.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-slate-900/50 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <p className="text-lg text-slate-300 mb-6 leading-relaxed">{service.description}</p>
                    <p className="text-slate-400 mb-8 leading-relaxed">{service.detailedDescription}</p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      {service.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle size={18} className="text-cyan-400 mt-1 flex-shrink-0" />
                          <span className="text-slate-300">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capital Philosophy */}
        <section className="py-20 bg-slate-900/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-black mb-6">
                  The <span className="text-cyan-400">Capital</span> in Our Name:<br />
                  Strategic Investment in Innovation
                </h2>
                
                <div className="space-y-6">
                  <p className="text-lg text-slate-300">
                    Jochrison Capital represents a unique synthesis of technical excellence and strategic financial insight. We operate at the intersection of technology development and capital allocation, recognizing that true innovation requires both brilliant engineering and smart investment.
                  </p>
                  
                  <p className="text-slate-400">
                    Our "Capital" mandate extends beyond financial investment to include intellectual capital, technical capital, and human capital. We invest in promising ventures not just with funds, but with the engineering expertise, strategic guidance, and operational support needed to scale from concept to market dominance.
                  </p>
                  
                  <div className="space-y-4">
                    {[
                      {
                        title: "Technical Equity Partnerships",
                        description: "We co-found technology ventures by providing premium engineering resources in exchange for equity, aligning our success directly with the ventures we help build."
                      },
                      {
                        title: "Revenue-Based Financing",
                        description: "For established businesses, we provide growth capital tied to revenue performance, creating flexible financing structures that support scaling without excessive dilution."
                      },
                      {
                        title: "Infrastructure Investment",
                        description: "Strategic investment in the digital infrastructure that underpins economic growth, from payment systems to logistics platforms to government digitization."
                      }
                    ].map((item, i) => (
                      <div key={i} className="p-6 bg-slate-800/30 rounded-xl border border-white/5">
                        <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                        <p className="text-slate-400">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>             
              <div className="relative">
                  {/* Updated with a reliable Unsplash image for Strategic Investment/Data */}
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" 
                    className="rounded-2xl shadow-2xl border border-white/5 object-cover w-full h-full"
                    alt="Strategic Investment and Analytics"
                  />
                  {/* Floating Stats Card */}
                  <div className="absolute -bottom-6 -right-6 p-8 bg-slate-950/90 backdrop-blur-xl rounded-2xl border border-cyan-500/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20">
                    <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
                      $2M+
                    </div>
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                      Invested in Technology Ventures
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black mb-4">Our Core <span className="text-cyan-400">Values</span></h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                Principles that guide every engagement and define our approach to partnership
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="p-8 bg-slate-900/30 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all">
                  <div className="text-cyan-400 mb-6">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-slate-400">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Systems */}
        <section id="systems" className="py-20 bg-slate-950/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black mb-4">Enterprise <span className="text-cyan-400">Solutions</span> Portfolio</h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                Proven systems delivering measurable impact across diverse sectors and operational environments
              </p>
            </div>

            <div className="space-y-12">
              {systems.map((system) => (
                <div key={system.id} className="grid lg:grid-cols-3 gap-8 bg-slate-900/30 rounded-2xl p-8 border border-white/5">
                  <div className="lg:col-span-1">
                    <img
                      src={system.image}
                      alt={system.name}
                      className="w-full h-64 object-cover rounded-xl mb-6"
                    />
                    <div className="flex items-center gap-3 mb-4">
                      <div className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
                        <span className="text-cyan-400 font-bold">{system.client}</span>
                      </div>
                      <div className="text-sm text-slate-500">
                        {system.achievements[0]}
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-bold mb-4">{system.name}</h3>
                    <p className="text-slate-300 mb-6 leading-relaxed">{system.detailedDescription}</p>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      {system.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle size={18} className="text-cyan-400 mt-1 flex-shrink-0" />
                          <span className="text-slate-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                      {system.achievements.map((achievement, idx) => (
                        <div key={idx} className="px-4 py-2 bg-slate-800/50 rounded-full text-sm">
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

{/* Development Pipeline */}
<section className="py-20 bg-[#030b29] relative border-t border-white/5">
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
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      
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

{/* 2. LAUNCHING SOON: MediBook */}
<div className="bg-slate-900/40 backdrop-blur-xl border border-white/5 p-8 rounded-[2rem] hover:border-purple-500/40 transition-all duration-700 group relative flex flex-col justify-between overflow-hidden">
  
  {/* Animated Background Accent - Only visible on hover */}
  <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-600/10 rounded-full blur-[80px] group-hover:bg-purple-600/20 transition-all duration-700"></div>

  <div>
    <div className="flex justify-between items-start mb-6">
      <div className="flex flex-col gap-1">
        <span className="px-3 py-1 bg-purple-500/10 text-purple-400 text-[10px] font-black uppercase tracking-[0.2em] border border-purple-500/20 rounded-full w-fit">
          🚀 Strategic Launch
        </span>
        <span className="text-[10px] text-slate-500 font-bold ml-1">Q1 2026 DEPLOYMENT</span>
      </div>
      <div className="p-3 bg-purple-500/10 rounded-2xl text-purple-400 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border border-purple-500/20 shadow-lg shadow-purple-500/10">
        <Activity size={22} />
      </div>
    </div>
    
    {/* Project Image Container with Glass Overlay */}
    <div className="mb-6 relative h-48 rounded-2xl overflow-hidden border border-white/10 shadow-inner">
      <img 
        src="https://res.cloudinary.com/da8vqqciq/image/upload/v1768856704/medibook_avxj6k.jpg" 
        alt="MediBook Healthcare Platform"
        className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
        onError={(e) => {
          (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80";
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80"></div>
      
      {/* Dynamic Tag over Image */}
      <div className="absolute bottom-4 left-4 flex items-center gap-2">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]"></div>
        <span className="text-[10px] font-black text-white uppercase tracking-widest">Systems Active</span>
      </div>
    </div>
    
    <h3 className="text-2xl font-black text-white mb-3 tracking-tighter">MediBook <span className="text-purple-400">Health</span></h3>
    <p className="text-slate-400 mb-8 text-sm leading-relaxed font-medium">
      An ecosystem-scale healthcare management system integrating real-time patient telemetry, automated appointment scheduling, and secure telemedicine.
    </p>
    
    {/* Progress Engine */}
    <div className="space-y-3 mb-8">
      <div className="flex justify-between items-end">
        <div className="flex flex-col">
          <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Current Sprint</span>
          <span className="text-xs font-bold text-white uppercase">Integration Phase</span>
        </div>
        <span className="text-xl font-black text-purple-400 tracking-tighter italic">80%</span>
      </div>
      <div className="w-full bg-slate-800/40 h-2 rounded-full overflow-hidden border border-white/5 p-[2px]">
        <motion.div 
          initial={{ width: 0 }} 
          whileInView={{ width: '80%' }} 
          transition={{ duration: 2, ease: "circOut" }}
          className="bg-gradient-to-r from-purple-600 via-fuchsia-500 to-purple-400 h-full rounded-full shadow-[0_0_20px_rgba(168,85,247,0.5)]" 
        />
      </div>
    </div>
    
    {/* Milestone Tracker */}
    <div className="grid grid-cols-2 gap-2 mb-8">
      {[
        { name: 'Architecture', status: 'complete' },
        { name: 'UI/UX Beta', status: 'complete' },
        { name: 'API Bridge', status: 'complete' },
        { name: 'Live Ops', status: 'pending' }
      ].map((item) => (
        <div 
          key={item.name} 
          className={`flex items-center gap-2 px-3 py-2 rounded-xl text-[9px] font-black uppercase tracking-tighter border ${
            item.status === 'complete' 
            ? 'bg-green-500/5 text-green-500 border-green-500/20' 
            : 'bg-purple-500/5 text-purple-400 border-purple-500/20 animate-pulse'
          }`}
        >
          {item.status === 'complete' ? <Check size={12} strokeWidth={3} /> : <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />}
          {item.name}
        </div>
      ))}
    </div>
  </div>
  
  <button 
    onClick={() => setDemoModal({ 
      isOpen: true, 
      title: 'MediBook Platform Preview', 
      videoUrl: 'https://www.youtube.com/embed/your_video_id' 
    })}
    className="group/btn relative w-full overflow-hidden rounded-xl bg-purple-600/10 border border-purple-500/20 py-4 transition-all hover:bg-purple-600"
  >
    <span className="relative z-10 flex items-center justify-center gap-3 text-purple-400 font-black text-xs uppercase tracking-[0.2em] group-hover/btn:text-white transition-colors">
      Enter Preview Environment <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
    </span>
  </button>
</div>

      {/* 3. PENDING SYSTEM: J-Secure Pay */}
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

      {/* 4. PENDING SYSTEM: J-Invest Portal */}
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

        {/* Our Process */}
        <section id="process" className="py-20 bg-slate-900/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black mb-4">Our <span className="text-cyan-400">Process</span> Methodology</h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                A structured approach to solution delivery that ensures quality, transparency, and predictable outcomes
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  phase: "01",
                  title: "Discovery & Strategy",
                  description: "Comprehensive business analysis, requirement gathering, and solution architecture design",
                  activities: [
                    "Stakeholder workshops",
                    "Technical feasibility study",
                    "Project roadmap creation",
                    "Risk assessment"
                  ]
                },
                {
                  phase: "02",
                  title: "Design & Planning",
                  description: "User experience design, system architecture, and detailed project planning",
                  activities: [
                    "Wireframing & prototyping",
                    "Technical specification",
                    "Resource allocation",
                    "Timeline development"
                  ]
                },
                {
                  phase: "03",
                  title: "Development & Testing",
                  description: "Agile development with continuous integration, testing, and quality assurance",
                  activities: [
                    "Sprint-based development",
                    "Automated testing",
                    "Security validation",
                    "Performance optimization"
                  ]
                },
                {
                  phase: "04",
                  title: "Deployment & Growth",
                  description: "Production deployment, user training, and ongoing optimization and support",
                  activities: [
                    "Production deployment",
                    "User training programs",
                    "Performance monitoring",
                    "Continuous improvement"
                  ]
                }
              ].map((phase, i) => (
                <div key={i} className="relative">
                  <div className="p-8 bg-slate-900/50 rounded-2xl border border-white/5 h-full">
                    <div className="text-6xl font-black text-cyan-500/10 absolute top-4 right-4">
                      {phase.phase}
                    </div>
                    <h3 className="text-xl font-bold mb-4">{phase.title}</h3>
                    <p className="text-slate-400 mb-6">{phase.description}</p>
                    <ul className="space-y-2">
                      {phase.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-slate-500">
                          <ArrowRight size={12} className="text-cyan-400" />
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {i < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-cyan-500/20"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black mb-4">Technology <span className="text-cyan-400">Stack</span></h2>
              <p className="text-xl text-slate-400">Modern tools and technologies powering our solutions</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="p-4 bg-slate-900/50 border border-cyan-500/20 rounded-xl text-center hover:border-cyan-500/50 hover:bg-slate-900 transition-all"
                >
                  <div className="font-semibold">{tech}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Us */}
        <section id="about" className="py-20 bg-slate-900/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-black mb-6">
                  About <span className="text-cyan-400">Jochrison Capital Limited</span>
                </h2>
                
                <div className="space-y-6">
                  <p className="text-lg text-slate-300">
                    Founded in 2015, Jochrison Capital Limited has evolved from a boutique software development firm into a comprehensive technology and investment partner for enterprises across East Africa. Our journey reflects our commitment to innovation, quality, and transformative impact.
                  </p>
                  
                  <p className="text-slate-400">
                    Our name represents our dual focus: "Jochrison" embodies our technical excellence and innovative spirit, while "Capital" signifies our strategic investment approach. We believe that sustainable growth requires both brilliant technology and smart capital allocation.
                  </p>
                  
                  <p className="text-slate-400">
                    Over the years, we've built a reputation for delivering complex enterprise solutions that not only meet technical specifications but also drive real business value. Our team of certified professionals brings together diverse expertise across software engineering, data science, cybersecurity, and digital strategy.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-6 mt-8">
                    <div>
                      <div className="text-3xl font-bold text-cyan-400 mb-2">2015</div>
                      <div className="text-slate-400">Year Founded</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-cyan-400 mb-2">100+</div>
                      <div className="text-slate-400">Team Members</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-cyan-400 mb-2">15+</div>
                      <div className="text-slate-400">Countries Served</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
                      <div className="text-slate-400">Client Retention</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="Team Collaboration"
                  className="rounded-2xl"
                />
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 bg-slate-900/50 rounded-xl">
                    <Award className="text-cyan-400 mb-4" size={32} />
                    <h4 className="font-bold mb-2">Industry Recognition</h4>
                    <p className="text-sm text-slate-400">Multiple awards for innovation and excellence</p>
                  </div>
                  
                  <div className="p-6 bg-slate-900/50 rounded-xl">
                    <Users className="text-cyan-400 mb-4" size={32} />
                    <h4 className="font-bold mb-2">Expert Team</h4>
                    <p className="text-sm text-slate-400">Certified professionals across technology domains</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-slate-900/50 rounded-2xl border border-cyan-500/20 overflow-hidden">
              <div className="grid lg:grid-cols-2">
                {/* Contact Information */}
                <div className="p-12 bg-gradient-to-br from-blue-600 to-cyan-600">
                  <h2 className="text-3xl font-black mb-8 text-slate-950">Start Your Transformation</h2>
                  
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-bold text-slate-950 mb-4">Get in Touch</h3>
                      <div className="space-y-4">
                        <div className="flex items-center gap-4 text-slate-900">
                          <Mail size={24} />
                          <span className="font-bold">contact@jochrisoncapital.com</span>
                        </div>
                        <div className="flex items-center gap-4 text-slate-900">
                          <Phone size={24} />
                          <span className="font-bold">+254 726 096 183</span>
                        </div>
                        <div className="flex items-center gap-4 text-slate-900">
                          <MapPin size={24} />
                          <span className="font-bold">Nairobi, Kenya</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-slate-950 mb-4">Office Hours</h3>
                      <div className="text-slate-900">
                        <div>Monday - Friday: 8:00 AM - 6:00 PM</div>
                        <div>Sunday: 9:00 AM - 1:00 PM</div>
                        <div>24/7 Emergency Support Available</div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-slate-950 mb-4">Why Partner With Us</h3>
                      <ul className="space-y-2 text-slate-900">
                        <li>✓ Enterprise-grade security and compliance</li>
                        <li>✓ Proven track record across multiple industries</li>
                        <li>✓ Transparent pricing and project management</li>
                        <li>✓ Ongoing support and maintenance</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Contact Form */}
                <div className="p-12">
                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold mb-2">Full Name *</label>
                          <input
                            name="name"
                            type="text"
                            required
                            className="w-full bg-slate-950 border border-slate-800 p-4 rounded-xl focus:border-cyan-500 outline-none transition-all"
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold mb-2">Email Address *</label>
                          <input
                            name="email"
                            type="email"
                            required
                            className="w-full bg-slate-950 border border-slate-800 p-4 rounded-xl focus:border-cyan-500 outline-none transition-all"
                            placeholder="your.email@company.com"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold mb-2">Company</label>
                        <input
                          name="company"
                          type="text"
                          className="w-full bg-slate-950 border border-slate-800 p-4 rounded-xl focus:border-cyan-500 outline-none transition-all"
                          placeholder="Your company name"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold mb-2">Service Interest *</label>
                        <select
                          name="service"
                          className="w-full bg-slate-950 border border-slate-800 p-4 rounded-xl focus:border-cyan-500 outline-none transition-all"
                        >
                          <option value="">Select a service</option>
                          <option value="software">Software Development</option>
                          <option value="data">Data Science & AI</option>
                          <option value="digital">Digital Transformation</option>
                          <option value="capital">Capital Investment</option>
                          <option value="consulting">Technology Consulting</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold mb-2">Project Details *</label>
                        <textarea
                          name="message"
                          required
                          rows={6}
                          className="w-full bg-slate-950 border border-slate-800 p-4 rounded-xl focus:border-cyan-500 outline-none transition-all"
                          placeholder="Describe your project requirements, timeline, and budget..."
                        />
                      </div>
                      
                      <button
                        type="submit"
                        className="w-full py-4 bg-cyan-500 text-slate-950 font-bold rounded-xl hover:bg-cyan-400 transition-all"
                      >
                        Submit Inquiry
                      </button>
                    </form>
                  ) : (
                    <div className="text-center py-12">
                      <CheckCircle className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
                      <h3 className="text-2xl font-bold mb-4">Inquiry Received</h3>
                      <p className="text-slate-400 mb-8">
                        Thank you for your interest in Jochrison Capital. Our team will review your inquiry and respond within 24 hours. We look forward to discussing how we can help transform your business.
                      </p>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="text-cyan-400 font-bold hover:text-cyan-300"
                      >
                        Submit another inquiry
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black mb-4">Frequently Asked <span className="text-cyan-400">Questions</span></h2>
              <p className="text-xl text-slate-400">Common inquiries about our services and partnership model</p>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  question: "What industries do you specialize in?",
                  answer: "We have extensive experience across government, finance, logistics, healthcare, manufacturing, and retail sectors. Our team includes domain experts who understand industry-specific challenges and regulatory requirements."
                },
                {
                  question: "What is your typical project timeline?",
                  answer: "Project timelines vary based on complexity. Simple web applications typically take 3-4 months, while complex enterprise systems may require 6-12 months. We provide detailed project plans with milestones during the discovery phase."
                },
                {
                  question: "Do you provide ongoing support and maintenance?",
                  answer: "Yes, we offer comprehensive support packages including 24/7 monitoring, regular updates, security patches, and performance optimization. Our SLA guarantees 99.9% uptime for mission-critical systems."
                },
                {
                  question: "How do you ensure data security and compliance?",
                  answer: "We implement enterprise-grade security measures including encryption, access controls, regular audits, and compliance with industry standards (GDPR, ISO 27001, local regulations). Our security team conducts regular penetration testing."
                },
                {
                  question: "What is your pricing model?",
                  answer: "We offer flexible engagement models including fixed-price projects, time-and-materials, and dedicated team models. For capital partnerships, we structure deals based on equity, revenue sharing, or convertible notes."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-slate-900/30 rounded-xl p-6 border border-white/5">
                  <h4 className="text-lg font-bold mb-4">{faq.question}</h4>
                  <p className="text-slate-400">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-cyan-500/20 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src="https://res.cloudinary.com/da8vqqciq/image/upload/v1768804258/logo.jpg" 
                  alt="Logo"
                  className="w-12 h-12 rounded-full border border-cyan-500/30"
                />
                <div>
                  <div className="text-xl font-bold">JOCHRISON CAPITAL</div>
                  <div className="text-xs text-cyan-400">Technology & Investment Partners</div>
                </div>
              </div>
              <p className="text-slate-400 mb-6">
                Empowering businesses through innovative technology solutions and strategic investment partnerships.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-cyan-400">Quick Links</h4>
              <div className="space-y-2">
                <a href="#services" className="block text-slate-400 hover:text-cyan-400">Services</a>
                <a href="#systems" className="block text-slate-400 hover:text-cyan-400">Portfolio</a>
                <a href="#process" className="block text-slate-400 hover:text-cyan-400">Our Process</a>
                <a href="#about" className="block text-slate-400 hover:text-cyan-400">About Us</a>
                <a href="#contact" className="block text-slate-400 hover:text-cyan-400">Contact</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-cyan-400">Services</h4>
              <div className="space-y-2">
                <div className="text-slate-400">Software Development</div>
                <div className="text-slate-400">Data Science & AI</div>
                <div className="text-slate-400">Digital Transformation</div>
                <div className="text-slate-400">Capital Investment</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-cyan-400">Legal</h4>
              <div className="space-y-2">
                <button 
                  onClick={() => setLegalModal({ isOpen: true, type: 'privacy' })}
                  className="text-slate-400 hover:text-cyan-400"
                >
                  Privacy Policy
                </button>
                <button 
                  onClick={() => setLegalModal({ isOpen: true, type: 'terms' })}
                  className="text-slate-400 hover:text-cyan-400"
                >
                  Terms of Service
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-cyan-500/20 pt-8 text-center text-slate-400">
            <p>&copy; {new Date().getFullYear()} Jochrison Capital Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float */}
      <a
        href="https://wa.me/254726096183"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-40"
      >
        <MessageCircle size={32} className="text-white" />
      </a>

      {/* Legal Modals */}
      {legalModal.isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-950/90 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-slate-900 border border-white/10 rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
          >
            <button 
              onClick={() => setLegalModal({ isOpen: false, type: '' })}
              className="float-right text-slate-400 hover:text-white"
            >
              <X size={24} />
            </button>
            
            {legalModal.type === 'privacy' ? (
              <div>
                <h2 className="text-2xl font-bold mb-6">Privacy Policy</h2>
                <div className="space-y-4 text-slate-400">
                  <p>Jochrison Capital is committed to protecting your privacy. This policy outlines how we collect, use, and protect your information.</p>
                  <p>We collect information you provide directly to us, such as when you fill out contact forms, request information about our services, or communicate with us. This may include your name, email address, phone number, company information, and project details.</p>
                  <p>We use this information to respond to your inquiries, provide our services, improve our offerings, and communicate with you about our services and promotions. We do not sell or share your personal information with third parties for their marketing purposes.</p>
                  <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
                  <p>You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at privacy@jochrisoncapital.com.</p>
                  <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.</p>
                  <p className="text-sm text-slate-500">Last Updated: January 2024</p>
                </div>
              </div>
            ) : (
              <div>
                <h2 className="text-2xl font-bold mb-6">Terms of Service</h2>
                <div className="space-y-4 text-slate-400">
                  <p>By accessing our website and using our services, you agree to these Terms of Service.</p>
                  <p>Jochrison Capital provides technology consulting, software development, and investment services. All services are subject to separate agreements that outline specific terms, deliverables, timelines, and payment terms.</p>
                  <p>All intellectual property rights in our services, website content, and proprietary technology remain the property of Jochrison Capital unless otherwise agreed in writing. Client-specific deliverables are governed by individual project agreements.</p>
                  <p>We strive to provide accurate information on our website, but we make no warranties about the completeness, reliability, or accuracy of this information. Any reliance you place on such information is strictly at your own risk.</p>
                  <p>To the maximum extent permitted by law, Jochrison Capital shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.</p>
                  <p>These terms are governed by the laws of Kenya. Any disputes shall be resolved in the courts of Nairobi.</p>
                  <p>We reserve the right to modify these terms at any time. Your continued use of our services after any changes constitutes acceptance of the modified terms.</p>
                  <p className="text-sm text-slate-500">Last Updated: January 2024</p>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}

      {/* System Detail Modal */}
      {selectedSystem && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-950/90 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-slate-900 border border-white/10 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-8">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-3xl font-bold mb-2">{selectedSystem.name}</h3>
                  <div className="flex items-center gap-3">
                    <div className="px-4 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
                      <span className="text-cyan-400 font-bold">{selectedSystem.client}</span>
                    </div>
                    <div className="text-slate-500">Enterprise Solution</div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedSystem(null)}
                  className="p-2 hover:bg-slate-800 rounded-lg"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <img
                    src={selectedSystem.image}
                    alt={selectedSystem.name}
                    className="w-full h-64 object-cover rounded-xl mb-6"
                  />
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold mb-2">Overview</h4>
                      <p className="text-slate-400">{selectedSystem.description}</p>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Detailed Description</h4>
                      <p className="text-slate-400">{selectedSystem.detailedDescription}</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="font-bold mb-4">Key Features</h4>
                    <div className="space-y-3">
                      {selectedSystem.features.map((feature: string, idx: number) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle size={20} className="text-cyan-400 mt-1 flex-shrink-0" />
                          <span className="text-slate-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-bold mb-4">Achievements & Impact</h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedSystem.achievements.map((achievement: string, idx: number) => (
                        <div key={idx} className="px-4 py-2 bg-slate-800/50 rounded-full">
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Demo Modal */}
      {demoModal.isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-950/90 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-slate-900 border border-white/10 rounded-2xl max-w-4xl w-full aspect-video"
          >
            <div className="p-4 flex justify-between items-center border-b border-white/10">
              <div className="font-bold">{demoModal.title}</div>
              <button
                onClick={() => setDemoModal({ ...demoModal, isOpen: false })}
                className="p-2 hover:bg-slate-800 rounded-lg"
              >
                <X size={24} />
              </button>
            </div>
            <div className="w-full h-[calc(100%-60px)]">
              <iframe 
                src={demoModal.videoUrl}
                className="w-full h-full"
                title={demoModal.title}
                frameBorder="0"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}