import AI from '@/components/Technologies/mChat/AI';
import BuildsTrust from '@/components/Technologies/mChat/BuildsTrust'
import MChat from '@/components/Technologies/mChat/Hero'
import MoreThanChat from '@/components/Technologies/mChat/MoreThanChat'
import OneOneLimitless from '@/components/Technologies/mChat/OneOneLimitless'
import Unparalleled from '@/components/Technologies/mChat/Unparalleled'

export default function Page() {
  return (
    <main title="technologies-mchat" className="min-w-[688px]">
      <MChat />
      <BuildsTrust />
      <MoreThanChat />
      <OneOneLimitless />
      <Unparalleled />
      <AI/>
    </main>
  )
}
