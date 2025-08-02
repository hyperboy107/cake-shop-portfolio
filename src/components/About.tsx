import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Clock, Heart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section entrance
      gsap.fromTo(
        '.about-content',
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Animate stats
      gsap.fromTo(
        '.stat-card',
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { icon: Award, value: '5+', label: 'Years Experience' },
    { icon: Users, value: '5K+', label: 'Happy Customers' },
    { icon: Clock, value: '24/7', label: 'Fresh Baking' },
    { icon: Heart, value: '100%', label: 'Made with Love' }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gradient-to-br from-orange-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="about-content text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent">
            About Our Palace
          </h2>
          <p className="about-content text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            For over 5 years, S.L.V Cake Palace has been creating magical moments through 
            our exquisite cakes and cookies. We believe every celebration deserves something special.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="about-content">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-pink-400 to-orange-400 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition duration-300"></div>
              <img
                src="https://images.pexels.com/photos/3992134/pexels-photo-3992134.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Baker creating beautiful cakes"
                className="relative w-full h-96 object-cover rounded-2xl shadow-2xl glow-effect"
              />
            </div>
          </div>

          <div className="about-content space-y-6">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h3>
            <p className="text-gray-600 leading-relaxed">
              What started as a small family bakery has grown into a beloved destination for 
              cake lovers across the city. Our master bakers combine traditional techniques 
              with modern innovation to create unforgettable flavors.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Every cake tells a story, every cookie brings a smile. We use only the finest 
              ingredients, sourced locally when possible, and every creation is made fresh 
              to order with meticulous attention to detail.
            </p>
            <div className="flex items-center space-x-4 pt-4">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-orange-400 rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-gray-800">Made with Passion</h4>
                <p className="text-gray-600">Every creation is crafted with love and care</p>
              </div>
            </div>
          </div>
        </div>

        <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="stat-card text-center bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;