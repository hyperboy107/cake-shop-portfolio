import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.gallery-item',
        { y: 100, opacity: 0, scale: 0.8 },
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

  const galleryImages = [
    {
      src: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Beautiful layered cake'
    },
    {
      src: 'https://media.istockphoto.com/id/515447912/photo/blueberry-cheesecake.webp?a=1&b=1&s=612x612&w=0&k=20&c=Cp60bRLWRdYL00LRwqlt4ZEdGr_zI2EUV0SaI9mqTuI=',
      alt: 'Blueberry cheese cake'
    },
    {
      src: 'https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Colorful macarons'
    },
    {
      src: 'https://media.istockphoto.com/id/869598944/photo/delicious-chocolate-layer-cake.webp?a=1&b=1&s=612x612&w=0&k=20&c=KsYewEoT4zhq-FaKotpCFExTcy4PkBBpslxLBoM3rg4=',
      alt: 'Chocolate chip cake'
    },
    {
      src: 'https://images.unsplash.com/photo-1614707267785-109d783758ea?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Red velvet cake'
    },
    {
      src: 'https://images.unsplash.com/photo-1583743089695-4b816a340f82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGNvb2tpZXN8ZW58MHx8MHx8fDA%3D',
      alt: 'Decorated cookies'
    }
  ];

  return (
    <section id="gallery" ref={sectionRef} className="py-20 bg-gradient-to-br from-pink-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent">
            Sweet Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a visual journey through our delicious creations and see why every piece is a work of art.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="gallery-item group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-orange-400 rounded-2xl blur-sm opacity-0 group-hover:opacity-30 transition duration-500"></div>
              <div className="relative bg-white rounded-2xl overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500 glow-effect"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-semibold">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;