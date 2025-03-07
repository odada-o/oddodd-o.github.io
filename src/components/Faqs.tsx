import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: '웹사이트 제작 기간은 얼마나 걸리나요?',
      answer:
        '기본적으로 요구사항 확인 후 5-7일 이내에 완성해 드립니다. 프리미엄 플랜의 경우 3일 이내 우선 제작이 가능합니다. 복잡한 기능이 필요한 경우 별도로 일정을 안내해 드립니다.',
    },
    {
      question: '초기 비용 외에 추가 비용이 발생하나요?',
      answer: '계약 시 명시된 금액 외에 추가 비용은 발생하지 않습니다. 1년 후부터는 호스팅, 도메인, 보안 관리, 기술 지원을 포함한 월 3만원의 유지관리 비용이 발생합니다.',
    },
    {
      question: '웹사이트 제작 후 직접 수정할 수 있나요?',
      answer:
        '네, 가능합니다. 아임웹 기반으로 제작되어 전문 지식 없이도 텍스트, 이미지, 메뉴 등의 기본적인 내용을 쉽게 수정하실 수 있습니다. 사이트 인계 시 간단한 관리 방법도 알려드립니다.',
    },
    {
      question:
          '도메인과 호스팅은 어떻게 준비하나요?',
      answer:
          '걱정하지 마세요. 도메인 선택부터 호스팅 설정까지 모든 과정을 저희가 대행해 드립니다. 모든 플랜에 1년 무료 도메인이 포함되어 있으며, 기존에 보유한 도메인이 있으시다면 그것을 사용하실 수도 있습니다.',
    },
  ],
  [
    {
      question: '웹 접근성도 고려하나요?',
      answer:
        '네, 웹 접근성을 최대한 고려합니다. 아임웹 기반의 라이트와 스탠다드 플랜에서는 기본적인 접근성 요소를 적용하며, 그누보드 기반의 프리미엄 플랜에서는 더 높은 수준의 웹 접근성 지침 준수가 가능합니다. 공공기관이나 웹 접근성 인증이 필요한 경우 프리미엄 플랜을 권장드립니다.',
    },
    {
      question:
        '모바일에서도 잘 보이나요?',
      answer:
        '네, 모든 웹사이트는 반응형으로 제작되어 PC, 태블릿, 모바일 등 다양한 기기에서 최적화된 형태로 제공됩니다. 모바일 사용자가 많은 현실을 고려하여 모바일 환경에서의 사용성을 특히 중요하게 생각합니다.',
    },
    {
      question: '웹사이트 관리 방법은 어떻게 배울 수 있나요?',
      answer: '웹사이트 완성 후 관리 방법에 대한 무료 교육을 제공해 드립니다. 화면 공유를 통한 1:1 교육으로 콘텐츠 업데이트, 이미지 교체, 메뉴 관리 등 기본적인 관리 방법을 알려드립니다. 또한 자주 사용하는 기능에 대한 간단한 매뉴얼도 제공해 드립니다. 교육 이후에도 궁금한 점이 있으시면 언제든지 문의해 주세요.'
    }
  ],
  [
    {
      question: 'SEO 최적화도 해주시나요?',
      answer:
        '네, 모든 웹사이트에 기본적인 SEO 설정을 적용합니다. 메타 태그, 사이트맵, 모바일 최적화 등 검색엔진에 잘 노출되기 위한 기본 요소들을 포함하며, 상위 플랜에서는 더 고급 수준의 SEO 최적화를 제공합니다.',
    },
    {
      question: '유지보수는 어떻게 진행되나요?',
        answer: '모든 플랜은 1년 후부터 월 유지관리비(아임웹: 3만원, 그누보드: 5만원)가 발생합니다. 유지관리에는 호스팅, 보안 업데이트, 기술 지원이 포함되며, 한 달에 한 번 무료 콘텐츠 수정을 지원해 드립니다. 필요한 경우 추가 수정은 별도 비용으로 진행 가능합니다.',
    },
    {
      question: '아임웹과 그누보드의 차이점은 무엇인가요?',
      answer: '아임웹은 직관적인 관리와 빠른 제작이 장점으로, 간단하고 세련된 웹사이트가 필요한 소상공인에게 적합합니다. 제작 기간이 짧고(5-7일) 관리가 쉽습니다. 그누보드는 오픈소스 기반으로 높은 수준의 맞춤화와 웹 접근성 준수가 가능하여 공공기관이나 특별한 기능이 필요한 기업에 적합합니다. 개발 시간이 더 소요되지만(10일 내외), 확장성과 자유로운 기능 구현이 가능합니다. 어떤 플랫폼이 적합할지 고민되신다면 무료 상담을 통해 전문가의 조언을 받아보세요.'
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-gmarket text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            자주 묻는 질문
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            웹사이트 제작에 관해 고객님들이 가장 많이 궁금해하시는 질문들입니다.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display font-medium text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
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
