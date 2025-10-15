'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ServiceService } from '@/lib/data';
import { Services } from '@/types';
import { 
  Building2, 
  Home, 
  TrendingUp, 
  Users, 
  Shield, 
  Phone,
  Mail,
  CheckCircle,
  Menu,
  X
} from 'lucide-react';

export default function ServicesPage() {
  const [services, setServices] = useState<Services[]>([]);
  const [loading, setLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await ServiceService.getServices(10);
        setServices(data.items);
      } catch (error) {
        console.error('Error fetching services:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const getServiceIcon = (serviceName: string) => {
    const name = serviceName?.toLowerCase() || '';
    if (name.includes('buy') || name.includes('purchase')) return <Home className="w-8 h-8" />;
    if (name.includes('sell') || name.includes('sale')) return <Building2 className="w-8 h-8" />;
    if (name.includes('invest') || name.includes('investment')) return <TrendingUp className="w-8 h-8" />;
    if (name.includes('consult') || name.includes('advice')) return <Users className="w-8 h-8" />;
    return <Building2 className="w-8 h-8" />;
  };

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
              <Link href="/" className="font-paragraph text-secondary hover:text-primary transition-colors">
                HOME
              </Link>
              <Link href="/properties" className="font-paragraph text-secondary hover:text-primary transition-colors">
                PROPERTIES
              </Link>
              <Link href="/services" className="font-paragraph text-primary border-b-2 border-primary">
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
                  className="font-paragraph text-secondary hover:text-primary transition-colors"
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
                  className="font-paragraph text-primary font-semibold"
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
      <section className="w-full bg-highlightyellow/10 py-20">
        <div className="max-w-[100rem] mx-auto px-6 text-center">
          <h1 className="font-heading text-6xl lg:text-8xl text-secondary uppercase mb-6">
            OUR SERVICES
          </h1>
          <p className="font-paragraph text-lg text-secondary/80 max-w-4xl mx-auto">
            Comprehensive real estate solutions designed to meet all your property needs in Dholera Smart City. 
            From buying and selling to investment guidance, we provide expert services with complete transparency.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full py-20">
        <div className="max-w-[100rem] mx-auto px-6">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-background border border-secondary/10 rounded-lg p-8 animate-pulse">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full mx-auto mb-6"></div>
                  <div className="h-6 bg-secondary/10 rounded mb-4"></div>
                  <div className="h-20 bg-secondary/10 rounded mb-6"></div>
                  <div className="h-10 bg-secondary/10 rounded"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <Card key={service._id} className="group hover:shadow-lg transition-all duration-300 border-secondary/10">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <div className="text-primary">
                        {getServiceIcon(service.serviceName || '')}
                      </div>
                    </div>
                    
                    <h3 className="font-heading text-2xl text-secondary mb-4">
                      {service.serviceName}
                    </h3>
                    
                    <p className="font-paragraph text-secondary/70 mb-6">
                      {service.fullDescription || service.shortDescription}
                    </p>
                    
                    <Button 
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      {service.callToActionText || 'Learn More'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Service Details */}
      <section className="w-full bg-secondary py-20">
        <div className="max-w-[100rem] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-5xl lg:text-6xl text-secondary-foreground uppercase mb-6">
              COMPREHENSIVE SOLUTIONS
            </h2>
            <p className="font-paragraph text-lg text-secondary-foreground/80 max-w-4xl mx-auto">
              Our full-service approach ensures every aspect of your real estate journey is handled with expertise and care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-xl text-secondary-foreground mb-2">Property Buying</h3>
              <p className="font-paragraph text-secondary-foreground/70 text-sm">
                Expert guidance to find and purchase your ideal property
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-xl text-secondary-foreground mb-2">Property Selling</h3>
              <p className="font-paragraph text-secondary-foreground/70 text-sm">
                Maximum value realization for your property sales
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-xl text-secondary-foreground mb-2">Investment Advisory</h3>
              <p className="font-paragraph text-secondary-foreground/70 text-sm">
                Strategic investment planning for optimal returns
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-xl text-secondary-foreground mb-2">Legal Support</h3>
              <p className="font-paragraph text-secondary-foreground/70 text-sm">
                Complete legal documentation and compliance assistance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="w-full py-20">
        <div className="max-w-[100rem] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-5xl lg:text-6xl text-secondary uppercase mb-8">
                WHY CHOOSE
                <br />
                OUR SERVICES
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading text-xl text-secondary mb-2">15+ Years Experience</h3>
                    <p className="font-paragraph text-secondary/70">
                      Deep understanding of Dholera real estate market with proven track record.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading text-xl text-secondary mb-2">Transparent Process</h3>
                    <p className="font-paragraph text-secondary/70">
                      Complete transparency in all dealings with no hidden charges or surprises.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading text-xl text-secondary mb-2">End-to-End Support</h3>
                    <p className="font-paragraph text-secondary/70">
                      From property search to final documentation, we handle everything.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading text-xl text-secondary mb-2">24/7 Availability</h3>
                    <p className="font-paragraph text-secondary/70">
                      Round-the-clock support for all your real estate needs and queries.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-highlightyellow/20 rounded-lg p-8">
                <div className="text-center mb-8">
                  <h3 className="font-heading text-3xl text-secondary mb-4">SERVICE GUARANTEE</h3>
                  <p className="font-paragraph text-secondary/70">
                    We stand behind our services with a commitment to excellence
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="font-heading text-3xl text-primary mb-2">100%</div>
                    <div className="font-paragraph text-secondary/70">Legal Compliance</div>
                  </div>
                  <div className="text-center">
                    <div className="font-heading text-3xl text-primary mb-2">500+</div>
                    <div className="font-paragraph text-secondary/70">Successful Deals</div>
                  </div>
                  <div className="text-center">
                    <div className="font-heading text-3xl text-primary mb-2">98%</div>
                    <div className="font-paragraph text-secondary/70">Client Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="font-heading text-3xl text-primary mb-2">24/7</div>
                    <div className="font-paragraph text-secondary/70">Support Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-highlightyellow/10 py-20">
        <div className="max-w-[100rem] mx-auto px-6 text-center">
          <h2 className="font-heading text-5xl lg:text-6xl text-secondary uppercase mb-6">
            READY TO GET STARTED?
          </h2>
          <p className="font-paragraph text-lg text-secondary/80 max-w-3xl mx-auto mb-12">
            Contact our expert team today for a free consultation. We&apos;ll help you navigate 
            the Dholera real estate market with confidence and achieve your property goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919389903679">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +91 93899 03679
              </Button>
            </a>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                <Mail className="w-5 h-5 mr-2" />
                Schedule Free Consultation
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
              © 2024 PropPriyansh. All rights reserved. | Trusted Property Dealer & Builder in Dholera, Gujarat
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}