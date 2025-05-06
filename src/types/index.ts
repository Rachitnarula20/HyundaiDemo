export interface Vehicle {
  id: number;
  name: string;
  type: string;
  price: string;
  features: string[];
  image: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface SlideProps {
  id: number;
  model: string;
  tagline: string;
  image: string;
}