import { useState, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Trophy, MapPin, Clock, Users, Calendar, ChevronDown, Mail, Phone, CheckCircle2, AlertCircle, Sparkles, Hexagon, Layers, Zap } from 'lucide-react';
import { Button } from './components/ui/button';
import { Card, CardContent } from './components/ui/card';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );

}

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-cyan-50 to-purple-50">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg shadow-purple-100/50 border-b border-purple-200/30' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-purple-600" />
              <h3 className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">KC College Treasure Hunt</h3>
            </div>
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('about')} className="hover:text-purple-600 transition-colors">About</button>
              <button onClick={() => scrollToSection('details')} className="hover:text-purple-600 transition-colors">Details</button>
              <button onClick={() => scrollToSection('notes')} className="hover:text-purple-600 transition-colors">Important Notes</button>
              <button onClick={() => scrollToSection('register')} className="hover:text-purple-600 transition-colors">Register</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-purple-600 transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1598357427675-7e4fb362c7e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaXJyb3IlMjByZWZsZWN0aW9uJTIwc3ltbWV0cnl8ZW58MXx8fHwxNzYxNTUzNTQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Mirror Verse Background"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-50 via-white/95 to-cyan-50/80"></div>
        </div>

        {/* Floating Decorative Elements with Mirror Theme */}
        <motion.div
          className="absolute top-20 left-10 text-purple-300 opacity-40"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 10, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Hexagon className="w-24 h-24" />
        </motion.div>

        <motion.div
          className="absolute top-40 right-20 text-cyan-300 opacity-40"
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Layers className="w-32 h-32" />
        </motion.div>

        <motion.div
          className="absolute bottom-40 left-20 text-purple-300 opacity-40"
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 15, 0]
          }}
          transition={{ 
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Sparkles className="w-28 h-28" />
        </motion.div>

        <motion.div
          className="absolute bottom-32 right-16 text-cyan-300 opacity-40"
          animate={{ 
            y: [0, 15, 0],
            scale: [1, 1.15, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Zap className="w-20 h-20" />
        </motion.div>

        {/* Diamond/Mirror Pattern Overlay */}
        <div className="absolute inset-0 z-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: 'linear-gradient(45deg, rgba(147, 51, 234, 0.3) 1px, transparent 1px), linear-gradient(-45deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Reflection Effect */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 animate-pulse" style={{ animationDuration: '3s' }}></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-purple-100 to-cyan-100 rounded-full shadow-lg border border-purple-200/50">
              <span className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">✨ Limited Spots Available!</span>
            </div>
            
            <div className="mb-3">
              <span className="text-sm sm:text-base text-purple-600/70 tracking-wider uppercase">KC College Presents</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-2 bg-gradient-to-r from-purple-600 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent drop-shadow-lg">
              Treasure Hunt
            </h1>
            
            <p className="text-2xl sm:text-3xl text-gray-700 mb-4 drop-shadow-sm">
              2025
            </p>
            
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Embark on an epic adventure across campus where every puzzle unlocks new mysteries and every clue brings you closer to victory. 
              Navigate through checkpoints, solve challenging riddles, and discover hidden treasures!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-purple-200/50">
                <Calendar className="w-5 h-5 text-purple-600" />
                <span>November 15, 2025</span>
              </div>
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-cyan-200/50">
                <Clock className="w-5 h-5 text-cyan-600" />
                <span>2:00 PM - 4:00 PM</span>
              </div>
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-purple-200/50">
                <MapPin className="w-5 h-5 text-purple-600" />
                <span>KC College, Colaba</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <div className="flex items-center gap-2 text-gray-700">
                <Trophy className="w-5 h-5 text-purple-600" />
                <span>₹2,000 in Prizes</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-purple-400 rounded-full"></div>
              <div className="flex items-center gap-2 text-gray-700">
                <Users className="w-5 h-5 text-cyan-600" />
                <span>Teams of 3-5 Players</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-cyan-400 rounded-full"></div>
              <div className="flex items-center gap-2 text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-purple-600" />
                <span>FREE Registration</span>
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600/20 via-fuchsia-600/20 to-cyan-600/20 hover:from-purple-600/30 hover:via-fuchsia-600/30 hover:to-cyan-600/30 backdrop-blur-md border-2 border-purple-400/50 hover:border-purple-400/70 text-purple-700 hover:text-purple-800 px-10 py-7 shadow-2xl shadow-purple-500/30"
                onClick={() => scrollToSection('register')}
              >
                Register Your Team Now
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-16"
          >
            <ChevronDown className="w-8 h-8 mx-auto animate-bounce text-purple-600" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-4">
                <Hexagon className="w-8 h-8 text-purple-600" />
                <Sparkles className="w-6 h-6 text-cyan-500" />
              </div>
              <h2 className="text-4xl sm:text-5xl mb-6 bg-gradient-to-r from-purple-700 to-cyan-600 bg-clip-text text-transparent">About the Event</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join us for an exciting treasure hunt experience that will test your wit, teamwork, and navigation skills. 
                Navigate through checkpoints scattered across the KC College campus, solve challenging puzzles, and race 
                against time to claim victory!
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <AnimatedSection delay={0.2}>
              <Card className="border-2 border-purple-200 hover:border-purple-400 transition-all hover:shadow-xl hover:shadow-purple-200/50 bg-gradient-to-br from-white to-purple-50/30">
                <CardContent className="p-8">
                  <Trophy className="w-12 h-12 text-purple-600 mb-4" />
                  <h3 className="mb-4">Amazing Prizes</h3>
                  <p className="text-gray-600">
                    Win prizes worth ₹2,000 for the top 2 teams! Put your skills to the test and walk away with amazing rewards.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <Card className="border-2 border-cyan-200 hover:border-cyan-400 transition-all hover:shadow-xl hover:shadow-cyan-200/50 bg-gradient-to-br from-white to-cyan-50/30">
                <CardContent className="p-8">
                  <Users className="w-12 h-12 text-cyan-600 mb-4" />
                  <h3 className="mb-4">Team Adventure</h3>
                  <p className="text-gray-600">
                    Form teams of 3-5 players and work together to solve puzzles and navigate through exciting checkpoints across campus.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section id="details" className="py-20 px-4 bg-gradient-to-b from-white via-purple-50/30 to-white">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl sm:text-5xl text-center mb-16 bg-gradient-to-r from-purple-700 to-cyan-600 bg-clip-text text-transparent">Event Details</h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="text-center p-6 rounded-2xl hover:bg-white/60 transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-fuchsia-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-200/50">
                  <Calendar className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="mb-2">Date</h4>
                <p className="text-gray-600">November 15, 2025</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="text-center p-6 rounded-2xl hover:bg-white/60 transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-cyan-200/50">
                  <Clock className="w-8 h-8 text-cyan-600" />
                </div>
                <h4 className="mb-2">Time</h4>
                <p className="text-gray-600">2:00 PM - 4:00 PM</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="text-center p-6 rounded-2xl hover:bg-white/60 transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-200/50">
                  <MapPin className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="mb-2">Venue</h4>
                <p className="text-gray-600">KC College, Colaba Campus</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="text-center p-6 rounded-2xl hover:bg-white/60 transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-fuchsia-200/50">
                  <Users className="w-8 h-8 text-fuchsia-600" />
                </div>
                <h4 className="mb-2">Team Size</h4>
                <p className="text-gray-600">3-5 Players per Team</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <div className="text-center p-6 rounded-2xl hover:bg-white/60 transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-cyan-200/50">
                  <Trophy className="w-8 h-8 text-cyan-600" />
                </div>
                <h4 className="mb-2">Prizes</h4>
                <p className="text-gray-600">₹2,000 for Top 2 Teams</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <div className="text-center p-6 rounded-2xl hover:bg-white/60 transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-200/50">
                  <CheckCircle2 className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="mb-2">Registration</h4>
                <p className="text-gray-600">Completely FREE!</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section id="notes" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <AlertCircle className="w-16 h-16 text-purple-600 mx-auto mb-4" />
              <h2 className="text-4xl sm:text-5xl mb-6 bg-gradient-to-r from-purple-700 to-cyan-600 bg-clip-text text-transparent">Important Notes</h2>
              <p className="text-xl text-gray-600">
                Please read carefully before registering
              </p>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-6">
            <AnimatedSection delay={0.1}>
              <Card className="bg-gradient-to-br from-purple-50 via-white to-purple-50/30 border-purple-200 hover:border-purple-400 transition-all hover:shadow-lg hover:shadow-purple-200/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-fuchsia-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-md">
                      1
                    </div>
                    <div>
                      <h4 className="mb-2">Comfortable Shoes</h4>
                      <p className="text-gray-600">
                        Wear comfortable shoes as you'll be navigating around the campus throughout the event.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card className="bg-gradient-to-br from-cyan-50 via-white to-cyan-50/30 border-cyan-200 hover:border-cyan-400 transition-all hover:shadow-lg hover:shadow-cyan-200/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-cyan-600 to-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-md">
                      2
                    </div>
                    <div>
                      <h4 className="mb-2">Pen & Paper</h4>
                      <p className="text-gray-600">
                        Bring pen and paper for solving puzzles and taking notes during the hunt.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <Card className="bg-gradient-to-br from-purple-50 via-white to-pink-50/30 border-purple-200 hover:border-purple-400 transition-all hover:shadow-lg hover:shadow-purple-200/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-md">
                      3
                    </div>
                    <div>
                      <h4 className="mb-2">Stay Hydrated</h4>
                      <p className="text-gray-600">
                        Bring water to stay hydrated throughout the 2-hour event.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <Card className="bg-gradient-to-br from-cyan-50 via-white to-purple-50/30 border-cyan-200 hover:border-cyan-400 transition-all hover:shadow-lg hover:shadow-cyan-200/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-cyan-600 to-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-md">
                      4
                    </div>
                    <div>
                      <h4 className="mb-2">Limited Spots</h4>
                      <p className="text-gray-600">
                        Spots are limited, so register early to secure your team's place!
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section id="register" className="py-20 px-4 bg-gradient-to-r from-purple-600 via-fuchsia-600 to-cyan-600 text-white relative overflow-hidden">
        {/* Animated background effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 animate-pulse" style={{ animationDuration: '4s' }}></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <AnimatedSection>
            <Sparkles className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-4xl sm:text-5xl mb-6">Ready to Begin Your Adventure?</h2>
            <p className="text-xl mb-8 opacity-90">
              Register your team now and prepare for an unforgettable treasure hunt experience!
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-white/20 hover:bg-white/30 backdrop-blur-md border-2 border-white/50 hover:border-white/70 text-white px-8 py-6 shadow-2xl"
                onClick={() => window.open('https://forms.google.com', '_blank')}
              >
                Register Your Team on Google Forms
              </Button>
            </motion.div>
            <p className="mt-6 opacity-80">
              Registration is completely FREE • Limited spots available
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-b from-white via-purple-50/20 to-white">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl mb-6 bg-gradient-to-r from-purple-700 to-cyan-600 bg-clip-text text-transparent">Contact Us</h2>
              <p className="text-xl text-gray-600">
                Have questions? We're here to help!
              </p>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <AnimatedSection delay={0.2}>
              <Card className="hover:shadow-xl hover:shadow-purple-200/50 transition-all border-2 border-purple-100 hover:border-purple-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-fuchsia-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-200/50">
                    <Mail className="w-8 h-8 text-purple-600" />
                  </div>
                  <h4 className="mb-3">Email</h4>
                  <a href="mailto:treasurehunt@kccollege.edu.in" className="text-purple-600 hover:underline">
                    treasurehunt@kccollege.edu.in
                  </a>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <Card className="hover:shadow-xl hover:shadow-cyan-200/50 transition-all border-2 border-cyan-100 hover:border-cyan-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-cyan-200/50">
                    <Phone className="w-8 h-8 text-cyan-600" />
                  </div>
                  <h4 className="mb-3">Phone</h4>
                  <a href="tel:+919000000000" className="text-cyan-600 hover:underline">
                    +91 90000 00000
                  </a>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-purple-400" />
              <h3 className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">KC College Treasure Hunt 2025</h3>
            </div>
            <p className="text-gray-400 mb-6">
              Organized by KC College, Colaba Campus
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-purple-400 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('details')} className="text-gray-400 hover:text-purple-400 transition-colors">
              Details
            </button>
            <button onClick={() => scrollToSection('notes')} className="text-gray-400 hover:text-purple-400 transition-colors">
              Important Notes
            </button>
            <button onClick={() => scrollToSection('register')} className="text-gray-400 hover:text-purple-400 transition-colors">
              Register
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-purple-400 transition-colors">
              Contact
            </button>
          </div>
          
          <div className="text-center text-gray-400 text-sm border-t border-gray-800 pt-8">
            <p>© 2025 KC College. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
