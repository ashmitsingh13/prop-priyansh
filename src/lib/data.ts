import { Properties, Services, ApiResponse } from '@/types';

// Mock Properties Data
export const mockProperties: Properties[] = [
  {
    _id: '1',
    propertyName: 'Luxury Villa - Phase 1',
    propertyType: 'Villa',
    location: 'Dholera Smart City, Gujarat',
    description: 'Spacious 3BHK villa with modern amenities, garden area, and smart home features. Perfect for families looking for comfort and luxury in the heart of Dholera.',
    price: 4500000,
    areaSqFt: 2500,
    mainImage: 'https://static.wixstatic.com/media/d1fa15_90b37c953413485c9aed3631bdd123a1~mv2.png?originWidth=384&originHeight=448',
    images: [
      'https://static.wixstatic.com/media/d1fa15_90b37c953413485c9aed3631bdd123a1~mv2.png?originWidth=384&originHeight=448',
      'https://static.wixstatic.com/media/d1fa15_162820dddc914bd5ad2830cec0d5a878~mv2.png?originWidth=1152&originHeight=640'
    ],
    features: ['3 Bedrooms', '3 Bathrooms', 'Garden', 'Parking', 'Smart Home'],
    amenities: ['Swimming Pool', 'Gym', 'Security', 'Power Backup'],
    availability: 'available',
    createdAt: '2024-01-15T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z'
  },
  {
    _id: '2',
    propertyName: 'Modern Apartment - Tower A',
    propertyType: 'Apartment',
    location: 'Dholera SIR, Gujarat',
    description: 'Contemporary 2BHK apartment with panoramic city views, premium finishes, and access to world-class amenities.',
    price: 2800000,
    areaSqFt: 1200,
    mainImage: 'https://static.wixstatic.com/media/d1fa15_d343d2039b5744379b3cd2f5a2d9f4c6~mv2.png?originWidth=1152&originHeight=640',
    features: ['2 Bedrooms', '2 Bathrooms', 'Balcony', 'Modular Kitchen'],
    amenities: ['Clubhouse', 'Gym', '24/7 Security', 'Elevator'],
    availability: 'available',
    createdAt: '2024-01-10T00:00:00Z',
    updatedAt: '2024-01-10T00:00:00Z'
  },
  {
    _id: '3',
    propertyName: 'Commercial Space - Business Hub',
    propertyType: 'Commercial',
    location: 'Dholera Business District, Gujarat',
    description: 'Premium commercial space ideal for offices, retail stores, or business centers. Prime location with excellent connectivity.',
    price: 6200000,
    areaSqFt: 1800,
    mainImage: 'https://static.wixstatic.com/media/d1fa15_db817d3020fd4e72ae6d952c1bdc71d8~mv2.png?originWidth=1152&originHeight=640',
    features: ['Open Floor Plan', 'Central AC', 'Parking Space', 'Reception Area'],
    amenities: ['High-Speed Internet', 'Power Backup', 'Security', 'Cafeteria'],
    availability: 'available',
    createdAt: '2024-01-05T00:00:00Z',
    updatedAt: '2024-01-05T00:00:00Z'
  },
  {
    _id: '4',
    propertyName: 'Duplex House - Green Valley',
    propertyType: 'Duplex',
    location: 'Dholera Residential Area, Gujarat',
    description: 'Elegant duplex house with spacious rooms, private terrace, and modern architecture. Perfect blend of luxury and comfort.',
    price: 5800000,
    areaSqFt: 3200,
    mainImage: 'https://static.wixstatic.com/media/d1fa15_85d07034fe9c41f599354abfb5080245~mv2.png?originWidth=1152&originHeight=640',
    features: ['4 Bedrooms', '4 Bathrooms', 'Terrace', 'Study Room', 'Servant Quarter'],
    amenities: ['Garden', 'Security', 'Car Parking', 'Power Backup'],
    availability: 'available',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    _id: '5',
    propertyName: 'Budget Apartment - Phase 2',
    propertyType: 'Apartment',
    location: 'Dholera Phase 2, Gujarat',
    description: 'Affordable 1BHK apartment perfect for young professionals and small families. Well-designed space with all essential amenities.',
    price: 1800000,
    areaSqFt: 650,
    mainImage: 'https://static.wixstatic.com/media/d1fa15_5f92194190d74001bd0ed746abd01509~mv2.png?originWidth=1152&originHeight=640',
    features: ['1 Bedroom', '1 Bathroom', 'Kitchen', 'Balcony'],
    amenities: ['Security', 'Lift', 'Water Supply', 'Electricity'],
    availability: 'available',
    createdAt: '2023-12-28T00:00:00Z',
    updatedAt: '2023-12-28T00:00:00Z'
  },
  {
    _id: '6',
    propertyName: 'Premium Plot - Investment Zone',
    propertyType: 'Plot',
    location: 'Dholera Investment Zone, Gujarat',
    description: 'Prime residential plot in the heart of Dholera Smart City. Ideal for building your dream home or as an investment opportunity.',
    price: 3200000,
    areaSqFt: 2000,
    mainImage: 'https://static.wixstatic.com/media/d1fa15_162820dddc914bd5ad2830cec0d5a878~mv2.png?originWidth=1152&originHeight=640',
    features: ['Corner Plot', 'Clear Title', 'DTCP Approved', 'Road Facing'],
    amenities: ['Water Connection', 'Electricity', 'Sewage', 'Road Access'],
    availability: 'available',
    createdAt: '2023-12-20T00:00:00Z',
    updatedAt: '2023-12-20T00:00:00Z'
  }
];

