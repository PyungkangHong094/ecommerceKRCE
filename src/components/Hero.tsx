// components/Hero.tsx
import React from "react";
import firstPageImage from "../public/firstpage.png";

const Hero: React.FC = () => {
  return (
    <section className="relative bg-white py-8 md:py-16">
      <div className="container mx-auto px-4 md:px-8">
        {/* Rounded container with dark background - using striped pattern border */}
        <div className="rounded-[40px] overflow-hidden bg-gray-900 border-8 border-blue-900/20 bg-[linear-gradient(45deg,rgba(0,0,0,.9),rgba(70,0,0,.9))] shadow-lg mx-auto relative">
          {/* Content container with proper padding */}
          <div className="p-6 md:p-12 pt-16 md:pt-20">
            {/* Text content - centered at the top */}
            <div className="flex flex-col items-center text-center mb-8 md:mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-white">
                한-중 전자상거래 물류의 시작과 끝
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 text-white">
                중해천공공해외창
              </h2>

              <p className="text-base md:text-lg mb-2 text-gray-200 max-w-3xl">
                한국-중국 간 이커머스 물류에 최적화된 풀필먼트 & 국제운송 서비스
              </p>
              <p className="text-base md:text-lg mb-4 text-gray-200 max-w-3xl">
                차이노, 더우인, 쿠팡까지 완벽 연동된 원스톱 물류 솔루션
              </p>
            </div>

            {/* Hero image - transportation composite image */}
            <div className="w-full mx-auto overflow-hidden">
              <div className="relative w-full h-[420px] md:h-[500px]">
                <img
                  src={firstPageImage}
                  alt="한-중 통합 물류 시스템: 항공기, 선박, 트럭을 포함한 운송 네트워크"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
