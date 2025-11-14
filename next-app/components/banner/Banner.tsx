'use client';

import React from 'react';
import Link from 'next/link';

const Banner = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Welcome to ShopHub
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Discover amazing products at unbeatable prices. Shop the latest trends and find everything you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/products"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition text-center"
            >
              Shop Now
            </Link>
            <Link
              href="/categories"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition text-center"
            >
              Browse Categories
            </Link>
          </div>
        </div>
      </div>
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-white transform rotate-180">
        <svg className="w-full h-full" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="currentColor" className="text-white"/>
        </svg>
      </div>
    </section>
  );
};

export default Banner;

