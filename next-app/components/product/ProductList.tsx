"use client";

import ProductCard from "./ProductCard";
// import { NewArrival } from "@/data/newArrivals";

interface ProductListProps {
  title: string;
  // products: NewArrival[];
}

const ProductList = ({ title }: ProductListProps) => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            {title}
          </h2>
          <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2">
            View All
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"></div>
      </div>
    </section>
  );
};

export default ProductList;
