"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

export function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // 컴포넌트 마운트 시 현재 스크롤 위치를 바로 설정
    setScrollY(window.scrollY);
    setIsInitialized(true);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // 스크롤 이벤트 리스너 추가
    window.addEventListener('scroll', handleScroll);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // 아이템별 이동 방향 설정
  const calculateTransform = (index: number) => {
    const moveAmount = scrollY * 0.4; // 이동 속도 조절 가능

    // 각 도형별로 다른 방향으로 이동
    const directions = [
      { x: -1, y: 1, }, // 좌상단
      { x: 0, y: 0.5 },  // 우상단
      { x: -0.5, y: 1 },  // 좌하단
      { x: 0.5, y: 1 },   // 우하단
      { x: -0.5, y: 0.5 }, // 사선 좌하단
      { x: 0.5, y: 0.5 }, // 사선 우하단
    ];

    const dir = directions[index % directions.length];
    return `translate(${moveAmount * dir.x}px, ${moveAmount * dir.y}px)`;
  };

  // 아이템 정보
  const items = [
    { id: 'g1', src: '/images/pattern/intro6.png', rotate: '' },
    { id: 'o1', src: '/images/pattern/d-orange.svg', rotate: '-rotate-90' },
    { id: 'd1', src: '/images/pattern/d-orange.svg', rotate: 'rotate-90' },
    { id: 'o2', src: '/images/pattern/intro3.png', rotate: '-rotate-90' },
    { id: 'g2', src: '/images/pattern/d-purple.svg', rotate: '-rotate-90' },
    { id: 'd2', src: '/images/pattern/d-purple.svg', rotate: '' },
  ];

  // 스크롤이 1500px 이상이면 fixed 클래스 제거
  const containerClass = scrollY >= 1500
      ? "absolute inset-0 z-0 flex flex-col justify-center items-center text-center"
      : "fixed inset-0 z-0 flex flex-col justify-center items-center text-center";

  // 초기화되기 전까지는 아무것도 렌더링하지 않음
  if (!isInitialized) {
    return null; // 또는 로딩 인디케이터
  }

  return (
      <section className="relative h-[85vh] overflow-hidden bg-slate-50">
        <div className={containerClass} style={{ opacity: scrollY >= 1500 ? 0 : 1 }}>
          <Image
              className="absolute left-1/2 top-0 -z-10 max-w-none -translate-y-1/4 translate-x-[-30%]"
              src={backgroundImage}
              alt=""
              width={1558}
              height={946}
              unoptimized
          />
          <strong className="font-gmarket text-6xl font-medium uppercase tracking-tight text-slate-900 leading-[1.3]">
            복잡함은 줄이고, <br/> 효율은 높이는 웹사이트 솔루션
          </strong>
          {/*<p className="mt-6 max-w-2xl text-lg tracking-tight text-slate-700">*/}
          {/*  Most bookkeeping software is accurate, <br /> but hard to use.*/}
          {/*</p>*/}
          <div className="grid grid-cols-6 gap-5 w-2/3 max-w-5xl mx-auto relative z-10 mt-20">
            {items.map((item, index) => (
                <span
                    key={item.id}
                    id={item.id}
                    style={{
                      transform: calculateTransform(index),
                      transition: 'transform 0.7s ease-out'
                    }}
                >
              <Image
                  src={item.src}
                  alt=""
                  width={200}
                  height={200}
                  className={`w-full opacity-90 ${item.rotate}`}
              />
            </span>
            ))}
          </div>
        </div>
      </section>
  )
}