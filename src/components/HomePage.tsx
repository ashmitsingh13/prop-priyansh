"use client";
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Image } from '@/components/ui/image';
import { BaseCrudService } from '@/lib/data';
import { Properties, Services } from '@/types';
import { MapPin, Phone, Mail, ArrowRight, Star, Users, Building, Award, Menu, X } from 'lucide-react';

export default function HomePage() {
  const [properties, setProperties] = useState<Properties[]>([]);
  const [services, setServices] = useState<Services[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Gujarat-themed background images
  const backgroundImages = [
    'https://static.wixstatic.com/media/d1fa15_162820dddc914bd5ad2830cec0d5a878~mv2.png?originWidth=1152&originHeight=640',
    'https://static.wixstatic.com/media/d1fa15_d343d2039b5744379b3cd2f5a2d9f4c6~mv2.png?originWidth=1152&originHeight=640',
    'https://static.wixstatic.com/media/d1fa15_db817d3020fd4e72ae6d952c1bdc71d8~mv2.png?originWidth=1152&originHeight=640',
    'https://static.wixstatic.com/media/d1fa15_85d07034fe9c41f599354abfb5080245~mv2.png?originWidth=1152&originHeight=640',
    'https://static.wixstatic.com/media/d1fa15_5f92194190d74001bd0ed746abd01509~mv2.png?originWidth=1152&originHeight=640'
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [propertiesData, servicesData] = await Promise.all([
          BaseCrudService.getAll<Properties>('properties'),
          BaseCrudService.getAll<Services>('services')
        ]);
        setProperties(propertiesData.items.slice(0, 6));
        setServices(servicesData.items.slice(0, 3));
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Auto-slide effect for background images
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(slideInterval);
  }, [backgroundImages.length]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="w-full border-b border-secondary/10">
        <div className="max-w-[120rem] mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="font-heading text-3xl md:text-4xl text-secondary uppercase tracking-tight">
              PROPRIYANSH
            </h1>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="font-paragraph text-primary border-b-2 border-primary">
                HOME
              </Link>
              <Link href="/properties" className="font-paragraph text-secondary hover:text-primary transition-colors">
                PROPERTIES
              </Link>
              <Link href="/services" className="font-paragraph text-secondary hover:text-primary transition-colors">
                SERVICES
              </Link>
              <Link href="/about" className="font-paragraph text-secondary hover:text-primary transition-colors">
                ABOUT
              </Link>
            </nav>
            
            {/* Desktop Contact Button */}
            <Button variant="outline" size="sm" className="hidden md:flex g-secondary-foreground hover:bg-secondary">
              <Phone className="w-4 h-4 mr-2" />
              <Link href="/contact">Contact</Link>
            </Button>
            
            {/* Mobile Menu Button */}
            <Button
              variant="outline"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
          
          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-secondary/10">
              <nav className="flex flex-col space-y-4 pt-4">
                <Link 
                  href="/" 
                  className="font-paragraph text-primary font-semibold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  HOME
                </Link>
                <Link 
                  href="/properties" 
                  className="font-paragraph text-secondary hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  PROPERTIES
                </Link>
                <Link 
                  href="/services" 
                  className="font-paragraph text-secondary hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  SERVICES
                </Link>
                <Link 
                  href="/about" 
                  className="font-paragraph text-secondary hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  ABOUT
                </Link>
                <Link 
                  href="/contact" 
                  className="font-paragraph text-secondary hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  CONTACT
                </Link>
                <Button variant="outline" size="sm" className="self-start mt-2">
                  <Phone className="w-4 h-4 mr-2" />
                  +91 93899 03679
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section with Background Slider */}
      <section className="w-full max-w-[120rem] mx-auto relative overflow-hidden">
        {/* Background Image Slider */}
        <div className="absolute inset-0 z-0">
          {backgroundImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-70' : 'opacity-0'
              }`}
            >
              <Image
                src={image}
                alt={`Gujarat heritage background ${index + 1}`}
                width={1200}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          {/* Gradient Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-center min-h-[80vh] px-6 lg:px-12 py-16 lg:py-24 text-center">
          <div className="max-w-4xl">
            {/* Gujarat-inspired decorative element */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-1 bg-highlightyellow rounded-full"></div>
              <div className="w-4 h-4 bg-primary rounded-full mx-2 -mt-1.5"></div>
              <div className="w-16 h-1 bg-highlightyellow rounded-full"></div>
            </div>
            
            <h2 className="font-heading text-5xl lg:text-7xl text-secondary uppercase leading-none mb-6 drop-shadow-sm">
              REAL ESTATE
              <br />
              <span className="text-primary">PROPERTY CONSULTANT</span>
            </h2>
            
            {/* Gujarat subtitle */}
            <div className="font-paragraph text-xl text-highlightyellow/90 mb-4 font-semibold">
              ગુજરાતના હૃદયમાં • In the Heart of Gujarat
            </div>
            
            <p className="font-paragraph text-lg lg:text-xl text-secondary/90 mb-8 leading-relaxed drop-shadow-sm">
              Discover exceptional residential and commercial properties in Dholera Smart City. 
              Expert guidance rooted in Gujarat&apos;s rich heritage, transparent deals, and your dream property awaits.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/properties">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg">
                  <Building className="w-5 h-5 mr-2" />
                  View Properties
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-background/80 backdrop-blur-sm shadow-lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Get Expert Advice
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-primary scale-110' 
                  : 'bg-background/50 hover:bg-background/70'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section with Gujarat Pattern */}
      <section className="w-full bg-secondary py-16 relative">
        {/* Gujarat-inspired pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B9B04A' fill-opacity='0.3'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="max-w-[100rem] mx-auto px-6 relative z-10">
          {/* Gujarat-inspired decorative header */}
          <div className="text-center mb-12">
            <div className="flex justify-center items-center mb-4">
              <div className="w-8 h-8 border-2 border-highlightyellow rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
              </div>
              <div className="w-16 h-0.5 bg-highlightyellow mx-4"></div>
              <div className="font-paragraph text-highlightyellow text-sm">ગુજરાતની વિશ્વસનીયતા</div>
              <div className="w-16 h-0.5 bg-highlightyellow mx-4"></div>
              <div className="w-8 h-8 border-2 border-highlightyellow rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="font-heading text-4xl lg:text-5xl text-primary mb-2">500+</div>
              <div className="font-paragraph text-secondary-foreground">Properties Sold</div>
              <div className="font-paragraph text-highlightyellow/70 text-xs mt-1">વેચાયેલી મિલકતો</div>
            </div>
            <div className="text-center">
              <div className="font-heading text-4xl lg:text-5xl text-primary mb-2">1000+</div>
              <div className="font-paragraph text-secondary-foreground">Happy Clients</div>
              <div className="font-paragraph text-highlightyellow/70 text-xs mt-1">ખુશ ગ્રાહકો</div>
            </div>
            <div className="text-center">
              <div className="font-heading text-4xl lg:text-5xl text-primary mb-2">15+</div>
              <div className="font-paragraph text-secondary-foreground">Years Experience</div>
              <div className="font-paragraph text-highlightyellow/70 text-xs mt-1">વર્ષોનો અનુભવ</div>
            </div>
            <div className="text-center">
              <div className="font-heading text-4xl lg:text-5xl text-primary mb-2">50+</div>
              <div className="font-paragraph text-secondary-foreground">Projects Completed</div>
              <div className="font-paragraph text-highlightyellow/70 text-xs mt-1">પૂર્ણ પ્રોજેક્ટ્સ</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="w-full py-20">
        <div className="max-w-[100rem] mx-auto px-6">
          <div className="text-center mb-16">
            {/* Gujarat-inspired section header */}
            <div className="flex justify-center mb-6">
              <div className="w-12 h-1 bg-highlightyellow rounded-full"></div>
              <div className="w-6 h-6 bg-primary rounded-full mx-3 -mt-2.5 flex items-center justify-center">
                <div className="w-2 h-2 bg-background rounded-full"></div>
              </div>
              <div className="w-12 h-1 bg-highlightyellow rounded-full"></div>
            </div>
            
            <h3 className="font-heading text-5xl lg:text-6xl text-secondary uppercase mb-6">
              FEATURED PROPERTIES
            </h3>
            <div className="font-paragraph text-highlightyellow mb-4">પસંદગીની મિલકતો</div>
            <p className="font-paragraph text-lg text-secondary/80 max-w-3xl mx-auto">
              Explore our handpicked selection of premium properties in Dholera Smart City, 
              each offering exceptional value and modern amenities rooted in Gujarat&apos;s progressive vision.
            </p>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-background border border-secondary/10 rounded-lg p-6 animate-pulse">
                  <div className="w-full h-48 bg-secondary/10 rounded mb-4"></div>
                  <div className="h-6 bg-secondary/10 rounded mb-2"></div>
                  <div className="h-4 bg-secondary/10 rounded mb-4"></div>
                  <div className="h-8 bg-secondary/10 rounded"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {properties.map((property) => (
                <Card key={property._id} className="group hover:shadow-lg transition-all duration-300 border-secondary/10">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <Image
                        src={property.mainImage || 'https://static.wixstatic.com/media/d1fa15_90b37c953413485c9aed3631bdd123a1~mv2.png?originWidth=384&originHeight=448'}
                        alt={property.propertyName || 'Property'}
                        width={400}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary text-primary-foreground px-3 py-1 rounded font-paragraph text-sm">
                          {property.propertyType}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className="font-heading text-xl text-secondary mb-2">
                        {property.propertyName}
                      </h4>
                      <p className="font-paragraph text-secondary/70 mb-3 flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {property.location}
                      </p>
                      <p className="font-paragraph text-sm text-secondary/60 mb-4 line-clamp-2">
                        {property.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-heading text-2xl text-primary">
                            ₹{property.price?.toLocaleString()}
                          </div>
                          <div className="font-paragraph text-sm text-secondary/60">
                            {property.areaSqFt} sq ft
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Link href="/properties">
              <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                View All Properties
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full bg-highlightyellow/20 py-20">
        <div className="max-w-[100rem] mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="font-heading text-5xl lg:text-6xl text-secondary uppercase mb-6">
              OUR SERVICES
            </h3>
            <p className="font-paragraph text-lg text-secondary/80 max-w-3xl mx-auto">
              Comprehensive real estate solutions tailored to your needs, from buying and selling 
              to investment guidance and property management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service._id} className="bg-background border-secondary/10 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Building className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-heading text-2xl text-secondary mb-4">
                    {service.serviceName}
                  </h4>
                  <p className="font-paragraph text-secondary/70 mb-6">
                    {service.shortDescription}
                  </p>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    {service.callToActionText || 'Learn More'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full py-20">
        <div className="max-w-[100rem] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="font-heading text-5xl lg:text-6xl text-secondary uppercase mb-8">
                WHY CHOOSE
                <br />
                PROPRIYANSH
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading text-xl text-secondary mb-2">Expert Guidance</h4>
                    <p className="font-paragraph text-secondary/70">
                      15+ years of experience in Dholera real estate market with deep local knowledge.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading text-xl text-secondary mb-2">Transparent Deals</h4>
                    <p className="font-paragraph text-secondary/70">
                      Complete transparency in all transactions with no hidden costs or surprises.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading text-xl text-secondary mb-2">Proven Track Record</h4>
                    <p className="font-paragraph text-secondary/70">
                      Over 500 successful property transactions and 1000+ satisfied clients.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-secondary/5 rounded-lg p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-background rounded-lg p-6 text-center border border-secondary/10">
                    <div className="font-heading text-3xl text-primary mb-2">₹50Cr+</div>
                    <div className="font-paragraph text-secondary/70">Properties Sold</div>
                  </div>
                  <div className="bg-background rounded-lg p-6 text-center border border-secondary/10">
                    <div className="font-heading text-3xl text-primary mb-2">98%</div>
                    <div className="font-paragraph text-secondary/70">Client Satisfaction</div>
                  </div>
                  <div className="bg-background rounded-lg p-6 text-center border border-secondary/10">
                    <div className="font-heading text-3xl text-primary mb-2">24/7</div>
                    <div className="font-paragraph text-secondary/70">Support Available</div>
                  </div>
                  <div className="bg-background rounded-lg p-6 text-center border border-secondary/10">
                    <div className="font-heading text-3xl text-primary mb-2">100%</div>
                    <div className="font-paragraph text-secondary/70">Legal Compliance</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-secondary py-20">
        <div className="max-w-[100rem] mx-auto px-6 text-center">
          <h3 className="font-heading text-5xl lg:text-6xl text-secondary-foreground uppercase mb-6">
            READY TO FIND YOUR
            <br />
            DREAM PROPERTY?
          </h3>
          <p className="font-paragraph text-lg text-secondary-foreground/80 max-w-3xl mx-auto mb-12">
            Let our experts guide you through the process of buying, selling, or investing in 
            Dholera Smart City. Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919389903679">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +91 93899 03679
              </Button>
            </a>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-secondary-foreground text-secondary-foreground bg-secondary hover:bg-secondary-foreground hover:text-secondary">
                <Mail className="w-5 h-5 mr-2" />
                Get Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-background border-t border-secondary/10 py-16">
        <div className="max-w-[100rem] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h4 className="font-heading text-2xl text-secondary uppercase mb-4">PROPRIYANSH</h4>
              <p className="font-paragraph text-secondary/70 mb-6 max-w-md">
                Your trusted partner for premium real estate in Dholera Smart City. 
                Expert guidance, transparent deals, and exceptional service.
              </p>
              <div className="flex space-x-4">
                <a href="tel:+919389903679">
                  <Button variant="outline" size="sm">
                    <Phone className="w-4 h-4 mr-2" />
                    +91 93899 03679
                  </Button>
                </a>
                <Link href="/contact">
                  <Button variant="outline" size="sm">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact
                  </Button>
                </Link>
              </div>
            </div>
            <div>
              <h5 className="font-heading text-lg text-secondary mb-4">QUICK LINKS</h5>
              <ul className="space-y-2">
                <li><Link href="/properties" className="font-paragraph text-secondary/70 hover:text-primary">Properties</Link></li>
                <li><Link href="/services" className="font-paragraph text-secondary/70 hover:text-primary">Services</Link></li>
                <li><Link href="/about" className="font-paragraph text-secondary/70 hover:text-primary">About Us</Link></li>
                <li><Link href="/contact" className="font-paragraph text-secondary/70 hover:text-primary">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-heading text-lg text-secondary mb-4">LOCATION</h5>
              <p className="font-paragraph text-secondary/70">
                Dholera Smart City<br />
                Gujarat, India<br />
                Pin: 382225
              </p>
            </div>
          </div>
          <div className="border-t border-secondary/10 mt-12 pt-8 text-center">
            <p className="font-paragraph text-secondary/60">
              © 2025 PropPriyansh. All rights reserved. | Trusted Property Dealer & Builder in Dholera, Gujarat
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}