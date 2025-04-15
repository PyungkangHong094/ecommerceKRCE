// components/Portfolio.tsx
import React from "react";

// 이미지를 직접 import (Vite/React에서 권장하는 방식)
import port1 from "../public/port1.png";
import port2 from "../public/port2.png";
import port3 from "../public/port3.png";

interface PortfolioItem {
  image: string;
}

const Portfolio: React.FC = () => {
  const portfolioItems: PortfolioItem[] = [
    {
      image: port1,
    },
    {
      image: port2,
    },
    {
      image: port3,
    },
  ];

  return (
    <div className="bg-white py-8 md:py-16">
      <div className="w-full max-w-[1792px] mx-auto px-4 md:px-8">
        {/* 그라데이션 카드 - 반응형으로 조정 */}
        <div
          className="bg-[#1A0000] rounded-2xl md:rounded-[40px] p-4 md:p-8 lg:p-16 w-full mx-auto overflow-hidden"
          style={{ maxWidth: "1792px", minHeight: "350px" }}
        >
          <div className="text-center mb-4 md:mb-8 lg:mb-16">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">
              한-중 전자상거래 물류의 시작과 끝
            </h2>
            <h3 className="text-lg md:text-xl font-bold text-white">
              중해천공공해외창
            </h3>
          </div>

          {/* 카드 컨테이너 - 반응형 그리드로 변경 */}
          <div className="flex flex-col md:flex-row flex-wrap justify-between gap-4 md:gap-6 lg:gap-8">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="rounded-xl md:rounded-2xl overflow-hidden w-full md:w-[calc(33%-16px)] lg:w-[calc(33%-24px)]"
                style={{
                  minHeight: "280px",
                  maxHeight: "640px",
                  aspectRatio: "0.715",
                }}
              >
                {/* 이미지만 표시 (텍스트는 이미 이미지에 포함됨) */}
                <img
                  src={item.image}
                  alt="물류 서비스 이미지"
                  className="w-full h-full object-cover rounded-xl md:rounded-2xl"
                  onError={(e) => {
                    console.error(`Failed to load image: ${item.image}`);
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
