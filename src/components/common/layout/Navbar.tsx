"use client";

import Link from "next/link";
import { Search, Heart, ShoppingBag, User, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Container from "../Container";
import { cn } from "../../../lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Our Story", href: "/our-story" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Announcement */}

      <div className="hidden md:block bg-[var(--background-secondary)] border-b border-[var(--border)] text-sm">
        <Container className="flex h-10 items-center justify-between text-[13px] text-muted">
          <p>Free Shipping on orders above ₹999</p>

          <div className="flex gap-6">
            <Link href="#">Instagram</Link>
            <Link href="#">Contact</Link>
          </div>
        </Container>
      </div>

      {/* Navbar */}

      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-500",
          scrolled && "py-3"
        )}
      >
        <Container
          className={cn(
            "transition-all duration-500",
            scrolled &&
              "rounded-full bg-[rgba(252,250,246,.92)] backdrop-blur-xl shadow-lg px-8"
          )}
        >
          <nav className="flex h-20 items-center justify-between">
            {/* Logo */}

            <Link href="/" className="flex flex-col">
              <span
                className="heading-md leading-none"
                style={{ fontSize: "2rem" }}
              >
                Yagnik
              </span>

              <span className="text-xs tracking-[.25em] uppercase text-muted mt-1">
                Handcrafted for Devotion
              </span>
            </Link>

            {/* Desktop */}

            <div className="hidden lg:flex items-center gap-10">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-[15px] hover:text-[var(--accent)] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Right */}

            <div className="hidden lg:flex items-center gap-5">
              <Search size={19} />
              <Heart size={19} />
              <ShoppingBag size={19} />
              <User size={19} />
            </div>

            {/* Mobile */}

            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="lg:hidden"
            >
              {mobileMenu ? <X /> : <Menu />}
            </button>
          </nav>
        </Container>
      </header>

      {/* Mobile Menu */}

      <div
        className={cn(
          "fixed inset-0 bg-[var(--background)] z-40 transition-all duration-500 lg:hidden",
          mobileMenu
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        )}
      >
        <Container className="pt-28">
          <div className="flex flex-col gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenu(false)}
                className="heading-md"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}