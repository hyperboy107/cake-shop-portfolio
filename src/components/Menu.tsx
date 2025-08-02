import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

gsap.registerPlugin(ScrollTrigger);

const Menu = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.menu-item',
        { y: 100, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const menuItems = [
    {
      category: 'Signature Cakes',
      items: [
        {
          name: 'Royal Chocolate Delight',
          price: '₹120',
          image: 'https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Rich chocolate layers with Belgian ganache',
          isSpecial: true
        },
        {
          name: 'Strawberry Dream',
          price: '₹60',
          image: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Fresh strawberries with vanilla cream'
        },
        {
          name: 'Red Velvet Classic',
          price: '₹80',
          image: 'https://images.unsplash.com/photo-1714386148315-2f0e3eebcd5a?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          description: 'Traditional red velvet with cream cheese frosting'
        }
      ]
    },
    {
      category: 'Artisan Cookies',
      items: [
        {
          name: 'Chocolate Chip Paradise',
          price: '₹50',
          image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2hvY29sYXRlJTIwY2FrZXxlbnwwfHwwfHx8MA%3D%3D',
          description: 'Premium chocolate chips in buttery dough'
        },
        {
          name: 'Macaron Collection',
          price: '₹130',
          image: 'https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Assorted French macarons in 6 flavors',
          isSpecial: true
        },
        {
          name: 'Sugar Cookie Art',
          price: '₹40',
          image: 'https://images.pexels.com/photos/3992134/pexels-photo-3992134.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Hand-decorated sugar cookies'
        }
      ]
    }
  ];

  return (
    <section id="menu" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent">
            Our Delicious Menu
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our handcrafted selection of cakes and cookies, each made with premium ingredients and artistic flair.
          </p>
        </div>

        {menuItems.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
              {category.category}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((item, itemIndex) => (
                <Card
                  key={itemIndex}
                  className="menu-item group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-pink-50"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500 glow-effect"
                    />
                    {item.isSpecial && (
                      <Badge className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-orange-400 text-white">
                        Special
                      </Badge>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-xl font-bold text-gray-800 group-hover:text-pink-600 transition-colors">
                        {item.name}
                      </h4>
                      <span className="text-2xl font-bold text-pink-600">{item.price}</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;