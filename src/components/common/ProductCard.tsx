"use client";

import Image from "next/image";
import Link from "next/link";

import { Heart, Star, ShoppingBag } from "lucide-react";

import { Product } from "../../types/product";

export default function ProductCard({
  product,
}: {
  product: Product;
}) {
  return (
    <div className="group overflow-hidden rounded-[26px] bg-[var(--card)] shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">

      {/* Image */}

      <div className="relative overflow-hidden">

        {product.badge && (
          <span className="absolute left-4 top-4 z-20 rounded-full bg-[var(--accent)] px-4 py-1 text-xs text-white">
            {product.badge}
          </span>
        )}

        <button className="absolute right-4 top-4 z-20 rounded-full bg-white/90 p-2 shadow">

          <Heart size={18} />

        </button>

        <Link href={`/product/${product.slug}`}>

          <Image
            src={product.image}
            alt={product.name}
            width={600}
            height={700}
            className="h-[340px] w-full object-cover transition duration-700 group-hover:scale-105"
          />

        </Link>
      </div>

      {/* Content */}

      <div className="p-6">

        <p className="mb-2 text-sm uppercase tracking-widest text-[var(--accent)]">
          {product.category}
        </p>

        <Link href={`/product/${product.slug}`}>

          <h3 className="heading-md mb-2 text-2xl hover:text-[var(--accent)]">
            {product.name}
          </h3>

        </Link>

        <p className="mb-5 text-muted text-sm leading-7">
          {product.description}
        </p>

        {/* Rating */}

        <div className="mb-5 flex items-center gap-2">

          <Star
            size={16}
            className="fill-yellow-400 text-yellow-400"
          />

          <span>{product.rating}</span>

          <span className="text-muted">
            ({product.reviewCount})
          </span>

        </div>

        {/* Price */}

        <div className="mb-6 flex items-center gap-3">

          <span className="font-serif text-3xl font-semibold">
            ₹{product.price}
          </span>

          {product.originalPrice && (
            <span className="text-muted line-through">
              ₹{product.originalPrice}
            </span>
          )}

        </div>

        {/* Button */}

        <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--accent)] py-3 text-white transition hover:bg-[var(--accent-hover)]">

          <ShoppingBag size={18} />

          Add to Cart

        </button>

      </div>
    </div>
  );
}