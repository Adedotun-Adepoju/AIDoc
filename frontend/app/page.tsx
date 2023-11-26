import Header from '@/components/header'
import SubHeader from '@/components/SubHeader'
import { AiDocLogo, BloodIcon, BotIcon, ChevronUpIcon, DnaIcon, LogoutIcon, SpecialistIcon, SunIcon, WeightIcon } from '@/components/icons'
import Image from 'next/image'
import How from '@/components/How'
import Features from '@/components/features'
import Why from '@/components/Why'
import GettingStarted from '@/components/Getting-started'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="bg-white">
      <Header />
      <SubHeader />
      <How />
      <Features />
      <Why />
      <GettingStarted />
      <Footer />
    </main>
  )
}
