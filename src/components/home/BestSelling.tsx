"use client";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import ProductCard from "../common/ProductCard";

import { products } from "../../data/products";

export default function BestSelling() {
  return (
    <section className="section">

      <Container>

        <SectionHeading
          title="Best Selling Products"
          subtitle="Discover our most loved handcrafted creations."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </Container>
    </section>
  );
}