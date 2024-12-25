import '@/app/(app)/styles.css'
import { Providers } from './providers'
import { Inter } from 'next/font/google'
import { twMerge } from 'tailwind-merge'
import { instrumentSans } from '@/fonts'
import { Spinner } from '@nextui-org/react'
import dynamic from 'next/dynamic'

const inter = Inter({
  subsets: ['latin'],
})

const Header = dynamic(() => import('@/components/Header'), { loading: () => <Spinner /> })
const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <Spinner />,
})
const Extended = dynamic(() => import('@/components/Home/Extended'), {
  loading: () => <Spinner />,
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-bg_gray">
      <body className={twMerge(`${inter.className} ${instrumentSans.variable}`, 'relative')}>
        <div className="mx-auto max-w-[2560px] min-w-[375px] px-3 md:px-10 pb-5 relative">
          <Header />
          <Providers>{children}</Providers>
          <Footer />
        </div>
        <Extended />
      </body>
    </html>
  )
}
