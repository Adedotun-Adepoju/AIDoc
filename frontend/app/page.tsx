import Header from '@/components/header'
import SubHeader from '@/components/SubHeader'
import { AiDocLogo, BloodIcon, BotIcon, ChevronUpIcon, DnaIcon, LogoutIcon, SpecialistIcon, SunIcon, WeightIcon } from '@/components/icons'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="bg-white">
      <Header />
      <SubHeader />
    </main>
  )
}
