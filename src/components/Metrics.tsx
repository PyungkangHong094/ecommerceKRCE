// components/Metrics.tsx
import React from "react";

interface MetricItem {
  title: string;
  value: string;
}

const Metrics: React.FC = () => {
  const metrics: MetricItem[] = [
    {
      title: "창고 면적",
      value: "5,000m²",
    },
    {
      title: "일 처리 물량",
      value: "10,000건",
    },
    {
      title: "누적 수출입 신고",
      value: "30만건",
    },
    {
      title: "연동 플랫폼",
      value: "60+",
    },
    {
      title: "재이용률",
      value: "92%",
    },
    {
      title: "자동 출고 정확도",
      value: "99.7%",
    },
    {
      title: "주문 후 평균",
      value: "3시간 이내 출고",
    },
    {
      title: "전문 인력 배치",
      value: "평균 7년 경력",
    },
  ];

  return (
    <section id="metrics" className="py-16 bg-white">
      <div className="container mx-auto px-2">
        <h2 className="text-center text-3xl font-bold mb-12 text-black">
          믿고 맡길 수 있는 파트너십
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {metrics.slice(0, 4).map((metric, index) => (
            <div
              key={index}
              className="bg-[#C50001] text-white text-center p-6 rounded-xl flex flex-col justify-center items-center"
            >
              <p className="text-lg font-medium mb-1">{metric.title}</p>
              <p className="text-2xl md:text-3xl font-bold">{metric.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {metrics.slice(4, 8).map((metric, index) => (
            <div
              key={index}
              className="bg-[#C50001] text-white text-center p-6 rounded-xl flex flex-col justify-center items-center"
            >
              <p className="text-lg font-medium mb-1">{metric.title}</p>
              <p className="text-2xl md:text-3xl font-bold">{metric.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;
