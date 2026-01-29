"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const features = [
  {
    title: "About",
    description: "Find out about our organization and mission.",
    image: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1563354199228-0X8V4KH8AJ67UZI0QY6Z/1.jpg",
    href: "/about-1",
  },
  {
    title: "Join Us",
    description: "You can become a contributor to our cause, or participate yourself.",
    image: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1563354353803-U6B96VGNWCKLD4E8VRHD/bas_gv_2018_bw.jpeg",
    href: "/meetups-events",
  },
];

export function FeatureCards() {
  return (
    <section className="py-16 lg:py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature) => (
            <Link
              key={feature.title}
              href={feature.href}
              className="group block"
            >
              <div className="relative overflow-hidden">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                {/* Content */}
                <div className="pt-6">
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 font-serif group-hover:text-teal transition-colors">
                    {feature.title}
                  </h2>
                  <p className="text-gray-600 mb-4 font-sans font-light">
                    {feature.description}
                  </p>
                  <div className="flex items-center text-teal font-medium text-sm uppercase tracking-wider">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}