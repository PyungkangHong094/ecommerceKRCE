// components/Services.tsx
import React from "react";

const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="py-16 bg-gradient-to-r from-red-50 to-red-100"
    >
      <div className="container mx-auto px-4 max-w-5xl">
        {/* 상단 제목 섹션 */}
        <div className="text-center mb-10 text-black">
          <h2 className="text-3xl font-bold mb-2">
            당신의 비즈니스를 위한 올인원 물류 솔루션
          </h2>
          <h3 className="text-2xl font-bold mb-3">중해천공공해외창</h3>
          <p className="text-lg max-w-2xl mx-auto mb-1">
            한국-중국 간 이커머스 물류에 최적화된 풀필먼트 & 국제운송 서비스
          </p>
          <p className="text-lg max-w-2xl mx-auto">
            차이노, 더우인, 쿠팡까지 완벽 연동된 원스톱 물류 솔루션
          </p>
        </div>

        {/* 서비스 그리드 - 2-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* 수출입 신고 지원 */}
          <div className="bg-[#C50001] rounded-xl overflow-hidden relative">
            <div className="p-4 text-white">
              <h3 className="text-xl font-bold">수출입 신고 지원</h3>
              <p className="text-base">
                한국-중국 전자신고 안비 (0710/9810 등)
              </p>
            </div>
            <img
              src="/api/placeholder/450/250"
              alt="수출입 신고 지원 - 트럭 이미지"
              className="w-full h-auto"
            />
          </div>

          {/* 산동성 1호 해외창고 */}
          <div className="bg-[#C50001] rounded-xl overflow-hidden relative">
            <div className="p-4 text-white">
              <h3 className="text-xl font-bold">산동성 1호 해외창고</h3>
              <p className="text-base">중국 정부도 인정한</p>
              <p className="text-base">공식 파트너</p>
            </div>
            <img
              src="/api/placeholder/450/250"
              alt="산동성 해외창고"
              className="w-full h-auto"
            />
          </div>

          {/* 해상 · 항공 국제운송 */}
          <div className="bg-[#C50001] rounded-xl overflow-hidden relative">
            <div className="p-4 text-white">
              <h3 className="text-xl font-bold">해상 · 항공 국제운송</h3>
              <p className="text-base">인천-위해 주 5회</p>
              <p className="text-base">항공급 속도의 해운</p>
            </div>
            <img
              src="/api/placeholder/450/250"
              alt="해상 및 항공 운송"
              className="w-full h-auto"
            />
          </div>

          {/* 글로벌 파트너 */}
          <div className="bg-[#C50001] rounded-xl overflow-hidden relative">
            <div className="p-4 text-white">
              <h3 className="text-xl font-bold">글로벌 파트너</h3>
              <p className="text-base">실시간 연동으로 자동 출고 가능</p>
            </div>
            <img
              src="/api/placeholder/450/250"
              alt="글로벌 파트너 - 물류 트럭"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* 하단 전체 너비 서비스 항목 */}
        <div>
          <div className="bg-[#C50001] rounded-xl overflow-hidden">
            <div className="p-4 text-white">
              <h3 className="text-xl font-bold">풀필먼트 & 창고 보관</h3>
              <p className="text-base">WMS 기반 무서류 자동화 시스템</p>
            </div>
            <div>
              <img
                src="/api/placeholder/900/350"
                alt="컨테이너와 창고 이미지"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
