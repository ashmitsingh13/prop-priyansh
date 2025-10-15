'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Image } from '@/components/ui/image';
import { PropertyService } from '@/lib/data';
import { Properties } from '@/types';
import { MapPin, Search, Filter, Phone, Home, Building2, Warehouse, Mail, Menu, X } from 'lucide-react';

export default function PropertiesPage() {
  const [properties, setProperties] = useState<Properties[]>([]);
  const [filteredProperties, setFilteredProperties] = useState<Properties[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const data = await PropertyService.getProperties(20);
        setProperties(data.items);
        setFilteredProperties(data.items);
      } catch (error) {
        console.error('Error fetching properties:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  useEffect(() => {
    let filtered = properties;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(property =>
        property.propertyName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.location?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.description?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by property type
    if (selectedType !== 'all') {
      filtered = filtered.filter(property => 
        property.propertyType?.toLowerCase() === selectedType.toLowerCase()
      );
    }

    // Filter by price range
    if (priceRange !== 'all') {
      filtered = filtered.filter(property => {
        const price = property.price || 0;
        switch (priceRange) {
          case 'under-50':
            return price < 5000000;
          case '50-100':
            return price >= 5000000 && price < 10000000;
          case '100-200':
            return price >= 10000000 && price < 20000000;
          case 'above-200':
            return price >= 20000000;
          default:
            return true;
        }
      });
    }

    setFilteredProperties(filtered);
  }, [searchTerm, selectedType, priceRange, properties]);

  const getPropertyIcon = (type: string) => {
    switch (type?.toLowerCase()) {
      case 'residential':
        return <Home className="w-5 h-5" />;
      case 'commercial':
        return <Building2 className="w-5 h-5" />;
      case 'industrial':
        return <Warehouse className="w-5 h-5" />;
      default:
        return <Building2 className="w-5 h-5" />;
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
              <Link href="/properties" className="font-paragraph text-primary border-b-2 border-primary">
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
                  className="font-paragraph text-primary font-semibold"
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

      {/* Hero Section */}
      <section className="w-full bg-highlightyellow/10 py-16">
        <div className="max-w-[100rem] mx-auto px-6 text-center">
          <h1 className="font-heading text-6xl lg:text-8xl text-secondary uppercase mb-6">
            PROPERTIES
          </h1>
          <p className="font-paragraph text-lg text-secondary/80 max-w-3xl mx-auto">
            Discover premium residential and commercial properties in Dholera / Noida Smart City. 
            Find your perfect investment opportunity or dream home.
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="w-full bg-background py-8 border-b border-secondary/10">
        <div className="max-w-[100rem] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary/50 w-4 h-4" />
              <Input
                placeholder="Search properties..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger>
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="residential">Residential</SelectItem>
                <SelectItem value="commercial">Commercial</SelectItem>
                <SelectItem value="industrial">Industrial</SelectItem>
              </SelectContent>
            </Select>
            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger>
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="under-50">Under ₹50L</SelectItem>
                <SelectItem value="50-100">₹50L - ₹1Cr</SelectItem>
                <SelectItem value="100-200">₹1Cr - ₹2Cr</SelectItem>
                <SelectItem value="above-200">Above ₹2Cr</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
              <Filter className="w-4 h-4 mr-2" />
              Advanced Filters
            </Button>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="w-full py-12">
        <div className="max-w-[100rem] mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-heading text-3xl text-secondary uppercase mb-2">
                Available Properties
              </h2>
              <p className="font-paragraph text-secondary/70">
                {filteredProperties.length} properties found
              </p>
            </div>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="bg-background border border-secondary/10 rounded-lg p-6 animate-pulse">
                  <div className="w-full h-48 bg-secondary/10 rounded mb-4"></div>
                  <div className="h-6 bg-secondary/10 rounded mb-2"></div>
                  <div className="h-4 bg-secondary/10 rounded mb-4"></div>
                  <div className="h-8 bg-secondary/10 rounded"></div>
                </div>
              ))}
            </div>
          ) : filteredProperties.length === 0 ? (
            <div className="text-center py-16">
              <Building2 className="w-16 h-16 text-secondary/30 mx-auto mb-4" />
              <h3 className="font-heading text-2xl text-secondary mb-2">No Properties Found</h3>
              <p className="font-paragraph text-secondary/70 mb-6">
                Try adjusting your search criteria or browse all properties.
              </p>
              <Button onClick={() => {
                setSearchTerm('');
                setSelectedType('all');
                setPriceRange('all');
              }}>
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property) => (
                <Card key={property._id} className="group hover:shadow-lg transition-all duration-300 border-secondary/10">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <Image
                        src={property.mainImage || 'https://static.wixstatic.com/media/d1fa15_e1b9d790acc24fb5b86c43430d0e3ab9~mv2.png?originWidth=384&originHeight=192'}
                        alt={property.propertyName || 'Property'}
                        width={400}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary text-primary-foreground px-3 py-1 rounded font-paragraph text-sm flex items-center">
                          {getPropertyIcon(property.propertyType || '')}
                          <span className="ml-1">{property.propertyType}</span>
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="bg-background/90 text-secondary px-3 py-1 rounded font-paragraph text-sm font-semibold">
                          ₹{property.price?.toLocaleString()}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-heading text-xl text-secondary mb-2">
                        {property.propertyName}
                      </h3>
                      <p className="font-paragraph text-secondary/70 mb-3 flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {property.location}
                      </p>
                      <p className="font-paragraph text-sm text-secondary/60 mb-4 line-clamp-2">
                        {property.description}
                      </p>
                      <div className="flex items-center justify-between mb-4">
                        <div className="font-paragraph text-sm text-secondary/60">
                          Area: {property.areaSqFt} sq ft
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                        >
                          View Details
                        </Button>
                        <Button variant="outline" size="sm">
                          Contact
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-secondary py-16">
        <div className="max-w-[100rem] mx-auto px-6 text-center">
          <h3 className="font-heading text-4xl lg:text-5xl text-secondary-foreground uppercase mb-6">
            NEED HELP FINDING THE RIGHT PROPERTY?
          </h3>
          <p className="font-paragraph text-lg text-secondary-foreground/80 max-w-3xl mx-auto mb-8">
            Our expert team is here to help you find the perfect property that matches your needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-secondary-foreground text-secondary-foreground bg-secondary hover:bg-secondary-foreground hover:text-secondary">
              Call Expert: +91 98765 43210
            </Button>
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
                Your trusted partner for premium real estate in Dholera / Noida Smart City. 
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
                Dholera / Noida Smart City<br />
                Gujarat, India<br />
                Pin: 382225
              </p>
            </div>
          </div>
          <div className="border-t border-secondary/10 mt-12 pt-8 text-center">
            <p className="font-paragraph text-secondary/60">
              © 2025 PropPriyansh. All rights reserved. | Trusted Property Dealer & Builder in Dholera / Noida, Gujarat
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}