// Mock Services Data
export const mockServices: Services[] = [
  {
    _id: '1',
    serviceName: 'Property Buying & Selling',
    shortDescription: 'Complete assistance in buying and selling residential and commercial properties with legal documentation support.',
    fullDescription: 'Our comprehensive buying and selling service includes property valuation, market analysis, legal documentation, negotiation support, and end-to-end transaction management.',
    callToActionText: 'Start Your Journey',
    icon: 'building',
    featured: true,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    _id: '2',
    serviceName: 'Investment Consultation',
    shortDescription: 'Expert guidance on real estate investments in Dholera Smart City with market insights and ROI analysis.',
    fullDescription: 'Get professional investment advice with detailed market research, growth projections, risk assessment, and portfolio diversification strategies for maximum returns.',
    callToActionText: 'Get Expert Advice',
    icon: 'trending-up',
    featured: true,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    _id: '3',
    serviceName: 'Property Management',
    shortDescription: 'Professional property management services including maintenance, tenant management, and rental collection.',
    fullDescription: 'Complete property management solutions covering tenant screening, rent collection, maintenance coordination, legal compliance, and regular property inspections.',
    callToActionText: 'Manage My Property',
    icon: 'settings',
    featured: true,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    _id: '4',
    serviceName: 'Legal Documentation',
    shortDescription: 'Complete legal support for property transactions including documentation, registration, and compliance.',
    fullDescription: 'Professional legal services ensuring all property documents are properly verified, agreements are legally sound, and transactions comply with local regulations.',
    callToActionText: 'Legal Support',
    icon: 'file-text',
    featured: false,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    _id: '5',
    serviceName: 'Home Loan Assistance',
    shortDescription: 'Help with home loan applications, documentation, and connecting with leading banks and financial institutions.',
    fullDescription: 'Streamlined home loan process with pre-approved loan options, documentation assistance, and partnerships with major banks for competitive interest rates.',
    callToActionText: 'Apply for Loan',
    icon: 'credit-card',
    featured: false,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  }
];

// Mock Service to simulate API calls
export class PropertyService {
  static async getProperties(limit: number = 10): Promise<ApiResponse<Properties>> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const items = mockProperties.slice(0, limit);
    return {
      items,
      total: mockProperties.length,
      page: 1,
      limit
    };
  }

  static async getPropertyById(id: string): Promise<Properties | null> {
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockProperties.find(property => property._id === id) || null;
  }

  static async getFeaturedProperties(): Promise<Properties[]> {
    await new Promise(resolve => setTimeout(resolve, 800));
    return mockProperties.slice(0, 6);
  }
}

export class ServiceService {
  static async getServices(limit: number = 10): Promise<ApiResponse<Services>> {
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const items = mockServices.slice(0, limit);
    return {
      items,
      total: mockServices.length,
      page: 1,
      limit
    };
  }

  static async getFeaturedServices(): Promise<Services[]> {
    await new Promise(resolve => setTimeout(resolve, 600));
    return mockServices.filter(service => service.featured);
  }

  static async getServiceById(id: string): Promise<Services | null> {
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockServices.find(service => service._id === id) || null;
  }
}

// Generic service to replace BaseCrudService
export class BaseCrudService {
  static async getAll<T>(endpoint: string): Promise<ApiResponse<T>> {
    switch (endpoint) {
      case 'properties':
        return PropertyService.getProperties() as Promise<ApiResponse<T>>;
      case 'services':
        return ServiceService.getServices() as Promise<ApiResponse<T>>;
      default:
        throw new Error(`Endpoint ${endpoint} not found`);
    }
  }
}