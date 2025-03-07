import Image from 'next/image'

import { Container } from '@/components/Container'
import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage2 from '@/images/avatars/avatar-2.png'
import avatarImage3 from '@/images/avatars/avatar-3.png'
import avatarImage4 from '@/images/avatars/avatar-4.png'
import avatarImage5 from '@/images/avatars/avatar-5.png'
import {Logo} from "@/components/Logo";

const testimonials = [
  [
    {
      content:
        '홈페이지 제작은 항상 부담스럽게 느껴졌는데, 오드오드를 만나고 생각이 바뀌었어요. 일주일 만에 완성된 홈페이지로 인스타그램만 보고 오던 손님들이 이제 메뉴와 위치를 미리 확인하고 찾아오시더라고요. 특히 모바일에서 깔끔하게 보이는 디자인이 정말 마음에 들어요.',
      author: {
        name: '김민지',
        role: '카페 오브닝 대표',
        image: avatarImage1,
      },
    },
    {
      content:
        '제품은 좋은데 홈페이지가 없어서 판매가 부진했어요. 오드오드를 통해 만든 홈페이지 덕분에 전문성이 생겼고, 판매율이 2배 이상 늘었습니다. 고객들이 \'홈페이지 보고 신뢰가 생겨서 구매했다\'는 말을 자주 해주세요. 투자 대비 효과가 확실했습니다.',
      author: {
        name: '박준혁',
        role: '라이프스타일 브랜드 \'모닝글로우\' 창업자',
        image: avatarImage4,
      },
    },
  ],
  [
    {
      content:
        '환자들이 병원 정보를 찾아볼 수 있는 공간이 필요했는데, 오드오드가 정확히 원하는 바를 구현해주었습니다. 특히 디자인이 깔끔하고 진료 정보를 쉽게 업데이트할 수 있어 편리합니다. 제작 후에도 필요할 때마다 빠르게 도움을 주셔서 더 만족스러워요.',
      author: {
        name: '이수진 원장',
        role: '미소가득 치과',
        image: avatarImage5,
      },
    },
    {
      content:
        '포트폴리오 사이트가 반드시 필요했지만 직접 만들 시간이 없었습니다. 오드오드에게 의뢰한 결과, 예상보다 훨씬 빠르게 제 작업을 멋지게 보여주는 사이트가 완성되었어요. 사이트 덕분에 새 클라이언트를 두 명이나 추가로 얻었습니다. 정말 합리적인 투자였습니다.',
      author: {
        name: '최태영',
        role: '프리랜서 그래픽 디자이너',
        image: avatarImage2,
      },
    },
  ],
  [
    {
      content:
        '여러 업체를 검토했지만 오드오드의 빠른 대응과 명확한 커뮤니케이션이 결정적이었습니다. 당사 분양 정보를 한눈에 볼 수 있는 웹사이트를 제작해 주셨고, 덕분에 문의량이 30% 증가했습니다. 특히 모바일에서도 최적화가 잘 되어 있어 고객들의 만족도가 높습니다.',
      author: {
        name: '정민석',
        role: 'JS건설 마케팅 팀장',
        image: avatarImage3,
      },
    },
    {
      content:
        '학부모님들이 학원 정보를 쉽게 찾아볼 수 있는 홈페이지가 필요했어요. 오드오드는 학원 특성에 맞는 디자인과 기능을 제안해 주셨고, 특히 수강 신청 페이지가 잘 만들어져 온라인 신청률이 크게 늘었습니다. 홈페이지 관리도 어렵지 않아 직접 업데이트하고 있어요.',
      author: {
        name: '한지영',
        role: '드림잉글리시 원장',
        image: avatarImage4,
      },
    },
  ],
]

function QuoteIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden="true" width={105} height={78} {...props}>
      <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
    </svg>
  )
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-gmarket text-3xl tracking-tight text-slate-900 sm:text-4xl">
            다양한 업종의 고객들이 인정한 <br/> 오드:오드
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            전문적인 웹사이트로 비즈니스 성장을 경험한 고객들의 후기입니다.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex}>
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      <QuoteIcon className="absolute left-6 top-6 fill-slate-100" />
                      <blockquote className="relative">
                        <p className="text-md tracking-tight text-slate-900">
                          {testimonial.content}
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900">
                            {testimonial.author.name}
                          </div>
                          <div className="mt-1 text-sm text-slate-500">
                            {testimonial.author.role}
                          </div>
                        </div>
                        <div className="overflow-hidden rounded-full bg-slate-50">
                          <Image
                            className="h-14 w-14 object-cover"
                            src={testimonial.author.image}
                            alt=""
                            width={56}
                            height={56}
                          />
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
