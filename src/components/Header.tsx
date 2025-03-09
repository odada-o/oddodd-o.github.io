'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import {
    Popover,
    PopoverButton,
    PopoverBackdrop,
    PopoverPanel,
} from '@headlessui/react'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'

function MobileNavLink({
                           href,
                           children,
                       }: {
    href: string
    children: React.ReactNode
}) {
    return (
        <PopoverButton as={Link} href={href} className="block w-full p-2">
            {children}
        </PopoverButton>
    )
}

function MobileNavIcon({ open }: { open: boolean }) {
    return (
        <svg
            aria-hidden="true"
            className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
            fill="none"
            strokeWidth={2}
            strokeLinecap="round"
        >
            <path
                d="M0 1H14M0 7H14M0 13H14"
                className={clsx(
                    'origin-center transition',
                    open && 'scale-90 opacity-0',
                )}
            />
            <path
                d="M2 2L12 12M12 2L2 12"
                className={clsx(
                    'origin-center transition',
                    !open && 'scale-90 opacity-0',
                )}
            />
        </svg>
    )
}

function MobileNavigation() {
    return (
        <Popover>
            <PopoverButton
                className="relative z-10 flex h-8 w-8 items-center justify-center ui-not-focus-visible:outline-none"
                aria-label="Toggle Navigation"
            >
                {({ open }) => <MobileNavIcon open={open} />}
            </PopoverButton>
            <PopoverBackdrop
                transition
                className="fixed inset-0 bg-slate-300/50 duration-150 data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in"
            />
            <PopoverPanel
                transition
                className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5 data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:duration-150 data-[leave]:duration-100 data-[enter]:ease-out data-[leave]:ease-in"
            >
                <MobileNavLink href="#features">Features</MobileNavLink>
                <MobileNavLink href="#testimonials">Testimonials</MobileNavLink>
                <MobileNavLink href="#pricing">Pricing</MobileNavLink>
                <hr className="m-2 border-slate-300/40" />
                <MobileNavLink href="/login">Sign in</MobileNavLink>
            </PopoverPanel>
        </Popover>
    )
}

const navigationLinks = [
    { href: '#features', label: '기능소개' },
    { href: '#pricing', label: '가격안내' },
    { href: '#process', label: '제작과정' },
]

export function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        // 초기 로드 시 스크롤 위치 확인
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    return (
        <header className={clsx(
            "fixed top-0 left-0 right-0 z-50 py-5 transition-all duration-300",
            scrolled ? "bg-white shadow-md py-3" : "bg-transparent"
        )}>
            <Container>
                <div className="relative z-50 flex justify-between">
                    <div className="flex items-center md:gap-x-12">
                        <Link href="#" aria-label="Home">
                            <Logo className="h-10 w-auto" />
                        </Link>
                    </div>

                    <nav className="md:gap-x-6 ml-auto mr-5">
                        <ul className="hidden md:flex">
                            {navigationLinks.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className={clsx(
                                        "block font-medium text-md px-5 py-3 transition-all duration-300",
                                        scrolled ? "text-slate-800 hover:text-blue-600" : "text-slate-700 hover:text-slate-900"
                                    )}>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="flex items-center gap-x-5 md:gap-x-8">
                        <Button href="/register" color="blue">
              <span>
                제작 문의하기
              </span>
                        </Button>
                        <div className="-mr-1 md:hidden">
                            <MobileNavigation />
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    )
}