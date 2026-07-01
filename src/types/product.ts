export interface Product {
  id: number;

  name: string;

  slug: string;

  category: string;

  description: string;

  price: number;

  originalPrice?: number;

  image: string;

  rating: number;

  reviewCount: number;

  badge?: string;
}