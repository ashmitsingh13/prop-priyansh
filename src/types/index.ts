// Property related types
export interface Properties {
  _id: string;
  propertyName: string;
  propertyType: string;
  location: string;
  description: string;
  price: number;
  areaSqFt: number;
  mainImage?: string;
  images?: string[];
  features?: string[];
  amenities?: string[];
  availability: 'available' | 'sold' | 'reserved';
  createdAt: string;
  updatedAt: string;
}

// Service related types
export interface Services {
  _id: string;
  serviceName: string;
  shortDescription: string;
  fullDescription?: string;
  callToActionText?: string;
  icon?: string;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}

// API Response types
export interface ApiResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
}

// Contact form types
export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
  propertyInterest?: string;
}