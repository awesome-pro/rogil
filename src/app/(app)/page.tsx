import dynamic from 'next/dynamic'
import { Spinner } from '@nextui-org/react'

const Hero = dynamic(() => import('@/components/Home/Hero'), { loading: () => <Spinner /> })
const OurTechnologies = dynamic(() => import('@/components/Home/OurTechnologies'), {
  loading: () => <Spinner />,
})
const MainImage = dynamic(() => import('@/components/Home/MainImage'), {
  loading: () => <Spinner />,
})
const WhatIsKobilGo = dynamic(() => import('@/components/Home/WhatIsKobilGo'), {
  loading: () => <Spinner />,
})
const OurSolutions = dynamic(() => import('@/components/Home/OurSolutions'), {
  loading: () => <Spinner />,
})
const IndustrySolutions = dynamic(() => import('@/components/Home/IndustrySolutions'), {
  loading: () => <Spinner />,
})
const SecurityAndCompliance = dynamic(() => import('@/components/Home/SecurityAndCompliance'), {
  loading: () => <Spinner />,
})
const Ceo = dynamic(() => import('@/components/Home/Ceo'), {
  loading: () => <Spinner />,
})
const Cta = dynamic(() => import('@/components/Home/Cta'), {
  loading: () => <Spinner />,
})

export default function Page() {
  return (
    <main title='home'>
      <MainImage />
      <Hero />
      <WhatIsKobilGo />
      <OurTechnologies />
      <OurSolutions />
      <IndustrySolutions />
      <SecurityAndCompliance />
      <Ceo />
      <Cta />
    </main>
  )
}
