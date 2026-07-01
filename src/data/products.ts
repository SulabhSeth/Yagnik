import { Product } from "../types/product";
export const products: Product[] = [
  {
    id: 1,
    name: "Chandan Dhoop",
    slug: "chandan-dhoop",
    category: "Dhoop",
    description: "Handcrafted sandalwood incense sticks.",
    price: 249,
    originalPrice: 299,
    image: "/products/dhoop1.jpg",
    rating: 4.8,
    reviewCount: 72,
    badge: "Best Seller",
  },

  {
    id: 2,
    name: "Rose Attar",
    slug: "rose-attar",
    category: "Attar",
    description: "Alcohol free traditional attar.",
    price: 499,
    image: "/products/attar1.jpg",
    rating: 4.9,
    reviewCount: 41,
  },

  {
    id: 3,
    name: "Cotton Tote Bag",
    slug: "cotton-bag",
    category: "Bag",
    description: "Premium reusable cotton bag.",
    price: 399,
    image: "/products/bag1.jpg",
    rating: 4.7,
    reviewCount: 55,
  },

  {
    id: 4,
    name: "Devotional Kurti",
    slug: "devotional-kurti",
    category: "Wear",
    description: "Elegant devotional cotton wear.",
    price: 1199,
    originalPrice: 1399,
    image: "/products/kurti1.jpg",
    rating: 4.9,
    reviewCount: 24,
    badge: "New",
  },
];