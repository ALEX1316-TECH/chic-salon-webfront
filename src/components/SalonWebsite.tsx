import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { SalonCarousel } from './SalonCarousel';
import { ServiceCard } from './ServiceCard';
import { BookingForm } from './BookingForm';
import { 
  Scissors, 
  Sparkles, 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Instagram,
  Facebook,
  Twitter,
  ArrowUp
} from 'lucide-react';

const services = [
  {
    title: 'Hair Cut & Style',
    description: 'Professional haircuts and styling for all hair types. Includes wash, cut, and blow-dry.',
    price: '$45',
    duration: '60 min'
  },
  {
    title: 'Hair Coloring',
    description: 'Full hair coloring service with premium products. Consultation included.',
    price: '$85',
    duration: '120 min'
  },
  {
    title: 'Highlights',
    description: 'Beautiful highlights to add dimension and brightness to your hair.',
    price: '$95',
    duration: '150 min'
  },
  {
    title: 'Manicure',
    description: 'Complete nail care including cuticle treatment, shaping, and polish.',
    price: '$35',
    duration: '45 min'
  },
  {
    title: 'Pedicure',
    description: 'Relaxing foot treatment with exfoliation, massage, and nail care.',
    price: '$45',
    duration: '60 min'
  },
  {
    title: 'Facial Treatment',
    description: 'Deep cleansing facial with customized treatment for your skin type.',
    price: '$75',
    duration: '75 min'
  },
  {
    title: 'Massage Therapy',
    description: 'Relaxing full-body massage to relieve stress and tension.',
    price: '$90',
    duration: '90 min'
  },
  {
    title: 'Eyebrow Shaping',
    description: 'Professional eyebrow shaping and tinting for perfect brows.',
    price: '$25',
    duration: '30 min'
  },
  {
    title: 'Hair Treatment',
    description: 'Nourishing hair treatment to restore shine and health.',
    price: '$55',
    duration: '45 min'
  },
  {
    title: 'Bridal Package',
    description: 'Complete bridal beauty package including hair, makeup, and nails.',
    price: '$250',
    duration: '240 min'
  }
];

export const SalonWebsite = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50 shadow-soft">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                <Scissors className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Bella Beauty</h1>
                <p className="text-sm text-muted-foreground">Premium Salon & Spa</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
              <a href="#booking" className="text-foreground hover:text-primary transition-colors">Book Now</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Where Beauty
              <span className="text-primary block">Meets Excellence</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Experience luxury beauty services in our modern salon. Expert stylists, premium products, and personalized care for every client.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-soft"
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Book Your Appointment
            </Button>
          </div>
        </div>
      </section>

      {/* Image Carousel */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="animate-fade-in">
            <SalonCarousel />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover our comprehensive range of beauty and wellness services, each designed to enhance your natural beauty.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-foreground mb-4">Book Your Appointment</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ready to transform your look? Book your appointment now and let our expert team take care of you.
            </p>
          </div>
          <div className="animate-scale-in">
            <BookingForm />
          </div>
        </div>
      </section>

      {/* Contact & Social Section */}
      <section id="contact" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-foreground mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Address</h3>
                    <p className="text-muted-foreground">123 Beauty Lane, Downtown City, ST 12345</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <p className="text-muted-foreground">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-muted-foreground">info@bellabeauty.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Hours</h3>
                    <p className="text-muted-foreground">Mon-Sat: 9AM-7PM<br />Sun: 10AM-5PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-slide-in-right">
              <Card className="bg-gradient-card shadow-elegant">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Follow Us</h3>
                  <p className="text-muted-foreground mb-6">
                    Stay connected with us on social media for the latest updates, beauty tips, and special offers.
                  </p>
                  <div className="flex space-x-4">
                    <Button 
                      variant="outline" 
                      size="icon"
                      className="hover:bg-primary hover:text-primary-foreground transition-colors"
                      onClick={() => window.open('https://instagram.com', '_blank')}
                    >
                      <Instagram className="h-5 w-5" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon"
                      className="hover:bg-primary hover:text-primary-foreground transition-colors"
                      onClick={() => window.open('https://facebook.com', '_blank')}
                    >
                      <Facebook className="h-5 w-5" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon"
                      className="hover:bg-primary hover:text-primary-foreground transition-colors"
                      onClick={() => window.open('https://twitter.com', '_blank')}
                    >
                      <Twitter className="h-5 w-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                <Scissors className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Bella Beauty</h3>
                <p className="text-sm text-gray-300">Premium Salon & Spa</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              &copy; 2024 Bella Beauty. All rights reserved.
            </p>
            <p className="text-sm text-gray-400">
              Crafted with love for beautiful transformations
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          size="icon"
          className="fixed bottom-8 right-8 bg-primary hover:bg-primary/90 shadow-elegant animate-float"
          onClick={scrollToTop}
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
};