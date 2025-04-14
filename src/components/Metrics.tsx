// components/Metrics.tsx
import React from "react";
import { Building2, Timer, Users, CheckCircle2 } from "lucide-react";

interface MetricItem {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const metrics: MetricItem[] = [
  {
    icon: <Building2 size={40} />,
    value: "50,000m²",
    label: "Warehouse Space",
  },
  {
    icon: <Timer size={40} />,
    value: "24/7",
    label: "Operations",
  },
  {
    icon: <Users size={40} />,
    value: "1000+",
    label: "Active Clients",
  },
  {
    icon: <CheckCircle2 size={40} />,
    value: "99.9%",
    label: "Delivery Success",
  },
];

const Metrics: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-red-600 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Partners You Can Trust
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center p-6 bg-red-700 rounded-lg">
              <div className="text-white mb-4">{metric.icon}</div>
              <div className="text-4xl font-bold mb-2">{metric.value}</div>
              <div className="text-lg">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;
