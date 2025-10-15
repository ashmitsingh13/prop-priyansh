'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ContactForm } from '@/types';
import { 
  Phone, 
  Mail, 
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Menu,
  X
} from 'lucide-react';

// Label component
const Label = ({ htmlFor, className, children, ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) => {
  return (
    <label htmlFor={htmlFor} className={className} {...props}>
      {children}
    </label>
  );
};

// Textarea component
const Textarea = ({ className, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  className?: string;
}) => {
  return (
    <textarea 
      className={`flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    />
  );
};

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    message: '',
    propertyInterest: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      const formData = new FormData(e.target as HTMLFormElement);
      
      // Add Web3Forms access key
      // Replace "YOUR_ACCESS_KEY_HERE" with your actual Web3Forms access key
      // You can get it from: https://web3forms.com/
      formData.append("access_key", "YOUR_ACCESS_KEY_HERE");
      
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
      
      const result = await response.json();
      
      if (result.success) {
        console.log('Form submitted successfully:', result);
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          propertyInterest: ''
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        throw new Error(result.message || 'Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError(error instanceof Error ? error.message : 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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
                  className="font-paragraph text-secondary hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  ABOUT
                </Link>
                <Link 
                  href="/contact" 
                  className="font-paragraph text-primary font-semibold"
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
      <section className="w-full bg-highlightyellow/10 py-16">
        <div className="max-w-[120rem] mx-auto px-6 text-center">
          <h1 className="font-heading text-6xl lg:text-8xl text-secondary uppercase mb-6">
            CONTACT US
          </h1>
          <p className="font-paragraph text-lg text-secondary/80 max-w-3xl mx-auto">
            Ready to find your dream property in Dholera Smart City? Get in touch with our expert team 
            for personalized guidance and exceptional service.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="w-full py-20">
        <div className="max-w-[120rem] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="font-heading text-5xl lg:text-6xl text-secondary uppercase mb-8">
                GET IN TOUCH
              </h2>
              <p className="font-paragraph text-lg text-secondary/80 mb-12">
                We&apos;re here to help you with all your real estate needs. Contact us through any of the 
                following methods, and we&apos;ll get back to you promptly.
              </p>

              <div className="space-y-8">
                <Card className="border-secondary/10 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading text-xl text-secondary mb-2">PHONE</h3>
                        <p className="font-paragraph text-secondary/70 mb-2">Call us directly for immediate assistance</p>
                        <a 
                          href="tel:+919389903679" 
                          className="font-paragraph text-primary hover:text-primary/80 font-semibold text-lg"
                        >
                          +91 93899 03679
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-secondary/10 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading text-xl text-secondary mb-2">EMAIL</h3>
                        <p className="font-paragraph text-secondary/70 mb-2">Send us your queries and requirements</p>
                        <a 
                          href="mailto:priyanshthakur458@gmail.com" 
                          className="font-paragraph text-primary hover:text-primary/80 font-semibold"
                        >
                          priyanshthakur458@gmail.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-secondary/10 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading text-xl text-secondary mb-2">OFFICE</h3>
                        <p className="font-paragraph text-secondary/70 mb-2">Visit our office in Dholera Smart City</p>
                        <p className="font-paragraph text-secondary">
                          PropPriyansh Office<br />
                          Dholera Smart City<br />
                          Gujarat, India - 382225
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-secondary/10 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading text-xl text-secondary mb-2">BUSINESS HOURS</h3>
                        <p className="font-paragraph text-secondary/70 mb-2">We&apos;re available when you need us</p>
                        <p className="font-paragraph text-secondary">
                          Monday - Sunday<br />
                          9:00 AM - 9:00 PM<br />
                          <span className="text-primary font-semibold">24/7 Emergency Support</span>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-secondary/10 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="font-heading text-3xl text-secondary uppercase mb-6">
                    SEND US A MESSAGE
                  </h3>
                  
                  {isSubmitted && (
                    <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-6">
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-primary mr-2" />
                        <p className="font-paragraph text-primary font-semibold">
                          Your message has been sent! We&apos;ll get back to you soon.
                        </p>
                      </div>
                    </div>
                  )}

                  {submitError && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                      <div className="flex items-center">
                        <div className="w-5 h-5 border-2 border-red-500 rounded-full flex items-center justify-center mr-2">
                          <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                        </div>
                        <p className="font-paragraph text-red-700 font-semibold">
                          {submitError}
                        </p>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Hidden fields for Web3Forms */}
                    <input type="hidden" name="subject" value="New Contact Form Submission from PropPriyansh Website" />
                    <input type="hidden" name="from_name" value="PropPriyansh Website" />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="font-paragraph text-secondary mb-2 block">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="border-secondary/20 focus:border-primary"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="font-paragraph text-secondary mb-2 block">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="border-secondary/20 focus:border-primary"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="phone" className="font-paragraph text-secondary mb-2 block">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="border-secondary/20 focus:border-primary"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                      <div>
                        <Label htmlFor="propertyInterest" className="font-paragraph text-secondary mb-2 block">
                          Property Interest
                        </Label>
                        <Input
                          id="propertyInterest"
                          name="propertyInterest"
                          type="text"
                          value={formData.propertyInterest}
                          onChange={handleInputChange}
                          className="border-secondary/20 focus:border-primary"
                          placeholder="Property inquiry, Investment advice, etc."
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message" className="font-paragraph text-secondary mb-2 block">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="border-secondary/20 focus:border-primary resize-none"
                        placeholder="Tell us about your property requirements, budget, preferred location, or any specific questions you have..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2"></div>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>

                    <p className="font-paragraph text-sm text-secondary/60 text-center">
                      By submitting this form, you agree to our privacy policy and terms of service.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="w-full bg-secondary py-16">
        <div className="max-w-[120rem] mx-auto px-6 text-center">
          <h3 className="font-heading text-4xl lg:text-5xl text-secondary-foreground uppercase mb-6">
            NEED IMMEDIATE ASSISTANCE?
          </h3>
          <p className="font-paragraph text-lg text-secondary-foreground/80 max-w-3xl mx-auto mb-8">
            For urgent property matters or immediate consultation, call us directly. 
            Our experts are available 24/7 to help you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Phone className="w-5 h-5 mr-2" />
              Call Now: +91 93899 03679
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary"
              onClick={() => window.location.href = 'mailto:priyanshthakur458@gmail.com'}
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Directly
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-20">
        <div className="max-w-[120rem] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-5xl lg:text-6xl text-secondary uppercase mb-6">
              FREQUENTLY ASKED
            </h2>
            <p className="font-paragraph text-lg text-secondary/80 max-w-3xl mx-auto">
              Quick answers to common questions about our services and Dholera properties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-secondary/10">
              <CardContent className="p-6">
                <h3 className="font-heading text-xl text-secondary mb-3">How quickly can you respond to inquiries?</h3>
                <p className="font-paragraph text-secondary/70">
                  We typically respond within 2-4 hours during business hours and within 24 hours on weekends. 
                  For urgent matters, call us directly for immediate assistance.
                </p>
              </CardContent>
            </Card>
            <Card className="border-secondary/10">
              <CardContent className="p-6">
                <h3 className="font-heading text-xl text-secondary mb-3">Do you provide site visits?</h3>
                <p className="font-paragraph text-secondary/70">
                  Yes, we arrange free site visits for all our properties. We can schedule visits at your 
                  convenience and provide transportation if needed.
                </p>
              </CardContent>
            </Card>
            <Card className="border-secondary/10">
              <CardContent className="p-6">
                <h3 className="font-heading text-xl text-secondary mb-3">What documents do you need for property purchase?</h3>
                <p className="font-paragraph text-secondary/70">
                  We&apos;ll guide you through all documentation requirements including identity proof, 
                  address proof, income documents, and help with loan processing if needed.
                </p>
              </CardContent>
            </Card>
            <Card className="border-secondary/10">
              <CardContent className="p-6">
                <h3 className="font-heading text-xl text-secondary mb-3">Are your services free for buyers?</h3>
                <p className="font-paragraph text-secondary/70">
                  Yes, our consultation and property search services are completely free for buyers. 
                  We only charge sellers a commission upon successful property sale.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-background border-t border-secondary/10 py-16">
        <div className="max-w-[120rem] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h4 className="font-heading text-2xl text-secondary uppercase mb-4">PROPRIYANSH</h4>
              <p className="font-paragraph text-secondary/70 mb-6 max-w-md">
                Your trusted partner for premium real estate in Dholera Smart City. 
                Expert guidance, transparent deals, and exceptional service.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm">
                  <Phone className="w-4 h-4 mr-2" />
                  +91 93899 03679
                </Button>
                <Button variant="outline" size="sm">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact
                </Button>
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
              <h5 className="font-heading text-lg text-secondary mb-4">OFFICE</h5>
              <div className="space-y-2">
                <p className="font-paragraph text-secondary/70 flex items-start">
                  <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                  PropPriyansh Office<br />
                  Dholera Smart City<br />
                  Gujarat, India - 382225
                </p>
                <p className="font-paragraph text-secondary/70 flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  Mon-Sun: 9:00 AM - 9:00 PM
                </p>
              </div>
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