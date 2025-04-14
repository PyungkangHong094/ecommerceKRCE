// components/KoreanSection.tsx
import React from "react";

const KoreanSection: React.FC = () => {
  return (
    <section className="relative bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">
            지금 상단방고 당신의 물류비를 줄여보세요!
          </h1>
          <p className="text-lg mb-8 text-gray-300">
            중국-한국 간 전자상거래, 우리가 가장 잘 합니다.
          </p>
          <button className="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
            상담 문의
          </button>
        </div>
      </div>
    </section>
  );
};

export default KoreanSection;
