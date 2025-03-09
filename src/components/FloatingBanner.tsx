"use client";

import React, { useState } from 'react';
import { MessageSquare, FileText, ChevronUp } from 'lucide-react';

const FloatingBanner = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className="fixed bottom-20 right-8 z-50 flex flex-col items-end">

            {/* 메뉴 아이템들 */}
            <div className={`transition-all overflow-hidden duration-300 bg-white rounded-full shadow-lg ${isCollapsed ? 'opacity-0 invisible' : 'opacity-100 visible'}`}>
                {/* 제작문의 버튼 */}
                <a
                    href="/contact"
                    className="w-16 h-16 flex flex-col items-center justify-center pt-4 mb-4 hover:bg-gray-100 transition-all duration-300"
                >
                    <MessageSquare className="w-6 h-6 text-gray-600 mb-1" />
                    <span className="text-xs text-gray-600">제작문의</span>
                </a>

                {/* 요금안내 버튼 */}
                <a
                    href="#pricing"
                    className="w-16 h-16 flex flex-col items-center justify-center pb-4 hover:bg-gray-100 transition-all duration-300"
                >
                    <FileText className="w-6 h-6 text-gray-600 mb-1" />
                    <span className="text-xs text-gray-600">요금안내</span>
                </a>
            </div>
        </div>
    );
};

export default FloatingBanner;