// components/Hero.tsx
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative bg-black text-white py-32">
      <div className="absolute inset-0 z-0">
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 md:mb-6">
            한-중 전자상거래 물류의 시작과 끝
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12">
            중해선공공해외창
          </h2>

          <p className="text-lg md:text-xl mb-4 text-gray-200 max-w-3xl">
            한국-중국 간 이커머스 물류에 최적화된 풀필먼트 & 국제운송 서비스
          </p>
          <p className="text-lg md:text-xl mb-12 text-gray-200 max-w-3xl">
            차이노, 더우인, 쿠팡까지 완벽 연동된 원스톱 물류 솔루션
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
