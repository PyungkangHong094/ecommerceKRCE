// components/Portfolio.tsx
import React from "react";

interface PortfolioItem {
  image: string;
  title: string;
  description: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80",
    title: "Modern Warehouse Operations",
    description:
      "State-of-the-art facilities ensuring efficient storage and handling",
  },
  {
    image:
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=800&q=80",
    title: "Logistics Technology",
    description:
      "Advanced tracking and management systems for real-time visibility",
  },
  {
    image:
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=800&q=80",
    title: "Global Network",
    description: "Extensive partnership network across China and Korea",
  },
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Our Logistics Excellence in Action
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
