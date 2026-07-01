"use client";

import { motion } from "framer-motion";

import SectionHeading from "../common/SectionHeading";
import Container from "../common/Container";
import CategoryCard from "../common/CategoryCard";

import { categories } from "../../data/categories";

export default function Categories() {
  return (
    <section className="section">

      <Container>

        <SectionHeading
          title="Explore Our Collections"
          subtitle="Carefully crafted products that bring beauty, fragrance and devotion into everyday life."
        />

        <div className="grid gap-8 lg:grid-cols-2">

          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.12,
              }}
            >
              <CategoryCard {...category} />
            </motion.div>
          ))}

        </div>

      </Container>

    </section>
  );
}