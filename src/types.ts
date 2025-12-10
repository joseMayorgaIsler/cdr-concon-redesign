export interface NavItem {
  label: string;
  href: string;
}

export interface Branch {
  id: string;
  title: string;
  description: string;
  images: string[];
  schedule: string;
  manager: string;
  email: string;
}

export interface Facility {
  id: string;
  title: string;
  description: string;
  capacity: string;
  images: string[];
  features: string[];
}

export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  fullDescription: string; // New field for detailed text
  imageUrl: string;
  gallery: string[]; // New field for photo gallery
  videoUrl?: string; // New optional field for video embed
}
