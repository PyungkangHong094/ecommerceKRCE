// components/Services.tsx
import React from "react";
import { Warehouse, Ship, Package, Building2, Globe } from "lucide-react";

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    icon: <Warehouse size={32} />,
    title: "Fulfillment & Storage",
    description:
      "End-to-end warehousing and order fulfillment services between China and Korea",
  },
  {
    icon: <Ship size={32} />,
    title: "International Shipping",
    description:
      "Sea and air freight services connecting Incheon to 5 major Chinese hubs",
  },
  {
    icon: <Package size={32} />,
    title: "Tailored Fulfillment",
    description:
      "Custom distribution solutions for your specific business needs",
  },
  {
    icon: <Building2 size={32} />,
    title: "Warehousing Only",
    description: "Flexible storage solutions with state-of-the-art facilities",
  },
  {
    icon: <Globe size={32} />,
    title: "Consolidated Express",
    description:
      "Combined sea and air shipping services for optimal efficiency",
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          All-in-One Logistics Solution for Your Business
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-red-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
