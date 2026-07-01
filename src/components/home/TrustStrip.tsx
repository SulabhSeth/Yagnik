"use client";

import { motion } from "framer-motion";
import {
  Leaf,
  Sparkles,
  Truck,
  Recycle,
} from "lucide-react";

import Container from "../common/Container";

const features = [
  {
    icon: Leaf,
    title: "Natural Ingredients",
    description: "Thoughtfully sourced materials."
  },
  {
    icon: Sparkles,
    title: "Handcrafted",
    description: "Made with devotion and care."
  },
  {
    icon: Truck,
    title: "Pan India Delivery",
    description: "Delivered safely across India."
  },
  {
    icon: Recycle,
    title: "Eco Friendly",
    description: "Sustainable products & packaging."
  }
];

export default function TrustStrip() {
  return (
    <section className="pb-20 pt-20">
      <Container>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.5,
                }}
                className="card p-8 text-center"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[rgba(198,134,66,.08)]">
                  <Icon
                    size={26}
                    className="text-[var(--accent)]"
                  />
                </div>

                <h3 className="mb-2 font-semibold text-lg">
                  {feature.title}
                </h3>

                <p className="text-sm leading-7 text-muted">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}

        </div>
      </Container>
    </section>
  );
}