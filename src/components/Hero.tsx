"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

export function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
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
  const calculateTransform = (index) => {
    const moveAmount = scrollY * 0.4; // 이동 속도 조절 가능

    // 각 도형별로 다른 방향으로 이동
    const directions = [
      { x: -1, y: -1 }, // 좌상단
      { x: 1, y: -1 },  // 우상단
      { x: -1, y: 1 },  // 좌하단
      { x: 1, y: 1 },   // 우하단
      { x: -0.5, y: 0.8 }, // 사선 좌하단
      { x: 0.5, y: 0.8 }, // 사선 우하단
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

  // 스크롤이 200px 이상이면 fixed 클래스 제거
  const containerClass = scrollY >= 1500
      ? "absolute inset-0 z-0 flex items-end pb-[10vh]"
      : "fixed inset-0 z-0 flex items-end pb-[10vh]";

  return (
      <section className="relative h-[95vh] overflow-hidden bg-slate-50">
        <div className={containerClass}>
          <Image
              className="absolute left-1/2 top-0 z-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
              src={backgroundImage}
              alt=""
              width={1558}
              height={946}
              unoptimized
          />
          <strong className="absolute right-5 top-3 font-display text-md font-light uppercase tracking-tight text-slate-900 sm:text-5xl">
            ELEVATING <br />
            BRANDS THROUGH DESIGN.
          </strong>
          <p className="mt-6 max-w-2xl text-lg tracking-tight text-slate-700 hidden">
            Most bookkeeping software is accurate, <br /> but hard to use.
          </p>
          <div className="grid grid-cols-3 gap-5 w-2/3 max-w-5xl mx-auto relative z-10">
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