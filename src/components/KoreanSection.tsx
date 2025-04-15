// components/KoreanSection.tsx
import React from "react";
import firstPageImage from "../public/firstpage.png";

const KoreanSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-10xl mx-auto bg-gradient-to-r from-[#100707] via-[#C50001] to-[#100707] rounded-[50px] shadow-xl overflow-hidden">
          <div className="p-12 md:p-16 flex flex-col md:flex-row items-center justify-between">
            {/* 왼쪽 텍스트 부분 */}
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                지금 상담받고 당신의 물류비를 줄여보세요!
              </h1>
              <p className="text-lg mb-8 text-gray-300">
                중국-한국 간 전자상거래, 우리가 가장 잘 합니다.
              </p>
              <button className="bg-white text-black hover:bg-gray-100 px-8 py-3 rounded-full transition-colors font-medium shadow-lg">
                상담 문의
              </button>
            </div>

            {/* 오른쪽 이미지 부분 */}
            <div className="md:w-1/2 relative h-[250px] md:h-[300px]">
              {/* 이미지를 직접 import해서 사용 */}
              <img
                src={firstPageImage}
                alt="물류 서비스 - 비행기, 트럭, 선박"
                className="absolute w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KoreanSection;
