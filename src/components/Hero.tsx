import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { ChefHat, Star } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animate title with split text effect
    if (titleRef.current) {
      const title = titleRef.current;
      const text = title.textContent;
      title.innerHTML = '';
      
      text?.split('').forEach((char, i) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.display = 'inline-block';
        title.appendChild(span);
        
        gsap.fromTo(
          span,
          { y: 100, opacity: 0, rotationZ: 10 },
          {
            y: 0,
            opacity: 1,
            rotationZ: 0,
            duration: 0.8,
            delay: i * 0.03,
            ease: 'back.out(1.7)'
          }
        );
      });
    }

    // Animate other elements
    tl.fromTo(
      subtitleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
      0.5
    )
      .fromTo(
        buttonRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
        0.8
      )
      .fromTo(
        imageRef.current,
        { scale: 0.8, opacity: 0, rotationY: 15 },
        {
          scale: 1,
          opacity: 1,
          rotationY: 0,
          duration: 1.5,
          ease: 'power3.out'
        },
        0.3
      );

    // Floating animation for the image
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut'
      });
    }
  }, []);

  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-white to-orange-50 pt-20"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-4">
              <ChefHat className="w-8 h-8 text-pink-500 mr-2" />
              <span className="text-pink-500 font-semibold">Premium Bakery</span>
            </div>
            
            <h1
              ref={titleRef}
              className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-orange-500 to-pink-600 bg-clip-text text-transparent leading-tight"
            >
              S.L.V Cake Palace
            </h1>
            
            <p
              ref={subtitleRef}
              className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl"
            >
              Indulge in our exquisite collection of handcrafted cakes and cookies, 
              made with love and the finest ingredients. Every bite tells a story of 
              passion and perfection.
            </p>
            
            <div ref={buttonRef} className="flex items-center justify-center lg:justify-start gap-4">
              <Button
                onClick={scrollToMenu}
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Explore Menu
              </Button>
              <div className="flex items-center text-gray-600">
                <div className="flex mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="font-medium">4/5 Rating</span>
              </div>
            </div>
          </div>

          <div ref={imageRef} className="relative">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-orange-400 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-2xl">
                <img
                  src="https://plus.unsplash.com/premium_photo-1713447395823-2e0b40b75a89?q=80&w=682&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Beautiful layered cake"
                  className="w-full h-96 object-cover rounded-xl glow-effect"
                />
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-pink-500 to-orange-400 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                  Premium Quality
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;