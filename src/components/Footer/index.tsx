import EngineeredinGermany from '@/assets/components/EngineeredinGermany'
import LogoDark from '@/assets/components/Logo/LogoDark'
import { Link } from '@nextui-org/react'
import React, { Fragment } from 'react'
import { twJoin } from 'tailwind-merge'

const footerLinks1 = [
  {
    title: 'KOBIL',
    links: [
      { name: 'Technologies', href: '' },
      { name: 'Security & Compliance', href: '' },
      { name: 'About Us', href: '' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { name: 'KOBIL OneAPP4All™', href: '' },
      { name: 'KOBIL OneID4All™', href: '' },
    ],
  },
  {
    title: 'Industry Solutions',
    links: [
      { name: 'Fiancial Services', href: '' },
      { name: 'Public Administration', href: '' },
      { name: 'Healthcare', href: '' },
      { name: 'Insurance', href: '' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Pricing', href: '' },
      { name: 'Blog', href: '' },
    ],
  },
]

const footerLinks2 = [
  { name: 'Privacy', href: '' },
  { name: 'Imprint', href: '' },
  { name: 'Terms of Use', href: '' },
  { name: 'ISMS Policy', href: '' },
  { name: 'RMA', href: '' },
  { name: 'Compliance', href: '' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const allRightReserved = `© ${currentYear} KOBIL. All Rights Reserved`
  return (
    <footer className="bg-system-_100 rounded-[18px] flex flex-col mt-5 p-[30px] md:p-10 md:pt-16">
      <div className="grid grid-cols-1 md:grid-cols-[1fr,1.2056fr] gap-y-[42px] md:gap-0">
        <div className="flex flex-col gap-[42px] w-min">
          <LogoDark />
          <EngineeredinGermany />
        </div>
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:flex gap-x-5 gap-y-11">
          {footerLinks1.map((obj, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col gap-5 w-[calc((100%-60px)/2)] lg:w-[calc((100%-60px)/4)] min-w-[160px] xl:min-w-[197px]"
            >
              <h3 className="font-instrument-sans-700 text-white text-sm leading-[1.14286]">
                {obj.title}
              </h3>
              <nav className="flex flex-col gap-4">
                {obj.links.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="text-text_gray text-sm leading-[1.14286]"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </div>
      <div className="h-[1px] bg-invert-white20 my-[30px] md:mt-[6.25%] md:mb-[3.13%]" />
      <div className="flex flex-col gap-8 md:flex-row md:justify-between items-center">
        <h5 className="text-text_gray text-sm leading-[1.14286]">{allRightReserved}</h5>
        <nav className="flex flex-wrap w-[246px] 2md:w-auto items-center gap-x-2 text-text_gray shrink-0">
          {footerLinks2.map((link, index) => (
            <Fragment key={link.name}>
              <Link href={link.href} className="text-sm leading-[1.71429] 2md:leading-[1.14286]">
                {link.name}
              </Link>
              {index + 1 !== footerLinks2.length && (
                <div
                  className={twJoin(
                    'text-sm leading-[1.71429] 2md:leading-[1.14286]',
                    index === 2 && 'hidden 2md:block',
                  )}
                >
                  |
                </div>
              )}
            </Fragment>
          ))}
        </nav>
      </div>
    </footer>
  )
}
