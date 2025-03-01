import React, { useEffect, useRef, useState, Suspense } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { Canvas, useFrame, useLoader } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import Header from "./Header";
// import Footer from './Footer';
import {
  FaMicrophone,
  FaRobot,
  FaHeartbeat,
  FaShieldAlt,
  FaStethoscope,
  FaQuoteLeft,
} from 'react-icons/fa';

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/* =====================================================================
   ERROR BOUNDARY COMPONENT
   ===================================================================== */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="text-center p-8">
          <h2>Something went wrong.</h2>
          <p>Please refresh the page or try again later.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

/* =====================================================================
   HEADER COMPONENT
   ===================================================================== */

/* =====================================================================
   HERO SECTION
   ===================================================================== */
   function HumanHeart2D() {
    const heartRef = useRef(null);
  
    useEffect(() => {
      // Pulsing animation: scale up and down continuously.
      gsap.to(heartRef.current, {
        scale: 1.2,
        duration: 0.5,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
        transformOrigin: '50% 50%',
      });
    }, []);
  
    return (
      <div className="absolute inset-0 flex justify-center items-center">
        <img
          ref={heartRef}
          src="../src/assets/heart1.png"  // Replace with your actual SVG file path
          // src="../src/assets/heart2.png"  // Replace with your actual SVG file path
          // src="../src/assets/heart3.png"  // Replace with your actual SVG file path
          alt="Human Heart"
          className="w-50 h-50"
        />
      </div>
    );
  }
  
  /**
   * HeroSection Component
   * Displays the hero section with the animated human heart in the background and overlay content.
   */
  function HeroSection() {
    return (
      <section
        id="home"
        className="relative h-screen flex flex-col justify-center items-center bg-gradient-to-br from-red-500 to-white text-center px-6"
      >
        {/* 2D Human Heart Animation */}
        <HumanHeart2D />
  
        {/* Overlay Content */}
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-6xl font-bold text-white">
            Automating Surgical Documentation
          </h2>
          <p className="text-2xl text-white mt-4">
            Leveraging AI, NLP, and immersive tech to revolutionize the OR.
          </p>
          <button className="mt-18 px-8 py-4 bg-white text-red-600 font-bold rounded-full shadow-lg">
            Learn More
          </button>
        </div>
      </section>
    );
  }
  
/* =====================================================================
   FEATURES SECTION
   ===================================================================== */
function FeaturesSection() {
  const features = [
    {
      icon: <FaMicrophone />,
      title: 'Speech-to-Text AI',
      description: 'Capture every detail with advanced voice recognition.',
    },
    {
      icon: <FaRobot />,
      title: 'NLP Integration',
      description: 'Context-aware analysis using natural language processing.',
    },
    {
      icon: <FaHeartbeat />,
      title: 'Real-Time Transcription',
      description: 'Document procedures as they hHomeen, instantly.',
    },
    {
      icon: <FaShieldAlt />,
      title: 'Secure Data Management',
      description: 'HIPAA-compliant and fully secure data storage.',
    },
    {
      icon: <FaStethoscope />,
      title: 'Medical Insights',
      description: 'Gain actionable insights from procedure data.',
    },
  ];

  return (
    <section id="features" className="py-20 bg-white text-center">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-4xl font-bold text-red-600 mb-12"
      >
        Features
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-8 px-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="p-6 bg-gray-100 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="text-5xl text-red-600 mb-4">{feature.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* =====================================================================
   HOW IT WORKS SECTION
   ===================================================================== */
function HowItWorksSection() {
  const steps = [
    {
      title: 'Initiate Procedure',
      description: 'Start your surgery and let our system capture every word.',
    },
    {
      title: 'Real-Time Transcription',
      description: 'AI converts speech to text as the procedure unfolds.',
    },
    {
      title: 'Automated Documentation',
      description: 'Generate precise documentation instantly.',
    },
    {
      title: 'Secure Storage & Insights',
      description: 'Store data securely and analyze for improvements.',
    },
  ];

  return (
    <section id="howitworks" className="py-20 bg-gray-50 text-center">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-4xl font-bold text-red-600 mb-12"
      >
        How It Works
      </motion.h2>
      <div className="max-w-4xl mx-auto px-4">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="mb-8 p-6 bg-white rounded-lg shadow-lg"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.3 }}
          >
            <h3 className="text-2xl font-bold text-red-600 mb-2">
              {index + 1}. {step.title}
            </h3>
            <p className="text-gray-700 text-lg">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* =====================================================================
   TECHNOLOGY SECTION
   ===================================================================== */
function TechnologySection() {
  return (
    <section id="technology" className="py-20 bg-white text-center">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-4xl font-bold text-red-600 mb-12"
      >
        Our Technology
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="max-w-3xl mx-auto text-xl text-gray-700 mb-8 px-4"
      >
        Our platform combines state-of-the-art speech recognition, natural language processing, and 3D visualization to ensure every surgical procedure is documented with surgical precision.
      </motion.p>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        className="flex justify-center items-center"
      >
        <div className="w-48 h-48 bg-red-600 rounded-full shadow-2xl"></div>
      </motion.div>
    </section>
  );
}

/* =====================================================================
   TESTIMONIALS SECTION
   ===================================================================== */
function TestimonialsSection() {
  const testimonials = [
    '“MediDoc AI has revolutionized our surgical documentation – precise, fast, and incredibly intuitive.”',
    '“The integration of AI and 3D visualizations has set a new standard in medical documentation.”',
    '“I highly recommend MediDoc AI for its innovation and ease of use during surgeries.”',
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-red-500 to-white text-center">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-4xl font-bold text-white mb-12"
      >
        What Medical Professionals Say
      </motion.h2>
      <motion.div
        key={current}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-2xl mx-auto text-white text-xl italic px-4"
      >
        <FaQuoteLeft className="text-3xl inline-block mb-4" />
        {testimonials[current]}
      </motion.div>
    </section>
  );
}

/* =====================================================================
   CONTACT SECTION
   ===================================================================== */
function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white text-center">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-4xl font-bold text-red-600 mb-12"
      >
        Get In Touch
      </motion.h2>
      <motion.form
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="max-w-md mx-auto px-4"
      >
        <div className="mb-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 border rounded-lg focus:outline-none focus:border-red-600"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 border rounded-lg focus:outline-none focus:border-red-600"
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-4 border rounded-lg focus:outline-none focus:border-red-600"
          ></textarea>
        </div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="w-full px-8 py-4 bg-red-600 text-white font-bold rounded-full shadow-lg"
        >
          Send Message
        </motion.button>
      </motion.form>
    </section>
  );
}

/* =====================================================================
   FOOTER COMPONENT
   ===================================================================== */


/* =====================================================================
   MAIN Home COMPONENT
   ===================================================================== */
function Home() {
  // GSAP ScrollTrigger for elements with the "animate" class
  useEffect(() => {
    gsap.utils.toArray('.animate').forEach((elem) => {
      gsap.from(elem, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: elem,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    });
  }, []);

  return (
    <div className="overflow-x-hidden">
      <main className="pt-16">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TechnologySection />
        <TestimonialsSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default Home;
