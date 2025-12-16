export interface Smoothie {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: 'Green' | 'Berry' | 'Tropical' | 'Indulgent';
  badges?: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ContactInfo {
  phone1: string;
  phone2: string;
  email: string;
  location: string;
}