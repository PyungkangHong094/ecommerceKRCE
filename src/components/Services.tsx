// components/Services.tsx
import React from "react";

// 이미지를 직접 import (Vite/React에서 권장하는 방식)
import services1 from "../public/services1.png";
import services2 from "../public/services2.png";
import services3 from "../public/services3.png";
import services4 from "../public/services4.png";
import services5 from "../public/services5.png";
import backgroundImage from "../public/backgroundcricle.jpg";

const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="py-8 md:py-16"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 max-w-4xl">
        {/* 상단 제목 섹션 */}
        <div className="text-center mb-6 md:mb-10 text-black">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            당신의 비즈니스를 위한 올인원 물류 솔루션
          </h2>
          <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">
            중해천공공해외창
          </h3>
          <p className="text-base md:text-lg max-w-2xl mx-auto mb-1">
            한국-중국 간 이커머스 물류에 최적화된 풀필먼트 & 국제운송 서비스
          </p>
          <p className="text-base md:text-lg max-w-2xl mx-auto">
            차이노, 더우인, 쿠팡까지 완벽 연동된 원스톱 물류 솔루션
          </p>
        </div>

        {/* 첫 번째 행: 모바일에서 세로로, 데스크탑에서 가로로 */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 mb-4 md:mb-6">
          {/* 첫 번째 카드 - 큰 카드 */}
          <div className="bg-[#C50001] rounded-xl overflow-hidden relative w-full md:w-2/3 h-64 md:h-96 lg:h-[426.67px]">
            <div className="p-4 text-white absolute top-0 left-0 z-10">
              <h3 className="text-lg md:text-xl font-bold">수출입 신고 지원</h3>
              <p className="text-sm md:text-base">
                한국-중국 전자신고 안비 (0710/9810 등)
              </p>
            </div>
            <div className="absolute inset-0">
              <img
                src={services1}
                alt="수출입 신고 지원 - 트럭 이미지"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* 두 번째 카드 - 작은 카드 */}
          <div className="bg-[#C50001] rounded-xl overflow-hidden relative w-full md:w-1/3 h-64 md:h-96 lg:h-[426.67px]">
            <div className="p-4 text-white absolute top-0 left-0 z-10">
              <h3 className="text-lg md:text-xl font-bold">
                산동성 1호 해외창고
              </h3>
              <p className="text-sm md:text-base">중국 정부도 인정한</p>
              <p className="text-sm md:text-base">공식 파트너</p>
            </div>
            <div className="absolute inset-0">
              <img
                src={services2}
                alt="산동성 해외창고"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* 두 번째 행: 모바일에서 세로로, 데스크탑에서 가로로 */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 mb-4 md:mb-6">
          {/* 세 번째 카드 - 작은 카드 */}
          <div className="bg-[#C50001] rounded-xl overflow-hidden relative w-full md:w-1/3 h-64 md:h-96 lg:h-[426.67px]">
            <div className="p-4 text-white absolute top-0 left-0 z-10">
              <h3 className="text-lg md:text-xl font-bold">
                해상 · 항공 국제운송
              </h3>
              <p className="text-sm md:text-base">인천-위해 주 5회</p>
              <p className="text-sm md:text-base">항공급 속도의 해운</p>
            </div>
            <div className="absolute inset-0">
              <img
                src={services3}
                alt="해상 및 항공 운송"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* 네 번째 카드 - 큰 카드 */}
          <div className="bg-[#C50001] rounded-xl overflow-hidden relative w-full md:w-2/3 h-64 md:h-96 lg:h-[426.67px]">
            <div className="p-4 text-white absolute top-0 left-0 z-10">
              <h3 className="text-lg md:text-xl font-bold">글로벌 파트너</h3>
              <p className="text-sm md:text-base">
                실시간 연동으로 자동 출고 가능
              </p>
            </div>
            <div className="absolute inset-0">
              <img
                src={services4}
                alt="글로벌 파트너 - 물류 트럭"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* 하단 전체 너비 서비스 항목 */}
        <div>
          <div className="bg-[#C50001] rounded-xl overflow-hidden relative w-full h-64 md:h-96 lg:h-[426.67px]">
            <div className="p-4 text-white absolute top-0 left-0 z-10">
              <h3 className="text-lg md:text-xl font-bold">
                풀필먼트 & 창고 보관
              </h3>
              <p className="text-sm md:text-base">
                WMS 기반 무서류 자동화 시스템
              </p>
            </div>
            <div className="absolute inset-0">
              <img
                src={services5}
                alt="컨테이너와 창고 이미지"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
