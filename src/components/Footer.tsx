// components/Footer.tsx
import React from "react";
import { Instagram, Twitter, Youtube } from "lucide-react";
import logofooter from "../public/logofooter.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A1718] text-white py-20 rounded-t-3xl">
      <div className="container mx-auto px-4">
        {/* 중앙 로고 이미지 */}
        <div className="flex justify-center mb-16">
          <img
            src={logofooter}
            alt="중해천공공해외창 로고"
            className="h-auto w-[440px]"
          />
        </div>

        {/* 푸터 하단 부분 - 4개 열로 배치 */}
        <div className="flex flex-col md:flex-row justify-between max-w-5xl mx-auto">
          {/* 왼쪽 회사 정보 */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-medium mb-2">중해천공공해외창</h3>
            <p className="text-gray-400 mb-4">email@email.com</p>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* 오른쪽 메뉴 그룹 */}
          <div className="flex space-x-12 md:space-x-20">
            {/* SUPPORT */}
            <div>
              <h3 className="text-lg font-medium mb-3">SUPPORT</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    menu1
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    menu2
                  </a>
                </li>
              </ul>
            </div>

            {/* NAVIGATION */}
            <div>
              <h3 className="text-lg font-medium mb-3">NAVIGATION</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    menu1
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    menu2
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    menu3
                  </a>
                </li>
              </ul>
            </div>

            {/* Terms */}
            <div>
              <h3 className="text-lg font-medium mb-3">Terms</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    개인정보처리방침
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    이용약관
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 저작권 표시 - 가운데 정렬에서 왼쪽 정렬로 수정 */}
        <div className="mt-16 text-gray-500 text-sm">
          <p>© 2024 중해천공공해외창. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
