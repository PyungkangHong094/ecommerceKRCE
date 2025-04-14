// components/KoreanSection.tsx
import React from "react";

const KoreanSection: React.FC = () => {
  return (
    <section className="relative py-16 bg-gray-900 border-t-8 border-b-8 border-blue-900/20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden border border-blue-900/30 p-8 md:p-12 bg-[linear-gradient(45deg,rgba(0,0,0,.9),rgba(70,0,0,.9))]">
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              지금 상담하고 당신의 물류비를 줄여보세요!
            </h1>
            <p className="text-lg mb-8 text-gray-300 max-w-3xl">
              중국-한국 간 전자상거래, 우리가 가장 잘 합니다. 최적화된 물류
              시스템으로 비용은 낮추고 효율은 높입니다.
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg transition-colors font-medium shadow-lg">
              상담 문의
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KoreanSection;
