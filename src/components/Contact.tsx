import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-item',
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
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

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'WH4J+74P, KR Layout, JP Nagar 7th Phase, J. P. Nagar, Bengaluru, Karnataka 560078',
      isClickable: true,
      link: 'https://maps.google.com/?q=WH4J+74P,+KR+Layout,+JP+Nagar+7th+Phase,+J.+P.+Nagar,+Bengaluru,+Karnataka+560078'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '09980701196',
      isClickable: true,
      link: 'tel:+919980701196'
    },
    // {
    //   icon: Mail,
    //   title: 'Email Us',
    //   content: 'hello@slvcakepalace.com'
    // },
    {
      icon: Clock,
      title: 'Hours',
      content: 'Mon-Sun: 9:00 AM - 9:00 PM'
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="contact-item text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="contact-item text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to make your celebration special? Contact us to discuss your custom cake needs or visit our bakery.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="contact-item">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300 bg-gradient-to-r from-pink-50 to-orange-50">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-orange-400 rounded-full flex items-center justify-center">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">{info.title}</h4>
                        {info.isClickable ? (
                          <a 
                            href={info.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-pink-600 transition-colors cursor-pointer underline decoration-pink-300 hover:decoration-pink-600"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-gray-600">{info.content}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="contact-item">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-pink-50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Your Name"
                      className="border-pink-200 focus:border-pink-400 focus:ring-pink-200"
                    />
                    <Input
                      type="email"
                      placeholder="Your Email"
                      className="border-pink-200 focus:border-pink-400 focus:ring-pink-200"
                    />
                  </div>
                  <Input
                    placeholder="Subject"
                    className="border-pink-200 focus:border-pink-400 focus:ring-pink-200"
                  />
                  <Textarea
                    placeholder="Your Message"
                    rows={5}
                    className="border-pink-200 focus:border-pink-400 focus:ring-pink-200"
                  />
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500 text-white py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;