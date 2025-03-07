'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-features.jpg'
import screenshotExpenses from '@/images/screenshots/expenses.png'
import screenshotPayroll from '@/images/screenshots/payroll.png'
import screenshotReporting from '@/images/screenshots/reporting.png'
import screenshotVatReturns from '@/images/screenshots/vat-returns.png'

const features = [
  {
    title: '원페이지 디자인',
    description:
      "모든 정보를 한 페이지에 담아 깔끔하고 직관적인 웹사이트를 제작합니다. 별도의 페이지 이동 없이 스크롤만으로 회사의 모든 정보를 확인할 수 있습니다.",
    image: screenshotPayroll,
  },
  {
    title: '맞춤형 템플릿',
    description:
      "다양한 업종별 최적화된 템플릿을 제공합니다. 귀사의 브랜드 아이덴티티에 맞게 커스터마이징이 가능합니다.",
    image: screenshotExpenses,
  },
  {
    title: '모바일 최적화',
    description:
      "모든 디바이스에서 완벽하게 작동하는 반응형 웹사이트를 제공합니다. 어떤 기기에서도 최적의 사용자 경험을 선사합니다.",
    image: screenshotVatReturns,
  },
  {
    title: '간편한 관리',
    description:
      '전문 지식 없이도 쉽게 콘텐츠를 업데이트할 수 있는 직관적인 관리 시스템을 제공합니다. 텍스트부터 이미지까지 손쉽게 변경 가능합니다.',
    image: screenshotReporting,
  },
]

export function PrimaryFeatures() {
  let [tabOrientation, setTabOrientation] = useState<'horizontal' | 'vertical'>(
    'horizontal',
  )

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }: { matches: boolean }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="overflow-hidden bg-slate-50"
    >
      <div className="relative overflow-hidden bg-blue-700/60 pb-28 pt-20 sm:py-32 backdrop-blur-2xl">
      {/*<Image*/}
      {/*  className="absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"*/}
      {/*  src={backgroundImage}*/}
      {/*  alt=""*/}
      {/*  width={2245}*/}
      {/*  height={1636}*/}
      {/*  unoptimized*/}
      {/*/>*/}
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display font-gmarket text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            홈페이지 제작, 이제 복잡하지 않습니다.
          </h2>
          <p className="mt-6 text-lg tracking-tight text-blue-100">
            필요한 모든 것을 담은 홈페이지를 합리적인 가격에 제공합니다.
          </p>
        </div>
        <TabGroup
          className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === 'vertical'}
        >
          {({ selectedIndex }) => (
            <>
              <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                <TabList className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                  {features.map((feature, featureIndex) => (
                    <div
                      key={feature.title}
                      className={clsx(
                        'group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6',
                        selectedIndex === featureIndex
                          ? 'bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10'
                          : 'hover:bg-white/10 lg:hover:bg-white/5',
                      )}
                    >
                      <h3>
                        <Tab
                          className={clsx(
                            'font-display font-bold font-gmarket text-lg ui-not-focus-visible:outline-none',
                            selectedIndex === featureIndex
                              ? 'text-blue-600 lg:text-white'
                              : 'text-blue-100 hover:text-white lg:text-white',
                          )}
                        >
                          <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                          {feature.title}
                        </Tab>
                      </h3>
                      <p
                        className={clsx(
                          'mt-2 hidden lg:block',
                          selectedIndex === featureIndex
                            ? 'text-white'
                            : 'text-blue-100 group-hover:text-white',
                        )}
                      >
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </TabList>
              </div>
              <TabPanels className="lg:col-span-7">
                {features.map((feature) => (
                  <TabPanel key={feature.title} unmount={false}>
                    <div className="relative sm:px-6 lg:hidden">
                      <div className="absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                      <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                        {feature.description}
                      </p>
                    </div>
                    <div className="mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                      <Image
                        className="w-full"
                        src={feature.image}
                        alt=""
                        priority
                        sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                      />
                    </div>
                  </TabPanel>
                ))}
              </TabPanels>
            </>
          )}
        </TabGroup>
      </Container>
      </div>
    </section>
  )
}
