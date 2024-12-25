'use client'
import IcArrowDown from '@/assets/components/IcArrowDown'
import Menu from '@/assets/components/Menu'
import KGButton from '@/components/KGButton'
import { Button, Link, Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react'
import React, { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import LogoLight from '@/assets/components/Logo/LogoLight'
import { usePathname } from 'next/navigation'

const Links = [
  {
    title: 'The SuperApp Platform',
    subtitle: [
      { name: 'mChat', route: '/technologies/mChat' },
      { name: 'mSign', route: '/technologies/mSign' },
      { name: 'mPay', route: '/technologies/mPay' },
      { name: 'mSecure', route: '/technologies/mSecure' },
    ],
  },
  { title: 'Technologies', subtitle: null },
  { title: 'Security', subtitle: null },
  { title: 'Resources', subtitle: [] },
  { title: 'Pricing', subtitle: null },
]

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false)
  const pathname = usePathname()
  const colors =
    pathname === '/' ? { text: 'white', logo: 'white' } : { text: '#11244A', logo: '#2962F6' }
  return (
    <header className="bg-transparent flex justify-end items-center px-1 py-[17px] md:px-0 md:py-5">
      <Link
        href="/"
        className="absolute left-4 top-5 md:top-[23px] md:left-10 z-[100] w-20 2md:w-min"
      >
        <LogoLight colors={colors} />
      </Link>
      <div className="flex shrink-0 gap-7 3xl:gap-[104px] items-center">
        <nav className="hidden 1xl:flex xl:gap-4 1xl:gap-5 py-[11px] z-[100]">
          {Links.map((link) =>
            link.subtitle && link.subtitle.length ? (
              <Popover
                placement="bottom"
                key={link.title}
                backdrop="transparent"
                triggerScaleOnOpen={false}
              >
                <PopoverTrigger>
                  <div
                    className={twMerge(
                      'group flex shrink-0 gap-1 items-center text-system-_80 hover:cursor-pointer',
                      'text-sm leading-[1.29] hover:text-hover-primary_blue',
                      link.title === 'The SuperApp Platform' &&
                        'bg-gradientText bg-gradient-to-r from-[#3EBFFC] via-[#696EF5] to-[#CA80F4] font-bold animate-gradientWave',
                    )}
                    style={{ backgroundSize: '200%' }}
                  >
                    <span>{link.title}</span>
                    {link.subtitle && (
                      <span className="transition-transform duration-300 group-hover:-rotate-180 group-hover:text-hover-primary_blue">
                        <IcArrowDown />
                      </span>
                    )}
                  </div>
                </PopoverTrigger>
                <PopoverContent>
                  <div className="flex flex-col px-1 py-2 gap-2 w-[180px]">
                    {link.subtitle.map((sublink) => (
                      <Link href={sublink.route} key={sublink.name}>
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>
            ) : (
              <Link
                href=""
                key={link.title}
                className={twMerge(
                  'group flex shrink-0 gap-1 items-center text-system-_80',
                  'text-sm leading-[1.29] hover:text-hover-primary_blue',
                )}
              >
                <span>{link.title}</span>
                {link.subtitle && (
                  <span className="transition-transform duration-300 group-hover:-rotate-180 group-hover:text-hover-primary_blue">
                    <IcArrowDown />
                  </span>
                )}
              </Link>
            ),
          )}
        </nav>
        <nav className="hidden md:flex items-center gap-5">
          <KGButton
            text="KOBIL Ai"
            type="Ai"
            className="!pl-4 !pr-5 !py-[10px] !h-10"
            id="kobil-ai-button-clip"
            clipPathClassname="w-6 bg-bg_gray"
          />
          <KGButton
            text="Book a Demo"
            type="Tertiary"
            className="!pl-4 !pr-5 !py-[10px] !h-10"
            id="book-demo1-button-clip"
            clipPathClassname="w-6 bg-bg_gray"
          />
        </nav>
      </div>
      <Button
        isIconOnly
        aria-label="Menu"
        className="1xl:hidden md:ml-5 w-9 min-w-9 min-h-9 h-9 md:w-10 md:h-10"
        onClick={() => setOpenMenu(true)}
      >
        <Menu className="h-full w-full" />
      </Button>
    </header>
  )
}
