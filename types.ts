export interface NavItem {
  label: string;
  path: string;
  children?: NavItem[];
}

export interface EmbedProps {
  title: string;
  description: string;
  placeholderUrl?: string; // Simulating the Netlify embed URL
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
}