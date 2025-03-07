import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-blue-600 py-32"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto text-center">
          <h2 className="font-gmarket text-3xl tracking-tight text-white sm:text-4xl">
            지금 바로 시작하세요
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            귀사만의 전문적인 웹사이트가 필요한 순간입니다. <br/>
            단 7일 만에 완성되는 맞춤형 웹사이트로 온라인 비즈니스의 시작을 함께하세요.
          </p>
          <Button href="/register" color="white" className="mt-10 p-10">
            무료 상담 신청하기
          </Button>
        </div>
      </Container>
    </section>
  )
}
