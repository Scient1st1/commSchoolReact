"use client";

import React from "react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  rating: number;
  comment: string;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Fashion Enthusiast",
      image: "",
      rating: 5,
      comment:
        "Amazing quality products and fast shipping! I've ordered multiple times and always been satisfied. The customer service is excellent too.",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Tech Reviewer",
      image: "",
      rating: 5,
      comment:
        "Great prices and a wide selection. Found exactly what I was looking for. The website is easy to navigate and checkout was smooth.",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Lifestyle Blogger",
      image: "",
      rating: 5,
      comment:
        "Love shopping here! The products are exactly as described and the packaging is always perfect. Highly recommend to everyone!",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied
            customers have to say about their shopping experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Rating */}
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Comment */}
              <p className="text-gray-700 mb-6 italic">
                &quot;{testimonial.comment}&quot;
              </p>

              {/* Customer Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold text-lg mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
