'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Image } from '@/components/ui/image';
import { 
  Phone, 
  Mail, 
  Users, 
  Award, 
  Star, 
  Building2,
  TrendingUp,
  Shield,
  CheckCircle,
  Target,
  Heart,
  Clock,
  Menu,
  X
} from 'lucide-react';

export default function AboutPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
              <Link href="/services" className="font-paragraph text-secondary hover:text-primary transition-colors">
                SERVICES
              </Link>
              <Link href="/about" className="font-paragraph text-primary border-b-2 border-primary">
                ABOUT
              </Link>
            </nav>
            
            {/* Desktop Contact Button */}
            <Button variant="outline" size="sm" className="hidden md:flex g-secondary-foreground hover:bg-secondary">
              <Phone className="w-4 h-4 mr-2 b" />
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
                  className="font-paragraph text-secondary hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  SERVICES
                </Link>
                <Link 
                  href="/about" 
                  className="font-paragraph text-primary font-semibold"
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

      {/* Hero Section */}
      <section className="w-full bg-highlightyellow/10 py-20">
        <div className="max-w-[100rem] mx-auto px-6 text-center">
          <h1 className="font-heading text-6xl lg:text-8xl text-secondary uppercase mb-6">
            ABOUT US
          </h1>
          <p className="font-paragraph text-lg text-secondary/80 max-w-4xl mx-auto">
            Your trusted partner in Dholera Smart City real estate. With over 15 years of experience, 
            we&apos;ve built our reputation on transparency, expertise, and exceptional client service.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="w-full py-20">
        <div className="max-w-[100rem] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-5xl lg:text-6xl text-secondary uppercase mb-8">
                OUR STORY
              </h2>
              <div className="space-y-6">
                <p className="font-paragraph text-lg text-secondary/80 leading-relaxed">
                  Founded in 2009, PropPriyansh began as a vision to transform the real estate 
                  landscape in Dholera Smart City. What started as a small family business has 
                  grown into one of the most trusted names in Gujarat&apos;s real estate sector.
                </p>
                <p className="font-paragraph text-lg text-secondary/80 leading-relaxed">
                  We recognized early on that Dholera would become India&apos;s first planned smart city, 
                  and we positioned ourselves to be at the forefront of this transformation. Our deep 
                  understanding of the local market, combined with our commitment to ethical practices, 
                  has helped over 1000 families find their dream properties.
                </p>
                <p className="font-paragraph text-lg text-secondary/80 leading-relaxed">
                  Today, we continue to lead with innovation, transparency, and a client-first approach 
                  that has made us the preferred choice for property buyers, sellers, and investors 
                  in the region.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://static.wixstatic.com/media/d1fa15_2581c45c8df441a49e2d9bada6f92024~mv2.png?originWidth=576&originHeight=384"
                alt="PropPriyansh office building"
                width={600}
                className="w-full h-96 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="w-full bg-secondary py-20">
        <div className="max-w-[100rem] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-background border-secondary/10">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-3xl text-secondary uppercase mb-6">OUR MISSION</h3>
                <p className="font-paragraph text-secondary/80 leading-relaxed">
                  To provide exceptional real estate services that exceed client expectations through 
                  transparency, expertise, and unwavering commitment to ethical practices. We strive 
                  to make property transactions seamless, secure, and profitable for all our clients.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background border-secondary/10">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-3xl text-secondary uppercase mb-6">OUR VISION</h3>
                <p className="font-paragraph text-secondary/80 leading-relaxed">
                  To be the most trusted and innovative real estate company in Gujarat, setting new 
                  standards for client service and market expertise. We envision a future where every 
                  property transaction is a positive, transformative experience for our clients.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="w-full py-20">
        <div className="max-w-[100rem] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-5xl lg:text-6xl text-secondary uppercase mb-6">
              OUR VALUES
            </h2>
            <p className="font-paragraph text-lg text-secondary/80 max-w-3xl mx-auto">
              The principles that guide every decision we make and every service we provide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-secondary/10 text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl text-secondary mb-4">INTEGRITY</h3>
                <p className="font-paragraph text-secondary/70 text-sm">
                  Complete transparency in all dealings with honest communication and ethical practices.
                </p>
              </CardContent>
            </Card>
            <Card className="border-secondary/10 text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl text-secondary mb-4">EXCELLENCE</h3>
                <p className="font-paragraph text-secondary/70 text-sm">
                  Commitment to delivering superior service quality that exceeds client expectations.
                </p>
              </CardContent>
            </Card>
            <Card className="border-secondary/10 text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl text-secondary mb-4">CLIENT-FIRST</h3>
                <p className="font-paragraph text-secondary/70 text-sm">
                  Every decision is made with our clients&apos; best interests and satisfaction in mind.
                </p>
              </CardContent>
            </Card>
            <Card className="border-secondary/10 text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl text-secondary mb-4">INNOVATION</h3>
                <p className="font-paragraph text-secondary/70 text-sm">
                  Embracing new technologies and methods to improve our services continuously.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full bg-highlightyellow/10 py-20">
        <div className="max-w-[100rem] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-5xl lg:text-6xl text-secondary uppercase mb-6">
              OUR TEAM
            </h2>
            <p className="font-paragraph text-lg text-secondary/80 max-w-3xl mx-auto">
              Meet the dedicated professionals who make your real estate dreams a reality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-secondary/10 text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-12 h-12 text-primary" />
                </div>
                <h3 className="font-heading text-2xl text-secondary mb-2">Priyansh Patel</h3>
                <p className="font-paragraph text-primary mb-4">Founder & CEO</p>
                <p className="font-paragraph text-secondary/70 text-sm">
                  15+ years of experience in Dholera real estate with deep market insights and 
                  strategic vision for the company&apos;s growth.
                </p>
              </CardContent>
            </Card>
            <Card className="border-secondary/10 text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building2 className="w-12 h-12 text-primary" />
                </div>
                <h3 className="font-heading text-2xl text-secondary mb-2">Sales Team</h3>
                <p className="font-paragraph text-primary mb-4">Property Consultants</p>
                <p className="font-paragraph text-secondary/70 text-sm">
                  Expert property consultants with extensive knowledge of local market trends 
                  and client needs assessment.
                </p>
              </CardContent>
            </Card>
            <Card className="border-secondary/10 text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-12 h-12 text-primary" />
                </div>
                <h3 className="font-heading text-2xl text-secondary mb-2">Legal Team</h3>
                <p className="font-paragraph text-primary mb-4">Documentation Experts</p>
                <p className="font-paragraph text-secondary/70 text-sm">
                  Specialized legal professionals ensuring complete compliance and secure 
                  documentation for all transactions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="w-full py-20">
        <div className="max-w-[100rem] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-5xl lg:text-6xl text-secondary uppercase mb-6">
              OUR ACHIEVEMENTS
            </h2>
            <p className="font-paragraph text-lg text-secondary/80 max-w-3xl mx-auto">
              Milestones that reflect our commitment to excellence and client satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="font-heading text-5xl lg:text-6xl text-primary mb-4">500+</div>
              <div className="font-paragraph text-secondary/70">Properties Sold</div>
            </div>
            <div className="text-center">
              <div className="font-heading text-5xl lg:text-6xl text-primary mb-4">1000+</div>
              <div className="font-paragraph text-secondary/70">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="font-heading text-5xl lg:text-6xl text-primary mb-4">15+</div>
              <div className="font-paragraph text-secondary/70">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="font-heading text-5xl lg:text-6xl text-primary mb-4">98%</div>
              <div className="font-paragraph text-secondary/70">Client Satisfaction</div>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-secondary/10 text-center">
              <CardContent className="p-8">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-heading text-xl text-secondary mb-2">Best Real Estate Agency</h3>
                <p className="font-paragraph text-secondary/70 text-sm">Gujarat Real Estate Awards 2023</p>
              </CardContent>
            </Card>
            <Card className="border-secondary/10 text-center">
              <CardContent className="p-8">
                <Star className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-heading text-xl text-secondary mb-2">Customer Choice Award</h3>
                <p className="font-paragraph text-secondary/70 text-sm">Dholera Business Excellence 2022</p>
              </CardContent>
            </Card>
            <Card className="border-secondary/10 text-center">
              <CardContent className="p-8">
                <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-heading text-xl text-secondary mb-2">Trusted Partner</h3>
                <p className="font-paragraph text-secondary/70 text-sm">RERA Certified & Compliant</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full bg-secondary py-20">
        <div className="max-w-[100rem] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-5xl lg:text-6xl text-secondary-foreground uppercase mb-6">
              WHY CHOOSE PROPRIYANSH
            </h2>
            <p className="font-paragraph text-lg text-secondary-foreground/80 max-w-3xl mx-auto">
              What sets us apart in the competitive real estate market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-xl text-secondary-foreground mb-4">24/7 Support</h3>
              <p className="font-paragraph text-secondary-foreground/70">
                Round-the-clock availability for all your real estate needs and emergencies.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-xl text-secondary-foreground mb-4">100% Legal</h3>
              <p className="font-paragraph text-secondary-foreground/70">
                Complete legal compliance and documentation support for secure transactions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-xl text-secondary-foreground mb-4">Market Expertise</h3>
              <p className="font-paragraph text-secondary-foreground/70">
                Deep understanding of Dholera market trends and investment opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="w-full py-20">
        <div className="max-w-[100rem] mx-auto px-6 text-center">
          <h2 className="font-heading text-5xl lg:text-6xl text-secondary uppercase mb-6">
            READY TO WORK WITH US?
          </h2>
          <p className="font-paragraph text-lg text-secondary/80 max-w-3xl mx-auto mb-12">
            Experience the difference of working with Dholera&apos;s most trusted real estate experts. 
            Contact us today for a free consultation.
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
                Schedule Meeting
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