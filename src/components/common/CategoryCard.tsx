"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface Props {
  title: string;
  subtitle: string;
  image: string;
  href: string;
}

export default function CategoryCard({
  title,
  subtitle,
  image,
  href,
}: Props) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <Link
        href={href}
        className="group block overflow-hidden rounded-[28px] bg-[var(--card)] shadow-md"
      >
        {/* Image */}

        <div className="relative h-[340px] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition duration-700 group-hover:scale-105"
          />
        </div>

        {/* Content */}

        <div className="p-8">

          <h3 className="heading-md mb-3 text-3xl">
            {title}
          </h3>

          <p className="mb-6 leading-7 text-muted">
            {subtitle}
          </p>

          <div className="inline-flex items-center gap-2 font-medium text-[var(--accent)]">
            Explore
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </div>

        </div>
      </Link>
    </motion.div>
  );
}