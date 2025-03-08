import { Container } from '@/components/Container'

interface ProcessStepProps {
    number: string
    title: string
    description: string
    isLast?: boolean
}

function ProcessStep({ number, title, description, isLast = false } : ProcessStepProps) {
    return (
        <div className="relative flex items-start">
            {/* 숫자 원형 표시 */}
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-blue-500 bg-blue-600 text-white font-bold">
                {number}
            </div>

            {/* 연결선 */}
            {!isLast && (
                <div className="absolute left-5 top-10 h-full w-px bg-gradient-to-b from-blue-500 to-blue-300" />
            )}

            {/* 내용 */}
            <div className="ml-4 pb-10">
                <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
                    {title}
                </h3>
                <p className="mt-2 text-sm text-slate-700 dark:text-slate-400">
                    {description}
                </p>
            </div>
        </div>
    )
}

export function Process() {
    return (
        <section
            id="process"
            aria-label="제작 과정"
            className="bg-slate-50 py-20 sm:py-32 dark:bg-slate-900 relative z-10"
        >
            <Container>
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="font-gmarket text-3xl tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                        쉽고 빠른 웹사이트 제작 과정
                    </h2>
                    <p className="mt-4 text-lg tracking-tight text-slate-700 dark:text-slate-400">
                        플랫오만의 효율적인 프로세스로 복잡한 과정 없이 빠르게 웹사이트를 제작해 드립니다.
                    </p>
                </div>

                <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 lg:grid-cols-3">
                        <div className="flex flex-col">
                            <ProcessStep
                                number="1"
                                title="무료 상담"
                                description="요구사항과 비즈니스 목표에 대해 상담합니다. 원하는 디자인 스타일, 필요한 기능, 예산 등을 파악하여 최적의 플랜을 제안해 드립니다."
                            />
                            <ProcessStep
                                number="2"
                                title="디자이너 배정 및 기획"
                                description="계약 후 전담 디자이너가 배정됩니다. 카카오톡을 통한 1:1 소통으로 사이트 구조와 디자인 방향을 함께 기획합니다."
                                isLast={true}
                            />
                        </div>

                        <div className="flex flex-col">
                            <ProcessStep
                                number="3"
                                title="디자인 작업"
                                description="기획 내용을 바탕으로 웹사이트 디자인 작업을 진행합니다. 작업 진행 상황을 실시간으로 공유하여 원하는 방향으로 진행되고 있는지 확인하실 수 있습니다."
                            />
                            <ProcessStep
                                number="4"
                                title="콘텐츠 구성"
                                description="제공해주신 콘텐츠(텍스트, 이미지 등)를 웹사이트에 배치합니다. 필요한 경우 콘텐츠 구성에 대한 조언도 함께 제공해 드립니다."
                                isLast={true}
                            />
                        </div>

                        <div className="flex flex-col">
                            <ProcessStep
                                number="5"
                                title="검수 및 수정"
                                description="완성된 웹사이트를 검수하고 피드백을 반영하여 수정합니다. 디자인, 기능, 콘텐츠 등 모든 부분을 꼼꼼히 확인합니다."
                            />
                            <ProcessStep
                                number="6"
                                title="사이트 오픈 및 교육"
                                description="최종 승인 후 웹사이트를 오픈합니다. 관리 방법에 대한 무료 교육을 제공하여 직접 웹사이트를 운영하실 수 있도록 도와드립니다."
                                isLast={true}
                            />
                        </div>
                    </div>
                </div>

                <div className="mx-auto mt-12 max-w-md text-center">
                    <p className="text-base font-semibold text-blue-600 dark:text-blue-400">
                        라이트/스탠다드 플랜 기준 7일 이내, 프리미엄 플랜 기준 10일 이내 완성
                    </p>
                </div>
            </Container>
        </section>
    )
}