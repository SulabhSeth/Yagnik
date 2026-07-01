"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Button from "../common/Button";
import Container from "../common/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">

      {/* Decorative Blur */}

      <div className="absolute left-1/2 top-40 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-[var(--accent)] opacity-[0.05] blur-[140px]" />

      <Container>

        <div className="grid min-h-[88vh] items-center gap-20 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .7 }}
          >
            <p className="mb-4 tracking-[.35em] uppercase text-[13px] text-[var(--accent)]">

              Handcrafted • Pure • Devotional

            </p>

            <h1 className="heading-xl mb-8">

              Crafted
              <br />

              with Devotion.

            </h1>

            <p className="max-w-xl leading-8 text-muted text-lg">

              Every fragrance, every thread and every creation
              is thoughtfully handcrafted to bring purity,
              serenity and beauty into your daily spiritual life.

            </p>

            <div className="mt-10 flex gap-5">

              <Button>

                Shop Collection

              </Button>

              <Button variant="secondary">

                Our Story

              </Button>

            </div>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, scale: .94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: .9 }}
            className="relative"
          >

            <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-[var(--green)] opacity-10 blur-3xl" />

            <div className="absolute -right-10 bottom-0 h-40 w-40 rounded-full bg-[var(--accent)] opacity-10 blur-3xl" />

            <div className="overflow-hidden rounded-[36px] shadow-2xl">

              <Image
                src="/hero1.png"
                alt="Hero"
                width={700}
                height={900}
                priority
                className="h-auto w-full object-cover"
              />

            </div>

          </motion.div>

        </div>

      </Container>

    </section>
  );
}